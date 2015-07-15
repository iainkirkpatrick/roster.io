var React = require('react');

var SvgChart = React.createClass({
  render: function() {
    //this.props.children renders any children of this component inside the svg tags
    return (
      <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
    );
  }
});

module.exports = SvgChart;
