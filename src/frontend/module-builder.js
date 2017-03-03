var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component } from '@angular/core';
import { flatten } from 'lodash';
export function getModuleForExperiments(inputModule, experiments) {
    var componentsWithIds = flatten(experiments.map(function (exp) { return exp.cases.map(function (c) {
        return {
            id: c.id,
            component: generateComponent(c)
        };
    }); }));
    var components = componentsWithIds.reduce(function (all, next) {
        return Object.assign(all, (_a = {}, _a[next.id] = next.component, _a));
        var _a;
    }, {});
    var ngModule = generateNgModule(inputModule, componentsWithIds.map(function (e) { return e.component; }));
    return { ngModule: ngModule, components: components };
}
export function generateComponent(experimentCase) {
    var ExperimentCaseComponent = (function () {
        function ExperimentCaseComponent() {
            Object.assign(this, experimentCase.context || {});
        }
        ExperimentCaseComponent = __decorate([
            Component({
                template: experimentCase.template,
                styles: experimentCase.styles
            }), 
            __metadata('design:paramtypes', [])
        ], ExperimentCaseComponent);
        return ExperimentCaseComponent;
    }());
    return ExperimentCaseComponent;
}
export function generateNgModule(inputModule, components) {
    var ExperimentModule = (function () {
        function ExperimentModule() {
        }
        ExperimentModule = __decorate([
            NgModule({
                imports: [
                    inputModule
                ],
                declarations: [
                    components
                ],
                entryComponents: [
                    components
                ]
            }), 
            __metadata('design:paramtypes', [])
        ], ExperimentModule);
        return ExperimentModule;
    }());
    return ExperimentModule;
}
//# sourceMappingURL=module-builder.js.map