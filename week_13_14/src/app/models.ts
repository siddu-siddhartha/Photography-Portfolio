// Shapes of the data used in the app
export interface Photo {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

export interface Booking {
  name: string;
  email: string;
  category: string;
  date: string;
  message: string;
}
