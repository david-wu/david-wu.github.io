import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  FirebaseAuthService,
  FirebaseFirestoreService,
} from '@services/index';
import {
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  AuthActions,
  getAuthLoading$,
  getCanLogin$,
  getUser$,
} from '@app/store/index';
import { User } from '@models/index';

declare global {
  interface Window {
    firebase: any;
    firebaseui: any;
  }
}

@Component({
  selector: 'dwu-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  @ViewChild('loginRef', { static: true }) loginRef: ElementRef;

  public user$: Observable<User>;
  public authLoading$: Observable<boolean>;
  public canLogin$: Observable<boolean>;

  constructor(
    public store: Store<any>,
    public hostEl: ElementRef,
    public authService: FirebaseAuthService,
  ) {
    this.user$ = this.store.pipe(select(getUser$));
    this.authLoading$ = this.store.pipe(select(getAuthLoading$));
    this.canLogin$ = this.store.pipe(select(getCanLogin$));
  }

  public ngOnInit() {
    const firebaseAuthUI = this.authService.getFirebaseAuthUI();
    firebaseAuthUI.start(this.loginRef.nativeElement, {
      ...this.authService.defaultUiConfig,
    });

    // this.authService.renderLogin(this.loginRef.nativeElement)//.subscribe((user) => {
      // this.store.dispatch(AuthActions.setUser({ payload: user}));
    //});
    // this.store.dispatch(AuthActions.renderLogin({
    //   nativeEl: this.loginRef.nativeElement
    // }));
  }

  public signOut() {
    this.store.dispatch(AuthActions.signOut({
      nativeEl: this.loginRef.nativeElement,
    }));
  }
}
