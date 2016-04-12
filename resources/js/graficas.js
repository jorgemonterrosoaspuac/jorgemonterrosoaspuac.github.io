var radarChartData = {
  labels: ["PHP", "HTML", "CSS", "javascript", "C#", "JAVA", "VB"],
  datasets: [
    {
      label: "BASES",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [28,70,60,50,35,50,25]
    },
    {
      label: "BASES #2",
      fillColor: "rgba(51,187,205,0.2)",
      strokeColor: "rgba(51,187,205,1)",
      pointColor: "rgba(51,187,205,1)",
      pointStrokeColor: "grey",
      pointHighlightFill: "grey",
      pointHighlightStroke: "rgba(51,187,205,1)",
      data: [38,50,80,10,65,59,42]
    }
  ]
};

window.onload = function(){
  window.myRadar = new Chart(document.getElementById("radarSkills").getContext("2d")).Radar(radarChartData, {
    responsive: true, angleLineColor : "white", angleLineWidth: .3, scaleLineColor: "white", scaleLineWidth: .3, pointLabelFontStyleSize: 13, pointLabelFontStyle: "italic", pointLabelFontColor: "rgba(255,255,255,0.6)"
  });
}
