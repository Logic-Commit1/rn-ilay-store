import { supabase } from '../lib/supabase';


export interface User {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  avatar_url: string;
  total_completed_orders: number
}


export const saveUser = async (user: User): Promise<void> => {
  await supabase.from('users').upsert([user]);
};

export const getUserById = async (id: string): Promise<User | null> => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return data as User;
};

export const deleteUser = async (id: string): Promise<void> => {
  await supabase.from('users').delete().eq('id', id);
};

