
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App.jsx'
import MovieDetails from './Pages/MovieDetails.jsx'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element= {<App/>}/>
        <Route path="/movie/:id" element= {<MovieDetails/>}/>
    </Routes>
    </BrowserRouter>
 
)
