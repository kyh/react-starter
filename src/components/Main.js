require('normalize.css');
require('styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <section className="index">
        <h1>Hello World.</h1>
      </section>
    );
  }
}

export default AppComponent;
