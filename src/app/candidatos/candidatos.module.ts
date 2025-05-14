import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';
import { CandidatoRoutingModule } from './candidato.routing';



@NgModule({
  declarations: [
    CandidatosListComponent,
    CandidatosDetailComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CandidatosListComponent
  ]

})
export class CandidatosModule { }
