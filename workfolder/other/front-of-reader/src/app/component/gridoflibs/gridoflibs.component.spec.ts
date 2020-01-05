import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { GridoflibsComponent } from './gridoflibs.component';

describe('GridoflibsComponent', () => {
  let component: GridoflibsComponent;
  let fixture: ComponentFixture<GridoflibsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridoflibsComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridoflibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
