import React from "react";
import Header from "../header";
import styles from "./hero.module.css";

export default ({ siteMetadata, headline, textline, cta, className }) => {
  return (
    <div
      className={`${className} ${styles.hero}`}>
      <div className="flex flex-col h-full justify-around m-auto p-4 max-w-2xl">
        <Header className="md:pt-8" siteMetadata={siteMetadata} />
        <div className="self-center w-full">
          <h1 className="mb-8 md:mb-16 text-4xl md:text-6xl">{headline}</h1>
          <div className="md:flex md:flex-row md:flex-shrink pl-4">
            <div className="md:w-1/2">
              <p className="text-2xl">{textline}</p>
            </div>
            <div className="border-t-2 md:border-t-0 md:border-r-2 border-purple md:pr-8 md:mr-8 md:w-1/2 mt-8 md:mt-0 pt-8 md:pt-0">
              {cta}
            </div>
          </div>
        </div>
        <div className="md:h-48" id="hero-spacer"/>
      </div>
    </div>
  );
};
