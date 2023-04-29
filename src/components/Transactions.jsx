import PropTypes from 'prop-types';
import TransactionsCss from './Transactions.module.css'

export const Transition = ({ items }) => {

  const rowItem = (items.map(item =>
        <tr key={item.id}>
            <td>{item.type}</td>
             <td className={TransactionsCss.amount}>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>))


    return (<table  className={TransactionsCss.transactionHistory }>
  <thead >
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
        { rowItem}
  </tbody>
</table> )
}

Transition.propTypes = {
    item: PropTypes.arrayOf(PropTypes.object),
}