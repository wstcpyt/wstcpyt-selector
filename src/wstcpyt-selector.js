// Generated by CoffeeScript 1.9.2
(function() {
  var polymer;

  polymer = {
    is: 'wstcpyt-selector',
    properties: {
      selectedtext: {
        type: String,
        notify: true
      },
      selectedattr: {
        type: String
      },
      selected: {
        type: String,
        observer: 'handleselectedchange'
      },
      attrForSelected: {
        type: String,
        value: "name"
      }
    },
    handleselectedchange: function() {
      this.selectedtext = this.$.coreselector.items[this.selected].getAttribute(this.attrForSelected);
      return this.selectedattr = this.$.coreselector.items[this.selected].getAttribute('attr');
    }
  };

  Polymer(polymer);

}).call(this);

//# sourceMappingURL=wstcpyt-selector.js.map
