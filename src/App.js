import './App.css';
import Books from './Books.js'

function App() {

  const c = [
    {
      "titulo": "To Kill a Mockingbird",
      "autor": "Harper Lee",
      "categoria": "fiction",
      "año": "1960",
      "vendedores": 1, 
      "stock": 90, 
      "precio": 10.5,
      "reseñas": 3.9
    },
    {
      "titulo": "1984",
      "autor": "George Orwell",
      "categoria": "dystopian",
      "año": "1949",
      "vendedores": 2, 
      "stock": 95, 
      "precio": 12.99,
      "reseñas": 4.3
    }
  ]

  return (
    <div className="App">
      <h1>Noctia App</h1>
      <Books books={c}/>
    </div>
  );
}

export default App;