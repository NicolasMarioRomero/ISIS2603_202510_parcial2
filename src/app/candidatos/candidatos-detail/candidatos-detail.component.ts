import { Component, OnInit, Input } from '@angular/core';
import { Candidato } from '../candidatos-list/candidato';

@Component({
  selector: 'app-candidatos-detail',
  standalone: false,
  templateUrl: './candidatos-detail.component.html',
  styleUrl: './candidatos-detail.component.css'
})
export class CandidatosDetailComponent implements OnInit {
  @Input() candidato!: Candidato;

  constructor() {}
  ngOnInit() {}
}
