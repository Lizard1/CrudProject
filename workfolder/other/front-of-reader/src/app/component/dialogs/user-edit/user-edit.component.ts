import { Component, OnInit, Inject, Input, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { LibraryService } from 'src/app/service/library/library.service';
import { Book } from 'src/app/entity/book/book';
import { Lib } from 'src/app/entity/library/lib';
import { User } from 'src/app/entity/user/user';
import { UserService } from 'src/app/service/user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private libHttp: LibraryService,
    private userHttp: UserService) { }

  @Input() books: Book[];
  numbers: number[] = [1, 2, 3, 4, 5];
  condition = true;
  displayedColumnsLib = ['id', 'libraryName'];
  dataSourceLib: MatTableDataSource<Lib>;
  dataSourceBook: MatTableDataSource<Book>;

  @ViewChild('paginatorLib', { static: false }) paginatorLib: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngOnInit() {
    this.libHttp.getAllLibs().subscribe(data => this.dataSourceLib = new MatTableDataSource(data), null, () => {
      this.dataSourceLib.paginator = this.paginatorLib;
      this.dataSourceLib.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSourceLib.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceLib.paginator) {
      this.dataSourceLib.paginator.firstPage();
    }
  }

  toggle() {
    this.condition = !this.condition;
  }

  goToReadBook(num: number) {
    alert(num);
  }

  editUser(form: NgForm) {
    let user = new User();
    user.id = form.value.userId;
    user.userName = form.value.userName;
    user.password = form.value.password;
    user.libsCount = form.value.libsCount;
    user.booksCount = form.value.booksCount;

    this.userHttp.createUpdateUser(user).subscribe(data => console.log(data));
  }
}


// createUpdateUser(user: User): Observable<User> {
//   return this.http.post<User>(`${this.baseUrl}/createup`, user);
// }
