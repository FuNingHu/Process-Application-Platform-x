import {ComponentFixture, TestBed} from '@angular/core/testing';
import {pap-pg-weld-replayComponent} from "./pap-pg-weld-replay.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Observable, of} from "rxjs";

describe('PapPgWeldReplayComponent', () => {
  let fixture: ComponentFixture<PapPgWeldReplayComponent>;
  let component: PapPgWeldReplayComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PapPgWeldReplayComponent],
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

    fixture = TestBed.createComponent(PapPgWeldReplayComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
