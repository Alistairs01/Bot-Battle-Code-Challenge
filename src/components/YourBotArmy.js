import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots, onDischargeBot, onSelectBot}) {
  //your bot army code here...
const IamRendering = (botId) => {
  return bots.some((bot) => bot.id === botId)
};
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map(bot => (
            <BotCard key={bot.id} bot={bot} 
            onDischarge={onDischargeBot} 
            onSelect={onSelectBot}
            IamRendering={IamRendering(bot.id)}/>
          ))}
          
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
