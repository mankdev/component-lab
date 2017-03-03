/// <reference types="node" />
import { Experiment, ExperimentCase } from './frontend/models/experiment';
import { Lab } from './frontend/models/lab';
export interface CaseConfig {
    context?: any;
    template: string;
    styles?: string[];
}
export declare function createLab(lab: Lab): void;
export declare class ExperimentBuilder implements Experiment {
    name: string;
    module: NodeModule;
    id: string;
    cases: ExperimentCase[];
    private _callCount;
    constructor(name: string, module?: NodeModule);
    case(description: string, config: CaseConfig): this;
    xcase(description: string, config: CaseConfig): this;
}
export declare function experimentOn(component: string, module?: NodeModule): ExperimentBuilder;
