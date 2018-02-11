var test = setAttributesByClassName("value","clicked","theClass");

//Function go get all attributes with specific name from a specific class
//Call function and insert attribute name and class name separated by a comma as demonstrated in the test above
function setAttributesByClassName (attributeName,attributeValue,className){
	var cName = document.getElementsByClassName(className);
	var loopLenght = cName.length-1;
	for(var i=loopLenght;i>-1;i--){
		cName[i].setAttribute(attributeName,attributeValue);
	}
}
