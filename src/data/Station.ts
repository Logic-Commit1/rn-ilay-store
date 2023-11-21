import { BusinessHour } from 'data/BusinessHour';
import { Facility } from 'data/Facility';
import { Fuel } from 'data/Fuel';
import { getPrices } from 'data/Price';
import { supabase } from 'utils/supabaseClient';

export interface Station {
  id: string;
  name: string;
  company: string;
  streetAddress: string;
  city: string;
  province: string;
  zipCode: string;
  email: string;
  phoneNumber: string;
  location: {
    latitude: number;
    longitude: number;
  };
  active: boolean;
  createdAt: string;
  updatedAt: string;
  businessHours: BusinessHour[];
  facilities: Facility[];
  fuels: Fuel[];
}

export const stationCompanies: string[] = [
  'Caltex',
  'Clean Fuel',
  'Flying V',
  'Fuel Express',
  'Gasso',
  'Petro Gazz',
  'Petron',
  'Phoenix',
  'PTT',
  'Seaoil',
  'Shell',
  'Total',
  'Unioil',
  'Others'
];

export const getStations = async (): Promise<Station[]> => {
  const { data, error } = await supabase
    .from('stations')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    throw error;
  }

  return data || [];
};

export const getStationById = async (id: string): Promise<Station | null> => {
  const { data: stationsData, error: stationsError } = await supabase
    .from('stations')
    .select('*')
    .eq('id', id);

  const { data: businessHoursData, error: businessHoursError } = await supabase
    .from('businessHours')
    .select('*')
    .eq('stationId', id);

  const { data: facilitiesData, error: facilitiesError } = await supabase
    .from('facilities')
    .select('*')
    .eq('stationId', id)
    .order('name', { ascending: true });

  const { data: fuelsData, error: fuelsError } = await supabase
    .from('fuels')
    .select('*')
    .eq('stationId', id)
    .order('octane', { ascending: true });

  if (stationsError || businessHoursError || facilitiesError || fuelsError) {
    throw stationsError || businessHoursError || facilitiesError || fuelsError;
  }

  const stationData = stationsData?.[0];
  const businessHours = businessHoursData || [];
  const facilities = facilitiesData || [];
  const fuels: Fuel[] = [];

  for (const fuel of fuelsData || []) {
    const prices = await getPrices(fuel.id);

    fuels.push({ ...fuel, prices: prices || [] });
  }

  const station: Station = {
    ...stationData,
    businessHours,
    facilities,
    fuels
  };

  return station;
};

export const addStation = async (station: Station): Promise<string> => {
  const { data, error } = await supabase.from('stations').insert([station]);

  if (error) {
    throw error;
  }

  return data || '';
};

export const updateStation = async (
  id: string,
  updates: Partial<Station>
): Promise<void> => {
  await supabase.from('stations').update(updates).eq('id', id);
};

export const deleteStation = async (id: string): Promise<void> => {
  await supabase.from('stations').delete().eq('id', id);
};

export const isStationOpen = (station: Station): boolean => {
  const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
  const businessHour = station.businessHours.find(
    (hour) => hour.day.toLowerCase() === currentDay.toLowerCase()
  );
  if (!businessHour) {
    return false;
  }
  return isDayWithinBusinessHours(businessHour, new Date());
};

export const isDayWithinBusinessHours = (
  day: BusinessHour,
  currentTime: Date
): boolean => {
  const { openingTime, closingTime } = day;
  const startTime = new Date(currentTime);
  const endTime = new Date(currentTime);
  startTime.setHours(
    getHoursAndMinutes(openingTime)[0],
    getHoursAndMinutes(openingTime)[1]
  );
  endTime.setHours(
    getHoursAndMinutes(closingTime)[0],
    getHoursAndMinutes(closingTime)[1]
  );
  return currentTime >= startTime && currentTime <= endTime;
};

const getHoursAndMinutes = (timeString: string) => {
  const date = new Date(`01/01/2000 ${timeString}`);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return [hours, minutes];
};
