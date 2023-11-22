import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  номПасп: DS.attr('number'),
  отчест: DS.attr('string'),
  серия: DS.attr('number'),
  табНом: DS.attr('string'),
  фамил: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-test11-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-test11-сотрудник.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номПасп: {
    descriptionKey: 'models.i-i-s-test11-сотрудник.validations.номПасп.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчест: {
    descriptionKey: 'models.i-i-s-test11-сотрудник.validations.отчест.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серия: {
    descriptionKey: 'models.i-i-s-test11-сотрудник.validations.серия.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  табНом: {
    descriptionKey: 'models.i-i-s-test11-сотрудник.validations.табНом.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамил: {
    descriptionKey: 'models.i-i-s-test11-сотрудник.validations.фамил.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-test11-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-test11-сотрудник', {
    табНом: attr('ТабНомер', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    фамил: attr('Фамилия', { index: 2 }),
    отчест: attr('Отчество', { index: 3 }),
    номПасп: attr('НомерПасп', { index: 4 }),
    серия: attr('СерияПасп', { index: 5 }),
    должности: belongsTo('i-i-s-test11-должности', 'Должность', {

    }, { index: 6 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-test11-сотрудник', {
    табНом: attr('ТабНомер', { index: 0 }),
    имя: attr('Имя ', { index: 1 }),
    фамил: attr('Фамилия', { index: 2 }),
    отчест: attr('Отчество', { index: 3 }),
    серия: attr('СерияПаспорта', { index: 4 }),
    номПасп: attr('НомерПас', { index: 5 }),
    должности: belongsTo('i-i-s-test11-должности', 'Должность', {

    }, { index: 6 })
  });
};
