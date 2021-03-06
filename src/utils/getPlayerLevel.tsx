import Cookies from "js-cookie";

const getPlayerLvl = (): number => {
  const cookie = Cookies.get("caughtList");
  if (typeof cookie === "string") {
    const caughtList = JSON.parse(cookie);
    const caugthArray = caughtList.split(";");
    return Math.floor(caugthArray.length);
  } else return 1;
};
export default getPlayerLvl;
