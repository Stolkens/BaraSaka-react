import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './SearchForm.module.scss';

const PorpertyType = () => {


  const properties = useSelector(state =>state.properties)
  
  const [property, setProperty] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const uniquePropertyTypes = [...new Set(properties.map(property => property.type))];
  const uniquePropertyCities = [...new Set(properties.map(property => property.city))];
  const uniquePropertyDistricts = [...new Set(properties.map(property => property.district))];


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <select name="properties" value={property} onChange={(e) => setProperty(e.target.value)}>
        <option value="">Nieruchomość</option>
        {uniquePropertyTypes.map(type => (
        <option key={type} value={type}>{type}</option>
        ))}
      </select>
      <select name="cities" value={property} onChange={(e) => setProperty(e.target.value)}>
        <option value="">Miasto</option>
        {uniquePropertyCities.map(city => (
        <option key={city} value={city}>{city}</option>
        ))}
      </select>
      <select name="districts" value={property} onChange={(e) => setProperty(e.target.value)}>
        <option value="">Dzielnica</option>
        {uniquePropertyDistricts.map(district => (
        <option key={district} value={district}>{district}</option>
        ))}
      </select>
    </form>
  )
}

export default PorpertyType;