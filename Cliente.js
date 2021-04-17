//Todas as vezes que criamos um arquivo javaScript que começa com letras maiusculas, significa que ele representa uma classe.
export class Cliente{
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(){
        return true;
    }
}



