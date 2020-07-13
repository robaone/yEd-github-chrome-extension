console.log("content.js");

console.log('updated from contentscript');
console.log("Executing extension");
var button_group = document.getElementsByClassName("BtnGroup");
console.log(button_group);
if ( button_group.length > 0 ) {
	console.log("Adding sibling");
	var icon_group = button_group[0].nextElementSibling;
	icon_group.innerHTML = "Here" + icon_group.innerHTML;
}
