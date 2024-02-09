import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetOperationMangComponent } from './asset-operation-mang.component';

describe('AssetOperationMangComponent', () => {
  let component: AssetOperationMangComponent;
  let fixture: ComponentFixture<AssetOperationMangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetOperationMangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetOperationMangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
