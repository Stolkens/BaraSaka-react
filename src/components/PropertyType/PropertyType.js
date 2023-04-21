import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './PropertyType.module.scss';

const PorpertyType = () => {


  const properties = useSelector(state =>state.properties)
  
  const [property, setProperty] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const uniquePropertyTypes = [...new Set(properties.map(property => property.type))];


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <select name="properties" value={property} onChange={(e) => setProperty(e.target.value)}>
          <option value="">Nieruchomość</option>
          {uniquePropertyTypes.map(type => (
          <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </form>

  )
}

export default PorpertyType;