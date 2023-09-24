import CasoDeUso from "../../shared/CasoDeUso";
import RepositorioUsuario from "./RepositorioUsuario";

type Entrada = {
    nome: string
    email: string
    senha: string
}

export default class RegistrarUsuario implements CasoDeUso<Entrada, void>{

    constructor(private readonly respositorio: RepositorioUsuario){}
    
    async executar(dados: Entrada): Promise<void> {
        const { nome, email, senha } = dados

        const usuarioExistente = await this.respositorio.consultarPorEmail(email)
        if (usuarioExistente) {
            throw new Error('Usuário já existe')
        }

        await this.respositorio.criar({nome, email, senha})
    }

}