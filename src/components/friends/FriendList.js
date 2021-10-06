import style from "./friends.module.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map((el) => (
        <FriendListItem el={el} />
      ))}
    </ul>
  );
}
