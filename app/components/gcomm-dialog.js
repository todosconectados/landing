/* eslint-env node */
'use strict';

import Ember from 'ember';
import EmberBootstrapDialog from 'ember-bootstrap/components/bs-modal';

export default EmberBootstrapDialog.extend({
  open: false,
  backdrop: false,
  onClose: null,
  class: 'gcomm-dialog',
  close(){
    let onClose = this.get('onClose');
    this.set('open', false);
    if(!Ember.isEmpty(onClose)){
      onClose(this);
    }
  },
  actions: {
    onHidden(){
      this.close();
    }
  }
});
