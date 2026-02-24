import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ApplicationPresenterAPI, RobotSettings } from '@universal-robots/contribution-api';
import { PapAppButtonPanelNode } from '../pap-app-button-panel.node';
import { first } from 'rxjs';
import { UIAngularComponentsModule } from '@universal-robots/ui-angular-components';
import { PATH } from '../../../../generated/contribution-constants';

@Component({
  selector: 'app-welding-torch',
  imports: [CommonModule, TranslateModule, UIAngularComponentsModule],
  templateUrl: './welding-torch.html',
  styleUrl: './welding-torch.scss',
})
export class WeldingTorch implements OnChanges {
    @Input() applicationAPI: ApplicationPresenterAPI;
    @Input() robotSettings: RobotSettings;
    @Input() applicationNode: PapAppButtonPanelNode;

    torchImagePath = `${PATH}/assets/icons/torch.png`;

    weldingTorch = {
        type: 'justAnExample'
    };

    torchTypeOptions = [
        { label: 'JustAnExample', value: 'justAnExample' }
    ];

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

    onTorchTypeChange(event: any) {
        this.weldingTorch.type = event.value;
        this.cd.detectChanges();
    }
}
