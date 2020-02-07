try{
    //the throw atatement allows you to create a custom error
    throw "hey stop that"
}
catch(error){
    //this error will refer back to my custom error in my try block
    console.log(error)
}

try{
    throw "this is another error"
}
catch(error){

    console.log(error)
}