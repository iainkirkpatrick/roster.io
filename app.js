var React = require('react');
var Cell = require('./cell');

var sampleData = [
  {width: 20, height: 20, x: 5, y: 5},
  {width: 20, height: 20, x: 105, y: 105}
]

var App = React.createClass({
  getInitialState: function() {
    return {
      data: sampleData
    };
  },

  render: function() {
    return (
      <div className="App">
        <Cell
          data={this.state.data} />
      </div>
    );
  }
});

module.exports = App;
