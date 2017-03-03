import { bootstrap } from './frontend/bootstrap';
export function createLab(lab) {
    bootstrap(lab);
}
export var ExperimentBuilder = (function () {
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
export function experimentOn(component, module) {
    return new ExperimentBuilder(component, module);
}
//# sourceMappingURL=index.js.map