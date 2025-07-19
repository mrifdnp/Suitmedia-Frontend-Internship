export interface CardIdea {
  id: number;
  slug: string;
  title: string;
  content: string;
  published_at?: string;
  deleted_at?: string;
  created_at?: string;
  updated_at?: string;
  small_image?: {
    id: number;
    mime: string;
    file_name: string;
    url: string;
  }[];
  medium_image?: {
    id: number;
    mime: string;
    file_name: string;
    url: string;
  }[];
}

export type IdeaResponse = CardIdea[];
