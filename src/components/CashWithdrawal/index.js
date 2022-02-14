// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  updateButton = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="black-background-container">
          <div className="profile-container">
            <div className="profile-img-container">
              <p className="profile-pic-para">S</p>
            </div>
            <p className="profile-pic-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="balance-card">
              <p className="balance-amount">{amount}</p>
              <p className="balance-text">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container ">
            <p className="withdraw-container-heading">Withdraw</p>
            <p className="withdraw-container-para">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  itemDetails={eachDenomination}
                  updateButton={this.updateButton}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
