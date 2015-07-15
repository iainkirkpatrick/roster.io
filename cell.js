var React = require('react');
var createElement = require('svg-create-element');

//is it best to just require d3 stuff for animation, transitions etc?
//i.e. we set up some d3 events etc in componentDidMount, componentDidUpdate?
//var d3Cell = require('./d3Cell');

var Cell = React.createClass({
  getDefaultProps: function() {
    return {
      width: 50,
      height: 50,
      offset: 0
    }
  },

  // componentDidMount: function() {
  //   // var svg = createElement('svg');
  //   // svg.appendChild(createElement('g'));
  //   var g = this.getDOMNode();
  //     // .appendChild(svg);
  //
  //   var width = this.getCellSize().width;
  //   var height = this.getCellSize().height;
  //   d3Cell.create(g, {
  //     width: width,
  //     height: height
  //   }, this.getCellState());
  // },
  //
  // componentDidUpdate: function() {
  //   var el = this.getDOMNode();
  //   d3Cell.update(el, this.getCellState());
  // },
  //
  // getCellState: function() {
  //   return {
  //     data: this.props.data
  //   };
  // },
  //
  // getCellSize: function() {
  //   return {
  //     cellSize: this.props.cellSize
  //   };
  // },

  render: function() {
    return (
      <rect className="CellReact"
      width={this.props.width}
      height={this.props.height}
      x={this.props.column}
      y={this.props.row} >
      </rect>
    );
  }
});

module.exports = Cell;
