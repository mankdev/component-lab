(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser-dynamic'), require('@angular/core'), require('lodash'), require('@angular/platform-browser'), require('@angular/common'), require('@angular/router'), require('rxjs/operator/pluck')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/platform-browser-dynamic', '@angular/core', 'lodash', '@angular/platform-browser', '@angular/common', '@angular/router', 'rxjs/operator/pluck'], factory) :
    (factory((global.synapse = global.synapse || {}, global.synapse.componentLab = global.synapse.componentLab || {}),global.ng.platformBrowserDynamic,global.ng.core,global._,global.ng.platformBrowser,global.ng.common,global.ng.router,global.Rx.Observable.prototype));
}(this, (function (exports,_angular_platformBrowserDynamic,_angular_core,lodash,_angular_platformBrowser,_angular_common,_angular_router,rxjs_operator_pluck) { 'use strict';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var EXPERIMENTS = new _angular_core.OpaqueToken('Experiments');
var ExperimentRegistryService = (function () {
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
        _angular_core.Injectable(),
        __param(0, _angular_core.Inject(EXPERIMENTS)), 
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
function provideExperiments(experiments) {
    return { provide: EXPERIMENTS, useValue: experiments };
}

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var RESOLVED_LAB = new _angular_core.OpaqueToken('Resolved Lab');
var ExperimentFactoryService = (function () {
    function ExperimentFactoryService(lab, compiler) {
        this._lab = lab;
        this._factory = compiler.compileModuleSync(lab.ngModule);
    }
    ExperimentFactoryService.prototype.compileComponent = function (id, injector) {
        var component = this._lab.components[id];
        var ref = this._factory.create(injector);
        var factory = ref.componentFactoryResolver.resolveComponentFactory(component);
        return { factory: factory, injector: ref.injector };
    };
    ExperimentFactoryService = __decorate$1([
        _angular_core.Injectable(),
        __param$1(0, _angular_core.Inject(RESOLVED_LAB)), 
        __metadata$1('design:paramtypes', [Object, _angular_core.Compiler])
    ], ExperimentFactoryService);
    return ExperimentFactoryService;
}());
function provideResolvedLab(lab) {
    return { provide: RESOLVED_LAB, useValue: lab };
}

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function getModuleForExperiments(inputModule, experiments) {
    var componentsWithIds = lodash.flatten(experiments.map(function (exp) { return exp.cases.map(function (c) {
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
function generateComponent(experimentCase) {
    var ExperimentCaseComponent = (function () {
        function ExperimentCaseComponent() {
            Object.assign(this, experimentCase.context || {});
        }
        ExperimentCaseComponent = __decorate$2([
            _angular_core.Component({
                template: experimentCase.template,
                styles: experimentCase.styles
            }), 
            __metadata$2('design:paramtypes', [])
        ], ExperimentCaseComponent);
        return ExperimentCaseComponent;
    }());
    return ExperimentCaseComponent;
}
function generateNgModule(inputModule, components) {
    var ExperimentModule = (function () {
        function ExperimentModule() {
        }
        ExperimentModule = __decorate$2([
            _angular_core.NgModule({
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
            __metadata$2('design:paramtypes', [])
        ], ExperimentModule);
        return ExperimentModule;
    }());
    return ExperimentModule;
}

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RootContainerComponent = (function () {
    function RootContainerComponent(registry) {
        this.experiments = registry.getAllExperiments();
    }
    RootContainerComponent = __decorate$4([
        _angular_core.Component({
            selector: 'cl-root-container',
            template: "\n    <cl-layout>\n      <cl-nav [experiments]=\"experiments\"></cl-nav>\n\n      <div class=\"grow\">\n        <router-outlet></router-outlet>\n      </div>\n    </cl-layout>\n  ",
            styles: ["\n    .grow {\n      flex-grow: 5;\n    }\n  "]
        }), 
        __metadata$4('design:paramtypes', [ExperimentRegistryService])
    ], RootContainerComponent);
    return RootContainerComponent;
}());

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PreviewContainerComponent = (function () {
    function PreviewContainerComponent(route) {
        this.caseID$ = rxjs_operator_pluck.pluck.call(route.params, 'caseID');
    }
    PreviewContainerComponent = __decorate$5([
        _angular_core.Component({
            selector: 'cl-preview-container',
            template: "\n    <cl-stage>\n      \n      <cl-renderer [id]=\"caseID$ | async\"></cl-renderer>\n    </cl-stage>\n  ",
            styles: ["\n    :host {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      height: 100%;\n    }\n  "]
        }), 
        __metadata$5('design:paramtypes', [_angular_router.ActivatedRoute])
    ], PreviewContainerComponent);
    return PreviewContainerComponent;
}());

var routes = [
    {
        path: '',
        redirectTo: '/experiment',
        pathMatch: 'full'
    },
    {
        path: 'experiment',
        component: RootContainerComponent,
        children: [
            {
                path: 'preview/:experimentID/:caseID',
                component: PreviewContainerComponent
            },
        ],
    },
];
var Routing = _angular_router.RouterModule.forRoot(routes);

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ComponentLabComponent = (function () {
    function ComponentLabComponent() {
    }
    ComponentLabComponent = __decorate$6([
        _angular_core.Component({
            selector: 'component-lab',
            encapsulation: _angular_core.ViewEncapsulation.None,
            template: "\n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata$6('design:paramtypes', [])
    ], ComponentLabComponent);
    return ComponentLabComponent;
}());

var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RendererComponent = (function () {
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
    __decorate$7([
        _angular_core.Input(), 
        __metadata$7('design:type', String), 
        __metadata$7('design:paramtypes', [String])
    ], RendererComponent.prototype, "id", null);
    RendererComponent = __decorate$7([
        _angular_core.Component({
            selector: 'cl-renderer',
            template: ''
        }), 
        __metadata$7('design:paramtypes', [ExperimentFactoryService, _angular_core.Injector, _angular_core.ViewContainerRef])
    ], RendererComponent);
    return RendererComponent;
}());

var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NavComponent = (function () {
    function NavComponent() {
    }
    __decorate$8([
        _angular_core.Input(), 
        __metadata$8('design:type', Array)
    ], NavComponent.prototype, "experiments", void 0);
    __decorate$8([
        _angular_core.Input(), 
        __metadata$8('design:type', Object)
    ], NavComponent.prototype, "activeCase", void 0);
    NavComponent = __decorate$8([
        _angular_core.Component({
            selector: 'cl-nav',
            template: "\n    <nav>\n      <div *ngFor=\"let experiment of experiments\" class=\"experiment\">\n        <span class=\"experimentName\">\n          {{ experiment.name }}\n        </span>\n\n        <nav class=\"cases\">\n          <a \n            *ngFor=\"let c of experiment.cases\" \n            [routerLink]=\"[ '/', 'experiment', 'preview', experiment.id, c.id ]\"\n            routerLinkActive=\"caseLinkActive\"\n            class=\"caseLink\">\n            {{ c.description }}\n          </a>\n        </nav>\n      </div>\n    </nav>\n  ",
            styles: ["\n    :host {\n      display: block;\n      padding: 16px;\n      width: 220px;\n      max-height: 100vh;\n      overflow: auto;\n      box-sizing: border-box;\n    }\n\n    span, a {\n      font-family: 'Open Sans', sans-serif;\n      color: #EEEFF7;\n    }\n\n    .experiment:not(:last-child) {\n      padding-bottom: 10px;\n      margin-bottom: 20px;\n      border-bottom: 2px solid #232730;\n    }\n\n    .experimentName {\n      display: block;\n      font-size: 13px;\n      margin: 12px 0 8px;\n      padding: 0px 8px;\n    }\n\n    .caseLink {\n      font-size: 11px;\n      color: #626D79;\n      display: block;\n      text-decoration: none;\n      margin: 10px 0px;\n      padding: 8px;\n      margin: 4px 0px;\n      transition: all 200ms;\n    }\n\n    .caseLink.caseLinkActive, .caseLink:hover {\n      color: white;\n      background-color: #1D202B;\n    }\n  "]
        }), 
        __metadata$8('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());

var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent = __decorate$9([
        _angular_core.Component({
            selector: 'cl-layout',
            template: "\n    <ng-content></ng-content>\n  ",
            styles: ["\n    :host {\n      display: flex;\n      flex-direction: row;\n      min-width: 100vw;\n      min-height: 100vh;\n      background-color: #262A34;\n      box-sizing: border-box;\n    }\n  "]
        }), 
        __metadata$9('design:paramtypes', [])
    ], LayoutComponent);
    return LayoutComponent;
}());

var __decorate$10 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var StageComponent = (function () {
    function StageComponent() {
    }
    StageComponent = __decorate$10([
        _angular_core.Component({
            selector: 'cl-stage',
            template: "\n    <ng-content></ng-content>\n  ",
            styles: ["\n    :host {\n      display: block;\n      background-color: white;\n      height: 100%;\n      box-sizing: border-box;\n      padding: 20px;\n    }\n  "]
        }), 
        __metadata$10('design:paramtypes', [])
    ], StageComponent);
    return StageComponent;
}());

var __decorate$11 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ToolbarComponent = (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent = __decorate$11([
        _angular_core.Component({
            selector: 'cl-toolbar',
            template: "\n    <div class=\"button-group\">\n      <button>\n        <i class=\"material-icons md-18\">desktop_windows</i>\n      </button>\n      <button>\n        <i class=\"material-icons md-18\">tablet_android</i>\n      </button>\n      <button>\n        <i class=\"material-icons md-18\">phone_iphone</i>\n      </button>\n    </div>\n\n    <!--\n    <i class=\"material-icons\">brightness_1</i>\n    <i class=\"material-icons\">brightness_5</i>\n    -->\n  ",
            styles: ["\n    :host {\n      display: block;\n      width: 100%;\n      height: 40px;\n      padding: 4px;\n      background-color: #F4F7FA;\n    }\n\n    .button-group {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n\n    }\n\n    button {\n      display: block;\n      width: 32px;\n      height: 32px;\n      margin: 0 4px;\n      background-color: transparent;\n      outline: none !important;\n      box-shadow: none !important;\n      border: none !important;\n      opacity: 0.1;\n      transition: opacity 250ms;\n      cursor: pointer;\n    }\n\n    button.selected, button:hover {\n      opacity: 0.5;\n    }\n  "]
        }), 
        __metadata$11('design:paramtypes', [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ComponentLabModule = (function () {
    function ComponentLabModule() {
    }
    ComponentLabModule = __decorate$3([
        _angular_core.NgModule({
            imports: [
                _angular_platformBrowser.BrowserModule,
                _angular_common.CommonModule,
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
        __metadata$3('design:paramtypes', [])
    ], ComponentLabModule);
    return ComponentLabModule;
}());

function bootstrap(lab) {
    var experiments = lab.loadExperiments();
    var resolved = getModuleForExperiments(lab.ngModule, experiments);
    var platform = _angular_platformBrowserDynamic.platformBrowserDynamic([
        provideExperiments(experiments),
        provideResolvedLab(resolved)
    ]);
    return platform.bootstrapModule(ComponentLabModule);
}

function createLab(lab) {
    bootstrap(lab);
}
var ExperimentBuilder = (function () {
    function ExperimentBuilder(name, module) {
        this.name = name;
        this.module = module;
        this.cases = [];
        this._callCount = 0;
        this.id = "exp" + (module ? module.id : '');
    }
    ExperimentBuilder.prototype.case = function (description, config) {
        this.cases.push({
            id: this.id + "-" + ++this._callCount,
            description: description,
            template: config.template,
            context: config.context,
            styles: config.styles
        });
        return this;
    };
    ExperimentBuilder.prototype.xcase = function (description, config) {
        return this;
    };
    return ExperimentBuilder;
}());
function experimentOn(component, module) {
    return new ExperimentBuilder(component, module);
}

exports.createLab = createLab;
exports.ExperimentBuilder = ExperimentBuilder;
exports.experimentOn = experimentOn;

Object.defineProperty(exports, '__esModule', { value: true });

})));
