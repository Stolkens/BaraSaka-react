
import styles from './PropertyDetails.module.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

const PropertyDetails = () => {

  const { id } = useParams();
  
  const properties = useSelector(state =>state.properties)
  const property = properties.find(property=>property.id === id)
  const images = property.images
  
  
  
  return (
    <div className={styles.property}>
      <h4>{property.name}</h4>
      <p>{property.city} {property.district} {property.area}</p>
      <p>{property.description}</p>
      <div className={styles.gallery}>
      {images.map(image=> <img  key={shortid()} src={image} alt='photo'></img>
      )}
      </div>
      
    </div>
  )
}

export default PropertyDetails;