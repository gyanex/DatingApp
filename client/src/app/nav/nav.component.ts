import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn = false;
  currentUser$: Observable<User | null> = of(null);
  constructor(public accountService: AccountService) {}

  ngOnInit(): void {}

  getCurrentUser() {
    this.accountService.currentUser$.subscribe({
      next: (user) => (this.loggedIn = !!user),
      error: (error) => console.log(error),
    });
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }

  logout() {
    this.accountService.logout();
  }
}