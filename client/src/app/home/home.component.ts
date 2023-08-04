import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  registerMode = false;
  users: any;
  constructor(private http: HttpClient) {}
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get(`https://localhost:5001/api/user`).subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('request completed');
      },
    });
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
