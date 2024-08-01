// src/app/components/user-management/user-management.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  editUser(user: User): void {
    this.selectedUser = { ...user };
  }

  saveUser(): void {
    if (this.selectedUser) {
      this.userService.updateUser(this.selectedUser.id, this.selectedUser).subscribe(() => {
        this.loadUsers();
        this.selectedUser = null;
      });
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

  cancelEdit(): void {
    this.selectedUser = null;
  }
}
