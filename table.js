var React = require('react');
var Cell = require('./cell');

// var sampleData = [
//   {width: 20, height: 20, x: 5, y: 5},
//   {width: 20, height: 20, x: 105, y: 105}
// ];
//
// var data = {
//   cellSize: {
//     width: 50,
//     height: 50
//   },
//   // days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   // blocksPerDay: [9, 10, 11, 12, 1, 2, 3, 4, 5]
//   rows: 9,
//   columns: 5
// };

var Table = React.createClass({

  render: function() {
    var cellWidth = this.props.width / this.props.columns;
    var cellHeight = this.props.height / this.props.rows;

    var cells = [];
    for (var i = 0; i < this.props.columns; i++) {
      for (var j = 0; j < this.props.rows; j++) {
        var column = cellWidth * i;
        var row = cellHeight * j;
        cells.push(
          <Cell
          width={cellWidth}
          height={cellHeight}
          column={column}
          row={row}
          />
        );
      }
    }

    return (
      <svg width={this.props.width} height={this.props.height}>
        <g>
          {cells}
        </g>
      </svg>
    );
  }
});

module.exports = Table;
