import React from 'react';
import axios from 'axios';
import autobind from 'class-autobind';
import { connect } from 'react-redux';
import { API_ROUTE } from '../../constants/routes-constants';
import { localAuth } from '../../local/services-local';
import '../../../../node_modules/graphiql/graphiql.css';
import actions from '../../../actions';
import mapStateToProps from '../../../mapStateToProps';
import getClassMethods from '../../helpers/get-class-methods';
import { buildClientSchema } from 'graphql';
import {
  initQuery,
  initResponse
} from '../init-graphql.js';

class GraphiQLContainer extends React.Component {
  constructor () {
    super(...arguments);
    autobind(this);
  }

  componentWillMount () {
    const {
      getGraphqlSchema,
      setGraphqlSchema
    } = this.props;

    getGraphqlSchema().payload
      .then(response => {

        if (response.data && response.data.__schema) {
          setGraphqlSchema(response.data);
        }
      });
  }

  
  fetchGraphQL (graphQLParams) {
    const { id, token } = localAuth();
    const url = API_ROUTE;

    axios.defaults.baseURL = url;
    axios.defaults.headers.common['Authorization'] = JSON.stringify({ id, token });
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    const axiosConfig = {
      url,
      method: 'POST'
    };
    
    return axios({
      ...axiosConfig,
      data: graphQLParams
    }).then(response => response.data.data)
    .then(response => {
      return response;
    })
    .catch(error => console.log(error));
  }

  handleClickPrettifyButton (event) {
    const editor = this.graphiql.getQueryEditor();
    const currentText = editor.getValue();
    const { parse, print } = require('graphql');
    const prettyText = print(parse(currentText));
    editor.setValue(prettyText);
  }


  handleThemeClick (event) {
    let theme;
    let gqlTheme;
    
    if (event.currentTarget.checked) {
      theme = 'theme-light';
      gqlTheme = 'neo';
    } else {
      theme = 'theme-dark';
      gqlTheme = 'material';
    }
    const graphiql = document.querySelector('.graphiql-container');

    this.props.setTheme(gqlTheme);
  }

  buildSchema () {
    if (this.props.introspection.__schema) {
      return buildClientSchema(this.props.introspection);
    } else {
      return null;
    }
  }


  render () {
    const Component = this.props.component;
console.log(this.props.gqlTheme)
    return <div className={`graphiql-theme ${this.props.gqlTheme}`}>
      
      <Component
      {...getClassMethods(this)}
      fetcher={this.fetchGraphQL}
      query={initQuery}
      response={initResponse}
      variables=''
      schema={this.buildSchema()}
      operationName={null}
      storage={null}
      defaultQuery={null}
      onEditQuery={null}
      onEditVariables={null}
      onEditOperationName={null}
      getDefaultFieldNames={null}
      editorTheme={this.props.gqlTheme}
      resultTheme={this.props.gqlTheme}
    />
    </div>;
  }
}

export default connect(mapStateToProps, actions)(GraphiQLContainer);
