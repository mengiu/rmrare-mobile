import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ListaDocumentiComponent } from './lista-documenti.component';

describe('ListaDocumentiComponent', () => {
  let component: ListaDocumentiComponent;
  let fixture: ComponentFixture<ListaDocumentiComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ListaDocumentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
