'use strict';
var extend = require('xtend');
var createClass = require('inferno-create-class').createClass;
var createElement = require('inferno-create-element').createElement;

var r = require('../../');

module.exports = createComponent;

function createComponent(properties) {
  properties = extend({
    render: function render() {
      return (
        r.div([
          r.h1(this.props.title),
          // This tests that children are passed down correctly to
          // components that use React.DOM directly (and don't warn)
          createElement('div', null, this.props.children)
        ])
      );
    }
  }, properties);

  return createClass(properties);
}
