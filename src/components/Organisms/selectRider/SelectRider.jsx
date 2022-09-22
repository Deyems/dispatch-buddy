import React, { useEffect, useState, useCallback } from "react";
import { getAllRiders } from "../../../api/auth";
import { NavBar, Footer } from "../../Molecules";
import RiderHistoryCard from "../../Molecules/RiderHistoryCard/RiderHistoryCard";
import SelectRiderStyle from "./SelectRider.style";

function SelectRider() {
    const [dataOfRiders, setDataOfRiders] = useState([]);
    const pickup = localStorage.getItem('pickup');
    const destination = localStorage.getItem('destination');
    
    const loadRiders = useCallback(async () => {
      try {
        const response = await getAllRiders(0, pickup, destination);
        console.log(response, 'data from riders on Select Riders.... stuff...?>>>>');
        if (response?.data?.success) {
          setDataOfRiders(response?.data?.payload?.content);
        }
      } catch (err) {
        return {
          data: null,
          error: err,
        };
      }
    }, [destination, pickup])

    useEffect(() => {
      loadRiders();
    },[loadRiders])
    
    return (
    <>
      <NavBar />
      <SelectRiderStyle>
        <div className="banner">
          <h2>Select from the list of<br />Dispatch Riders</h2>
          <h3>We have them all just for you. Select a dispatch rider.</h3>
        </div>
        <div className="today">
        {dataOfRiders.length >= 0 ? (dataOfRiders?.map(
            (request, index) =>
             (<RiderHistoryCard rider={request} uuid={request?.uuid} key={index} />)
        )) : <>No riders found in the locations you selected!</>
        }
        </div>
      </SelectRiderStyle>
      <Footer />
    </>
  );
}

export default SelectRider;
