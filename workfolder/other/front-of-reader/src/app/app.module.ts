import { AppComponent } from './app.component';
import { IndexComponent } from './component/index/index.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { GridComponent } from './component/grid/grid.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { BookService } from 'src/app/service/book/book.service';
import { LibraryService } from 'src/app/service/library/library.service';
import { StatService } from 'src/app/service/stat/stat.service';
import { UserService } from 'src/app/service/user/user.service';

import { GridoflibsComponent } from './component/gridoflibs/gridoflibs.component';
import { UsersComponent } from './component/users/users.component';
import { UserDialogComponent } from './component/dialogs/user-dialog/user-dialog.component';
import { UserBooksComponent } from './component/dialogs/user-books/user-books.component';
import { UserEditComponent } from './component/dialogs/user-edit/user-edit.component';

@NgModule({
  declarations: [AppComponent, IndexComponent, NotFoundComponent,
    HeaderComponent, FooterComponent, RegistrationComponent, GridComponent, GridoflibsComponent, UsersComponent,
    UserDialogComponent, UserBooksComponent, UserEditComponent],
  imports: [BrowserModule, AppRoutingModule,
    HttpClientModule, FormsModule, MaterialModule, MatTableModule, MatPaginatorModule, MatSortModule],
  providers: [BookService, LibraryService, StatService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [UserDialogComponent, UserBooksComponent, UserEditComponent]
})
export class AppModule { }

