import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const MovieCard = ({movie}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.posterURL} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.description}</Card.Text>
      <Rating name="read-only" value={movie.rating} readOnly max={10}/>
      <Link to={`/movie/${movie.id}`}>
      <Button variant="primary">More Details</Button>
      </Link>
     
    </Card.Body>
  </Card>
  )
}

export default MovieCard