import { Component, OnInit } from '@angular/core';
import { Departement } from '../model/departement.model';
import { GalsenapiServiceService } from '../galsenapi-service.service';

@Component({
  selector: 'app-departemens',
  templateUrl: './departemens.component.html',
  styleUrl: './departemens.component.css',
})
export class DepartemensComponent implements OnInit {
  departements: Departement[] = [];
  allDepartements: Departement[] = [];
  searchTerm: string = '';
  totalDepartement: number = 0;

  constructor(private dataService: GalsenapiServiceService) {}

  ngOnInit(): void {
    this.dataService.getDepartements().subscribe((departements) => {
      this.departements = departements;
      this.allDepartements = departements;
      this.totalDepartement = this.departements.length;
    });
  }

  search(): void {
    if (!this.searchTerm.trim()) {
      this.departements = [...this.allDepartements];
      this.totalDepartement = this.departements.length;
      return;
    }

    this.departements = this.allDepartements.filter((departement) =>
      departement.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.totalDepartement = this.departements.length;
  }
}
