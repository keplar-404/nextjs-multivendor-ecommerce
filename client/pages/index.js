import Header from "../components/header/Header";
import Carosel from "../components/mainSection/Carosel";
import Discount from "../components/mainSection/Discount4";
import FeatureProducts from "../components/mainSection/Featured Products 3/FeatureProducts3";
import Footerc from "../components/mainSection/Footer";
import Services from "../components/mainSection/Services2";
import SpecialOffer from "../components/mainSection/special offer 5/Specialoffer5";
import Trustus from "../components/mainSection/UpcommingEvents6";
function Home() {
  return (
    <>
    <div className="bg-slate-50">

      <Header />
      <Carosel/>
      <Services/>
      <FeatureProducts/>
      <Discount/>
      <SpecialOffer/>
      <Trustus/>
      <Footerc/>
    </div>
    </>
  );
}

export default Home;
