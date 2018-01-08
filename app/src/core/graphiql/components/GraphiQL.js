import React from 'react';
import GraphiQL from 'graphiql';
import '../../../../node_modules/graphiql/graphiql.css';
import '../css/graphiql.css';
import logo from '../images/graphql-fake-light.svg';
import Icons from 'react-uikit-icons';
import '../css/graphiql.css';
import '../css/graphiql-paper.css';
import '../css/graphiql-material.css';
import '../css/graphiql-neo.css';


const CustomGraphiQL = props => (
  <GraphiQL {...props}>
    <GraphiQL.Logo>
     <img className='logo' src={logo} alt='Graphql Fake logo' />
    </GraphiQL.Logo>

    <GraphiQL.Toolbar>
      <GraphiQL.Button
        onClick={props.handleClickPrettifyButton}
        label="Prettify"
        title="Prettify Query"
      />

      <input 
        type="checkbox" 
        className="theme-switch" 
        id="theme-switch"
        onClick={props.handleThemeClick}
      />
      
    </GraphiQL.Toolbar>

    <GraphiQL.Footer>
      <span className='by'>By Otis Virginie</span>
      <a className='social-icon' href='https://twitter.com/otissv'><Icons icon='twitter' /></a>
    </GraphiQL.Footer>
  </GraphiQL>
);


export default CustomGraphiQL;
