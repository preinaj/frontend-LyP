import React from 'react';
import Comment from './Comment.js';



function CommentList(props) {
  return(
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.comments.map((comment) =>
          <Comment key={comment.id} comment={comment}/>
        )}
      </tbody>
    </table>
  )
}


export default CommentList;