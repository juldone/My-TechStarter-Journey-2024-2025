import express from 'express'; 
  
const app = express();
const PORT = 3000

// middleware für json
app.use(express.json());

let todos = [
  {id: 1, title: "Learn Node.js", completed: true},
] // in memory 

app.get("/health", (req, res) => {
  res.send("I am healthy");
})

app.get("/todos", (req, res) => {
  // html response ---> res.send(todos);
  res.json(todos);
})

app.post("/todos", (req, res) => {
  const newTodo = req.body;

  // spead operator ...
  todos.push( {id: todos.length + 1, ...newTodo} )

  res.json(todos);
})

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;

  todos = todos.filter(todo => todo.id !== parseInt(id));

  res.json(todos);
})

// 1. ich muss eine methode definieren und mitsenden
//  get bedeutet, dass ich daten abrufen möchte
//  post bedeutet, dass ich daten hinzufügen möchte
//  put bedeutet, dass ich daten aktualisieren möchte
//  delete bedeutet, dass ich daten löschen möchte

// 2. ich definiere den endpoint
//  http://localhost:3000/todos

// 3. ich definiere header
// Content-Type: application/json

// 4. ich sende ein body mit (aber nur wenn es post request ist)


// ein todo hinzufügen 
// ein todo löschen
// todos anzeigen


app.listen(PORT, () => {
  console.log("Server is running on port 3000");
})
