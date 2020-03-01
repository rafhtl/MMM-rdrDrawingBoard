MMM-rdrDrawingBoard

This is a module for the MagicMirror².


Installing the module
To install the module, assuming you have MagicMirror installed with the default configuration:

cd ~/MagicMirror/modules

git clone https://github.com/rafhtl/MMM-rdrDrawingBoard.git

Using the module
To use this module, add the following configuration block to the modules array in the config/config.js file:
{
        
        module: 'MMM-rdrDrawingBoard',
        position: 'fullscreen_below',
        config: {
            width: "900px", // 'px' or '%' or valid value for CSS dimensions units.
            height: "630px", // these have to be the same as .MMM-rdrDrawingBoard .canvas otherwise will not work!
            lineColor: "#FFFFFF", // the line color of the chalk
            lineSize: 7, // the line size of the chalk
            orientation: "landscape", //no need for this: orientation is established by CSS configuration
            smoothing: 0.55, //tweak smoothing - higher values make the drawings look much better, lower values make drawing feel a bit                                more responsive. Set to 0.85 by default.
            mode: "draw", //draw, fill, erase
            imgfileUrl: "modules/MMM-rdrDrawingBoard/public/blackboard01.png" //background for the blackboard

            

           }
    },

Please note that the css is based on vertical rotation (custom.css) NOT screen rotation (config.txt)
/* vertical */
body {
	margin: 0;
	position: absolute;
 	transform: rotate(-90deg);
 	transform-origin: top left; 
	width: 100vh;
	height: 100vw;
	
	object-fit: cover;
	top: 100vh;
        visibility: visible;  
    
    
 }
 
you can change this to horizontal by tweeking the css. Please share your design, thank you.

thank you Philip Sturgeon me@philsturgeon.uk for atrament.js original code.
