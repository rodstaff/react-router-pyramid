import React from 'react'
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory, DefaultRoute} from 'react-router'
import Root from '../dev/js/components/root' 
import store from '../dev/js/store'

export const Container = (props) => (
  <div>
    <Nav /> 
    {props.children}
  </div>
)
export const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName='active' to='/address'>Pyramids & Turtles</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName='active' to='/about'>About</IndexLink>&nbsp;&nbsp;

  </div>
)
export const Home = () => (
  <div>
    <br />
    <h1>Home Sweet Home!</h1>
  </div>
)
export const Address = () => (
  <div>
    <br />
    <Root store={store} />
  </div>
)
export const About = (props) => (
  <div>
    <br />
    <h1>Welcome to the About Page</h1>
    {props.params.name && <h2>Hi there, {props.params.name}!</h2>}
  </div>
)
