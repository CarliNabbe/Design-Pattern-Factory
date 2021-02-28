// The constructor to decorate
function Accessory() { 

    this.cost = function () { return 10; }; 
    this.color = function () { return "blue"; }; 
  
  } 
  
  // Decorator 1
  function Color( accessory ) { 
  
    var v = accessory.cost(); 
    accessory.cost = function() { 
      return v + 15; 
    }; 
  
  } 
  
  // Decorator 2
  function Size( accessory ){
  
    var v = accessory.cost(); 
    accessory.cost = function(){
      return  v + 50;
    };
  
  }
   
  // Decorator 3
  function Sound( accessory ){
  
    var v = accessory.cost(); 
    accessory.cost = function(){
       return  v + 25;
    };
  
  }
  
  var mb = new Accessory(); 
  Color(mb); 
  Size(mb);
  Sound(mb);
  
  // Outputs: 100
  console.log("The cost is " + mb.cost() + " euros" );
  
  // Outputs: blue
  console.log("The color is " + mb.color() );