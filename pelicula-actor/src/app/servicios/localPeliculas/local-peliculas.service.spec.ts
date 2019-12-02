import { TestBed } from '@angular/core/testing';

import { LocalPeliculasService } from './local-peliculas.service';

describe('LocalPeliculasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalPeliculasService = TestBed.get(LocalPeliculasService);
    expect(service).toBeTruthy();
  });
});
