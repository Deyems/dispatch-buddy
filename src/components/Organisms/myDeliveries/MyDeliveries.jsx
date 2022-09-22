import React, { useEffect, useContext, useState } from "react";
import PageStyle from "../../Atoms/Page.style";
import { NavBar } from "../../Molecules";
import HistoryCard from "../../Molecules/HistoryCard/HistoryCard";
import MyDeliveriesStyle from "./MyDeliveries.style";
import { getAllRequests } from "../../../api/auth";
import { AuthContext } from "../../../context/AuthProvider";
import { isToday, isYesterday, parseISO } from "date-fns/";
import Modal from "react-modal";

import Ratings from "../ratings/Ratings";
Modal.setAppElement("#root");

function MyDeliveries() {
  const [, dispatch] = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    console.log(value);
  };

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
    setRating(0);
  }
  
  useEffect(() => {
    dispatch({ type: "GET_DELIVERIES_START" });

    async function loadDeliveries() {
      const apiResponse = await getAllRequests(0);
      if (apiResponse?.data?.success) {
        setRequests(apiResponse?.data?.payload?.content);
        dispatch({ type: "GET_DELIVERIES_SUCCESS", payload: apiResponse?.data?.payload?.content });
      }else if(!apiResponse?.data?.success){
        dispatch({ type: "GET_DELIVERIES_ERROR", payload: apiResponse?.error });
      } else {
        dispatch({ type: "GET_DELIVERIES_ERROR", payload: apiResponse?.error });
      }
    }
    loadDeliveries();
  }, [dispatch]);

  console.log(requests);
  
  let todaysRequests = requests?.filter(
    (request) =>
      (isToday(parseISO(request?.lastModifiedDate)) === true &&
        request?.status !== "PC") ||
      (isToday(parseISO(request?.createdDate)) === true &&
        request?.status !== "PC")
  );
  let yesterdaysRequests = requests?.filter(
    (request) =>
      (isYesterday(parseISO(request?.lastModifiedDate)) === true&&
        request?.status !== "PC") ||
      (isYesterday(parseISO(request?.createdDate)) === true&&
        request?.status !== "PC")
  );
  let others = requests?.filter(
    (request) =>
      isToday(parseISO(request?.lastModifiedDate)) === false &&
      isYesterday(parseISO(request?.lastModifiedDate)) === false &&
      isToday(parseISO(request?.createdDate)) === false &&
      isYesterday(parseISO(request?.createdDate)) === false &&
        request?.status !== "PC"
  );
  return (
    <>
      <NavBar />
      <MyDeliveriesStyle>
        <div className="banner">
          <h2>My Deliveries</h2>
        </div>
        <PageStyle id="deliveries">
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            className="mymodal"
            overlayClassName="myoverlay"
            closeTimeoutMS={500}
          >
            <Ratings
              rating={rating}
              handleRating={handleRating}
              toggleModal={toggleModal}
            />
          </Modal>
          {todaysRequests?.length >= 1 ? (
            <div className="today">
              <h5>Today</h5>
              {todaysRequests?.map((request, index) => (
                <HistoryCard
                  onShow={toggleModal}
                  delivery={request}
                  key={index}
                />
              ))}
            </div>
          ) : (
            <>
            <div className="today">
              <h5>Today</h5>
              You don't have any Requests today
            </div>
            </>
          )
          }
          {yesterdaysRequests?.length >= 1 ? (
            <div className="yesterday">
              <h5>Yesterday</h5>
              {yesterdaysRequests?.map((request, index) => (
                <HistoryCard
                  onShow={toggleModal}
                  delivery={request}
                  key={index}
                />
              ))}
            </div>
          ): (
            <>
            <div className="yesterday">
              <h5>Yesterday</h5>
              You didn't have any Requests yesterday
            </div>
            </>
          )}
          {others?.length >= 1 ? (
            <div className="previous">
              <h5>Older requests</h5>
              {others?.map((request, index) => (
                <HistoryCard
                  onShow={toggleModal}
                  delivery={request}
                  key={index}
                />
              ))}
            </div>
          ) : (
            <>
            <div className="previous">
              <h5>Older requests</h5>
              You have not any Requests Previously
            </div>
            </>
          ) }
        </PageStyle>
      </MyDeliveriesStyle>
    </>
  );
}

export default MyDeliveries;
