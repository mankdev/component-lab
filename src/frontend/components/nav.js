var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
export var NavComponent = (function () {
    function NavComponent() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], NavComponent.prototype, "experiments", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], NavComponent.prototype, "activeCase", void 0);
    NavComponent = __decorate([
        Component({
            selector: 'cl-nav',
            template: "\n    <nav>\n      <div *ngFor=\"let experiment of experiments\" class=\"experiment\">\n        <span class=\"experimentName\">\n          {{ experiment.name }}\n        </span>\n\n        <nav class=\"cases\">\n          <a \n            *ngFor=\"let c of experiment.cases\" \n            [routerLink]=\"[ '/', 'experiment', 'preview', experiment.id, c.id ]\"\n            routerLinkActive=\"caseLinkActive\"\n            class=\"caseLink\">\n            {{ c.description }}\n          </a>\n        </nav>\n      </div>\n    </nav>\n  ",
            styles: ["\n    :host {\n      display: block;\n      padding: 16px;\n      width: 220px;\n      max-height: 100vh;\n      overflow: auto;\n      box-sizing: border-box;\n    }\n\n    span, a {\n      font-family: 'Open Sans', sans-serif;\n      color: #EEEFF7;\n    }\n\n    .experiment:not(:last-child) {\n      padding-bottom: 10px;\n      margin-bottom: 20px;\n      border-bottom: 2px solid #232730;\n    }\n\n    .experimentName {\n      display: block;\n      font-size: 13px;\n      margin: 12px 0 8px;\n      padding: 0px 8px;\n    }\n\n    .caseLink {\n      font-size: 11px;\n      color: #626D79;\n      display: block;\n      text-decoration: none;\n      margin: 10px 0px;\n      padding: 8px;\n      margin: 4px 0px;\n      transition: all 200ms;\n    }\n\n    .caseLink.caseLinkActive, .caseLink:hover {\n      color: white;\n      background-color: #1D202B;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
//# sourceMappingURL=nav.js.map