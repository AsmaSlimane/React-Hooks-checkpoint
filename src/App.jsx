import { useState } from "react"
import AddMovie from "./Components/AddMovie"
import MovieList from "./Components/MovieList"
import { data } from "./data"
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [movies,setMovies]=useState(data);
  const addingMovie=(X)=>{
    setMovies([...movies, X]);
  };
  const [search, setSearch]= useState("");
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center " style={{width:"600px"}}>
        
      <AddMovie addingMovie={addingMovie}/>
      <input type="search" onChange={(e)=> {setSearch(e.target.value)}} />
      </div>
      <MovieList 
      data = {movies.filter((el)=> 
        el.title.toLowerCase().includes(search.toLowerCase())
      )}/>
      </div>
  )
}

export default App