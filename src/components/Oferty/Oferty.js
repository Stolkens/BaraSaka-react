
import PageTitle from '../PageTitle/PageTitle';
import PropertyCity from '../PropertyCity/PropertyCity';
import PorpertyType from '../PropertyType/PropertyType';
import styles from './Oferty.module.scss'


const Oferty = () => {


  return (
    <div>
      <PageTitle>Oferty</PageTitle>
      <div className={styles.form}>
        <PorpertyType/>
        <PropertyCity/>
      </div>
     
      
    </div>
    
  )
}

export default Oferty;