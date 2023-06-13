'use client'

import React from 'react';
import axios from 'axios';
import { Forecast } from '@/pages/api/adapters/open-meteo';
import { useSearchParams } from 'next/navigation';
import Card from '@/components/Card/component';

interface Props {
  params: {
    slug: string;
    admin_slug: string;
  }
}

function City({ params }: Props) {
  const searchParams = useSearchParams();
  const lat = searchParams && searchParams.get('lat');
  const lon = searchParams && searchParams.get('lon');
  const { slug, admin_slug } = params;
  const [weatherData, setWeatherData] = React.useState<Forecast>();

  if (!lat || !lon) {
    throw new Error('Missing lat or lon');
  }

  React.useEffect(() => {
    const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    axios.get<Forecast>(`/api/forecast`, {
      params: {
        lat,
        lon,
        localTimezone,
      }
    })
      .then(({ data }) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto py-8">
      <Card>
        <h1 className="text-4xl font-bold mb-4 capitalize">{slug}</h1>
        <div className="text-lg mb-4">
          <p>Current Weather: {weatherData.daily.weathercode.toString()}</p>
          <p>Temperature: {weatherData.daily.temperature_2m_max.toString()}°F</p>
          {/* Add more weather data to display */}
        </div>
      </Card>
    </div>
  );
};

export default City;