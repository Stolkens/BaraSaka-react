import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './SearchForm.module.scss';
import Select from '../Select/Select';
import { Link } from 'react-router-dom';

const SearchForm = () => {

  const properties = useSelector(state => state.properties);
  const areas = useSelector(state => state.areas);
  const numberOfRooms = useSelector(state => state.numberOfRooms);

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
  const [filteredAreasMax, setFilteredAreasMax] = useState([]);
  const [filteredAreasMin, setFilteredAreasMin] = useState([]);
  const [roomsMin, setRoomsMin] = useState('');
  const [roomsMax, setRoomsMax] = useState('');
  const [filteredRoomsMin, setFilteredRoomsMin] = useState([]);
  const [filteredRoomsMax, setFilteredRoomsMax] = useState([]);
  const [priceMin, setpriceMin] = useState('');
  const [priceMax, setpriceMax] = useState('');
  const [filteredPriceMin, setFilteredPriceMin] = useState([]);
  const [filteredPriceMax, setFilteredPriceMax] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let results = properties.filter(data =>
      (!property || data.type === property) &&
      (!purpose || data.purpose === purpose) &&
      (!city || data.city === city) &&
      (!district || data.district === district) &&
      (!areaMin || data.area >= areaMin) &&
      (!areaMax || data.area <= areaMax) &&
      (!roomsMin || data.rooms >= roomsMin) &&
      (!roomsMax || data.rooms <= roomsMax) &&
      (!priceMin || data.price >= priceMin) &&
      (!priceMax || data.price <= priceMax)
    );
    setSearchResult(results);
  }

  const uniquePropertyTypes = [...new Set(properties.map(property => property.type))];
  const uniquePropertyPurposes = [...new Set(properties.map(property => property.purpose))];
  const uniquePropertyCities = [...new Set(properties.map(property => property.city))];
  const uniquePropertyDistricts = [...new Set(properties.map(property => property.district))];

  const handleAreaFilter = (areaMin, areaMax) => {
    let filteredAreasMax = [];
    let filteredAreasMin = [];
  
    for (let area of areas) {
      if (areaMin && area > areaMin) {
        filteredAreasMax.push(area);
      }
      if (areaMax && area < areaMax) {
        filteredAreasMin.push(area);
      }
    }
  
    setFilteredAreasMax(areaMin ? [...new Set(filteredAreasMax)] : areas);
    setFilteredAreasMin(areaMax ? [...new Set(filteredAreasMin)] : areas);
  };

  const handleRoomsFilter = (roomsMin, roomsMax) => {
    let filteredRoomsMax = [];
    let filteredRoomsMin = [];
  
    for (let room of numberOfRooms) {
      if (roomsMin && room >= roomsMin) {
        filteredRoomsMax.push(room);
      }
      if (roomsMax && room <= roomsMax) {
        filteredRoomsMin.push(room);
      }
    }
  
    setFilteredRoomsMax(roomsMin ? [...new Set(filteredRoomsMax)] : numberOfRooms);
    setFilteredRoomsMin(roomsMax ? [...new Set(filteredRoomsMin)] : numberOfRooms);
  };

  useEffect(() => {
    const citiesFilteredByProperty = [];
    const citiesFilteredByPurpose =[];
    const propertyTypes = [];
    const districtsFilteredByCity = [];
    const districtsFilteredByProperty = [];
    const discritsFilteredByPurpose = [];
    const purposes = [];
    
    for (let propertyData of properties) {
      if (city === propertyData.city) {
        propertyTypes.push(propertyData.type);
        districtsFilteredByCity.push(propertyData.district);
      }
      if (property === propertyData.type) {
        citiesFilteredByProperty.push(propertyData.city);
        purposes.push(propertyData.purpose);
        districtsFilteredByProperty.push(propertyData.district);
      }
      if(purpose === propertyData.purpose) {
        citiesFilteredByPurpose.push(propertyData.city);
        propertyTypes.push(propertyData.type);
        discritsFilteredByPurpose.push(propertyData.district);
      }
    }
    const commonCitiesforPropertyAndPurpose = citiesFilteredByProperty.filter(element => citiesFilteredByPurpose.includes(element));
    const commonDistrictsForPropertyAndCity = districtsFilteredByProperty.filter(element => districtsFilteredByCity.includes(element));
    const commonDistrictsForPurposeAndCity = discritsFilteredByPurpose.filter(element => districtsFilteredByCity.includes(element));
    // console.log('discritsFilteredByCity', districtsFilteredByCity);
    // console.log('discritsFilteredByProperty', districtsFilteredByProperty);
    // console.log('districtsFilreredByPurpose', discritsFilteredByPurpose);
    // console.log('citiesFilteredByProperty', citiesFilteredByProperty);
    // console.log('citiesFilteredByPurpose', citiesFilteredByPurpose);
    // console.log('commonDistrictsForPurposeAndCity', commonDistrictsForPurposeAndCity);
    // console.log('propertytypes', propertyTypes);
    // console.log('purposes', purposes);
    // console.log('commonCitiesforPropertyAndPurpose', commonCitiesforPropertyAndPurpose)

    if (property) {
      setFilteredCities([...new Set(citiesFilteredByProperty)]);
      setFilteredPurposes([...new Set(purposes)]);
      setFilteredDistricts([...new Set(districtsFilteredByProperty)]);
      if (property && purpose) {
        setFilteredCities([...new Set(commonCitiesforPropertyAndPurpose)]);
        if (property && purpose && city) {
          setIsDistrictDisabled(false);
          setFilteredDistricts([new Set(commonDistrictsForPropertyAndCity)]);
        }
      }
      if (property && city) {
        setIsDistrictDisabled(false);
        setFilteredDistricts([new Set(commonDistrictsForPropertyAndCity)]);
      }
    }

    else if (purpose) {
      setFilteredPropertyTypes([...new Set(propertyTypes)]);
      setFilteredCities([...new Set(citiesFilteredByPurpose)]);
      if (purpose && city) {
        setIsDistrictDisabled(false);
        setFilteredDistricts([...new Set(commonDistrictsForPurposeAndCity)]);
      }
    }

    else if (city) {
      setFilteredPropertyTypes([...new Set(propertyTypes)]);
      setFilteredDistricts([...new Set(districtsFilteredByCity)]);
      setIsDistrictDisabled(false);
    }

    else {
      setFilteredPropertyTypes(uniquePropertyTypes);
      setFilteredDistricts(uniquePropertyDistricts);
      setFilteredCities(uniquePropertyCities);
      setFilteredPurposes(uniquePropertyPurposes);
    }

    handleAreaFilter(areaMin, areaMax);
    handleRoomsFilter(roomsMin, roomsMax);
  
  }, [city, property, purpose, areaMin, areaMax, roomsMin, roomsMax]);


  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Select className={styles.selectLarge} options={filteredPropertyTypes} label="Rodzaj nieruchomości" name='typeOfProperty' value={property} onChange={(e) => setProperty(e.target.value)} />
        <Select className={styles.selectLarge} options={filteredPurposes} label="Typ transakcji" name='purpose' value={purpose} onChange={(e) => setPurpose(e.target.value)} />
        <Select className={styles.selectLarge} options={filteredCities} label="Miasto" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
        
        <Select className={styles.selectLarge} options={filteredDistricts} label="Dzielnica" name="district" value={district} disabled={isDistrictDisabled} onChange={(e) => setDistrict(e.target.value)} />
        
        <div>
          <label>Powierzchnia: </label>
          <Select className={styles.selectSmall} options={filteredAreasMin} name="areaMin" label="Od" value={areaMin} onChange={(e) => setAreaMin(e.target.value)}></Select>
          <Select className={styles.selectSmall} options={filteredAreasMax} name="areMax" label="Do" value={areaMax} onChange={(e) => setAreaMax(e.target.value)}></Select>
        </div>
        <div>
          <label>Ilość pokoi: </label>
          <Select className={styles.selectSmall} options={filteredRoomsMin} name="roomsMin" label="Od" value={roomsMin} onChange={(e) => setRoomsMin(e.target.value)}></Select>
          <Select className={styles.selectSmall} options={filteredRoomsMax} name="roomsMax" label="Do" value={roomsMax} onChange={(e) => setRoomsMax(e.target.value)}></Select>
        </div>
        <div>
          <label>Cena: </label>
          <Select className={styles.selectSmall} options={filteredPriceMin} name="priceMin" label="Od" value={priceMin} onChange={(e) => setpriceMin(e.target.value)}></Select>
          <Select className={styles.selectSmall} options={filteredPriceMax} name="priceMax" label="Do" value={priceMax} onChange={(e) => setpriceMax(e.target.value)}></Select>
        </div>
        
        <button className={styles.button} type='submit'><i className="icon-search">Wyszukaj nieruchomość</i></button>
      </form>
      {searchResult.length > 0 && (
        <div className={styles.searchResult}>
          <h3 className={styles.searchResultHeading}>Wynik wyszukiwania: {searchResult.length}</h3>
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