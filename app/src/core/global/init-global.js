
import schema from './schema-global';
import hello from 'hellojs/dist/hello.all';
import PouchDB from 'pouchdb';

export default function init ({ app, store }) {

  app.db = PouchDB;

  (function localHost () {
    if (window.location.hostname === 'localhost') {
      // add store
      app.store = store;
      app.location = window.location.pathname;
      app.routes = [];
    }
  })();


  // (function offline () {
  //   const Offline = window.Offline;

  //   Offline.options = {
  //     // Should we check the connection status immediatly on page load.
  //     checkOnLoad: false,
  //     // Should we monitor AJAX requests to help decide if we have a connection.
  //     interceptRequests: true,
  //     // Should we automatically retest periodically when the connection is down (set to false to disable).
  //     reconnect: {
  //       // How many seconds should we wait before rechecking.
  //       initialDelay: 3,
  //       // How long should we wait between retries.
  //       // delay: (1.5 * last delay, capped at 1 hour)
  //     },
  //     // Should we store and attempt to remake requests which fail while the connection is down.
  //     requests: true,
  //     // Should we show a snake game while the connection is down to keep the user entertained?
  //     // It's not included in the normal build, you should bring in js/snake.js in addition to
  //     // offline.min.js.
  //     game: false
  //   };

  //   setInterval(() => {
  //     app.offline = window.Offline.state === 'down' ? true : false; 
  //   }, 1000);
  // })();


  app.oauth = hello;
  /* eslint-disable no-undef */ 
  app.db = new PouchDB(app.domain || window.location.host);
  /* eslint-enable no-undef */
  
  schema();
}
