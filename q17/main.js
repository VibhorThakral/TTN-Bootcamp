var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 1000;	// Time Between Switch
	 
// Image List
images[0] = "https://hatrabbits.com/wp-content/uploads/2016/03/oma.jpg";
images[1] = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg";
images[2] = "https://hatrabbits.com/wp-content/uploads/2020/06/lampflower.jpg";

// Change Image
function changeImg(){
    $('.slide').attr('src',`${images[i]}` );

	// Check If Index Is Under Max
	if(i < images.length - 1) {
	  i++; // Add 1 to Index 
	} else { 
		i = 0; // Reset Back To O
	}
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;