function renderD3BarChart() {
  const d3Labels = ['A', 'B', 'C', 'D', 'E'];
  const d3Data = [12, 19, 3, 5, 2];
  const svg = d3.select('#d3-bar');
  const width = 320, height = 220, margin = {top: 30, right: 20, bottom: 40, left: 40};
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const barWidth = chartWidth / d3Labels.length - 10;

  // Create chart group
  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

  // Scales
  const x = d3.scaleBand().domain(d3Labels).range([0, chartWidth]).padding(0.1);
  const y = d3.scaleLinear().domain([0, 20]).range([chartHeight, 0]);

  // Grid lines
  g.append('g')
    .attr('class', 'grid')
    .call(d3.axisLeft(y)
      .tickSize(-chartWidth)
      .tickFormat('')
    );

  // Bars
  g.selectAll('.bar')
    .data(d3Data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d, i) => x(d3Labels[i]))
    .attr('y', d => y(d))
    .attr('width', x.bandwidth())
    .attr('height', d => chartHeight - y(d))
    .attr('fill', 'steelblue');

  // X Axis
  g.append('g')
    .attr('transform', `translate(0,${chartHeight})`)
    .call(d3.axisBottom(x));

  // Y Axis
  g.append('g')
    .call(d3.axisLeft(y));

  // Legend
  svg.append('rect')
    .attr('x', width - margin.right - 80)
    .attr('y', margin.top - 20)
    .attr('width', 18)
    .attr('height', 18)
    .attr('fill', 'steelblue');
  svg.append('text')
    .attr('x', width - margin.right - 55)
    .attr('y', margin.top - 6)
    .text('Bar Value')
    .attr('alignment-baseline', 'middle')
    .attr('font-size', '14px');
}
