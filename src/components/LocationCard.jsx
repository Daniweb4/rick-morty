import React from 'react';
import './style/style.css'
const LocationCard = ({location}) => {
    console.log(location)
  return (
    <div className='location'>
        <h2 className='location_title'>{location?.name}</h2>
        <ul className='location_li'>
            <li className='location_item'><span className='location_item_span'>Type:</span>{location?.type}</li>
            <li className='location_item'><span className='location_item_span'>Dimension: </span>{location?.dimension}</li>
            <li className='location_item'><span className='location_item_span'>Population: </span>{location?.residents.length}</li>
        </ul>
    </div>
  )
}

export default LocationCard;