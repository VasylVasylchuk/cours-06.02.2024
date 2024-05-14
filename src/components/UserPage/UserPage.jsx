import {memo} from 'react';

const UserPage = ({ children, userName }) => {
  // props
  console.log('UserPage');
  return children ? children : <h1>Hello user {userName} </h1>;
  
};

export default memo(UserPage);
