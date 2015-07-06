var React = require('react');

var TestHeading = React.createClass({
  render: function() {
    return (
      <h1>hi</h1>
    );
  }
});

React.render(
  <TestHeading />,
  document.getElementById('container')
);
