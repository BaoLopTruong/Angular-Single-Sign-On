import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/shared/services/auth.service';

import { DashboardComponent } from './dashboard.component';

class MockService{

}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let authService: AuthService

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ DashboardComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(DashboardComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      // provide the component-under-test and dependent service
      providers: [
        DashboardComponent,
        { provide: AuthService, useClass: MockService }
      ]
    });
    // inject both the component and the dependent service.
    component = TestBed.inject(DashboardComponent);
     authService= TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check sign-out', () =>{
    expect(authService.SignOut).toBeFalsy();
  });

  it('check datauser', () => {
    expect(authService.userData).toBeFalsy();
  })

});
