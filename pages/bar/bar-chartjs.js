function renderChartJSBarChart() {
  new Chart(document.getElementById('chartjs-bar').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E'],
      datasets: [{
        label: 'Bar',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(54, 162, 235, 0.7)'
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
