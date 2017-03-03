import { NgModuleRef } from '@angular/core';
import { Lab } from './models/lab';
import { ComponentLabModule } from './component-lab.module';
export declare function bootstrap(lab: Lab): Promise<NgModuleRef<ComponentLabModule>>;
