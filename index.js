let rect = require('./rectangle.js');

let solverect = (l,b) => {
    if(l<=0 || b<=0){
        console.log("Lenght and Breadht should be greater than zero");
    }
    else{
        console.log("Perimeter of a rectangle is " + rect.perimeter(l,b));
        console.log("Area of a rectangle is " + rect.area(l,b));
    }
}

solverect(4,5);