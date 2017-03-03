import { OpaqueToken } from '@angular/core';
import { Experiment, ExperimentCase } from '../models/experiment';
export declare const EXPERIMENTS: OpaqueToken;
export declare type IdMap<T extends {
    id: string;
}> = {
    [id: string]: T;
};
export declare class ExperimentRegistryService {
    experiments: IdMap<Experiment>;
    experimentCases: IdMap<ExperimentCase>;
    constructor(experiments: Experiment[]);
    getExperiment(id: string): Experiment;
    getExperimentCase(id: string): ExperimentCase;
    getAllExperiments(): Experiment[];
}
export declare function provideExperiments(experiments: Experiment[]): {
    provide: OpaqueToken;
    useValue: Experiment[];
};
