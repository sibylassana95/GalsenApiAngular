import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { DepartemensComponent } from './departemens/departemens.component';

const routes: Routes = [
  { path: 'regions', component: RegionsComponent },
  { path: 'departements', component: DepartemensComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
