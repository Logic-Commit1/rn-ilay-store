import { supabase } from '../lib/supabase';

export interface Order {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  totalPrice: number;
  reOrder: boolean | null;
  createdAt: string;
}

/* export const saveUser = async (user: Product): Promise<void> => {
  await supabase.from('drivers').upsert([user]);
}; */

/* export const getProducts = async () => {}
export const getProductById = async () => {} */
