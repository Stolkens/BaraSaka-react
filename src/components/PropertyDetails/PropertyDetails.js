
import styles from './PropertyDetails.module.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PropertyDetails = () => {

  const { id } = useParams();
  
  const properties = useSelector(state =>state.properties)
  const property = properties.find(property=>property.id === id)

  console.log(property)
  

  return (
    <div className={styles.property}>
      <h4>{property.name}</h4>
      <p>{property.city} {property.district} {property.area}</p>
      <p>{property.description}</p>
    </div>
  )
}

export default PropertyDetails;