import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://atkwzqdyjmkqyusmnjqh.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0a3d6cWR5am1rcXl1c21uanFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0OTU1NTIsImV4cCI6MjAxMjA3MTU1Mn0.OZncLnOMC6rDRk4tdOFY2K9YjMn09v8VaIg73UMQlOA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
});
