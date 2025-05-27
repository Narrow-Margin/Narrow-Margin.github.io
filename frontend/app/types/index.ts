export interface Issue {
  id: string;
  number: string;
  title: string;
  date: string;
  path: string;
}

export interface Article {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  path: string;
}

export interface Filmmaker {
  id: string;
  name: string;
  bio: string;
  imageUrl?: string;
  path: string;
  featured?: boolean;
}

export interface NavigationItem {
  title: string;
  path: string;
  number?: string;
}

export interface SubscriptionFormData {
  email: string;
  name?: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
