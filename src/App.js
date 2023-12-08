import './App.css';
import CommentList from './components/CommentList.js';
import Comment from './components/Comment.js';

const comments = [
  { id: 1, title: 'Reseña 1', content: 'Esta es una reseña increíble...', rating: 5 },
  { id: 2, title: 'Reseña 2', content: 'Otra reseña fantástica que elogia...', rating: 4.5 },
  { id: 3, title: 'Reseña 3', content: 'Esta reseña destaca algunos aspectos...', rating: 4 },
];

function App() {
  return (
    <div className="App">
      <h1>Noctia App</h1>
      <h1>Comentarios </h1>
      <CommentList comments={comments}/>

      
     
    </div>

    
      
    
  );
}

export default App;
