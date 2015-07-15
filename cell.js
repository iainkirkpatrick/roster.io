var React = require('react');
var createElement = require('svg-create-element');
var d3Cell = require('./d3Cell');

var Cell = React.createClass({
  // propTypes: {
  //   data: React.PropTypes.array
  // },

  componentDidMount: function() {
    // var svg = createElement('svg');
    // svg.appendChild(createElement('g'));
    var g = this.getDOMNode();
      // .appendChild(svg);

    var width = this.getCellSize().width;
    var height = this.getCellSize().height;
    d3Cell.create(g, {
      width: width,
      height: height
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

  getCellSize: function() {
    return {
      cellSize: this.props.cellSize
    };
  },

  render: function() {
    return (
      <rect className="CellReact"></rect>
    );
  }
})

// var Cell = React.createClass({
//   render: function() {
//     return (
//       <div className="CellReact"></div>
//     );
//   }
// })

module.exports = Cell;
