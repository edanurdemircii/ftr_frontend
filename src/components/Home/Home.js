import React, {useEffect, useState} from "react";
import Egzersiz from "../Egzersiz/Egzersiz";

function Home(){

    const [error,setError]=useState(null);
    const [isLoaded,setIsLoaded]=useState(false);
    const [egzersizList,setEgzersizList]=useState([]);

    useEffect(() => {
        fetch("/egzersizler")
            .then(res=>res.json())
            .then(
                (result)=>{
                    setIsLoaded(true);
                    setEgzersizList(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                }
            )
    }, []);


    if(error){
        return <div>Error >></div>
    }
    else if (!isLoaded){
        return <div>Loading...</div>
    } else {
        return(
            <div className="container">



                {egzersizList.map(egzersiz => (

                      <Egzersiz title={egzersiz.egzersizAdi} text={egzersiz.egzersizTarifi}></Egzersiz>


                ))}
            </div>

        );

    }


}

export default Home;