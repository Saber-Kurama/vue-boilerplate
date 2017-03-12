import Moment from 'moment'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  dateConvert (time) {
    return time && Moment(time).format('YYYY-MM-DD HH:mm:ss'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  dayConvert (time) {
    return time && Moment(time).format('YYYY-MM-DD'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}

