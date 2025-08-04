import { Component, computed, Input, input, Output, EventEmitter, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
/*

import { signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

type User = {
  id: string;
  avatar: string;
  name: string;
}

*/

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  /*

  // Code - 1

  user = DUMMY_USERS[randomIndex];

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    // console.log(`Selected user: ${this.user.name}`);
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.user = DUMMY_USERS[randomIndex];
  }

  // Code - 2

  user = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.user().avatar);

  onSelectUser() {

    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.user.set(DUMMY_USERS[randomIndex]);
  }

  // Code - 3

  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => `assets/users/${this.avatar()}`);

  // Code - 4 

  select = output<string>();

  // Code - 5

  @Input({required:true}) id!: string;
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;

  // Code - 6

  @Input({ required: true }) user!: {
    id: string;
    avatar: string;
    name: string;
  };

  */

  @Input({required: true}) selected!: boolean;
  @Input({required: true}) user!: User; 
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}