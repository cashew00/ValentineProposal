import React from "react";
import kisses from "../kisses.gif";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={kisses} alt="Kisses" />
    {/* Personalized success messages */}
    <p className="App-text-success">
      Yasssssss !!! Muah muah muah <3
    </p>
    <p className="App-text-success">
      Come meet me fasttt. Missy ho raha hai 
    </p>
    
  </div>
);

export default Success;
