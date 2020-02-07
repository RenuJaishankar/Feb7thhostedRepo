

//try{
//This function does not work, so it should throw an error
//myFunc()

//}catch (error){
//console.log(error)
//}

const myFunc = () => {
  try {
    //The throw statement allows you to create a custom error
    throw("This myFunc() while clicking button does not work.")
  }
  catch (error) {
    console.log(error)
  }
}

const otherFunc = () => {
  try {
    //This function doesnt exist so itll throw an error
    foo()
  } catch (e){
    console.log(e)
  }
}