import React from "react";
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem"; // Corrected import: "CityItem" instead of "Cityitem"
import Message from "./Message";
import { useCities } from "../context/CitiesContext";
export default function CountryList() {
  const { cities, loading } = useCities();
  if (loading) return <Spinner />;
  // Check if cities is undefined or not an array
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
