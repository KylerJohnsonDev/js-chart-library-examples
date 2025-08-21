function renderUPlotLineChart() {
  const opts = {
    width: 320,
    height: 220,
    series: [
      {},
      { label: "Line", stroke: "blue" }
    ],
    axes: [
      { label: "Category", values: (u, vals) => ['A', 'B', 'C', 'D', 'E'] },
      { label: "Value", range: [0, 20] }
    ]
  };
  const data = [ [0,1,2,3,4], [12,19,3,5,2] ];
  const uplot = new uPlot(opts, data, document.getElementById("uplot-line"));
}
