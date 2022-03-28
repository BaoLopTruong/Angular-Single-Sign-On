import { TestBed } from '@angular/core/testing';

import { TestLoginGuard } from './test-login.guard';

describe('TestLoginGuard', () => {
  let guard: TestLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
