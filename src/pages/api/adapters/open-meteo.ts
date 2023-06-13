import axios from 'axios';

export interface Forecast {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: DailyUnits;
  daily: Daily;
}

export interface Daily {
  time: Date[];
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

export interface DailyUnits {
  time: string;
  weathercode: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
}

const openMeteoAdapter = axios.create({
  baseURL: 'https://api.open-meteo.com/v1',
});

openMeteoAdapter.interceptors.request.use((config) => {
  return config;
});

export { openMeteoAdapter };
