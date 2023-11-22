import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test11.caption'),
          title: i18n.t('forms.application.sitemap.test11.title'),
          children: [{
            link: 'i-i-s-test11-должности-l',
            caption: i18n.t('forms.application.sitemap.test11.i-i-s-test11-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.test11.i-i-s-test11-должности-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-test11-регистр-l',
            caption: i18n.t('forms.application.sitemap.test11.i-i-s-test11-регистр-l.caption'),
            title: i18n.t('forms.application.sitemap.test11.i-i-s-test11-регистр-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-test11-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.test11.i-i-s-test11-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.test11.i-i-s-test11-сотрудник-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-test11-контрагент-l',
            caption: i18n.t('forms.application.sitemap.test11.i-i-s-test11-контрагент-l.caption'),
            title: i18n.t('forms.application.sitemap.test11.i-i-s-test11-контрагент-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-test11-заявка-l',
            caption: i18n.t('forms.application.sitemap.test11.i-i-s-test11-заявка-l.caption'),
            title: i18n.t('forms.application.sitemap.test11.i-i-s-test11-заявка-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-test11-записи-l',
            caption: i18n.t('forms.application.sitemap.test11.i-i-s-test11-записи-l.caption'),
            title: i18n.t('forms.application.sitemap.test11.i-i-s-test11-записи-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})