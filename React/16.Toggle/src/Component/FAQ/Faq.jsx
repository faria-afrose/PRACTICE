import React, { useState } from "react";
import style from "./faq.module.css";
import taggle from "../Toggle/taggle";
export default function Faq({ id, title, desc }) {
  const [toggle, setToggle] = useState(false);

  return (
    <article className={style.faq}>
      <div className={style.faqDiv}>
        <h4>{title}</h4>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "-" : "+"}
        </button>
      </div>
      {toggle && <p>{desc}</p>}
    </article>
  );
}
