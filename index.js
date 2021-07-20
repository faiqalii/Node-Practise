const rectangle = require('./rectangle.js');
let rect = require('./rectangle.js');

let solverect = (l,b) => {
    
    rect(l,b, (err , rectangle) => {
        if(err){
            console.log("ERROR: ", err.message);
        }
        else{
            console.log("Perimeter of a rectangle is " + rectangle.perimeter(l,b));
            console.log("Area of a rectangle is " + rectangle.area(l,b));
        }
    });
}

solverect(4,5);
solverect(-2,3);