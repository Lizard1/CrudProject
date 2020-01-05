import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { Lib } from 'src/app/entity/library/lib';
import { LibraryService } from 'src/app/service/library/library.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-gridoflibs',
  templateUrl: './gridoflibs.component.html',
  styleUrls: ['./gridoflibs.component.css']
})
export class GridoflibsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<Lib>;

  condition = true;
  numbers: number[] = [1, 2, 3, 4, 5];
  displayedColumns = ['id', 'libraryName', 'actions'];
  dataSourceLib: MatTableDataSource<Lib>;

  constructor(private libHttp: LibraryService) { }

  ngOnInit() {
    this.libHttp.getAllLibs().subscribe(data => this.dataSourceLib = new MatTableDataSource(data), null, () => {
      this.dataSourceLib.sort = this.sort;
      this.dataSourceLib.paginator = this.paginator;
    });
  }

  ngAfterViewInit() { }

  applyFilter(filterValue: string) {
    this.dataSourceLib.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceLib.paginator) {
      this.dataSourceLib.paginator.firstPage();
    }
  }

  toggle() {
    this.condition = !this.condition;
  }
}
