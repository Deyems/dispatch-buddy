import React, {useContext, useState} from "react";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import PlacesAutocomplete from "react-places-autocomplete";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import { Button, Form, Image, PageStyle, FieldLandingStyle, PlaceLandingStyle } from "../../Atoms";
import { Footer, NavBar } from "../../Molecules";
import HomepageStyle from "./Homepage.style";
import Image1 from "../../../assets/images/image1.png";
import Location from "../../../assets/icons/location.svg";
import { AuthContext, useAuth } from "../../../context/AuthProvider";
import { Card } from "../../Molecules";
import { getAllRiders } from "../../../api/auth";

function Homepage() {
  const [{isAuthenticated}] = useAuth();
  const [, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(isAuthenticated, 'state at Landing Page');

const [pickUpAddress, setPickUpAddress] = useState("");
const [deliveryAddress, setDeliveryAddress] = useState("");

const [pickUpLocations, setPickUpLocations] = useState([]);
const [deliveryLocations, setDeliveryLocations] = useState([]);

const handlePickUpChange = (pickUpAddress) => {
    try {
      setPickUpAddress(pickUpAddress)
    } catch (error) {
        console.log('Error', error);
    }
    
}

const handleDeliveryChange = (deliveryAddress) => {
  try {
    setDeliveryAddress(deliveryAddress)
  } catch (error) {
      console.log('Error', error);
  }
}

const handlePickUpSelect = async () => {
  try {
      const results = await geocodeByAddress(pickUpAddress);
      console.log(results, 'results....')
      const latLng = await getLatLng(results[0]);
      if(latLng){
        console.log(results[0].address_components[0].short_name, 'String address chosen');
        // setCoordinates(latLng)
        setPickUpLocations([...pickUpLocations].concat(`${results[0].address_components[0].short_name}`));
      }
  } catch (error) {
      //show error on page.
      console.log('Error', error);
  }
}

const handleDeliverySelect = async () => {
    try {
        const results = await geocodeByAddress(deliveryAddress);
        console.log(results, 'results....')
        const latLng = await getLatLng(results[0]);
        if(latLng){
            console.log(results[0].address_components[0].short_name, 'String address chosen');
            // setCoordinates(latLng)
            // const mapped = {[`${results[0].address_components[0].short_name}`]: latLng};
            setDeliveryLocations([...deliveryLocations].concat(`${results[0].address_components[0].short_name}`));
        }
    } catch (error) {
        //show error on page.
        console.log('Error', error);
    }
}

const handleClick = async (e) => {
  e.preventDefault();

  const fieldComplete = pickUpLocations.length <= 0 && deliveryLocations.length <= 0;
  if(fieldComplete){
    swal("Oops", 'All fields are required', "error", {
      button: false,
      timer: 3000,
    });
  }else {
    //Submit data to look for rider in that area.
    // GET_RIDER_START
    const response = await getAllRiders(0, pickUpLocations[0], deliveryLocations[0]);

    if (response?.data?.success) {
        dispatch({ type: "GET_RIDER_SUCCESS", payload: response?.data?.content });
        //Persist the data to localstorage for select riders route.
        localStorage.setItem('pickup', pickUpLocations[0]);
        localStorage.setItem('destination', deliveryLocations[0]);

        swal({
          text: "Rider Details Retrieved Successfully",
          icon: "success",
          button: false,
          timer: 3000,
        });
        return navigate("/select-rider");
      }else if (!response?.data?.success) {
        dispatch({ type: "GET_RIDER_ERROR", payload: response?.error });
        setPickUpLocations([]);
        setDeliveryLocations([]);
        swal("Oops", response?.data?.message, "error", {
          button: false,
          timer: 3000,
        });
      } else {
        dispatch({ type: "GET_RIDER_ERROR", payload: response?.error });
        setPickUpLocations([]);
        setDeliveryLocations([]);
        swal("Oops", response?.data?.message, "error", {
          button: false,
          timer: 3000,
        });
      }
  }
}

  return (
    <>
      <NavBar />
      <PageStyle>
        <HomepageStyle>
          <section className="intro">
            <div className="text">
              <h3>Your trusted delivery partner</h3>
              <p>
                We are flexible and dedicated logistics delivery service.
                Experience the fastest delivery service to your doorstep
              </p>
            </div>
            <div className="image-container">
              <Image
                src={Image1}
                alt="A Dispatch Buddy rider delivering a package"
              />
              <div className="shadow"></div>
            </div>
          </section>
          <section className="search-riders">
            <div className="text">
              <h4>For Users</h4>
              <h3>Delivery Solutions just for you</h3>
              <p>
                Quickly get a list of dispatch riders for your day to day
                delivery service
              </p>
            </div>
            <div className="locator">
              <Form locator>
                <PlaceLandingStyle>
                  <PlacesAutocomplete
                    value={pickUpAddress}
                    onChange={handlePickUpChange}
                    onSelect={handlePickUpSelect}
                    googleCallbackName="initOne"
                  >
                    {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                      <div>
                        <div className="forms">
                          {/* <h1>Select locations to cover</h1> */}
                          <Form className="form-style">
                          <FieldLandingStyle>
                            <label className="label">Pick Up</label>
                            <div className="input-wrapper">
                            <div className="icon">
                              <Image src={Location} alt={`${'Pick Up'}'s icon`} />
                            </div>
                            <input {...getInputProps({placeholder: 'Enter pick up location',
                            className: 'location-search-input'})}  />
                            </div>
                          </FieldLandingStyle>
                            {/* Use array length checker */}
                          {pickUpLocations.length > 0 && 
                            <div className="box-wrapper">
                              {pickUpLocations.map((item, idx) => 
                                <div key={idx} className="box">
                                  <span>{item}</span>
                                </div>
                              )}
                              
                            </div>}
                          </Form>
                          
                        </div>
                        <div>
                          {suggestions.map(suggestion => {
                            return (
                              <div {...getSuggestionItemProps(suggestion)}>
                                <Card label={suggestion.description}/>
                              </div>
                            );
                          })}

                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                  <PlacesAutocomplete
                    value={deliveryAddress}
                    onChange={handleDeliveryChange}
                    onSelect={handleDeliverySelect}
                    googleCallbackName="initOne_2"
                  >
                    {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                      <div>
                        <div className="forms">
                          <Form className="form-style">
                          <FieldLandingStyle>
                            <label className="label">Delivery Destination</label>
                            <div className="input-wrapper">
                            <div className="icon">
                              <Image src={Location} alt={`${'Delivery Destination'}'s icon`} />
                            </div>

                          <input {...getInputProps({placeholder: 'Enter delivery destination',
                            className: 'location-search-input'})}  />
                            </div>
                            </FieldLandingStyle>
                            {/* Use array length checker */}
                          {deliveryLocations.length > 0 && 
                            <div className="box-wrapper">
                              {deliveryLocations.map((item, idx) => 
                                <div key={idx} className="box">
                                  <span>{item}</span>
                                </div>
                              )}
                              
                            </div>}
                          </Form>
                          
                        </div>
                        <div>
                          {suggestions.map(suggestion => {
                            return (
                              <div {...getSuggestionItemProps(suggestion)}>
                                <Card label={suggestion.description}/>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </PlaceLandingStyle>

                <Button fill type="button" onClick={handleClick}>Find riders</Button>
              </Form>
            </div>
          </section>
        </HomepageStyle>
      </PageStyle>
      <Footer />
    </>
  );
}

export default Homepage;
