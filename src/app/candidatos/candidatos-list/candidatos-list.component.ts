import { Component, OnInit, Output } from '@angular/core';
import { CandidatosService } from '../candidatos.service';
import { Candidato } from './candidato';

@Component({
  selector: 'app-candidatos-list',
  standalone: false,
  templateUrl: './candidatos-list.component.html',
  styleUrl: './candidatos-list.component.css'
})
export class CandidatosListComponent implements OnInit {
  candidatos: Array<Candidato> = [];
  @Output() candidatoSeleccionado = null;
  seleccionado = false;

  seleccionarCandidato(candidato: any) {
    this.candidatoSeleccionado = candidato;
    console.log(this.candidatoSeleccionado);
    this.seleccionado = true;
  }

  constructor(private candidatoService: CandidatosService) { }
  getCandidatos(): void{
    this.candidatoService.getCandidatos().subscribe((candidatos) =>{
      this.candidatos = candidatos.candidatos;
    });
  }

  ngOnInit(): void {
      this.getCandidatos();
  }
}
