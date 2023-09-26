import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Countrys from "../Display_Data/countrys";
import Search from "../Search_Data/Search";
//! 1.fetching Data 2.Displaying Data 3.Removing Data 4.Search

const url = "https://restcountries.com/v3.1/all";

export default function FatchData() {
  const [countryData, setCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //filtering
  const [filterCountryData, setFilterCountryData] = useState([]);

  //* 1.fetching Data
  const fetchTheData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountryData(data); // Store original data in countryData
      setFilterCountryData(data); // Initialize filtered data with original data
      setIsLoading(false);
      setError(null);
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchTheData(url);
  }, []);

  //*3. Delete
  const handelChildData = (name) => {
    //value niye asbo from child ->Country
    //filterCountryData er data ka filter korbo . ekta ekta kore data nibo
    const filter = filterCountryData.filter(
      (country) => country.name.common != name
    );
    setFilterCountryData(filter); //updating
  };
  //*Searching values
  const handelSearchCountry = (searchValue) => {
    //Change searchValue to er
    // alert(searchValue);
    const valuE = searchValue.toLowerCase();
    const newCountries = countryData.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(valuE);
    });
    // alert(valuE);
    setFilterCountryData(newCountries);
  };
  return (
    <>
      <Search onSearchCountry={handelSearchCountry} />

      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      <Countrys
        passingData={filterCountryData}
        onPassingChildData={handelChildData}
      />
    </>
  );
}
