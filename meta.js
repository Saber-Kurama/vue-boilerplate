module.exports = {
  'helpers': {
    'if_or': function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this)
      }
      return options.inverse(this)
    }
  },
  'prompts': {
    'name': {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    'description': {
      'type': 'string',
      'required': false,
      'message': 'Project description'
    },
    'author': {
      'type': 'string',
      'message': 'Author'
    },
    'portNumber': {
      'type': 'number',
      'required': true,
      'default': 8080,
      'message': 'Local dev server port'
    },
    'proxyServer': {
      'type': 'string',
      'required': true,
      'default': 'http://10.60.15.165:3000',
      'message': 'API Server'
    },
    'i18n': {
      'type': 'confirm',
      'message': 'Install vue-i18n?'
    },
    'styleLib': {
      'type': 'list',
      'message': 'Pick a style library',
      'choices': [
        {
          'name': 'Bootstrap3',
          'value': 'bootstrap3',
          'short': 'Bootstrap3'
        },
        {
          'name': 'Bootstrap4',
          'value': 'bootstrap4',
          'short': 'Bootstrap4'
        },
        {
          'name': 'Bulma',
          'value': 'bulma',
          'short': 'Bulma'
        },
        {
          'name': 'none (import it yourself)',
          'value': 'none',
          'short': 'none'
        }
      ]
    },
    'lint': {
      'type': 'confirm',
      'message': 'Use ESLint to lint your code?'
    },
    'lintConfig': {
      'when': 'lint',
      'type': 'list',
      'message': 'Pick an ESLint preset',
      'choices': [
        {
          'name': 'Standard (https://github.com/feross/standard)',
          'value': 'standard',
          'short': 'Standard'
        },
        {
          'name': 'AirBNB (https://github.com/airbnb/javascript)',
          'value': 'airbnb',
          'short': 'AirBNB'
        },
        {
          'name': 'none (configure it yourself)',
          'value': 'none',
          'short': 'none'
        }
      ]
    },
    'notifier': {
      'type': 'confirm',
      'message': 'Install webpack-build-notifier?'
    },
    'preCommit': {
      'type': 'confirm',
      'message': 'Lint code with pre-commit?'
    },
    'unit': {
      'type': 'confirm',
      'message': 'Setup unit tests with Karma + Mocha?'
    },
    'e2e': {
      'type': 'confirm',
      'message': 'Setup e2e tests with Nightwatch?'
    }
  },
  'skipInterpolation': 'cli/**/*',
  'filters': {
    'src/assets/scss/bootstrap4/**/*': 'styleLib === "bootstrap4"',
    'src/assets/scss/bootstrap3/**/*': 'styleLib === "bootstrap3"',
    'src/assets/scss/bulma/**/*': 'styleLib === "bulma"',
    'src/locales/**/*': 'i18n',
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'test/unit/**/*': 'unit',
    'build/webpack.test.conf.js': 'unit',
    'test/e2e/**/*': 'e2e'
  },
  'completeMessage': 'To get started:\n\n{{^inPlace}}cd {{destDirName}}\n\n{{/inPlace}}npm install && npm run build:dll && npm run dev\n\n'
}
