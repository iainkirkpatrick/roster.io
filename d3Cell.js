//template stolen from http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/
//just the D3 code
//needs to be passed a 'g' element to render onto, as well as 'state' which contains data for the height, width, and (x,y) 


var d3Cell = {};

//g is the svg group to append into
d3Cell.create = function(g, props, state) {
  this.update(g, state);
};

d3Cell.update = function(g, state) {
  console.log(state.data);

  var cell = d3.select(g).selectAll('.cell')
    .data(state.data, function(d) {
      return d;
    });
  cell.enter().append('rect')
    .attr('class', 'cell-rect');
  cell.attr('width', function(d) {
    return d.width;
  })
    .attr('height', function(d) {
      return d.height;
    })
    .attr('x', function(d) {
      return d.x;
    })
    .attr('y', function(d) {
      return d.y;
    });
  cell.exit()
    .remove();
};

module.exports = d3Cell;


/* OLD */
// d3Cell.create = function(el, props, state) {
//   var svg = d3.select(el).append('svg').append('g')
//     .attr('width', props.width)
//     .attr('height', props.height);
//
//   svg.append('g')
//     .attr('class', 'cellGroup');
//
//   this.update(el, state);
// };
//
// d3Cell.update = function(el, state) {
//   var cellGroup = d3.select(el).selectAll('.cellGroup');
//
//   console.log(state.data);
//
//   var cell = cellGroup.selectAll('.cell')
//     .data(state.data, function(d) {
//       return d;
//     });
//   cell.enter().append('rect')
//     .attr('class', 'cell-rect');
//   cell.attr('width', function(d) {
//     return d.width;
//   })
//     .attr('height', function(d) {
//       return d.height;
//     })
//     .attr('x', function(d) {
//       return d.x;
//     })
//     .attr('y', function(d) {
//       return d.y;
//     });
//   cell.exit()
//     .remove();
// };
