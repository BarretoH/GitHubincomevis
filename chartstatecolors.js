function stateSelected() {
    var x = document.getElementById("stateSel");
    var i = x.selectedIndex;
	var stateID = x.options[i].value;
	var state = x.options[i].text;
	var prevState = document.getElementById("data");
	prevState.parentNode.removeChild(prevState);
	var script = document.createElement('script');
	script.setAttribute("type", "text/javascript")
	script.setAttribute("id", "data")
	script.onload = function () {
		resetChartData(data,state)
	}
    var radios = document.getElementsByName("type");
	var type = "RHHINCOME"
	if (radios[1].checked) {
		type = "ERHHINCOME"
	}
	if (radios[2].checked) {
		type = "RPPRHHINCOME"
	}
	if (radios[3].checked) {
		type = "RPPERHHINCOME"
	}
    script.src = 'decile/'.concat('STATE',stateID,'_',type,'.js');

    var chartHTML = document.getElementById("chartScript");
    document.body.insertBefore(script, chartHTML);
    //refresh the chart
    chart.validateData()
  }

function incomeSelected() {
    var x = document.getElementById("stateSel");
    var i = x.selectedIndex;
	var stateID = x.options[i].value;
	var state = x.options[i].text;
	var prevState = document.getElementById("data");
	prevState.parentNode.removeChild(prevState);
	var script = document.createElement('script');
	script.setAttribute("type", "text/javascript")
	script.setAttribute("id", "data")
	script.onload = function () {
		resetChartData(data,state)
	}
    var radios = document.getElementsByName("type");
	var type = "RHHINCOME"
	if (radios[1].checked) {
		type = "ERHHINCOME"
	}
	if (radios[2].checked) {
		type = "RPPRHHINCOME"
	}
	if (radios[3].checked) {
		type = "RPPERHHINCOME"
	}
    script.src = 'decile/'.concat('STATE',stateID,'_',type,'.js');

    var chartHTML = document.getElementById("chartScript");
    document.body.insertBefore(script, chartHTML);
    //refresh the chart
    chart.validateData()
  }

function resetChartData(input,state){
	chart.dataProvider = input
    chart.validateData()
}

var chart = AmCharts.makeChart("chartdiv",
				{
					"type": "serial",
					"categoryField": "Label",
					"columnWidth": 1,
					"angle": 30,
					"depth3D": 170,
					"marginLeft": 40,
					"marginRight": 200,
					"marginBottom": 100,
					"marginTop": 70,
					"minMarginBottom": 80,
					"sequencedAnimation": false,
					"startDuration": 0.000000,
					"startEffect": "easeOutSine",	
					"theme": "light",
					"accessible": true,
					"mouseWheelZoomEnabled": false,
					"precision": 0,
					"gridAboveGraphs": false,
					"export": {
						"enabled": true
					},
					"categoryAxis": {
						"gridPosition": "start",
						"axisAlpha": 0,
						"labelOffset": -5,
						"labelsEnabled": true,
						"minHorizontalGap": 5,
						"minVerticalGap": 5,
						"labelColorField": "Label Color",
						"labelRotation": 25,
						"gridCount": 10000,
						"gridAlpha": 0,
						"minorGridEnabled": true,
						"minorGridAlpha": 0,
						"minorTickLength": 10,
					},
					"valueScrollbar": {
						"enabled": false
					},
					"trendLines": [],
					"graphs": [
						{
							"alphaField": "Transparency",
							"balloonText": "[[title]] of [[Year]]: $[[value]]",
							"behindColumns": true,
							"fillAlphas": 1,
							"fillColors": "#FF0000",
							"id": "AmGraph-1",
							"lineAlpha": 0.9,
							"lineColor": "#FF0000",
							"title": "5p",
							"type": "column",
							"valueField": "5p",
							"fillColorsField": "Color",
							"lineColorField": "Color"
						},
						{
							"alphaField": "Transparency",
							"balloonText": "[[title]] of [[Year]]: $[[value]]",
							"fillAlphas": 1,
							"fillColors": "#ff5500",
							"id": "AmGraph-2",
							"lineAlpha": 0.9,
							"lineColor": "#ff5500",
							"title": "15p",
							"type": "column",
							"valueField": "15p",
							"fillColorsField": "Color",
							"lineColorField": "Color"
						},
						{
							"alphaField": "Transparency",
							"balloonText": "[[title]] of [[Year]]: $[[value]]",
							"fillAlphas": 1,
							"fillColors": "#ff8400",
							"id": "AmGraph-3",
							"lineAlpha": 0.9,
							"lineColor": "#ff8400",
							"title": "25p",
							"type": "column",
							"valueField": "25p",
							"fillColorsField": "Color",
							"lineColorField": "Color"
						},
						{
							"alphaField": "Transparency",
							"balloonText": "[[title]] of [[Year]]: $[[value]]",
							"fillAlphas": 1,
							"fillColors": "#ffb700",
							"id": "AmGraph-4",
							"lineAlpha": 0.9,
							"lineColor": "#ffb700",
							"title": "35p",
							"type": "column",
							"valueField": "35p",
							"fillColorsField": "Color",
							"lineColorField": "Color"
						},
						{
							"alphaField": "Transparency",
							"balloonText": "[[title]] of [[Year]]: $[[value]]",
							"fillAlphas": 1,
							"fillColors": "#ffb300",
							"id": "AmGraph-5",
							"lineAlpha": 0.9,
							"lineColor": "#ffb300",
							"title": "45p",
							"type": "column",
							"valueField": "45p",
							"fillColorsField": "Color",
							"lineColorField": "Color"
						},
						{
							"alphaField": "Transparency",
							"balloonText": "[[title]] of [[Year]]: $[[value]]",
							"fillAlphas": 1,
							"fillColors": "#ffd000",
							"id": "AmGraph-6",
							"lineAlpha": 0.9,
							"lineColor": "#ffd000",
							"title": "50p",
							"type": "column",
							"valueField": "50p",
							"fillColorsField": "Color",
							"lineColorField": "Color"							
						},
						{
							"alphaField": "Transparency",
							"balloonText": "[[title]] of [[Year]]: $[[value]]",
							"fillAlphas": 1,
							"fillColors": "#fff700",
							"id": "AmGraph-7",
							"lineAlpha": 0.9,
							"lineColor": "#fff700",
							"title": "55p",
							"type": "column",
							"valueField": "55p",
							"fillColorsField": "Color",
							"lineColorField": "Color"
						},
						{
							"alphaField": "Transparency",
							"balloonText": "[[title]] of [[Year]]: $[[value]]",
							"fillAlphas": 1,
							"fillColors": "#f2ff00",
							"id": "AmGraph-8",
							"lineAlpha": 0.9,
							"lineColor": "#f2ff00",
							"title": "65p",
							"type": "column",
							"valueField": "65p",
							"fillColorsField": "Color",
							"lineColorField": "Color"
						},
						{
							"alphaField": "Transparency",
							"balloonText": "[[title]] of [[Year]]: $[[value]]",
							"fillAlphas": 1,
							"fillColors": "#c8ff00",
							"id": "AmGraph-9",
							"lineAlpha": 0.9,
							"lineColor": "#c8ff00",
							"title": "75p",
							"type": "column",
							"valueField": "75p",
							"fillColorsField": "Color",
							"lineColorField": "Color"
						},
						{
							"alphaField": "Transparency",
							"balloonText": "[[title]] of [[Year]]: $[[value]]",
							"fillAlphas": 1,
							"fillColors": "#aaff00",
							"id": "AmGraph-10",
							"lineAlpha": 0.9,
							"lineColor": "#aaff00",
							"title": "85p",
							"type": "column",
							"valueField": "85p",
							"fillColorsField": "Color",
							"lineColorField": "Color"
						},
						{
							"alphaField": "Transparency",
							"balloonText": "[[title]] of [[Year]]: $[[value]]",
							"fillAlphas": 1,
							"fillColors": " #00FF00",
							"id": "AmGraph-11",
							"lineAlpha": 0.9,
							"lineColor": " #00FF00",
							"title": "95p",
							"type": "column",
							"valueField": "95p",
							"fillColorsField": "Color",
							"lineColorField": "Color"
						}
					],
					"guides": [
						{
							"balloonText": "Taller columns correspond to higher incomes. Colors correspond to how rich households are, with poorer ones shaded red and richer households shaded green.",
							"category": "X",
							"dashLength": 4,
							"expand": true,
							"id": "Guide-1",
							"inside": true,
							"label": "",
							"lineAlpha": 1,
							"position": "right",
							"toCategory": "X",
							"toValue": 400000,
							"value": 0,
							"valueAxis": "ValueAxis-1",
							"position": "top",
							"inside": true
						}
						],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"stackType": "3d",
							"title": "Annual Household Income (2018$)",
							"maximum": 400000,
							"titleFontSize": 15
						}
					],
					"allLabels": [
						{
							"id": "Label-1",
							"size": 15,
							"text": "1976",
							"x": "7%",
							"y": "89%"
						},
						{
							"id": "Label-2",
							"size": 15,
							"text": "2018",
							"x": "70%",
							"y": "89%"
						}
					],								
					"balloon": {
						"fixedPosition": false
					}//,
					// "dataProvider": data
				}
            );
chart.dataProvider = data