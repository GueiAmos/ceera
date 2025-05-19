
import { supabase } from '@/integrations/supabase/client';
import { Activity, ActivityImage } from '../models/Activity';

export const getActivities = async (): Promise<Activity[]> => {
  const { data, error } = await supabase
    .from('activities')
    .select('*')
    .order('date', { ascending: false });
    
  if (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
  
  // Transform the data to match the Activity interface
  return (data || []).map(item => ({
    id: item.id,
    title: item.title,
    date: item.date,
    time: item.time,
    location: item.location,
    author: item.author,
    category: item.category as 'actualites' | 'comptes-rendus' | 'evenements',
    excerpt: item.excerpt,
    content: item.content,
    coverImage: item.coverimage, // Note: mapping coverimage to coverImage
    images: [] // Initialize with empty array, will be populated when needed
  }));
};

export const getActivityById = async (id: string): Promise<Activity | null> => {
  // First, get the activity
  const { data: activity, error: activityError } = await supabase
    .from('activities')
    .select('*')
    .eq('id', id)
    .single();
    
  if (activityError) {
    console.error('Error fetching activity:', activityError);
    throw activityError;
  }
  
  if (!activity) return null;
  
  // Then, get the images for this activity
  const { data: images, error: imagesError } = await supabase
    .from('activity_images')
    .select('*')
    .eq('activityid', id)
    .order('created_at', { ascending: true });
    
  if (imagesError) {
    console.error('Error fetching activity images:', imagesError);
    throw imagesError;
  }
  
  // Transform the images to match the ActivityImage interface
  const formattedImages = (images || []).map(img => ({
    id: img.id,
    activityId: img.activityid,
    src: img.src,
    caption: img.caption,
    created_at: img.created_at
  }));
  
  // Combine the activity with its images
  return {
    id: activity.id,
    title: activity.title,
    date: activity.date,
    time: activity.time,
    location: activity.location,
    author: activity.author,
    category: activity.category as 'actualites' | 'comptes-rendus' | 'evenements',
    excerpt: activity.excerpt,
    content: activity.content,
    coverImage: activity.coverimage,
    images: formattedImages
  };
};

export const getActivityImages = async (activityId: string): Promise<ActivityImage[]> => {
  const { data, error } = await supabase
    .from('activity_images')
    .select('*')
    .eq('activityid', activityId)
    .order('created_at', { ascending: true });
    
  if (error) {
    console.error('Error fetching activity images:', error);
    throw error;
  }
  
  // Transform the data to match the ActivityImage interface
  return (data || []).map(img => ({
    id: img.id,
    activityId: img.activityid,
    src: img.src,
    caption: img.caption,
    created_at: img.created_at
  }));
};
