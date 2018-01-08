import moment from 'moment';



export function limit (count) {
  return count > 50 ? 50 : count;
}


export function promise (fn) {
  return new Promise((resolve, reject) => fn(resolve, reject));
};


export function resolve ({ connector, context, method, query }) {
  return context.connectors[connector][method]({ args: query.createdBy, ...context });
}


export function generateMethod ({ args, mock, props }) {
  return promise((resolve, reject) => {
    return resolve({ ...mock({ ...args }), ...props });
  });
}


export function generateNMethod ({ args, mock, props }) {
  return promise((resolve, reject) => {
    let length = limit(args.length);
    let list = [];

    for (var i = 0; i < length; i++) {
      list.push({ ...mock({ ...args }), ...props });
    }
    
    return resolve(list);
  });
}


export function randNumber (min, max, interval) {
  if (typeof interval === 'undefined') interval = 1;
  var r = Math.floor(Math.random() * (max - min + interval) / interval);
  return r * interval + min;
}


export function randomDate (start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


export function getDates () {
  const date = new Date();

  const startDate = moment({ 
    years  : date.getFullYear(),
    months : date.getMonth(), 
    date   : randNumber(1, 28),
    hours  : randNumber(0, 23), 
    minutes: randNumber(1, 59)
  });

  const endDate = moment({ 
    years  : startDate.year(),
    months : startDate.month(),
    date   : randNumber(1, 28),
    hours  : randNumber(0, 23), 
    minutes: randNumber(1, 59)
  });

  return {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString()
  };
}
