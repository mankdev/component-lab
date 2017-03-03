import { Type, ModuleWithProviders } from '@angular/core';
import { Experiment, ExperimentCase } from './models/experiment';
import { ResolvedLab } from './models/lab';
export declare function getModuleForExperiments(inputModule: ModuleWithProviders | Type<any>, experiments: Experiment[]): ResolvedLab;
export declare function generateComponent(experimentCase: ExperimentCase): Type<any>;
export declare function generateNgModule(inputModule: ModuleWithProviders | Type<any>, components: Type<any>[]): Type<any>;
