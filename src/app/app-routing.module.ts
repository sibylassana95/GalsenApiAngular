import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalsenapiComponent } from './galsenapi/galsenapi.component';

const routes: Routes = [
  {path: 'villages', component:GalsenapiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
