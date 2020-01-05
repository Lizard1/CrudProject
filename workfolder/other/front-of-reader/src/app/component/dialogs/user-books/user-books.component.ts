import { Component, OnInit, Inject, Input, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { BookService } from 'src/app/service/book/book.service';
import { Book } from 'src/app/entity/book/book';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserBooksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bookHttp: BookService) { }

  displayedColumnsBook = ['id', 'bookName', 'authorName', 'genre'];
  @Input() books: Book[];
  condition = true;
  dataSourceBook: MatTableDataSource<Book>;

  @ViewChild("paginatorBooks", { static: false }) paginatorBooks: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngOnInit() {
    this.bookHttp.getAllBooks().subscribe(data => this.dataSourceBook = new MatTableDataSource(data), null, () => {
      this.dataSourceBook.paginator = this.paginatorBooks;
      this.dataSourceBook.sort = this.sort;
    });
  }

  ngAfterViewInit() { }

  applyFilter(filterValue: string) {
    this.dataSourceBook.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceBook.paginator) {
      this.dataSourceBook.paginator.firstPage();
    }
  }

  toggle() {
    this.condition = !this.condition;
  }

  goToReadBook(num: number) {
    alert(num);
  }
}
