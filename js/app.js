var jQuery = require('jquery');
var React = require('react');
var $ = jQuery;
var App = require('./components');

React.render(<App.Views.Hello/>, document.getElementById('test'));
