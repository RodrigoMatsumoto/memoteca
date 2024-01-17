import { Component } from '@angular/core';
import { Pensamento } from '../pensamentos';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Apendendo Angular',
    autoria: 'Dev',
    modelo:'modelo1'
  }

  criarPensamento() {
    alert("Novo pensamento criado.");
  }

  cancelarPensamento() {
    alert("Ação cancelada");
  };
};
