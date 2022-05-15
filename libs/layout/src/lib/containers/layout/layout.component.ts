import { AuthService } from './../../../../../auth/src/lib/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@demo-app/data-models';

@Component({
  selector: 'demo-app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  user$?: Observable<User>;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authService.user$;
  }
}
