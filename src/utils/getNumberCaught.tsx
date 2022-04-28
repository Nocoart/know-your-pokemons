import Cookies from "js-cookie";

const getNumberCaught = (): number => {
  const cookie = Cookies.get("caughtList");
  if (typeof cookie === "string") {
    const caughtList = JSON.parse(cookie);
    const caugthArray = caughtList.split(";");
    return Math.floor(caugthArray.length);
  } else return 0;
};

export default getNumberCaught;
