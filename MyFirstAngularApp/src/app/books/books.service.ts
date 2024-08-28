import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book_interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        bookName: 'Clean Code',
        authorName: 'Robert C Martin',
        clean_code_url: 'https://m.media-amazon.com/images/I/71T7aD3EOTL._SY522_.jpg',
        amount: 700
      },
      {
        bookName: 'Pragmatic Programmer',
        authorName: 'David Thomas',
        clean_code_url: 'https://m.media-amazon.com/images/I/71Nxk9VhSTL._SY522_.jpg',
        amount: 800
      },
      {
        bookName: 'Art of Computer Programming',
        authorName: 'Donald E. Knuth',
        clean_code_url: 'https://m.media-amazon.com/images/I/719SYGJejmL._SY522_.jpg',
        amount: 1000
      },
      {
        bookName: 'Algorithms and Complexity',
        authorName: 'Herbert S. Wilf',
        clean_code_url: 'https://m.media-amazon.com/images/I/71n2Qd3RQOL._SY522_.jpg',
        amount: 1200
      },
    ];
  }
}

// class Name {
//   constructor(name:string){

//   }
// }
