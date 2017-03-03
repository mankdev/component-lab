var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var ToolbarComponent = (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent = __decorate([
        Component({
            selector: 'cl-toolbar',
            template: "\n    <div class=\"button-group\">\n      <button>\n        <i class=\"material-icons md-18\">desktop_windows</i>\n      </button>\n      <button>\n        <i class=\"material-icons md-18\">tablet_android</i>\n      </button>\n      <button>\n        <i class=\"material-icons md-18\">phone_iphone</i>\n      </button>\n    </div>\n\n    <!--\n    <i class=\"material-icons\">brightness_1</i>\n    <i class=\"material-icons\">brightness_5</i>\n    -->\n  ",
            styles: ["\n    :host {\n      display: block;\n      width: 100%;\n      height: 40px;\n      padding: 4px;\n      background-color: #F4F7FA;\n    }\n\n    .button-group {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n\n    }\n\n    button {\n      display: block;\n      width: 32px;\n      height: 32px;\n      margin: 0 4px;\n      background-color: transparent;\n      outline: none !important;\n      box-shadow: none !important;\n      border: none !important;\n      opacity: 0.1;\n      transition: opacity 250ms;\n      cursor: pointer;\n    }\n\n    button.selected, button:hover {\n      opacity: 0.5;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
//# sourceMappingURL=toolbar.js.map