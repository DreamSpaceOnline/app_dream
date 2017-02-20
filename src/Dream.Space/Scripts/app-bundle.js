define('services/account/account-models',["require", "exports"], function (require, exports) {
    "use strict";
    var UserInfo = (function () {
        function UserInfo() {
        }
        return UserInfo;
    }());
    exports.UserInfo = UserInfo;
    var LoginResponse = (function () {
        function LoginResponse() {
        }
        return LoginResponse;
    }());
    exports.LoginResponse = LoginResponse;
    var UserUpdateResponse = (function () {
        function UserUpdateResponse() {
        }
        return UserUpdateResponse;
    }());
    exports.UserUpdateResponse = UserUpdateResponse;
});

define('services/account/account-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var AccountService = (function () {
        function AccountService(http) {
            this.http = http;
        }
        AccountService.prototype.initialize = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response, _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("account/user")];
                        case 1:
                            response = _b.sent();
                            _a = this;
                            return [4 /*yield*/, response.json()];
                        case 2:
                            _a.currentUser = _b.sent();
                            return [2 /*return*/, this.currentUser];
                    }
                });
            });
        };
        AccountService.prototype.login = function (username, password) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var loginRequest, response, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            loginRequest = {
                                Email: username,
                                Password: password,
                                RememberMe: true
                            };
                            return [4 /*yield*/, this.http.fetch("account/login", { method: 'post', body: aurelia_fetch_client_1.json(loginRequest) })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            result = _a.sent();
                            this.currentUser = result.user;
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        AccountService.prototype.logout = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("account/logout", {
                                method: 'post'
                            })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        AccountService.prototype.update = function (user) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var updateRequest, response, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            updateRequest = {
                                Username: user.username,
                                FirstName: user.firstName
                            };
                            return [4 /*yield*/, this.http.fetch("account/update", {
                                    method: "put",
                                    body: aurelia_fetch_client_1.json(updateRequest)
                                })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            result = _a.sent();
                            this.currentUser = result.user;
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        return AccountService;
    }());
    AccountService = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], AccountService);
    exports.AccountService = AccountService;
});

define('app',["require", "exports", "tslib", "aurelia-framework", "aurelia-router", "./services/account/account-service", "./services/settings/settings-service"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1, account_service_1, settings_service_1) {
    "use strict";
    var App = (function () {
        function App(account) {
            this.account = account;
            this.user = this.account.currentUser;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Dream Space';
            config.options.pushState = true;
            this.router = router;
            config.addPipelineStep('authorize', AuthorizeStep);
            config.map([
                { route: ["user"], moduleId: "./components/user/navigation", name: "user", title: "Login", nav: false },
                { route: ["studies"], moduleId: "./components/studies/navigation", name: "studies", title: "Studies", nav: true },
                { route: '', redirect: "studies" }
            ]);
        };
        return App;
    }());
    App = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService])
    ], App);
    exports.App = App;
    var AuthorizeStep = (function () {
        function AuthorizeStep(account, settings) {
            this.isAuthenticated = account.currentUser.isAuthenticated;
            this.homePage = settings.homePage;
        }
        AuthorizeStep.prototype.run = function (navigationInstruction, next) {
            var _this = this;
            if (navigationInstruction.getAllInstructions().some(function (i) { return i.config.auth; })) {
                if (this.isAuthenticated) {
                    return next();
                }
                else {
                    return next.cancel(new aurelia_router_1.RedirectToRoute('user'));
                }
            }
            else {
                if (navigationInstruction.getAllInstructions()
                    .some(function (i) { return i.config.name === 'user-login' && _this.isAuthenticated; })) {
                    return next.cancel(new aurelia_router_1.RedirectToRoute(this.homePage));
                }
                return next();
            }
        };
        return AuthorizeStep;
    }());
    AuthorizeStep = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService, settings_service_1.SettingsService])
    ], AuthorizeStep);
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

define('main',["require", "exports", "tslib", "aurelia-fetch-client", "./environment", "./infrastructure/error-interceptor", "./services/account/account-service", "./services/settings/settings-service"], function (require, exports, tslib_1, aurelia_fetch_client_1, environment_1, error_interceptor_1, account_service_1, settings_service_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var httpClient, errorInterceptor, account, settings;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        httpClient = aurelia.container.get(aurelia_fetch_client_1.HttpClient);
                        errorInterceptor = aurelia.container.get(error_interceptor_1.ErrorInterceptor);
                        httpClient.configure(function (config) {
                            config
                                .useStandardConfiguration()
                                .withBaseUrl("api/")
                                .withInterceptor(errorInterceptor);
                        });
                        account = aurelia.container.get(account_service_1.AccountService);
                        return [4 /*yield*/, account.initialize()];
                    case 1:
                        _a.sent();
                        settings = aurelia.container.get(settings_service_1.SettingsService);
                        return [4 /*yield*/, settings.initialize()];
                    case 2:
                        _a.sent();
                        aurelia.use
                            .standardConfiguration()
                            .instance("Account", account)
                            .instance("Settings", settings)
                            .feature("resources")
                            .plugin('aurelia-dialog', function (config) {
                            config.useDefaults();
                            config.settings.lock = false;
                            config.settings.enableEscClose = true;
                        })
                            .plugin('aurelia-validation');
                        if (environment_1.default.debug) {
                            aurelia.use.developmentLogging();
                        }
                        if (environment_1.default.testing) {
                            aurelia.use.plugin("aurelia-testing");
                        }
                        aurelia.start().then(function () { return aurelia.setRoot(); });
                        return [2 /*return*/];
                }
            });
        });
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

define('components/footer/dream-footer',["require", "exports"], function (require, exports) {
    "use strict";
    var DreamFooter = (function () {
        function DreamFooter() {
        }
        return DreamFooter;
    }());
    exports.DreamFooter = DreamFooter;
});

define('components/header/dream-header',["require", "exports", "tslib", "aurelia-framework", "aurelia-router", "../../services/account/account-service"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1, account_service_1) {
    "use strict";
    var DreamHeader = (function () {
        function DreamHeader(account) {
            this.account = account;
            this.user = this.account.currentUser;
        }
        DreamHeader.prototype.attached = function () {
            this.isAuthenticated = this.user.isAuthenticated;
            this.loginUrl = this.router.generate("account") + '/view';
        };
        DreamHeader.prototype.logout = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.account.logout()];
                        case 1:
                            _a.sent();
                            window.location.href = "/";
                            return [2 /*return*/];
                    }
                });
            });
        };
        return DreamHeader;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", aurelia_router_1.Router)
    ], DreamHeader.prototype, "router", void 0);
    DreamHeader = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService])
    ], DreamHeader);
    exports.DreamHeader = DreamHeader;
});

define('components/user/login',["require", "exports"], function (require, exports) {
    "use strict";
    var Login = (function () {
        function Login() {
        }
        return Login;
    }());
    exports.Login = Login;
});

define('components/user/navigation',["require", "exports"], function (require, exports) {
    "use strict";
    var Navigation = (function () {
        function Navigation() {
        }
        Navigation.prototype.configureRouter = function (config, router) {
            config.title = 'Login';
            config.map([
                { route: ['', 'login'], moduleId: "./login", name: "user-login", title: "Login", nav: false }
            ]);
            this.router = router;
        };
        return Navigation;
    }());
    exports.Navigation = Navigation;
});

define('services/articles/article-models',["require", "exports"], function (require, exports) {
    "use strict";
});

define('services/articles/article-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
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
});

define('services/file-storage/storage-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var StorageService = (function () {
        function StorageService(http) {
            this.http = http;
        }
        StorageService.prototype.uploadFile = function (fileName, fileBody) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var payload, response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            payload = {
                                fileName: fileName,
                                fileBody: fileBody
                            };
                            return [4 /*yield*/, this.http.fetch("blob/upload", {
                                    method: 'post',
                                    body: aurelia_fetch_client_1.json(payload)
                                })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return StorageService;
    }());
    StorageService = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], StorageService);
    exports.StorageService = StorageService;
});

define('services/indicator/indicator-models',["require", "exports"], function (require, exports) {
    "use strict";
});

define('services/indicator/indicator-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var IndicatorService = (function () {
        function IndicatorService(http) {
            this.http = http;
        }
        IndicatorService.prototype.getNames = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('indicator/all', {
                                method: 'get'
                            })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        IndicatorService.prototype.getIndicator = function (id) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('indicator/' + id, { method: 'get' })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        IndicatorService.prototype.getIndicatorsForPeriod = function (period) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('indicator/' + period + '/all', { method: 'get' })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        IndicatorService.prototype.deleteIndicator = function (id) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("indicator/" + id, { method: 'delete' })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        IndicatorService.prototype.saveIndicator = function (indicator) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("indicator", {
                                method: 'post',
                                body: aurelia_fetch_client_1.json(indicator)
                            })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return IndicatorService;
    }());
    IndicatorService = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], IndicatorService);
    exports.IndicatorService = IndicatorService;
});

define('services/settings/settings-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client", "../indicator/indicator-service"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1, indicator_service_1) {
    "use strict";
    var SettingsService = (function () {
        function SettingsService(http, indicatorService) {
            this.http = http;
            this.indicatorService = indicatorService;
            this.sections = [];
            this.initialized = false;
            this.homePage = 'studies';
            this.indicators = [];
            this.periods = [
                { id: 0, name: 'Daily', url: 'daily' },
                { id: 1, name: 'Weekly', url: 'weekly' }
            ];
            this.defaultPeriod = this.periods[0];
        }
        SettingsService.prototype.getStudiesSection = function () {
            if (this.initialized) {
                return this.sections.find(function (s) { return s.url === "studies"; });
            }
            return null;
        };
        SettingsService.prototype.getSection = function (sectionId) {
            if (this.initialized) {
                return this.sections.find(function (s) { return s.sectionId === sectionId; });
            }
            return null;
        };
        SettingsService.prototype.initialize = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var sectionsResponse, _a, _b;
                return tslib_1.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("article/sections")];
                        case 1:
                            sectionsResponse = _c.sent();
                            _a = this;
                            return [4 /*yield*/, sectionsResponse.json()];
                        case 2:
                            _a.sections = (_c.sent());
                            _b = this;
                            return [4 /*yield*/, this.indicatorService.getNames()];
                        case 3:
                            _b.indicators = _c.sent();
                            this.initialized = true;
                            return [2 /*return*/];
                    }
                });
            });
        };
        SettingsService.prototype.getIndicators = function (period) {
            return this.indicators.filter(function (indicator) { return indicator.period === period; });
        };
        return SettingsService;
    }());
    SettingsService = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient, indicator_service_1.IndicatorService])
    ], SettingsService);
    exports.SettingsService = SettingsService;
});

define('components/nav-menu/main-nav/main-nav',["require", "exports", "tslib", "aurelia-framework", "aurelia-router"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    var MainNav = (function () {
        function MainNav() {
            this.router = null;
        }
        return MainNav;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", aurelia_router_1.Router)
    ], MainNav.prototype, "router", void 0);
    exports.MainNav = MainNav;
});

define('components/studies/navigation',["require", "exports", "tslib", "aurelia-framework", "../../services/articles/article-service", "../../services/settings/settings-service"], function (require, exports, tslib_1, aurelia_framework_1, article_service_1, settings_service_1) {
    "use strict";
    var Navigation = (function () {
        function Navigation(articleService, settings) {
            this.articleService = articleService;
            this.settings = settings;
            this.section = this.settings.getStudiesSection();
            this.menus = [];
            this.menu = {
                editMode: false,
                section: this.section,
                editModeUrl: "",
                items: []
            };
            this.loadCategories(this.section.sectionId);
        }
        Navigation.prototype.loadCategories = function (sectionId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var categories;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.articleService.getCategories(sectionId)];
                        case 1:
                            categories = _a.sent();
                            this.menu.items = categories;
                            this.menus.push(this.menu);
                            return [2 /*return*/];
                    }
                });
            });
        };
        Navigation.prototype.configureRouter = function (config, router) {
            config.title = this.section.title;
            config.map([
                { route: ["", ':category', ':category/:article'], moduleId: "./study", name: "study" }
            ]);
            this.router = router;
        };
        Navigation.prototype.selectMenuItem = function (categoryUrl) {
            if (this.menu && this.menu.items) {
                this.menu.items.forEach(function (item) {
                    item.isActive = item.url === categoryUrl;
                });
            }
        };
        return Navigation;
    }());
    Navigation = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [article_service_1.ArticleService, settings_service_1.SettingsService])
    ], Navigation);
    exports.Navigation = Navigation;
});

define('components/studies/category-nav/category-nav',["require", "exports"], function (require, exports) {
    "use strict";
    var CategoryNav = (function () {
        function CategoryNav() {
            this.categoriesUrl = "";
        }
        CategoryNav.prototype.activate = function (menu) {
            this.menu = menu;
            this.categoriesUrl = this.menu.section.url + "/categories/" + this.menu.section.sectionId;
        };
        CategoryNav.prototype.getUrl = function (menuItem) {
            return "" + this.menu.section.url + "/" + menuItem.url;
        };
        return CategoryNav;
    }());
    exports.CategoryNav = CategoryNav;
});



define("components/studies/study", [],function(){});



define("form-validation/bootstrap-form-renderer", [],function(){});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./app.css\"></require><require from=\"./components/header/dream-header\"></require><require from=\"./components/footer/dream-footer\"></require><dream-header router.bind=\"router\"></dream-header><router-view></router-view><dream-footer></dream-footer></template>"; });
define('text!components/footer/dream-footer.html', ['module'], function(module) { module.exports = "<template><require from=\"./dream-footer.css\"></require></template>"; });
define('text!components/header/dream-header.html', ['module'], function(module) { module.exports = "<template><require from=\"./dream-header.css\"></require><div class=\"container\"><div class=\"navbar-brand\"><img class=\"logo\" src=\"/content/images/logo.png\"> <a first-letter-span href=\"/\">Dream Space</a></div><ul class=\"nav navbar-nav navbar-right\"><li role=\"presentation\" class=\"dropdown\" if.bind=\"isAuthenticated === true\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> ${userContext.user.firstName} <span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a href.bind=\"loginUrl\">Account</a></li><li><a click.delegate=\"logout()\">Logout</a></li></ul></li><li if.bind=\"isAuthenticated !== true\"><a href.bind=\"loginUrl\">Login</a></li></ul></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "@charset 'UTF-8';\n@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@import url(//fonts.googleapis.com/css?family=Open+Sans:400|Roboto);\n@import url(//fonts.googleapis.com/css?family=Istok+Web:400,700);\n@import url(//fonts.googleapis.com/css?family=Inder);\n@import url(//fonts.googleapis.com/css?family=Raleway);\n@import url(//fonts.googleapis.com/css?family=PT+Sans);\n@import url(//fonts.googleapis.com/css?family=Lato);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('/fonts/glyphicons-halflings-regular.eot');\n  src: url('/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('/fonts/glyphicons-halflings-regular.woff') format('woff'), url('/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');\n}\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #333333;\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.8) 100%, #ffffff 0%), url(/Content/Images/emma_bg_.jpg) no-repeat 0 0;\n  background-size: 100%;\n  background-attachment: fixed;\n  background-position: top;\n}\nbody a,\nbody a:hover {\n  color: #e22004;\n}\nbody a[first-letter-span] {\n  color: #2d4945;\n}\nbody a[first-letter-span] span {\n  color: #e22004;\n}\nbody .aurelia-validation-message {\n  display: none;\n}\nbody .has-success .form-control {\n  border-color: #ccc;\n}\nbody .has-success .form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\nbody .no-border {\n  border: 0!important;\n}\nbody .right {\n  text-align: right!important;\n}\nbody .uppercase {\n  text-transform: uppercase;\n}\nbody .pointer {\n  cursor: pointer!important;\n}\n.sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n"; });
define('text!components/user/login.html', ['module'], function(module) { module.exports = "<template><h3>Login</h3></template>"; });
define('text!styles/_fonts.css', ['module'], function(module) { module.exports = "@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@import url(//fonts.googleapis.com/css?family=Open+Sans:400|Roboto);\n@import url(//fonts.googleapis.com/css?family=Istok+Web:400,700);\n@import url(//fonts.googleapis.com/css?family=Inder);\n@import url(//fonts.googleapis.com/css?family=Raleway);\n@import url(//fonts.googleapis.com/css?family=PT+Sans);\n@import url(//fonts.googleapis.com/css?family=Lato);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('/fonts/glyphicons-halflings-regular.eot');\n  src: url('/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('/fonts/glyphicons-halflings-regular.woff') format('woff'), url('/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');\n}\n"; });
define('text!styles/_variables.css', ['module'], function(module) { module.exports = ""; });
define('text!components/user/navigation.html', ['module'], function(module) { module.exports = "<template><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!components/footer/dream-footer.css', ['module'], function(module) { module.exports = ""; });
define('text!components/nav-menu/main-nav/main-nav.html', ['module'], function(module) { module.exports = "<template><require from=\"./main-nav.css\"></require><div class=\"container\"><div class=\"main-nav-items\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a href.bind=\"row.href\">${row.title}</a></li></ul></div></div></template>"; });
define('text!components/header/dream-header.css', ['module'], function(module) { module.exports = "dream-header {\n  font-family: 'Arial', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  top: 0px;\n  z-index: 999;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  background: #ffffff;\n  padding: 0;\n}\ndream-header .nav .open > a,\ndream-header .nav .open > a:hover,\ndream-header .nav .open > a:focus {\n  background-color: transparent;\n}\ndream-header .navbar-nav > li > a.dropdown-toggle {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-top: 24px;\n}\ndream-header .nav > li > a:hover,\ndream-header .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  color: #e22004;\n}\ndream-header .nav > li > a:hover {\n  text-decoration: underline;\n}\ndream-header .navbar-brand {\n  margin: 0;\n  padding: 0;\n  float: left;\n  font-size: 26px;\n  line-height: 52px;\n  cursor: pointer;\n}\ndream-header .navbar-brand img.logo {\n  margin-right: -2px;\n  top: -2px;\n  position: relative;\n  display: inline-block;\n  width: 47px;\n  opacity: 0.96;\n}\ndream-header .navbar-brand span.pound {\n  color: #e22004;\n  font-weight: bold;\n  font-size: 46px;\n  line-height: 25px;\n  position: relative;\n  top: 6px;\n}\ndream-header .navbar-brand a,\ndream-header .navbar-brand a:hover {\n  text-decoration: none;\n}\n"; });
define('text!components/nav-menu/main-nav/main-nav.css', ['module'], function(module) { module.exports = "@media (min-width: 768px) {\n  main-nav .navbar-nav {\n    float: none;\n  }\n}\nmain-nav .main-nav-items {\n  background-color: rgba(161, 161, 161, 0.2);\n}\nmain-nav ul.nav li {\n  float: left;\n  padding: 0;\n  position: relative;\n  margin-left: 1px;\n}\nmain-nav ul.nav li:first-child {\n  margin-left: 0;\n}\nmain-nav ul.nav li a {\n  position: relative;\n  padding: 0 20px;\n  text-align: center;\n  font: 14px/40px 'Istok Web';\n  text-transform: uppercase;\n  background: transparent;\n  color: #333333;\n  -webkit-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\nmain-nav ul.nav li:hover a {\n  background: rgba(226, 32, 4, 0.38);\n}\nmain-nav ul.nav li.active a {\n  color: #ffffff;\n  background: #e22004;\n}\nmain-nav nav.navbar {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 14px 0;\n  min-height: 0;\n  border-color: #e7e7e7;\n}\nmain-nav nav.navbar ul.navbar-nav {\n  top: 5px;\n}\n"; });
define('text!components/studies/navigation.html', ['module'], function(module) { module.exports = "<template><compose repeat.for=\"menu of menus\" model.bind=\"menu\" view-model=\"./categories/sub-navigation\"></compose><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!components/studies/category-nav/category-nav.html', ['module'], function(module) { module.exports = "<template><div class=\"sub-nav\"><nav class=\"navbar navbar\"><div class=\"container\"><nav class=\"navbar\"><ul class=\"nav navbar-nav\"><li repeat.for=\"item of menu.items\" class=\"${item.isActive ? 'active' : ''}\"><a href.bind=\"$parent.getUrl(item)\">${item.title}</a></li></ul></nav></div></nav></div></template>"; });
define('text!components/studies/category-nav/category-nav.css', ['module'], function(module) { module.exports = ""; });
define('text!styles/_sub-nav.css', ['module'], function(module) { module.exports = ".sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n"; });
define('text!styles/_body.css', ['module'], function(module) { module.exports = ""; });
define('text!styles/_common.css', ['module'], function(module) { module.exports = "@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@import url(//fonts.googleapis.com/css?family=Open+Sans:400|Roboto);\n@import url(//fonts.googleapis.com/css?family=Istok+Web:400,700);\n@import url(//fonts.googleapis.com/css?family=Inder);\n@import url(//fonts.googleapis.com/css?family=Raleway);\n@import url(//fonts.googleapis.com/css?family=PT+Sans);\n@import url(//fonts.googleapis.com/css?family=Lato);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('/fonts/glyphicons-halflings-regular.eot');\n  src: url('/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('/fonts/glyphicons-halflings-regular.woff') format('woff'), url('/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');\n}\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #333333;\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.8) 100%, #ffffff 0%), url(/Content/Images/emma_bg_.jpg) no-repeat 0 0;\n  background-size: 100%;\n  background-attachment: fixed;\n  background-position: top;\n}\nbody a,\nbody a:hover {\n  color: #e22004;\n}\nbody a[first-letter-span] {\n  color: #2d4945;\n}\nbody a[first-letter-span] span {\n  color: #e22004;\n}\nbody .aurelia-validation-message {\n  display: none;\n}\nbody .has-success .form-control {\n  border-color: #ccc;\n}\nbody .has-success .form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\nbody .no-border {\n  border: 0!important;\n}\nbody .right {\n  text-align: right!important;\n}\nbody .uppercase {\n  text-transform: uppercase;\n}\nbody .pointer {\n  cursor: pointer!important;\n}\n.sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n"; });
define('text!styles/common.css', ['module'], function(module) { module.exports = "@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@import url(//fonts.googleapis.com/css?family=Open+Sans:400|Roboto);\n@import url(//fonts.googleapis.com/css?family=Istok+Web:400,700);\n@import url(//fonts.googleapis.com/css?family=Inder);\n@import url(//fonts.googleapis.com/css?family=Raleway);\n@import url(//fonts.googleapis.com/css?family=PT+Sans);\n@import url(//fonts.googleapis.com/css?family=Lato);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('/fonts/glyphicons-halflings-regular.eot');\n  src: url('/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('/fonts/glyphicons-halflings-regular.woff') format('woff'), url('/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');\n}\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #333333;\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.8) 100%, #ffffff 0%), url(/Content/Images/emma_bg_.jpg) no-repeat 0 0;\n  background-size: 100%;\n  background-attachment: fixed;\n  background-position: top;\n}\nbody a,\nbody a:hover {\n  color: #e22004;\n}\nbody a[first-letter-span] {\n  color: #2d4945;\n}\nbody a[first-letter-span] span {\n  color: #e22004;\n}\nbody .aurelia-validation-message {\n  display: none;\n}\nbody .has-success .form-control {\n  border-color: #ccc;\n}\nbody .has-success .form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\nbody .no-border {\n  border: 0!important;\n}\nbody .right {\n  text-align: right!important;\n}\nbody .uppercase {\n  text-transform: uppercase;\n}\nbody .pointer {\n  cursor: pointer!important;\n}\n.sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n"; });
define('text!components/studies/study.html', ['module'], function(module) { module.exports = "<template><div class=\"actions\" if.bind=\"powerUser\"><div if.bind=\"editMode !== true\" class=\"btn-group\" role=\"group\"><button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Administration <span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li><a click.delegate=\"startEdit()\">Edit Page</a></li><li role=\"separator\" class=\"divider\"></li><li><a href=\"/categories\">Manage Categories</a></li></ul></div><div class=\"btn-group\" role=\"group\" aria-label=\"...\"><button type=\"button\" if.bind=\"editMode === true\" click.delegate=\"saveArticle()\" class=\"btn btn-success\">Apply Changes</button> <button type=\"button\" if.bind=\"editMode === true\" click.delegate=\"cancelEdit()\" class=\"btn btn-default\">Cancel</button></div></div><div class=\"row\"><div class=\"col-md-8 article\"><header><h3>${article.title}</h3></header><form if.bind=\"editMode === true\"><fieldset><div class=\"form-group\"><label>Article Name</label><input type=\"text\" class=\"form-control\" value.bind=\"article.title & validate\"></div><div class=\"form-group\"><label>Article Url</label><input type=\"text\" class=\"form-control\" value.bind=\"article.url & validate\"></div></fieldset><h4>Article Parts</h4></form><div class=\"c_article_parts ${editMode ? 'edit-mode' : ''}\"><article-parts parts.bind=\"article.blocks\"></article-parts></div></div><div class=\"col-md-4\"><div class=\"side-navigation\"><h3>${category.title}</h3><ul><li repeat.for=\"summary of articles\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a click.delegate=\"$parent.navigateToArticle(summary.url)\" title=\"${summary.summary}\" class=\"${summary.selected ? 'active' : ''}\">${summary.title} Rules</a></li></ul><div if.bind=\"editMode\"><h3>Add / Remove Articles</h3><ul><li class=\"side-navigation-add\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span> <a click.delegate=\"addArticle()\">Add New Article</a></li><li class=\"side-navigation-delete\"><form><span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> <a click.delegate=\"deleting = true\">Delete Loaded Article</a><div class=\"form-actions no-border\" if.bind=\"deleting \"><input class=\"btn btn-danger\" type=\"button\" click.delegate=\"deleteArticle()\" value=\"Delete\"> <input class=\"btn btn-default\" type=\"button\" click.delegate=\"deleting = false\" value=\"Cancel\"></div></form></li></ul></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map