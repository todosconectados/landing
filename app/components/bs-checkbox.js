import BSInput from './bs-input';

export default BSInput.extend({
  checked: false,
  init(){
    this._super(...arguments);
    this.checked = this.get('value');
    this.updateValue();
  },
  updateValue(){
    this.set('value', this.checked);
  },
  actions: {
    checkboxOnChange: function(){
      let checked = this.get('checked');
      this.set('checked', !checked);
      this.updateValue();
    }
  }
});
