import * as React from "react"
import './city.css'
import Link from "next/link";
import { GeoResult } from "@/pages/api/adapters/geocoding";

interface CityListProps {
  cities: GeoResult[];
}

function CityResult({ city }: { city: GeoResult }) {

  const cityName = city.name.replace(/\s/g, '-').toLowerCase();
  const adminName = (city.admin1 || city.country || '').replace(/\s/g, '-').toLowerCase();

  return (
    <Link href={`/city/${cityName}/${adminName}?lat=${city.latitude}&lon=${city.longitude}&co=${city.country}`} className="city mt-4">
      <h3 className="text-lg font-semibold">{city.name}</h3>
      <p className="text-gray-600">{city.admin1 || city.country}</p>
    </Link>
  )
}

export default function CityList({ cities = [] }: CityListProps) {

  return (
    <div className="city-results-wrapper">
      {cities.map(city => <CityResult city={city} key={city.id} />)}
    </div>
  )
}