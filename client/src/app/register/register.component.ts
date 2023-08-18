import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  constructor(
    private accountService: AccountService,
    private toastrService: ToastrService
  ) {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: (res) => {
        this.cancel();
      },
      error: (err) => {
        this.toastrService.error(err.error);
      },
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
