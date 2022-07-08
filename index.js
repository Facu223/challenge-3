// npm start - para iniciar el servidor
const http = require("http");
const host = "localhost";
const port = 8000;

class User {
  constructor(id, firstName, lastName, age, country) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
  }
}

const allUsers = JSON.stringify([
  new User(1, "Anakin", "Skywalker", 45, "Tatooine"),
  new User(2, "Obi-Wan", "Kenobi", 57, "Stewjon"),
  new User(3, "Qui-Gon", "Jinn", 48, "Coruscant"),
  new User(4, "Yoda", "", 900, "Desconocido"),
  new User(5, "Luke", "Skywalker", 53, "Tatooine"),
]);

// Mensaje de error para utilizar en caso de acceder a cualquier ruta que no sea /usuarios
const errorMessage = JSON.stringify({
  statusCode: 404,
  message: "No se ha encontrado la ruta solicitada",
});

// Creación del servidor con su respectiva respuesta
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/usuarios":
      res.writeHead(200);
      res.end(allUsers);
      break;
    default:
      res.writeHead(404);
      res.end(errorMessage);
      break;
  }
});

// Levantando el servidor
server.listen(port, host, () => {
  console.log(
    `El servidor se está ejecutando en http://${host}:${port}/usuarios`
  );
});
