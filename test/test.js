var assert = require('assert');

/*
 * 
 * Defining test cases
 *
*/
describe('Upload', function() {
	it('should display a name file called "Kodu Help.docx"', function(){
		assert(validateFile('Upload'));
	});
});

describe('Carousel', function(){
	it('should display a picture file called "file.png"', function(){
		assert(validateFile('Carousel'));
	});
});


/*
 * 
 * Helper functions
 *
*/
function validateFile(testname){
	switch(testname){
		case "Upload":
			var file = "/home/user/file.txt";
			var file2 = "/home/user/Kodu Help.docx";
			return getFileName(file2) == "Kodu Help.docx";
			break;
		
		case "Carousel":
			var file = "/home/user/file.png";
			return getFileName(file).indexOf("file.png") > -1;
			break;		
	}	
	return false;
}

function getFileName(fullPath){
	return fullPath.split(/(\\|\/)/g).pop();
}
