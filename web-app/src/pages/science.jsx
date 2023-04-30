import React, { useState } from "react";
import { postData } from "../serverApi/server";
import TwoColumnsLayout from "../components/TwoColumnsLayout";

const pageCategory = "science";

export function Science() {
  return (
    <div>
      <h1>Science News</h1>
      <TwoColumnsLayout pageCategory={pageCategory} />
    </div>
  );
}
export default Science;
