import PropTypes from "prop-types";
import style from "./statistics.module.css";

export default function Statistics({ statisticalData }) {
  return (
    <>
      <section className={style.statistics}>
        <h2 className={style.title}>Upload stats</h2>

        <ul className={style.list}>
          {statisticalData.map((el) => (
            <li
              key={el.id}
              style={{
                backgroundColor: `rgb(${80 + 150 * Math.random()}, ${
                  80 + 150 * Math.random()
                }, ${80 + 150 * Math.random()})`,
              }}
            >
              <span className={style.label}>{el.label}</span>
              <span className={style.percentage}>{el.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

Statistics.propTypes = {
  statData: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
