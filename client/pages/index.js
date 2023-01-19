import Header from "../components/header/Header";
import Carosel from "../components/mainSection/Carosel";
import Services from "../components/mainSection/Services2";
function Home() {
  return (
    <>
    <div className="bg-slate-50">

      <Header />
      <Carosel/>
      <Services/>
    </div>
    </>
  );
}

export default Home;
