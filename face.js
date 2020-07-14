const svg = d3.select("svg");

const width = +svg.attr("width");
const height = +svg.attr("height");
      
const g = svg.append('g')
	.attr('transform', `translate(${width/2}, ${height/2})`);

const circle = g.append("circle")
  .attr('r', height/2.47)
  .attr("stroke", "black")
  .attr("fill", "yellow");

const eyeSpacing = 80 
const eyeOffset = -70
const eyeRadius = 25;
const eyebrowWidth = 70;
const eyebrowHeight = 14;
const eyebrowOffset = -60;

const eyesG = g.append("g")
.attr('transform', `translate(0, ${eyeOffset})`);

const leftEye = eyesG.append("circle")
  .attr('r', eyeRadius)
  .attr('cx',  - eyeSpacing)
  .attr("stroke", "black")
  .attr("fill", "black");
 
const eyebrowG = eyesG.append("g")
.attr('transform', `translate(0, ${eyebrowOffset})`);

eyebrowG
.transition().duration(2000).attr('transform', `translate(0, ${eyebrowOffset - 50})`)
.transition().duration(2000).attr('transform', `translate(0, ${eyebrowOffset})`);

const rightEye = eyesG.append("circle")
  .attr('r', eyeRadius)
  .attr('cx', + eyeSpacing)
  .attr("stroke", "black")
  .attr("fill", "black");

const leftEyeBrow = eyebrowG.append("rect")
	.attr("x", -eyeSpacing - eyebrowWidth/2)
	.attr("width",eyebrowWidth)
	.attr("height",eyebrowHeight);

const rightEyeBrow = eyebrowG.append("rect")
	.attr("x", eyeSpacing- eyebrowWidth/2)
	.attr("width",eyebrowWidth)
	.attr("height",eyebrowHeight)

const mouth = g.append('path')
	.attr('d',d3.arc()({
	innerRadius: 80, 
  outerRadius: 100, 
  startAngle: Math.PI/2, 
  endAngle: Math.PI*3/2
}));

