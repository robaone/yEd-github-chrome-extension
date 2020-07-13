var button_group = document.getElementsByClassName("BtnGroup");


function getIconHtml(url) {
	return '<a class="btn-octicon tooltipped tooltipped-nw js-remove-unless-platform" data-platforms="windows,mac" href="'+url+'" aria-label="Open this file in yEd-live" data-ga-click="Repository, open with yEd-live Editor" target="_new">'+
		'<div style="display:block; width:16px; height:16px">'+
		'<svg'+
		'   xmlns:dc="http://purl.org/dc/elements/1.1/"'+
		'   xmlns:cc="http://creativecommons.org/ns#"'+
		'   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"'+
		'   xmlns:svg="http://www.w3.org/2000/svg"'+
		'   xmlns="http://www.w3.org/2000/svg"'+
		'   xmlns:xlink="http://www.w3.org/1999/xlink"'+
		'   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"'+
		'   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"'+
		'   width="100%"'+
		'   height="100%"'+
		'   viewBox="0 0 60 60"'+
		'   version="1.1"'+
		'   id="svg8">'+
		'  <defs'+
		'     id="defs2">'+
		'    <linearGradient'+
		'       inkscape:collect="always"'+
		'       id="linearGradient1012">'+
		'      <stop'+
		'         style="stop-color:#000000;stop-opacity:1;"'+
		'         offset="0"'+
		'         id="stop1008" />'+
		'      <stop'+
		'         style="stop-color:#000000;stop-opacity:0;"'+
		'         offset="1"'+
		'         id="stop1010" />'+
		'    </linearGradient>'+
		'    <linearGradient'+
		'       inkscape:collect="always"'+
		'       xlink:href="#linearGradient1012"'+
		'       id="linearGradient1014"'+
		'       x1="0"'+
		'       y1="219.27425"'+
		'       x2="438.54599"'+
		'       y2="219.27425"'+
		'       gradientUnits="userSpaceOnUse" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient864"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient866"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient868"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient870"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient872"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient874"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient876"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient878"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient880"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient882"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient884"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient886"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient888"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient890"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient892"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'    <linearGradient'+
		'       y2="219.27425"'+
		'       x2="438.54599"'+
		'       y1="219.27425"'+
		'       x1="0"'+
		'       gradientUnits="userSpaceOnUse"'+
		'       id="linearGradient894"'+
		'       xlink:href="#linearGradient1012"'+
		'       inkscape:collect="always" />'+
		'  </defs>'+
		'  <sodipodi:namedview'+
		'     fit-margin-bottom="0"'+
		'     fit-margin-right="0"'+
		'     fit-margin-left="0"'+
		'     fit-margin-top="0"'+
		'     id="base"'+
		'     pagecolor="#ffffff"'+
		'     bordercolor="#666666"'+
		'     borderopacity="1.0"'+
		'     inkscape:pageopacity="0.0"'+
		'     inkscape:pageshadow="2"'+
		'     inkscape:zoom="1.1988294"'+
		'     inkscape:cx="-13.62009"'+
		'     inkscape:cy="144.74292"'+
		'     inkscape:document-units="mm"'+
		'     inkscape:current-layer="layer1"'+
		'     inkscape:document-rotation="0"'+
		'     showgrid="false"'+
		'     inkscape:window-width="1252"'+
		'     inkscape:window-height="943"'+
		'     inkscape:window-x="350"'+
		'     inkscape:window-y="23"'+
		'     inkscape:window-maximized="0" />'+
		'  <metadata'+
		'     id="metadata5">'+
		'    <rdf:RDF>'+
		'      <cc:Work'+
		'         rdf:about="">'+
		'        <dc:format>image/svg+xml</dc:format>'+
		'        <dc:type'+
		'           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />'+
		'        <dc:title></dc:title>'+
		'      </cc:Work>'+
		'    </rdf:RDF>'+
		'  </metadata>'+
		'  <g'+
		'     transform="translate(-92.444446,-51.463561)"'+
		'     inkscape:label="Layer 1"'+
		'     inkscape:groupmode="layer"'+
		'     id="layer1">'+
		'    <g'+
		'       id="g181"'+
		'       transform="matrix(0.13718676,0,0,0.13718676,65.56585,50.918142)"'+
		'       style="fill:url(#linearGradient1014);fill-opacity:1">'+
		'      <g'+
		'         id="g125"'+
		'         style="fill:url(#linearGradient864);fill-opacity:1" />'+
		'      <g'+
		'         id="g127"'+
		'         style="fill:url(#linearGradient866);fill-opacity:1" />'+
		'      <g'+
		'         id="g129"'+
		'         style="fill:url(#linearGradient868);fill-opacity:1" />'+
		'      <g'+
		'         id="g131"'+
		'         style="fill:url(#linearGradient870);fill-opacity:1" />'+
		'      <g'+
		'         id="g133"'+
		'         style="fill:url(#linearGradient872);fill-opacity:1" />'+
		'      <g'+
		'         id="g135"'+
		'         style="fill:url(#linearGradient874);fill-opacity:1" />'+
		'      <g'+
		'         id="g137"'+
		'         style="fill:url(#linearGradient876);fill-opacity:1" />'+
		'      <g'+
		'         id="g139"'+
		'         style="fill:url(#linearGradient878);fill-opacity:1" />'+
		'      <g'+
		'         id="g141"'+
		'         style="fill:url(#linearGradient880);fill-opacity:1" />'+
		'      <g'+
		'         id="g143"'+
		'         style="fill:url(#linearGradient882);fill-opacity:1" />'+
		'      <g'+
		'         id="g145"'+
		'         style="fill:url(#linearGradient884);fill-opacity:1" />'+
		'      <g'+
		'         id="g147"'+
		'         style="fill:url(#linearGradient886);fill-opacity:1" />'+
		'      <g'+
		'         id="g149"'+
		'         style="fill:url(#linearGradient888);fill-opacity:1" />'+
		'      <g'+
		'         id="g151"'+
		'         style="fill:url(#linearGradient890);fill-opacity:1" />'+
		'      <g'+
		'         id="g153"'+
		'         style="fill:url(#linearGradient892);fill-opacity:1" />'+
		'      <g'+
		'         id="g155"'+
		'         style="fill:url(#linearGradient894);fill-opacity:1" />'+
		'    </g>'+
		'    <ellipse'+
		'       style="fill:#c0fc1a;fill-opacity:1;stroke-width:0.264583"'+
		'       id="path26"'+
		'       cx="120.19161"'+
		'       cy="79.908379"'+
		'       rx="22.139322"'+
		'       ry="24.254545" />'+
		'    <path'+
		'       style="fill:#242265;fill-opacity:1;stroke-width:0.264583"'+
		'       d="m 116.62276,109.63288 c -2.17149,-0.48821 -3.60513,-1.18049 -10.2723,-4.96032 -7.442175,-4.2192 -9.004589,-5.399717 -10.879832,-8.220477 -2.70781,-4.073128 -3.129656,-6.488364 -3.007609,-17.219763 0.0884,-7.77281 0.09186,-7.813984 0.832804,-9.919336 1.880326,-5.342812 3.761742,-7.19509 12.515467,-12.321642 7.14209,-4.182711 7.84089,-4.529963 10.4146,-5.175319 2.51026,-0.629447 6.91478,-0.389457 9.35646,0.509808 0.99871,0.367823 4.80047,2.375303 8.44834,4.461066 5.73029,3.276441 6.89338,4.051272 8.55039,5.696135 1.49768,1.486689 2.18551,2.443236 3.13925,4.365625 1.83598,3.700678 2.05189,5.38567 1.93882,15.130826 -0.0921,7.935513 -0.0955,7.977214 -0.8332,10.085128 -1.18447,3.384654 -3.08708,6.126622 -5.59694,8.066089 -1.61294,1.24639 -12.43438,7.59599 -14.33189,8.4094 -2.95578,1.26706 -7.3978,1.73952 -10.27436,1.09278 z m 5.52586,-8.99268 c 2.04111,-1.605537 1.92068,-4.201097 -0.25739,-5.547221 -0.7776,-0.480584 -1.52715,-0.629954 -3.90902,-0.778999 -4.80882,-0.300908 -6.54389,-1.499121 -9.52524,-6.577939 -2.25219,-3.836686 -2.63313,-4.996391 -2.512,-7.647265 0.0833,-1.82327 0.23489,-2.346725 1.28509,-4.43832 1.51969,-3.026641 1.63273,-4.653184 0.41191,-5.927438 -1.48848,-1.553641 -3.71205,-1.548139 -5.02519,0.01243 -1.33967,1.592116 -1.2574,2.531844 0.54099,6.178812 1.14234,2.31657 1.23251,2.648363 1.24495,4.581208 0.0127,1.973397 -0.0592,2.237401 -1.35774,4.984768 -1.49549,3.164039 -1.63492,4.031893 -0.85364,5.313225 0.85712,1.405726 1.57576,1.698371 4.80884,1.958261 4.53326,0.364405 6.70206,1.585561 8.88265,5.001425 1.11389,1.744886 2.13734,2.886253 2.8566,3.185723 1.01899,0.42426 2.67451,0.27923 3.40919,-0.29867 z m 14.5704,-8.288905 c 2.15859,-0.901922 2.40219,-3.115757 0.70546,-6.411253 -2.05133,-3.984207 -2.08695,-6.525967 -0.14479,-10.332176 1.28388,-2.516123 1.49319,-3.981241 0.76887,-5.381923 -0.64182,-1.241145 -1.99703,-1.749466 -5.10177,-1.913606 -2.21416,-0.117057 -2.99209,-0.274312 -4.14329,-0.837541 -1.73014,-0.846477 -3.2865,-2.317097 -4.26027,-4.025551 -1.37993,-2.421063 -2.76543,-3.532373 -4.4016,-3.53052 -2.63326,0.003 -4.21279,3.115363 -2.72973,5.378804 0.68289,1.042211 1.97964,1.485116 5.07717,1.73411 5.29165,0.425368 7.17047,1.956196 10.68217,8.703659 1.89889,3.648572 1.89747,6.21873 -0.005,9.885145 -1.28126,2.468666 -1.52613,3.741585 -0.97398,5.063072 0.73411,1.756985 2.63644,2.457786 4.5272,1.66778 z"'+
		'       id="path24" />'+
		'  </g>'+
		'</svg>'+
		'</div></a>';
}
	

console.log(button_group);
var yed_button = document.getElementById("yEdBtn");
console.log(yed_button);
if ( button_group.length > 0 ) {
	console.log("Adding sibling");
	if (yed_button == null){
		var icon_group = button_group[0].nextElementSibling;
		chrome.storage.sync.get(['url','file_info'], function(items) {
			  var redirect_url = items.url + '?owner=' + items.file_info.owner + '&repo=' + items.file_info.repo + '&file_path=' + items.file_info.file_path + '&branch=' + items.file_info.branch;
			  console.log("url = "+ redirect_url);
		      icon_group.innerHTML = getIconHtml(redirect_url) + icon_group.innerHTML;
		    });
	}
}
