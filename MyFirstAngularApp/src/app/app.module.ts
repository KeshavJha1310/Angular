import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BooksModule } from "./books/books-module.module";
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from "./books/app-routing.module";
import { AuthModule } from "./authentication/auth/auth.module";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [AppComponent, CartComponent],
    imports: [BrowserModule ,BooksModule,AppRoutingModule,AuthModule,FormsModule],
    bootstrap: [AppComponent],

})
export class AppModule{}