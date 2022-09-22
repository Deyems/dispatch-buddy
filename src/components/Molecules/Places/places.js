import React, {useContext} from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { Form, Button } from "../../Atoms";
import { Card } from "../../Molecules";
import PlaceStyle from "./places.style";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { addLocations } from "../../../api/auth";
import { AuthContext } from "../../../context/AuthProvider";

export default function Places({onChange, onSelect, address, handleSetAddress, locations, removeHandler}) {
  const navigate = useNavigate();
  const [, dispatch] = useContext(AuthContext);
  
  const handleClick = async (e) => {
    try {
      e.preventDefault();
      dispatch({ type: "ADD_LOCATION_START" });
      // console.log(locations,'set in state values for submisstion')
      const apiResponse = await addLocations(locations);
      // console.log(apiResponse, 'RESPONSE at adding locations...');

      if (apiResponse?.data?.success) {
        dispatch({ type: "ADD_LOCATION_SUCCESS", payload: apiResponse?.data?.payload });
        swal("Successful!", `Your Preferences have been added. `, "success", {
          button: false,
          timer: 2000,
        });
        handleSetAddress("")
        navigate('/my_deliveries');
      }else if(!apiResponse?.data?.success){
        //Check again though
        dispatch({ type: "ADD_LOCATION_ERROR", payload: apiResponse?.data?.payload });
        swal("Error!", apiResponse?.data?.message, "error", {
          button: false,
          timer: 2000,
        });
      } else {
        //Check again too though
        dispatch({ type: "ADD_LOCATION_ERROR", payload: apiResponse?.error });
        swal("Error!", apiResponse?.data?.message || apiResponse?.error, "error", {
          button: false,
          timer: 2000,
        });
      }
    } catch (error) {
      console.log('error', error);
      swal("Oops", error?.message, "error", {
        button: false,
        timer: 3000,
      });
    }
    
  }

  return (
    
    <PlaceStyle>
      <PlacesAutocomplete
        value={address}
        onChange={onChange}
        onSelect={onSelect}
        googleCallbackName="initTwo"
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <div className="forms">
              <h1>Select locations to cover</h1>              
              <Form className="form-style">
              <input {...getInputProps({placeholder: 'Search Places ...',
                className: 'location-search-input'})}  />
                {/* Use array length checker */}
              {locations.length > 0 && 
                <div className="box-wrapper">
                  {locations.map((item, idx) => 
                    <div key={idx} className="box">
                      <span>{item}</span>
                      {/* <span onClick={removeHandler(idx)} className="closer">X</span> */}
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
            <Button className="btn-submit" fill onClick={handleClick}>Submit Location</Button>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </PlaceStyle>
  );
}