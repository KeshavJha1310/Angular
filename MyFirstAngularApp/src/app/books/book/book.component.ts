import { Component, OnInit ,Input, Output , EventEmitter} from '@angular/core';
import { Book } from '../../interfaces/Book_interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book:Book = {} as Book;
  isincart: boolean = false;
  //Note : Here we are not using the emitter has no event has been emmited bcz we are using the Service of Cart instead.
  // @Output() bookEmitter = new EventEmitter<Book>();
  addToCart(){
  //  this.bookEmitter.emit(this.book);  
  this.isincart = true
  this.cartService.add(this.book)
  }

  removeFromCart(){
    this.isincart = false
    this.cartService.remove(this.book)
  }
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
