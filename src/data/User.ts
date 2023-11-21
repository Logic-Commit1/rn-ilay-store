import { supabase } from '../lib/supabase';

/* export interface Favorite {
  id: string;
  stationId: string;
  driverId: string;
} */
export interface User {
  id: string;
  email: string;
  displayName: string;
  photoUrl: string;
  createdAt: string;
  firebaseAuthUid: string;
}

export const saveUser = async (user: User): Promise<void> => {
  await supabase.from('drivers').upsert([user]);
};
/* 
export const getDriverById = async (id: string): Promise<Driver | null> => {
  const { data: drivers, error } = await supabase
    .from('drivers')
    .select('*')
    .eq('firebaseAuthUid', id);

  if (error) {
    throw error;
  }

  const driver = drivers?.[0];

  if (driver) {
    const { data: favorites, error: favoritesError } = await supabase
      .from('favorites')
      .select('*')
      .eq('driverId', driver.id);

    if (favoritesError) {
      throw favoritesError;
    }

    return {
      ...driver,
      favorites: favorites.map((favorite) => favorite.stationId) || []
    };
  }

  return null;
};

export const updateDriverFavorites = async (
  driverId: string,
  favorites: string[]
): Promise<void> => {
  // Delete existing favorites for the driver
  await supabase.from('favorites').delete().eq('driverId', driverId);

  // Insert new favorites for the driver
  const favoritesData: { driverId: string; stationId: string }[] =
    favorites.map((stationId) => ({
      driverId,
      stationId
    }));

  await supabase.from('favorites').upsert(favoritesData);
};

export const addToFavorites = async (
  driverId: string,
  stationId: string
): Promise<void> => {
  const favorite: { driverId: string; stationId: string } = {
    driverId,
    stationId
  };

  await supabase
    .from('favorites')
    .upsert([favorite], { onConflict: 'driverId' });
};

export const removeFromFavorites = async (
  driverId: string,
  stationId: string
): Promise<void> => {
  await supabase
    .from('favorites')
    .delete()
    .eq('driverId', driverId)
    .eq('stationId', stationId);
};

export const deleteDriver = async (id: string): Promise<void> => {
  await supabase.from('drivers').delete().eq('id', id);
};
 */
