import Menu from "../interfaces/menu";

export default class MenuTipoAcomodacao implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de acomodação desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - solteiro simples`)
        console.log(`| 2 - solteiro mais`)
        console.log(`| 3 - casal simples`)
        console.log(`| 4 - familia simples`)
        console.log(`| 5 - familia mais`)
        console.log(`| 6 - familia super`)
        console.log(`----------------------`)
    }
}