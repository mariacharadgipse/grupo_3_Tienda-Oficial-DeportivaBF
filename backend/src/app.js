const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const methodOverride = require("method-override"); // Pasar poder usar los métodos PUT y DELETE
const cookieParser = require("cookie-parser");
const listEndpoints = require("express-list-endpoints");
const cors = require("cors");

const remembermeMiddleware = require("./middlewares/remembermeMiddleware");

// Config static folder
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

let indexRoutes = require("./routes/index");

let productsRoutes = require("./routes/products");

let usersRoutes = require("./routes/usersRoutes");

//rutas para la API

let APIindex = require("./routes/API/APIindex");
let APIproducts = require("./routes/API/APIproducts");

//0912
const session = require("express-session");

app.use(cors());
app.use(
  session({
    secret: "Nombre del sitio",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded({ extended: false })); //ver si se pone app.use(express.urlencoded({ extended: true }))
app.use(express.json());

console.log(listEndpoints(app));

//app.use(cookieParser())
//

app.use("/", indexRoutes);

app.use("/products", productsRoutes);

// app.use('/productss', productsRoutes)

app.use("/users", usersRoutes);

app.use("/api/", APIindex);
app.use("/api/products", APIproducts);

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "./views"));

app.get("*", (req, res) => {
  res.send(`
  <div style="display:flex; flex-direction:column; align-items:center">
  <h1>Esta pagina no existe</h1>
  <img style="width:50%" src="/img/not-found.webp" alt="error-404">
  </div>  
  `);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
