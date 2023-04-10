import React, { useState } from "react";
import { postData } from "../serverApi/server";
import TwoColumnsLayout from "../components/TwoColumnsLayout";

export function Science() {
  return (
    <div>
      <h1>Science News</h1>
      <TwoColumnsLayout />
    </div>
  );
}
export default Science;
