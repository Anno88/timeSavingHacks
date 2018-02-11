setAttributesByClassName("value","clicked","theClass");

//Function go set attribute values to all attributes with specific name in elements with a specific class
//Call function and insert attribute name, attribute value and class name separated by a comma as demonstrated in the test above
function setAttributesByClassName (attributeName,attributeValue,className){
	var cName = document.getElementsByClassName(className);
	var loopLenght = cName.length-1;
	for(var i=loopLenght;i>-1;i--){
		cName[i].setAttribute(attributeName,attributeValue);
	}
}
