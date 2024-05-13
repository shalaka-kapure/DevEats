import { useState, useEffect } from "react";
import { MENU_DATA_URL } from "../config";

const useRestaurant = (id) => {
  const [resInfo, setResInfo] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getResInfo();
  }, []);

  console.log("resId", id)

  async function getResInfo() {
    const data = await fetch(MENU_DATA_URL + id);

    const json = await data.json();
    console.log(json.data);
    console.log(json?.data?.cards[2]);
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
    console.log("menu",
      Object.values(
        json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      )
    );
    setMenu(
      Object.values(
        json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      )
    );
  }
  return [resInfo, menu];
};

export default useRestaurant;
