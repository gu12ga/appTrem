import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiPage } from './confi.page';

describe('ConfiPage', () => {
  let component: ConfiPage;
  let fixture: ComponentFixture<ConfiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
