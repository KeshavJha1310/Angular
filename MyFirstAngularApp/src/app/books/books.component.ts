import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookName = 'Clean Code';
  authorName = 'Robert C Martin'

  constructor() { }

  ngOnInit(): void {
  }

}
