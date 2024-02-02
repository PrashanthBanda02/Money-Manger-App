import {Component} from 'react'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  render() {
    const balance = 1000 // Sample balance value, replace it with your logic or prop

    return (
      <div className="app-container">
        <div className="header">
          <h1 className="userName">Hi, Richard</h1>
          <p className="greeting">
            Welcome back to your <span className="name">Money Manager</span>
          </p>
        </div>
        <div className="money-details-container">
          <div className="balance-card">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
                alt="balance"
                className="balance-card-image"
              />
            </div>
            <div className="amount-container">
              <p className="balance-heading">Your Balance</p>
              <h1 className="balance">Rs {balance}</h1>
            </div>
          </div>
          <div className="income-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
              className="balance-card-image"
            />
            <div className="amount-container">
              <p className="balance-heading">Your Balance</p>
              <h1 className="balance">Rs {balance}</h1>
            </div>
          </div>
          <div className="expenses-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
              className="balance-card-image"
            />
            <div className="amount-container">
              <p className="balance-heading">Your Balance</p>
              <h1 className="balance">Rs {balance}</h1>
            </div>
          </div>
        </div>
        <div className="transactions-container">
          <div className="add-transaction">
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <form className="form-element">
              <label htmlFor="title">TITLE</label>
              <input id="title" type="text" placeholder="TITLE" />

              <label htmlFor="amount">AMOUNT</label>
              <input id="amount" type="text" placeholder="AMOUNT" />

              <select id="transactionType">
                {transactionTypeOptions.map(eachType => (
                  <option key={eachType.optionId} value={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="history-container"></div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
