import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    token: BehaviorSubject<boolean>;
    userName: string;
    password: string;

    constructor() {
        this.userName = 'admin';
        this.password = 'admin';
        this.token = new BehaviorSubject<boolean>(false);
    }

    login(userName: string, password: string): Promise<boolean> {
        if (userName === this.userName && password === this.password) {
            return new Promise<boolean>((res, rej) => {
                this.token.next(true);
                res(true);
            });
        }
        return new Promise<boolean>((res, rej) => {
            this.token.next(false);
            res(false);
        });
    }

    logout(): Promise<void> {
        return new Promise<void>((res, rej) => {
            this.token.next(false);
            res();
        });
    }

}
