var React = require('react');
var Cell = require('./cell');

//grid should render to whatever position it's parent component / instigator specifies, shouldn't contain any specific pixel coords
//grid needs to tell each cell where to render in terms of the rest of the other cells in the grid

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
  // getInitialState: function() {
  //   return {
  //     data: data
  //   };
  // },

  render: function() {
    // var blocks = this.state.data.rows;
    // var days = this.state.data.columns;
    // var cellSize = this.state.data.cellSize;
    //
    // //map: for each item in the array, return an array with a corresponding thing (component)
    // var column = [];
    // for (var i = 0; i < blocks; i++) {
    //   column.push(<Cell time={i}/>)
    // };
    //
    // // blocks.map(function(block) {
    // //   return (
    // //     <Cell time={block}/>
    // //   )
    // // });
    //
    // var rowOfColumns = [];
    // for (var i = 0; i < days; i++) {
    //   var day = {};
    //   day[i] = column;
    //   rowOfColumns.push(day)
    // };
    //
    // // days.map(function(d) {
    // //   //can be refactored with ES6
    // //   var day = {};
    // //   day[d] = column;
    // //   return day;
    // // });
    //
    // console.log(rowOfColumns);

    return (
      <svg width={this.props.width} height={this.props.height}>
        <g>
          <Cell />
        </g>
      </svg>
    );
  }
});

// <div className="Table">
//   {this.state.data.map(function(d) {
//     return <Cell data={d} />
//   })}
// </div>

module.exports = Table;
