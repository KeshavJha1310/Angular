import { Component, OnInit } from "@angular/core";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { AuthService } from "./authentication/auth.service";


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
[x: string]: any;
constructor(private authService:AuthService){}
    ngOnInit(): void {
        initializeApp(firebaseConfig);
    }

    isAuthenticated(){
        return this.authService.isAuthenticated
    }

}