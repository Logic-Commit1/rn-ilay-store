import { supabase } from '../lib/supabase';

/* export interface Favorite {
  id: string;
  stationId: string;
  driverId: string;
} */
export interface Product {
  id: string;
  name: string;
  category: string;
  brandName: string;
  image_url: string;
  stock: number;
  numberOfOrders: number;
  price: number;
  weight: number;
}

export const getProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('producs')
    .select('*')
    .order('brand_name', { ascending: false });

  if (error) {
    throw error;
  }
  return data || [];
};
/* export const getProductById = async () => {} */
