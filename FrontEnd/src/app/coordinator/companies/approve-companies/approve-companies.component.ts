import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from '../../../interfaces/company';

const COMPANIES: Company[] = [
  {
    name: 'Intel',
    legal_id: 1023048290,
    address: 'Belen, Heredia'
  },
  {
    name: 'Equifax',
    legal_id: 1023048290,
    address: 'La Rivera, Heredia'
  }
];

@Component({
  selector: 'app-approve-companies',
  templateUrl: './approve-companies.component.html',
  styleUrls: ['./approve-companies.component.scss']
})
export class ApproveCompaniesComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'legal_id',
    'address',
    'actions'
  ];
  dataSource = new MatTableDataSource(COMPANIES);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
