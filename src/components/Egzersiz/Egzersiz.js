import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";

function Egzersiz(){
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
            <ul>
                {egzersizList.map(egzersiz => (
                    <li>
                        {egzersiz.egzersizAdi} {egzersiz.egzersizTarifi}
                    </li>
                ))}
            </ul>
        );

    }
}

export default Egzersiz;