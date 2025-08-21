function renderD3LineChart() {
  const d3Labels = ['A', 'B', 'C', 'D', 'E'];
  const d3Data = [12, 19, 3, 5, 2];
  const svg = d3.select('#d3-line');
  const width = 320, height = 220, margin = {top: 30, right: 20, bottom: 40, left: 40};
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Create chart group
  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

  // Scales
  const x = d3.scalePoint().domain(d3Labels).range([0, chartWidth]);
  const y = d3.scaleLinear().domain([0, 20]).range([chartHeight, 0]);

  // Grid lines
  g.append('g')
    .attr('class', 'grid')
    .call(d3.axisLeft(y)
      .tickSize(-chartWidth)
      .tickFormat('')
    );

  // Line
  g.append('path')
    .datum(d3Data)
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 2)
    .attr('d', d3.line()
      .x((d, i) => x(d3Labels[i]))
      .y(d => y(d))
    );

  // Points
  g.selectAll('circle')
    .data(d3Data)
    .enter()
    .append('circle')
    .attr('cx', (d, i) => x(d3Labels[i]))
    .attr('cy', d => y(d))
    .attr('r', 4)
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
    .text('Line Value')
    .attr('alignment-baseline', 'middle')
    .attr('font-size', '14px');
}
