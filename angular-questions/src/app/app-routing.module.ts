import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question2Component } from './questions/question2/question2.component';

const routes: Routes = [
  { path: 'question', component: Question2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
