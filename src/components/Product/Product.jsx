import { useState, useRef, useEffect, useMemo, useCallback, useLayoutEffect, useContext } from 'react';
import styles from '../../App.module.css';
import UserPage from '../UserPage/UserPage';
import { HelloContext } from '../../App';
import PropTypes from 'prop-types';

const Product = ({text}) => {
  const hello = useContext(HelloContext);
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState(0);
  const countRef  = useRef(null);
  const el  = useRef(null);
  
  let countNotHook  = 0;

  useEffect(() => {
    console.log('hello:', hello);
    countRef.current = 0;
    return () => {
      console.log('this');
    }
  }, [hello]);

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
        click {res}  {hello} { text}
      </button>
    </>
  );
};

export default Product;

Product.propTypes = {
  text: PropTypes.string.isRequired
}