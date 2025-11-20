import Impressor from "../interfaces/impressor";
import Hospedagem from "../modelos/hospedagem";

export default class ImpressorHospedagem implements Impressor {
    private hospedagem: Hospedagem;

    constructor(hospedagem: Hospedagem) {
        this.hospedagem = hospedagem;
    }

    imprimir(): string {
        const dataEntrada = this.hospedagem.dataEntrada.toLocaleDateString();
        const dataSaida = this.hospedagem.dataSaida?.toLocaleDateString() ?? "Não informada";

        return `Hóspede: ${this.hospedagem.cliente.Nome}\n` +
               `Acomodação: ${this.hospedagem.acomodacao.NomeAcomadacao}\n` +
               `Data de Entrada: ${dataEntrada}\n` +
               `Data de Saída: ${dataSaida}`;
    }
}
