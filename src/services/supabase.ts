
import { createClient } from '@supabase/supabase-js';
import { Activity, ActivityImage } from '../models/Activity';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getActivities = async (): Promise<Activity[]> => {
  const { data, error } = await supabase
    .from('activities')
    .select('*')
    .order('date', { ascending: false });
    
  if (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
  
  return data || [];
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
    .eq('activityId', id)
    .order('created_at', { ascending: true });
    
  if (imagesError) {
    console.error('Error fetching activity images:', imagesError);
    throw imagesError;
  }
  
  // Combine the activity with its images
  return {
    ...activity,
    images: images || []
  };
};

export const getActivityImages = async (activityId: string): Promise<ActivityImage[]> => {
  const { data, error } = await supabase
    .from('activity_images')
    .select('*')
    .eq('activityId', activityId)
    .order('created_at', { ascending: true });
    
  if (error) {
    console.error('Error fetching activity images:', error);
    throw error;
  }
  
  return data || [];
};
