// ()()  this is how we write iife
//(declare fucntion) (call func)
//global scope er pollution (all the other var) theke shoranor jonne ifffe use kori 

(function logUser(){
    //this is a Named IIFE
    console.log('User Ahanaf');
})(); //here we must use ' ;' this after call() because it doesnt know the context to finish so we need to tell it


(()=>{
    console.log(`Db Connected`);
})();