import {memo, useContext} from 'react';
import { HelloContext } from '../../App';

const UserPage = ({ children, userName }) => {
  const hello = useContext(HelloContext);
  // props
  console.log('UserPage');
  return children ? children : <h1>Hello user {userName} {hello}</h1>;
  
};

export default memo(UserPage);
