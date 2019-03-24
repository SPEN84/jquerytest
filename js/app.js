// Create the "reveal Spoiler" Button
const $button = $('<button>Reveal Spoiler</button>');
// Append to web page
$('.spoiler').Append($button);





// Hide the spoiler text
$('.spoiler span').hide()
// when the button is pressed
$('.spoiler button').click(function(){
//show the spoiler text
	$('.spoiler span').show()
// hide the reveal spoiler button
$('.spoiler button').hide()
});

