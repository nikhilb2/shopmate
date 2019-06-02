import React from 'react';
import Homepage from '../src/containers/homepage'
import { userDetails } from '../hocs/auth-hoc'

function Index(props) {
  return (
    <Homepage {...props}/>
  );
}


export default userDetails(Index)
