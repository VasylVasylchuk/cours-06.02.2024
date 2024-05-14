import { useState, useRef, useEffect, useMemo, useCallback, useLayoutEffect } from 'react';
import styles from '../../App.module.css';
import UserPage from '../UserPage/UserPage';

const Product = () => {
  const [count, setCount] = useState(0);
  const countRef  = useRef(null);
  const el  = useRef(null);
  let countNotHook  = 0;

  useEffect(() => {
    countRef.current = 0;
    return () => {
      console.log('this');
    }
  }, [count]);

  useLayoutEffect(() => {
    countRef.current = 0;
    return () => {
      console.log('this');
    }
  }, [count]);

  const res = useMemo(() => {
    return 'test-' + count;
  }, [count]);

  const saveFn = useCallback(() => {
    console.log('test-' + count);
  }, [count]);

  const udateCountFn = () => {

    countRef.current++;
    countNotHook++;
    console.log(count, countRef , el, countNotHook);
    if(countNotHook > 3) {
      setCount(countNotHook);
      setCount(countNotHook + 1);
      setCount(countNotHook + 2);
    } 
  }
  

  return (
    <>
      <UserPage userName={countRef.current} />
      <div ref={el} className={styles.App}>{count}</div>
      <button onClick={saveFn} type="button"></button>
      <button type="button" onClick={udateCountFn}>
        click {res}
      </button>
    </>
  );
};

export default Product;
