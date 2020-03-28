import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-lists',
  // templateUrl: './book-lists.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-lists.component.css']
})
export class BookListsComponent implements OnInit {

  constructor(private _bookService:BookService,
  private _activatedRoute :ActivatedRoute) { }
  


  ngOnInit() {
    this.listBooks();
    this._activatedRoute.paramMap.subscribe(()=>{
      this.listBooks();
    })
  }

   books:Book[]=[];
   currentCategoryId:number;

  listBooks(){

    const hasCategoryId:boolean=this._activatedRoute.snapshot.paramMap.has('id');

    if(hasCategoryId){
      this.currentCategoryId=+this._activatedRoute.snapshot.paramMap.get('id');
    }else
    {
      this.currentCategoryId=1;
    }

    this._bookService.getBooks(this.currentCategoryId).subscribe(
      data=>this.books=data
    )

  }
}
