const options = {
  base: {
    require: true,
    alias: "b"
  },
  limite: {
    alias: "l",
    default: 10
  }
};

const argv = require("yargs")
  .command("crear", "Crea archivo de una tabla de multiplicar", options)
  .command("listar", "Imprime en consola la tabla de multiplicar", options)
  .help()
  .argv;

module.exports = {
  argv
}