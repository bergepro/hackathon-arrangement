import React from "react";
import './App.css';
import './Header.js';
import Header from "./Header";
import Feed from "./Feed";
import LeggUt from "./LeggUt";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <LeggUt />
          <div className="app__body">
            
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}
export default App;