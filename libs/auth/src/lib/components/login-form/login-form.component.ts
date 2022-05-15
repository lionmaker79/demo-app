import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Authenticate } from '@demo-app/data-models';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'demo-app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  
  @Output() submitForm = new EventEmitter<Authenticate>();
  
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  
  constructor() {}

  ngOnInit(): void {}

  login() {

    this.submitForm.emit({ 
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    } as Authenticate);
  }
}
