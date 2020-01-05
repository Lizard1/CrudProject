import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatTable } from '@angular/material';
import { BookService } from 'src/app/service/book/book.service';
import { Book } from 'src/app/entity/book/book';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  displayedColumns = ['id', 'bookName', 'authorName', 'genre', 'actions'];
  dataSource: MatTableDataSource<Book>;
  data: Book[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private bookHttp: BookService) { }

  ngOnInit() {
    this.bookHttp.getAllBooks().subscribe(data => {
      this.data = data;
      this.displayData(this.data);
    }, null, () => {
     this.initializationSortAndPaginator();
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayData(books: Book[]) {
    this.dataSource = new MatTableDataSource<Book>(books);
    this.initializationSortAndPaginator();
  }

  initializationSortAndPaginator() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  deleteBook(id: number) {
    this.bookHttp.deleteBookById(id).subscribe(data => {
      const index = this.data.findIndex(user => user.id === id);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
      this.displayData(this.data);
    });
  }
}
