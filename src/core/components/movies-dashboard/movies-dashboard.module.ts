import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesDashboardComponent } from './movies-dashboard.component';
import { Route, RouterModule, Routes } from '@angular/router';

const route : Routes = [
  {
    path:'',
    component:MoviesDashboardComponent
  }
]

@NgModule({
  declarations: [MoviesDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[MoviesDashboardComponent]
})
export class MoviesDashboardModule { }
