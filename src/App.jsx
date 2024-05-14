import styles from "./App.module.css";
import Product from "./components/Product/Product";
import UserPage from "./components/UserPage/UserPage";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function test() {
  console.log(arguments[0]);
}

export function test_1() {
  //   useState,
  //   useEffect,
  //   useMemo,
  //  useCallback,
  //  useRef
}

export const HelloContext = createContext();

function App() {
  let [context, setContext] = useState("old");

  let props = {
    userName: "IVAN",
  };

  console.log(styles);
  return (
    <>
      <div className={styles.App}>
        <HelloContext.Provider value={context}>
          {/* <header className={styles.appHeader}>
        <button type="button" onClick={() => setContext('new Context')}>CONTEXT</button> */}
          <Product te />
          {/* <UserPage {...props} /> */}
          {/* 
         

        <UserPage>
          <div>This is Children</div>
        </UserPage> */}

          <ClassComponent test="tets" />
          {/* </header> */}
        </HelloContext.Provider>
      </div>
    </>
  );
}

export default App;
