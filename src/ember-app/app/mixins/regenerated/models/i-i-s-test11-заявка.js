import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  важност: DS.attr('string'),
  номЗаяв: DS.attr('string'),
  состоян: DS.attr('string'),
  текст: DS.attr('string'),
  контрагент: DS.belongsTo('i-i-s-test11-контрагент', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-test11-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  важност: {
    descriptionKey: 'models.i-i-s-test11-заявка.validations.важност.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номЗаяв: {
    descriptionKey: 'models.i-i-s-test11-заявка.validations.номЗаяв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состоян: {
    descriptionKey: 'models.i-i-s-test11-заявка.validations.состоян.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  текст: {
    descriptionKey: 'models.i-i-s-test11-заявка.validations.текст.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-test11-заявка.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-test11-заявка.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаявкаE', 'i-i-s-test11-заявка', {
    номЗаяв: attr('Номер заяв', { index: 0 }),
    важност: attr('Важность', { index: 1 }),
    состоян: attr('Состояние', { index: 2 }),
    текст: attr('Текст', { index: 3 }),
    контрагент: belongsTo('i-i-s-test11-контрагент', 'Контрагент', {

    }, { index: 4 }),
    сотрудник: belongsTo('i-i-s-test11-сотрудник', 'Сотрудник', {

    }, { index: 5 })
  });

  modelClass.defineProjection('ЗаявкаL', 'i-i-s-test11-заявка', {
    номЗаяв: attr('Номер заявки', { index: 0 }),
    важност: attr('Важность', { index: 1 }),
    состоян: attr('Состояние', { index: 2 }),
    текст: attr('Текст', { index: 3 }),
    контрагент: belongsTo('i-i-s-test11-контрагент', 'Контрагент', {

    }, { index: 4 }),
    сотрудник: belongsTo('i-i-s-test11-сотрудник', 'Сотрудник', {

    }, { index: 5 })
  });

  modelClass.defineProjection('ЗаявкаНаРаботыE', 'i-i-s-test11-заявка', {
    номЗаяв: attr('Номер', { index: 0 }),
    текст: attr('Текст', { index: 1 }),
    важност: attr('Важность', { index: 2 }),
    состоян: attr('Состояние', { index: 3 }),
    контрагент: belongsTo('i-i-s-test11-контрагент', 'Контрагент', {

    }, { index: 4 }),
    сотрудник: belongsTo('i-i-s-test11-сотрудник', 'Сотрудник', {

    }, { index: 5 })
  });

  modelClass.defineProjection('ЗаявкаНаРаботыL', 'i-i-s-test11-заявка', {
    номЗаяв: attr('Номер', { index: 0 }),
    состоян: attr('Состояние', { index: 1 }),
    важност: attr('Важность', { index: 2 }),
    текст: attr('Текст', { index: 3 }),
    контрагент: belongsTo('i-i-s-test11-контрагент', 'Контраегнт', {

    }, { index: 4 }),
    сотрудник: belongsTo('i-i-s-test11-сотрудник', 'Сотрудник', {

    }, { index: 5 })
  });
};
