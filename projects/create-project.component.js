"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var project_service_1 = require("./shared/project.service");
var CreateProjectComponent = (function () {
    function CreateProjectComponent(router, projectService) {
        this.router = router;
        this.projectService = projectService;
    }
    CreateProjectComponent.prototype.saveProject = function (formValues) {
        console.log(formValues);
        this.projectService.saveProject(formValues);
        this.router.navigate(['/projects']);
        //  this.projectService.saveProjectAsyn(formValues).subscribe(project =>{
        //    this.router.navigate(['/projects'])
        //})
    };
    CreateProjectComponent.prototype.cancel = function () {
        this.router.navigate(['/projects']);
    };
    return CreateProjectComponent;
}());
CreateProjectComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/projects/create-project.component.html',
        styles: ["\n  em { float:right; color:#E05C65; padding-left:10px}\n  .error input{background-color:#E3C3C5}\n  .error ::-moz-placeholder {color: #999;}\n  .error :-moz-placeholder {color: #999;}\n  "]
    }),
    __metadata("design:paramtypes", [router_1.Router, project_service_1.ProjectService])
], CreateProjectComponent);
exports.CreateProjectComponent = CreateProjectComponent;
//# sourceMappingURL=create-project.component.js.map