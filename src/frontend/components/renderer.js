var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Injector, ViewContainerRef } from '@angular/core';
import { ExperimentFactoryService } from '../services/experiment-factory';
export var RendererComponent = (function () {
    function RendererComponent(experimentFactory, injector, view) {
        this.experimentFactory = experimentFactory;
        this.injector = injector;
        this.view = view;
    }
    RendererComponent.prototype._cleanup = function () {
        if (this._ref) {
            this._ref.destroy();
            this._ref = null;
        }
    };
    Object.defineProperty(RendererComponent.prototype, "id", {
        set: function (id) {
            this._cleanup();
            var _a = this.experimentFactory.compileComponent(id, this.injector), factory = _a.factory, injector = _a.injector;
            var position = this.view.length;
            this._ref = this.view.createComponent(factory, position, injector, []);
        },
        enumerable: true,
        configurable: true
    });
    RendererComponent.prototype.ngOnDestroy = function () {
        this._cleanup();
    };
    __decorate([
        Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], RendererComponent.prototype, "id", null);
    RendererComponent = __decorate([
        Component({
            selector: 'cl-renderer',
            template: ''
        }), 
        __metadata('design:paramtypes', [ExperimentFactoryService, Injector, ViewContainerRef])
    ], RendererComponent);
    return RendererComponent;
}());
//# sourceMappingURL=renderer.js.map