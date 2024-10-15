import { Component, inject } from '@angular/core';
import { UserService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styles: ``,
})
export default class UsersComponent {
  public userService = inject(UserService);
}
