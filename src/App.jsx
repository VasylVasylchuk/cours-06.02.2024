
import styles from './App.module.css';
import Product from './components/Product/Product';
import UserPage from './components/UserPage/UserPage';
import ClassComponent from './components/ClassComponent/ClassComponent';

export function test () {
  console.log(arguments[0])
};

export function test_1 () {
//   useState,
//   useEffect, 
//   useMemo, 
//  useCallback, 
//  useRef

};


function App() {
  let props = {
    userName: 'IVAN'
  };

  console.log(styles);
  return (
    <div className={styles.App}>
      <header className={styles.appHeader} >
        {/* <UserPage {...props} />
     
        <UserPage>
          <div>This is Children</div>
        </UserPage> */}

        <ClassComponent />
        <Product />
      </header>
    </div>
  );
}

export default App;
