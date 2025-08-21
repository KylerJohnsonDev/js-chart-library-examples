function renderApexChartsPieChart() {
  var options = {
    chart: { type: 'pie', height: 220, width: 320 },
    series: [12, 19, 3, 5, 2],
    labels: ['A', 'B', 'C', 'D', 'E']
  };
  var chart = new ApexCharts(document.querySelector("#apexcharts-pie"), options);
  chart.render();
}
