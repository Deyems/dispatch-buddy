import { useEffect, useState, useCallback } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import MapStyle from "./maps.style";
import { PageStyle } from "../../Atoms";
import { Places } from "../../Molecules";

import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
  
  function Maps() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })
    
    const [address, setAddress] = useState("");
    const [coordinates, setCoordinates] = useState({
        lat: 6.465422,
        lng: 3.406448
    });
    const [locations, setLocations] = useState([]);

    const handleChange = (address) => {
        try {
            setAddress(address)
        } catch (error) {
            console.log('Error', error);
        }
        
    }
    
    const handleSelect = async () => {
        try {
            const results = await geocodeByAddress(address);
            console.log(results, 'results....')
            const latLng = await getLatLng(results[0]);
            if(latLng){
                console.log(results[0].address_components[0].short_name, 'String address chosen');
                setCoordinates(latLng)
                // const mapped = {[`${results[0].address_components[0].short_name}`]: latLng};
                setLocations([...locations].concat(`${results[0].address_components[0].short_name}`));
            }
        } catch (error) {
            //show error on page.
            console.log('Error', error);
        }
    }

    const removeHandler = useCallback((id) => {
        console.log(id, 'id of item selected')
        const newlocations = locations.filter((val, idx) => idx !== id);
        // setLocations(newlocations)
        console.log(newlocations, 'remaining locations');
    }, [locations])

    useEffect((id) => {
        removeHandler(id)
    }, [removeHandler])

    if (!isLoaded) {
        return "Loading...."
    }
    
    return (
        <PageStyle>
        <MapStyle>
        <div className="intro">
        <div className="image-container" position='absolute' left={0} top={0} h='100%' w='100%'>
            <GoogleMap 
                center={coordinates ? coordinates : {lat: 0, lng: 0}}
                zoom={15} 
                mapContainerStyle={{width:'500px', height:'500px'}}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}>
                {isLoaded}
                <Marker position={coordinates ? coordinates : {lat: 0, lng: 0}} />
            </GoogleMap>
            </div>
        
            <Places onChange={handleChange} removeHandler={removeHandler} onSelect={handleSelect} address={address} handleSetAddress={setAddress} locations={locations || []}/>
    </div>
    </MapStyle>
    </PageStyle>  
    )
  }
  
  export default Maps
