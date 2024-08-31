import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./books.component";
import { CartComponent } from "../cart/cart.component";
import { LoginComponent } from "../authentication/login/login.component";
import { RegisterComponent } from "../authentication/register/register.component";
import { AuthGuard } from "../authentication/auth.guard";

const routes:Routes=[
    {path:'',component:BooksComponent},
    {path:'cart',component:CartComponent,canActivate: [AuthGuard]},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})
export class AppRoutingModule {}