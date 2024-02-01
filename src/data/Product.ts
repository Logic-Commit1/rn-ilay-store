import { supabase } from '../lib/supabase';

export interface Product {
  id: string;
  name: string;
  category: string;
  brand_name: string;
  image_url: string;
  stock: number;
  number_of_orders: number;
  price: number;
  weight: number;
}

export const getProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('brand_name', { ascending: false });

  if (error) {
    throw error;
  }
  return data || [];
};

export const saveProduct = async (product: Product): Promise<void> => {
  await supabase.from('products').upsert([product]);
};

export const getProductById = async (id: string): Promise<Product | null> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }

  return data as Product;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await supabase.from('products').delete().eq('id', id);
};
