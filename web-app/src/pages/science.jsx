import TwoColumnsLayout from "../components/TwoColumnsLayout";

import Header from "../components/Header";
import Footer from "../components/Footer";

const pageCategory = "science";

export function Science() {
  return (
    <div>
      <Header />
      <TwoColumnsLayout pageCategory={pageCategory} />
      <Footer />
    </div>
  );
}

export default Science;
