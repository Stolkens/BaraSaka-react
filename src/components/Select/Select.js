import styles from './Select.module.scss'

const Select =({name, value, onChange, options, label}) => {


  return (
    <div >
      {/* <label htmlFor={name}>{label}</label> */}
      <select className={styles.select} name={name} value={value} onChange={onChange}>
        <option value="">{label}</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default Select;