import css from '../TransactionHistory/TransactionHistory.module.css';

export default function TransactionHistory({ items = [] }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
