import casual from 'casual';
import faker from 'faker';
import moment from 'moment';


export default function dateTimeMock ({
  timeFormat = 'HH:mm:ss',
  dataFormat = 'YYYY-MM-DD'
}) {
  return {
    unixTime:    casual.unix_time,
    date:        casual.date(dataFormat),
    time:        casual.time(timeFormat),
    century:     casual.century, 
    amPm:        casual.am_pm,
    dayOfYear:   casual.day_of_year,
    dayOfMonth:  casual.day_of_month,
    dayOfWeek:   casual.day_of_week,
    weekday:     faker.date.weekday(),
    month:       faker.date.month(),
    monthNumber: casual.month_number,
    year:        casual.year,
    timezone:    casual.timezone,
    past:        moment(faker.date.past()).toISOString(),
    future:      moment(faker.date.future()).toISOString(),
    between:     moment(faker.date.between()).toISOString(),
    recent:      moment(faker.date.recent()).toISOString(),
  };
};
