import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book_interface';


 
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
books:Book[]= [
  {
    bookName :'Clean Code',
    authorName : 'Robert C Martin',
    clean_code_url : 'https://m.media-amazon.com/images/I/71T7aD3EOTL._SY522_.jpg',
    amount:700
  },
  {
    bookName:  'Pragmatic Programmer',
    authorName:'David Thomas',
    clean_code_url: 'https://m.media-amazon.com/images/I/71Nxk9VhSTL._SY522_.jpg',
    amount:800  
  },
  {
    bookName:  'Art of Computer Programming',
    authorName:'Donald E. Knuth',
    clean_code_url: 'https://m.media-amazon.com/images/I/719SYGJejmL._SY522_.jpg',
    amount:1000  
  },
  {
    bookName:  'Algorithms and Complexity',
    authorName:'Herbert S. Wilf',
    clean_code_url: 'https://m.media-amazon.com/images/I/71n2Qd3RQOL._SY522_.jpg',
    amount:1200  
  },
]
  // isDisable:boolean= false
  showTypes:boolean = false
  showButton:boolean = true
  showHideButton:boolean = false
  isShowing:boolean = true  
  // handleClickEvent() {
  //   this.isDisable = true;
  //   // alert("This is click Event!");
  // }

  myName : string = ''
  //No need of this function bcz of ggModel directive
  // handleInput(event:any){
  //   console.log(event.target.value)
  // this.myName = event.target.value;
  // }

  showtypes(){
    this.showTypes = true
    this.showButton = false
    this.showHideButton = true
  }
  hideTypes(){
    this.showTypes = false
    this.showButton = true
    this.showHideButton = false
  }
  addToCart($event: any){
    console.log($event)
  }
  constructor() { }

  ngOnInit(): void {
  }

  /*
  Different Types of Directives :- 
  1. Used with a template
  */

}
