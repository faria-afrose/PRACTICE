import React, { useState } from "react";
import { faqsData } from "./data";
import Faq from "./Faq";
import style from "./faqs.module.css";
export default function FAQS() {
  const [faqs, setFaqs] = useState(faqsData);
  console.log(faqsData);
  return (
    <main className={style.container}>
      <section className={style.faqs}>
        <h1>
          <u>FAQS</u>
        </h1>
        {faqs.map((faq) => (
          <Faq key={faq.id} {...faq} />
        ))}
      </section>
    </main>
  );
}
