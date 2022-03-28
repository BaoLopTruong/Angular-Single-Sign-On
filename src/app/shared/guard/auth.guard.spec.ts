import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';

import { AuthGuard } from './auth.guard';

class MockService{

}

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let service: AuthService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   guard = TestBed.inject(AuthGuard);
  // });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      // provide the component-under-test and dependent service
      providers: [
        AuthService,
        { provide: AuthService, useClass: MockService }
      ]
    });
    // inject both the component and the dependent service.
    // service = TestBed.inject(AuthService);
    //  authService= TestBed.inject(AuthService);
    guard = TestBed.inject(AuthGuard);
    service = TestBed.inject(AuthService);

  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
