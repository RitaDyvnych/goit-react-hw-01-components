import "./App.css";
import user from "./data/user.json";
import User from "./components/User";
import statisticalData from "./data/statistical-data.json";
import Statistics from "./components/Statistics";
import friends from "./data/friends.json";
import FriendList from "./components/FriendList";
import items from "./data/transactions.json";
import Transaction from "./components/Transaction";

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
