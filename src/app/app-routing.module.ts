import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestpageComponent} from './testpage/testpage.component';
import {ResultspageComponent} from './resultspage/resultspage.component';
import {HomepageComponent} from './homepage/homepage.component'

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'test', component: TestpageComponent},
  {path: 'results', component: ResultspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }