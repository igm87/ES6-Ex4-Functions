'use strict';

const cakeLogic = (cake_types,is_choc) => {
    console.log("TThis cake is either "+cake_types[0] +" or " +cake_types[1] + ".") ;
    if(!is_choc){
        console.log("This cake is not " +cake_types[1]+ ".") ;
        console.log("Therefore, this cake is "+cake_types[0]+ ".");
    }
    else{
        console.log("This cake is not " +cake_types[0]+ "." );
        console.log("Therefore, this cake is "+cake_types[1]+ ".");
    }
}

const cake_types = ["vanilla","chocolate"] ;
cakeLogic(cake_types,false) ;