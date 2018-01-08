import cookie_js from 'cookie_js';


const cookie = cookie_js.cookie;

export function localAuth () {
  return cookie.all();
}

export function setAppStorage (storage) {
  cookie.set(storage);
}

export function deleteAppStorage () {
  cookie.empty();
}

export function updateAppStorage (data) {
  cookie.set(data);
}

export function viewActionsStorage (viewActions) {
  viewActions.forEach(item => {
    const db = window.app.db;

    const _id = `_local/viewActions/${item.type}`;

    db.get(_id)
      .then(doc => doc)
      .then(doc => {
        return db.put({
          ...doc,
          ...item
        });
      }, error => ({ error }))
      .then(doc => {
        if (doc.error) return db.put({ _id, ...item });
        return { error: false };     
      }, error => ({ error }))
      .then(doc => {
        if (doc.error) return new Error(doc.error);
        console.log('Successfully saved to database');
      }, error => ({ error }))
      .catch(errors => console.log('catch: ', errors));
  });
}
