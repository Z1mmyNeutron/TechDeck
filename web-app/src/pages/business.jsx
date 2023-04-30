import React, { useState } from "react";
import { postData } from "../serverApi/server";
import TwoColumnsLayout from "../components/TwoColumnsLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageCategory = "business";

export function Business() {
  return (
    <div>
      <Header />
      <TwoColumnsLayout pageCategory={pageCategory} />
      <Footer />
    </div>
  );
}
export default Business;
