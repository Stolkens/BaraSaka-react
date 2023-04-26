import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './SearchForm.module.scss';
import Select from '../Select/Select';
import { Link } from 'react-router-dom';

const SearchForm = () => {

  const properties = useSelector(state =>state.properties)
  
  const [property, setProperty] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [purpose, setPurpose] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let results = properties.filter(data => 
      (!property || data.type === property) &&
      (!purpose || data.purpose === purpose) &&
      (!city || data.city === city) &&
      (!district || data.district === district)
    );
    setSearchResult(results);
  }

  const uniquePropertyTypes = [...new Set(properties.map(property => property.type))];
  const uniquePropertyPurposes = [...new Set(properties.map(property => property.purpose))];
  const uniquePropertyCities = [...new Set(properties.map(property => property.city))];
  const uniquePropertyDistricts = [...new Set(properties.map(property => property.district))];


  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Select options={uniquePropertyTypes} label="Rodzaj nieruchomości" name='Rodzaj nieruchomości' value={property} onChange={(e) => setProperty(e.target.value) }/>
        <Select options={uniquePropertyPurposes} label="Typ transakcji" name='Typ transakcji' value={purpose} onChange={(e) => setPurpose(e.target.value)}/>
        <Select options={uniquePropertyCities} label="Miasto" name="Miasto" value={city} onChange={(e) => setCity(e.target.value)}/>
        <Select options={uniquePropertyDistricts} label="Dzielnica" name="Dzielnica" value={district} onChange={(e) => setDistrict(e.target.value)}/>
        <button className={styles.button} type='submit'><i class="icon-search"></i></button>
      </form>
      {searchResult.length > 0 && (
        <div className={styles.searchResult}>
            {searchResult.map(result => (
              <Link to={'/nieruchomosc/' + result.id} key={result.id} className={styles.propertiesLink}>
                <h4>{result.name}</h4>
                <p>{result.description}</p>
              </Link>
            ))} 
        </div>
      )}
    </div>
  )
}

export default SearchForm;