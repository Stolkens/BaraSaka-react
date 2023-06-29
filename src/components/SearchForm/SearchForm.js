import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './SearchForm.module.scss';
import Select from '../Select/Select';
import { Link } from 'react-router-dom';

const SearchForm = () => {

  const properties = useSelector(state => state.properties);
  const areas = useSelector(state => state.areas);

  const [property, setProperty] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [purpose, setPurpose] = useState('');
  const [isDistrictDisabled, setIsDistrictDisabled] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredPropertyTypes, setFilteredPropertyTypes] = useState([]);
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [filteredPurposes, setFilteredPurposes] = useState([]);
  const [areaMin, setAreaMin] = useState('');
  const [areaMax, setAreaMax] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    let results = properties.filter(data =>
      (!property || data.type === property) &&
      (!purpose || data.purpose === purpose) &&
      (!city || data.city === city) &&
      (!district || data.district === district) &&
      (!areaMin || data.area >=areaMin) &&
      (!areaMax || data.area <= areaMax)
    );
    setSearchResult(results);
  }

  const uniquePropertyTypes = [...new Set(properties.map(property => property.type))];
  const uniquePropertyPurposes = [...new Set(properties.map(property => property.purpose))];
  const uniquePropertyCities = [...new Set(properties.map(property => property.city))];
  const uniquePropertyDistricts = [...new Set(properties.map(property => property.district))];

  useEffect(() => {
    const cities = []
    const propertyTypes = [];
    const districts = [];
    const purposes =[];

    for (let propertyData of properties) {
      if (city === propertyData.city) {
        propertyTypes.push(propertyData.type);
        districts.push(propertyData.district);
      }
      if (property === propertyData.type) {
        cities.push(propertyData.city);
        purposes.push(propertyData.purpose);
      }
      if(purpose === propertyData.purpose) {
        cities.push(propertyData.city);
        propertyTypes.push(propertyData.type);
      }
    }
    console.log('cities', cities);
    console.log('propertyTypes', propertyTypes);
    console.log('districts', districts);
    console.log('purposes', purposes);
    if (city) {
      setFilteredPropertyTypes([...new Set(propertyTypes)]);
      setFilteredDistricts([...new Set(districts)]);
      setIsDistrictDisabled(false);
    }
    if (property) {
      setFilteredCities([...new Set(cities)]);
      setFilteredPurposes([...new Set(purposes)]);
    }
    if (purpose) {
      setFilteredPropertyTypes([...new Set(propertyTypes)]);
      setFilteredCities([...new Set(cities)]);
    }
    else {
      setFilteredPropertyTypes(uniquePropertyTypes);
      setFilteredDistricts(uniquePropertyDistricts);
      setFilteredCities(uniquePropertyCities);
      setFilteredPurposes(uniquePropertyPurposes);
    }
  }, [city, property, purpose]);


  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Select options={filteredPropertyTypes} label="Rodzaj nieruchomości" name='Rodzaj nieruchomości' value={property} onChange={(e) => setProperty(e.target.value)} />
        <Select options={filteredPurposes} label="Typ transakcji" name='Typ transakcji' value={purpose} onChange={(e) => setPurpose(e.target.value)} />
        <Select options={filteredCities} label="Miasto" name="Miasto" value={city} onChange={(e) => setCity(e.target.value)} />
        <Select options={filteredDistricts} label="Dzielnica" name="Dzielnica" value={district} disabled={isDistrictDisabled} onChange={(e) => setDistrict(e.target.value)} />
        <Select options={areas} name="PowierzchniaMin" label="Powierzchnia min." value={areaMin} onChange={(e) => setAreaMin(e.target.value)}></Select>
        <Select options={areas} name="PowierzchniaMax" label="Powierzchnia max." value={areaMax} onChange={(e) => setAreaMax(e.target.value)}></Select>
        <button className={styles.button} type='submit'><i className="icon-search"></i></button>
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