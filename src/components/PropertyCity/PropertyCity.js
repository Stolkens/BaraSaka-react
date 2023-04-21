import { useState } from 'react';
import { useSelector } from 'react-redux';


const PropertyCity = () => {


  const properties = useSelector(state =>state.properties)
  
  const [property, setProperty] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const uniquePropertyCities = [...new Set(properties.map(property => property.city))];


  return (
    <form  onSubmit={handleSubmit}>
      <select name="properties" value={property} onChange={(e) => setProperty(e.target.value)}>
          <option value="">Miasto</option>
          {uniquePropertyCities.map(city => (
          <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </form>

  )
}

export default PropertyCity;