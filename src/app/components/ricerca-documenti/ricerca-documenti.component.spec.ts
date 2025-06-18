import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RicercaDocumentiComponent } from './ricerca-documenti.component';

describe('RicercaDocumentiComponent', () => {
  let component: RicercaDocumentiComponent;
  let fixture: ComponentFixture<RicercaDocumentiComponent>;
  
  beforeEach(async () => {
    fixture = TestBed.createComponent(RicercaDocumentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
      
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
