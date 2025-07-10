import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./Redux/appSlice.js";
import { decrement } from "./Redux/appSlice.js";
import { toggleDarkMode } from "./Redux/uiSlice.js";

function App() {
  const count = useSelector((state) => state.app.count);
  const user = useSelector((state) => state.app.user);
  const darkMode = useSelector((state) => state.ui.darkMode);

  const dispatch = useDispatch();
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        padding: "2rem",
      }}
    >
      <button onClick={() => dispatch(toggleDarkMode())}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
      <h2>Counter using Redux Toolkit</h2>
      <p>Logged In as {user}</p>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Inc</button>
    </div>
  );
}

export default App;
