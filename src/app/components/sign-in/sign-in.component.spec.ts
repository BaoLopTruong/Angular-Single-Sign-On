import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/shared/services/auth.service';

import { SignInComponent } from './sign-in.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ServiceMock } from 'src/app/mocks/mock.service.mock';

class MockService {
  isLoggedIn = true;

}
describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let authService: AuthService;

  const mockService = {
    getText: () => 'hello world'
  };

  // beforeEach(() => { authService = new AuthService()); });
  // let submit: DebugElement;
  // let email: DebugElement;
  // let password: DebugElement;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ SignInComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(SignInComponent);
  //   component = fixture.componentInstance;
  //   // fixture.detectChanges();
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      // provide the component-under-test and dependent service
      providers: [
        SignInComponent,
        { provide: AuthService, useValue: MockService }
      ]
    });
    // inject both the component and the dependent service.
    // component = TestBed.inject(SignInComponent);
     authService= TestBed.inject(AuthService);
    fixture = TestBed.createComponent(SignInComponent);
      component= fixture.componentInstance;
    // authService = new AuthService();
    // component = new SignInComponent(authService);

    // submit= fixture.debugElement.query(By.css('button'));
    // email= fixture.debugElement.query(By.css('input[type=text]'))
    // password = fixture.debugElement.query(By.css('input[type=password]'))
  });



//   beforeEach(() => {
//     TestBed.configureTestingModule({
//         declarations: [
//             SignInComponent
//         ],
//         providers: [
//             { provide: AuthService, useClass: ServiceMock }
//         ]
//     }).compileComponents().then(() => {
//         fixture = TestBed.createComponent(SignInComponent);
//         component = fixture.componentInstance; // UserComponent test instance

//     });
// });

  afterEach(() =>{
    localStorage.removeItem('user');
    authService =null;
    component = null;
  })


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('checklogin ', ()=>{
  // expect(component.ConfirmLogin).toBeTruthy();
  // });

  it('submitlogin', ()=>{
    localStorage.setItem('user1@gmail.com','bao123')
    expect(authService.SignIn).toBeFalsy();
  })

  it('check login with gg', () => {
    expect(authService.GoogleAuth).toBeFalsy();
  })

  it('check forgot password', () => {
    expect(authService.ForgotPassword).toBeFalsy();
  })

});
