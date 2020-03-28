import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-lists',
  templateUrl: './book-lists.component.html',
  styleUrls: ['./book-lists.component.css']
})
export class BookListsComponent implements OnInit {

  constructor(private _bookService:BookService) { }

  ngOnInit() {
    this.listBooks();
  }

   books:Book[]=[
  //   {
  //   sku:"text-001",
  //   name:"C# crash course",
  //   description:"Learn C#",
  //   unitPrice:900,
  //   imageUrl:"",
  //   active:true,
  //   unitsInStock:100,
  //   createdOn:new Date(),
  //   updatedOn:null,
  // },
  // {
  //   sku:"text-101",
  //   name:"C Programming Language",
  //   description:"Learn C",
  //   unitPrice:200,
  //   imageUrl:"",
  //   active:true,
  //   unitsInStock:20,
  //   createdOn:new Date(),
  //   updatedOn:null,
  // },

  ]

  listBooks(){
    this._bookService.getBooks().subscribe(
      data=>this.books=data
    )

  }
}
