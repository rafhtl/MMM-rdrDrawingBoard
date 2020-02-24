/* Magic Mirror
 * Module: MMM-rdrDrawingBoard
 *
 * By rdr - MIT Licensed
 *
 * npm install canvasjs
 */
Module.register("MMM-rdrDrawingBoard", {
defaults: {

    
            width: "900px", // 'px' or '%' or valid value for CSS dimensions units.
            height: "680px", // these have to be the same as .MMM-rdrDrawingBoard .canvas
            lineColor: "#FFFFFF",
            lineSize: 6,
            orientation: "landscape", //non need for this
            smoothing: 0.55, //tweak smoothing - higher values make the drawings look much better, lower values make drawing feel a bit more responsive. Set to 0.85 by default.
            mode: "draw", //draw, fill
            imgfileUrl: "modules/MMM-rdrDrawingBoard/public/blackboard01.png" //background

  },

 

    getStyles: function()
    {
    return ["MMM-rdrDrawingBoard.css"];
    },
    getScripts: function() {
        return ["atrament.min.js"];
    },
    
  
  start: function() {
    Log.info("Starting module: " + this.name);
    this.addresses = [];
    
  },
  init: function() {
    Log.info("Init module: " + this.name);
    
    
  },

    setupDrawingBoard: function() {
        var self = this;
        //self.sendNotification("SHOW_ALERT", {title: "Drawing", message: "window.pageXOffset x:"+window.pageXOffset+" y:"+window.pageYOffset, timer: 1200});
        
        
        
    },

  
      getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.className = "wrapper"
        
        var blackboardImg = document.createElement("img");
        blackboardImg.className = "blackboard_img"
        blackboardImg.setAttribute('src', this.config.imgfileUrl);
        wrapper.appendChild(blackboardImg);
        
        
        
        
        var canvas = document.createElement('canvas');
        canvas.className = "canvas";
        canvas.id = "canvas";
        //canvas.style.width = this.config.width
        //canvas.style.height = this.config.height
        
        
        wrapper.appendChild(canvas);
        
        
        
        
               
        var buttons = document.createElement("div");
        buttons.className = "buttons"
        
        var button01 = document.createElement("button");
        button01.innerHTML = "CLEAR";
        button01.className = "button01";
        button01.id = "button01_id";
        button01.addEventListener("click", clearCanvas);
        
        var color_label = document.createElement("label");
        color_label.innerHTML = "COLOR";
        color_label.className = "color_label";
        var color_input = document.createElement("input");
        color_input.type="color";
        color_input.className = "color_input";
        color_input.addEventListener("change", function(e) {
          colorCanvas(color_input.value);
        }, false);
        color_input.value=this.config.lineColor;
        color_input.autocomplete="off";
        
        
        buttons.appendChild(color_label);
        buttons.appendChild(color_input);
        
        
        var weight_label = document.createElement("label");
        weight_label.innerHTML = "THICKNESS";
        weight_label.className = "weight_label";
        var weight_input = document.createElement("input");
        weight_input.type="range";
        weight_input.className = "weight_input";
        weight_input.addEventListener("change", function(e) {
          weightCanvas(parseFloat(weight_input.value));
        }, false);
        weight_input.min="1";
        weight_input.max="40";
        weight_input.step="0.1";
        weight_input.value=this.config.lineSize;
        weight_input.autocomplete="off";
        
        
        var mode_label = document.createElement("label");
        mode_label.innerHTML = "MODE";
        mode_label.className = "mode_label";
        var mode_input = document.createElement("select");
        mode_input.type="select";
        mode_input.className = "mode_input";
        
        // Set Values
        var mode_values = ["draw", "erase", "fill"];
        /* for (var i = 0; i < mode_input.options.length; i++) {
            mode_input.options[i].selected = values.indexOf(mode_input.options[i].value) >= 0;
        } */
        var mode_op1=document.createElement("option");
        mode_op1.value=mode_values[0];
        mode_op1.innerHTML=mode_values[0];
        mode_input.appendChild(mode_op1);
        
        var mode_op2=document.createElement("option");
        mode_op2.value=mode_values[1];
        mode_op2.innerHTML=mode_values[1];
        mode_input.appendChild(mode_op2);
        
        var mode_op3=document.createElement("option");
        mode_op3.value=mode_values[2];
        mode_op3.innerHTML=mode_values[2];
        mode_input.appendChild(mode_op3);
        
        
        
  
        mode_input.addEventListener("change", function() {
           modeCanvas(this.value);
        }, false);
        
        
        
        mode_input.value="draw";
        mode_input.autocomplete="off";
        
        
        
        
        buttons.appendChild(color_label);
        buttons.appendChild(color_input);
        buttons.appendChild(weight_label);
        buttons.appendChild(weight_input);
        buttons.appendChild(mode_label);
        buttons.appendChild(mode_input);
        
        
        
        
        wrapper.appendChild(buttons);
        buttons.appendChild(button01);
        
        const std_color = this.config.lineColor;
        const std_weight = this.config.lineSize;
        const sdb = new Atrament(canvas, {
          
          
          orientation:   this.config.orientation,
          width:         parseInt(this.config.width),
          height:        parseInt(this.config.height),
          color:         this.config.lineColor,
          weight:        this.config.lineSize,
          smoothing:     this.config.smoothing,
          mode:          this.config.mode
          
        });
        
        
          // Clear the canvas context using the canvas width and height
            function clearCanvas() {
                
                //self.sendNotification("SHOW_ALERT", {title: "Board", message: "CLEAR", timer: 1200});
                sdb.color = std_color;
                sdb.weight = std_weight;
                color_input.value = std_color;
                weight_input.value = std_weight;
                
                sdb.clear();    
                
            }
            function colorCanvas(color) {
                
                
                sdb.color = color;
               
            }
            function weightCanvas(weight) {
                
                
                sdb.weight = weight;
               
            }
            function modeCanvas(mode) {
                
                
                sdb.mode = mode;
               
            }
        return wrapper;
    },
    
  notificationReceived: function(notification, payload, sender) {
        if (notification === "DOM_OBJECTS_CREATED") {
                
                
                this.setupDrawingBoard();
                
        }
        
    },

  suspend: function(){
        //this.display = false;
        //this.updateDom(300);
      },

  resume: function(){ 
        //this.display = true;
        //this.updateDom(300);
      },
})