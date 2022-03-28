import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { User } from './user';
import {AppModule} from '../../app.module';
import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
// class MockService{

// }

describe('AuthService', () => {

    const MockService = {

    };
    const routes: Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/sign-in', pathMatch: 'full'}
    ];

  let service: AuthService;
  let valueServiceSpy: jasmine.SpyObj<RouterTestingModule>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AuthService', ['SignIn']);
    TestBed.configureTestingModule({
      providers:[
        AuthService,
        {provide: AuthService, useValue: spy  }
      ]
    });
    //service = TestBed.inject(AuthService);
      // Inject both the service-to-test and its (spy) dependency
  service = TestBed.inject(AuthService);

  });
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports:[RouterTestingModule],
  //     // provide the component-under-test and dependent service
  //     providers: [
  //       AuthService,
  //       { provide: AuthService, useValue: MockService }
  //     ]
  //   });
  //   // inject both the component and the dependent service.
  //   service = TestBed.inject(AuthService);
  //   //  authService= TestBed.inject(AuthService);
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check func login', () => {
    localStorage.setItem('user','bao123')
    expect(service.ForgotPassword).toBeFalsy();
  } )

  it('check loggedin', () => {

    expect(service.SetUserData).toBeFalsy();
  })


});
