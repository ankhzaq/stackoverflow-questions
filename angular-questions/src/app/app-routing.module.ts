import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question3Component } from './questions/question3/question3.component';

const routes: Routes = [
  { path: 'question', component: Question3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
