// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';




// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// export class MapContainer extends Component {


//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: -1.2884,
//             lng: 36.8233
//           }
//         }
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyD73G_V7nBxKCHf-sJFHSH7T4lC1KjyLXg'
// })(MapContainer);
import React from 'react';
import { useState,useEffect } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

function MapContainer(props) {
    const [latitude,setlatitude] = useState(null)
    const [longitude,setLongitude] = useState(null)
    const [erro,seterror] = useState(null)
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            position =>{
                setlatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            },
            erro=>{
               seterror(erro)
            }
            
        )
        console.log(latitude,longitude);
    })

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{ lat: 9.9745792, lng: 76.3133952 }}
    />
  );
}

export default GoogleApiWrapper({
  apiKey:'AIzaSyD73G_V7nBxKCHf-sJFHSH7T4lC1KjyLXg'
})(MapContainer);
