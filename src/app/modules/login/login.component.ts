import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormBuilder, FormGroup } from '@ngneat/reactive-forms';
import { catchError, debounceTime, switchMap, take } from 'rxjs/operators';
import { Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';

export interface Cred {
  phone: string;
  password: string;
}

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup<Cred>;
  userSubmitLogin$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.userSubmitLogin$
      .pipe(
        debounceTime(500),
        switchMap(_ => this.login(this.loginForm.value)),
        untilDestroyed(this)
      )
      .subscribe(_ => {
        this.toast.success('successful');
        this.router.navigate(['/']);
      });
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(cred: Cred): Observable<any> {
    return this.authService.login(cred).pipe(
      take(1),
      catchError(error => {
        this.toast.error(error.message);
        return EMPTY;
      })
    );
  }
}
