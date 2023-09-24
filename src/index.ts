import { Elysia } from "elysia";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RegistrarUsuarioController from "./adapters/RegistrarUsuarioController";
import RepositorioUsuarioPrismaPg from "./external/prisma/RepositorioUsuarioPrismaPg";
import ConsultarUsuarios from "./core/usuario/service/ConsultarUsuarios";
import ConsultarUsuariosController from "./adapters/ConsultarUsuariosController";
import ConsultarUsuarioPorIdController from "./adapters/ConsultarUsuarioPorIdController";
import ConsultarUsuarioPorId from "./core/usuario/service/ConsultarUsuarioPorId";
import app from "./external/api/config"

// registrar rotas
const repositorioUsuario = new RepositorioUsuarioPrismaPg()

const registrarUsuario = new RegistrarUsuario(repositorioUsuario)
new RegistrarUsuarioController(app, registrarUsuario)

const consultarUsuarios = new ConsultarUsuarios(repositorioUsuario)
new ConsultarUsuariosController(app, consultarUsuarios)

const consultarUsuarioPorId = new ConsultarUsuarioPorId(repositorioUsuario)
new ConsultarUsuarioPorIdController(app, consultarUsuarioPorId)

app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
