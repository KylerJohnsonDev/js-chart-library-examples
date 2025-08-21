function renderChartJSPieChart() {
  new Chart(document.getElementById('chartjs-pie').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E'],
      datasets: [{
        label: 'Pie',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)'
        ]
      }]
    }
  });
}
