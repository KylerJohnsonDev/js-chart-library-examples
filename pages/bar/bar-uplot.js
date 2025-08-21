function renderUPlotBarChart() {
  const opts = {
    width: 320,
    height: 220,
    series: [
      {},
      {
        label: "Bar",
        fill: "rgba(54,162,235,0.7)",
        stroke: "blue",
        points: { show: false },
        paths: uPlot.paths.bars({ size: [10, 15] })
      }
    ],
    axes: [
      { label: "Category", values: (u, vals) => ['A', 'B', 'C', 'D', 'E'] },
      { label: "Value", range: [0, 20] }
    ]
  };
  const data = [ [0,1,2,3,4], [12,19,3,5,2] ];
  const uplot = new uPlot(opts, data, document.getElementById("uplot-bar"));
}
