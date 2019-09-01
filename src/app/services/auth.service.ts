import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {TokenService} from "./token.service";
import {API} from "../helpers/API";

const API_URL = API + '/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  login(email, password) {
    return this.http.post<any>(API_URL, {email, password})
      .pipe(tap(res => {
        if (res.token)
          this.tokenService.setToken(res.token);
      }))
  }
}