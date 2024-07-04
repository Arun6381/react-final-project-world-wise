import React from "react";
import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./Cityitem"; // Corrected import: "CityItem" instead of "Cityitem"
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

export default function CityList() {
  const { cities, loading } = useCities();
  if (loading) return <Spinner />;
  // Check if cities is undefined or not an array
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
