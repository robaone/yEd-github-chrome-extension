var button_group = document.getElementsByClassName("BtnGroup");
console.log(button_group);
var yed_button = document.getElementById("yEdBtn");
console.log(yed_button);
if ( button_group.length > 0 ) {
	console.log("Adding sibling");
	if (yed_button == null){
		var icon_group = button_group[0].nextElementSibling;
		icon_group.innerHTML = "<div id=\"yEdBtn\">Hi There</div>" + icon_group.innerHTML;
	}
}
