import { Component, OnInit } from '@angular/core';
import { Village } from '../model/village.model';
import { GalsenapiServiceService } from '../galsenapi-service.service';

@Component({
  selector: 'app-villages',
  templateUrl: './villages.component.html',
  styleUrl: './villages.component.css',
})
export class VillagesComponent implements OnInit {
  villages: Village[] = [];
  allVillages: Village[] = [];
  searchTerm: string = '';
  totalVillages: number = 0;

  constructor(private dataService: GalsenapiServiceService) {}

  ngOnInit(): void {
    this.dataService.getVillages().subscribe((village) => {
      this.villages = village;
      this.allVillages = this.villages;
      this.totalVillages = this.villages.length;
    });
  }

  search(): void {
    if (!this.searchTerm.trim()) {
      this.villages = [...this.allVillages];
      this.totalVillages = this.villages.length;
      return;
    }

    this.villages = this.allVillages.filter((village) =>
      village.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.totalVillages = this.villages.length;
  }
}
