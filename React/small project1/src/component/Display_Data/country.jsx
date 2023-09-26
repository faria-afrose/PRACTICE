import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import style from "./county.module.css";

export default function country(props) {
  //   const { data } = props;
  const { name, flags, capital, population, area } = props.data;
  const handelRemoveButton = (name) => {
    // alert(name);
    //onPassingChild@Data this is props from CountryS to country child
    props.onPassingChild2Data(name);
    //passing name to countryS
  };

  return (
    <article className={style.sizeReduce}>
      <Card>
        {/* //* 1.Displaying Data */}
        <img src={flags.png} alt={name.common} className={style.flag} />
        <div>
          <p>Name: {name.common}</p>
          <p>Capital: {capital}</p>
          <p>Population: {population}</p>
          <p>Area: {area}</p>
          <Button
            className={style.btn}
            onClick={() => {
              handelRemoveButton(name.common);
            }}
          >
            Remove country
          </Button>
        </div>
      </Card>
    </article>
  );
}
