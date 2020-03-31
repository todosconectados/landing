/* eslint-env node */
'use strict';
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['highlight-video'],
  classNameBindings: ['visibleCls'],
  youtubeId: null,
  visible: false,
  playerVars: {
    showinfo: 0,
    controls: 1,
    disablekb: 1,
    modestbranding: 1,
    playsinline: 1,
    autoplay: 1,
    loop: 1,
    volume: 0,
    suggestedQuality: 'highres'
  },
  visibleCls: Ember.computed('visible', function(){
    let visible = this.get('visible'),
      result = visible ? 'visible' : ''
    ;
    return result;
  }),
  visibleChanged: Ember.observer('visible', function(){
    let visible = this.get('visible'),
      emberYoutube = this.get('emberYoutube')
    ;
    if(emberYoutube && !visible){
      let player = emberYoutube.get('player');
      player.stopVideo();
    }
  }),
  actions: {
    playerCloseClicked(e){
      e.preventDefault();
      this.set('visible', false);
    }
  }
});
