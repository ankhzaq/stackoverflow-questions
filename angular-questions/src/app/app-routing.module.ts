import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question4Component } from './questions/question4/question4.component';

const routes: Routes = [
  { path: 'question', component: Question4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
