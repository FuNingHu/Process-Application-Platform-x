import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ApplicationPresenterAPI, RobotSettings } from '@universal-robots/contribution-api';
import { PapAppButtonPanelNode } from '../pap-app-button-panel.node';
import { first } from 'rxjs';

@Component({
  selector: 'app-process-platform-dialog',
  imports: [CommonModule, TranslateModule],
  templateUrl: './process-platform-dialog.html',
  styleUrl: './process-platform-dialog.scss',
})
export class ProcessPlatformDialog implements OnChanges {
    @Input() applicationAPI: ApplicationPresenterAPI;
    @Input() robotSettings: RobotSettings;
    @Input() applicationNode: PapAppButtonPanelNode;

    constructor(
      protected readonly translateService: TranslateService,
      protected readonly cd: ChangeDetectorRef
    ){}
    
    ngOnChanges(changes: SimpleChanges): void {
      if (changes?.robotSettings) {
        if (!changes?.robotSettings?.currentValue) return;
        if (changes?.robotSettings?.isFirstChange()) {
          if (changes?.robotSettings?.currentValue) {
            this.translateService.use(changes?.robotSettings?.currentValue?.language);
          }
          this.translateService.setDefaultLang('en');
        }
        this.translateService
          .use(changes?.robotSettings?.currentValue?.language)
          .pipe(first())
          .subscribe(() => this.cd.detectChanges());
      }
    }
}
