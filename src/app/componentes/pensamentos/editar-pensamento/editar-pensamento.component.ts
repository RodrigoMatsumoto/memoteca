import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PensamentoService } from '../pensamento.service';
import { minusculoValidator } from '../criar-pensamento/minusculoValidators';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent {

  formulario!: FormGroup;

  constructor(
    private  service: PensamentoService,
    private router : Router,
    private route : ActivatedRoute,
    private formBuilder: FormBuilder
    ) {
      const id = this.route.snapshot.paramMap.get('id');
      this.service.buscarPorId(id!).subscribe((pensamento) => {
        this.formulario = this.formBuilder.group({
          id: [pensamento.id],
          conteudo: [pensamento.conteudo, Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/)
          ])],
          autoria: [pensamento.autoria, Validators.compose([
            Validators.required,
            Validators.minLength(3),
            minusculoValidator
          ])],
          modelo: [pensamento.modelo],
          favorito: [pensamento.favorito]
        });
      });
    }

    editarPensamento() {
      this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      })
    }

    cancelar() {
      this.router.navigate(['/listarPensamento']);
    }

    habilitarBotao(): string {
      if(this.formulario.valid) {
        return 'botao';
      } else {
        return 'botao__desabilitado';
      }
    }
}
