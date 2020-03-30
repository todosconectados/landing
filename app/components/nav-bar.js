/* eslint-env node */
'use strict';
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  showNav: true,
  classNames: ['navbar', 'navbar-default', 'navbar-fixed-top'],
  router: Ember.computed(function(){
    return Ember.getOwner(this).lookup('router:main');
  }),
  homeUrl: Ember.computed('router', function(){
    let router = this.get('router'),
      homeUrl = router.generate('index')
    ;
    return homeUrl;
  }),
  actions: {
    toggleCollapsed(){
      this.toggleProperty('navBarIsCollapsed');
    },
    navBarSelected(target, e){
      let onNavBarSelected = this.get('onNavBarSelected');
      if(onNavBarSelected){
        e.preventDefault();
        onNavBarSelected(target, e);
      }
      window.location.hash = `#${target}`;
      this.set('navBarIsCollapsed', true);
    }
  }
});
