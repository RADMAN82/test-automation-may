import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

let component;

describe('AppComponent', () => {
  beforeEach(async(() => {
    component = new AppComponent();
  }));

  it('should accept valid PESEL numbers', () => {
expect(component.isValidPesel('64042999928')).toBe(true);
  });

  it('should reject PESEL numbers with invalid controlNumber', () => {
expect(component.isValidPesel('44051401358')).toBe(false);
  });

it('should reject PESEL if not string', () => {
expect(component.isValidPesel(1)).toBe(false);

  });

it('should reject PESEL if not string', () => {
expect(component.isValidPesel(null)).toBe(false);
  });

it('should reject PESEL if not string', () => {
expect(component.isValidPesel()).toBe(false);
  });

});
