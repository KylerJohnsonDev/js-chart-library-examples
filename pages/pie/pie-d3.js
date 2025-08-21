function renderD3PieChart() {
  const d3Labels = ['A', 'B', 'C', 'D', 'E'];
  const d3Data = [12, 19, 3, 5, 2];
  const width = 320, height = 220, radius = Math.min(width, height) / 2 - 10;
  const svg = d3.select('#d3-pie').append('g').attr('transform', `translate(${width/2},${height/2})`);
  const pie = d3.pie()(d3Data);
  const arc = d3.arc().innerRadius(0).outerRadius(radius);
  svg.selectAll('path')
    .data(pie)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', (d, i) => d3.schemeCategory10[i]);
  svg.selectAll('text')
    .data(pie)
    .enter()
    .append('text')
    .attr('transform', d => `translate(${arc.centroid(d)})`)
    .attr('dy', '0.35em')
    .attr('text-anchor', 'middle')
    .text((d, i) => d3Labels[i]);
}
