import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';



function Comment(props) {
  return(
    <tr>
      <td>{props.comment.id}</td>
      <td>{props.comment.content}</td>
      <button className="btn btn-primary">Edit</button>
    </tr>
  )
 
}

export default Comment; 