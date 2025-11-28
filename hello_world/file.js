const fs= require('fs');

//synchronous call/blocking request=>if it comes first it will run and block others and after it than the others run...(go to the thread workers to give result)(jo phaly ha...wahi result dy ga) ....craeting files ..overwrites the file
fs.writeFileSync("./test.txt","hey there");
//default thread pool size is 4
//max?-8core cpu-8

//asynchronous call/non-blocking request=>if it comes it first others will run immediatly even they are at bottom of it..it give result(itself) when its processing completes(chill scene ..koi fark nahi parat),...overwrites the file
fs.writeFile("./test.txt","hello there async",(err)=>{});

//reading a file through synchronous call
//const result=fs.readFileSync("./contacts.txt","utf-8")   
//console.log(result);
//always returns a result

//reading a file through asynchronous call
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error:",err);
//     }   
//         else{
//             console.log(result);
//         }
// });//does not return anything
//always takes a callback function as an argument



//appending a file or updating a file...not overwriting
//fs.appendFileSync("./contacts.txt","03704966935");
//fs.appendFileSync("./contacts.txt","03017949510\n");
//fs.appendFileSync("./contacts.txt",'03007722242');


//fs.cpSync("./contacts.txt","./backup.txt");//copying a file

//fs.unlinkSync("./backup.txt");//deleting a file


//console.log(fs.statSync("./contacts.txt").isFile());//gives the status of the file