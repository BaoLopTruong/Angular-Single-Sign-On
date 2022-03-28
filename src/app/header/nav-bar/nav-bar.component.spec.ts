import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/shared/services/auth.service';

import { NavBarComponent } from './nav-bar.component';

class MockService{}

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ NavBarComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(NavBarComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        NavBarComponent,
        { provide: AuthService, useClass: MockService }
      ]
    });
    // inject both the component and the dependent service.
    component = TestBed.inject(NavBarComponent);
    //  authService= TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
