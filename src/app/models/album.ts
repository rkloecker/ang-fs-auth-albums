export interface Album {
  id?:string;
  title?:string;
  artist?: string;
  year?: number;
  rating?: number;
  label?: string;
  user: any;
}