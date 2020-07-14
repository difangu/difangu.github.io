//annotation: 
const annotations = [
  {
    note: {
      label: "Blue cluster tends to stand alone",
      title: "Lower-Left Corner:"
    },
    x: 250,
    y: 350,
    dy: 100,
    dx: -120,
  },
    {
    note: {
      label: "Orange and purple clusters tend to mingle",
      title: "Upper-Right Corner:"
    },
    x: 900,
    y: 65,
    dy: 0,
    dx: 120
  }
]

// Add annotation to the chart
const makeAnnotations = d3.annotation()
      .annotations(annotations)


// scatterPlot 
scatterPlot = (selection, props) =>{
    const{
      xValue,
      xAxisLabel,
      yValue,
      circleRadius,
      yAxisLabel,
      margin,
      width,
      height,
      data
    } = props;   
  
  
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  
  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice();
  
  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([innerHeight, 0])
    .nice();
  
  const g = selection.selectAll(".container").data([null]);
  const gEnter = g
        .enter().append('g')
            .attr("class", "container");
    
  gEnter.merge(g)
    .attr('transform', 
          `translate(${margin.left},${margin.top})`
         );
  
  const xAxis = d3.axisBottom(xScale)
    .tickSize(-innerHeight)
    .tickPadding(15);
  
  const yAxis = d3.axisLeft(yScale)
    .tickSize(-innerWidth)
    .tickPadding(10);
  
  const yAxisG =g.select('.y-axis');
  const yAxisGEnter = gEnter
  .append("g")
  .attr("class", "y-axis");
    
  yAxisG
  .merge(yAxisGEnter)
  .call(yAxis)
  .selectAll('.domain').remove();
  

  const yAxisLabelText = yAxisGEnter
  .append("text")
      .attr('class', 'axis-label')
      .attr('y', -93)
      .attr('fill', 'black')
      .attr('transform', `rotate(-90)`)
      .attr('text-anchor', 'middle')
  .merge(yAxisG.select('.axis-label'))
      .attr('x', -innerHeight / 2)
      .text(yAxisLabel);
    
  const xAxisG =g.select('.x-axis');
  const xAxisGEnter = gEnter
  .append("g")
  .attr("class", "x-axis");
    
  xAxisG
  .merge(xAxisGEnter)
  .attr('transform', `translate(0,${innerHeight})`)
  .call(xAxis)
  .selectAll('.domain').remove();

 const xAxisLabelText = xAxisGEnter
  .append("text")
      .attr('class', 'axis-label')
      .attr('y', 75)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
  .merge(xAxisG.select('.axis-label'))
      .attr('x', innerWidth / 2)
      .text(xAxisLabel);
  
  const colorArray = d3.scaleOrdinal().domain(["Type1","Type2","Type3"]).range(["orange", "purple", "steelblue"]); 
    
  const circles = g.merge(gEnter).selectAll('circle').data(data);
  
  circles
    .enter().append('circle').merge(circles).transition().duration(1000)
      .attr('cy', d => yScale(yValue(d)))
      .attr('cx', d => xScale(xValue(d)))
      .attr('r', d => (d.Score*1.29)+1)
      .attr("fill", d=>colorArray(d.Type))
      .on("start", function(){
        d3.select(this).append("title").text(d => ("Country: "+ d.Country_or_region+ "\n" +"Happiness Rank: "+ d.Overall_rank));
      })
    ;
       
    
}


const dropdownMenu = (selection, props) => {
    const{
        options,
        onOptionClicked
    } = props; 
    
    let select = selection.selectAll("select").data([null]);
    select = select
        .enter()
        .append("select")
        .merge(select)
    .on("change", function(){
        onOptionClicked(this.value);
    });
    
    const option = select.selectAll("option").data(options);
    option.enter().append("option").merge(option).attr("value", d => d)
    .text(d => d);
}

const svg = d3.select('svg').call(makeAnnotations);

const width = svg.attr('width');
const height = svg.attr('height');

let data; 
let xColumn;
let yColumn;
const onXColumnClicked = column =>{
  xColumn = column;  
  render();
};

const onYColumnClicked = column =>{
  yColumn = column;  
  render();
};

const render = () => {

  d3.select("#x-menus")
    .call(dropdownMenu, {
    options: data.columns.slice(3,8),
    onOptionClicked: onXColumnClicked
  });
    
  d3.select("#y-menus")
    .call(dropdownMenu, {
    options: data.columns.slice(3,8),
    onOptionClicked: onYColumnClicked
  });
    
//10:42:29
    
 svg.call(scatterPlot,{
      xValue: d => d[xColumn],
      xAxisLabel: xColumn,
      yValue: d => d[yColumn],
      circleRadius: 10,
      yAxisLabel: yColumn,
      margin: { top: 50, right: 200, bottom: 88, left: 200 },
      width,
      height,
      data 
 });    
};

d3.csv('https://raw.githubusercontent.com/difangu/difangu.github.io/master/Data/2019.csv')
  .then(loadedData => {
    data = loadedData;
    data.forEach(d => {
      d.Score = +d.Score;
      d.GDP_per_capita = +d.GDP_per_capita;
      d.Social_support = +d.Social_support;
      d.Healthy_life_expectancy = +d.Healthy_life_expectancy;
      d.Freedom = +d.Freedom;
      d.Generosity = +d.Generosity;
      d.Corruption = +d.Corruption;
      d.Type = d.Type;
    });
    xColumn = data.columns[3];
    yColumn = data.columns[3];
    render();
})



;