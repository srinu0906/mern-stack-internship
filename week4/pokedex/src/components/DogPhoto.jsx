import { useEffect, useState } from "react";

const DogPhoto = () => {
    const [dogPhoto, setDogPhoto] = useState(null);

    const fetchDog = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json(); 
            setDogPhoto(data.message);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchDog(); 
    }, []);

    return (
        <>
            <h2>Display Dog</h2>
             <button onClick={fetchDog}>Click me</button>
            {dogPhoto ? (
                <img src={dogPhoto} alt="dog-pic" height='500px'/>
            ) : (
                <p>Loading...</p>
            )}
           
        </>
    );
};

export default DogPhoto;
