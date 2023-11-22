import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest11ДолжностиLForm from './forms/i-i-s-test11-должности-l';
import IISTest11ЗаписиLForm from './forms/i-i-s-test11-записи-l';
import IISTest11ЗаявкаLForm from './forms/i-i-s-test11-заявка-l';
import IISTest11КонтрагентLForm from './forms/i-i-s-test11-контрагент-l';
import IISTest11РегистрLForm from './forms/i-i-s-test11-регистр-l';
import IISTest11СотрудникLForm from './forms/i-i-s-test11-сотрудник-l';
import IISTest11ДолжностиEForm from './forms/i-i-s-test11-должности-e';
import IISTest11ЗаписиEForm from './forms/i-i-s-test11-записи-e';
import IISTest11ЗаявкаEForm from './forms/i-i-s-test11-заявка-e';
import IISTest11КонтрагентEForm from './forms/i-i-s-test11-контрагент-e';
import IISTest11РегистрEForm from './forms/i-i-s-test11-регистр-e';
import IISTest11СотрудникEForm from './forms/i-i-s-test11-сотрудник-e';
import IISTest11ДолжностиModel from './models/i-i-s-test11-должности';
import IISTest11ЗаписиModel from './models/i-i-s-test11-записи';
import IISTest11ЗаявкаModel from './models/i-i-s-test11-заявка';
import IISTest11КонтрагентModel from './models/i-i-s-test11-контрагент';
import IISTest11РегистрModel from './models/i-i-s-test11-регистр';
import IISTest11СотрудникModel from './models/i-i-s-test11-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test11-должности': IISTest11ДолжностиModel,
    'i-i-s-test11-записи': IISTest11ЗаписиModel,
    'i-i-s-test11-заявка': IISTest11ЗаявкаModel,
    'i-i-s-test11-контрагент': IISTest11КонтрагентModel,
    'i-i-s-test11-регистр': IISTest11РегистрModel,
    'i-i-s-test11-сотрудник': IISTest11СотрудникModel
  },

  'application-name': 'Test11',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test11',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test11',
          title: 'Test11'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test11: {
          caption: 'Test11',
          title: 'Test11',
          'i-i-s-test11-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-test11-регистр-l': {
            caption: 'Регистр',
            title: ''
          },
          'i-i-s-test11-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-test11-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          },
          'i-i-s-test11-заявка-l': {
            caption: 'Заявка',
            title: ''
          },
          'i-i-s-test11-записи-l': {
            caption: 'Записи',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test11-должности-l': IISTest11ДолжностиLForm,
    'i-i-s-test11-записи-l': IISTest11ЗаписиLForm,
    'i-i-s-test11-заявка-l': IISTest11ЗаявкаLForm,
    'i-i-s-test11-контрагент-l': IISTest11КонтрагентLForm,
    'i-i-s-test11-регистр-l': IISTest11РегистрLForm,
    'i-i-s-test11-сотрудник-l': IISTest11СотрудникLForm,
    'i-i-s-test11-должности-e': IISTest11ДолжностиEForm,
    'i-i-s-test11-записи-e': IISTest11ЗаписиEForm,
    'i-i-s-test11-заявка-e': IISTest11ЗаявкаEForm,
    'i-i-s-test11-контрагент-e': IISTest11КонтрагентEForm,
    'i-i-s-test11-регистр-e': IISTest11РегистрEForm,
    'i-i-s-test11-сотрудник-e': IISTest11СотрудникEForm
  },

});

export default translations;
