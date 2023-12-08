import './App.css';
import CommentList from './components/CommentList.js';
import Comment from './components/Comment.js';

const comments = [
  { customerDescription: "Belén González", description: 'Como todas las ediciones de Minalima, es una maravilla. Este es mi libro favorito de la saga, a lo que se ha sumado una encuadernación y una serie de ilustraciones increíbles. Un imprescindible para aquellos que crecimos leyendo a Harry Potter.', rating: 5, updatedDate:"06/10/2023" },
  { customerDescription: "Juan Gutiérrez", description: 'Es una mierda.', rating: 0, updatedDate:"23/10/2023" },
  { customerDescription: "Sandra Jiménez", description: 'Es preciosa esta edicion!', rating: 4, updatedDate:"21/09/2023" },
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
