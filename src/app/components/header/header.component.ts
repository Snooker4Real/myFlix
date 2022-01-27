import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    token: boolean;
    tokenSub: Subscription;

    constructor(private authService: AuthService, private router: Router) {
        this.token = false;
        this.tokenSub = new Subscription();
    }

    ngOnInit(): void {
        this.tokenSub = this.authService.token.subscribe((token: boolean) => this.token = token);
    }

    onClickLogout() {
        this.authService.logout().then(() => {
            this.router.navigateByUrl('');
        });
    }

    ngOnDestroy(): void {
        this.tokenSub.unsubscribe();
    }

}
