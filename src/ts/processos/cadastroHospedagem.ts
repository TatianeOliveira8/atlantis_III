import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Acomodacao from "../modelos/acomodacao";
import Hospedagem from "../modelos/hospedagem";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";

import MenuTipoAcomodacao from "../menus/menuTipoAcomodacao";

export default class CadastrarHospedagem extends Processo {
    private clientes: Cliente[];
    private hospedagens: Hospedagem[];
    private acomodacoes: Acomodacao[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens;
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
        this.menu = new MenuTipoAcomodacao();
        this.execucao = true;
    }

    processar(): void {
        console.log("Iniciando o cadastro de uma nova hospedagem...");

        const clienteNome = this.entrada.receberTexto("Qual o nome do cliente?");
        const cliente = this.clientes.find(c => c.Nome === clienteNome);

        if (!cliente) {
            console.log("Cliente não encontrado!");
            return;
        }

        let acomodacao: Acomodacao | null = null;

        do {
            this.menu.mostrar();
            this.opcao = this.entrada.receberNumero("Qual tipo de acomodação deseja?");
            switch (this.opcao) {
                case 1: 
                acomodacao = new DiretorSolteiroSimples().construir(); 
                break;
                case 2:
                     acomodacao = new DiretorSolteiroMais().construir(); 
                     break;
                case 3: 
                acomodacao = new DiretorCasalSimples().construir(); 
                break;
                case 4:
                     acomodacao = new DiretorFamiliaSimples().construir(); 
                     break;
                case 5: 
                acomodacao = new DiretorFamiliaMais().construir(); 
                break;
                case 6: 
                acomodacao = new DiretorFamiliaSuper().construir(); 
                break;
                case 0: return; 
                default: console.log("Opção não entendida :("); 
                break;
            }
        } while (!acomodacao);
        const dataEntrada = this.entrada.receberData("Data de entrada da hospedagem:");
        let dataSaida: Date | undefined;
        const dataSaidaOpcional = this.entrada.receberTexto("Deseja informar data de saída? (s/n):");
        if (dataSaidaOpcional.toLowerCase() === "s") {
            dataSaida = this.entrada.receberData("Data de saída:");
        }

        let hospedagem = new Hospedagem(cliente, acomodacao!, dataEntrada, dataSaida);
        Armazem.InstanciaUnica.Hospedagens.push(hospedagem);

        console.log(`Hóspede ${cliente.Nome} hospedado em ${acomodacao!.NomeAcomadacao}!`);

    }
}
