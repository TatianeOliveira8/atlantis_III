import Processo from "../abstracoes/processo"
import MenuTipoControleHospedagem from "../menus/menuTipoHospedagem"
import CadastrarHospedagem from "./cadastroHospedagem"
import ListagemHospedagens from "./listagemHospedagem"

export default class ControleHospedagem extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoControleHospedagem()
        this.execucao = true
    }

    processar(): void {
        do {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero("Escolha uma opção:")

            switch (this.opcao) {
                case 1:
                    new CadastrarHospedagem().processar()
                    break
                case 2:
                    new ListagemHospedagens().processar()
                    break
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log("Opção inválida!")
                    break
            }

            if (this.execucao) {
                console.log("\nPressione Enter para continuar...")
                this.entrada.receberTexto("") 
            }
        } while (this.execucao)
    }
}