import { useEffect, useContext, useState } from "react";
import { fetchCheckout } from "../../functionMp/functionMp";

export function MPButton() {
  const [loading, setLoading] = useState(true);
  // aqui se recibe el body
  
  //-----------------------

  useEffect(() => {
    if(!loading) fetchCheckout();
    setLoading(false)
  },[]);

  return (
  <>
  <div>Tittle</div>
    <div className="cho-container"></div>
  </>);
  
}