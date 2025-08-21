function renderChartJSLineChart() {
  new Chart(document.getElementById('chartjs-line').getContext('2d'), {
    type: 'line',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E'],
      datasets: [{
        label: 'Line',
        data: [12, 19, 3, 5, 2],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, max: 20 },
        x: { }
      },
      plugins: { legend: { display: false } }
    }
  });
}
