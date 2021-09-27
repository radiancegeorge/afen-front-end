import { axios } from "axios-hook";
const url = "https://coindata.afengroup.com/data";

export const getTokenData = async () => {
  const { data } = await axios.get(url, {
    headers: {
      "content-type": "application/json",
    },
  });
  if (data) return data;
  return;
};
