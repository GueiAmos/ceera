
export interface Activity {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  author: string;
  category: 'actualites' | 'comptes-rendus' | 'evenements';
  excerpt: string;
  content: string;
  coverImage: string;
  images: ActivityImage[];
  created_at?: string;
}

export interface ActivityImage {
  id: string;
  activityId: string;
  src: string;
  caption: string;
  created_at?: string;
}
