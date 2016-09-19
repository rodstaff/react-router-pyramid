import React from 'react'
import {Provider} from 'react-redux'
import Layout from './layout'
import store from '../store'

const Root = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);
export default Root;

// const Root = ({store}) => (   //mistake from tutorial!!!
//   <Provider store={store}>
//     <Layout />
//   </Provider>
// );
// export default Root;