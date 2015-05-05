require('./assets/main.less');

var React = require('react');
var Home = require('./home/Home.js');

React.render(<Home />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
