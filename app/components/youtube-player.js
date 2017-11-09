import Component from '@ember/component';

export default Component.extend({
  didRender() {

    if (window.YT === undefined) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    var player;

    window.onYouTubePlayerAPIReady = function () {

      player = new YT.Player('player', {
        height: '720',
        width: '1280',
        playerVars:
          {
            listType: 'user_uploads',
            list: 'Ashuvidz'
          }
      })
    }
    if (window.YT && window.YT.loaded) {
      window.onYouTubePlayerAPIReady();
    }
  }
})
