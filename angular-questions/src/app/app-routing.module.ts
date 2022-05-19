import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question5Component } from './questions/question5/question5.component';

const routes: Routes = [
  { path: 'question', component: Question5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
