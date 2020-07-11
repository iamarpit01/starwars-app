import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import Header from '../header';
import Search from '../shared/search';
import PlanetRow from '../shared/planet-row';
import './dashboard.scss';

const Dashboard = () => {
    const [planets, setPlanets] = useState([]);
    const [noResult, setNoResult] = useState(false);
    const [currentUser, setCurrentUser] = useState("");
    let [noOfSearch, setNoOfSearch] = useState(0);

    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem("user")){
            setCurrentUser(localStorage.getItem("user"));
            console.log("calling use")
        }
        else{
            history.push("/")
        }
 
    }, [0])

    // FETCHING SEARCH DATA
    const searchPlanet = value => {
        Axios.get("https://swapi.dev/api/planets/?search="+value)
                .then(response => {
                    setPlanets(response.data.results)
                    response.data.results.length > 0 ? setNoResult(false) : setNoResult(true);
                })
                .catch(error => console.log(error.message));
    }

    const onHandleChange = (value) => {
        // SETTING THE NO OF SEARCHES
        setNoOfSearch(++noOfSearch);
        if(currentUser === "Luke Skywalker"){
            if(value.length > 0){
                searchPlanet(value);
            }
            else{
                setPlanets([])
                setNoResult(true);
            }
        }
        else{
            if(noOfSearch <= 15){
                if(value.length > 0){
                    searchPlanet(value)
                }
                else{
                    setPlanets([]);
                    setNoResult(true);
                }
            }
            else{
                alert("You have only 15 searches.")
            }
        }
    }

    return(
        <div>
            <Header />
            
            <h2>Search</h2>
            <Search onHandleChange={onHandleChange} />

            {/* IF THERE IS NO RESULT */}
            { noResult && <p>No Results Found!</p>}
            
            {/* PLANET DETAILS */}
            { planets.map((item, index) => (
                <PlanetRow key={index} currentItem={item} currentIndex={index} />
            ))}
        </div>
    )
}

export default Dashboard;