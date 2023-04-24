import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './SearchForm.module.scss';

const SearchForm = () => {


  const properties = useSelector(state =>state.properties)
  
  const [property, setProperty] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  


  const handleSubmit = (e) => {
    e.preventDefault();
    const results = properties.filter(data => property === data.type && city === data.city && district === data.district);  
    setSearchResult(results);
  }

  const uniquePropertyTypes = [...new Set(properties.map(property => property.type))];
  const uniquePropertyCities = [...new Set(properties.map(property => property.city))];
  const uniquePropertyDistricts = [...new Set(properties.map(property => property.district))];

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <select className={styles.select} name="properties" value={property} onChange={(e) => setProperty(e.target.value) }>
          <option value="">Nieruchomość</option>
          {uniquePropertyTypes.map(type => (
          <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <select className={styles.select} name="cities" value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Miasto</option>
          {uniquePropertyCities.map(city => (
          <option key={city} value={city}>{city}</option>
          ))}
        </select>
        <select className={styles.select} name="districts" value={district} onChange={(e) => setDistrict(e.target.value)}>
          <option value="">Dzielnica</option>
          {uniquePropertyDistricts.map(district => (
          <option key={district} value={district}>{district}</option>
          ))}
        </select>
        <button className={styles.button} type='submit'><i class="icon-search"></i></button>
      </form>
      {searchResult.length > 0 && (
        <div className={styles.searchResult}>
            {searchResult.map(result => (
              <div key={result.id}>
                <h4>{result.name}</h4>
                <p>{result.description}</p>
              </div>
            ))} 
        </div>
      )}
    </div>
    
  )
}

export default SearchForm;