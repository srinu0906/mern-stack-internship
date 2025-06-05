// promises

const promise = new Promise((resolve,reject)=>{
    const success = true; // imagine your fun call is sucessful
    if(success){
        // if data is loaded from function 
        resolve("Operation sucessful. I got result");
    }
    else{
        reject("OOPs i got error")
    }
});

// to view the results of promise -> then and catch
promise
    .then((data)=>{
        console.log(data);
    }).
    catch((err)=> {
        console.log(err)
    });


    // get api -> array of objects ->[{},{}]
    // new way of promises
// instead of using then catch we usetry and catch
    const getPokemonData = async () =>{
        try{
            // if data is resolved 
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
            const data = await response.json(); // parsing JSON
            console.log(data)

        } catch(error){
            console.log("Error",error)
        }
    };

    getPokemonData();