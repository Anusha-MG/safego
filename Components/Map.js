import { useEffect, useContext, useState } from 'react'
import mapboxGl from 'mapbox-gl'
//import { UberContext } from '../context/uberContext'

const style = {
    wrapper: `flex-1 h-full w-full`,
}

mapboxGl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  
const Map = () => {
    //const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        const map = new mapboxGl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/dark-v11',
          //center: [77.5742339,12.9774047],
          zoom: 18,
        })

        navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setCurrentLocation([longitude, latitude]);
      
              // Center the map on the current location
              map.setCenter([longitude, latitude]);
              console.log(latitude,longitude);
            },
            (error) => {
              console.error('Error getting current location:', error);
            }
          );

          return () => map.remove();

        // if (pickupCoordinates) {
        //     addToMap(map, pickupCoordinates)
        // }
      
        // if (dropoffCoordinates) {
        //     addToMap(map, dropoffCoordinates)
        // }
    
        // if (pickupCoordinates && dropoffCoordinates) {
        //     map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        //       padding: 400,
        //     })
        //   }
    
    }, [])
  
    // const addToMap = (map, coordinates) => {
    //     const marker1 = new mapboxGl.Marker().setLngLat(coordinates).addTo(map)
    // }
    
    return <div className={style.wrapper} id='map' />
}

export default Map