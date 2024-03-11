import { Component, OnInit } from '@angular/core';
import { Region } from '../model/region.model';
import { GalsenapiServiceService } from '../galsenapi-service.service';
@Component({
  selector: 'app-galsenapi',
  templateUrl: './galsenapi.component.html',
  styleUrls: ['./galsenapi.component.css']
})
export class GalsenapiComponent  implements OnInit {
  regions!: Region[];

  constructor(private  dataService: GalsenapiServiceService) { }

  ngOnInit(): void {
    this.dataService.getRegions().subscribe(regions => {
      this.regions = regions;
    });
  }
}
