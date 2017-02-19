define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello World 2!';
        }
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    var settings = {
        debug: true,
        testing: true
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = settings;
});

define('infrastructure/event-emitter',["require", "exports", "tslib", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    var EventEmitter = (function () {
        function EventEmitter(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        EventEmitter.prototype.publish = function (eventType, data) {
            this.eventAggregator.publish(eventType, data);
        };
        EventEmitter.prototype.subscribe = function (eventType, handler) {
            return this.eventAggregator.subscribe(eventType, handler);
        };
        return EventEmitter;
    }());
    EventEmitter = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], EventEmitter);
    exports.EventEmitter = EventEmitter;
});

define('infrastructure/error-interceptor',["require", "exports", "tslib", "aurelia-framework", "./event-emitter"], function (require, exports, tslib_1, aurelia_framework_1, event_emitter_1) {
    "use strict";
    var ErrorInterceptor = (function () {
        function ErrorInterceptor(eventEmitter) {
            this.eventEmitter = eventEmitter;
        }
        ErrorInterceptor.prototype.response = function (response) {
            if (response.status >= 500) {
                var message = "Received " + response.status + " " + response.url;
                this.eventEmitter.publish("ServerError", { message: message });
            }
            if (response.status === 401) {
                window.location.href = "/";
            }
            if (response.status === 403) {
            }
            return response;
        };
        return ErrorInterceptor;
    }());
    ErrorInterceptor = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [event_emitter_1.EventEmitter])
    ], ErrorInterceptor);
    exports.ErrorInterceptor = ErrorInterceptor;
});

define('main',["require", "exports", "aurelia-fetch-client", "./environment", "./infrastructure/error-interceptor"], function (require, exports, aurelia_fetch_client_1, environment_1, error_interceptor_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        var httpClient = aurelia.container.get(aurelia_fetch_client_1.HttpClient);
        var errorInterceptor = aurelia.container.get(error_interceptor_1.ErrorInterceptor);
        httpClient.configure(function (config) {
            config
                .useStandardConfiguration()
                .withBaseUrl("api/")
                .withInterceptor(errorInterceptor);
        });
        aurelia.use
            .standardConfiguration()
            .feature("resources");
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin("aurelia-testing");
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
        config.globalResources([]);
    }
    exports.configure = configure;
});

define('services/article-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var ArticleService = (function () {
        function ArticleService(http) {
            this.http = http;
        }
        ArticleService.prototype.getArticle = function (id) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("article/" + id)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ArticleService.prototype.deleteArticle = function (id) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("article/" + id, { method: 'delete' })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ArticleService.prototype.getArticleByUrl = function (categotyId, articleUrl) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("article/url/" + categotyId + "/" + articleUrl)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ArticleService.prototype.getSection = function (url) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("article/section/" + url)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ArticleService.prototype.getCategories = function (sectionId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("article/categories/" + sectionId)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ArticleService.prototype.getCategory = function (categoryUrl) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("article/category/" + categoryUrl)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ArticleService.prototype.getFeatured = function (categoryId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("article/" + categoryId + "/featured")];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return ArticleService;
    }());
    ArticleService = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], ArticleService);
    exports.ArticleService = ArticleService;
    var ArticleInfo = (function () {
        function ArticleInfo() {
        }
        return ArticleInfo;
    }());
    exports.ArticleInfo = ArticleInfo;
    var ArticleSectionInfo = (function () {
        function ArticleSectionInfo() {
        }
        return ArticleSectionInfo;
    }());
    exports.ArticleSectionInfo = ArticleSectionInfo;
    var ArticleCategory = (function () {
        function ArticleCategory() {
        }
        return ArticleCategory;
    }());
    exports.ArticleCategory = ArticleCategory;
    var ArticleCategoryInfo = (function () {
        function ArticleCategoryInfo() {
        }
        return ArticleCategoryInfo;
    }());
    exports.ArticleCategoryInfo = ArticleCategoryInfo;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./app.css\"></require><h1 class=\"main-header\">${message}</h1></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url(\"/fonts/glyphicons-halflings-regular.eot\");\n  src: url(\"/fonts/glyphicons-halflings-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/glyphicons-halflings-regular.woff\") format(\"woff\"), url(\"/fonts/glyphicons-halflings-regular.ttf\") format(\"truetype\"), url(\"/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular\") format(\"svg\"); }\n"; });
//# sourceMappingURL=app-bundle.js.map