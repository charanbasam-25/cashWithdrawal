// Write your code here
import './index.css'

const DenominationItem = props => {
  const {itemDetails, updateButton} = props
  const {value} = itemDetails

  const denominationButton = () => {
    updateButton(value)
  }
  return (
    <li className="denomination-item">
      <button className="button" type="button" onClick={denominationButton}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
