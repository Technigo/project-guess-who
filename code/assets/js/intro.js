const playerNameInput = document.getElementById("player-name");

const getPlayerName = () => {
  const playerName = playerNameInput.value;
  localStorage.setItem("playerName", playerName);
  playerNameInput.value = "";
};
