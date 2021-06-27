(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+7qI":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SidenavComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const social_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", social_r1 == null ? null : social_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("bx ", social_r1 == null ? null : social_r1.logo, "");
} }
class SidenavComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.socials = [
            {
                id: 1,
                name: 'LinkedIn',
                link: 'https://linkedin.com/in/moez-saidi/',
                logo: 'bxl-linkedin'
            },
            {
                id: 2,
                name: 'Github',
                link: 'https://github.com/moez-RT',
                logo: 'bxl-github'
            },
            {
                id: 3,
                name: 'Facebook',
                link: 'https://www.facebook.com/moez.saidi.92',
                logo: 'bxl-facebook'
            }
        ];
        this.about = {
            id: 1,
            name: 'Moez Saidi',
            position: 'Software Engineer',
            profile_image: '/assets/img/media/about/43f7f649-5ac2-4065-a80d-cad464735276.jpg',
            profile_background: '/assets/img/media/about/acd8bd91-e90a-49e7-a598-d913af1d6987.jpg',
            cv: '/assets/img/media/about/3cdb2154-7b13-40ad-b085-fabc24fe2b90.pdf',
            age: '1998-01-01',
            website: 'https://master.d463nqrat69rs.amplifyapp.com/',
            phone: '+216 26992291',
            degree: 'IT Engineer',
            email: 'saidi.moez.2014@gmail.com',
            city: 'Tunis',
            description: 'I’m a student in 2nd-year Engineer with Specialty in Computer Networks and\r\nTelecommunications at the National Institute of Applied Sciences and Technologies (INSAT).\r\nI have 6 months of experience with Angular and Django Rest Framework, also I\'m aiming to extend my knowledge about the cloud (AWS).',
            location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d204528.2082550114!2d10.0596678!3d36.7764864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sfr!2stn!4v1624740591114!5m2!1sfr!2stn'
        };
    }
    ngOnInit() {
        // this.getSocial();
        // this.getAbout();
    }
    getSocial() {
        this.apiService.getSocial().subscribe(data => {
            this.socials = data;
        });
    }
    getAbout() {
        this.apiService.getAbout().subscribe(data => {
            this.about = data[0];
        });
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 44, vars: 4, consts: [[1, "bi", "bi-list", "mobile-nav-toggle", "d-xl-none"], ["id", "header"], [1, "d-flex", "flex-column"], [1, "profile"], ["alt", "", 1, "img-fluid", "rounded-circle", 3, "src"], [1, "text-light"], [1, "social-links", "mt-3", "text-center"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], [3, "href", "download"], [1, "bx", "bxs-file-doc"], ["id", "navbar", 1, "nav-menu", "navbar"], ["href", "#hero", 1, "nav-link", "scrollto", "active"], [1, "bx", "bx-home"], ["href", "#about", 1, "nav-link", "scrollto"], [1, "bx", "bx-user"], ["href", "#resume", 1, "nav-link", "scrollto"], [1, "bx", "bx-file-blank"], ["href", "#portfolio", 1, "nav-link", "scrollto"], [1, "bx", "bx-book-content"], ["href", "#projects", 1, "nav-link", "scrollto"], [1, "bx", "bx-server"], ["href", "#contact", 1, "nav-link", "scrollto"], [1, "bx", "bx-envelope"], ["target", "_blank", 3, "href"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Moez Saidi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SidenavComponent_a_9_Template, 2, 4, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.about == null ? null : ctx.about.profile_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.about == null ? null : ctx.about.cv, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("download", "", ctx.about == null ? null : ctx.about.name, ".pdf");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "+DhY":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");



class AboutComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.about = {
            id: 1,
            name: 'Moez Saidi',
            position: 'Software Engineer',
            profile_image: '/assets/img/media/about/43f7f649-5ac2-4065-a80d-cad464735276.jpg',
            profile_background: '/assets/img/media/about/acd8bd91-e90a-49e7-a598-d913af1d6987.jpg',
            cv: '/assets/img/media/about/3cdb2154-7b13-40ad-b085-fabc24fe2b90.pdf',
            age: '1998-01-01',
            website: 'https://master.d463nqrat69rs.amplifyapp.com/',
            phone: '+216 26992291',
            degree: 'IT Engineer',
            email: 'saidi.moez.2014@gmail.com',
            city: 'Tunis',
            description: 'I’m a student in 2nd-year Engineer with Specialty in Computer Networks and\r\nTelecommunications at the National Institute of Applied Sciences and Technologies (INSAT).\r\nI have 6 months of experience with Angular and Django Rest Framework, also I\'m aiming to extend my knowledge about the cloud (AWS).',
            location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d204528.2082550114!2d10.0596678!3d36.7764864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sfr!2stn!4v1624740591114!5m2!1sfr!2stn'
        };
        this.now = new Date();
    }
    ngOnInit() {
        // this.getAbout();
    }
    getAbout() {
        this.apiService.getAbout().subscribe(data => {
            this.about = data[0];
        });
    }
    getAge(current) {
        const cur = new Date(current);
        const diff = Math.floor((this.now - cur)) / (1000 * 3600 * 24 * 30 * 12);
        return parseInt(String(diff), 10);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 58, vars: 10, consts: [["id", "about", 1, "about"], [1, "container"], [1, "section-title"], [1, "row"], ["data-aos", "fade-right", 1, "col-lg-4"], ["alt", "", 1, "img-fluid", 3, "src"], ["id", "about-step", "data-aos", "fade-in", 1, "col-lg-8", "pt-4", "pt-lg-0", "content"], [1, "fst-italic"], [1, "col-lg-6"], [1, "bi", "bi-chevron-right"], ["target", "_blank", 3, "href"], [1, "btn", "btn-light", "p-3", "fa", "fa-link"], [3, "href"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Website:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "City:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Age:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Degree:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.about == null ? null : ctx.about.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.about == null ? null : ctx.about.profile_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.about == null ? null : ctx.about.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.about == null ? null : ctx.about.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about == null ? null : ctx.about.phone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about == null ? null : ctx.about.city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getAge(ctx.about == null ? null : ctx.about.age));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about == null ? null : ctx.about.degree, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.about == null ? null : ctx.about.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.about == null ? null : ctx.about.email);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Documents\Development_Web_Mobile\PersonalProject\personalportofolio2021\src\main.ts */"zUnb");


/***/ }),

/***/ "2iGG":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/custom-container/custom-container.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomContainerComponent", function() { return CustomContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CustomContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomContainerComponent.ɵfac = function CustomContainerComponent_Factory(t) { return new (t || CustomContainerComponent)(); };
CustomContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomContainerComponent, selectors: [["app-custom-container"]], decls: 2, vars: 0, template: function CustomContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "custom-container works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2N1c3RvbS1jb250YWluZXIvY3VzdG9tLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-container',
                templateUrl: './custom-container.component.html',
                styleUrls: ['./custom-container.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5gzz":
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ExperienceComponent_div_2_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "- Remotely");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExperienceComponent_div_2_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, experience_r1 == null ? null : experience_r1.end_date, "yyyy/MM/dd"));
} }
function ExperienceComponent_div_2_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r1 == null ? null : experience_r1.end_date);
} }
function ExperienceComponent_div_2_ng_template_20_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8);
} }
function ExperienceComponent_div_2_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExperienceComponent_div_2_ng_template_20_li_0_Template, 2, 1, "li", 6);
} if (rf & 2) {
    const task_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r8);
} }
function ExperienceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExperienceComponent_div_2_i_3_Template, 2, 0, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExperienceComponent_div_2_span_12_Template, 3, 4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExperienceComponent_div_2_span_13_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ExperienceComponent_div_2_ng_template_20_Template, 1, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", experience_r1 == null ? null : experience_r1.role, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r1 == null ? null : experience_r1.remote);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r1 == null ? null : experience_r1.employer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 8, experience_r1 == null ? null : experience_r1.start_date, "yyyy/MM/dd"), " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (experience_r1 == null ? null : experience_r1.end_date) != "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (experience_r1 == null ? null : experience_r1.end_date) === "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r1 == null ? null : experience_r1.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", experience_r1.description.split("\\item"));
} }
class ExperienceComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.experiences = [
            {
                id: 1,
                skills: [
                    {
                        id: 5,
                        category: {
                            id: 3,
                            name: 'Database'
                        },
                        name: 'MongoDB',
                        knowledge: 65,
                        priority: 4,
                        image: 'http://127.0.0.1:8000/media/skill/89eed8fb-6465-41cf-a093-e6d7a37f487a.png'
                    },
                    {
                        id: 3,
                        category: {
                            id: 2,
                            name: 'Programming Language'
                        },
                        name: 'Python',
                        knowledge: 90,
                        priority: 3,
                        image: 'http://127.0.0.1:8000/media/skill/4b8b13c4-c912-416a-afac-d2a6f143f708.png'
                    },
                    {
                        id: 2,
                        category: {
                            id: 1,
                            name: 'Framework'
                        },
                        name: 'Angular',
                        knowledge: 70,
                        priority: 2,
                        image: 'http://127.0.0.1:8000/media/skill/685768cc-28f3-480c-9d52-7dea63b1fcbb.png'
                    },
                    {
                        id: 4,
                        category: {
                            id: 1,
                            name: 'Framework'
                        },
                        name: 'Node/Express',
                        knowledge: 70,
                        priority: 2,
                        image: 'http://127.0.0.1:8000/media/skill/841c453b-3380-4bc1-8873-ac6a28bab3f1.png'
                    },
                    {
                        id: 1,
                        category: {
                            id: 1,
                            name: 'Framework'
                        },
                        name: 'Django',
                        knowledge: 85,
                        priority: 1,
                        image: 'http://127.0.0.1:8000/media/skill/b8697998-8c1c-4b6c-b803-0faa0471d7f9.jpeg'
                    }
                ],
                start_date: '2021-04-18',
                end_date: 'Present',
                description: '\\item Develop a time management system for companies.\r\n\\item Develop innovative solutions to meet client needs',
                role: 'Software Engineer - Intern',
                employer: 'Voguel Consulting',
                address: 'Manar 2, Tunisia',
                remote: false
            },
            {
                id: 2,
                skills: [
                    {
                        id: 3,
                        category: {
                            id: 2,
                            name: 'Programming Language'
                        },
                        name: 'Python',
                        knowledge: 90,
                        priority: 3,
                        image: 'http://127.0.0.1:8000/media/skill/4b8b13c4-c912-416a-afac-d2a6f143f708.png'
                    },
                    {
                        id: 1,
                        category: {
                            id: 1,
                            name: 'Framework'
                        },
                        name: 'Django',
                        knowledge: 85,
                        priority: 1,
                        image: 'http://127.0.0.1:8000/media/skill/b8697998-8c1c-4b6c-b803-0faa0471d7f9.jpeg'
                    }
                ],
                start_date: '2020-10-01',
                end_date: 'Present',
                description: '\\item Automate report generation\r\n\\item Automate sending emails',
                role: 'Backend Engineer - Intern',
                employer: 'elBaladiya.tn',
                address: 'Tunis, Tunisia',
                remote: true
            },
            {
                id: 3,
                skills: [
                    {
                        id: 3,
                        category: {
                            id: 2,
                            name: 'Programming Language'
                        },
                        name: 'Python',
                        knowledge: 90,
                        priority: 3,
                        image: 'http://127.0.0.1:8000/media/skill/4b8b13c4-c912-416a-afac-d2a6f143f708.png'
                    },
                    {
                        id: 1,
                        category: {
                            id: 1,
                            name: 'Framework'
                        },
                        name: 'Django',
                        knowledge: 85,
                        priority: 1,
                        image: 'http://127.0.0.1:8000/media/skill/b8697998-8c1c-4b6c-b803-0faa0471d7f9.jpeg'
                    }
                ],
                start_date: '2020-09-01',
                end_date: '2020-10-01',
                description: '\\item Analysis of data from a survey carried out by students.',
                role: 'Data Analyst - Intern',
                employer: 'NAXXUM MEA',
                address: 'Lac 2, Tunisia',
                remote: false
            },
            {
                id: 4,
                skills: [
                    {
                        id: 3,
                        category: {
                            id: 2,
                            name: 'Programming Language'
                        },
                        name: 'Python',
                        knowledge: 90,
                        priority: 3,
                        image: 'http://127.0.0.1:8000/media/skill/4b8b13c4-c912-416a-afac-d2a6f143f708.png'
                    },
                    {
                        id: 2,
                        category: {
                            id: 1,
                            name: 'Framework'
                        },
                        name: 'Angular',
                        knowledge: 70,
                        priority: 2,
                        image: 'http://127.0.0.1:8000/media/skill/685768cc-28f3-480c-9d52-7dea63b1fcbb.png'
                    },
                    {
                        id: 6,
                        category: {
                            id: 1,
                            name: 'Framework'
                        },
                        name: 'Laravel',
                        knowledge: 70,
                        priority: 2,
                        image: 'http://127.0.0.1:8000/media/skill/873587eb-6434-4781-a216-a09d6a282af4.png'
                    },
                    {
                        id: 1,
                        category: {
                            id: 1,
                            name: 'Framework'
                        },
                        name: 'Django',
                        knowledge: 85,
                        priority: 1,
                        image: 'http://127.0.0.1:8000/media/skill/b8697998-8c1c-4b6c-b803-0faa0471d7f9.jpeg'
                    }
                ],
                start_date: '2020-03-01',
                end_date: '2020-08-30',
                description: '\\item Work on the Eventizer project which is a large-scale event and convention organization solution.\r\n\\item Develop the badges and certificates configuration\r\ninterface.\r\n\\item Automate the generation of badges and certificates.',
                role: 'Full Stack Developer - Intern',
                employer: 'VAYETEK',
                address: 'Urban Center, Tunisia',
                remote: false
            }
        ];
    }
    ngOnInit() {
        // this.getExperiences();
    }
    getExperiences() {
        this.apiService.getExperiences().subscribe(data => {
            this.experiences = data;
        }, error => { });
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 3, vars: 1, consts: [[1, "resume-title"], ["class", "resume-item", 4, "ngFor", "ngForOf"], [1, "resume-item"], ["class", "text-secondary p-2", 4, "ngIf"], [1, "fa", "fa-briefcase"], [1, "fa", "fa-calendar"], [4, "ngIf"], [1, "m-2"], [1, "fa", "fa-map-marker"], ["ngFor", "", 3, "ngForOf"], [1, "text-secondary", "p-2"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Professional Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExperienceComponent_div_2_Template, 21, 11, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "6bE9":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ProjectsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1 == null ? null : project_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", project_r1 == null ? null : project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r1 == null ? null : project_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r1 == null ? null : project_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r1 == null ? null : project_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.me == null ? null : ctx_r0.me.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.me == null ? null : ctx_r0.me.profile_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.me == null ? null : ctx_r0.me.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1 == null ? null : project_r1.date);
} }
class ProjectsComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.projects = [
            {
                id: 1,
                date: '2021-01-01',
                name: 'Real Time Mask Detection',
                link: 'https://github.com/moez-RT/Real-Time-Mask-Detection',
                image: '/assets/img/media/project/6cf505c3-63f6-4808-a181-1415c36cf59f.PNG',
                description: ''
            },
            {
                id: 2,
                date: '2020-10-01',
                name: 'Flip Card Game',
                link: 'https://github.com/moez-RT/flip-game-flutter',
                image: '/assets/img/media/project/320ab471-ddd0-4abd-bc25-72e842bded22.png',
                description: ''
            },
            {
                id: 3,
                date: '2020-05-01',
                name: 'Carpooling Website',
                link: 'https://moez-rt.github.io/HoyHoyHabatni/',
                image: '/assets/img/media/project/3d9b2de6-e203-4139-b316-84a4046e5b0b.png',
                description: ''
            }
        ];
        this.me = {
            id: 1,
            name: 'Moez Saidi',
            position: 'Software Engineer',
            profile_image: '/assets/img/media/about/43f7f649-5ac2-4065-a80d-cad464735276.jpg',
            profile_background: '/assets/img/media/about/acd8bd91-e90a-49e7-a598-d913af1d6987.jpg',
            cv: '/assets/img/media/about/3cdb2154-7b13-40ad-b085-fabc24fe2b90.pdf',
            age: '1998-01-01',
            website: 'https://master.d463nqrat69rs.amplifyapp.com/',
            phone: '+216 26992291',
            degree: 'IT Engineer',
            email: 'saidi.moez.2014@gmail.com',
            city: 'Tunis',
            description: 'I’m a student in 2nd-year Engineer with Specialty in Computer Networks and\r\nTelecommunications at the National Institute of Applied Sciences and Technologies (INSAT).\r\nI have 6 months of experience with Angular and Django Rest Framework, also I\'m aiming to extend my knowledge about the cloud (AWS).',
            location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d204528.2082550114!2d10.0596678!3d36.7764864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sfr!2stn!4v1624740591114!5m2!1sfr!2stn'
        };
    }
    ngOnInit() {
        // this.getProjects();
        // this.getAbout();
    }
    getAbout() {
        this.apiService.getAbout().subscribe(data => {
            this.me = data[0];
        }, error => { });
    }
    getProjects() {
        this.apiService.getProjects().subscribe(data => {
            this.projects = data;
        });
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 9, vars: 1, consts: [["id", "projects", 1, "projects"], [1, "container"], [1, "section-title"], [2, "display", "flex", "justify-content", "space-evenly", "flex-wrap", "wrap"], ["class", "card", "data-aos", "fade-up", "data-aos-delay", "100", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "card"], [1, "card-header"], ["target", "_blank", 3, "href"], [3, "alt", "src"], [1, "card-body"], [1, "tag", "tag-teal"], [1, "user"], [1, "user-info"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I have carried out several projects to showcase my skills.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_div_8_Template, 18, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  background-color: #f7f8fc;\n  font-family: \"Roboto\", sans-serif;\n  color: #10182f;\n}\n.card[_ngcontent-%COMP%] {\n  margin: 10px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  width: 300px;\n}\n.card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 20px;\n  min-height: 250px;\n}\n.tag[_ngcontent-%COMP%] {\n  background: #cccccc;\n  border-radius: 50px;\n  font-size: 12px;\n  margin: 0;\n  color: #fff;\n  padding: 2px 10px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.tag-teal[_ngcontent-%COMP%] {\n  background-color: #47bcd4;\n}\n.tag-purple[_ngcontent-%COMP%] {\n  background-color: #5e76bf;\n}\n.tag-pink[_ngcontent-%COMP%] {\n  background-color: #cd5b9f;\n}\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0 0 40px;\n}\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: auto;\n}\n.user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n}\n.user-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.user-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #545d7a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwyRUFBQTtBQUNSO0VBQ0Usc0JBQUE7QUFDRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUFFRjtBQUNBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBR0Y7QUFEQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFJRjtBQURBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBSUY7QUFGQTtFQUNFLHlCQUFBO0FBS0Y7QUFIQTtFQUNFLHlCQUFBO0FBTUY7QUFKQTtFQUNFLHlCQUFBO0FBT0Y7QUFKQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQU9GO0FBTEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFRRjtBQUxBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUUY7QUFOQTtFQUNFLFNBQUE7QUFTRjtBQVBBO0VBQ0UsY0FBQTtBQVVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXCIpO1xyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYztcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzEwMTgyZjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuLmNhcmQtaGVhZGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uY2FyZC1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuLnRhZyB7XHJcbiAgYmFja2dyb3VuZDogI2NjY2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRhZy10ZWFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiY2Q0O1xyXG59XHJcbi50YWctcHVycGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU3NmJmO1xyXG59XHJcbi50YWctcGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkNWI5ZjtcclxufVxyXG5cclxuLmNhcmQtYm9keSBwIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luOiAwIDAgNDBweDtcclxufVxyXG4udXNlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4udXNlciBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi51c2VyLWluZm8gaDUge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4udXNlci1pbmZvIHNtYWxsIHtcclxuICBjb2xvcjogIzU0NWQ3YTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "A9VX":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-progress-bar */ "nUjy");





function SkillsComponent_div_8_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "progress-bar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3 == null ? null : skill_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("progress", skill_r3 == null ? null : skill_r3.knowledge)("color", "#488aff");
} }
function SkillsComponent_div_8_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SkillsComponent_div_8_ng_template_3_div_0_Template, 5, 3, "div", 7);
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.category.name == category_r1.name);
} }
function SkillsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillsComponent_div_8_ng_template_3_Template, 1, 1, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1 == null ? null : category_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.skills);
} }
class SkillsComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.skills = [
            {
                id: 10,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'Docker',
                knowledge: 80,
                priority: 8,
                image: 'assets/img/media/skill/79017b80-29fd-4485-8c1f-76f6a027815a.png'
            },
            {
                id: 8,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'AWS',
                knowledge: 70,
                priority: 6,
                image: 'assets/img/media/skill/c1bfde15-ea97-494b-a7e9-a92fe3cdafdf.png'
            },
            {
                id: 9,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'Linux',
                knowledge: 75,
                priority: 5,
                image: 'assets/img/media/skill/f2d9e3c6-2d55-4e1b-ad90-3064b3a1a860.jpg'
            },
            {
                id: 12,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'Git',
                knowledge: 85,
                priority: 5,
                image: 'assets/img/media/skill/6ea8d409-d8b8-4bb5-90bf-a7b7b5662667.png'
            },
            {
                id: 5,
                category: {
                    id: 3,
                    name: 'Database'
                },
                name: 'MongoDB',
                knowledge: 65,
                priority: 4,
                image: 'assets/img/media/skill/89eed8fb-6465-41cf-a093-e6d7a37f487a.png'
            },
            {
                id: 13,
                category: {
                    id: 2,
                    name: 'Programming Language'
                },
                name: 'Javascript',
                knowledge: 85,
                priority: 4,
                image: 'assets/img/media/skill/4dfe7fd3-fbb9-4f4e-8c15-2ed8e4a27eef.png'
            },
            {
                id: 15,
                category: {
                    id: 3,
                    name: 'Database'
                },
                name: 'Postgresql',
                knowledge: 60,
                priority: 4,
                image: 'assets/img/media/skill/7115bebe-b662-40df-831c-a1acdc3f5ef0.gif'
            },
            {
                id: 16,
                category: {
                    id: 3,
                    name: 'Database'
                },
                name: 'MySql',
                knowledge: 75,
                priority: 4,
                image: 'assets/img/media/skill/cbd3cdd6-f2f9-4cff-b9cf-6d46dbd776e5.jpg'
            },
            {
                id: 3,
                category: {
                    id: 2,
                    name: 'Programming Language'
                },
                name: 'Python',
                knowledge: 90,
                priority: 3,
                image: 'assets/img/media/skill/4b8b13c4-c912-416a-afac-d2a6f143f708.png'
            },
            {
                id: 11,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'Kubernetes',
                knowledge: 65,
                priority: 3,
                image: 'assets/img/media/skill/75cfa565-ffe9-4785-95ed-a5362823654c.png'
            },
            {
                id: 14,
                category: {
                    id: 2,
                    name: 'Programming Language'
                },
                name: 'Java',
                knowledge: 65,
                priority: 3,
                image: 'assets/img/media/skill/397a9cdb-727b-4381-b7fb-86397c444428.webp'
            },
            {
                id: 2,
                category: {
                    id: 1,
                    name: 'Framework'
                },
                name: 'Angular',
                knowledge: 70,
                priority: 2,
                image: 'assets/img/media/skill/685768cc-28f3-480c-9d52-7dea63b1fcbb.png'
            },
            {
                id: 4,
                category: {
                    id: 1,
                    name: 'Framework'
                },
                name: 'Node/Express',
                knowledge: 70,
                priority: 2,
                image: 'assets/img/media/skill/841c453b-3380-4bc1-8873-ac6a28bab3f1.png'
            },
            {
                id: 6,
                category: {
                    id: 1,
                    name: 'Framework'
                },
                name: 'Laravel',
                knowledge: 70,
                priority: 2,
                image: 'assets/img/media/skill/873587eb-6434-4781-a216-a09d6a282af4.png'
            },
            {
                id: 7,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'GCP',
                knowledge: 55,
                priority: 2,
                image: 'assets/img/media/skill/ff5d445c-df82-49c7-94c1-1ccd9ab2cabf.png'
            },
            {
                id: 1,
                category: {
                    id: 1,
                    name: 'Framework'
                },
                name: 'Django',
                knowledge: 85,
                priority: 1,
                image: 'assets/img/media/skill/b8697998-8c1c-4b6c-b803-0faa0471d7f9.jpeg'
            }
        ];
        this.categories = [
            {
                id: 1,
                name: 'Framework'
            },
            {
                id: 2,
                name: 'Programming Language'
            },
            {
                id: 3,
                name: 'Database'
            },
            {
                id: 4,
                name: 'Cloud - Others'
            }
        ];
    }
    ngOnInit() {
        // this.getSkills();
        // this.getCategories();
    }
    getSkills() {
        this.apiService.getSkills().subscribe(data => {
            this.skills = data;
        }, error => { });
    }
    getCategories() {
        this.apiService.getCategories().subscribe(data => {
            this.categories = data;
        }, error => { });
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 9, vars: 1, consts: [["id", "skills", 1, "skills", "section-bg"], [1, "container"], [1, "section-title"], [1, "row", "skills-content"], ["class", "col-lg-6", "data-aos", "fade-up", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", 1, "col-lg-6"], ["ngFor", "", 3, "ngForOf"], ["class", "progress", 4, "ngIf"], [1, "progress"], [1, "skill"], [1, ""], [3, "progress", "color"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I acquired a lot of skills during my internships , which made my polyvalent as a Software engineer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SkillsComponent_div_8_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], angular_progress_bar__WEBPACK_IMPORTED_MODULE_3__["ProgressBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'https://portfolio-backend-moez.herokuapp.com/api/'
    // baseUrl: 'http://localhost:8000/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F7NT":
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function EducationComponent_div_2_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const educ_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, educ_r1 == null ? null : educ_r1.end_date, "yyyy/MM/dd"));
} }
function EducationComponent_div_2_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const educ_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educ_r1 == null ? null : educ_r1.end_date);
} }
function EducationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EducationComponent_div_2_span_11_Template, 3, 4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EducationComponent_div_2_span_12_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const educ_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", educ_r1 == null ? null : educ_r1.speciality, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", educ_r1 == null ? null : educ_r1.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, educ_r1 == null ? null : educ_r1.start_date, "yyyy/MM/dd"), " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (educ_r1 == null ? null : educ_r1.end_date) != "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (educ_r1 == null ? null : educ_r1.end_date) === "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", educ_r1 == null ? null : educ_r1.address, " ");
} }
class EducationComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.education = [
            {
                id: 1,
                start_date: '2017-09-01',
                end_date: '2022-06-01',
                description: 'INSAT',
                speciality: 'Engineer in Computer Networks and Telecommunications',
                address: 'Urban Center, Tunisia'
            },
            {
                id: 2,
                start_date: '2016-09-15',
                end_date: '2017-06-01',
                description: 'High School Ibn Abi Dhief',
                speciality: 'Baccalaureate « Experimental Science » with Honors',
                address: 'Manouba, Tunisia'
            }
        ];
    }
    ngOnInit() {
        // this.getEducation();
    }
    getEducation() {
        this.apiService.getEducation().subscribe(data => {
            this.education = data;
        }, error => { });
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 3, vars: 1, consts: [[1, "resume-title"], ["class", "resume-item pb-0", 4, "ngFor", "ngForOf"], [1, "resume-item", "pb-0"], [1, "fa", "fa-graduation-cap"], [1, "m-2"], [1, "fa", "fa-calendar"], [4, "ngIf"], [1, "fa", "fa-map-marker"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EducationComponent_div_2_Template, 18, 9, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.education);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education',
                templateUrl: './education.component.html',
                styleUrls: ['./education.component.scss']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "G2Gn":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class ContactComponent {
    constructor(apiService) {
        this.apiService = apiService;
    }
    ngOnInit() {
        this.getAbout();
    }
    getAbout() {
        this.apiService.getAbout().subscribe(data => {
            this.about = data[0];
        });
    }
    postContact(form) {
        if (form.valid) {
            this.apiService.postContact(form.value).subscribe(data => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Message sent successfully',
                    text: 'Thank you for contacting me',
                    icon: 'success',
                    confirmButtonText: 'You message has been sent',
                });
            }, error => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Your form is not quite correct',
                    text: 'You will not be able to send message !',
                    icon: 'warning',
                    confirmButtonText: 'Try Again',
                });
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Your form is not quite correct',
                text: 'You will not be able to send message !',
                icon: 'warning',
                confirmButtonText: 'Try Again',
            });
        }
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 58, vars: 3, consts: [["id", "contact", 1, "contact"], [1, "container"], [1, "section-title"], ["data-aos", "fade-in", 1, "row"], [1, "col-lg-5", "d-flex", "align-items-stretch"], [1, "info"], [1, "address"], [1, "bi", "bi-geo-alt"], [1, "email"], [1, "bi", "bi-envelope"], [1, "phone"], [1, "bi", "bi-phone"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d204528.2082550114!2d10.0596678!3d36.7764864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sfr!2stn!4v1624740591114!5m2!1sfr!2stn", "width", "100%", "height", "290px", "allowfullscreen", "", "loading", "lazy", 2, "border", "0"], [1, "col-lg-7", "mt-5", "mt-lg-0", "d-flex", "align-items-stretch"], [1, "php-email-form", 3, "ngSubmit"], ["contactForm", "ngForm"], [1, "row"], [1, "form-group", "col-md-6"], ["for", "name"], ["type", "text", "name", "name", "ngModel", "", "id", "name", "required", "", 1, "form-control"], ["type", "email", "ngModel", "", "name", "email", "id", "email", "required", "", 1, "form-control"], [1, "form-group"], ["type", "text", "ngModel", "", "name", "subject", "id", "subject", "required", "", 1, "form-control"], ["ngModel", "", "name", "message", "rows", "10", "required", "", 1, "form-control"], [1, "my-3"], [1, "loading"], [1, "error-message"], [1, "sent-message"], [1, "text-center"], ["type", "submit"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Feel free to contact me.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Call:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "iframe", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return ctx.postContact(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Your Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Your message has been sent. Thank you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.about == null ? null : ctx.about.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.about == null ? null : ctx.about.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.about == null ? null : ctx.about.phone);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ApiService {
    constructor(http) {
        this.http = http;
    }
    getAbout() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'about');
    }
    getExperiences() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'experiences');
    }
    getAwards() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'awards');
    }
    getCategories() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'categories');
    }
    getClubs() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'clubs');
    }
    postContact(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'contact', data);
    }
    getEducation() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'education');
    }
    getProjects() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'projects');
    }
    getSkills(filter = '') {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + `skills?category__name=${filter}`);
    }
    getSocial() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'social');
    }
    getTestimonials() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'testimonials');
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "HL2q":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 56, vars: 0, consts: [["id", "services", 1, "services"], [1, "container"], [1, "section-title"], [1, "row"], ["data-aos", "fade-up", 1, "col-lg-4", "col-md-6", "icon-box"], [1, "icon"], [1, "bi", "bi-briefcase"], [1, "title"], ["href", ""], [1, "description"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-lg-4", "col-md-6", "icon-box"], [1, "bi", "bi-card-checklist"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-4", "col-md-6", "icon-box"], [1, "bi", "bi-bar-chart"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4", "col-md-6", "icon-box"], [1, "bi", "bi-binoculars"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "col-lg-4", "col-md-6", "icon-box"], [1, "bi", "bi-brightness-high"], ["data-aos", "fade-up", "data-aos-delay", "500", 1, "col-lg-4", "col-md-6", "icon-box"], [1, "bi", "bi-calendar4-week"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Dolor Sitema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sed ut perspiciatis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Magni Dolores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Nemo Enim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Eiusmod Tempor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "N/AX":
/*!*****************************************************!*\
  !*** ./src/app/components/clubs/clubs.component.ts ***!
  \*****************************************************/
/*! exports provided: ClubsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubsComponent", function() { return ClubsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ClubsComponent_div_8_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const club_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, club_r1 == null ? null : club_r1.end_date, "yyyy/MM/dd"));
} }
function ClubsComponent_div_8_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const club_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](club_r1 == null ? null : club_r1.end_date);
} }
function ClubsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClubsComponent_div_8_span_9_Template, 3, 4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClubsComponent_div_8_span_10_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const club_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", club_r1 == null ? null : club_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](club_r1 == null ? null : club_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, club_r1 == null ? null : club_r1.start_date, "yyyy/MM/dd"), " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (club_r1 == null ? null : club_r1.end_date) != "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (club_r1 == null ? null : club_r1.end_date) === "Present");
} }
class ClubsComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.clubs = [
            {
                id: 4,
                name: 'Tounes Lina',
                start_date: '2020-10-01',
                end_date: 'Present',
                description: '',
                priority: 5,
                logo: '/assets/img/media/club/e1e73ad7-d2be-432f-8101-f828f9b7323f.jpg'
            },
            {
                id: 2,
                name: 'Junior Entreprise INSAT',
                start_date: '2020-09-01',
                end_date: '2021-06-01',
                description: '',
                priority: 3,
                logo: '/assets/img/media/club/9cbdb0a5-adfd-4c4d-b4ff-112ce4b50739.png'
            },
            {
                id: 1,
                name: 'Data-Colab',
                start_date: '2019-09-01',
                end_date: '2020-06-01',
                description: '',
                priority: 2,
                logo: '/assets/img/media/club/7c94efec-1c90-423a-9c64-684f28e87cb9.png'
            },
            {
                id: 3,
                name: 'Securinets',
                start_date: '2018-06-01',
                end_date: '2020-06-01',
                description: '',
                priority: 4,
                logo: '/assets/img/media/club/7bed1b65-c0bc-4b8e-b4a0-8a7545ccdc38.png'
            }
        ];
    }
    ngOnInit() {
        // this.getClubs();
    }
    getClubs() {
        this.apiService.getClubs().subscribe(data => {
            this.clubs = data;
        });
    }
}
ClubsComponent.ɵfac = function ClubsComponent_Factory(t) { return new (t || ClubsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
ClubsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClubsComponent, selectors: [["app-clubs"]], decls: 9, vars: 1, consts: [["id", "clubs", 1, "facts"], [1, "container"], [1, "section-title"], [1, "row", "no-gutters"], ["class", "col-lg-6 col-md-6 d-md-flex align-items-md-stretch", "data-aos", "fade-up", "data-aos-delay", "100", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-lg-6", "col-md-6", "d-md-flex", "align-items-md-stretch"], [1, "count-box"], [1, "img-fluid", 2, "height", "150px", "display", "block", "margin-left", "auto", "margin-right", "auto", "width", "50%", 3, "src"], [1, "text-center"], [4, "ngIf"]], template: function ClubsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Clubs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "During my journey i joined and worked with many clubs & associations to improve myself both socially and technically.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClubsComponent_div_8_Template, 12, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clubs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2x1YnMvY2x1YnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClubsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clubs',
                templateUrl: './clubs.component.html',
                styleUrls: ['./clubs.component.scss']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "NIbm":
/*!*****************************************************************!*\
  !*** ./src/app/components/skills-card/skills-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: SkillsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsCardComponent", function() { return SkillsCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SkillsCardComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsCardComponent_li_11_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const category_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.getSelectedSkillsByCategory(category_r2.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("filter", ".filter-", category_r2.name.split(" ").join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.selectedCategory == category_r2.name ? "filter-active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r2.name, " ");
} }
function SkillsCardComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col-lg-3 col-md-4 portfolio-item filter-", skill_r5.category.name.split(" ").join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", skill_r5 == null ? null : skill_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", skill_r5.name);
} }
class SkillsCardComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.selectedCategory = '';
        this.allSkills = [
            {
                id: 10,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'Docker',
                knowledge: 80,
                priority: 8,
                image: '/assets/img/media/skill/79017b80-29fd-4485-8c1f-76f6a027815a.png'
            },
            {
                id: 8,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'AWS',
                knowledge: 70,
                priority: 6,
                image: '/assets/img/media/skill/c1bfde15-ea97-494b-a7e9-a92fe3cdafdf.png'
            },
            {
                id: 9,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'Linux',
                knowledge: 75,
                priority: 5,
                image: '/assets/img/media/skill/f2d9e3c6-2d55-4e1b-ad90-3064b3a1a860.jpg'
            },
            {
                id: 12,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'Git',
                knowledge: 85,
                priority: 5,
                image: '/assets/img/media/skill/6ea8d409-d8b8-4bb5-90bf-a7b7b5662667.png'
            },
            {
                id: 5,
                category: {
                    id: 3,
                    name: 'Database'
                },
                name: 'MongoDB',
                knowledge: 65,
                priority: 4,
                image: '/assets/img/media/skill/89eed8fb-6465-41cf-a093-e6d7a37f487a.png'
            },
            {
                id: 13,
                category: {
                    id: 2,
                    name: 'Programming Language'
                },
                name: 'Javascript',
                knowledge: 85,
                priority: 4,
                image: '/assets/img/media/skill/4dfe7fd3-fbb9-4f4e-8c15-2ed8e4a27eef.png'
            },
            {
                id: 15,
                category: {
                    id: 3,
                    name: 'Database'
                },
                name: 'Postgresql',
                knowledge: 60,
                priority: 4,
                image: '/assets/img/media/skill/7115bebe-b662-40df-831c-a1acdc3f5ef0.gif'
            },
            {
                id: 16,
                category: {
                    id: 3,
                    name: 'Database'
                },
                name: 'MySql',
                knowledge: 75,
                priority: 4,
                image: '/assets/img/media/skill/cbd3cdd6-f2f9-4cff-b9cf-6d46dbd776e5.jpg'
            },
            {
                id: 3,
                category: {
                    id: 2,
                    name: 'Programming Language'
                },
                name: 'Python',
                knowledge: 90,
                priority: 3,
                image: '/assets/img/media/skill/4b8b13c4-c912-416a-afac-d2a6f143f708.png'
            },
            {
                id: 11,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'Kubernetes',
                knowledge: 65,
                priority: 3,
                image: '/assets/img/media/skill/75cfa565-ffe9-4785-95ed-a5362823654c.png'
            },
            {
                id: 14,
                category: {
                    id: 2,
                    name: 'Programming Language'
                },
                name: 'Java',
                knowledge: 65,
                priority: 3,
                image: '/assets/img/media/skill/397a9cdb-727b-4381-b7fb-86397c444428.webp'
            },
            {
                id: 2,
                category: {
                    id: 1,
                    name: 'Framework'
                },
                name: 'Angular',
                knowledge: 70,
                priority: 2,
                image: '/assets/img/media/skill/685768cc-28f3-480c-9d52-7dea63b1fcbb.png'
            },
            {
                id: 4,
                category: {
                    id: 1,
                    name: 'Framework'
                },
                name: 'Node/Express',
                knowledge: 70,
                priority: 2,
                image: '/assets/img/media/skill/841c453b-3380-4bc1-8873-ac6a28bab3f1.png'
            },
            {
                id: 6,
                category: {
                    id: 1,
                    name: 'Framework'
                },
                name: 'Laravel',
                knowledge: 70,
                priority: 2,
                image: '/assets/img/media/skill/873587eb-6434-4781-a216-a09d6a282af4.png'
            },
            {
                id: 7,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'GCP',
                knowledge: 55,
                priority: 2,
                image: '/assets/img/media/skill/ff5d445c-df82-49c7-94c1-1ccd9ab2cabf.png'
            },
            {
                id: 1,
                category: {
                    id: 1,
                    name: 'Framework'
                },
                name: 'Django',
                knowledge: 85,
                priority: 1,
                image: '/assets/img/media/skill/b8697998-8c1c-4b6c-b803-0faa0471d7f9.jpeg'
            }
        ];
        this.skills = [
            {
                id: 10,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'Docker',
                knowledge: 80,
                priority: 8,
                image: '/assets/img/media/skill/79017b80-29fd-4485-8c1f-76f6a027815a.png'
            },
            {
                id: 8,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'AWS',
                knowledge: 70,
                priority: 6,
                image: '/assets/img/media/skill/c1bfde15-ea97-494b-a7e9-a92fe3cdafdf.png'
            },
            {
                id: 9,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'Linux',
                knowledge: 75,
                priority: 5,
                image: '/assets/img/media/skill/f2d9e3c6-2d55-4e1b-ad90-3064b3a1a860.jpg'
            },
            {
                id: 12,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'Git',
                knowledge: 85,
                priority: 5,
                image: '/assets/img/media/skill/6ea8d409-d8b8-4bb5-90bf-a7b7b5662667.png'
            },
            {
                id: 5,
                category: {
                    id: 3,
                    name: 'Database'
                },
                name: 'MongoDB',
                knowledge: 65,
                priority: 4,
                image: '/assets/img/media/skill/89eed8fb-6465-41cf-a093-e6d7a37f487a.png'
            },
            {
                id: 13,
                category: {
                    id: 2,
                    name: 'Programming Language'
                },
                name: 'Javascript',
                knowledge: 85,
                priority: 4,
                image: '/assets/img/media/skill/4dfe7fd3-fbb9-4f4e-8c15-2ed8e4a27eef.png'
            },
            {
                id: 15,
                category: {
                    id: 3,
                    name: 'Database'
                },
                name: 'Postgresql',
                knowledge: 60,
                priority: 4,
                image: '/assets/img/media/skill/7115bebe-b662-40df-831c-a1acdc3f5ef0.gif'
            },
            {
                id: 16,
                category: {
                    id: 3,
                    name: 'Database'
                },
                name: 'MySql',
                knowledge: 75,
                priority: 4,
                image: '/assets/img/media/skill/cbd3cdd6-f2f9-4cff-b9cf-6d46dbd776e5.jpg'
            },
            {
                id: 3,
                category: {
                    id: 2,
                    name: 'Programming Language'
                },
                name: 'Python',
                knowledge: 90,
                priority: 3,
                image: '/assets/img/media/skill/4b8b13c4-c912-416a-afac-d2a6f143f708.png'
            },
            {
                id: 11,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'Kubernetes',
                knowledge: 65,
                priority: 3,
                image: '/assets/img/media/skill/75cfa565-ffe9-4785-95ed-a5362823654c.png'
            },
            {
                id: 14,
                category: {
                    id: 2,
                    name: 'Programming Language'
                },
                name: 'Java',
                knowledge: 65,
                priority: 3,
                image: '/assets/img/media/skill/397a9cdb-727b-4381-b7fb-86397c444428.webp'
            },
            {
                id: 2,
                category: {
                    id: 1,
                    name: 'Framework'
                },
                name: 'Angular',
                knowledge: 70,
                priority: 2,
                image: '/assets/img/media/skill/685768cc-28f3-480c-9d52-7dea63b1fcbb.png'
            },
            {
                id: 4,
                category: {
                    id: 1,
                    name: 'Framework'
                },
                name: 'Node/Express',
                knowledge: 70,
                priority: 2,
                image: '/assets/img/media/skill/841c453b-3380-4bc1-8873-ac6a28bab3f1.png'
            },
            {
                id: 6,
                category: {
                    id: 1,
                    name: 'Framework'
                },
                name: 'Laravel',
                knowledge: 70,
                priority: 2,
                image: '/assets/img/media/skill/873587eb-6434-4781-a216-a09d6a282af4.png'
            },
            {
                id: 7,
                category: {
                    id: 4,
                    name: 'Cloud - Others'
                },
                name: 'GCP',
                knowledge: 55,
                priority: 2,
                image: '/assets/img/media/skill/ff5d445c-df82-49c7-94c1-1ccd9ab2cabf.png'
            },
            {
                id: 1,
                category: {
                    id: 1,
                    name: 'Framework'
                },
                name: 'Django',
                knowledge: 85,
                priority: 1,
                image: '/assets/img/media/skill/b8697998-8c1c-4b6c-b803-0faa0471d7f9.jpeg'
            }
        ];
        this.categories = [
            {
                id: 1,
                name: 'Framework'
            },
            {
                id: 2,
                name: 'Programming Language'
            },
            {
                id: 3,
                name: 'Database'
            },
            {
                id: 4,
                name: 'Cloud - Others'
            }
        ];
    }
    ngOnInit() {
        // this.getSkills();
        // this.getCategories();
    }
    getSelectedSkillsByCategory(category) {
        this.selectedCategory = category;
        if (this.selectedCategory === '') {
            this.skills = this.allSkills;
        }
        else {
            this.skills = this.allSkills.filter(value => value.category.name === category);
        }
        // this.getSkills();
    }
    getSkills() {
        this.apiService.getSkills(this.selectedCategory).subscribe(data => {
            this.skills = data;
        }, error => { });
    }
    getCategories() {
        this.apiService.getCategories().subscribe(data => {
            this.categories = data;
        }, error => { });
    }
}
SkillsCardComponent.ɵfac = function SkillsCardComponent_Factory(t) { return new (t || SkillsCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
SkillsCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsCardComponent, selectors: [["app-skills-card"]], decls: 14, vars: 3, consts: [["id", "portfolio", 1, "portfolio", "section-bg"], [1, "container"], [1, "section-title"], ["data-aos", "fade-up", 1, "row"], [1, "col-lg-12", "d-flex", "justify-content-center"], ["id", "portfolio-flters"], ["data-filter", "*", 1, "filter-active", 3, "ngClass", "click"], [3, "filter", "ngClass", "click", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "row", "portfolio-container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "filter", "ngClass", "click"], [1, "portfolio-wrap"], ["alt", "", 1, "img-fluid", 2, "height", "150px", 3, "src"], [1, "portfolio-links"], ["data-gallery", "portfolioGallery", 1, "portfolio-lightbox", 3, "title"], [1, "bx", "bx-plus"], ["title", "More Details"], [1, "bx", "bx-link"]], template: function SkillsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsCardComponent_Template_li_click_9_listener() { return ctx.getSelectedSkillsByCategory(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SkillsCardComponent_li_11_Template, 2, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SkillsCardComponent_div_13_Template, 8, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedCategory == "" ? "filter-active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzLWNhcmQvc2tpbGxzLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills-card',
                templateUrl: './skills-card.component.html',
                styleUrls: ['./skills-card.component.scss']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "QrEi":
/*!*******************************************************!*\
  !*** ./src/app/components/awards/awards.component.ts ***!
  \*******************************************************/
/*! exports provided: AwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsComponent", function() { return AwardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AwardsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AwardsComponent.ɵfac = function AwardsComponent_Factory(t) { return new (t || AwardsComponent)(); };
AwardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AwardsComponent, selectors: [["app-awards"]], decls: 2, vars: 0, template: function AwardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "awards works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXdhcmRzL2F3YXJkcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AwardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-awards',
                templateUrl: './awards.component.html',
                styleUrls: ['./awards.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typed.js */ "ELNm");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "TaHA");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "+7qI");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "wn8t");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_clubs_clubs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/clubs/clubs.component */ "N/AX");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/skills/skills.component */ "A9VX");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/resume/resume.component */ "h+Is");
/* harmony import */ var _components_skills_card_skills_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/skills-card/skills-card.component */ "NIbm");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/projects/projects.component */ "6bE9");
/* harmony import */ var _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/testimonials/testimonials.component */ "hFjP");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");















class AppComponent {
    constructor() {
        this.title = 'Moez Saidi';
    }
    ngOnInit() {
        const intro = introJs();
        if (localStorage.getItem('first-time') === null) {
            intro.setOptions({
                showProgress: true,
                position: 'left',
                showBullets: false,
                steps: [{
                        title: 'Welcome',
                        intro: 'First time you visit my portfolio , Hi 👋 !'
                    },
                    {
                        title: 'Who am i ?',
                        element: document.querySelector('#home-step'),
                        intro: 'I am currently a student , passionate about cloud .'
                    },
                    {
                        title: 'About Me!',
                        element: document.querySelector('#about-step'),
                        intro: 'Here you can find some information about me .',
                    },
                    {
                        title: 'My Skills',
                        element: document.querySelector('#skills-step'),
                        intro: 'I worked so hard to obtain such skills and aiming to get even more .',
                    },
                    {
                        title: 'My Professional Experiences',
                        element: document.querySelector('#experience-step'),
                        intro: 'I realized that working while studying is very interesting to apply what i learn in really world project .',
                    },
                    {
                        title: 'My Education',
                        element: document.querySelector('#education-step'),
                        intro: 'I just studied in one university after my Bachelor degree .',
                    },
                    {
                        title: 'My Projects',
                        element: document.querySelector('#projects-step'),
                        intro: 'Here is some of my project , just for fun .',
                    },
                    {
                        title: 'Testimonials',
                        element: document.querySelector('#testimonials-step'),
                        intro: 'Those are my precious employers that i have been working with , they made me who i am right now .',
                    },
                    {
                        title: 'Feel free to contact me ! ',
                        element: document.querySelector('#contact-step'),
                        intro: 'And this is our final step!',
                    }
                ]
            }).start();
            localStorage.setItem('first-time', 'false');
        }
        // Initialize steps
        // Start tutorial
        /**
         * Counter
         */
        /**
         * Easy selector helper function
         */
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return document.querySelectorAll(el);
            }
            else {
                return document.querySelector(el);
            }
        };
        /**
         * Easy event listener function
         */
        const on = (type, el, listener, all = false) => {
            const selectEl = select(el, all);
            if (selectEl) {
                if (all) {
                    selectEl.forEach(e => e.addEventListener(type, listener));
                }
                else {
                    selectEl.addEventListener(type, listener);
                }
            }
        };
        /**
         * Easy on scroll event listener
         */
        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener);
        };
        /**
         * Navbar links active state on scroll
         */
        const navbarlinks = select('#navbar .scrollto', true);
        const navbarlinksActive = () => {
            const position = window.scrollY + 200;
            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash) {
                    return;
                }
                const section = select(navbarlink.hash);
                if (!section) {
                    return;
                }
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbarlink.classList.add('active');
                }
                else {
                    navbarlink.classList.remove('active');
                }
            });
        };
        window.addEventListener('load', navbarlinksActive);
        onscroll(document, navbarlinksActive);
        /**
         * Scrolls to an element with header offset
         */
        const scrollto = (el) => {
            const elementPos = select(el).offsetTop;
            window.scrollTo({
                top: elementPos,
                behavior: 'smooth'
            });
        };
        /**
         * Back to top button
         */
        const backtotop = select('.back-to-top');
        if (backtotop) {
            const toggleBacktotop = () => {
                if (window.scrollY > 100) {
                    backtotop.classList.add('active');
                }
                else {
                    backtotop.classList.remove('active');
                }
            };
            window.addEventListener('load', toggleBacktotop);
            onscroll(document, toggleBacktotop);
        }
        /**
         * Mobile nav toggle
         */
        on('click', '.mobile-nav-toggle', function (e) {
            select('body').classList.toggle('mobile-nav-active');
            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
        });
        /**
         * Scrool with ofset on links with a class name .scrollto
         */
        on('click', '.scrollto', function (e) {
            if (select(this.hash)) {
                e.preventDefault();
                const body = select('body');
                if (body.classList.contains('mobile-nav-active')) {
                    body.classList.remove('mobile-nav-active');
                    const navbarToggle = select('.mobile-nav-toggle');
                    navbarToggle.classList.toggle('bi-list');
                    navbarToggle.classList.toggle('bi-x');
                }
                scrollto(this.hash);
            }
        }, true);
        /**
         * Scroll with ofset on page load with hash links in the url
         */
        window.addEventListener('load', () => {
            if (window.location.hash) {
                if (select(window.location.hash)) {
                    scrollto(window.location.hash);
                }
            }
        });
        /**
         * Hero type effect
         */
        const typed = select('.typed');
        if (typed) {
            let typedStrings = typed.getAttribute('data-typed-items');
            typedStrings = typedStrings.split(',');
            new typed_js__WEBPACK_IMPORTED_MODULE_2___default.a('.typed', {
                strings: typedStrings,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000
            });
        }
        /**
         * Skills animation
         */
        const skilsContent = select('.skills-content');
        if (skilsContent) {
            new Waypoint({
                element: skilsContent,
                offset: '80%',
                handler(direction) {
                    const progress = select('.progress .progress-bar', true);
                    progress.forEach((el) => {
                        el.style.width = el.getAttribute('aria-valuenow') + '%';
                    });
                }
            });
        }
        /**
         * Porfolio isotope and filter
         */
        /**
         * Initiate portfolio lightbox
         */
        const portfolioLightbox = GLightbox({
            selector: '.portfolio-lightbox'
        });
        /**
         * Animation on scroll
         */
        window.addEventListener('load', () => {
            aos__WEBPACK_IMPORTED_MODULE_1__["init"]({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
        });
        new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.portfolio-details-slider', {
            speed: 400,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        });
        /**
         * Testimonials slider
         */
        new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.testimonials-slider', {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 0, consts: [["id", "main"], ["id", "skills-step"], ["id", "projects-step"], ["id", "testimonials-step"], ["id", "contact-step"], ["id", "footer"], [1, "container"], [1, "copyright"], ["href", "#", 1, "back-to-top", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-arrow-up-short"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-landing-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-clubs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-skills", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-skills-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-projects", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-testimonials", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-contact", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "footer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A9 Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Moez Saidi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"], _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_clubs_clubs_component__WEBPACK_IMPORTED_MODULE_7__["ClubsComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"], _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"], _components_skills_card_skills_card_component__WEBPACK_IMPORTED_MODULE_10__["SkillsCardComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"], _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialsComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-useful-swiper */ "wSAv");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/skills/skills.component */ "A9VX");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/experience/experience.component */ "5gzz");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/education/education.component */ "F7NT");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/projects/projects.component */ "6bE9");
/* harmony import */ var _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/testimonials/testimonials.component */ "hFjP");
/* harmony import */ var _components_social_social_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/social/social.component */ "nJq9");
/* harmony import */ var _components_clubs_clubs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/clubs/clubs.component */ "N/AX");
/* harmony import */ var _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/awards/awards.component */ "QrEi");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "+7qI");
/* harmony import */ var _components_facts_facts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/facts/facts.component */ "tl/9");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/resume/resume.component */ "h+Is");
/* harmony import */ var _components_shared_custom_container_custom_container_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/shared/custom-container/custom-container.component */ "2iGG");
/* harmony import */ var _components_skills_card_skills_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/skills-card/skills-card.component */ "NIbm");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/services/services.component */ "HL2q");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "wn8t");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-progress-bar */ "nUjy");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
            ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_3__["NgxUsefulSwiperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            angular_progress_bar__WEBPACK_IMPORTED_MODULE_23__["ProgressBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
        _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
        _components_education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"],
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
        _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_10__["TestimonialsComponent"],
        _components_social_social_component__WEBPACK_IMPORTED_MODULE_11__["SocialComponent"],
        _components_clubs_clubs_component__WEBPACK_IMPORTED_MODULE_12__["ClubsComponent"],
        _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_13__["AwardsComponent"],
        _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_14__["SidenavComponent"],
        _components_facts_facts_component__WEBPACK_IMPORTED_MODULE_15__["FactsComponent"],
        _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_16__["ResumeComponent"],
        _components_shared_custom_container_custom_container_component__WEBPACK_IMPORTED_MODULE_17__["CustomContainerComponent"],
        _components_skills_card_skills_card_component__WEBPACK_IMPORTED_MODULE_18__["SkillsCardComponent"],
        _components_services_services_component__WEBPACK_IMPORTED_MODULE_19__["ServicesComponent"],
        _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_20__["LandingPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
        ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_3__["NgxUsefulSwiperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
        angular_progress_bar__WEBPACK_IMPORTED_MODULE_23__["ProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                    _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
                    _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
                    _components_education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"],
                    _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                    _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_10__["TestimonialsComponent"],
                    _components_social_social_component__WEBPACK_IMPORTED_MODULE_11__["SocialComponent"],
                    _components_clubs_clubs_component__WEBPACK_IMPORTED_MODULE_12__["ClubsComponent"],
                    _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_13__["AwardsComponent"],
                    _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_14__["SidenavComponent"],
                    _components_facts_facts_component__WEBPACK_IMPORTED_MODULE_15__["FactsComponent"],
                    _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_16__["ResumeComponent"],
                    _components_shared_custom_container_custom_container_component__WEBPACK_IMPORTED_MODULE_17__["CustomContainerComponent"],
                    _components_skills_card_skills_card_component__WEBPACK_IMPORTED_MODULE_18__["SkillsCardComponent"],
                    _components_services_services_component__WEBPACK_IMPORTED_MODULE_19__["ServicesComponent"],
                    _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_20__["LandingPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                    ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_3__["NgxUsefulSwiperModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                    angular_progress_bar__WEBPACK_IMPORTED_MODULE_23__["ProgressBarModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "h+Is":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../experience/experience.component */ "5gzz");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../education/education.component */ "F7NT");




class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 11, vars: 0, consts: [["id", "resume", 1, "resume"], [1, "container"], [1, "section-title"], [1, "row"], ["data-aos", "fade-up", 1, "col-lg-6"], ["id", "experience-step"], ["id", "education-step"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-experience", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-education", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_experience_experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_2__["EducationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hFjP":
/*!*******************************************************************!*\
  !*** ./src/app/components/testimonials/testimonials.component.ts ***!
  \*******************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");



class TestimonialsComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.configuration = {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            spaceBetween: 30,
            speed: 600,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        };
        this.testimonials = [
            {
                id: 1,
                name: 'Rami Hachicha',
                image: '/assets/img/media/testimonial/efdf845b-ad49-4252-afba-7730f60fb7c1.jpg',
                role: 'President at Tounes Lina',
                quote: ''
            },
            {
                id: 2,
                name: 'Ahmed Jamoussi',
                image: '/assets/img/media/testimonial/875549b0-5408-4832-87f3-47571eac38a4.jpg',
                role: 'CEO at EVENTIZER ( Vayetek )',
                quote: ''
            },
            {
                id: 3,
                name: 'Hajer Trabelsi',
                image: '/assets/img/media/testimonial/6744a7e6-3d57-4c41-97f4-48a2ce94eeae.png',
                role: 'CEO at Voguel Consulting',
                quote: ''
            }
        ];
    }
    ngOnInit() {
        this.getTestimonials();
    }
    getTestimonials() {
        this.apiService.getTestimonials().subscribe(data => {
            this.testimonials = data;
        });
    }
}
TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) { return new (t || TestimonialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
TestimonialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialsComponent, selectors: [["app-testimonials"]], decls: 39, vars: 0, consts: [["id", "testimonials", 1, "testimonials", "section-bg"], [1, "container"], [1, "section-title"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "testimonials-slider", "swiper-container"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["data-aos", "fade-up", 1, "testimonial-item"], [1, "bx", "bxs-quote-alt-left", "quote-icon-left"], [1, "bx", "bxs-quote-alt-right", "quote-icon-right"], ["src", "/assets/img/media/testimonial/efdf845b-ad49-4252-afba-7730f60fb7c1.jpg", "alt", "", 1, "testimonial-img"], ["src", "/assets/img/media/testimonial/875549b0-5408-4832-87f3-47571eac38a4.jpg", "alt", "", 1, "testimonial-img"], ["src", "/assets/img/media/testimonial/6744a7e6-3d57-4c41-97f4-48a2ce94eeae.png", "alt", "", 1, "testimonial-img"], [1, "swiper-pagination"]], template: function TestimonialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Rami Hachicha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "President at Tounes Lina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ahmed Jamoussi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "CEO at EVENTIZER ( Vayetek )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Hajer Trabelsi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "CEO at Voguel Consulting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testimonials',
                templateUrl: './testimonials.component.html',
                styleUrls: ['./testimonials.component.scss']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "nJq9":
/*!*******************************************************!*\
  !*** ./src/app/components/social/social.component.ts ***!
  \*******************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SocialComponent {
    constructor() { }
    ngOnInit() {
    }
}
SocialComponent.ɵfac = function SocialComponent_Factory(t) { return new (t || SocialComponent)(); };
SocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialComponent, selectors: [["app-social"]], decls: 2, vars: 0, template: function SocialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "social works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social',
                templateUrl: './social.component.html',
                styleUrls: ['./social.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tl/9":
/*!*****************************************************!*\
  !*** ./src/app/components/facts/facts.component.ts ***!
  \*****************************************************/
/*! exports provided: FactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactsComponent", function() { return FactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
FactsComponent.ɵfac = function FactsComponent_Factory(t) { return new (t || FactsComponent)(); };
FactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FactsComponent, selectors: [["app-facts"]], decls: 44, vars: 0, consts: [["id", "facts", 1, "facts"], [1, "container"], [1, "section-title"], [1, "row", "no-gutters"], ["data-aos", "fade-up", 1, "col-lg-3", "col-md-6", "d-md-flex", "align-items-md-stretch"], [1, "count-box"], [1, "bi", "bi-emoji-smile"], [1, "counter"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-lg-3", "col-md-6", "d-md-flex", "align-items-md-stretch"], [1, "bi", "bi-journal-richtext"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-3", "col-md-6", "d-md-flex", "align-items-md-stretch"], [1, "bi", "bi-headset"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-3", "col-md-6", "d-md-flex", "align-items-md-stretch"], [1, "bi", "bi-people"]], template: function FactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Facts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Happy Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " consequuntur quae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " adipisci atque cum quia aut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Hours Of Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " aut commodi quaerat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Hard Workers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " rerum asperiores dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmFjdHMvZmFjdHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-facts',
                templateUrl: './facts.component.html',
                styleUrls: ['./facts.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wn8t":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LandingPageComponent {
    constructor() {
        this.rolesList = 'a Software Engineer, a Backend Developer, a Cloud Developer';
    }
    ngOnInit() {
    }
    startTuto() {
        const intro = introJs();
        intro.setOptions({
            showProgress: true,
            position: 'left',
            showBullets: false,
            steps: [{
                    title: 'Welcome',
                    intro: 'First time you visit my portfolio , Hi 👋 !'
                },
                {
                    title: 'Who am i ?',
                    element: document.querySelector('#home-step'),
                    intro: 'I am currently a student , passionate about cloud .'
                },
                {
                    title: 'About Me!',
                    element: document.querySelector('#about-step'),
                    intro: 'Here you can find some information about me .',
                },
                {
                    title: 'My Skills',
                    element: document.querySelector('#skills-step'),
                    intro: 'I worked so hard to obtain such skills and aiming to get even more .',
                },
                {
                    title: 'My Professional Experiences',
                    element: document.querySelector('#experience-step'),
                    intro: 'I realized that working while studying is very interesting to apply what i learn in really world project .',
                },
                {
                    title: 'My Education',
                    element: document.querySelector('#education-step'),
                    intro: 'I just studied in one university after my Bachelor degree .',
                },
                {
                    title: 'My Projects',
                    element: document.querySelector('#projects-step'),
                    intro: 'Here is some of my project , just for fun .',
                },
                {
                    title: 'Testimonials',
                    element: document.querySelector('#testimonials-step'),
                    intro: 'Those are my precious employers that i have been working with , they made me who i am right now .',
                },
                {
                    title: 'Feel free to contact me ! ',
                    element: document.querySelector('#contact-step'),
                    intro: 'And this is our final step!',
                }
            ]
        }).start();
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 9, vars: 0, consts: [["id", "hero", 1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], ["data-aos", "fade-in", "id", "home-step", 1, "hero-container"], ["data-typed-items", "a Software Engineer, a Backend Developer, a Cloud Developer", 1, "typed"], ["src", "/assets/play.gif", "alt", "play-intro", 2, "border-radius", "20%", "max-width", "250px", "cursor", "pointer", 3, "click"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Moez Saidi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "I'm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_img_click_8_listener() { return ctx.startTuto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map