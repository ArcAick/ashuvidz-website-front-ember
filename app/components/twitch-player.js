import Component from '@ember/component';

export default Component.extend({
  didRender() {
    $.getScript('https://embed.twitch.tv/embed/v1.js', function () {
      new Twitch.Embed("twitch-embed", {
        width: 854,
        height: 250,
        channel: "ashuvidz",
        theme: "dark"
      });
    })
  }
});
