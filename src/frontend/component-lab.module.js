var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Routing } from './routing';
import { ComponentLabComponent } from './containers/app';
import { RootContainerComponent } from './containers/root';
import { PreviewContainerComponent } from './containers/preview';
import { RendererComponent } from './components/renderer';
import { NavComponent } from './components/nav';
import { LayoutComponent } from './components/layout';
import { StageComponent } from './components/stage';
import { ToolbarComponent } from './components/toolbar';
import { ExperimentFactoryService } from './services/experiment-factory';
import { ExperimentRegistryService } from './services/experiment-registry';
export var ComponentLabModule = (function () {
    function ComponentLabModule() {
    }
    ComponentLabModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                CommonModule,
                Routing,
            ],
            providers: [
                ExperimentFactoryService,
                ExperimentRegistryService,
            ],
            declarations: [
                ComponentLabComponent,
                RendererComponent,
                RootContainerComponent,
                NavComponent,
                PreviewContainerComponent,
                LayoutComponent,
                StageComponent,
                ToolbarComponent,
            ],
            entryComponents: [
                RootContainerComponent,
                PreviewContainerComponent,
            ],
            bootstrap: [
                ComponentLabComponent,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentLabModule);
    return ComponentLabModule;
}());
//# sourceMappingURL=component-lab.module.js.map