/* eslint-env node */
'use strict';
import Ember from 'ember';

export default Ember.Service.extend({
  // loading status
  notifications: Ember.inject.service('notification-messages-service'),
  isLoading: false,
  loadingCount: 0,
  loading: function(){
    let loadingCount = this.get('loadingCount');

    ++loadingCount;
    this.set('loadingCount', loadingCount);
    if(loadingCount > 0){
      this.set('isLoading', true);
    }
  },
  loaded: function(){
    let loadingCount = this.get('loadingCount');

    --loadingCount;
    if(loadingCount < 0){
      loadingCount = 0;
    }
    this.set('loadingCount', loadingCount);
    if(loadingCount <= 0){
      this.set('isLoading', false);
    }
  },
  serverError(){
    let notifications = this.get('notifications');
    notifications.error('Ocurrió un error en el servidor. Intente más tarde.');
  }
});
