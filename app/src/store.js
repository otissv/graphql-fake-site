import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import DevTools from './core/devtools/dev-tools-component';
import reducers from './reducers';
import PouchDB from 'pouchdb';
import { persistentStore } from 'redux-pouchdb';


const db = new PouchDB(window.location.host);

export default compose(
  applyMiddleware(thunk),
  persistentStore(db),
  window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
)(createStore)(reducers);
