const DUMMY_DATA = [
  { id: 'Examples: Finland, United States, United Kingdom	', level: 'High Happiness', value: 6.67 },
  { id: 'Examples: Thailand, Hong Kong, China', level: 'Middle Happiness', value: 5.47 },
  { id: 'Examples: Egypt, Iraq, India', level: 'Low Happiness', value: 4.35 },
];

const MARGINS = {top: 20, bottom: 10};
const CHART_WIDTH = 600; 
const CHART_HEIGHT = 400 - MARGINS.bottom - MARGINS.top; 

let selectedData = DUMMY_DATA;

const x = d3.scaleBand().rangeRound([0,CHART_WIDTH]).padding(0.1); 
const y = d3.scaleLinear().range([CHART_HEIGHT, 0]);
const colorArray = d3.scaleOrdinal().domain(["d1","d2","d3"]).range(["orange", "purple", "steelblue"]);


const annotations = [
  {
    note: {
      label: "Finland: 7.76",
      title: "Happiest Country"
    },
    x: 65,
    y: 120,
    dy: -50,
    dx: 20
  },
    {
    note: {
      label: "Malawi: 3.41",
      title: "Least Happy Country"
    },
    x: 550,
    y: 210,
    dy: -50,
    dx: -20
  }
    
    
]

// Add annotation to the chart
const makeAnnotations = d3.annotation()
      .annotations(annotations)

const chartContainer = d3.select("svg")
    .attr("width", CHART_WIDTH)
    .attr("height", CHART_HEIGHT + MARGINS.bottom + MARGINS.top);

    x.domain(DUMMY_DATA.map((d) => d.level));
    y.domain([0, d3.max(DUMMY_DATA, (d) => d.value) + 3] );


const chart = chartContainer.append("g")
.call(makeAnnotations);

chart.append("g")
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .attr("transform", `translate(0, ${CHART_HEIGHT+10})`)
    .attr("color", "lighgray");
    
function renderChart(){
    
    
    chart
    .selectAll(".bar")
    .data(selectedData, data => data.id)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", x.bandwidth())
    .attr("height", (data) => CHART_HEIGHT - y(data.value))
    .attr("x", (data) => x(data.level))
    .attr("y", (data) => y(data.value))
    .attr("fill", (data) => colorArray(data.value))
    .on('mouseover', function(data){
            d3.select(this)
            .style("fill", "lightgray");
        }
       )
    .on("mouseout", function(data){
            d3.select(this)
            .transition()
            .duration(250)
            .style("fill", colorArray(data.value));
            }
       )
    .append("title").text(data => data.id)
    ;
    
    
    chart.selectAll(".bar").data(selectedData, data => data.id).exit().remove();
    
    chart
    .selectAll(".label")
    .data(selectedData, data => data.id)
    .enter()
    .append("text")
    .text(data => data.value)
    .attr("x", data => x(data.level) + x.bandwidth()/2)
    .attr("y", data => y(data.value) - 20)
    .attr("text-anchor", "middle")
    .classed("label", true)
    
    chart.selectAll(".label").data(selectedData, data => data.id).exit().remove();
    
}

renderChart();

let unselectedIds = [];

const listItems =d3.select("#data")
.select("ul")
.selectAll("li")
.data(DUMMY_DATA)
.enter()
.append("li");
listItems.append("span").text(data => data.level);
listItems
    .append("input")
    .attr("type", "checkbox")
    .attr("checked", true)
    .on("change", (data) => 
    {if(unselectedIds.indexOf(data.id) === -1){
        unselectedIds.push(data.id);
    }else{
        unselectedIds = unselectedIds.filter(id => id !== data.id);
    }
    selectedData = DUMMY_DATA.filter(
        d => unselectedIds.indexOf(d.id) === -1
    );
    renderChart();
});


