import { useState, useEffect } from 'react';
import { supabase } from '~/lib/supabase';
import { Product } from '~/data/Product';

const HOTDOG_CATEGORY = 'hotdog';
const TOCINO_CATEGORY = 'tocino';
const NUGGETS_CATEGORY = 'nuggets';

export const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [hotdogProducts, setHotdogProducts] = useState<Product[] | null>(null);
  const [tocinoProducts, setTocinoProducts] = useState<Product[] | null>(null);
  const [nuggetsProducts, setNuggetsProducts] = useState<Product[] | null>(
    null
  );
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('products').select('*');
        if (error) {
          throw error;
        }
        if (data) {
          setProducts(data);

          // Extract unique categories
          const uniqueCategories = [
            ...new Set(data.map((item) => item.category))
          ];
          setCategories(uniqueCategories);

          const hotdogItems: Product[] = data.filter(
            (item) => item.category.toLowerCase() === HOTDOG_CATEGORY
          );
          const tocinoItems: Product[] = data.filter(
            (item) => item.category.toLowerCase() === TOCINO_CATEGORY
          );
          const nuggetsItems: Product[] = data.filter(
            (item) => item.category.toLowerCase() === NUGGETS_CATEGORY
          );
          setHotdogProducts(hotdogItems);
          setTocinoProducts(tocinoItems);
          setNuggetsProducts(nuggetsItems);
        } else {
          console.log('Data is null');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    loading,
    products,
    hotdogProducts,
    tocinoProducts,
    nuggetsProducts,
    categories
  };
};
