import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideExperiments } from './services/experiment-registry';
import { provideResolvedLab } from './services/experiment-factory';
import { getModuleForExperiments } from './module-builder';
import { ComponentLabModule } from './component-lab.module';
export function bootstrap(lab) {
    var experiments = lab.loadExperiments();
    var resolved = getModuleForExperiments(lab.ngModule, experiments);
    var platform = platformBrowserDynamic([
        provideExperiments(experiments),
        provideResolvedLab(resolved)
    ]);
    return platform.bootstrapModule(ComponentLabModule);
}
//# sourceMappingURL=bootstrap.js.map