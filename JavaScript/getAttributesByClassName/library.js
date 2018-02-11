var test = getAttributesByClassName("data-value","theClass");

//Function go get all attributes with specific name from a specific class
//Call function and insert attribute name and class name separated by a comma as demonstrated in the test above
function getAttributesByClassName (attribute,className){
	var cName = document.getElementsByClassName(className);
	var attr = [];
	for(var i=0;i<cName.length;i++){
		attr.push(cName[i].getAttribute(attribute));
	}
	return attr;
}
console.log(test);
