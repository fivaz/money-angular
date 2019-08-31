import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Account} from "../account/account";
import {TokenService} from "./token.service";
import {map} from "rxjs/operators";
import {AccountBuilderService} from "../builders/account-builder.service";

const API = 'http://localhost:3000/accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  headers: HttpHeaders;

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private accountBuilder: AccountBuilderService) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenService.getToken()
    });
  }

  findAll() {
    return this.http.get<Account[]>(API, {headers: this.headers})
      .pipe(map(accountsObj => this.accountBuilder.buildMany(accountsObj)));
  }

  find(id: number) {
    return this.http.get<Account>(API + '/' + id, {headers: this.headers})
      .pipe(map(accountObj => this.accountBuilder.build(accountObj)));
  }

  create(account: Account) {
    return this.http.post<Account>(API, account, {headers: this.headers})
      .pipe(map(accountObj => this.accountBuilder.build(accountObj)));
  }

  edit(account: Account) {
    return this.http.put<Account>(API + '/' + account.id, account, {headers: this.headers})
      .pipe(map(accountObj => this.accountBuilder.build(accountObj)));
  }

  delete(id: number) {
    return this.http.delete(API + '/' + id, {headers: this.headers});
  }
}
