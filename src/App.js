import "./App.css";
import user from "./components/user/user.json";
import User from "./components/user/User";
import statisticalData from "./components/statistics/statistical-data.json";
import Statistics from "./components/statistics/Statistics";
import friends from "./components/friends/friends.json";
import FriendList from "./components/friends/FriendList";
import items from "./components/transaction/transactions.json";
import Transaction from "./components/transaction/Transaction";

function App() {
  return (
    <>
      <div className="App">
        <User
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className="App">
        <Statistics title="Upload stats" statisticalData={statisticalData} />
      </div>
      <div className="App">
        <FriendList friends={friends} />
      </div>
      <div className="App">
        <Transaction items={items} />
      </div>
    </>
  );
}

export default App;
