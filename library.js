var test = getAttributesByClassName("data-value", "theClass");

function getAttributesByClassName (attribute, className){
	var cName = document.getElementsByClassName(className);
	var attr = [];
	for(i=0;i<cName.length;i++){
		attr.push(cName[i].getAttribute(attribute));
	}
	return attr;
}
console.log(test);
