import PropTypes from "prop-types";
import style from "./friends.module.css";

export default function FriendListItem({ el }) {
  return (
    <li className={style.item} key={el.id}>
      {el.isOnline ? (
        <span className={style.isOnline}></span>
      ) : (
        <span className={style.status}></span>
      )}
      <img className={style.avatar} src={el.avatar} alt="" width="48" />
      <p className={style.name}>{el.name ? el.name : "No data"}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
