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
	if ( inputHeightValue <= 30 && inputWidthValue <= 30 ) {
		for (var x = 1; x <= inputHeightValue; ++x ){
			var row = $("<tr></tr>");
			canvasOutput.append(row);
			//loop for columns:
			for (var y = 1; y <= inputWidthValue; ++y) {
				var col = $("<td></td>");
	    		row.append(col);
	  		}
		}
	}else{
		alert("Hola! The limit it is 30 Height & Width ");
	} 
}

//function clear grid:
function removeGrid() {
	canvasOutput.find("tr").remove().find("td").remove();
}

//function Draw on grid:
//event delegation example:
canvasOutput.on( 'click', 'td', function() { 
	//get color:
	var currentColor =  $("#colorPicker").val();
	//apply color on click
	$(this).css('background', currentColor);
 });

//Event on click of the reset button that will call the reset function:
resetButton.click(function(evt) {
  evt.preventDefault();
  reset();
});

function reset() {
	inputHeight.val(1);
	inputWidth.val(1);
	colorPicker.val("#000000");
	removeGrid();
}