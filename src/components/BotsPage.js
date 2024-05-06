import React,{ useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  //start here with your code for step one
  const [bots , setBots] = useState([]);
  const [army , setArmy] = useState([]);
  const [selectBot , setSelectBot] = useState(null);
  const [showSpecs , setShowSpecs] = useState(false);

 useEffect(() => {
  fetch(`http://localhost:8002/bots`)
  .then(r => r.json())
  .then(data => setBots(data))
  .catch((error) => {console.error("Error fetching data:", error)
  });
}, []);
function handleSelectBot (bot) {
  setSelectBot(bot)
  setShowSpecs(true)
};
function handleAddToArmy () {
  if (selectBot) {

    if(!army.some(bot => bot.id === setSelectBot.id)) {
      setArmy([...army, selectBot])
  }
  setSelectBot(null)
  setShowSpecs(false)
}
};
function handleGoBack ()  {
  setSelectBot(null);
  setShowSpecs(false);
};
function handleDischargefromArmy (botId) {
  const updatedBots = army.filter(bot => bot.id !== botId)
  setArmy(updatedBots)

};

  return (
    <div>
      <YourBotArmy bots = {army}  onDischarge={handleDischargefromArmy} />
      {showSpecs ?(
        <BotSpecs bot={selectBot} onGoBack={handleGoBack} onAddToArmy={handleAddToArmy} />
      ) : (
      <BotCollection bots={bots} onSelectBot={handleSelectBot}  />
      )}
    </div>
  )
}

export default BotsPage;
