'use strict' ;

/*function contains an array of male objects, this defines all known men
** The array contains a key / value pair that defines mortality as being true 
** for all attributes in the 'men' object
*/

const isMan = (name) => {
    name = name.toLowerCase() ;
    let is_found = false ;
    //declare various male objects 
    const plato = {Name:"plato"} ;
    const homer = {Name:"homer"} ;
    const socrates = {Name:"socrates"} ;
    //declare 'men' as a collection of male objects who are mortal
    const men = {males:[plato,homer,socrates],mortal:true} ; 

    //nested arrow function to identify if name is known to us
    men.males.map((maleObj) => {if(maleObj.Name === name) is_found = true});
    if(is_found){
        console.log("Is "+name+" a man? "+is_found);
        console.log("Are all men mortal? "+men.mortal);
        console.log("Therefore, "+name+" is mortal.") ;
    }
    else{
        console.log(name +" isn't in the list of known men") ;
    }

}

const isValidInput = (name)=>{
    if(typeof(name) !== "string"){
        console.log("Sorry "+name +" isn't a valid string") ;
    }
    else{
        isMan(name);
    }
}

//testing various pseudo user entries
//this would normally be obtained via a web page prompt 
isValidInput("phil") ;
isValidInput(23) ;
isValidInput("Socrates") ;
