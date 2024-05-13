import { useEffect, useState } from "react";
import { resList } from "../config";

const useRes = () => {
  // const [restaurants, setRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState(resList); //mapping data from the mock data
  const [filteredRes, setfilteredRes] = useState(resList);
  const [resInfo, setresInfo] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, [resList]);

  // useEffect(() => {
    console.log("restaurants", restaurants);
    console.log("filteredRes", filteredRes);
  // }, [restaurants, filteredRes]);
  
  console.log("resList", resList);
  async function getRestaurants() {
    // const data = await fetch(
    //   "https://www.swiggy.com/mapi/homepage/getCards?lat=23.2599333&lng=77.412615"
    // );
    // const json = await data.json();
    // console.log("Json", json);
    // setresInfo(json?.data?.cards[2]?.data?.data);
    // console.log("Json data", json?.data?.cards[2].card.card);
    // console.log("restaurant data", json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);

    // const restaurantsData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // setRestaurants(resList);
    // setfilteredRes(resList);
    // console.log("Restaurant data fetched:", restaurantsData);
    // console.log("restaurants", restaurants);
    // console.log("filteredRes", filteredRes);
  }
  return [restaurants, filteredRes, setfilteredRes,resInfo];
};
export default useRes;
