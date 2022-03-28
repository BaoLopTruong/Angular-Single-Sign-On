import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../shared/services/auth.service';

import { HomeComponent } from './home.component';

class MockService{

}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ HomeComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        HomeComponent,
        { provide: AuthService, useClass: MockService }
      ]
    });
    // inject both the component and the dependent service.
    component = TestBed.inject(HomeComponent);
    //  authService= TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
