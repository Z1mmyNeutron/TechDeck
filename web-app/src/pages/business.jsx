import React, { useState } from "react";
import { postData } from "../serverApi/server";
import TwoColumnsLayout from "../components/TwoColumnsLayout";
const pageCategory = "business";

<h1>Proof that login works</h1>;
export function Business() {
  return (
    <div>
      <h1>Business News</h1>
      <TwoColumnsLayout pageCategory={pageCategory} />
    </div>
  );
}
export default Business;
