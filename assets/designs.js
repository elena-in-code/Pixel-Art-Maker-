// Select color input***

// Select size input***
const inputHeight = $("#input_height");
const inputWidth = $("#input_width");
// When size is submitted by the user, call makeGrid()
//Event on click of the submit button that will call the makeGrid function:
$("#input_submit").click(function(evt) {
  evt.preventDefault();
  makeGrid();
});

function makeGrid() {
	//Get values of size the inputs:
	var inputHeightValue = inputHeight.val();
	var inputWidthValue = inputWidth.val();

	//loop for rows Height:

	//loop for rows Width:
}
