import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import { data } from '../data';



const MovieDetails = () => {
  const {id} = useParams();
  let specificMovie= data.filter((el)=> el.id=== id);
  return (
    <div>
      {specificMovie.map((el)=>
       <Card style={{ width: "800px" , margin: "auto"}} key={el.id}>
       <iframe height={"400px"} src={el.movieTrailer}></iframe>
       <Card.Body>
         <Card.Title>{el.title}</Card.Title>
         <Card.Text>{el.description}</Card.Text>
         <Link to={"/"}>
         <Button variant="warning">Back Home</Button>
         </Link>
       </Card.Body>
     </Card>
      )}
     
    </div>
  )
}

export default MovieDetails