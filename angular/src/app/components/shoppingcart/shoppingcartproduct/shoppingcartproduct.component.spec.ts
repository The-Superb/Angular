import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartproductComponent } from './shoppingcartproduct.component';

describe('ShoppingcartproductComponent', () => {
  let component: ShoppingcartproductComponent
  let fixture: ComponentFixture<ShoppingcartproductComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartproductComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartproductComponent)
    component = fixture.componentInstance;
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

})