import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamentos';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent {

  pensamento: Pensamento = {
    id: '',
    conteudo:'',
    autoria:'',
    modelo:''
  };

  constructor(
    private  service: PensamentoService,
    private router : Router,
    private route : ActivatedRoute
    ) {
      const id = this.route.snapshot.paramMap.get('id');
      this.service.buscarPorId(id!).subscribe((pensamento) => {
        this.pensamento = pensamento;
      });
    }

    editarPensamento() {
      this.service.editar(this.pensamento).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      })
    }

    cancelar() {
      this.router.navigate(['/listarPensamento']);
    }
}
