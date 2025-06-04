export interface Chef {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  distance: number;
  image: string;
}

export interface ChefProps {
  chefs: Chef[]
}