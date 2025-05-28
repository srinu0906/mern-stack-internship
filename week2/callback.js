// callback functions
function morning(){
    console.log('Good Morning');
}

function afterNoon(name,callback){
    console.log('Good AfterNoon'+name);
    callback();
}

afterNoon('srinu',morning);