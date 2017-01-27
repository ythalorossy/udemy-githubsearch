/**
 * Created by yross on 07/10/16.
 */
import {Component} from "@angular/core";
import {GithubService} from "../services/github.service";

@Component({
  moduleId: module.id,
  selector: "profile",
  templateUrl: "profile.component.html"
})
export class ProfileComponent {

  private user : any;
  private repos: any[];
  username: string;

  constructor (private _githubService: GithubService) {
    this.user = false;
  }

  searchUser(username: string) {

    this._githubService.updateUser(this.username);

    this._githubService.getUser()
      .subscribe(user => {
        this.user = user;
      });

    this._githubService.getRepos()
      .subscribe(repos => {
        this.repos = repos;
      });
  }

}
