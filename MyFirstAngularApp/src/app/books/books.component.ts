import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookName:string = 'Clean Code';
  authorName:string = 'Robert C Martin';
  clean_code_url:string = 'https://m.media-amazon.com/images/I/71T7aD3EOTL._SY522_.jpg';
  bookName2:string = 'Pragmatic Programmer';
  authorName2:string = 'David Thomas';
  clean_code_url2:string = 'https://m.media-amazon.com/images/I/71Nxk9VhSTL._SY522_.jpg';
  isDisable:boolean= false


  handleClickEvent() {
    this.isDisable = true;
    // alert("This is click Event!");
  }

  constructor() { }

  ngOnInit(): void {
  }


}
