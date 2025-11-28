function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}
//single export//default export
module.exports = { 
    add,subtract
    //addfn:add, subfn:subtract 
    }; 


//multiple export
//exports.add=(a,b)=>a+b;
//exports.subtract=(a,b)=>a-b;