import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test11-должности-l');
  this.route('i-i-s-test11-должности-e',
  { path: 'i-i-s-test11-должности-e/:id' });
  this.route('i-i-s-test11-должности-e.new',
  { path: 'i-i-s-test11-должности-e/new' });
  this.route('i-i-s-test11-записи-l');
  this.route('i-i-s-test11-записи-e',
  { path: 'i-i-s-test11-записи-e/:id' });
  this.route('i-i-s-test11-записи-e.new',
  { path: 'i-i-s-test11-записи-e/new' });
  this.route('i-i-s-test11-заявка-l');
  this.route('i-i-s-test11-заявка-e',
  { path: 'i-i-s-test11-заявка-e/:id' });
  this.route('i-i-s-test11-заявка-e.new',
  { path: 'i-i-s-test11-заявка-e/new' });
  this.route('i-i-s-test11-контрагент-l');
  this.route('i-i-s-test11-контрагент-e',
  { path: 'i-i-s-test11-контрагент-e/:id' });
  this.route('i-i-s-test11-контрагент-e.new',
  { path: 'i-i-s-test11-контрагент-e/new' });
  this.route('i-i-s-test11-регистр-l');
  this.route('i-i-s-test11-регистр-e',
  { path: 'i-i-s-test11-регистр-e/:id' });
  this.route('i-i-s-test11-регистр-e.new',
  { path: 'i-i-s-test11-регистр-e/new' });
  this.route('i-i-s-test11-сотрудник-l');
  this.route('i-i-s-test11-сотрудник-e',
  { path: 'i-i-s-test11-сотрудник-e/:id' });
  this.route('i-i-s-test11-сотрудник-e.new',
  { path: 'i-i-s-test11-сотрудник-e/new' });
});

export default Router;
