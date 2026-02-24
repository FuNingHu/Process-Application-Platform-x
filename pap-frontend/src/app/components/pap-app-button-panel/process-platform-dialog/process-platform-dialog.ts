import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ApplicationPresenterAPI, RobotSettings } from '@universal-robots/contribution-api';
import { PapAppButtonPanelNode } from '../pap-app-button-panel.node';
import { first } from 'rxjs';
import { UIAngularComponentsModule } from '@universal-robots/ui-angular-components';

@Component({
  selector: 'app-process-platform-dialog',
  imports: [CommonModule, TranslateModule, UIAngularComponentsModule],
  templateUrl: './process-platform-dialog.html',
  styleUrl: './process-platform-dialog.scss',
})
export class ProcessPlatformDialog implements OnChanges {
    @Input() applicationAPI: ApplicationPresenterAPI;
    @Input() robotSettings: RobotSettings;
    @Input() applicationNode: PapAppButtonPanelNode;

    useDaemonForWeave = true;
    isDaemonRunning = false;
    daemonStatus = 'Not Running';
    
    daemonLog = `{
  "weldingProgram": {
    "programId": "WP-001",
    "description": "Robotic welding program for steel plates",
    "material": "Steel",
    "thickness": "5mm",
    "weldType": "MIG",
    "parameters": {
      "voltage": "24V",
      "current": "180A",
      "wireFeedSpeed": "8m/min",
      "gasFlowRate": "15L/min"
    }
  },
  "robotInstructions": [
    {
      "step": 1,
      "action": "Move to start position",`;

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

    onUseDaemonChange(checked: boolean) {
        this.useDaemonForWeave = checked;
        this.cd.detectChanges();
    }

    stopDaemon() {
        this.isDaemonRunning = false;
        this.daemonStatus = 'Not Running';
        this.cd.detectChanges();
        console.log('Daemon stopped');
    }
}
