
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';
const AddMovie = ({addingMovie}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie,setNewMovie]= useState({
    id: Math.random(),
    title:"",
    description:"",
    posterURL:"",
  });
  const onChangeHandler=(e)=>{
    setNewMovie({...newMovie, [e.target.name]: e.target.value});
  }
const confirmHandler=(e)=>{
  e.preventDefault();
  addingMovie(newMovie);
  handleClose();

}
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Movie Title</Form.Label>
        <Form.Control onChange={onChangeHandler} name="title" type="text" placeholder="Enter movie name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={onChangeHandler} name= "description" type="text" placeholder="Enter movie description" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Movie Image</Form.Label>
        <Form.Control onChange={onChangeHandler} name="posterURL" type="text" placeholder="Enter movie image URL" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style = {{display:"block"}}>Movie Rating</Form.Label>
        <Rating
        name="simple-controlled"
        max = {10}
        onChange={(event, newValue) => {
          setNewMovie({...newMovie,rating:newValue})
        }}
      />
      </Form.Group>
       
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={confirmHandler}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie