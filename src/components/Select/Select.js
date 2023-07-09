import styles from './Select.module.scss'

const Select = ({ name, value, onChange, options, label, disabled, className }) => {
  const selectClasses = className ? `${className}` : '';


  return (
      <select className={selectClasses} name={name} value={value} onChange={onChange} disabled={disabled}>
        <option value="">{label}</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
  )
}

export default Select;