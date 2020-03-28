import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListsComponent } from './components/book-lists/book-lists.component';
import { BookService } from './services/book.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes:  Routes=[
{ path:'books', component:BookListsComponent},
{ path:'category/:id', component:BookListsComponent},
{ path:'', redirectTo:'/books',pathMatch:'full'},
{ path:'**', component:PageNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    BookListsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
