import {ComponentFixture, TestBed} from '@angular/core/testing';
import {pap-pg-weld-pathComponent} from "./pap-pg-weld-path.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Observable, of} from "rxjs";

describe('PapPgWeldPathComponent', () => {
  let fixture: ComponentFixture<PapPgWeldPathComponent>;
  let component: PapPgWeldPathComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PapPgWeldPathComponent],
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader, useValue: {
            getTranslation(): Observable<Record<string, string>> {
              return of({});
            }
          }
        }
      })],
    }).compileComponents();

    fixture = TestBed.createComponent(PapPgWeldPathComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
