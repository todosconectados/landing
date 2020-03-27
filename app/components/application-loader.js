import Ember from 'ember';
const {
  computed
 } = Ember;
export default Ember.Component.extend({
  classNames: ['application-loader'],
  loaderCls: computed('base-helper.isLoading', function(){
    let res = '',
      isLoading = this.get('base-helper.isLoading')
    ;
    if(isLoading){ res = 'visible'; }
    return res;
  })
});
