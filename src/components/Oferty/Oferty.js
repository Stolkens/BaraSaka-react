
import PageTitle from '../PageTitle/PageTitle';
import SearchForm from '../SearchForm/SearchForm';
import styles from './Oferty.module.scss';


const Oferty = () => {


  return (
    <div className={styles.pageContainer}>
      <PageTitle>Oferty</PageTitle>  
      <SearchForm/>
    </div>
    
  )
}

export default Oferty;