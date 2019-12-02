import { TestBed } from '@angular/core/testing';

import { LocalActoresService } from './local-actores.service';

describe('LocalActoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalActoresService = TestBed.get(LocalActoresService);
    expect(service).toBeTruthy();
  });
});
