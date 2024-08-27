import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book_interface';
import { BooksService } from './books.service';


 
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  books : Book[]= [];
  // isDisable:boolean= false
  // showTypes:boolean = false
  // showButton:boolean = true
  // showHideButton:boolean = false
  isShowing:boolean = true  
  // handleClickEvent() {
  //   this.isDisable = true;
  //   // alert("This is click Event!");
  // }

  // myName : string = ''
  //No need of this function bcz of ggModel directive
  // handleInput(event:any){
  //   console.log(event.target.value)
  // this.myName = event.target.value;
  // }

  // showtypes(){
  //   this.showTypes = true
  //   this.showButton = false
  //   this.showHideButton = true
  // }
  // hideTypes(){
  //   this.showTypes = false
  //   this.showButton = true
  //   this.showHideButton = false
  // }
  addToCart($event: any){
    console.log($event)
  }
//Dependency Injection
constructor(private booksService: BooksService) {
}

  ngOnInit(): void {
    this.books = this.booksService.getBooks();

  }

  
  /*
  Different Types of Directives :- 
  1. Used with a template
  */

}




