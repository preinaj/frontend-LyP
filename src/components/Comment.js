import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';



function Comment(props) {
  const cellStyle = {
    textAlign: 'left'
  };
  return(
    <tr>
      <td>Imagen del avatar si se pone</td>
      <td style={cellStyle}>
        <div>
          {props.comment.customerDescription}
        </div>
        <div>
          {props.comment.updatedDate} 
        </div>  
      </td>
      <td style={cellStyle}>
        <div>
          {props.comment.rating}
        </div>
        <div>
          {props.comment.description} 
        </div>    
      </td>
      <button className="btn btn-primary">Edit</button>
    </tr>
  )
 
}

export default Comment; 