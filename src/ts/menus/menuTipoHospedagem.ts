import Menu from "../interfaces/menu";

export default class MenuTipoControleHospedagem implements Menu {
    mostrar(): void {
        console.clear();
        console.log("****************************");
        console.log("| Controle de Hospedagem");
        console.log("--------------------------");
        console.log("| 1 - Cadastrar nova hospedagem");
        console.log("| 2 - Listar hospedagens");
        console.log("| 0 - Voltar");
        console.log("--------------------------");
    }
}