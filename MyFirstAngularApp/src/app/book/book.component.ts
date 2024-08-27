import { Component, OnInit ,Input, Output , EventEmitter} from '@angular/core';
import { Book } from '../interfaces/book_interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book:Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();
  addToCart(){
   this.bookEmitter.emit(this.book);  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
