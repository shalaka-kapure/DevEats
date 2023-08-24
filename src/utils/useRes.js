import { useEffect, useState } from "react";

const useRes = () => {
  const [restaurants, setRestaurants] = useState([]);
  // const [restaurants, setRestaurants] = useState(resList); mapping data from the mock data
  const [filteredRes, setfilteredRes] = useState([]);
  const [resInfo, setresInfo] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    console.log("restaurants", restaurants);
    console.log("filteredRes", filteredRes);
  }, [restaurants, filteredRes]);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("Json", json);
    setresInfo(json?.data?.cards[2]?.data?.data);
    console.log("Json data", json?.data?.cards[2].card.card);
    console.log("restaurant data", json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);

    const restaurantsData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurants(restaurantsData);
    setfilteredRes(restaurantsData);
    console.log("Restaurant data fetched:", restaurantsData);
  }
  return [restaurants, filteredRes, setfilteredRes,resInfo];
};
export default useRes;
