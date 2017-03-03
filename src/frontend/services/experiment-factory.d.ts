import { Compiler, OpaqueToken, Injector, ComponentFactory } from '@angular/core';
import { ResolvedLab } from '../models/lab';
export declare const RESOLVED_LAB: OpaqueToken;
export interface CompiledExperiment {
    injector: Injector;
    factory: ComponentFactory<any>;
}
export declare class ExperimentFactoryService {
    private _lab;
    private _factory;
    constructor(lab: ResolvedLab, compiler: Compiler);
    compileComponent(id: string, injector: Injector): CompiledExperiment;
}
export declare function provideResolvedLab(lab: ResolvedLab): {
    provide: OpaqueToken;
    useValue: ResolvedLab;
};
