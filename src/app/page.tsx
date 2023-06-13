'use client'

import * as React from "react"
import axios from "axios";
import './page.css';
import { GeoResult, GeoResults } from "@/pages/api/adapters/geocoding";
import { Card, CityList } from "@/components";
import BlurredBackground from "@/components/BlurredBackground/component";

const IndexPage: React.FC = () => {

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [cities, setCities] = React.useState<GeoResult[]>([]);
  const [textInputError, setTextInputError] = React.useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = inputRef.current?.value || '';

    if (text.length <= 1) {
      setTextInputError(true);
      return;
    }

    const { data } = await axios.get<GeoResults>(`/api/search?name=${text || ''}`);

    if (!data) {
      throw new Error('No data returned from API');
    }

    setCities(data.results);
  }

  return (
    <>
      <Card>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 font-body">Get the Latest Weather Forecast</h2>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-between">
          <input
            type="text"
            ref={inputRef}
            onChange={() => setTextInputError(false)}
            className={`bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-4 mb-4 md:mr-2 md:mb-0 ${!!textInputError ? 'vibrating' : ''}`}
            placeholder="Enter City"
          />
          <button type='submit' className="bg-accent hover:bg-secondary text-white py-2 px-4 rounded-md">
            Search
          </button>
        </form>

        {Boolean(cities.length) ? (
          <CityList cities={cities} />
        ) : null}
      </Card>
    </>
  );
}

export default IndexPage
