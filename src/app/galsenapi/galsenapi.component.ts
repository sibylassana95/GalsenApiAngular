import { Component, OnInit } from '@angular/core';
import { Region } from '../model/region.model';
import { GalsenapiServiceService } from '../galsenapi-service.service';

@Component({
  selector: 'app-galsenapi',
  templateUrl: './galsenapi.component.html',
  styleUrls: ['./galsenapi.component.css']
})
export class GalsenapiComponent implements OnInit {
  regions: Region[] = [];
  allRegions: Region[] = [];
  searchTerm: string = '';
  totalRegions: number = 0;

  constructor(private dataService: GalsenapiServiceService) { }

  ngOnInit(): void {
    this.dataService.getRegions().subscribe(regions => {
      this.regions = regions;
      this.allRegions = regions;
      this.totalRegions = this.regions.length;
    });
  }

  search(): void {
    if (!this.searchTerm.trim()) {
      this.regions = [...this.allRegions];
      this.totalRegions = this.regions.length;
      return;
    }
    
    this.regions = this.allRegions.filter(region =>
      region.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.totalRegions = this.regions.length;
  }
}
