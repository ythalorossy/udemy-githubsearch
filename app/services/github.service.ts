/**
 * Created by yross on 07/10/16.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'b1b7e0f6a8fa1fbefda3';
  private client_secret = 'fea06705ac435414ef41f69db93601c799131cb1';

  constructor (private _http: Http) {
    console.log('Github Service Ready.');
    this.username = 'ythalorossy';

  }

  getUser () {
    return this._http.get(`http://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .map(res => res.json());
  }

  getRepos () {
    return this._http.get(`http://api.github.com/users/${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }
}

