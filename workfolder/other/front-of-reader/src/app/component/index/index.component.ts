import { Component, OnChanges, OnInit, Input, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Book } from 'src/app/entity/book/book';
import { BookService } from 'src/app/service/book/book.service';
import { Stat } from 'src/app/entity/statistic/stat';
import { StatService } from 'src/app/service/stat/stat.service';
import { User } from 'src/app/entity/user/user';
import { UserService } from 'src/app/service/user/user.service';
import { Lib } from 'src/app/entity/library/lib';
import { LibraryService } from 'src/app/service/library/library.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnChanges {

  @Input() newBook: Book = new Book();
  @Input() books: Book[];
  @Input() oneBook2: Book = new Book();

  @Input() newStat: Stat = new Stat();
  @Input() stats: Stat[];
  @Input() oneStat2: Stat = new Stat();

  @Input() newUser: User = new User();
  @Input() users: User[];
  @Input() oneUser2: User = new User();

  @Input() newLib: Lib = new Lib();
  @Input() libs: Lib[];
  @Input() oneLib2: Lib = new Lib();

  constructor(
    private bookHttp: BookService,
    private statHttp: StatService,
    private userHttp: UserService,
    private libsHttp: LibraryService) { }

  ngOnInit() {
    console.log('Hello ngOnInit');
    // this.bookHttp.getAllBooks().subscribe(data => this.books = data);
    // this.userHttp.getAllUsers().subscribe(data => this.users = data);
    // this.libsHttp.getAllLibs().subscribe(data => this.libs = data);
    // this.statHttp.getAllStat().subscribe(data => this.stats = data);
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  showAllBooks() {
    this.bookHttp.getAllBooks().subscribe(data => this.books = data);
  }

  getOneBook(bookId: number) {
    this.bookHttp.getBookById(bookId).subscribe(data => this.oneBook2 = data);
  }

  createBook(): void {
    this.bookHttp.createUpdateBook(this.newBook).subscribe(data => this.newBook = data);
  }

  deleteBook(id: number) {
    this.bookHttp.deleteBookById(id).subscribe(data => console.log(data));
  }

  delAllBooks() {
    this.bookHttp.deleteAllBooks()
      .subscribe(data => console.log(data));
  }

  cleanForm() {
    this.newBook = new Book();
  }

  showAllUsers() {
    this.userHttp.getAllUsers().subscribe(data => this.users = data);
  }

  getOneUser(userId: number) {
    this.userHttp.getUserById(userId).subscribe(data => this.oneUser2 = data);

  }

  createUser(): void {
    this.userHttp.createUpdateUser(this.newUser).subscribe(data => this.newUser = data);
  }

  deleteUser(id: number) {
    this.userHttp.deleteUserById(id).subscribe(data => console.log(data));
  }

  delAllUsers() {
    this.userHttp.deleteAllUsers().subscribe(data => console.log(data));
  }

  enterUser() {
    alert("Hi");
    this.userHttp.loginpageenter().subscribe(data => console.log(data));
  }

  showAllLibs() {
    this.libsHttp.getAllLibs().subscribe(data => this.libs = data);
  }

  getOneLib(libId: number) {
    this.libsHttp.getLibById(libId).subscribe(data => this.oneLib2 = data);
  }
  createLib(): void {
    this.libsHttp.createUpdateLib(this.newLib).subscribe(data => this.newLib = data);
  }

  deleteLibrary(id: number) {
    this.libsHttp.deleteLibById(id).subscribe(data => console.log(data));
  }

  delAllLibs() {
    this.libsHttp.deleteAllLibs()
      .subscribe(data => console.log(data));
  }

  showAllStat() {
    this.statHttp.getAllStat().subscribe(data => this.stats = data);
  }

  showOneStat(statId: number) {
    this.statHttp.getNewStatById(statId).subscribe(data => this.oneStat2 = data);
  }

  createStat(): void {
    this.statHttp.createUpdateStat(this.newStat).subscribe(data => this.newStat = data);
  }

  deleteStat(id: number) {
    this.statHttp.deleteStatById(id).subscribe(data => console.log(data));
  }

  delAllStat() {
    this.statHttp.deleteAllStats().subscribe(data => console.log(data));
  }

  
}
