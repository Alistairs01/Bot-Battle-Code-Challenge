import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onSelectBot , onDischargeBot }) {
 
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
      {bots.map((bot) => (
         <BotCard key={bot.id}
          bot={bot} 
          onSelect={onSelectBot}
          onDischarge={onDischargeBot} />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
