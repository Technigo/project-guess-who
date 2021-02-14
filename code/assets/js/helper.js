export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const selectSecretCharacter = (characters) => {
  const random = Math.floor(Math.random() * characters.length);
  return characters[random];
};
