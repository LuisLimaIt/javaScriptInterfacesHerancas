import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardo", 5000, 98765432100);
gerente.cadastrarSenha("123");


const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

const cliente = new Cliente("Laís", 123432123, "456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");


console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);