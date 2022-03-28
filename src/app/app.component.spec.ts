import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './shared/services/auth.service';


class MockService{

}

describe('AppComponent', () => {
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [
  //       RouterTestingModule
  //     ],
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  // });
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        AppComponent,
        { provide: AuthService, useClass: MockService }
      ]
    });
    // inject both the component and the dependent service.
    component = TestBed.inject(AppComponent);
    //  authService= TestBed.inject(AuthService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-firebase-auth-login'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-firebase-auth-login');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('angular-firebase-auth-login app is running!');
  // });
});
