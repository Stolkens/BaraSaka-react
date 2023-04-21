import { useState } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Oferty.module.scss';

const Oferty = () => {

  const [property, setProperty] = useState('');

  
  const properties = [
    {
      id: 1,
      type: 'mieszkanie',
    },
    {
      id: 2,
      type: 'dom',
    },
    {
      id: 3,
      type: 'mieszkanie',
    },
    {
      id: 4,
      type: 'mieszkanie',
    },
    {
      id: 5,
      type: 'działka',
    },
  ]
 
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const uniquePropertyTypes = [...new Set(properties.map(property => property.type))];

  return (
    <div>
      <PageTitle>Oferty</PageTitle>
      <form className={styles.form} onSubmit={handleSubmit}>
      <select name="properties" value={property} onChange={(e) => setProperty(e.target.value)}>
          <option value="">Nieruchomość</option>
          {uniquePropertyTypes.map(type => (
          <option key={type} value={type}>{type}</option>
          ))}
        </select>


      </form>
    </div>
    
  )
}

export default Oferty;