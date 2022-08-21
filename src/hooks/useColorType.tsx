export const useColorType = (nameType: string) => {
  let typeColor = "#E5D7D7";

  if (nameType === "fire") {
    typeColor = "#FF0000";
  } else if (nameType === "grass") {
    typeColor = "#10EE2F";
  } else if (nameType === "water") {
    typeColor = "#00B0F0";
  } else if (nameType === "bug") {
    typeColor = "#A8B820";
  } else if (nameType === "normal") {
    typeColor = "#A8A8A8";
  } else if (nameType === "poison") {
    typeColor = "#A040A0";
  } else if (nameType === "electric") {
    typeColor = "#F8D030";
  } else if (nameType === "ground") {
    typeColor = "#E0C068";
  } else if (nameType === "fairy") {
    typeColor = "#EE99AC";
  } else if (nameType === "fighting") {
    typeColor = "#C03028";
  } else if (nameType === "psychic") {
    typeColor = "#F85888";
  } else if (nameType === "rock") {
    typeColor = "#B8A038";
  } else if (nameType === "ghost") {
    typeColor = "#705898";
  } else if (nameType === "ice") {
    typeColor = "#98D8D8";
  } else if (nameType === "dragon") {
    typeColor = "#7038F8";
  } else if (nameType === "steel") {
    typeColor = "#B8B8D0";
  } else if (nameType === "dark") {
    typeColor = "#705848";
  } else if (nameType === "flying") {
    typeColor = "#A890F0";
  } else if (nameType === "shadow") {
    typeColor = "#705898";
  }

  return typeColor;
};
