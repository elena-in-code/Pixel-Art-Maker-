// Select color input
const colorPicker = $("#colorPicker");
// Select size input
const inputHeight = $("#input_height");
const inputWidth = $("#input_width");
// Select submit button
const submitButton= $("#input_submit");
// Select reset button
const resetButton= $("#input_reset");
// Canvas Output
const canvasOutput = $("#pixel_canvas");

//Event on click of the submit button that will call the makeGrid function:
submitButton.click(function(evt) {
  evt.preventDefault();
  makeGrid();
});

//Draw the grid:
function makeGrid() {
	removeGrid();
	//Get values of size the inputs:
	var inputHeightValue = inputHeight.val();
	var inputWidthValue = inputWidth.val();
	//loop for rows:
	for (var x = 0; x <= inputHeightValue; ++x ){
		var row = $("<tr></tr>");
		canvasOutput.append(row);
		//loop for columns:
		for (var y = 0; y <= inputWidthValue; ++y) {
			var col = $("<td></td>");
    		row.append(col);
  		}
	}
}

//function clear grid:
function removeGrid() {
	canvasOutput.find("tr").remove().find("td").remove();
}

//function Draw on grid:

//Event on click of the reset button that will call the reset function:
resetButton.click(function(evt) {
  evt.preventDefault();
  reset();
});

function reset() {
	inputHeight.val(1);
	inputWidth.val(1);
	colorPicker.val("#000000");
}

//**************************************************************************************************************
// parent elements: one level above
// child elements: one level below
// sibling elements: in same level

// CDN = Content Delivery Network

// Selectors by tag name:
// $('div');
// Selectors by class name:
// $('.container');
// Selectors by id name:
// $('#footer');

// DOM transversal methods to move around the Dom:
// $('.container').parent() => inmidiate parent element. only goes up 1 level.
// $('.container').parents() => will go all the way to the top.
// $('.container').child() => only goes down 1 level.
// $('.container').find() => will go down more than one level.
// $('.container').siblings() => that has same parent.


