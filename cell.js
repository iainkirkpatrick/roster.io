var React = require('react');
var d3Cell = require('./d3Cell');

var Cell = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  componentDidMount: function() {
    var el = this.getDOMNode();
    d3Cell.create(el, {
      width: '100%',
      height: '300px'
    }, this.getCellState());
  },

  componentDidUpdate: function() {
    var el = this.getDOMNode();
    d3Cell.update(el, this.getCellState());
  },

  getCellState: function() {
    return {
      data: this.props.data
    };
  },

  render: function() {
    return (
      <div className="CellReact"></div>
    );
  }
})

module.exports = Cell;
