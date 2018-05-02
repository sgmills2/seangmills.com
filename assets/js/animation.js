var canvasLoader = function(){

  var self = this;
  window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();

  self.init = function(){
    self.canvas = document.getElementById('canvas');
    self.ctx = self.canvas.getContext('2d');
    self.ctx.lineWidth = 0.5;
    self.ctx.strokeStyle = 'rgba(0,0,0,.2)';
    self.count = 10;
    self.rotation = 270*(Math.PI/180);
    self.speed = 3;
    self.canvasLoop();
  };

  self.updateLoader = function(){
    self.rotation += self.speed/100;
  };

  self.renderLoader = function(){
    self.ctx.save();
    self.ctx.globalCompositeOperation = 'source-over';
    self.ctx.translate(150, 300);
    self.ctx.rotate(self.rotation);
    var i = self.count;
    while(i--){
      self.ctx.beginPath();
      self.ctx.arc(0, 0, i+(Math.random()*200), Math.random(), Math.PI/3+(Math.random()/12), false);
      self.ctx.stroke();
    }
    self.ctx.restore();
  };

  self.canvasLoop = function(){
    requestAnimFrame(self.canvasLoop, self.canvas);
    self.ctx.globalCompositeOperation = 'destination-out';
    self.ctx.fillStyle = 'rgba(255,255,255,.1)';
    self.ctx.fillRect(0,0,600,600);
    self.updateLoader();
    self.renderLoader();
  };

};

var loader = new canvasLoader();
loader.init();
