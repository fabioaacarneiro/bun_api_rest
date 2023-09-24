import { Usuario } from "@prisma/client";
import CasoDeUso from "../../shared/CasoDeUso";
import RepositorioUsuario from "./RepositorioUsuario";

export default class ConsultarUsuarios implements CasoDeUso<void, Usuario[]> {
    constructor(readonly repositorio: RepositorioUsuario ) {}

    executar(): Promise<Usuario[]> {
        return this.repositorio.consultarTodos()
    }
}