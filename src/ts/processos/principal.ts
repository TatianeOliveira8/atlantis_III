import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import ListagemAcomodacoes from "./listagemAcomodacoes"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoListagemClientes from "./tipoListagemClientes"
import ControleHospedagem from "./controleHospedagem"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        do {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')

            switch (this.opcao) {
                case 1:
                    this.processo = new TipoCadastroCliente()
                    this.processo.processar()
                    break
                case 3:
                    this.processo = new TipoListagemClientes()
                    this.processo.processar()
                    break
                case 5:
                    this.processo = new ListagemAcomodacoes()
                    this.processo.processar()
                    break
                case 6:
                    this.processo = new ControleHospedagem()
                    this.processo.processar()
                    break
                case 0:
                    console.log('Até logo!')
                    this.execucao = false
                    break
                default:
                    console.log('Opção não entendida :(')
                    break
            }

            if (this.execucao) {
                console.log("\nPressione Enter para continuar...")
                this.entrada.receberTexto("")
            }
        } while (this.execucao)
    }
}