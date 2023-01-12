import { useEffect } from "react";
import axios from "axios";
function Home() {
  useEffect(()=> {
axios.get('http://127.0.0.1:5000').then((res)=> console.log( res.data ))
    })
  return (
    <>
      <p className="">Home page</p>
    </>
  );
}

export default Home;
