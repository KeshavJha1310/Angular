import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BooksModule } from "./books/books-module.module";
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from "./books/app-routing.module";
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';


@NgModule({
    declarations: [AppComponent, CartComponent, LoginComponent, RegisterComponent],
    imports: [BrowserModule,FormsModule ,BooksModule,AppRoutingModule],
    bootstrap: [AppComponent],

})
export class AppModule{}