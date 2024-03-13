import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalsenapiComponent } from './galsenapi/galsenapi.component';
import { FormsModule } from '@angular/forms';
import { RegionsComponent } from './regions/regions.component';
import { DepartemensComponent } from './departemens/departemens.component';
import { VillagesComponent } from './villages/villages.component';
@NgModule({
  declarations: [
    AppComponent,
    GalsenapiComponent,
    RegionsComponent,
    DepartemensComponent,
    VillagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
