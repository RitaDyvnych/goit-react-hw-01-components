import style from "./transaction.module.css";
import PropTypes from "prop-types";

export default function Transaction({ items }) {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th className={style.tableTitle}>Type</th>
          <th className={style.tableTitle}>Amount</th>
          <th className={style.tableTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((el) => (
          <tr className={style.tableRow} key={el.id}>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
