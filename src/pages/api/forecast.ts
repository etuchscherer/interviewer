import { AxiosError } from 'axios';
import { Forecast, openMeteoAdapter } from './adapters/open-meteo';
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Handler function for the returning a weather forecast.
 *
 * @param {NextApiRequest} req - The HTTP request object.
 * @param {NextApiResponse} res - The HTTP response object.
 * @returns {Promise<void>} - A promise that resolves once the response is sent.
 *
 * @example
 * // Request: GET /api/forecast?latitude=52.52&longitude=13.41
 * handler(req, res);
 *
 * @param {string} req.query.lat - The required latitude query parameter.
 * @param {number} req.query.lon - The required longitude query parameter.
 * @param {number} req.query.localTimezone - The required longitude query parameter.
 * @throws {Error} - Throws an error if any required query parameter is missing.
 *
 * @see https://open-meteo.com/en/docs/geocoding-api
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { lat = 0, lon = 0, localTimezone = '' } = req.query;

  if (!localTimezone) {
    throw new Error('Missing localTimezone');
  }

  if (!lat || !lon) {
    return res.status(400).json({ message: 'Invalid lat or lon' });
  }

  try {
    const { data } = await openMeteoAdapter.get<Forecast>(`/forecast`, {
      params: {
        latitude: lat,
        longitude: lon,
        timezone: localTimezone,
        current_weather: 'true',
        temperature_unit: 'fahrenheit',
        windspeed_unit: 'mph',
        precipitation_unit: 'inch',
        daily: 'weathercode,temperature_2m_max,temperature_2m_min'
      },
    });
    console.log(data);
    res.status(200).json(data);
  } catch (error: unknown) {

    if (!isAxiosError(error)) {
      throw new Error('something strange happened');
    }

    console.log(error);
  }
}

function isAxiosError(error: unknown): error is AxiosError {
  return (error instanceof AxiosError);
}