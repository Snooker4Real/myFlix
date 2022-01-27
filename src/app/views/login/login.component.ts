import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userName: string;
    password: string;

    constructor(private authService: AuthService, private router: Router) {
        this.userName = 'admin';
        this.password = 'admin';
    }

    ngOnInit(): void {
    }

    OnSubmitLoginForm(form: NgForm): void {
        if (form.valid) {
            this.authService.login(this.userName, this.password).then(() => {
                this.router.navigateByUrl("series");
            });
        }
    }
}
