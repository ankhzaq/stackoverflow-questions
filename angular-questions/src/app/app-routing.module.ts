import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question1Component } from './questions/question1/question1.component';

const routes: Routes = [
  { path: 'question', component: Question1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
