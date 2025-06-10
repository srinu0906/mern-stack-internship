import { useEffect, useState } from "react"

const DogPhoto = () => {
    const [dogPhoto,setDogPhoto] = useState(null);
    const fetchDog = async () =>{
        try{
            // 
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            setDogPhoto(data.message);
        }
        catch(err){
        console.log(err)
    }

    useEffect(()=>{
        fetchDog();
    },[])

    }
    
    return(
        <>
            <h2>Display Dog</h2>
            <img src={dogPhoto} alt='dog-pic'/>
        </>
    );
}

export default DogPhoto;