var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { pluck } from 'rxjs/operator/pluck';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export var PreviewContainerComponent = (function () {
    function PreviewContainerComponent(route) {
        this.caseID$ = pluck.call(route.params, 'caseID');
    }
    PreviewContainerComponent = __decorate([
        Component({
            selector: 'cl-preview-container',
            template: "\n    <cl-stage>\n      \n      <cl-renderer [id]=\"caseID$ | async\"></cl-renderer>\n    </cl-stage>\n  ",
            styles: ["\n    :host {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      height: 100%;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [ActivatedRoute])
    ], PreviewContainerComponent);
    return PreviewContainerComponent;
}());
//# sourceMappingURL=preview.js.map