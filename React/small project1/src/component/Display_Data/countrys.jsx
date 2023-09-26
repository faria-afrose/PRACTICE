import React from "react";
import Country from "./country";
import { v4 as uuidv4 } from "uuid";
import style from "./county.module.css";

export default function countrys(props) {
  return (
    <section className={style.countries}>
      {props.passingData.map((data) => {
        const newData = { data, id: uuidv4() };
        return (
          <Country
            {...newData}
            key={newData.id}
            //onPassingChildData this is props from parent to countryS

            onPassingChild2Data={props.onPassingChildData}
            //passing name to Parent FetchData
          />
        );
      })}
    </section>
  );
}
