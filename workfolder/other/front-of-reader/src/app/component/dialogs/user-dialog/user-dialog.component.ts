import { Component, OnInit, Inject, ViewChild, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { Lib } from 'src/app/entity/library/lib';
import { LibraryService } from 'src/app/service/library/library.service';
import { Book } from 'src/app/entity/book/book';
import { BookService } from 'src/app/service/book/book.service';
import { UserBooksComponent } from '../user-books/user-books.component';
import { UsersComponent } from 'src/app/component/users/users.component';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit, AfterViewInit {

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    public dialogBook: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private libHttp: LibraryService,
    private bookHttp: BookService) { }

  @Input() books: Book[];
  numbers: number[] = [1, 2, 3, 4, 5];
  condition = true;
  displayedColumnsLib = ['id', 'libraryName'];
  dataSourceLib: MatTableDataSource<Lib>;
  dataSourceBook: MatTableDataSource<Book>;

  @ViewChild("paginatorLib", { static: false }) paginatorLib: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngOnInit() {
    this.libHttp.getAllLibs().subscribe(data => this.dataSourceLib = new MatTableDataSource(data), null, () => {
      this.dataSourceLib.paginator = this.paginatorLib;
      this.dataSourceLib.sort = this.sort;
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


  openDialogBook() {
    let dialogRef = this.dialogBook.open(UserBooksComponent, {
      width: '1000px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog has closed.');
    });
  }

  goToReadBook(num: number) {
    alert(num);
  }

}
