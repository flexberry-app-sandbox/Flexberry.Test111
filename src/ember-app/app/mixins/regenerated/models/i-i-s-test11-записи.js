import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времНач: DS.attr('string'),
  времОкон: DS.attr('string'),
  дата: DS.attr('date'),
  кодЗаписи: DS.attr('string'),
  кодРегист: DS.attr('number'),
  номЗаяв: DS.attr('string'),
  заявка: DS.belongsTo('i-i-s-test11-заявка', { inverse: null, async: false }),
  регистр: DS.belongsTo('i-i-s-test11-регистр', { inverse: null, async: false })
});

export let ValidationRules = {
  времНач: {
    descriptionKey: 'models.i-i-s-test11-записи.validations.времНач.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  времОкон: {
    descriptionKey: 'models.i-i-s-test11-записи.validations.времОкон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-test11-записи.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаписи: {
    descriptionKey: 'models.i-i-s-test11-записи.validations.кодЗаписи.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодРегист: {
    descriptionKey: 'models.i-i-s-test11-записи.validations.кодРегист.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номЗаяв: {
    descriptionKey: 'models.i-i-s-test11-записи.validations.номЗаяв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заявка: {
    descriptionKey: 'models.i-i-s-test11-записи.validations.заявка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистр: {
    descriptionKey: 'models.i-i-s-test11-записи.validations.регистр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписиE', 'i-i-s-test11-записи', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    времНач: attr('Врем нач', { index: 2 }),
    времОкон: attr('Врем окон', { index: 3 }),
    заявка: belongsTo('i-i-s-test11-заявка', 'Заявка', {

    }, { index: 4 }),
    регистр: belongsTo('i-i-s-test11-регистр', 'Регистр', {

    }, { index: 5 })
  });

  modelClass.defineProjection('ЗаписиL', 'i-i-s-test11-записи', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    времНач: attr('Врем нач', { index: 2 }),
    времОкон: attr('Врем окон', { index: 3 }),
    заявка: belongsTo('i-i-s-test11-заявка', 'Заявка', {

    }, { index: 4 }),
    регистр: belongsTo('i-i-s-test11-регистр', 'Регистр', {

    }, { index: 5 })
  });
};
