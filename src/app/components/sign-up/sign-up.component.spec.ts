import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/shared/services/auth.service';

import { SignUpComponent } from './sign-up.component';


class MockService{

}

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;


  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ SignUpComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(SignUpComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });


  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        SignUpComponent,
        { provide: AuthService, useClass: MockService }
      ]
    });
    // inject both the component and the dependent service.
    component = TestBed.inject(SignUpComponent);
    //  authService= TestBed.inject(AuthService);
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
