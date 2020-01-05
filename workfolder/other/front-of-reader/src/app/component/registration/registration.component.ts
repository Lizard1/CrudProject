import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/entity/user/user';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input() newUser: User = new User();

  numbers: number[] = [1, 2, 3, 4, 5];
  condition = true;

  constructor(private userHttp: UserService) { }
  ngOnInit() {
  }

  createUser(): void {
    this.userHttp.createUpdateUser(this.newUser).subscribe(data => this.newUser = data);
  }

  toggle() {
    this.condition = !this.condition;
  }

}
