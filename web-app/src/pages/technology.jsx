import React, { useState } from "react";
import { postData } from "../serverApi/server";
import TwoColumnsLayout from "../components/TwoColumnsLayout";
const pageCategory = "technology";

export function Technology() {
  return (
    <div>
      <h1>Tech News</h1>
      <TwoColumnsLayout pageCategory={pageCategory} />
    </div>
  );
}
export default Technology;
