import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { DepartemensComponent } from './departemens/departemens.component';
import { VillagesComponent } from './villages/villages.component';
import { GalsenapiComponent } from './galsenapi/galsenapi.component';

const routes: Routes = [
  { path: '', component: GalsenapiComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'departements', component: DepartemensComponent },
  { path: 'villages', component: VillagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
