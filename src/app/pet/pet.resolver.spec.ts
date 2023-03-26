import { TestBed } from '@angular/core/testing';

import { PetResolver } from './pet.resolver';

describe('PetResolver', () => {
  let resolver: PetResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PetResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
