import axios from 'axios';

export interface GeoResults {
  results: GeoResult[];
}

export interface GeoResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id: number;
  admin3_id: number;
  admin4_id: number;
  timezone: string;
  population: number;
  postcodes: string[];
  country_id: number;
  country: string;
  admin1: string;
  admin2: string;
  admin3: string;
  admin4: string;
}

const openMeteoGeoAdapter = axios.create({
  baseURL: 'https://geocoding-api.open-meteo.com/v1/',
});

openMeteoGeoAdapter.interceptors.request.use((config) => {
  config.timeout = 10000;
  config.params = {
    ...config.params,
  };
  return config;
});

export { openMeteoGeoAdapter };
