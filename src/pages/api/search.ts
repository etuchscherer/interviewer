
import { NextApiRequest, NextApiResponse } from 'next';
import { GeoResults, openMeteoGeoAdapter } from './adapters/geocoding';
import { AxiosError } from 'axios';

/**
 * Handler function for the cities API.
 *
 * @param {NextApiRequest} req - The HTTP request object.
 * @param {NextApiResponse} res - The HTTP response object.
 * @returns {Promise<void>} - A promise that resolves once the response is sent.
 *
 * @example
 * // Request: GET /api/cities?name=London
 * handler(req, res);
 *
 * @param {string} req.query.name - The required name query parameter.
 * @param {number} req.query.count - The optional count query parameter.
 * @throws {Error} - Throws an error if the required query parameter is missing.
 *
 * @see https://open-meteo.com/en/docs/geocoding-api
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { name = '', count = 10 } = req.query;

  if (!name) {
    return res.status(400).json({ message: 'Missing name' });
  }

  try {
    const response = await openMeteoGeoAdapter.get<GeoResults>(`/search?name=${name}&count=${count}`)
    res.status(200).json(response.data);
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