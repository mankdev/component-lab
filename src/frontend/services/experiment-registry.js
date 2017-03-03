var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, OpaqueToken, Inject } from '@angular/core';
export var EXPERIMENTS = new OpaqueToken('Experiments');
export var ExperimentRegistryService = (function () {
    function ExperimentRegistryService(experiments) {
        this.experiments = {};
        this.experimentCases = {};
        this.experiments = experiments.reduce(byId, {});
        this.experimentCases = experiments.reduce(function (all, next) {
            return Object.assign(all, next.cases.reduce(byId, {}));
        }, {});
    }
    ExperimentRegistryService.prototype.getExperiment = function (id) {
        return this.experiments[id];
    };
    ExperimentRegistryService.prototype.getExperimentCase = function (id) {
        return this.experimentCases[id];
    };
    ExperimentRegistryService.prototype.getAllExperiments = function () {
        var _this = this;
        return Object.keys(this.experiments)
            .map(function (key) { return _this.experiments[key]; });
    };
    ExperimentRegistryService = __decorate([
        Injectable(),
        __param(0, Inject(EXPERIMENTS)), 
        __metadata('design:paramtypes', [Array])
    ], ExperimentRegistryService);
    return ExperimentRegistryService;
}());
function byId(entities, next) {
    if (entities === void 0) { entities = {}; }
    return Object.assign(entities, (_a = {},
        _a[next.id] = next,
        _a
    ));
    var _a;
}
export function provideExperiments(experiments) {
    return { provide: EXPERIMENTS, useValue: experiments };
}
//# sourceMappingURL=experiment-registry.js.map