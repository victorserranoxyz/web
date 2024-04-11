import React from "react";
import yourData from "../../data/portfolio.json";
import {InlineWidget} from "react-calendly";

const Calendly = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link ${!yourData.showCalendly && "hidden"}`}>
        <InlineWidget url={yourData.CalendlyLink} styles={{
  width: '100%',height: '700px'
}}/>
    </div>
  );
};

export default Calendly;
