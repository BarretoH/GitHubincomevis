var labels = []
function stateSelected() {
    var x = document.getElementById("stateSel");
    var i = x.selectedIndex;
	var state = x.options[i].text;
	labels.push(state)
	if (state != "Select a state"){
    //add the label
    labeler(state,true)
    //refresh the chart
    chart.validateData()
    // add the state to the list of states with labels on
    list = document.getElementById("labelList");
	newItem = document.createElement('button');
    newItem.setAttribute("id", state)
	newItem.setAttribute("class", "labelItem")
    newItem.setAttribute("onClick", "remove(this)")
    newText = document.createTextNode(state);
    newItem.appendChild(newText);
	list.appendChild(newItem);
	// remove it from the list of selectable states
  	x.remove(x.selectedIndex);
	}
  }

  //take in the state, and whether you want to add a label (true) or remove it (false)
  //return true if you found the state and added the label, false otherwise
function labeler(state,add){
    var found = false
    for (var j = 0; j < data.length; j++){
        if (data[j].State == state && data[j].Middle == 1){
            found = true
            if (add){
                data[j].Label=state
            }
           else {
            data[j].Label=""
           }
        }
      }
    return found
}

function remove(input) {
    //remove the entry from the list
    var ul = document.getElementById("labelList");
    ul.removeChild(input);
    //remove the label
	var state = input.innerText
	const index = labels.indexOf(state);
	if (index > -1) {
  		labels.splice(index, 1);
	}
	labeler(state,false)
	// add the state that was just remove back into the list of selectable states
	var sel = document.getElementById("stateSel");
	placeholder = sel[0]
	sel.remove(sel[0])
	newItem = document.createElement('option');
    newText = document.createTextNode(state);
    newItem.appendChild(newText);
	sel.appendChild(newItem);
	availStates = sel.children;
	availStates = Array.prototype.slice.call(availStates).sort(function(a, b) {
		return a.firstChild.data.toLowerCase().localeCompare(b.firstChild.data.toLowerCase());
	});
	sel.appendChild(placeholder)
	for (var i = 0, length = availStates.length; i < length; i++) {
		sel.appendChild(availStates[i]);
	}
    chart.validateData()
}

// function to change the data passed to the chart
function newChartSelect() {
	var radios = document.getElementsByName("type");
	var type = "RHHINCOME";
	if (radios[1].checked) type = "ERHHINCOME";
	if (radios[2].checked) type = "RPPRHHINCOME";
	if (radios[3].checked) type = "RPPERHHINCOME";

	var x = document.getElementById("yearSelect");
	var i = x.selectedIndex;
	var year = x.options[i].text;

	// Remove previous data script if it exists
	var prevYear = document.getElementById("data");
	if (prevYear && prevYear.parentNode) {
		prevYear.parentNode.removeChild(prevYear);
	}

	// Create new data script
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.id = "data";
	script.onload = function () {
		for (var j = 0; j < labels.length; j++) {
			labeler(labels[j], true);
		}
		resetChartData(data, year, type);
	};
	script.src = "decile/YEAR" + year + "_" + type + ".js";

	// Just append safely at the end of <body>
	document.body.appendChild(script);
}
function resetChartData(input,yr,type){
	chart.allLabels[2].text = yr
	axisName = "Annual Household Income (2018$)"
	if (type == 'ERHHINCOME'){
		axisName = "Annual Household Income per person (2018$)"
	}
	if (type == 'RPPERHHINCOME'){
		axisName = "Annual Household Income per person (2018$)"
	}
	chart.valueAxes[0].title = axisName
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
						"autoGridCount": false,
						"gridCount": 3912,
						// Change gridAlpha and minorGirdAlpha to 0 to eliminate the vertical grid 
						"gridAlpha": 0,
						"minorGridEnabled": true,
						"minorGridAlpha": 0,
						"minorTickLength": 10,
					},
					"valueScrollbar": {
						"enabled": false
					},
					//"chartCursor": {
					//	"enabled": true,
					//	"animationDuration": 0,
					//	"avoidBalloonOverlapping": false,
					//	"bulletsEnabled": true,
					//	"bulletSize": 13,
					//	"leaveCursor": true,
					//	"limitToGraph": "AmGraph-10",
					//	"oneBalloonOnly": true,
					//	"pan": true,
					//	"tabIndex": 5
				//	},
					"trendLines": [],
					"graphs": graphs,
					"guides": [
							{
							"balloonText": "Taller columns correspond to higher incomes. Colors correspond to how rich the state was in 1976, with poorer states shaded red and richer states shaded green.",
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
							"text": "Poorer States",
							"x": "10%",
							"y": "95%"
						},
						{
							"id": "Label-2",
							"size": 15,
							"text": "Richer States",
							"x": "70%",
							"y": "95%"
						},
						{
							"id": "Label-3",
							"size": 15,
							"text": "1976",
							"x": "50%",
							"y": "95%"
						}
					//	{
					//		"id": "Label-3",
					//		"size": 12,
					//		"text": "Poorer to richer people",
					//		"x": "76%",
					//		"y": "86%",
					//		"rotation": -30.6
					//	},
					//	{
					//		"id": "Label-3",
					//		"size": 12,
					//		"text": "within a country",
					//		"x": "77%",
					//		"y": "87%",
					//		"rotation": -30.6
					//	}
					],					
					"balloon": {
						"fixedPosition": false
					}//,
					// "dataProvider": data
				}
            );
chart.dataProvider = data