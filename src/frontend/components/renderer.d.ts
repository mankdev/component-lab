import { OnDestroy, Injector, ViewContainerRef } from '@angular/core';
import { ExperimentFactoryService } from '../services/experiment-factory';
export declare class RendererComponent implements OnDestroy {
    private experimentFactory;
    private injector;
    private view;
    private _ref;
    constructor(experimentFactory: ExperimentFactoryService, injector: Injector, view: ViewContainerRef);
    private _cleanup();
    id: string;
    ngOnDestroy(): void;
}
