import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/shared/services/auth.service';

import { ForgotPasswordComponent } from './forgot-password.component';

class MockService {
  isLoggedIn = true;
  user = { name: 'Test User'};
}

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let authService: AuthService;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ ForgotPasswordComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ForgotPasswordComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        ForgotPasswordComponent,
        { provide: AuthService, useClass: MockService }
      ]
    });
    // inject both the component and the dependent service.
    component = TestBed.inject(ForgotPasswordComponent);
      authService= TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('check func forgot password', () => {
    expect(authService.ForgotPassword).toBeFalsy();
  })



});
