import { supabase } from '../lib/supabase';

export interface Order {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  total_price: number;
  re_order: boolean | null;
  created_at: string;
}

export const saveOrder = async (order: Order): Promise<void> => {
  await supabase.from('user_orders').upsert([order]);
};

export const getOrderById = async (id: string): Promise<Order | null> => {
  const { data, error } = await supabase
    .from('user_orders')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching order:', error);
    return null;
  }

  return data as Order;
};

export const deleteOrder = async (id: string): Promise<void> => {
  await supabase.from('user_orders').delete().eq('id', id);
};

