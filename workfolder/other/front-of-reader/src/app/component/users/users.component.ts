import { Component, OnInit, ViewChild, Input, Inject, Output } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/entity/user/user';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDialogComponent } from '../dialogs/user-dialog/user-dialog.component';
import { UserBooksComponent } from '../dialogs/user-books/user-books.component';
import { UserEditComponent } from '../dialogs/user-edit/user-edit.component';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns = ['id', 'userName', 'password', 'libsCount', 'booksCount', 'actions'];
  dataSource: MatTableDataSource<User>;
  @Input() data: User[];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private userHttp: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userHttp.getAllUsers().subscribe(data => {
      this.data = data;
      this.displayData(this.data);
    }, null, () => {
      this.initializationSortAndPaginator();
    });
  }

  initializationSortAndPaginator() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    let dialogRef = this.dialog.open(UserDialogComponent, {
      width: '1000px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog has closed.');
    });
  }

  openDialogBook() {
    let dialogRef = this.dialog.open(UserBooksComponent, {
      width: '1000px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog has closed.');
    });
  }

  displayData(users: User[]) {
    this.dataSource = new MatTableDataSource<User>(users);
    this.initializationSortAndPaginator();
  }

  deleteUser(id: number) {
    this.userHttp.deleteUserById(id).subscribe(data => {
      const index = this.data.findIndex(user => user.id === id);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
      this.displayData(this.data);
    });
  }

  openEditUserDialog(id: number) {
    let clickedUser = new User();
    let index = this.data.findIndex(user => user.id === id);
    clickedUser = this.data[index];
    let dialogRef = this.dialog.open(UserEditComponent, {
      width: '800px',
      height: 'auto',
      data: {
        user: clickedUser
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog has closed.');
    });
  }
}
