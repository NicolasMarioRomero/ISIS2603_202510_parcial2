import { Routes, RouterModule } from '@angular/router';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'list', component: CandidatosListComponent},
  {path: 'detail', component: CandidatosDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CandidatoRoutingModule{ }
