import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/shared/services/auth.service';

import { HeaderComponent } from './header.component';

class MockService {
  isLoggedIn = true;
  user = { name: 'Test User'};
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ HeaderComponent],
  //     providers: [AuthService],
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HeaderComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });


  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        HeaderComponent,
        { provide: AuthService, useClass: MockService }
      ]
    });
    // inject both the component and the dependent service.
    component = TestBed.inject(HeaderComponent);
     authService= TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
