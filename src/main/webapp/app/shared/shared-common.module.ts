import { NgModule } from '@angular/core';

import { GatewaychatbotSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GatewaychatbotSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GatewaychatbotSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GatewaychatbotSharedCommonModule {}
