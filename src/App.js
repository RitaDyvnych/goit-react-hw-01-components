import "./App.css";
import user from "./data/user.json";
import User from "./components/User";
import statisticalData from "./data/statistical-data.json";
import Statistics from "./components/Statistics";

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
        <Statistics title="Upload stats" statisticalData={statisticalData} />;
      </div>
    </>
  );
}

export default App;
