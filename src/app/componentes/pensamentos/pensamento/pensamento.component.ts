import { Component, Input } from '@angular/core';

import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamentos';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  constructor(private service: PensamentoService) {

  }

  @Input() pensamento: Pensamento = {
    id: '',
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito: false
  };

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  };

  mudarIconeFavorito(): string {
    if(!this.pensamento.favorito) {
      return 'inativo';
    }
    return 'ativo';
  }

  atualizarFavorito() {
    this.service.mudarFavorito(this.pensamento).subscribe();
  }
};
