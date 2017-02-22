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
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("account/logout", { method: 'post' })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
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

define('services/articles/article-models',["require", "exports"], function (require, exports) {
    "use strict";
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
                { route: ["categories"], moduleId: "./components/categories/navigation", name: "categories", title: "Categories", nav: false },
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
        ErrorInterceptor.prototype.request = function (request) {
            var message = "" + request.url;
            this.eventEmitter.publish("ServerError", { message: message });
            return request;
        };
        return ErrorInterceptor;
    }());
    ErrorInterceptor = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [event_emitter_1.EventEmitter])
    ], ErrorInterceptor);
    exports.ErrorInterceptor = ErrorInterceptor;
});

define('form-validation/custom-validation-rules',["require", "exports", "aurelia-validation", "moment"], function (require, exports, aurelia_validation_1, moment) {
    "use strict";
    var CustomValidationRules = (function () {
        function CustomValidationRules() {
        }
        CustomValidationRules.prototype.register = function () {
            aurelia_validation_1.ValidationRules.customRule('Date-DD/MM/YYYY', function (value) {
                var d = new Date(moment(value, 'D/M/YYYY', true).format());
                return value === null || value === undefined || value.trim() === '' || !isNaN(d.getTime());
            }, "${$displayName} must be in format (DD/MM/YYYY).");
        };
        return CustomValidationRules;
    }());
    exports.CustomValidationRules = CustomValidationRules;
});

define('main',["require", "exports", "tslib", "aurelia-fetch-client", "./environment", "./infrastructure/error-interceptor", "./services/account/account-service", "./services/settings/settings-service", "./form-validation/custom-validation-rules"], function (require, exports, tslib_1, aurelia_fetch_client_1, environment_1, error_interceptor_1, account_service_1, settings_service_1, custom_validation_rules_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var validationRules, httpClient, errorInterceptor, account, settings;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validationRules = aurelia.container.get(custom_validation_rules_1.CustomValidationRules);
                        validationRules.register();
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

define('form-validation/bootstrap-form-renderer',["require", "exports"], function (require, exports) {
    "use strict";
    var BootstrapFormRenderer = (function () {
        function BootstrapFormRenderer() {
        }
        BootstrapFormRenderer.prototype.render = function (instruction) {
            for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
                var _b = _a[_i], result = _b.result, elements = _b.elements;
                for (var _c = 0, elements_1 = elements; _c < elements_1.length; _c++) {
                    var element = elements_1[_c];
                    this.remove(element, result);
                }
            }
            for (var _d = 0, _e = instruction.render; _d < _e.length; _d++) {
                var _f = _e[_d], result = _f.result, elements = _f.elements;
                for (var _g = 0, elements_2 = elements; _g < elements_2.length; _g++) {
                    var element = elements_2[_g];
                    this.add(element, result);
                }
            }
        };
        BootstrapFormRenderer.prototype.add = function (element, result) {
            if (result.valid) {
                return;
            }
            var formGroup = element.closest('.form-group');
            if (!formGroup) {
                return;
            }
            if (formGroup.classList.contains('has-error')) {
                return;
            }
            formGroup.classList.add('has-error');
            var message = document.createElement('span');
            message.className = 'help-block validation-message';
            message.textContent = result.message;
            message.id = "validation-message-" + result.id;
            formGroup.appendChild(message);
        };
        BootstrapFormRenderer.prototype.remove = function (element, result) {
            if (result.valid) {
                return;
            }
            var formGroup = element.closest('.form-group');
            if (!formGroup) {
                return;
            }
            var message = formGroup.querySelector("#validation-message-" + result.id);
            if (message) {
                formGroup.removeChild(message);
                if (formGroup.querySelectorAll('.help-block.validation-message').length === 0) {
                    formGroup.classList.remove('has-error');
                }
            }
        };
        return BootstrapFormRenderer;
    }());
    exports.BootstrapFormRenderer = BootstrapFormRenderer;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
        config.globalResources([
            './value-converters/blob-to-url',
            './value-converters/filelist-to-array'
        ]);
        config.globalResources([
            './elements/article-parts/article-parts',
            './elements/article-parts/article-part-paragraph',
            './elements/article-parts/article-part-heading',
            './elements/article-parts/article-part-actions',
            './elements/article-parts/article-part-image',
            './elements/article-parts/article-part-list',
            './elements/article-parts/article-part-new'
        ]);
    }
    exports.configure = configure;
});

define('dialogs/login/user-login',["require", "exports", "tslib", "aurelia-framework", "aurelia-dialog", "aurelia-validation", "../../form-validation/bootstrap-form-renderer", "../../services/account/account-service", "aurelia-binding"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_dialog_1, aurelia_validation_1, bootstrap_form_renderer_1, account_service_1, aurelia_binding_1) {
    "use strict";
    var UserLogin = (function () {
        function UserLogin(controller, validation, account, bindingEngine) {
            this.controller = controller;
            this.validation = validation;
            this.account = account;
            this.bindingEngine = bindingEngine;
            this.validation.validateTrigger = aurelia_validation_1.validateTrigger.change;
            this.validation.addRenderer(new bootstrap_form_renderer_1.BootstrapFormRenderer());
        }
        UserLogin.prototype.attached = function () {
            var _this = this;
            this.subscriptions = [];
            this.subscriptions.push(this.bindingEngine.propertyObserver(this.model, 'email').subscribe(function () { return _this.onChange(); }));
            this.subscriptions.push(this.bindingEngine.propertyObserver(this.model, 'password').subscribe(function () { return _this.onChange(); }));
        };
        UserLogin.prototype.detached = function () {
            if (this.subscriptions.length > 0) {
                this.subscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
            }
        };
        UserLogin.prototype.onChange = function () {
            this.loginFailed = false;
        };
        UserLogin.prototype.activate = function (model) {
            this.model = model;
            aurelia_validation_1.ValidationRules
                .ensure(function (m) { return m.email; }).displayName('Email').required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (m) { return m.password; }).displayName('Password').required().withMessage("${$displayName} cannot be blank.")
                .on(this.model);
        };
        UserLogin.prototype.tryLogin = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validation.validate()];
                        case 1:
                            if (!(_a.sent()).valid) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.account.login(this.model.email, this.model.password)];
                        case 2:
                            response = _a.sent();
                            if (response.status === "success") {
                                this.controller.ok(this.model);
                            }
                            else {
                                this.loginFailed = true;
                            }
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UserLogin;
    }());
    UserLogin = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_dialog_1.DialogController, aurelia_validation_1.ValidationController, account_service_1.AccountService, aurelia_binding_1.BindingEngine])
    ], UserLogin);
    exports.UserLogin = UserLogin;
    var UserLoginModel = (function () {
        function UserLoginModel() {
        }
        return UserLoginModel;
    }());
    exports.UserLoginModel = UserLoginModel;
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
        ArticleService.prototype.getArticles = function (categoryId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("article/" + categoryId + "/all")];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ArticleService.prototype.saveArticle = function (article) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('article', {
                                method: 'post',
                                body: aurelia_fetch_client_1.json(article)
                            })];
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

define('components/categories/categories',["require", "exports", "tslib", "aurelia-framework", "../../services/articles/article-service", "aurelia-validation", "../../services/account/account-service", "../../form-validation/bootstrap-form-renderer", "../../services/settings/settings-service"], function (require, exports, tslib_1, aurelia_framework_1, article_service_1, aurelia_validation_1, Accountservice, Bootstrapformrenderer, settings_service_1) {
    "use strict";
    var Categories = (function () {
        function Categories(articleService, settings, account, validation) {
            this.articleService = articleService;
            this.settings = settings;
            this.account = account;
            this.validation = validation;
            this.powerUser = this.account.currentUser.isAuthenticated;
            this.validation.validateTrigger = aurelia_validation_1.validateTrigger.change;
            this.validation.addRenderer(new Bootstrapformrenderer.BootstrapFormRenderer());
            this.editMode = false;
            this.categories = [];
            this.sections = this.settings.sections;
            this.sectionId = 0;
        }
        Categories.prototype.activate = function (params) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!params.section) {
                                if (this.sections && this.sections.length > 0) {
                                    this.sectionId = this.sections[0].sectionId;
                                }
                            }
                            if (!(this.sectionId > 0)) return [3 /*break*/, 2];
                            this.section = this.settings.getSection(this.sectionId);
                            _a = this;
                            return [4 /*yield*/, this.articleService.getCategories(this.sectionId)];
                        case 1:
                            _a.categories = _b.sent();
                            _b.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        Categories.prototype.getSectionUrl = function (section) {
            return '/categories/' + section.SectionId;
        };
        return Categories;
    }());
    Categories = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [article_service_1.ArticleService,
            settings_service_1.SettingsService, Accountservice.AccountService, aurelia_validation_1.ValidationController])
    ], Categories);
    exports.Categories = Categories;
});

define('components/categories/navigation',["require", "exports"], function (require, exports) {
    "use strict";
    var Navigation = (function () {
        function Navigation() {
        }
        Navigation.prototype.configureRouter = function (config, router) {
            config.title = 'Categories';
            config.map([
                { route: ['', ':section'], moduleId: "./categories", name: "categories-list", title: "Manage Categories", nav: true }
            ]);
            this.router = router;
            this.section = config.title;
        };
        return Navigation;
    }());
    exports.Navigation = Navigation;
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

define('components/header/dream-header',["require", "exports", "tslib", "aurelia-framework", "aurelia-router", "aurelia-dialog", "../../services/account/account-service", "../../dialogs/login/user-login"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1, aurelia_dialog_1, account_service_1, user_login_1) {
    "use strict";
    var DreamHeader = (function () {
        function DreamHeader(account, dialogService) {
            this.account = account;
            this.dialogService = dialogService;
            this.user = this.account.currentUser;
        }
        DreamHeader.prototype.attached = function () {
            this.isAuthenticated = this.user.isAuthenticated;
            this.loginUrl = this.router.generate("user") + '/view';
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
        DreamHeader.prototype.login = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var model, response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            model = new user_login_1.UserLoginModel();
                            return [4 /*yield*/, this.dialogService.open({ viewModel: user_login_1.UserLogin, model: model })];
                        case 1:
                            response = _a.sent();
                            if (!response.wasCancelled) {
                                window.location.reload();
                            }
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
        tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService, aurelia_dialog_1.DialogService])
    ], DreamHeader);
    exports.DreamHeader = DreamHeader;
});

define('components/studies/navigation',["require", "exports", "tslib", "aurelia-framework", "../../services/articles/article-service", "../../services/settings/settings-service"], function (require, exports, tslib_1, aurelia_framework_1, article_service_1, settings_service_1) {
    "use strict";
    var Navigation = (function () {
        function Navigation(articleService, settings) {
            this.articleService = articleService;
            this.settings = settings;
            this.section = this.settings.getStudiesSection();
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

define('components/studies/study',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-event-aggregator", "./navigation", "aurelia-validation", "../../services/articles/article-service", "../../form-validation/bootstrap-form-renderer", "../../services/account/account-service"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_event_aggregator_1, navigation_1, aurelia_validation_1, article_service_1, bootstrap_form_renderer_1, account_service_1) {
    "use strict";
    var Study = (function () {
        function Study(eventAggregator, articleService, navigation, account, validation) {
            this.eventAggregator = eventAggregator;
            this.articleService = articleService;
            this.navigation = navigation;
            this.account = account;
            this.validation = validation;
            this.powerUser = this.account.currentUser.isAuthenticated;
            this.validation.validateTrigger = aurelia_validation_1.validateTrigger.change;
            this.validation.addRenderer(new bootstrap_form_renderer_1.BootstrapFormRenderer());
            this.subscriptions = [];
            this.editMode = false;
        }
        Study.prototype.activate = function (params, routeconfig, navigationInstruction) {
            this.router = navigationInstruction.router;
            this.articleUrl = routeconfig.name;
            this.articleUrl = "default";
            if (!params.category) {
                params.category = "default";
            }
            if (params.article) {
                this.articleUrl = params.article;
            }
            this.loadCategory(params.category);
        };
        Study.prototype.loadArticles = function (categoryId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.articleService.getArticles(categoryId)];
                        case 1:
                            _a.articles = _b.sent();
                            this.selectSideNavigationItem();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Study.prototype.loadCategory = function (categoryUrl) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a, result;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.setEditMode(false);
                            _a = this;
                            return [4 /*yield*/, this.articleService.getCategory(categoryUrl)];
                        case 1:
                            _a.category = _b.sent();
                            if (!(this.category && this.category.categoryId > 0)) return [3 /*break*/, 4];
                            this.navigation.selectMenuItem(this.category.url);
                            return [4 /*yield*/, this.articleService.getArticleByUrl(this.category.categoryId, this.articleUrl)];
                        case 2:
                            result = _b.sent();
                            if (!(result.articleId > 0)) return [3 /*break*/, 4];
                            this.article = result;
                            this.setEditMode(false);
                            return [4 /*yield*/, this.loadArticles(this.category.categoryId)];
                        case 3:
                            _b.sent();
                            _b.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        Study.prototype.setEditMode = function (editMode) {
            this.editMode = editMode;
            this.navigation.menu.editMode = editMode;
            this.eventAggregator.publish("article-edit-mode-changed", editMode);
        };
        Study.prototype.startEdit = function () {
            this.originalArticle = Object.assign({}, this.article);
            this.setEditMode(true);
            aurelia_validation_1.ValidationRules
                .ensure(function (u) { return u.title; }).displayName('Strategy name').required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (u) { return u.summary; }).displayName('Summary').required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (u) { return u.url; }).displayName('Strategy url').required().withMessage("${$displayName} cannot be blank.")
                .on(this.article);
        };
        Study.prototype.cancelEdit = function () {
            this.setEditMode(false);
            if (this.article.articleId > 0) {
                this.article = this.originalArticle;
                this.article.editMode = false;
            }
            else {
                this.article.deleted = true;
            }
            this.validation.reset();
        };
        Study.prototype.addArticle = function () {
            this.article = {
                articleId: 0,
                categoryId: this.category.categoryId,
                isFeatured: false,
                deleted: false,
                title: "New Article",
                url: "new-article",
                blocks: [],
                summary: "",
                editMode: false,
                selected: false
            };
            this.startEdit();
            this.validation.validate();
        };
        Study.prototype.selectSideNavigationItem = function () {
            var self = this;
            if (this.articles && this.articles.length > 0) {
                this.articles.forEach(function (item) {
                    item.selected = item.articleId === self.article.articleId;
                });
            }
        };
        Study.prototype.navigateToArticle = function (url) {
            if (url && url.length > 0) {
                this.setEditMode(false);
                var articleUrl = '/' + this.navigation.section.url + '/' + this.category.url + '/' + url;
                this.router.navigate(articleUrl);
            }
        };
        Study.prototype.deleteArticle = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.article && this.article.articleId > 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.articleService.deleteArticle(this.article.articleId)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            toastr.warning('Article is not selected', 'Delete Failed');
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        Study.prototype.trySaveArticle = function () {
            var _this = this;
            this.validation.validate()
                .then(function (response) {
                var valid = false;
                if (response.valid === true) {
                    if (_this.articlePartsValidate()) {
                        valid = true;
                    }
                }
                if (valid) {
                    _this.saveArticle();
                }
                else {
                    toastr.warning('Please correct validation errors.', 'Validation Errors');
                }
            });
        };
        Study.prototype.articlePartsValidate = function () {
            if (this.article.blocks.length > 0) {
                var index = this.article.blocks.findIndex(function (b) { return !b.valid; });
                return index === -1;
            }
            else {
                toastr.warning('Article is empty', 'Validation Errors');
                return false;
            }
        };
        Study.prototype.saveArticle = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var a;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.setEditMode(false);
                            return [4 /*yield*/, this.articleService.saveArticle(this.article)];
                        case 1:
                            a = _a.sent();
                            if (a.url && a.url.length > 0) {
                                toastr.success("Article staved successfully!", 'Strategy saved');
                                this.navigateToArticle(a.url);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Study;
    }());
    Study = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator,
            article_service_1.ArticleService,
            navigation_1.Navigation,
            account_service_1.AccountService,
            aurelia_validation_1.ValidationController])
    ], Study);
    exports.Study = Study;
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

define('resources/value-converters/blob-to-url',["require", "exports"], function (require, exports) {
    "use strict";
    var BlobToUrlValueConverter = (function () {
        function BlobToUrlValueConverter() {
        }
        BlobToUrlValueConverter.prototype.toView = function (blob) {
            var imageUrl = URL.createObjectURL(blob);
            return imageUrl;
        };
        return BlobToUrlValueConverter;
    }());
    exports.BlobToUrlValueConverter = BlobToUrlValueConverter;
});

define('resources/value-converters/filelist-to-array',["require", "exports"], function (require, exports) {
    "use strict";
    var FileListToArrayValueConverter = (function () {
        function FileListToArrayValueConverter() {
        }
        FileListToArrayValueConverter.prototype.toView = function (fileList) {
            var files = [];
            if (!fileList) {
                return files;
            }
            for (var i = 0; i < fileList.length; i++) {
                files.push(fileList.item(i));
            }
            return files;
        };
        return FileListToArrayValueConverter;
    }());
    exports.FileListToArrayValueConverter = FileListToArrayValueConverter;
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

define('components/nav-menu/category-nav/category-nav',["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    var CategoryNav = (function () {
        function CategoryNav() {
            this.categoriesUrl = "";
        }
        CategoryNav.prototype.menuChanged = function () {
            this.categoriesUrl = this.menu.section.url + "/categories/" + this.menu.section.sectionId;
        };
        CategoryNav.prototype.getUrl = function (menuItem) {
            return "" + this.menu.section.url + "/" + menuItem.url;
        };
        return CategoryNav;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], CategoryNav.prototype, "menu", void 0);
    exports.CategoryNav = CategoryNav;
});

define('resources/elements/article-parts/article-part-actions',["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    var ArticlePartActions = (function () {
        function ArticlePartActions() {
        }
        ArticlePartActions.prototype.remove = function () {
            if (this.part) {
                this.part.action = "Remove";
            }
        };
        ArticlePartActions.prototype.moveUp = function () {
            if (this.part) {
                this.part.action = "MoveUp";
            }
        };
        ArticlePartActions.prototype.moveDown = function () {
            if (this.part) {
                this.part.action = "MoveDown";
            }
        };
        return ArticlePartActions;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], ArticlePartActions.prototype, "part", void 0);
    exports.ArticlePartActions = ArticlePartActions;
});

define('resources/elements/article-parts/article-part-heading',["require", "exports", "tslib", "aurelia-framework", "aurelia-binding"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_binding_1) {
    "use strict";
    var ArticlePartHeading = (function () {
        function ArticlePartHeading(bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.headingTypes = ['H1', 'H2', 'H3', 'H4', 'H5'];
            this.textValid = true;
            this.typeValid = true;
            this.subscriptions = [];
        }
        ArticlePartHeading.prototype.attached = function () {
            var _this = this;
            if (!this.part.headingType) {
                this.part.headingType = 'H3';
            }
            if (!this.part.text) {
                this.part.text = '';
            }
            this.subscriptions.push(this.bindingEngine.propertyObserver(this.part, 'text')
                .subscribe(function () { return _this.onChange(); }));
            this.validate();
        };
        ArticlePartHeading.prototype.detached = function () {
            if (this.subscriptions.length > 0) {
                this.subscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
            }
        };
        ArticlePartHeading.prototype.onChange = function () {
            this.validate();
        };
        ArticlePartHeading.prototype.validate = function () {
            this.typeValid = this.part.headingType.length === 2;
            this.textValid = this.part.text.length > 0;
            this.part.valid = this.typeValid && this.textValid;
        };
        return ArticlePartHeading;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], ArticlePartHeading.prototype, "part", void 0);
    ArticlePartHeading = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_binding_1.BindingEngine])
    ], ArticlePartHeading);
    exports.ArticlePartHeading = ArticlePartHeading;
});

define('resources/elements/article-parts/article-part-image',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-binding", "../../../services/file-storage/storage-service"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_binding_1, storage_service_1) {
    "use strict";
    var ArticlePartImage = (function () {
        function ArticlePartImage(blobServices, bindingEngine) {
            this.blobServices = blobServices;
            this.bindingEngine = bindingEngine;
            this.subscriptions = [];
        }
        ArticlePartImage.prototype.attached = function () {
            var _this = this;
            if (!this.part.imageUrl) {
                this.part.imageUrl = '';
            }
            if (!this.part.text) {
                this.part.text = '';
            }
            this.subscriptions.push(this.bindingEngine.propertyObserver(this.part, 'imageUrl')
                .subscribe(function () { return _this.validate(); }));
            this.subscriptions.push(this.bindingEngine.propertyObserver(this.part, 'text')
                .subscribe(function () { return _this.validate(); }));
            this.validate();
        };
        ArticlePartImage.prototype.detached = function () {
            if (this.subscriptions.length > 0) {
                this.subscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
            }
        };
        ArticlePartImage.prototype.validate = function () {
            this.textValid = this.part.text.length > 0;
            this.imageValid = this.part.imageUrl.length > 4;
            this.part.valid = this.textValid && this.imageValid;
        };
        ArticlePartImage.prototype.blobToUrl = function (blob) {
            return URL.createObjectURL(blob);
        };
        ArticlePartImage.prototype.uploadImage = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var reader_1, file_1, self_1;
                return tslib_1.__generator(this, function (_a) {
                    if (this.selectedFiles.length > 0) {
                        toastr.warning('Uploading selected file', 'Uploading...');
                        reader_1 = new FileReader();
                        file_1 = this.selectedFiles.item(0);
                        self_1 = this;
                        reader_1.addEventListener("loadend", function () {
                            if (reader_1.readyState === 2) {
                                self_1.blobServices.uploadFile(file_1.name, reader_1.result)
                                    .then(function (imageUrl) {
                                    if (imageUrl) {
                                        self_1.part.imageUrl = imageUrl;
                                        toastr.success('Image uploaded successfully', 'Image Uploaded');
                                    }
                                    else {
                                        toastr.error('Sorry, this image is too big. Must be 2MB max.', 'Failed to Uploaded');
                                    }
                                });
                            }
                        });
                        reader_1.readAsDataURL(file_1);
                    }
                    return [2 /*return*/];
                });
            });
        };
        return ArticlePartImage;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], ArticlePartImage.prototype, "part", void 0);
    ArticlePartImage = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [storage_service_1.StorageService, aurelia_binding_1.BindingEngine])
    ], ArticlePartImage);
    exports.ArticlePartImage = ArticlePartImage;
});

define('resources/elements/article-parts/article-part-list',["require", "exports", "tslib", "aurelia-framework", "aurelia-binding"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_binding_1) {
    "use strict";
    var ArticlePartList = (function () {
        function ArticlePartList(bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.itemsSubscriptions = [];
            this.itemsChangedSubscription = null;
        }
        ArticlePartList.prototype.partChanged = function (newValue) {
            var _this = this;
            if (newValue) {
                if (!this.part.items) {
                    this.part.items = [];
                }
                if (this.part.items.length === 0) {
                    this.addItem();
                }
                if (!this.itemsChangedSubscription) {
                    this.itemsChangedSubscription = this.bindingEngine.collectionObserver(this.part.items)
                        .subscribe(function () { return _this.onItemsChanged(); });
                }
                this.renewItemsSubscriptions();
            }
        };
        ArticlePartList.prototype.addItem = function () {
            this.part.items.push({ text: '', valid: false });
        };
        ArticlePartList.prototype.deleteItem = function (index) {
            this.part.items.splice(index, 1);
        };
        ArticlePartList.prototype.onItemsChanged = function () {
            this.renewItemsSubscriptions();
        };
        ArticlePartList.prototype.renewItemsSubscriptions = function () {
            if (this.itemsSubscriptions.length > 0) {
                this.itemsSubscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
                this.itemsSubscriptions = [];
            }
            if (this.part.items && this.part.items.length > 0) {
                var self_1 = this;
                this.part.items.forEach(function (item) {
                    self_1.itemsSubscriptions.push(self_1.bindingEngine.propertyObserver(item, 'text')
                        .subscribe(function () { return self_1.onItemTextChange(); }));
                });
            }
            this.validate();
        };
        ArticlePartList.prototype.onItemTextChange = function () {
            this.validate();
        };
        ArticlePartList.prototype.validate = function () {
            var valid = false;
            if (this.part.items && this.part.items.length > 0) {
                this.part.items.forEach(function (item) {
                    item.valid = item.text && item.text.length > 0;
                });
                valid = this.part.items.findIndex(function (i) { return !i.valid; }) === -1;
            }
            this.part.valid = valid;
        };
        ArticlePartList.prototype.detached = function () {
            if (this.itemsChangedSubscription) {
                this.itemsChangedSubscription.dispose();
            }
            if (this.itemsSubscriptions.length > 0) {
                this.itemsSubscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
            }
        };
        return ArticlePartList;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], ArticlePartList.prototype, "part", void 0);
    ArticlePartList = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_binding_1.BindingEngine])
    ], ArticlePartList);
    exports.ArticlePartList = ArticlePartList;
});

define('resources/elements/article-parts/article-part-new',["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    var ArticlePartNew = (function () {
        function ArticlePartNew() {
            this.partTypes = ["Paragraph", "Heading", "Image", "List"];
            this.canAdd = false;
            this.selectedType = "Unset";
        }
        ArticlePartNew.prototype.onTypeChange = function () {
            this.canAdd = this.selectedType !== "Unset";
        };
        ArticlePartNew.prototype.add = function () {
            this.part.type = this.selectedType;
        };
        ArticlePartNew.prototype.cancel = function () {
            this.part.action = "Remove";
        };
        return ArticlePartNew;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], ArticlePartNew.prototype, "part", void 0);
    exports.ArticlePartNew = ArticlePartNew;
});

define('resources/elements/article-parts/article-part-paragraph',["require", "exports", "tslib", "aurelia-framework", "aurelia-binding"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_binding_1) {
    "use strict";
    var ArticlePartParagraph = (function () {
        function ArticlePartParagraph(bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.subscriptions = [];
        }
        ArticlePartParagraph.prototype.attached = function () {
            var _this = this;
            if (!this.part.text) {
                this.part.text = '';
            }
            this.subscriptions.push(this.bindingEngine.propertyObserver(this.part, 'text')
                .subscribe(function () { return _this.onChange(); }));
            this.validate();
        };
        ArticlePartParagraph.prototype.detached = function () {
            if (this.subscriptions.length > 0) {
                this.subscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
            }
        };
        ArticlePartParagraph.prototype.onChange = function () {
            this.validate();
        };
        ArticlePartParagraph.prototype.validate = function () {
            this.textValid = this.part.text.length > 0;
            this.part.valid = this.textValid;
        };
        return ArticlePartParagraph;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], ArticlePartParagraph.prototype, "part", void 0);
    ArticlePartParagraph = tslib_1.__decorate([
        aurelia_framework_1.autoinject(),
        tslib_1.__metadata("design:paramtypes", [aurelia_binding_1.BindingEngine])
    ], ArticlePartParagraph);
    exports.ArticlePartParagraph = ArticlePartParagraph;
});

define('resources/elements/article-parts/article-parts',["require", "exports", "tslib", "aurelia-framework", "aurelia-binding", "aurelia-event-aggregator"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_binding_1, aurelia_event_aggregator_1) {
    "use strict";
    var ArticleParts = (function () {
        function ArticleParts(bindingEngine, eventAggregator) {
            this.bindingEngine = bindingEngine;
            this.eventAggregator = eventAggregator;
            this.parts = [];
            this.editMode = false;
            this.partsSubscriptions = [];
            this.partsChangedSubscription = null;
            this.eventSubscriptions = [];
        }
        ArticleParts.prototype.attached = function () {
            var _this = this;
            this.eventSubscriptions.push(this.eventAggregator.subscribe("article-edit-mode-changed", function (flag) { return _this.setEditMode(flag); }));
        };
        ArticleParts.prototype.setEditMode = function (flag) {
            this.editMode = flag;
            if (this.parts) {
                this.parts.forEach(function (item) {
                    item.editMode = flag;
                });
            }
        };
        ArticleParts.prototype.partsChanged = function (newValue) {
            var _this = this;
            if (newValue) {
                if (!this.partsChangedSubscription) {
                    this.partsChangedSubscription = this.bindingEngine.collectionObserver(this.parts).subscribe(function () { return _this.onPartsChanged(); });
                }
                this.renewPartsSubscriptions();
            }
        };
        ArticleParts.prototype.detached = function () {
            if (this.partsChangedSubscription) {
                this.partsChangedSubscription.dispose();
            }
            if (this.eventSubscriptions.length > 0) {
                this.eventSubscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
            }
            if (this.partsSubscriptions.length > 0) {
                this.partsSubscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
            }
        };
        ArticleParts.prototype.addPart = function () {
            var part = {
                type: "Unset",
                editMode: true,
                text: "",
                action: "Unset"
            };
            var index = this.parts.findIndex(function (p) { return p.type === part.type; });
            if (index === -1) {
                this.parts.push(part);
            }
        };
        ArticleParts.prototype.onPartsChanged = function () {
            this.renewPartsSubscriptions();
        };
        ArticleParts.prototype.renewPartsSubscriptions = function () {
            if (this.partsSubscriptions.length > 0) {
                this.partsSubscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
                this.partsSubscriptions = [];
            }
            if (this.parts && this.parts.length > 0) {
                var self_1 = this;
                this.parts.forEach(function (item) {
                    self_1.partsSubscriptions.push(self_1.bindingEngine.propertyObserver(item, 'action')
                        .subscribe(function (action) { return self_1.onPartActionChange(action); }));
                });
            }
        };
        ArticleParts.prototype.onPartActionChange = function (action) {
            switch (action) {
                case "Remove":
                    this.removeDeletedPart();
                    break;
                case "MoveUp":
                    this.movePartUp();
                    break;
                case "MoveDown":
                    this.movePartDown();
                    break;
                default:
            }
        };
        ArticleParts.prototype.removeDeletedPart = function () {
            var index = this.parts.findIndex(function (p) { return p.action === "Remove"; });
            if (index !== -1) {
                this.parts.splice(index, 1);
            }
        };
        ArticleParts.prototype.movePartUp = function () {
            var index = this.parts.findIndex(function (p) { return p.action === "MoveUp"; });
            if (index > 0) {
                this.parts.splice(index - 1, 0, this.parts.splice(index, 1)[0]);
                this.parts[index - 1].action = "Unset";
            }
        };
        ArticleParts.prototype.movePartDown = function () {
            var index = this.parts.findIndex(function (p) { return p.action === "MoveDown"; });
            if (index > -1 && index < this.parts.length - 1) {
                this.parts.splice(index + 1, 0, this.parts.splice(index, 1)[0]);
                this.parts[index + 1].action = "Unset";
            }
        };
        return ArticleParts;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Array)
    ], ArticleParts.prototype, "parts", void 0);
    ArticleParts = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_binding_1.BindingEngine, aurelia_event_aggregator_1.EventAggregator])
    ], ArticleParts);
    exports.ArticleParts = ArticleParts;
});

define('aurelia-validation/property-info',["require", "exports", "aurelia-binding"], function (require, exports, aurelia_binding_1) {
    "use strict";
    function getObject(expression, objectExpression, source) {
        var value = objectExpression.evaluate(source, null);
        if (value === null || value === undefined || value instanceof Object) {
            return value;
        }
        /* tslint:disable */
        throw new Error("The '" + objectExpression + "' part of '" + expression + "' evaluates to " + value + " instead of an object, null or undefined.");
        /* tslint:enable */
    }
    /**
     * Retrieves the object and property name for the specified expression.
     * @param expression The expression
     * @param source The scope
     */
    function getPropertyInfo(expression, source) {
        var originalExpression = expression;
        while (expression instanceof aurelia_binding_1.BindingBehavior || expression instanceof aurelia_binding_1.ValueConverter) {
            expression = expression.expression;
        }
        var object;
        var propertyName;
        if (expression instanceof aurelia_binding_1.AccessScope) {
            object = source.bindingContext;
            propertyName = expression.name;
        }
        else if (expression instanceof aurelia_binding_1.AccessMember) {
            object = getObject(originalExpression, expression.object, source);
            propertyName = expression.name;
        }
        else if (expression instanceof aurelia_binding_1.AccessKeyed) {
            object = getObject(originalExpression, expression.object, source);
            propertyName = expression.key.evaluate(source);
        }
        else {
            throw new Error("Expression '" + originalExpression + "' is not compatible with the validate binding-behavior.");
        }
        if (object === null || object === undefined) {
            return null;
        }
        return { object: object, propertyName: propertyName };
    }
    exports.getPropertyInfo = getPropertyInfo;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('aurelia-validation/validate-binding-behavior',["require", "exports", "aurelia-task-queue", "./validate-trigger", "./validate-binding-behavior-base"], function (require, exports, aurelia_task_queue_1, validate_trigger_1, validate_binding_behavior_base_1) {
    "use strict";
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the validate trigger specified by the associated controller's
     * validateTrigger property occurs.
     */
    var ValidateBindingBehavior = (function (_super) {
        __extends(ValidateBindingBehavior, _super);
        function ValidateBindingBehavior() {
            return _super.apply(this, arguments) || this;
        }
        ValidateBindingBehavior.prototype.getValidateTrigger = function (controller) {
            return controller.validateTrigger;
        };
        return ValidateBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    ValidateBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
    exports.ValidateBindingBehavior = ValidateBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property will be validated
     * manually, by calling controller.validate(). No automatic validation
     * triggered by data-entry or blur will occur.
     */
    var ValidateManuallyBindingBehavior = (function (_super) {
        __extends(ValidateManuallyBindingBehavior, _super);
        function ValidateManuallyBindingBehavior() {
            return _super.apply(this, arguments) || this;
        }
        ValidateManuallyBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.manual;
        };
        return ValidateManuallyBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    ValidateManuallyBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
    exports.ValidateManuallyBindingBehavior = ValidateManuallyBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the associated element blurs.
     */
    var ValidateOnBlurBindingBehavior = (function (_super) {
        __extends(ValidateOnBlurBindingBehavior, _super);
        function ValidateOnBlurBindingBehavior() {
            return _super.apply(this, arguments) || this;
        }
        ValidateOnBlurBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.blur;
        };
        return ValidateOnBlurBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    ValidateOnBlurBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
    exports.ValidateOnBlurBindingBehavior = ValidateOnBlurBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the associated element is changed by the user, causing a change
     * to the model.
     */
    var ValidateOnChangeBindingBehavior = (function (_super) {
        __extends(ValidateOnChangeBindingBehavior, _super);
        function ValidateOnChangeBindingBehavior() {
            return _super.apply(this, arguments) || this;
        }
        ValidateOnChangeBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.change;
        };
        return ValidateOnChangeBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    ValidateOnChangeBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
    exports.ValidateOnChangeBindingBehavior = ValidateOnChangeBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the associated element blurs or is changed by the user, causing
     * a change to the model.
     */
    var ValidateOnChangeOrBlurBindingBehavior = (function (_super) {
        __extends(ValidateOnChangeOrBlurBindingBehavior, _super);
        function ValidateOnChangeOrBlurBindingBehavior() {
            return _super.apply(this, arguments) || this;
        }
        ValidateOnChangeOrBlurBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.changeOrBlur;
        };
        return ValidateOnChangeOrBlurBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    ValidateOnChangeOrBlurBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
    exports.ValidateOnChangeOrBlurBindingBehavior = ValidateOnChangeOrBlurBindingBehavior;
});

define('aurelia-validation/validate-trigger',["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Validation triggers.
     */
    exports.validateTrigger = {
        /**
         * Manual validation.  Use the controller's `validate()` and  `reset()` methods
         * to validate all bindings.
         */
        manual: 0,
        /**
         * Validate the binding when the binding's target element fires a DOM "blur" event.
         */
        blur: 1,
        /**
         * Validate the binding when it updates the model due to a change in the view.
         */
        change: 2,
        /**
         * Validate the binding when the binding's target element fires a DOM "blur" event and
         * when it updates the model due to a change in the view.
         */
        changeOrBlur: 3
    };
});

define('aurelia-validation/validate-binding-behavior-base',["require", "exports", "aurelia-dependency-injection", "aurelia-pal", "./validation-controller", "./validate-trigger"], function (require, exports, aurelia_dependency_injection_1, aurelia_pal_1, validation_controller_1, validate_trigger_1) {
    "use strict";
    /**
     * Binding behavior. Indicates the bound property should be validated.
     */
    var ValidateBindingBehaviorBase = (function () {
        function ValidateBindingBehaviorBase(taskQueue) {
            this.taskQueue = taskQueue;
        }
        /**
         * Gets the DOM element associated with the data-binding. Most of the time it's
         * the binding.target but sometimes binding.target is an aurelia custom element,
         * or custom attribute which is a javascript "class" instance, so we need to use
         * the controller's container to retrieve the actual DOM element.
         */
        ValidateBindingBehaviorBase.prototype.getTarget = function (binding, view) {
            var target = binding.target;
            // DOM element
            if (target instanceof Element) {
                return target;
            }
            // custom element or custom attribute
            for (var i = 0, ii = view.controllers.length; i < ii; i++) {
                var controller = view.controllers[i];
                if (controller.viewModel === target) {
                    var element = controller.container.get(aurelia_pal_1.DOM.Element);
                    if (element) {
                        return element;
                    }
                    throw new Error("Unable to locate target element for \"" + binding.sourceExpression + "\".");
                }
            }
            throw new Error("Unable to locate target element for \"" + binding.sourceExpression + "\".");
        };
        ValidateBindingBehaviorBase.prototype.bind = function (binding, source, rulesOrController, rules) {
            var _this = this;
            // identify the target element.
            var target = this.getTarget(binding, source);
            // locate the controller.
            var controller;
            if (rulesOrController instanceof validation_controller_1.ValidationController) {
                controller = rulesOrController;
            }
            else {
                controller = source.container.get(aurelia_dependency_injection_1.Optional.of(validation_controller_1.ValidationController));
                rules = rulesOrController;
            }
            if (controller === null) {
                throw new Error("A ValidationController has not been registered.");
            }
            controller.registerBinding(binding, target, rules);
            binding.validationController = controller;
            var trigger = this.getValidateTrigger(controller);
            /* tslint:disable:no-bitwise */
            if (trigger & validate_trigger_1.validateTrigger.change) {
                /* tslint:enable:no-bitwise */
                binding.standardUpdateSource = binding.updateSource;
                /* tslint:disable:only-arrow-functions */
                binding.updateSource = function (value) {
                    /* tslint:enable:only-arrow-functions */
                    this.standardUpdateSource(value);
                    this.validationController.validateBinding(this);
                };
            }
            /* tslint:disable:no-bitwise */
            if (trigger & validate_trigger_1.validateTrigger.blur) {
                /* tslint:enable:no-bitwise */
                binding.validateBlurHandler = function () {
                    _this.taskQueue.queueMicroTask(function () { return controller.validateBinding(binding); });
                };
                binding.validateTarget = target;
                target.addEventListener('blur', binding.validateBlurHandler);
            }
            if (trigger !== validate_trigger_1.validateTrigger.manual) {
                binding.standardUpdateTarget = binding.updateTarget;
                /* tslint:disable:only-arrow-functions */
                binding.updateTarget = function (value) {
                    /* tslint:enable:only-arrow-functions */
                    this.standardUpdateTarget(value);
                    this.validationController.resetBinding(this);
                };
            }
        };
        ValidateBindingBehaviorBase.prototype.unbind = function (binding) {
            // reset the binding to it's original state.
            if (binding.standardUpdateSource) {
                binding.updateSource = binding.standardUpdateSource;
                binding.standardUpdateSource = null;
            }
            if (binding.standardUpdateTarget) {
                binding.updateTarget = binding.standardUpdateTarget;
                binding.standardUpdateTarget = null;
            }
            if (binding.validateBlurHandler) {
                binding.validateTarget.removeEventListener('blur', binding.validateBlurHandler);
                binding.validateBlurHandler = null;
                binding.validateTarget = null;
            }
            binding.validationController.unregisterBinding(binding);
            binding.validationController = null;
        };
        return ValidateBindingBehaviorBase;
    }());
    exports.ValidateBindingBehaviorBase = ValidateBindingBehaviorBase;
});

define('aurelia-validation/validation-controller',["require", "exports", "./validator", "./validate-trigger", "./property-info", "./validate-result"], function (require, exports, validator_1, validate_trigger_1, property_info_1, validate_result_1) {
    "use strict";
    /**
     * Orchestrates validation.
     * Manages a set of bindings, renderers and objects.
     * Exposes the current list of validation results for binding purposes.
     */
    var ValidationController = (function () {
        function ValidationController(validator) {
            this.validator = validator;
            // Registered bindings (via the validate binding behavior)
            this.bindings = new Map();
            // Renderers that have been added to the controller instance.
            this.renderers = [];
            /**
             * Validation results that have been rendered by the controller.
             */
            this.results = [];
            /**
             * Validation errors that have been rendered by the controller.
             */
            this.errors = [];
            /**
             *  Whether the controller is currently validating.
             */
            this.validating = false;
            // Elements related to validation results that have been rendered.
            this.elements = new Map();
            // Objects that have been added to the controller instance (entity-style validation).
            this.objects = new Map();
            /**
             * The trigger that will invoke automatic validation of a property used in a binding.
             */
            this.validateTrigger = validate_trigger_1.validateTrigger.blur;
            // Promise that resolves when validation has completed.
            this.finishValidating = Promise.resolve();
        }
        /**
         * Adds an object to the set of objects that should be validated when validate is called.
         * @param object The object.
         * @param rules Optional. The rules. If rules aren't supplied the Validator implementation will lookup the rules.
         */
        ValidationController.prototype.addObject = function (object, rules) {
            this.objects.set(object, rules);
        };
        /**
         * Removes an object from the set of objects that should be validated when validate is called.
         * @param object The object.
         */
        ValidationController.prototype.removeObject = function (object) {
            this.objects.delete(object);
            this.processResultDelta('reset', this.results.filter(function (result) { return result.object === object; }), []);
        };
        /**
         * Adds and renders an error.
         */
        ValidationController.prototype.addError = function (message, object, propertyName) {
            if (propertyName === void 0) { propertyName = null; }
            var result = new validate_result_1.ValidateResult({}, object, propertyName, false, message);
            this.processResultDelta('validate', [], [result]);
            return result;
        };
        /**
         * Removes and unrenders an error.
         */
        ValidationController.prototype.removeError = function (result) {
            if (this.results.indexOf(result) !== -1) {
                this.processResultDelta('reset', [result], []);
            }
        };
        /**
         * Adds a renderer.
         * @param renderer The renderer.
         */
        ValidationController.prototype.addRenderer = function (renderer) {
            var _this = this;
            this.renderers.push(renderer);
            renderer.render({
                kind: 'validate',
                render: this.results.map(function (result) { return ({ result: result, elements: _this.elements.get(result) }); }),
                unrender: []
            });
        };
        /**
         * Removes a renderer.
         * @param renderer The renderer.
         */
        ValidationController.prototype.removeRenderer = function (renderer) {
            var _this = this;
            this.renderers.splice(this.renderers.indexOf(renderer), 1);
            renderer.render({
                kind: 'reset',
                render: [],
                unrender: this.results.map(function (result) { return ({ result: result, elements: _this.elements.get(result) }); })
            });
        };
        /**
         * Registers a binding with the controller.
         * @param binding The binding instance.
         * @param target The DOM element.
         * @param rules (optional) rules associated with the binding. Validator implementation specific.
         */
        ValidationController.prototype.registerBinding = function (binding, target, rules) {
            this.bindings.set(binding, { target: target, rules: rules, propertyInfo: null });
        };
        /**
         * Unregisters a binding with the controller.
         * @param binding The binding instance.
         */
        ValidationController.prototype.unregisterBinding = function (binding) {
            this.resetBinding(binding);
            this.bindings.delete(binding);
        };
        /**
         * Interprets the instruction and returns a predicate that will identify
         * relevant results in the list of rendered validation results.
         */
        ValidationController.prototype.getInstructionPredicate = function (instruction) {
            var _this = this;
            if (instruction) {
                var object_1 = instruction.object, propertyName_1 = instruction.propertyName, rules_1 = instruction.rules;
                var predicate_1;
                if (instruction.propertyName) {
                    predicate_1 = function (x) { return x.object === object_1 && x.propertyName === propertyName_1; };
                }
                else {
                    predicate_1 = function (x) { return x.object === object_1; };
                }
                if (rules_1) {
                    return function (x) { return predicate_1(x) && _this.validator.ruleExists(rules_1, x.rule); };
                }
                return predicate_1;
            }
            else {
                return function () { return true; };
            }
        };
        /**
         * Validates and renders results.
         * @param instruction Optional. Instructions on what to validate. If undefined, all
         * objects and bindings will be validated.
         */
        ValidationController.prototype.validate = function (instruction) {
            var _this = this;
            // Get a function that will process the validation instruction.
            var execute;
            if (instruction) {
                var object_2 = instruction.object, propertyName_2 = instruction.propertyName, rules_2 = instruction.rules;
                // if rules were not specified, check the object map.
                rules_2 = rules_2 || this.objects.get(object_2);
                // property specified?
                if (instruction.propertyName === undefined) {
                    // validate the specified object.
                    execute = function () { return _this.validator.validateObject(object_2, rules_2); };
                }
                else {
                    // validate the specified property.
                    execute = function () { return _this.validator.validateProperty(object_2, propertyName_2, rules_2); };
                }
            }
            else {
                // validate all objects and bindings.
                execute = function () {
                    var promises = [];
                    for (var _i = 0, _a = Array.from(_this.objects); _i < _a.length; _i++) {
                        var _b = _a[_i], object = _b[0], rules = _b[1];
                        promises.push(_this.validator.validateObject(object, rules));
                    }
                    for (var _c = 0, _d = Array.from(_this.bindings); _c < _d.length; _c++) {
                        var _e = _d[_c], binding = _e[0], rules = _e[1].rules;
                        var propertyInfo = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source);
                        if (!propertyInfo || _this.objects.has(propertyInfo.object)) {
                            continue;
                        }
                        promises.push(_this.validator.validateProperty(propertyInfo.object, propertyInfo.propertyName, rules));
                    }
                    return Promise.all(promises).then(function (resultSets) { return resultSets.reduce(function (a, b) { return a.concat(b); }, []); });
                };
            }
            // Wait for any existing validation to finish, execute the instruction, render the results.
            this.validating = true;
            var returnPromise = this.finishValidating
                .then(execute)
                .then(function (newResults) {
                var predicate = _this.getInstructionPredicate(instruction);
                var oldResults = _this.results.filter(predicate);
                _this.processResultDelta('validate', oldResults, newResults);
                if (returnPromise === _this.finishValidating) {
                    _this.validating = false;
                }
                var result = {
                    instruction: instruction,
                    valid: newResults.find(function (x) { return !x.valid; }) === undefined,
                    results: newResults
                };
                return result;
            })
                .catch(function (exception) {
                // recover, to enable subsequent calls to validate()
                _this.validating = false;
                _this.finishValidating = Promise.resolve();
                return Promise.reject(exception);
            });
            this.finishValidating = returnPromise;
            return returnPromise;
        };
        /**
         * Resets any rendered validation results (unrenders).
         * @param instruction Optional. Instructions on what to reset. If unspecified all rendered results
         * will be unrendered.
         */
        ValidationController.prototype.reset = function (instruction) {
            var predicate = this.getInstructionPredicate(instruction);
            var oldResults = this.results.filter(predicate);
            this.processResultDelta('reset', oldResults, []);
        };
        /**
         * Gets the elements associated with an object and propertyName (if any).
         */
        ValidationController.prototype.getAssociatedElements = function (_a) {
            var object = _a.object, propertyName = _a.propertyName;
            var elements = [];
            for (var _i = 0, _b = Array.from(this.bindings); _i < _b.length; _i++) {
                var _c = _b[_i], binding = _c[0], target = _c[1].target;
                var propertyInfo = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source);
                if (propertyInfo && propertyInfo.object === object && propertyInfo.propertyName === propertyName) {
                    elements.push(target);
                }
            }
            return elements;
        };
        ValidationController.prototype.processResultDelta = function (kind, oldResults, newResults) {
            // prepare the instruction.
            var instruction = {
                kind: kind,
                render: [],
                unrender: []
            };
            // create a shallow copy of newResults so we can mutate it without causing side-effects.
            newResults = newResults.slice(0);
            var _loop_1 = function (oldResult) {
                // get the elements associated with the old result.
                var elements = this_1.elements.get(oldResult);
                // remove the old result from the element map.
                this_1.elements.delete(oldResult);
                // create the unrender instruction.
                instruction.unrender.push({ result: oldResult, elements: elements });
                // determine if there's a corresponding new result for the old result we are unrendering.
                var newResultIndex = newResults.findIndex(function (x) { return x.rule === oldResult.rule && x.object === oldResult.object && x.propertyName === oldResult.propertyName; });
                if (newResultIndex === -1) {
                    // no corresponding new result... simple remove.
                    this_1.results.splice(this_1.results.indexOf(oldResult), 1);
                    if (!oldResult.valid) {
                        this_1.errors.splice(this_1.errors.indexOf(oldResult), 1);
                    }
                }
                else {
                    // there is a corresponding new result...        
                    var newResult = newResults.splice(newResultIndex, 1)[0];
                    // get the elements that are associated with the new result.
                    var elements_1 = this_1.getAssociatedElements(newResult);
                    this_1.elements.set(newResult, elements_1);
                    // create a render instruction for the new result.
                    instruction.render.push({ result: newResult, elements: elements_1 });
                    // do an in-place replacement of the old result with the new result.
                    // this ensures any repeats bound to this.results will not thrash.
                    this_1.results.splice(this_1.results.indexOf(oldResult), 1, newResult);
                    if (!oldResult.valid && newResult.valid) {
                        this_1.errors.splice(this_1.errors.indexOf(oldResult), 1);
                    }
                    else if (!oldResult.valid && !newResult.valid) {
                        this_1.errors.splice(this_1.errors.indexOf(oldResult), 1, newResult);
                    }
                    else if (!newResult.valid) {
                        this_1.errors.push(newResult);
                    }
                }
            };
            var this_1 = this;
            // create unrender instructions from the old results.
            for (var _i = 0, oldResults_1 = oldResults; _i < oldResults_1.length; _i++) {
                var oldResult = oldResults_1[_i];
                _loop_1(oldResult);
            }
            // create render instructions from the remaining new results.
            for (var _a = 0, newResults_1 = newResults; _a < newResults_1.length; _a++) {
                var result = newResults_1[_a];
                var elements = this.getAssociatedElements(result);
                instruction.render.push({ result: result, elements: elements });
                this.elements.set(result, elements);
                this.results.push(result);
                if (!result.valid) {
                    this.errors.push(result);
                }
            }
            // render.
            for (var _b = 0, _c = this.renderers; _b < _c.length; _b++) {
                var renderer = _c[_b];
                renderer.render(instruction);
            }
        };
        /**
         * Validates the property associated with a binding.
         */
        ValidationController.prototype.validateBinding = function (binding) {
            if (!binding.isBound) {
                return;
            }
            var propertyInfo = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source);
            var rules = undefined;
            var registeredBinding = this.bindings.get(binding);
            if (registeredBinding) {
                rules = registeredBinding.rules;
                registeredBinding.propertyInfo = propertyInfo;
            }
            if (!propertyInfo) {
                return;
            }
            var object = propertyInfo.object, propertyName = propertyInfo.propertyName;
            this.validate({ object: object, propertyName: propertyName, rules: rules });
        };
        /**
         * Resets the results for a property associated with a binding.
         */
        ValidationController.prototype.resetBinding = function (binding) {
            var registeredBinding = this.bindings.get(binding);
            var propertyInfo = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source);
            if (!propertyInfo && registeredBinding) {
                propertyInfo = registeredBinding.propertyInfo;
            }
            if (registeredBinding) {
                registeredBinding.propertyInfo = null;
            }
            if (!propertyInfo) {
                return;
            }
            var object = propertyInfo.object, propertyName = propertyInfo.propertyName;
            this.reset({ object: object, propertyName: propertyName });
        };
        return ValidationController;
    }());
    ValidationController.inject = [validator_1.Validator];
    exports.ValidationController = ValidationController;
});

define('aurelia-validation/validator',["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Validates objects and properties.
     */
    var Validator = (function () {
        function Validator() {
        }
        return Validator;
    }());
    exports.Validator = Validator;
});

define('aurelia-validation/validate-result',["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * The result of validating an individual validation rule.
     */
    var ValidateResult = (function () {
        /**
         * @param rule The rule associated with the result. Validator implementation specific.
         * @param object The object that was validated.
         * @param propertyName The name of the property that was validated.
         * @param error The error, if the result is a validation error.
         */
        function ValidateResult(rule, object, propertyName, valid, message) {
            if (message === void 0) { message = null; }
            this.rule = rule;
            this.object = object;
            this.propertyName = propertyName;
            this.valid = valid;
            this.message = message;
            this.id = ValidateResult.nextId++;
        }
        ValidateResult.prototype.toString = function () {
            return this.valid ? 'Valid.' : this.message;
        };
        return ValidateResult;
    }());
    ValidateResult.nextId = 0;
    exports.ValidateResult = ValidateResult;
});

define('aurelia-validation/validation-controller-factory',["require", "exports", "./validation-controller", "./validator"], function (require, exports, validation_controller_1, validator_1) {
    "use strict";
    /**
     * Creates ValidationController instances.
     */
    var ValidationControllerFactory = (function () {
        function ValidationControllerFactory(container) {
            this.container = container;
        }
        ValidationControllerFactory.get = function (container) {
            return new ValidationControllerFactory(container);
        };
        /**
         * Creates a new controller instance.
         */
        ValidationControllerFactory.prototype.create = function (validator) {
            if (!validator) {
                validator = this.container.get(validator_1.Validator);
            }
            return new validation_controller_1.ValidationController(validator);
        };
        /**
         * Creates a new controller and registers it in the current element's container so that it's
         * available to the validate binding behavior and renderers.
         */
        ValidationControllerFactory.prototype.createForCurrentScope = function (validator) {
            var controller = this.create(validator);
            this.container.registerInstance(validation_controller_1.ValidationController, controller);
            return controller;
        };
        return ValidationControllerFactory;
    }());
    exports.ValidationControllerFactory = ValidationControllerFactory;
    ValidationControllerFactory['protocol:aurelia:resolver'] = true;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-validation/validation-errors-custom-attribute',["require", "exports", "aurelia-binding", "aurelia-dependency-injection", "aurelia-templating", "./validation-controller"], function (require, exports, aurelia_binding_1, aurelia_dependency_injection_1, aurelia_templating_1, validation_controller_1) {
    "use strict";
    var ValidationErrorsCustomAttribute = (function () {
        function ValidationErrorsCustomAttribute(boundaryElement, controllerAccessor) {
            this.boundaryElement = boundaryElement;
            this.controllerAccessor = controllerAccessor;
            this.errors = [];
        }
        ValidationErrorsCustomAttribute.prototype.sort = function () {
            this.errors.sort(function (a, b) {
                if (a.targets[0] === b.targets[0]) {
                    return 0;
                }
                /* tslint:disable:no-bitwise */
                return a.targets[0].compareDocumentPosition(b.targets[0]) & 2 ? 1 : -1;
                /* tslint:enable:no-bitwise */
            });
        };
        ValidationErrorsCustomAttribute.prototype.interestingElements = function (elements) {
            var _this = this;
            return elements.filter(function (e) { return _this.boundaryElement.contains(e); });
        };
        ValidationErrorsCustomAttribute.prototype.render = function (instruction) {
            var _loop_1 = function (result) {
                var index = this_1.errors.findIndex(function (x) { return x.error === result; });
                if (index !== -1) {
                    this_1.errors.splice(index, 1);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
                var result = _a[_i].result;
                _loop_1(result);
            }
            for (var _b = 0, _c = instruction.render; _b < _c.length; _b++) {
                var _d = _c[_b], result = _d.result, elements = _d.elements;
                if (result.valid) {
                    continue;
                }
                var targets = this.interestingElements(elements);
                if (targets.length) {
                    this.errors.push({ error: result, targets: targets });
                }
            }
            this.sort();
            this.value = this.errors;
        };
        ValidationErrorsCustomAttribute.prototype.bind = function () {
            this.controllerAccessor().addRenderer(this);
            this.value = this.errors;
        };
        ValidationErrorsCustomAttribute.prototype.unbind = function () {
            this.controllerAccessor().removeRenderer(this);
        };
        return ValidationErrorsCustomAttribute;
    }());
    ValidationErrorsCustomAttribute.inject = [Element, aurelia_dependency_injection_1.Lazy.of(validation_controller_1.ValidationController)];
    ValidationErrorsCustomAttribute = __decorate([
        aurelia_templating_1.customAttribute('validation-errors', aurelia_binding_1.bindingMode.twoWay)
    ], ValidationErrorsCustomAttribute);
    exports.ValidationErrorsCustomAttribute = ValidationErrorsCustomAttribute;
});

define('aurelia-validation/validation-renderer-custom-attribute',["require", "exports", "./validation-controller"], function (require, exports, validation_controller_1) {
    "use strict";
    var ValidationRendererCustomAttribute = (function () {
        function ValidationRendererCustomAttribute() {
        }
        ValidationRendererCustomAttribute.prototype.created = function (view) {
            this.container = view.container;
        };
        ValidationRendererCustomAttribute.prototype.bind = function () {
            this.controller = this.container.get(validation_controller_1.ValidationController);
            this.renderer = this.container.get(this.value);
            this.controller.addRenderer(this.renderer);
        };
        ValidationRendererCustomAttribute.prototype.unbind = function () {
            this.controller.removeRenderer(this.renderer);
            this.controller = null;
            this.renderer = null;
        };
        return ValidationRendererCustomAttribute;
    }());
    exports.ValidationRendererCustomAttribute = ValidationRendererCustomAttribute;
});

define('aurelia-validation/implementation/rules',["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Sets, unsets and retrieves rules on an object or constructor function.
     */
    var Rules = (function () {
        function Rules() {
        }
        /**
         * Applies the rules to a target.
         */
        Rules.set = function (target, rules) {
            if (target instanceof Function) {
                target = target.prototype;
            }
            Object.defineProperty(target, Rules.key, { enumerable: false, configurable: false, writable: true, value: rules });
        };
        /**
         * Removes rules from a target.
         */
        Rules.unset = function (target) {
            if (target instanceof Function) {
                target = target.prototype;
            }
            target[Rules.key] = null;
        };
        /**
         * Retrieves the target's rules.
         */
        Rules.get = function (target) {
            return target[Rules.key] || null;
        };
        return Rules;
    }());
    /**
     * The name of the property that stores the rules.
     */
    Rules.key = '__rules__';
    exports.Rules = Rules;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('aurelia-validation/implementation/standard-validator',["require", "exports", "aurelia-templating", "../validator", "../validate-result", "./rules", "./validation-messages"], function (require, exports, aurelia_templating_1, validator_1, validate_result_1, rules_1, validation_messages_1) {
    "use strict";
    /**
     * Validates.
     * Responsible for validating objects and properties.
     */
    var StandardValidator = (function (_super) {
        __extends(StandardValidator, _super);
        function StandardValidator(messageProvider, resources) {
            var _this = _super.call(this) || this;
            _this.messageProvider = messageProvider;
            _this.lookupFunctions = resources.lookupFunctions;
            _this.getDisplayName = messageProvider.getDisplayName.bind(messageProvider);
            return _this;
        }
        /**
         * Validates the specified property.
         * @param object The object to validate.
         * @param propertyName The name of the property to validate.
         * @param rules Optional. If unspecified, the rules will be looked up using the metadata
         * for the object created by ValidationRules....on(class/object)
         */
        StandardValidator.prototype.validateProperty = function (object, propertyName, rules) {
            return this.validate(object, propertyName, rules || null);
        };
        /**
         * Validates all rules for specified object and it's properties.
         * @param object The object to validate.
         * @param rules Optional. If unspecified, the rules will be looked up using the metadata
         * for the object created by ValidationRules....on(class/object)
         */
        StandardValidator.prototype.validateObject = function (object, rules) {
            return this.validate(object, null, rules || null);
        };
        /**
         * Determines whether a rule exists in a set of rules.
         * @param rules The rules to search.
         * @parem rule The rule to find.
         */
        StandardValidator.prototype.ruleExists = function (rules, rule) {
            var i = rules.length;
            while (i--) {
                if (rules[i].indexOf(rule) !== -1) {
                    return true;
                }
            }
            return false;
        };
        StandardValidator.prototype.getMessage = function (rule, object, value) {
            var expression = rule.message || this.messageProvider.getMessage(rule.messageKey);
            var _a = rule.property, propertyName = _a.name, displayName = _a.displayName;
            if (propertyName !== null) {
                displayName = this.messageProvider.getDisplayName(propertyName, displayName);
            }
            var overrideContext = {
                $displayName: displayName,
                $propertyName: propertyName,
                $value: value,
                $object: object,
                $config: rule.config,
                $getDisplayName: this.getDisplayName
            };
            return expression.evaluate({ bindingContext: object, overrideContext: overrideContext }, this.lookupFunctions);
        };
        StandardValidator.prototype.validateRuleSequence = function (object, propertyName, ruleSequence, sequence, results) {
            var _this = this;
            // are we validating all properties or a single property?
            var validateAllProperties = propertyName === null || propertyName === undefined;
            var rules = ruleSequence[sequence];
            var allValid = true;
            // validate each rule.
            var promises = [];
            var _loop_1 = function (i) {
                var rule = rules[i];
                // is the rule related to the property we're validating.
                if (!validateAllProperties && rule.property.name !== propertyName) {
                    return "continue";
                }
                // is this a conditional rule? is the condition met?
                if (rule.when && !rule.when(object)) {
                    return "continue";
                }
                // validate.
                var value = rule.property.name === null ? object : object[rule.property.name];
                var promiseOrBoolean = rule.condition(value, object);
                if (!(promiseOrBoolean instanceof Promise)) {
                    promiseOrBoolean = Promise.resolve(promiseOrBoolean);
                }
                promises.push(promiseOrBoolean.then(function (valid) {
                    var message = valid ? null : _this.getMessage(rule, object, value);
                    results.push(new validate_result_1.ValidateResult(rule, object, rule.property.name, valid, message));
                    allValid = allValid && valid;
                    return valid;
                }));
            };
            for (var i = 0; i < rules.length; i++) {
                _loop_1(i);
            }
            return Promise.all(promises)
                .then(function () {
                sequence++;
                if (allValid && sequence < ruleSequence.length) {
                    return _this.validateRuleSequence(object, propertyName, ruleSequence, sequence, results);
                }
                return results;
            });
        };
        StandardValidator.prototype.validate = function (object, propertyName, rules) {
            // rules specified?
            if (!rules) {
                // no. attempt to locate the rules.
                rules = rules_1.Rules.get(object);
            }
            // any rules?
            if (!rules) {
                return Promise.resolve([]);
            }
            return this.validateRuleSequence(object, propertyName, rules, 0, []);
        };
        return StandardValidator;
    }(validator_1.Validator));
    StandardValidator.inject = [validation_messages_1.ValidationMessageProvider, aurelia_templating_1.ViewResources];
    exports.StandardValidator = StandardValidator;
});

define('aurelia-validation/implementation/validation-messages',["require", "exports", "./validation-parser"], function (require, exports, validation_parser_1) {
    "use strict";
    /**
     * Dictionary of validation messages. [messageKey]: messageExpression
     */
    exports.validationMessages = {
        /**
         * The default validation message. Used with rules that have no standard message.
         */
        default: "${$displayName} is invalid.",
        required: "${$displayName} is required.",
        matches: "${$displayName} is not correctly formatted.",
        email: "${$displayName} is not a valid email.",
        minLength: "${$displayName} must be at least ${$config.length} character${$config.length === 1 ? '' : 's'}.",
        maxLength: "${$displayName} cannot be longer than ${$config.length} character${$config.length === 1 ? '' : 's'}.",
        minItems: "${$displayName} must contain at least ${$config.count} item${$config.count === 1 ? '' : 's'}.",
        maxItems: "${$displayName} cannot contain more than ${$config.count} item${$config.count === 1 ? '' : 's'}.",
        equals: "${$displayName} must be ${$config.expectedValue}.",
    };
    /**
     * Retrieves validation messages and property display names.
     */
    var ValidationMessageProvider = (function () {
        function ValidationMessageProvider(parser) {
            this.parser = parser;
        }
        /**
         * Returns a message binding expression that corresponds to the key.
         * @param key The message key.
         */
        ValidationMessageProvider.prototype.getMessage = function (key) {
            var message;
            if (key in exports.validationMessages) {
                message = exports.validationMessages[key];
            }
            else {
                message = exports.validationMessages['default'];
            }
            return this.parser.parseMessage(message);
        };
        /**
         * Formulates a property display name using the property name and the configured
         * displayName (if provided).
         * Override this with your own custom logic.
         * @param propertyName The property name.
         */
        ValidationMessageProvider.prototype.getDisplayName = function (propertyName, displayName) {
            if (displayName !== null && displayName !== undefined) {
                return displayName;
            }
            // split on upper-case letters.
            var words = propertyName.split(/(?=[A-Z])/).join(' ');
            // capitalize first letter.
            return words.charAt(0).toUpperCase() + words.slice(1);
        };
        return ValidationMessageProvider;
    }());
    ValidationMessageProvider.inject = [validation_parser_1.ValidationParser];
    exports.ValidationMessageProvider = ValidationMessageProvider;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('aurelia-validation/implementation/validation-parser',["require", "exports", "aurelia-binding", "aurelia-templating", "./util", "aurelia-logging"], function (require, exports, aurelia_binding_1, aurelia_templating_1, util_1, LogManager) {
    "use strict";
    var ValidationParser = (function () {
        function ValidationParser(parser, bindinqLanguage) {
            this.parser = parser;
            this.bindinqLanguage = bindinqLanguage;
            this.emptyStringExpression = new aurelia_binding_1.LiteralString('');
            this.nullExpression = new aurelia_binding_1.LiteralPrimitive(null);
            this.undefinedExpression = new aurelia_binding_1.LiteralPrimitive(undefined);
            this.cache = {};
        }
        ValidationParser.prototype.parseMessage = function (message) {
            if (this.cache[message] !== undefined) {
                return this.cache[message];
            }
            var parts = this.bindinqLanguage.parseInterpolation(null, message);
            if (parts === null) {
                return new aurelia_binding_1.LiteralString(message);
            }
            var expression = new aurelia_binding_1.LiteralString(parts[0]);
            for (var i = 1; i < parts.length; i += 2) {
                expression = new aurelia_binding_1.Binary('+', expression, new aurelia_binding_1.Binary('+', this.coalesce(parts[i]), new aurelia_binding_1.LiteralString(parts[i + 1])));
            }
            MessageExpressionValidator.validate(expression, message);
            this.cache[message] = expression;
            return expression;
        };
        ValidationParser.prototype.parseProperty = function (property) {
            if (util_1.isString(property)) {
                return { name: property, displayName: null };
            }
            var accessor = this.getAccessorExpression(property.toString());
            if (accessor instanceof aurelia_binding_1.AccessScope
                || accessor instanceof aurelia_binding_1.AccessMember && accessor.object instanceof aurelia_binding_1.AccessScope) {
                return {
                    name: accessor.name,
                    displayName: null
                };
            }
            throw new Error("Invalid subject: \"" + accessor + "\"");
        };
        ValidationParser.prototype.coalesce = function (part) {
            // part === null || part === undefined ? '' : part
            return new aurelia_binding_1.Conditional(new aurelia_binding_1.Binary('||', new aurelia_binding_1.Binary('===', part, this.nullExpression), new aurelia_binding_1.Binary('===', part, this.undefinedExpression)), this.emptyStringExpression, new aurelia_binding_1.CallMember(part, 'toString', []));
        };
        ValidationParser.prototype.getAccessorExpression = function (fn) {
            var classic = /^function\s*\([$_\w\d]+\)\s*\{\s*(?:"use strict";)?\s*return\s+[$_\w\d]+\.([$_\w\d]+)\s*;?\s*\}$/;
            var arrow = /^\(?[$_\w\d]+\)?\s*=>\s*[$_\w\d]+\.([$_\w\d]+)$/;
            var match = classic.exec(fn) || arrow.exec(fn);
            if (match === null) {
                throw new Error("Unable to parse accessor function:\n" + fn);
            }
            return this.parser.parse(match[1]);
        };
        return ValidationParser;
    }());
    ValidationParser.inject = [aurelia_binding_1.Parser, aurelia_templating_1.BindingLanguage];
    exports.ValidationParser = ValidationParser;
    var MessageExpressionValidator = (function (_super) {
        __extends(MessageExpressionValidator, _super);
        function MessageExpressionValidator(originalMessage) {
            var _this = _super.call(this, []) || this;
            _this.originalMessage = originalMessage;
            return _this;
        }
        MessageExpressionValidator.validate = function (expression, originalMessage) {
            var visitor = new MessageExpressionValidator(originalMessage);
            expression.accept(visitor);
        };
        MessageExpressionValidator.prototype.visitAccessScope = function (access) {
            if (access.ancestor !== 0) {
                throw new Error('$parent is not permitted in validation message expressions.');
            }
            if (['displayName', 'propertyName', 'value', 'object', 'config', 'getDisplayName'].indexOf(access.name) !== -1) {
                LogManager.getLogger('aurelia-validation')
                    .warn("Did you mean to use \"$" + access.name + "\" instead of \"" + access.name + "\" in this validation message template: \"" + this.originalMessage + "\"?");
            }
        };
        return MessageExpressionValidator;
    }(aurelia_binding_1.Unparser));
    exports.MessageExpressionValidator = MessageExpressionValidator;
});

define('aurelia-validation/implementation/util',["require", "exports"], function (require, exports) {
    "use strict";
    function isString(value) {
        return Object.prototype.toString.call(value) === '[object String]';
    }
    exports.isString = isString;
});

define('aurelia-validation/implementation/validation-rules',["require", "exports", "./util", "./rules", "./validation-messages"], function (require, exports, util_1, rules_1, validation_messages_1) {
    "use strict";
    /**
     * Part of the fluent rule API. Enables customizing property rules.
     */
    var FluentRuleCustomizer = (function () {
        function FluentRuleCustomizer(property, condition, config, fluentEnsure, fluentRules, parser) {
            if (config === void 0) { config = {}; }
            this.fluentEnsure = fluentEnsure;
            this.fluentRules = fluentRules;
            this.parser = parser;
            this.rule = {
                property: property,
                condition: condition,
                config: config,
                when: null,
                messageKey: 'default',
                message: null,
                sequence: fluentRules.sequence
            };
            this.fluentEnsure._addRule(this.rule);
        }
        /**
         * Validate subsequent rules after previously declared rules have
         * been validated successfully. Use to postpone validation of costly
         * rules until less expensive rules pass validation.
         */
        FluentRuleCustomizer.prototype.then = function () {
            this.fluentRules.sequence++;
            return this;
        };
        /**
         * Specifies the key to use when looking up the rule's validation message.
         */
        FluentRuleCustomizer.prototype.withMessageKey = function (key) {
            this.rule.messageKey = key;
            this.rule.message = null;
            return this;
        };
        /**
         * Specifies rule's validation message.
         */
        FluentRuleCustomizer.prototype.withMessage = function (message) {
            this.rule.messageKey = 'custom';
            this.rule.message = this.parser.parseMessage(message);
            return this;
        };
        /**
         * Specifies a condition that must be met before attempting to validate the rule.
         * @param condition A function that accepts the object as a parameter and returns true
         * or false whether the rule should be evaluated.
         */
        FluentRuleCustomizer.prototype.when = function (condition) {
            this.rule.when = condition;
            return this;
        };
        /**
         * Tags the rule instance, enabling the rule to be found easily
         * using ValidationRules.taggedRules(rules, tag)
         */
        FluentRuleCustomizer.prototype.tag = function (tag) {
            this.rule.tag = tag;
            return this;
        };
        ///// FluentEnsure APIs /////
        /**
         * Target a property with validation rules.
         * @param property The property to target. Can be the property name or a property accessor function.
         */
        FluentRuleCustomizer.prototype.ensure = function (subject) {
            return this.fluentEnsure.ensure(subject);
        };
        /**
         * Targets an object with validation rules.
         */
        FluentRuleCustomizer.prototype.ensureObject = function () {
            return this.fluentEnsure.ensureObject();
        };
        Object.defineProperty(FluentRuleCustomizer.prototype, "rules", {
            /**
             * Rules that have been defined using the fluent API.
             */
            get: function () {
                return this.fluentEnsure.rules;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Applies the rules to a class or object, making them discoverable by the StandardValidator.
         * @param target A class or object.
         */
        FluentRuleCustomizer.prototype.on = function (target) {
            return this.fluentEnsure.on(target);
        };
        ///////// FluentRules APIs /////////
        /**
         * Applies an ad-hoc rule function to the ensured property or object.
         * @param condition The function to validate the rule.
         * Will be called with two arguments, the property value and the object.
         * Should return a boolean or a Promise that resolves to a boolean.
         */
        FluentRuleCustomizer.prototype.satisfies = function (condition, config) {
            return this.fluentRules.satisfies(condition, config);
        };
        /**
         * Applies a rule by name.
         * @param name The name of the custom or standard rule.
         * @param args The rule's arguments.
         */
        FluentRuleCustomizer.prototype.satisfiesRule = function (name) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return (_a = this.fluentRules).satisfiesRule.apply(_a, [name].concat(args));
            var _a;
        };
        /**
         * Applies the "required" rule to the property.
         * The value cannot be null, undefined or whitespace.
         */
        FluentRuleCustomizer.prototype.required = function () {
            return this.fluentRules.required();
        };
        /**
         * Applies the "matches" rule to the property.
         * Value must match the specified regular expression.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.matches = function (regex) {
            return this.fluentRules.matches(regex);
        };
        /**
         * Applies the "email" rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.email = function () {
            return this.fluentRules.email();
        };
        /**
         * Applies the "minLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.minLength = function (length) {
            return this.fluentRules.minLength(length);
        };
        /**
         * Applies the "maxLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.maxLength = function (length) {
            return this.fluentRules.maxLength(length);
        };
        /**
         * Applies the "minItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRuleCustomizer.prototype.minItems = function (count) {
            return this.fluentRules.minItems(count);
        };
        /**
         * Applies the "maxItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRuleCustomizer.prototype.maxItems = function (count) {
            return this.fluentRules.maxItems(count);
        };
        /**
         * Applies the "equals" validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.equals = function (expectedValue) {
            return this.fluentRules.equals(expectedValue);
        };
        return FluentRuleCustomizer;
    }());
    exports.FluentRuleCustomizer = FluentRuleCustomizer;
    /**
     * Part of the fluent rule API. Enables applying rules to properties and objects.
     */
    var FluentRules = (function () {
        function FluentRules(fluentEnsure, parser, property) {
            this.fluentEnsure = fluentEnsure;
            this.parser = parser;
            this.property = property;
            /**
             * Current rule sequence number. Used to postpone evaluation of rules until rules
             * with lower sequence number have successfully validated. The "then" fluent API method
             * manages this property, there's usually no need to set it directly.
             */
            this.sequence = 0;
        }
        /**
         * Sets the display name of the ensured property.
         */
        FluentRules.prototype.displayName = function (name) {
            this.property.displayName = name;
            return this;
        };
        /**
         * Applies an ad-hoc rule function to the ensured property or object.
         * @param condition The function to validate the rule.
         * Will be called with two arguments, the property value and the object.
         * Should return a boolean or a Promise that resolves to a boolean.
         */
        FluentRules.prototype.satisfies = function (condition, config) {
            return new FluentRuleCustomizer(this.property, condition, config, this.fluentEnsure, this, this.parser);
        };
        /**
         * Applies a rule by name.
         * @param name The name of the custom or standard rule.
         * @param args The rule's arguments.
         */
        FluentRules.prototype.satisfiesRule = function (name) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var rule = FluentRules.customRules[name];
            if (!rule) {
                // standard rule?
                rule = this[name];
                if (rule instanceof Function) {
                    return rule.call.apply(rule, [this].concat(args));
                }
                throw new Error("Rule with name \"" + name + "\" does not exist.");
            }
            var config = rule.argsToConfig ? rule.argsToConfig.apply(rule, args) : undefined;
            return this.satisfies(function (value, obj) {
                return (_a = rule.condition).call.apply(_a, [_this, value, obj].concat(args));
                var _a;
            }, config)
                .withMessageKey(name);
        };
        /**
         * Applies the "required" rule to the property.
         * The value cannot be null, undefined or whitespace.
         */
        FluentRules.prototype.required = function () {
            return this.satisfies(function (value) {
                return value !== null
                    && value !== undefined
                    && !(util_1.isString(value) && !/\S/.test(value));
            }).withMessageKey('required');
        };
        /**
         * Applies the "matches" rule to the property.
         * Value must match the specified regular expression.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.matches = function (regex) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || regex.test(value); })
                .withMessageKey('matches');
        };
        /**
         * Applies the "email" rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.email = function () {
            // regex from https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
            /* tslint:disable:max-line-length */
            return this.matches(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
                .withMessageKey('email');
        };
        /**
         * Applies the "minLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.minLength = function (length) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || value.length >= length; }, { length: length })
                .withMessageKey('minLength');
        };
        /**
         * Applies the "maxLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.maxLength = function (length) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || value.length <= length; }, { length: length })
                .withMessageKey('maxLength');
        };
        /**
         * Applies the "minItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRules.prototype.minItems = function (count) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length >= count; }, { count: count })
                .withMessageKey('minItems');
        };
        /**
         * Applies the "maxItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRules.prototype.maxItems = function (count) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length <= count; }, { count: count })
                .withMessageKey('maxItems');
        };
        /**
         * Applies the "equals" validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRules.prototype.equals = function (expectedValue) {
            return this.satisfies(function (value) { return value === null || value === undefined || value === '' || value === expectedValue; }, { expectedValue: expectedValue })
                .withMessageKey('equals');
        };
        return FluentRules;
    }());
    FluentRules.customRules = {};
    exports.FluentRules = FluentRules;
    /**
     * Part of the fluent rule API. Enables targeting properties and objects with rules.
     */
    var FluentEnsure = (function () {
        function FluentEnsure(parser) {
            this.parser = parser;
            /**
             * Rules that have been defined using the fluent API.
             */
            this.rules = [];
        }
        /**
         * Target a property with validation rules.
         * @param property The property to target. Can be the property name or a property accessor
         * function.
         */
        FluentEnsure.prototype.ensure = function (property) {
            this.assertInitialized();
            return new FluentRules(this, this.parser, this.parser.parseProperty(property));
        };
        /**
         * Targets an object with validation rules.
         */
        FluentEnsure.prototype.ensureObject = function () {
            this.assertInitialized();
            return new FluentRules(this, this.parser, { name: null, displayName: null });
        };
        /**
         * Applies the rules to a class or object, making them discoverable by the StandardValidator.
         * @param target A class or object.
         */
        FluentEnsure.prototype.on = function (target) {
            rules_1.Rules.set(target, this.rules);
            return this;
        };
        /**
         * Adds a rule definition to the sequenced ruleset.
         */
        FluentEnsure.prototype._addRule = function (rule) {
            while (this.rules.length < rule.sequence + 1) {
                this.rules.push([]);
            }
            this.rules[rule.sequence].push(rule);
        };
        FluentEnsure.prototype.assertInitialized = function () {
            if (this.parser) {
                return;
            }
            throw new Error("Did you forget to add \".plugin('aurelia-validation)\" to your main.js?");
        };
        return FluentEnsure;
    }());
    exports.FluentEnsure = FluentEnsure;
    /**
     * Fluent rule definition API.
     */
    var ValidationRules = (function () {
        function ValidationRules() {
        }
        ValidationRules.initialize = function (parser) {
            ValidationRules.parser = parser;
        };
        /**
         * Target a property with validation rules.
         * @param property The property to target. Can be the property name or a property accessor function.
         */
        ValidationRules.ensure = function (property) {
            return new FluentEnsure(ValidationRules.parser).ensure(property);
        };
        /**
         * Targets an object with validation rules.
         */
        ValidationRules.ensureObject = function () {
            return new FluentEnsure(ValidationRules.parser).ensureObject();
        };
        /**
         * Defines a custom rule.
         * @param name The name of the custom rule. Also serves as the message key.
         * @param condition The rule function.
         * @param message The message expression
         * @param argsToConfig A function that maps the rule's arguments to a "config"
         * object that can be used when evaluating the message expression.
         */
        ValidationRules.customRule = function (name, condition, message, argsToConfig) {
            validation_messages_1.validationMessages[name] = message;
            FluentRules.customRules[name] = { condition: condition, argsToConfig: argsToConfig };
        };
        /**
         * Returns rules with the matching tag.
         * @param rules The rules to search.
         * @param tag The tag to search for.
         */
        ValidationRules.taggedRules = function (rules, tag) {
            return rules.map(function (x) { return x.filter(function (r) { return r.tag === tag; }); });
        };
        /**
         * Removes the rules from a class or object.
         * @param target A class or object.
         */
        ValidationRules.off = function (target) {
            rules_1.Rules.unset(target);
        };
        return ValidationRules;
    }());
    exports.ValidationRules = ValidationRules;
});

define('aurelia-dialog/ai-dialog',['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AiDialog = undefined;

  

  var _dec, _dec2, _class;

  var AiDialog = exports.AiDialog = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n  </template>\n'), _dec(_class = _dec2(_class = function AiDialog() {
    
  }) || _class) || _class);
});
define('aurelia-dialog/ai-dialog-header',['exports', 'aurelia-templating', './dialog-controller'], function (exports, _aureliaTemplating, _dialogController) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AiDialogHeader = undefined;

  

  var _dec, _dec2, _class, _class2, _temp;

  var AiDialogHeader = exports.AiDialogHeader = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-header'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <button type="button" class="dialog-close" aria-label="Close" if.bind="!controller.settings.lock" click.trigger="controller.cancel()">\n      <span aria-hidden="true">&times;</span>\n    </button>\n\n    <div class="dialog-header-content">\n      <slot></slot>\n    </div>\n  </template>\n'), _dec(_class = _dec2(_class = (_temp = _class2 = function AiDialogHeader(controller) {
    

    this.controller = controller;
  }, _class2.inject = [_dialogController.DialogController], _temp)) || _class) || _class);
});
define('aurelia-dialog/dialog-controller',['exports', './lifecycle', './dialog-result'], function (exports, _lifecycle, _dialogResult) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DialogController = undefined;

  

  var DialogController = exports.DialogController = function () {
    function DialogController(renderer, settings, resolve, reject) {
      

      this.renderer = renderer;
      this.settings = settings;
      this._resolve = resolve;
      this._reject = reject;
    }

    DialogController.prototype.ok = function ok(output) {
      return this.close(true, output);
    };

    DialogController.prototype.cancel = function cancel(output) {
      return this.close(false, output);
    };

    DialogController.prototype.error = function error(message) {
      var _this = this;

      return (0, _lifecycle.invokeLifecycle)(this.viewModel, 'deactivate').then(function () {
        return _this.renderer.hideDialog(_this);
      }).then(function () {
        _this.controller.unbind();
        _this._reject(message);
      });
    };

    DialogController.prototype.close = function close(ok, output) {
      var _this2 = this;

      if (this._closePromise) {
        return this._closePromise;
      }

      this._closePromise = (0, _lifecycle.invokeLifecycle)(this.viewModel, 'canDeactivate').then(function (canDeactivate) {
        if (canDeactivate) {
          return (0, _lifecycle.invokeLifecycle)(_this2.viewModel, 'deactivate').then(function () {
            return _this2.renderer.hideDialog(_this2);
          }).then(function () {
            var result = new _dialogResult.DialogResult(!ok, output);
            _this2.controller.unbind();
            _this2._resolve(result);
            return result;
          });
        }

        _this2._closePromise = undefined;
      }, function (e) {
        _this2._closePromise = undefined;
        return Promise.reject(e);
      });

      return this._closePromise;
    };

    return DialogController;
  }();
});
define('aurelia-dialog/lifecycle',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.invokeLifecycle = invokeLifecycle;
  function invokeLifecycle(instance, name, model) {
    if (typeof instance[name] === 'function') {
      var result = instance[name](model);

      if (result instanceof Promise) {
        return result;
      }

      if (result !== null && result !== undefined) {
        return Promise.resolve(result);
      }

      return Promise.resolve(true);
    }

    return Promise.resolve(true);
  }
});
define('aurelia-dialog/dialog-result',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var DialogResult = exports.DialogResult = function DialogResult(cancelled, output) {
    

    this.wasCancelled = false;

    this.wasCancelled = cancelled;
    this.output = output;
  };
});
define('aurelia-dialog/ai-dialog-body',['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AiDialogBody = undefined;

  

  var _dec, _dec2, _class;

  var AiDialogBody = exports.AiDialogBody = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-body'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n  </template>\n'), _dec(_class = _dec2(_class = function AiDialogBody() {
    
  }) || _class) || _class);
});
define('aurelia-dialog/ai-dialog-footer',['exports', 'aurelia-templating', './dialog-controller'], function (exports, _aureliaTemplating, _dialogController) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AiDialogFooter = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _class3, _temp;

  var AiDialogFooter = exports.AiDialogFooter = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-footer'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n\n    <template if.bind="buttons.length > 0">\n      <button type="button" class="btn btn-default" repeat.for="button of buttons" click.trigger="close(button)">${button}</button>\n    </template>\n  </template>\n'), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
    function AiDialogFooter(controller) {
      

      _initDefineProp(this, 'buttons', _descriptor, this);

      _initDefineProp(this, 'useDefaultButtons', _descriptor2, this);

      this.controller = controller;
    }

    AiDialogFooter.prototype.close = function close(buttonValue) {
      if (AiDialogFooter.isCancelButton(buttonValue)) {
        this.controller.cancel(buttonValue);
      } else {
        this.controller.ok(buttonValue);
      }
    };

    AiDialogFooter.prototype.useDefaultButtonsChanged = function useDefaultButtonsChanged(newValue) {
      if (newValue) {
        this.buttons = ['Cancel', 'Ok'];
      }
    };

    AiDialogFooter.isCancelButton = function isCancelButton(value) {
      return value === 'Cancel';
    };

    return AiDialogFooter;
  }(), _class3.inject = [_dialogController.DialogController], _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'buttons', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'useDefaultButtons', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-dialog/attach-focus',['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AttachFocus = undefined;

  

  var _dec, _class, _class2, _temp;

  var AttachFocus = exports.AttachFocus = (_dec = (0, _aureliaTemplating.customAttribute)('attach-focus'), _dec(_class = (_temp = _class2 = function () {
    function AttachFocus(element) {
      

      this.value = true;

      this.element = element;
    }

    AttachFocus.prototype.attached = function attached() {
      if (this.value && this.value !== 'false') {
        this.element.focus();
      }
    };

    AttachFocus.prototype.valueChanged = function valueChanged(newValue) {
      this.value = newValue;
    };

    return AttachFocus;
  }(), _class2.inject = [Element], _temp)) || _class);
});
define('aurelia-dialog/dialog-configuration',['exports', './renderer', './dialog-renderer', './dialog-options', 'aurelia-pal'], function (exports, _renderer, _dialogRenderer, _dialogOptions, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DialogConfiguration = undefined;

  

  var defaultRenderer = _dialogRenderer.DialogRenderer;

  var resources = {
    'ai-dialog': './ai-dialog',
    'ai-dialog-header': './ai-dialog-header',
    'ai-dialog-body': './ai-dialog-body',
    'ai-dialog-footer': './ai-dialog-footer',
    'attach-focus': './attach-focus'
  };

  var defaultCSSText = 'ai-dialog-container,ai-dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0}ai-dialog-overlay{opacity:0}ai-dialog-overlay.active{opacity:1}ai-dialog-container{display:block;transition:opacity .2s linear;opacity:0;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}ai-dialog-container.active{opacity:1}ai-dialog-container>div{padding:30px}ai-dialog-container>div>div{display:block;min-width:300px;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto}ai-dialog-container,ai-dialog-container>div,ai-dialog-container>div>div{outline:0}ai-dialog{display:table;box-shadow:0 5px 15px rgba(0,0,0,.5);border:1px solid rgba(0,0,0,.2);border-radius:5px;padding:3;min-width:300px;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;background:#fff}ai-dialog>ai-dialog-header{display:block;padding:16px;border-bottom:1px solid #e5e5e5}ai-dialog>ai-dialog-header>button{float:right;border:none;display:block;width:32px;height:32px;background:0 0;font-size:22px;line-height:16px;margin:-14px -16px 0 0;padding:0;cursor:pointer}ai-dialog>ai-dialog-body{display:block;padding:16px}ai-dialog>ai-dialog-footer{display:block;padding:6px;border-top:1px solid #e5e5e5;text-align:right}ai-dialog>ai-dialog-footer button{color:#333;background-color:#fff;padding:6px 12px;font-size:14px;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid #ccc;border-radius:4px;margin:5px 0 5px 5px}ai-dialog>ai-dialog-footer button:disabled{cursor:default;opacity:.45}ai-dialog>ai-dialog-footer button:hover:enabled{color:#333;background-color:#e6e6e6;border-color:#adadad}.ai-dialog-open{overflow:hidden}';

  var DialogConfiguration = exports.DialogConfiguration = function () {
    function DialogConfiguration(aurelia) {
      

      this.aurelia = aurelia;
      this.settings = _dialogOptions.dialogOptions;
      this.resources = [];
      this.cssText = defaultCSSText;
      this.renderer = defaultRenderer;
    }

    DialogConfiguration.prototype.useDefaults = function useDefaults() {
      return this.useRenderer(defaultRenderer).useCSS(defaultCSSText).useStandardResources();
    };

    DialogConfiguration.prototype.useStandardResources = function useStandardResources() {
      return this.useResource('ai-dialog').useResource('ai-dialog-header').useResource('ai-dialog-body').useResource('ai-dialog-footer').useResource('attach-focus');
    };

    DialogConfiguration.prototype.useResource = function useResource(resourceName) {
      this.resources.push(resourceName);
      return this;
    };

    DialogConfiguration.prototype.useRenderer = function useRenderer(renderer, settings) {
      this.renderer = renderer;
      this.settings = Object.assign(this.settings, settings || {});
      return this;
    };

    DialogConfiguration.prototype.useCSS = function useCSS(cssText) {
      this.cssText = cssText;
      return this;
    };

    DialogConfiguration.prototype._apply = function _apply() {
      var _this = this;

      this.aurelia.transient(_renderer.Renderer, this.renderer);
      this.resources.forEach(function (resourceName) {
        return _this.aurelia.globalResources(resources[resourceName]);
      });

      if (this.cssText) {
        _aureliaPal.DOM.injectStyles(this.cssText);
      }
    };

    return DialogConfiguration;
  }();
});
define('aurelia-dialog/renderer',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var Renderer = exports.Renderer = function () {
    function Renderer() {
      
    }

    Renderer.prototype.getDialogContainer = function getDialogContainer() {
      throw new Error('DialogRenderer must implement getDialogContainer().');
    };

    Renderer.prototype.showDialog = function showDialog(dialogController) {
      throw new Error('DialogRenderer must implement showDialog().');
    };

    Renderer.prototype.hideDialog = function hideDialog(dialogController) {
      throw new Error('DialogRenderer must implement hideDialog().');
    };

    return Renderer;
  }();
});
define('aurelia-dialog/dialog-renderer',['exports', 'aurelia-pal', 'aurelia-dependency-injection'], function (exports, _aureliaPal, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DialogRenderer = undefined;

  

  var _dec, _class;

  var containerTagName = 'ai-dialog-container';
  var overlayTagName = 'ai-dialog-overlay';
  var transitionEvent = function () {
    var transition = null;

    return function () {
      if (transition) return transition;

      var t = void 0;
      var el = _aureliaPal.DOM.createElement('fakeelement');
      var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      };
      for (t in transitions) {
        if (el.style[t] !== undefined) {
          transition = transitions[t];
          return transition;
        }
      }
    };
  }();

  var DialogRenderer = exports.DialogRenderer = (_dec = (0, _aureliaDependencyInjection.transient)(), _dec(_class = function () {
    function DialogRenderer() {
      var _this = this;

      

      this._escapeKeyEventHandler = function (e) {
        if (e.keyCode === 27) {
          var top = _this._dialogControllers[_this._dialogControllers.length - 1];
          if (top && top.settings.lock !== true) {
            top.cancel();
          }
        }
      };
    }

    DialogRenderer.prototype.getDialogContainer = function getDialogContainer() {
      return _aureliaPal.DOM.createElement('div');
    };

    DialogRenderer.prototype.showDialog = function showDialog(dialogController) {
      var _this2 = this;

      var settings = dialogController.settings;
      var body = _aureliaPal.DOM.querySelectorAll('body')[0];
      var wrapper = document.createElement('div');

      this.modalOverlay = _aureliaPal.DOM.createElement(overlayTagName);
      this.modalContainer = _aureliaPal.DOM.createElement(containerTagName);
      this.anchor = dialogController.slot.anchor;
      wrapper.appendChild(this.anchor);
      this.modalContainer.appendChild(wrapper);

      this.stopPropagation = function (e) {
        e._aureliaDialogHostClicked = true;
      };
      this.closeModalClick = function (e) {
        if (!settings.lock && !e._aureliaDialogHostClicked) {
          dialogController.cancel();
        } else {
          return false;
        }
      };

      dialogController.centerDialog = function () {
        if (settings.centerHorizontalOnly) return;
        centerDialog(_this2.modalContainer);
      };

      this.modalOverlay.style.zIndex = settings.startingZIndex;
      this.modalContainer.style.zIndex = settings.startingZIndex;

      var lastContainer = Array.from(body.querySelectorAll(containerTagName)).pop();

      if (lastContainer) {
        lastContainer.parentNode.insertBefore(this.modalContainer, lastContainer.nextSibling);
        lastContainer.parentNode.insertBefore(this.modalOverlay, lastContainer.nextSibling);
      } else {
        body.insertBefore(this.modalContainer, body.firstChild);
        body.insertBefore(this.modalOverlay, body.firstChild);
      }

      if (!this._dialogControllers.length) {
        _aureliaPal.DOM.addEventListener('keyup', this._escapeKeyEventHandler);
      }

      this._dialogControllers.push(dialogController);

      dialogController.slot.attached();

      if (typeof settings.position === 'function') {
        settings.position(this.modalContainer, this.modalOverlay);
      } else {
        dialogController.centerDialog();
      }

      this.modalContainer.addEventListener('click', this.closeModalClick);
      this.anchor.addEventListener('click', this.stopPropagation);

      return new Promise(function (resolve) {
        var renderer = _this2;
        if (settings.ignoreTransitions) {
          resolve();
        } else {
          _this2.modalContainer.addEventListener(transitionEvent(), onTransitionEnd);
        }

        _this2.modalOverlay.classList.add('active');
        _this2.modalContainer.classList.add('active');
        body.classList.add('ai-dialog-open');

        function onTransitionEnd(e) {
          if (e.target !== renderer.modalContainer) {
            return;
          }
          renderer.modalContainer.removeEventListener(transitionEvent(), onTransitionEnd);
          resolve();
        }
      });
    };

    DialogRenderer.prototype.hideDialog = function hideDialog(dialogController) {
      var _this3 = this;

      var settings = dialogController.settings;
      var body = _aureliaPal.DOM.querySelectorAll('body')[0];

      this.modalContainer.removeEventListener('click', this.closeModalClick);
      this.anchor.removeEventListener('click', this.stopPropagation);

      var i = this._dialogControllers.indexOf(dialogController);
      if (i !== -1) {
        this._dialogControllers.splice(i, 1);
      }

      if (!this._dialogControllers.length) {
        _aureliaPal.DOM.removeEventListener('keyup', this._escapeKeyEventHandler);
      }

      return new Promise(function (resolve) {
        var renderer = _this3;
        if (settings.ignoreTransitions) {
          resolve();
        } else {
          _this3.modalContainer.addEventListener(transitionEvent(), onTransitionEnd);
        }

        _this3.modalOverlay.classList.remove('active');
        _this3.modalContainer.classList.remove('active');

        function onTransitionEnd() {
          renderer.modalContainer.removeEventListener(transitionEvent(), onTransitionEnd);
          resolve();
        }
      }).then(function () {
        body.removeChild(_this3.modalOverlay);
        body.removeChild(_this3.modalContainer);
        dialogController.slot.detached();

        if (!_this3._dialogControllers.length) {
          body.classList.remove('ai-dialog-open');
        }

        return Promise.resolve();
      });
    };

    return DialogRenderer;
  }()) || _class);


  DialogRenderer.prototype._dialogControllers = [];

  function centerDialog(modalContainer) {
    var child = modalContainer.children[0];
    var vh = Math.max(_aureliaPal.DOM.querySelectorAll('html')[0].clientHeight, window.innerHeight || 0);

    child.style.marginTop = Math.max((vh - child.offsetHeight) / 2, 30) + 'px';
    child.style.marginBottom = Math.max((vh - child.offsetHeight) / 2, 30) + 'px';
  }
});
define('aurelia-dialog/dialog-options',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var dialogOptions = exports.dialogOptions = {
    lock: true,
    centerHorizontalOnly: false,
    startingZIndex: 1000,
    ignoreTransitions: false
  };
});
define('aurelia-dialog/dialog-service',['exports', 'aurelia-metadata', 'aurelia-dependency-injection', 'aurelia-templating', './dialog-controller', './renderer', './lifecycle', './dialog-result', './dialog-options'], function (exports, _aureliaMetadata, _aureliaDependencyInjection, _aureliaTemplating, _dialogController, _renderer, _lifecycle, _dialogResult, _dialogOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DialogService = undefined;

  

  var _class, _temp;

  var DialogService = exports.DialogService = (_temp = _class = function () {
    function DialogService(container, compositionEngine) {
      

      this.container = container;
      this.compositionEngine = compositionEngine;
      this.controllers = [];
      this.hasActiveDialog = false;
    }

    DialogService.prototype.open = function open(settings) {
      return this.openAndYieldController(settings).then(function (controller) {
        return controller.result;
      });
    };

    DialogService.prototype.openAndYieldController = function openAndYieldController(settings) {
      var _this = this;

      var childContainer = this.container.createChild();
      var dialogController = void 0;
      var promise = new Promise(function (resolve, reject) {
        dialogController = new _dialogController.DialogController(childContainer.get(_renderer.Renderer), _createSettings(settings), resolve, reject);
      });
      childContainer.registerInstance(_dialogController.DialogController, dialogController);
      dialogController.result = promise;
      dialogController.result.then(function () {
        _removeController(_this, dialogController);
      }, function () {
        _removeController(_this, dialogController);
      });
      return _openDialog(this, childContainer, dialogController).then(function () {
        return dialogController;
      });
    };

    return DialogService;
  }(), _class.inject = [_aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine], _temp);


  function _createSettings(settings) {
    settings = Object.assign({}, _dialogOptions.dialogOptions, settings);
    settings.startingZIndex = _dialogOptions.dialogOptions.startingZIndex;
    return settings;
  }

  function _openDialog(service, childContainer, dialogController) {
    var host = dialogController.renderer.getDialogContainer();
    var instruction = {
      container: service.container,
      childContainer: childContainer,
      model: dialogController.settings.model,
      view: dialogController.settings.view,
      viewModel: dialogController.settings.viewModel,
      viewSlot: new _aureliaTemplating.ViewSlot(host, true),
      host: host
    };

    return _getViewModel(instruction, service.compositionEngine).then(function (returnedInstruction) {
      dialogController.viewModel = returnedInstruction.viewModel;
      dialogController.slot = returnedInstruction.viewSlot;

      return (0, _lifecycle.invokeLifecycle)(dialogController.viewModel, 'canActivate', dialogController.settings.model).then(function (canActivate) {
        if (canActivate) {
          return service.compositionEngine.compose(returnedInstruction).then(function (controller) {
            service.controllers.push(dialogController);
            service.hasActiveDialog = !!service.controllers.length;
            dialogController.controller = controller;
            dialogController.view = controller.view;

            return dialogController.renderer.showDialog(dialogController);
          });
        }
      });
    });
  }

  function _getViewModel(instruction, compositionEngine) {
    if (typeof instruction.viewModel === 'function') {
      instruction.viewModel = _aureliaMetadata.Origin.get(instruction.viewModel).moduleId;
    }

    if (typeof instruction.viewModel === 'string') {
      return compositionEngine.ensureViewModel(instruction);
    }

    return Promise.resolve(instruction);
  }

  function _removeController(service, controller) {
    var i = service.controllers.indexOf(controller);
    if (i !== -1) {
      service.controllers.splice(i, 1);
      service.hasActiveDialog = !!service.controllers.length;
    }
  }
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./app.css\"></require><require from=\"./components/header/dream-header\"></require><require from=\"./components/footer/dream-footer\"></require><dream-header router.bind=\"router\"></dream-header><router-view></router-view><dream-footer></dream-footer></template>"; });
define('text!components/categories/categories.html', ['module'], function(module) { module.exports = "<template><div class=\"row categories\"><div class=\"col-md-8\"><h2>${section.Title}</h2><div repeat.for=\"item of sortedCategories\" class=\"category\"><read-mode if.bind=\"editMode !== true\"><h4>${item.Title}</h4></read-mode><edit-mode class=\"form-horizontal\" if.bind=\"editMode === true\"><div if.bind=\"item.isDeleting !== true\" class=\"btn-group\" role=\"group\" aria-label=\"Actions\"><button type=\"button\" click.delegate=\"$parent.startDeleting(item)\" class=\"btn btn-danger btn-xs\">Delete</button> <button type=\"button\" click.delegate=\"$parent.moveUp(item)\" class=\"btn btn-default btn-xs\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"true\"></span></button> <button type=\"button\" click.delegate=\"$parent.moveDown(item)\" class=\"btn btn-default btn-xs\"><span class=\"glyphicon glyphicon-arrow-down\" aria-hidden=\"true\"></span></button></div><div if.bind=\"item.isDeleting === true\" class=\"btn-group\" role=\"group\" aria-label=\"Actions\"><button type=\"button\" click.delegate=\"$parent.confirmDelete(item)\" class=\"btn btn-danger btn-xs\">Delete Block</button> <button type=\"button\" click.delegate=\"$parent.cancelDelete(item)\" class=\"btn btn-default btn-xs\">Cancel</button></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Title</label><div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" value.bind=\"item.Title\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Url</label><div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" value.bind=\"item.Url\"></div></div></edit-mode></div><div if.bind=\"editMode === true\" class=\"block-actions\"><div class=\"btn-group\" role=\"group\" aria-label=\"Actions\"><button type=\"button\" click.delegate=\"addCategory()\" class=\"btn btn-primary btn-xs\">Add New Category</button></div></div></div><div class=\"col-md-4 side-navigation\"><h3>Sections</h3><ul><li repeat.for=\"item of sortedSections\"><a href.bind=\"$parent.getSectionUrl(item)\" class=\"${item.SectionId === $parent.sectionId ? 'active' : ''}\">${item.Title}</a></li></ul></div></div></template>"; });
define('text!components/categories/navigation.html', ['module'], function(module) { module.exports = "<template><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!components/footer/dream-footer.html', ['module'], function(module) { module.exports = "<template><require from=\"./dream-footer.css\"></require></template>"; });
define('text!components/header/dream-header.html', ['module'], function(module) { module.exports = "<template><require from=\"./dream-header.css\"></require><div class=\"container\"><div class=\"navbar-brand\"><img class=\"logo\" src=\"/content/images/logo.png\"> <a first-letter-span href=\"/\">Dream Space</a></div><ul class=\"nav navbar-nav navbar-right\"><li role=\"presentation\" class=\"dropdown\" if.bind=\"isAuthenticated === true\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> ${user.firstName} <span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a href.bind=\"loginUrl\">Account</a></li><li><a click.delegate=\"logout()\">Logout</a></li></ul></li><li if.bind=\"isAuthenticated !== true\"><a click.delegate=\"login()\">Login</a></li></ul></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "@charset 'UTF-8';\n@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@import url(//fonts.googleapis.com/css?family=Open+Sans:400|Roboto);\n@import url(//fonts.googleapis.com/css?family=Istok+Web:400,700);\n@import url(//fonts.googleapis.com/css?family=Inder);\n@import url(//fonts.googleapis.com/css?family=Raleway);\n@import url(//fonts.googleapis.com/css?family=PT+Sans);\n@import url(//fonts.googleapis.com/css?family=Lato);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('/fonts/glyphicons-halflings-regular.eot');\n  src: url('/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('/fonts/glyphicons-halflings-regular.woff') format('woff'), url('/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');\n}\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #333333;\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.8) 100%, #ffffff 0%), url(/Content/Images/emma_bg_.jpg) no-repeat 0 0;\n  background-size: 100%;\n  background-attachment: fixed;\n  background-position: top;\n}\nbody a,\nbody a:hover {\n  color: #e22004;\n}\nbody a[first-letter-span] {\n  color: #2d4945;\n}\nbody a[first-letter-span] span {\n  color: #e22004;\n}\nbody .aurelia-validation-message {\n  display: none;\n}\nbody .has-success .form-control {\n  border-color: #ccc;\n}\nbody .has-success .form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\nbody .no-border {\n  border: 0!important;\n}\nbody .right {\n  text-align: right!important;\n}\nbody .uppercase {\n  text-transform: uppercase;\n}\nbody .pointer {\n  cursor: pointer!important;\n}\nbody a:hover {\n  cursor: pointer;\n}\n.page-content {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-bottom: 50px;\n}\n.page-content header {\n  margin-bottom: 15px;\n}\n.page-content header .btn {\n  float: right;\n  margin-left: 10px;\n  margin-top: 25px;\n}\n.page-content header h3 {\n  font-size: 22px;\n  margin-top: 18px;\n  display: inline-block;\n  color: #333333;\n}\n.page-content .actions {\n  float: right;\n  position: relative;\n  top: -39px;\n  margin-right: 0px;\n  margin-bottom: -25px;\n  z-index: 996;\n}\n.page-content .actions .btn {\n  border-radius: 4px 4px 0 0;\n  padding: 2px 12px;\n}\nai-dialog {\n  border-radius: 0;\n}\nai-dialog ai-dialog-body {\n  padding: 15px 30px;\n}\nai-dialog ai-dialog-body h3 {\n  margin: -30px -30px 25px;\n  padding: 20px;\n  font-weight: 500;\n  text-align: center;\n  background-color: #f5f5f5;\n}\nai-dialog ai-dialog-footer {\n  padding-bottom: 20px;\n  border: none;\n  padding-right: 30px;\n}\nai-dialog ai-dialog-footer .btn {\n  margin-left: 14px;\n}\nai-dialog-overlay.active {\n  background-color: black;\n  opacity: .5;\n}\nai-dialog > ai-dialog-footer button.btn-primary,\nai-dialog > ai-dialog-footer button.btn-primary:hover,\nai-dialog > ai-dialog-footer button.btn-primary:hover:enabled {\n  background-color: #2771cd;\n  border: solid 1px #ffffff;\n  color: #ffffff;\n}\nai-dialog > ai-dialog-footer button.btn-default,\nai-dialog > ai-dialog-footer button.btn-default:hover,\nai-dialog > ai-dialog-footer button.btn-default:hover:enabled {\n  background-color: #ffffff;\n  border: solid 1px #2771cd;\n  color: #2771cd;\n}\n.form-group {\n  margin-bottom: 14px;\n}\n.form-group label {\n  font-weight: 500;\n}\n.form-group.has-error label {\n  color: #333333;\n}\n.form-group.has-error input {\n  border-color: #d50525;\n}\n.form-group.has-error span.help-block {\n  margin-left: 18px;\n  color: #CA1D04;\n  display: inline-block;\n  margin-bottom: 0;\n}\n.form-group.has-error span.help-block.validation-message {\n  font-weight: 500;\n  margin-left: 15px;\n}\n.form-group.has-error .input-group-addon {\n  border-color: #d50525;\n  border-right: none;\n  color: #333333;\n  background-color: #f5f5f5;\n}\n.form-group .input-group-addon {\n  border-color: #cacaca;\n  border-radius: 2px;\n}\n.form-control {\n  border-radius: 2px;\n  box-shadow: none;\n  border-color: #cacaca;\n  height: 38px;\n  padding: 6px 15px;\n  color: #4a4a4a;\n}\nselect.form-control {\n  padding: 6px 10px;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #f5f5f5;\n  opacity: 1;\n}\n.form-control {\n  font-size: 14px;\n  border-radius: 0;\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.82);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  cursor: default;\n  background-color: rgba(223, 223, 223, 0.13);\n  color: rgba(0, 0, 0, 0.82);\n  box-shadow: none;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\np.form-control {\n  height: 32px;\n}\nform {\n  margin-bottom: 10px;\n}\nform .form-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n  margin-left: 15px;\n}\nform label {\n  font-weight: normal;\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.55);\n  margin-bottom: -2px;\n  margin-left: 2px;\n}\nform label input[type=\"file\"] {\n  position: fixed;\n  top: -1000px;\n}\nform .form-group .form-actions {\n  text-align: right;\n  border: 0;\n  padding-top: 0px;\n}\nform .form-group .form-actions .btn {\n  padding: 2px 10px;\n}\nform .form-group .file {\n  background-color: rgba(223, 223, 223, 0.13);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\nform .form-group .file label {\n  margin-left: -2px;\n}\nform .form-group .file span {\n  margin-top: 5px;\n  float: right;\n  margin-right: 10px;\n}\nform .form-group label.btn {\n  padding-top: 6px;\n}\nform textarea.html {\n  font-family: monospace;\n}\nform .validation-summary-error {\n  color: #CA1D04;\n}\nform .validation-summary-error .glyphicon {\n  font-size: 18px;\n  position: relative;\n}\nform .validation-summary-error .col-xs-1 {\n  width: 20px;\n}\nform .validation-summary-error ul {\n  padding-left: 0;\n}\nform .validation-summary-error ul li {\n  list-style: none;\n}\nform fieldset {\n  margin-bottom: 15px;\n}\n.sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n.article {\n  background-color: rgba(255, 255, 255, 0.7);\n  min-height: 50px;\n}\n.article ol li,\n.article ul li {\n  border-bottom: 1px dotted #777;\n  padding: 6px 0;\n  font-size: 13px;\n}\n.article .form-horizontal {\n  margin-top: 18px;\n  display: block;\n  margin-bottom: 25px;\n}\n.article article-image {\n  display: block;\n  text-align: center;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.article article-image img {\n  max-width: 100%;\n}\n.article article-image p {\n  color: #333333;\n  padding-bottom: 0px;\n  margin-top: 5px;\n  font-size: 11px;\n}\n.article article-part.edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.article article-part.edit-mode li {\n  border: none;\n}\n.article article-part.edit-mode li .col-xs-10,\n.article article-part.edit-mode li col-xs-2 {\n  padding: 0;\n  margin: 0;\n}\n.article article-part textarea {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: solid 1px #ccc;\n}\n.article .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.article ordered-list-block {\n  display: block;\n}\n.article ordered-list-block edit-mode {\n  display: block;\n  text-align: right;\n}\n.article ordered-list-block edit-mode li button {\n  margin-bottom: 5px;\n}\n.article heading-block read-mode {\n  display: block;\n  font-family: \"PT Sans\";\n  font-size: 17px;\n  font-weight: 400;\n  color: #000000;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.article heading-block .col-xs-10 {\n  padding-left: 0;\n}\n.article image-block edit-mode {\n  margin-top: 9px;\n  display: block;\n}\n.article image-block edit-mode img {\n  max-width: 100%;\n}\n.article image-block edit-mode .col-xs-3 {\n  text-align: right;\n  padding-top: 7px;\n}\n.article image-block edit-mode .col-xs-9 {\n  padding-left: 0;\n}\n.article image-block edit-mode .row {\n  margin-bottom: 10px;\n}\n.c_article_parts {\n  padding: 0 10px;\n}\n.c_article_parts.edit-mode {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_article_parts.edit-mode .c_article_part {\n  border-bottom: solid 1px rgba(204, 204, 204, 0.36);\n}\n.c_article_part {\n  padding-top: 10px;\n  padding-bottom: 0px;\n}\n.c_article_part form h4 {\n  margin-top: 2px;\n  border: 0;\n  color: #333333;\n  margin-bottom: 5px;\n}\n.c_article_part img {\n  width: 100%;\n}\n.c_article_part .form-group {\n  margin-bottom: 10px;\n}\n.c_article_part .form-group .form-control {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.c_article_part .form-group label {\n  padding-top: 10px;\n}\n.c_article_part article-part-list fieldset {\n  margin-bottom: 30px;\n}\n.c_article_part-add {\n  cursor: pointer;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-top: 10px;\n}\n.c_article_part-add .chevron {\n  float: right;\n  color: #008000;\n}\n.form-group {\n  margin-bottom: 10px;\n}\n.categories .category edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 10px 10px 0 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.categories .category edit-mode .btn-group {\n  float: right;\n  position: relative;\n  top: -20px;\n}\n.side-navigation {\n  padding: 0 15px;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.side-navigation h3 {\n  padding-top: 20px;\n  margin-top: 0;\n  color: #333333;\n  margin-bottom: 20px;\n}\n.side-navigation .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.side-navigation .block-actions .glyphicon {\n  color: #333333;\n  position: relative;\n  font-size: 12px;\n  top: 1px;\n  margin-right: 2px;\n}\n.side-navigation ul {\n  list-style-type: none;\n  padding-left: 0;\n  padding-bottom: 10px;\n}\n.side-navigation ul li {\n  border-bottom: 1px dotted #777;\n  margin-bottom: 5px;\n  padding: 2px 10px 7px;\n}\n.side-navigation ul li a {\n  color: #333333;\n}\n.side-navigation ul li a.active,\n.side-navigation ul li a:hover {\n  color: #e22004;\n  cursor: pointer;\n  /*text-decoration: none;*/\n  -webkit-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\n.side-navigation ul li a.disabled {\n  opacity: 0.6;\n}\n.side-navigation ul li .glyphicon {\n  font-size: 8px;\n  color: #e22004;\n  position: relative;\n  top: -1px;\n  margin-right: 5px;\n}\n.side-navigation ul li.edit-mode {\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid #DDD;\n}\n.side-navigation .side-navigation-add .glyphicon,\n.side-navigation .side-navigation-delete .glyphicon {\n  position: relative;\n  font-size: 13px;\n  top: 2px;\n}\n.side-navigation .side-navigation-add .glyphicon {\n  color: #008000;\n}\n.c_company_list {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.c_company {\n  padding: 10px 10px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_company.c_company-add,\n.c_company .c_company-add {\n  cursor: pointer;\n  border-bottom: 0px solid rgba(204, 204, 204, 0.36);\n}\n.c_company.c_company-add .glyphicon,\n.c_company .c_company-add .glyphicon {\n  color: green;\n}\n.c_company .c_company-header {\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.c_company .c_company-header .chevron {\n  float: right;\n}\n.c_company .c_company-header .btn {\n  margin-right: 10px;\n  z-index: 100;\n}\n.c_company-details {\n  padding-top: 10px;\n}\n.c_company-details form {\n  padding-top: 10px;\n}\n.c_company-details form fieldset {\n  padding-bottom: 10px;\n}\n.c_company-details h4 {\n  border-bottom: 1px solid #e22004;\n}\n.c_company-details .c_company-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.form-group .c_company-details {\n  padding: 15px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  border-top: 0;\n}\n"; });
define('text!components/studies/navigation.html', ['module'], function(module) { module.exports = "<template><require from=\"../nav-menu/category-nav/category-nav\"></require><category-nav menu.bind=\"menu\"></category-nav><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!components/studies/study.html', ['module'], function(module) { module.exports = "<template><require from=\"./study.css\"></require><div class=\"actions\" if.bind=\"powerUser\"><div if.bind=\"editMode !== true\" class=\"btn-group\" role=\"group\"><button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Administration <span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li><a click.delegate=\"startEdit()\">Edit Page</a></li><li role=\"separator\" class=\"divider\"></li><li><a href=\"/categories\">Manage Categories</a></li></ul></div><div class=\"btn-group\" role=\"group\" aria-label=\"...\"><button type=\"button\" if.bind=\"editMode === true\" click.delegate=\"saveArticle()\" class=\"btn btn-success\">Apply Changes</button> <button type=\"button\" if.bind=\"editMode === true\" click.delegate=\"cancelEdit()\" class=\"btn btn-default\">Cancel</button></div></div><div class=\"row\"><div class=\"col-md-8 article\"><header><h3>${article.title}</h3></header><form if.bind=\"editMode === true\"><fieldset><div class=\"form-group\"><label>Article Name</label><input type=\"text\" class=\"form-control\" value.bind=\"article.title & validate\"></div><div class=\"form-group\"><label>Article Url</label><input type=\"text\" class=\"form-control\" value.bind=\"article.url & validate\"></div></fieldset><h4>Article Parts</h4></form><div class=\"c_article_parts ${editMode ? 'edit-mode' : ''}\"><article-parts parts.bind=\"article.blocks\"></article-parts></div></div><div class=\"col-md-4\"><div class=\"side-navigation\"><h3>${category.title}</h3><ul><li repeat.for=\"summary of articles\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a click.delegate=\"$parent.navigateToArticle(summary.url)\" title=\"${summary.summary}\" class=\"${summary.selected ? 'active' : ''}\">${summary.title} Rules</a></li></ul><div if.bind=\"editMode\"><h3>Add / Remove Articles</h3><ul><li class=\"side-navigation-add\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span> <a click.delegate=\"addArticle()\">Add New Article</a></li><li class=\"side-navigation-delete\"><form><span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> <a click.delegate=\"deleting = true\">Delete Loaded Article</a><div class=\"form-actions no-border\" if.bind=\"deleting \"><input class=\"btn btn-danger\" type=\"button\" click.delegate=\"deleteArticle()\" value=\"Delete\"> <input class=\"btn btn-default\" type=\"button\" click.delegate=\"deleting = false\" value=\"Cancel\"></div></form></li></ul></div></div></div></div></template>"; });
define('text!components/user/login.html', ['module'], function(module) { module.exports = "<template><h3>Login</h3></template>"; });
define('text!components/user/navigation.html', ['module'], function(module) { module.exports = "<template><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!styles/common.css', ['module'], function(module) { module.exports = "@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@import url(//fonts.googleapis.com/css?family=Open+Sans:400|Roboto);\n@import url(//fonts.googleapis.com/css?family=Istok+Web:400,700);\n@import url(//fonts.googleapis.com/css?family=Inder);\n@import url(//fonts.googleapis.com/css?family=Raleway);\n@import url(//fonts.googleapis.com/css?family=PT+Sans);\n@import url(//fonts.googleapis.com/css?family=Lato);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('/fonts/glyphicons-halflings-regular.eot');\n  src: url('/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('/fonts/glyphicons-halflings-regular.woff') format('woff'), url('/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');\n}\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #333333;\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.8) 100%, #ffffff 0%), url(/Content/Images/emma_bg_.jpg) no-repeat 0 0;\n  background-size: 100%;\n  background-attachment: fixed;\n  background-position: top;\n}\nbody a,\nbody a:hover {\n  color: #e22004;\n}\nbody a[first-letter-span] {\n  color: #2d4945;\n}\nbody a[first-letter-span] span {\n  color: #e22004;\n}\nbody .aurelia-validation-message {\n  display: none;\n}\nbody .has-success .form-control {\n  border-color: #ccc;\n}\nbody .has-success .form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\nbody .no-border {\n  border: 0!important;\n}\nbody .right {\n  text-align: right!important;\n}\nbody .uppercase {\n  text-transform: uppercase;\n}\nbody .pointer {\n  cursor: pointer!important;\n}\nbody a:hover {\n  cursor: pointer;\n}\n.page-content {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-bottom: 50px;\n}\n.page-content header {\n  margin-bottom: 15px;\n}\n.page-content header .btn {\n  float: right;\n  margin-left: 10px;\n  margin-top: 25px;\n}\n.page-content header h3 {\n  font-size: 22px;\n  margin-top: 18px;\n  display: inline-block;\n  color: #333333;\n}\n.page-content .actions {\n  float: right;\n  position: relative;\n  top: -39px;\n  margin-right: 0px;\n  margin-bottom: -25px;\n  z-index: 996;\n}\n.page-content .actions .btn {\n  border-radius: 4px 4px 0 0;\n  padding: 2px 12px;\n}\nai-dialog {\n  border-radius: 0;\n}\nai-dialog ai-dialog-body {\n  padding: 15px 30px;\n}\nai-dialog ai-dialog-body h3 {\n  margin: -30px -30px 25px;\n  padding: 20px;\n  font-weight: 500;\n  text-align: center;\n  background-color: #f5f5f5;\n}\nai-dialog ai-dialog-footer {\n  padding-bottom: 20px;\n  border: none;\n  padding-right: 30px;\n}\nai-dialog ai-dialog-footer .btn {\n  margin-left: 14px;\n}\nai-dialog-overlay.active {\n  background-color: black;\n  opacity: .5;\n}\nai-dialog > ai-dialog-footer button.btn-primary,\nai-dialog > ai-dialog-footer button.btn-primary:hover,\nai-dialog > ai-dialog-footer button.btn-primary:hover:enabled {\n  background-color: #2771cd;\n  border: solid 1px #ffffff;\n  color: #ffffff;\n}\nai-dialog > ai-dialog-footer button.btn-default,\nai-dialog > ai-dialog-footer button.btn-default:hover,\nai-dialog > ai-dialog-footer button.btn-default:hover:enabled {\n  background-color: #ffffff;\n  border: solid 1px #2771cd;\n  color: #2771cd;\n}\n.form-group {\n  margin-bottom: 14px;\n}\n.form-group label {\n  font-weight: 500;\n}\n.form-group.has-error label {\n  color: #333333;\n}\n.form-group.has-error input {\n  border-color: #d50525;\n}\n.form-group.has-error span.help-block {\n  margin-left: 18px;\n  color: #CA1D04;\n  display: inline-block;\n  margin-bottom: 0;\n}\n.form-group.has-error span.help-block.validation-message {\n  font-weight: 500;\n  margin-left: 15px;\n}\n.form-group.has-error .input-group-addon {\n  border-color: #d50525;\n  border-right: none;\n  color: #333333;\n  background-color: #f5f5f5;\n}\n.form-group .input-group-addon {\n  border-color: #cacaca;\n  border-radius: 2px;\n}\n.form-control {\n  border-radius: 2px;\n  box-shadow: none;\n  border-color: #cacaca;\n  height: 38px;\n  padding: 6px 15px;\n  color: #4a4a4a;\n}\nselect.form-control {\n  padding: 6px 10px;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #f5f5f5;\n  opacity: 1;\n}\n.form-control {\n  font-size: 14px;\n  border-radius: 0;\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.82);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  cursor: default;\n  background-color: rgba(223, 223, 223, 0.13);\n  color: rgba(0, 0, 0, 0.82);\n  box-shadow: none;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\np.form-control {\n  height: 32px;\n}\nform {\n  margin-bottom: 10px;\n}\nform .form-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n  margin-left: 15px;\n}\nform label {\n  font-weight: normal;\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.55);\n  margin-bottom: -2px;\n  margin-left: 2px;\n}\nform label input[type=\"file\"] {\n  position: fixed;\n  top: -1000px;\n}\nform .form-group .form-actions {\n  text-align: right;\n  border: 0;\n  padding-top: 0px;\n}\nform .form-group .form-actions .btn {\n  padding: 2px 10px;\n}\nform .form-group .file {\n  background-color: rgba(223, 223, 223, 0.13);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\nform .form-group .file label {\n  margin-left: -2px;\n}\nform .form-group .file span {\n  margin-top: 5px;\n  float: right;\n  margin-right: 10px;\n}\nform .form-group label.btn {\n  padding-top: 6px;\n}\nform textarea.html {\n  font-family: monospace;\n}\nform .validation-summary-error {\n  color: #CA1D04;\n}\nform .validation-summary-error .glyphicon {\n  font-size: 18px;\n  position: relative;\n}\nform .validation-summary-error .col-xs-1 {\n  width: 20px;\n}\nform .validation-summary-error ul {\n  padding-left: 0;\n}\nform .validation-summary-error ul li {\n  list-style: none;\n}\nform fieldset {\n  margin-bottom: 15px;\n}\n.sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n.article {\n  background-color: rgba(255, 255, 255, 0.7);\n  min-height: 50px;\n}\n.article ol li,\n.article ul li {\n  border-bottom: 1px dotted #777;\n  padding: 6px 0;\n  font-size: 13px;\n}\n.article .form-horizontal {\n  margin-top: 18px;\n  display: block;\n  margin-bottom: 25px;\n}\n.article article-image {\n  display: block;\n  text-align: center;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.article article-image img {\n  max-width: 100%;\n}\n.article article-image p {\n  color: #333333;\n  padding-bottom: 0px;\n  margin-top: 5px;\n  font-size: 11px;\n}\n.article article-part.edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.article article-part.edit-mode li {\n  border: none;\n}\n.article article-part.edit-mode li .col-xs-10,\n.article article-part.edit-mode li col-xs-2 {\n  padding: 0;\n  margin: 0;\n}\n.article article-part textarea {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: solid 1px #ccc;\n}\n.article .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.article ordered-list-block {\n  display: block;\n}\n.article ordered-list-block edit-mode {\n  display: block;\n  text-align: right;\n}\n.article ordered-list-block edit-mode li button {\n  margin-bottom: 5px;\n}\n.article heading-block read-mode {\n  display: block;\n  font-family: \"PT Sans\";\n  font-size: 17px;\n  font-weight: 400;\n  color: #000000;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.article heading-block .col-xs-10 {\n  padding-left: 0;\n}\n.article image-block edit-mode {\n  margin-top: 9px;\n  display: block;\n}\n.article image-block edit-mode img {\n  max-width: 100%;\n}\n.article image-block edit-mode .col-xs-3 {\n  text-align: right;\n  padding-top: 7px;\n}\n.article image-block edit-mode .col-xs-9 {\n  padding-left: 0;\n}\n.article image-block edit-mode .row {\n  margin-bottom: 10px;\n}\n.c_article_parts {\n  padding: 0 10px;\n}\n.c_article_parts.edit-mode {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_article_parts.edit-mode .c_article_part {\n  border-bottom: solid 1px rgba(204, 204, 204, 0.36);\n}\n.c_article_part {\n  padding-top: 10px;\n  padding-bottom: 0px;\n}\n.c_article_part form h4 {\n  margin-top: 2px;\n  border: 0;\n  color: #333333;\n  margin-bottom: 5px;\n}\n.c_article_part img {\n  width: 100%;\n}\n.c_article_part .form-group {\n  margin-bottom: 10px;\n}\n.c_article_part .form-group .form-control {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.c_article_part .form-group label {\n  padding-top: 10px;\n}\n.c_article_part article-part-list fieldset {\n  margin-bottom: 30px;\n}\n.c_article_part-add {\n  cursor: pointer;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-top: 10px;\n}\n.c_article_part-add .chevron {\n  float: right;\n  color: #008000;\n}\n.form-group {\n  margin-bottom: 10px;\n}\n.categories .category edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 10px 10px 0 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.categories .category edit-mode .btn-group {\n  float: right;\n  position: relative;\n  top: -20px;\n}\n.side-navigation {\n  padding: 0 15px;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.side-navigation h3 {\n  padding-top: 20px;\n  margin-top: 0;\n  color: #333333;\n  margin-bottom: 20px;\n}\n.side-navigation .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.side-navigation .block-actions .glyphicon {\n  color: #333333;\n  position: relative;\n  font-size: 12px;\n  top: 1px;\n  margin-right: 2px;\n}\n.side-navigation ul {\n  list-style-type: none;\n  padding-left: 0;\n  padding-bottom: 10px;\n}\n.side-navigation ul li {\n  border-bottom: 1px dotted #777;\n  margin-bottom: 5px;\n  padding: 2px 10px 7px;\n}\n.side-navigation ul li a {\n  color: #333333;\n}\n.side-navigation ul li a.active,\n.side-navigation ul li a:hover {\n  color: #e22004;\n  cursor: pointer;\n  /*text-decoration: none;*/\n  -webkit-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\n.side-navigation ul li a.disabled {\n  opacity: 0.6;\n}\n.side-navigation ul li .glyphicon {\n  font-size: 8px;\n  color: #e22004;\n  position: relative;\n  top: -1px;\n  margin-right: 5px;\n}\n.side-navigation ul li.edit-mode {\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid #DDD;\n}\n.side-navigation .side-navigation-add .glyphicon,\n.side-navigation .side-navigation-delete .glyphicon {\n  position: relative;\n  font-size: 13px;\n  top: 2px;\n}\n.side-navigation .side-navigation-add .glyphicon {\n  color: #008000;\n}\n.c_company_list {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.c_company {\n  padding: 10px 10px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_company.c_company-add,\n.c_company .c_company-add {\n  cursor: pointer;\n  border-bottom: 0px solid rgba(204, 204, 204, 0.36);\n}\n.c_company.c_company-add .glyphicon,\n.c_company .c_company-add .glyphicon {\n  color: green;\n}\n.c_company .c_company-header {\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.c_company .c_company-header .chevron {\n  float: right;\n}\n.c_company .c_company-header .btn {\n  margin-right: 10px;\n  z-index: 100;\n}\n.c_company-details {\n  padding-top: 10px;\n}\n.c_company-details form {\n  padding-top: 10px;\n}\n.c_company-details form fieldset {\n  padding-bottom: 10px;\n}\n.c_company-details h4 {\n  border-bottom: 1px solid #e22004;\n}\n.c_company-details .c_company-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.form-group .c_company-details {\n  padding: 15px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  border-top: 0;\n}\n"; });
define('text!dialogs/login/user-login.html', ['module'], function(module) { module.exports = "<template><require from=\"./user-login.css\"></require><div class=\"user-login\"><ai-dialog><ai-dialog-body><h3>Login</h3><form class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-12 control-label\">Username / Email</label><div class=\"col-sm-12\"><input type=\"text\" class=\"form-control\" value.bind=\"model.email & validate\"></div></div><div class=\"form-group\"><label class=\"col-sm-12 control-label\">Password</label><div class=\"col-sm-12\"><input type=\"password\" class=\"form-control\" value.bind=\"model.password & validate\"></div></div><div class=\"form-group has-error\" if.bind=\"loginFailed\"><span class=\"help-block validation-message\">Your account or password is incorrect.</span></div></form></ai-dialog-body><ai-dialog-footer><button class=\"btn btn-primary\" click.trigger=\"tryLogin()\">Login</button> <button class=\"btn btn-default\" click.trigger=\"controller.cancel()\">Cancel</button></ai-dialog-footer></ai-dialog></div></template>"; });
define('text!components/nav-menu/main-nav/main-nav.html', ['module'], function(module) { module.exports = "<template><require from=\"./main-nav.css\"></require><div class=\"container\"><div class=\"main-nav-items\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a href.bind=\"row.href\">${row.title}</a></li></ul></div></div></template>"; });
define('text!styles/_article.css', ['module'], function(module) { module.exports = ".article {\n  background-color: rgba(255, 255, 255, 0.7);\n  min-height: 50px;\n}\n.article ol li,\n.article ul li {\n  border-bottom: 1px dotted #777;\n  padding: 6px 0;\n  font-size: 13px;\n}\n.article .form-horizontal {\n  margin-top: 18px;\n  display: block;\n  margin-bottom: 25px;\n}\n.article article-image {\n  display: block;\n  text-align: center;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.article article-image img {\n  max-width: 100%;\n}\n.article article-image p {\n  color: #333333;\n  padding-bottom: 0px;\n  margin-top: 5px;\n  font-size: 11px;\n}\n.article article-part.edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.article article-part.edit-mode li {\n  border: none;\n}\n.article article-part.edit-mode li .col-xs-10,\n.article article-part.edit-mode li col-xs-2 {\n  padding: 0;\n  margin: 0;\n}\n.article article-part textarea {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: solid 1px #ccc;\n}\n.article .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.article ordered-list-block {\n  display: block;\n}\n.article ordered-list-block edit-mode {\n  display: block;\n  text-align: right;\n}\n.article ordered-list-block edit-mode li button {\n  margin-bottom: 5px;\n}\n.article heading-block read-mode {\n  display: block;\n  font-family: \"PT Sans\";\n  font-size: 17px;\n  font-weight: 400;\n  color: #000000;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.article heading-block .col-xs-10 {\n  padding-left: 0;\n}\n.article image-block edit-mode {\n  margin-top: 9px;\n  display: block;\n}\n.article image-block edit-mode img {\n  max-width: 100%;\n}\n.article image-block edit-mode .col-xs-3 {\n  text-align: right;\n  padding-top: 7px;\n}\n.article image-block edit-mode .col-xs-9 {\n  padding-left: 0;\n}\n.article image-block edit-mode .row {\n  margin-bottom: 10px;\n}\n.c_article_parts {\n  padding: 0 10px;\n}\n.c_article_parts.edit-mode {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_article_parts.edit-mode .c_article_part {\n  border-bottom: solid 1px rgba(204, 204, 204, 0.36);\n}\n.c_article_part {\n  padding-top: 10px;\n  padding-bottom: 0px;\n}\n.c_article_part form h4 {\n  margin-top: 2px;\n  border: 0;\n  color: #333333;\n  margin-bottom: 5px;\n}\n.c_article_part img {\n  width: 100%;\n}\n.c_article_part .form-group {\n  margin-bottom: 10px;\n}\n.c_article_part .form-group .form-control {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.c_article_part .form-group label {\n  padding-top: 10px;\n}\n.c_article_part article-part-list fieldset {\n  margin-bottom: 30px;\n}\n.c_article_part-add {\n  cursor: pointer;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-top: 10px;\n}\n.c_article_part-add .chevron {\n  float: right;\n  color: #008000;\n}\n.form-group {\n  margin-bottom: 10px;\n}\n"; });
define('text!components/nav-menu/category-nav/category-nav.html', ['module'], function(module) { module.exports = "<template><div class=\"sub-nav\"><nav class=\"navbar navbar\"><div class=\"container\"><nav class=\"navbar\"><ul class=\"nav navbar-nav\"><li repeat.for=\"item of menu.items\" class=\"${item.isActive ? 'active' : ''}\"><a href.bind=\"$parent.getUrl(item)\">${item.title}</a></li></ul></nav></div></nav></div></template>"; });
define('text!resources/elements/article-parts/article-part-actions.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"part.editMode === true\"><div class=\"form-actions\"><button type=\"button\" click.delegate=\"remove()\" class=\"btn btn-danger\">Remove</button> <button type=\"button\" click.delegate=\"moveUp()\" class=\"btn btn-default\">Move Up</button> <button type=\"button\" click.delegate=\"moveDown()\" class=\"btn btn-default\">Move Down</button></div></form></template>"; });
define('text!styles/_body.css', ['module'], function(module) { module.exports = "body {\n  width: 100%;\n  height: 100%;\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #333333;\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.8) 100%, #ffffff 0%), url(/Content/Images/emma_bg_.jpg) no-repeat 0 0;\n  background-size: 100%;\n  background-attachment: fixed;\n  background-position: top;\n}\nbody a,\nbody a:hover {\n  color: #e22004;\n}\nbody a[first-letter-span] {\n  color: #2d4945;\n}\nbody a[first-letter-span] span {\n  color: #e22004;\n}\nbody .aurelia-validation-message {\n  display: none;\n}\nbody .has-success .form-control {\n  border-color: #ccc;\n}\nbody .has-success .form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\nbody .no-border {\n  border: 0!important;\n}\nbody .right {\n  text-align: right!important;\n}\nbody .uppercase {\n  text-transform: uppercase;\n}\nbody .pointer {\n  cursor: pointer!important;\n}\nbody a:hover {\n  cursor: pointer;\n}\n"; });
define('text!resources/elements/article-parts/article-part-heading.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"part.editMode === true\"><h4>Define heading</h4><fieldset><div class=\"form-group ${!typeValid ? 'has-error' : ''}\"><label class=\"col-sm-10\">Heading Type</label><div class=\"col-sm-5\"><select class=\"form-control\" change.delegate=\"onChange()\" value.bind=\"part.headingType\"><option>- Select heading type -</option><option repeat.for=\"heading of headingTypes\" value.bind=\"heading\">${heading}</option></select><span if.bind=\"!typeValid\" class=\"help-block validation-message\">Heading type not selected.</span></div></div><div class=\"form-group ${!textValid ? 'has-error' : ''}\"><label class=\"col-sm-10\">Heading Text</label><div class=\"col-sm-12\"><input type=\"text\" class=\"form-control\" value.bind=\"part.text\"> <span if.bind=\"!textValid\" class=\"help-block validation-message\">Heading text cannot be blank.</span></div></div></fieldset></form><span if.bind=\"part.editMode !== true\" class=\"${part.headingType}\">${part.text}</span></template>"; });
define('text!resources/elements/article-parts/article-part-image.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"part.editMode === true\"><h4>Select Image</h4><fieldset><div class=\"form-group ${!textValid ? 'has-error' : ''}\"><label class=\"col-sm-10\">Image Title</label><div class=\"col-sm-12\"><input type=\"text\" class=\"form-control\" value.bind=\"part.text\"> <span if.bind=\"!textValid\" class=\"help-block validation-message\">Image title cannot be blank.</span> <span if.bind=\"textValid\">&nbsp;</span></div></div><div class=\"form-group ${!imageValid ? 'has-error' : ''}\"><div class=\"col-sm-12\"><div class=\"file\"><label class=\"btn btn-danger\"><input type=\"file\" accept=\"image/*\" class=\"form-control\" change.delegate=\"uploadImage()\" files.bind=\"selectedFiles\"> Select Image</label><span if.bind=\"selectedFiles.length > 0\" repeat.for=\"file of selectedFiles | fileListToArray\">${file.name} [${file.size / 1000} kb]</span></div><span if.bind=\"!imageValid\" class=\"help-block validation-message\">Image is not selected.</span></div></div><div class=\"form-group\" if.bind=\"imageValid\"><label class=\"col-sm-10\">Active Image</label><div class=\"col-sm-12\"><img src.bind=\"part.imageUrl\"></div></div></fieldset></form><span if.bind=\"part.editMode !== true\"><img src.bind=\"part.imageUrl\"><p>${part.text}</p></span></template>"; });
define('text!styles/_dialog.css', ['module'], function(module) { module.exports = "ai-dialog {\n  border-radius: 0;\n}\nai-dialog ai-dialog-body {\n  padding: 15px 30px;\n}\nai-dialog ai-dialog-body h3 {\n  margin: -30px -30px 25px;\n  padding: 20px;\n  font-weight: 500;\n  text-align: center;\n  background-color: #f5f5f5;\n}\nai-dialog ai-dialog-footer {\n  padding-bottom: 20px;\n  border: none;\n  padding-right: 30px;\n}\nai-dialog ai-dialog-footer .btn {\n  margin-left: 14px;\n}\nai-dialog-overlay.active {\n  background-color: black;\n  opacity: .5;\n}\nai-dialog > ai-dialog-footer button.btn-primary,\nai-dialog > ai-dialog-footer button.btn-primary:hover,\nai-dialog > ai-dialog-footer button.btn-primary:hover:enabled {\n  background-color: #2771cd;\n  border: solid 1px #ffffff;\n  color: #ffffff;\n}\nai-dialog > ai-dialog-footer button.btn-default,\nai-dialog > ai-dialog-footer button.btn-default:hover,\nai-dialog > ai-dialog-footer button.btn-default:hover:enabled {\n  background-color: #ffffff;\n  border: solid 1px #2771cd;\n  color: #2771cd;\n}\n"; });
define('text!resources/elements/article-parts/article-part-list.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"part.editMode === true\"><h4>Define List Items</h4><fieldset><div repeat.for=\"item of part.items\" class=\"form-group ${!item.valid ? 'has-error' : ''}\"><label class=\"col-sm-10\">${$index + 1}.</label><div class=\"col-sm-12\"><textarea rows=\"4\" class=\"form-control\" value.bind=\"item.text\"></textarea><span if.bind=\"!item.valid\" class=\"help-block validation-message\">Text cannot be blank.</span><div class=\"form-actions\"><button type=\"button\" if.bind=\"$index+1 === $parent.part.items.length\" click.delegate=\"$parent.addItem($index)\" class=\"btn btn-success\">New Item</button> <button type=\"button\" click.delegate=\"$parent.deleteItem($index)\" class=\"btn btn-danger\">Delete Item</button></div></div></div></fieldset></form><ol class=\"f\" if.bind=\"!part.editMode && part.items && part.items.length > 0\"><li repeat.for=\"item of part.items\">${item.text}</li></ol></template>"; });
define('text!styles/_fonts.css', ['module'], function(module) { module.exports = "@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@import url(//fonts.googleapis.com/css?family=Open+Sans:400|Roboto);\n@import url(//fonts.googleapis.com/css?family=Istok+Web:400,700);\n@import url(//fonts.googleapis.com/css?family=Inder);\n@import url(//fonts.googleapis.com/css?family=Raleway);\n@import url(//fonts.googleapis.com/css?family=PT+Sans);\n@import url(//fonts.googleapis.com/css?family=Lato);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('/fonts/glyphicons-halflings-regular.eot');\n  src: url('/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('/fonts/glyphicons-halflings-regular.woff') format('woff'), url('/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');\n}\n"; });
define('text!resources/elements/article-parts/article-part-new.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"part.editMode === true\"><h4>Add new part</h4><fieldset><div class=\"form-group\"><label class=\"col-sm-10 control-label\">Part Type</label><div class=\"col-sm-6\"><select class=\"form-control\" change.delegate=\"onTypeChange()\" value.bind=\"selectedType\"><option>- Select part type -</option><option repeat.for=\"type of partTypes\" value.bind=\"type\">${type}</option></select></div></div></fieldset><div class=\"form-actions\"><button type=\"button\" show.bind=\"canAdd\" click.delegate=\"add()\" class=\"btn btn-danger au-target\" au-target-id=\"97\">Add</button> <button type=\"button\" click.delegate=\"cancel()\" class=\"btn btn-default au-target\" au-target-id=\"97\">Cancel</button></div></form></template>"; });
define('text!resources/elements/article-parts/article-part-paragraph.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"part.editMode === true\"><h4>Define Paragraph</h4><fieldset><div class=\"form-group ${!textValid ? 'has-error' : ''}\"><label class=\"col-sm-10\">Paragraph Text</label><div class=\"col-sm-12\"><textarea rows=\"4\" class=\"form-control\" value.bind=\"part.text\"></textarea><span if.bind=\"!textValid\" class=\"help-block validation-message\">Paragraph text cannot be blank.</span></div></div></fieldset></form><p if.bind=\"part.editMode !== true\">${part.text}</p></template>"; });
define('text!styles/_form.css', ['module'], function(module) { module.exports = ".form-group {\n  margin-bottom: 14px;\n}\n.form-group label {\n  font-weight: 500;\n}\n.form-group.has-error label {\n  color: #333333;\n}\n.form-group.has-error input {\n  border-color: #d50525;\n}\n.form-group.has-error span.help-block {\n  margin-left: 18px;\n  color: #CA1D04;\n  display: inline-block;\n  margin-bottom: 0;\n}\n.form-group.has-error span.help-block.validation-message {\n  font-weight: 500;\n  margin-left: 15px;\n}\n.form-group.has-error .input-group-addon {\n  border-color: #d50525;\n  border-right: none;\n  color: #333333;\n  background-color: #f5f5f5;\n}\n.form-group .input-group-addon {\n  border-color: #cacaca;\n  border-radius: 2px;\n}\n.form-control {\n  border-radius: 2px;\n  box-shadow: none;\n  border-color: #cacaca;\n  height: 38px;\n  padding: 6px 15px;\n  color: #4a4a4a;\n}\nselect.form-control {\n  padding: 6px 10px;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #f5f5f5;\n  opacity: 1;\n}\n.form-control {\n  font-size: 14px;\n  border-radius: 0;\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.82);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  cursor: default;\n  background-color: rgba(223, 223, 223, 0.13);\n  color: rgba(0, 0, 0, 0.82);\n  box-shadow: none;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\np.form-control {\n  height: 32px;\n}\nform {\n  margin-bottom: 10px;\n}\nform .form-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n  margin-left: 15px;\n}\nform label {\n  font-weight: normal;\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.55);\n  margin-bottom: -2px;\n  margin-left: 2px;\n}\nform label input[type=\"file\"] {\n  position: fixed;\n  top: -1000px;\n}\nform .form-group .form-actions {\n  text-align: right;\n  border: 0;\n  padding-top: 0px;\n}\nform .form-group .form-actions .btn {\n  padding: 2px 10px;\n}\nform .form-group .file {\n  background-color: rgba(223, 223, 223, 0.13);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\nform .form-group .file label {\n  margin-left: -2px;\n}\nform .form-group .file span {\n  margin-top: 5px;\n  float: right;\n  margin-right: 10px;\n}\nform .form-group label.btn {\n  padding-top: 6px;\n}\nform textarea.html {\n  font-family: monospace;\n}\nform .validation-summary-error {\n  color: #CA1D04;\n}\nform .validation-summary-error .glyphicon {\n  font-size: 18px;\n  position: relative;\n}\nform .validation-summary-error .col-xs-1 {\n  width: 20px;\n}\nform .validation-summary-error ul {\n  padding-left: 0;\n}\nform .validation-summary-error ul li {\n  list-style: none;\n}\nform fieldset {\n  margin-bottom: 15px;\n}\n"; });
define('text!resources/elements/article-parts/article-parts.html', ['module'], function(module) { module.exports = "<template><div class=\"c_article_part\" repeat.for=\"part of parts\"><article-part-paragraph part.bind=\"part\" if.bind=\"part.type === 'Paragraph'\"></article-part-paragraph><article-part-heading part.bind=\"part\" if.bind=\"part.type === 'Heading'\"></article-part-heading><article-part-image part.bind=\"part\" if.bind=\"part.type === 'Image'\"></article-part-image><article-part-list part.bind=\"part\" if.bind=\"part.type === 'List'\"></article-part-list><article-part-new part.bind=\"part\" if.bind=\"part.type === 'Unset'\"></article-part-new><article-part-actions part.bind=\"part\" if.bind=\"part.type !== 'Unset'\"></article-part-actions></div><div class=\"c_article_part-add\" click.delegate=\"addPart()\" if.bind=\"editMode === true\"><a>Add new part</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div></template>"; });
define('text!styles/_page.css', ['module'], function(module) { module.exports = ".page-content {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-bottom: 50px;\n}\n.page-content header {\n  margin-bottom: 15px;\n}\n.page-content header .btn {\n  float: right;\n  margin-left: 10px;\n  margin-top: 25px;\n}\n.page-content header h3 {\n  font-size: 22px;\n  margin-top: 18px;\n  display: inline-block;\n  color: #333333;\n}\n.page-content .actions {\n  float: right;\n  position: relative;\n  top: -39px;\n  margin-right: 0px;\n  margin-bottom: -25px;\n  z-index: 996;\n}\n.page-content .actions .btn {\n  border-radius: 4px 4px 0 0;\n  padding: 2px 12px;\n}\n"; });
define('text!styles/_sub-nav.css', ['module'], function(module) { module.exports = ".sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n"; });
define('text!styles/_variables.css', ['module'], function(module) { module.exports = ""; });
define('text!components/categories/categories.css', ['module'], function(module) { module.exports = ""; });
define('text!components/footer/dream-footer.css', ['module'], function(module) { module.exports = ""; });
define('text!components/header/dream-header.css', ['module'], function(module) { module.exports = "dream-header {\n  font-family: 'Arial', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  top: 0px;\n  z-index: 999;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  background: #ffffff;\n  padding: 0;\n}\ndream-header .nav .open > a,\ndream-header .nav .open > a:hover,\ndream-header .nav .open > a:focus {\n  background-color: transparent;\n}\ndream-header .navbar-nav > li > a.dropdown-toggle {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-top: 24px;\n}\ndream-header .nav > li > a:hover,\ndream-header .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  color: #e22004;\n}\ndream-header .nav > li > a:hover {\n  text-decoration: underline;\n}\ndream-header .navbar-brand {\n  margin: 0;\n  padding: 0;\n  float: left;\n  font-size: 26px;\n  line-height: 52px;\n  cursor: pointer;\n}\ndream-header .navbar-brand img.logo {\n  margin-right: -2px;\n  top: -2px;\n  position: relative;\n  display: inline-block;\n  width: 47px;\n  opacity: 0.96;\n}\ndream-header .navbar-brand span.pound {\n  color: #e22004;\n  font-weight: bold;\n  font-size: 46px;\n  line-height: 25px;\n  position: relative;\n  top: 6px;\n}\ndream-header .navbar-brand a,\ndream-header .navbar-brand a:hover {\n  text-decoration: none;\n}\n"; });
define('text!components/studies/study.css', ['module'], function(module) { module.exports = ""; });
define('text!dialogs/login/user-login.css', ['module'], function(module) { module.exports = ".user-login ai-dialog {\n  width: 400px;\n}\n.user-login .form-horizontal {\n  margin-bottom: 15px;\n}\n.user-login .form-horizontal .control-label {\n  text-align: left;\n  margin-bottom: 4px;\n}\n.user-login .col-left {\n  padding-right: 7px;\n}\n.user-login .col-right {\n  padding-left: 7px;\n}\n.user-login ai-dialog-footer .btn {\n  width: 162px;\n}\n.user-login .form-group {\n  margin-bottom: 3px;\n}\n"; });
define('text!components/nav-menu/main-nav/main-nav.css', ['module'], function(module) { module.exports = "@media (min-width: 768px) {\n  main-nav .navbar-nav {\n    float: none;\n  }\n}\nmain-nav .main-nav-items {\n  background-color: rgba(161, 161, 161, 0.2);\n}\nmain-nav ul.nav li {\n  float: left;\n  padding: 0;\n  position: relative;\n  margin-left: 1px;\n}\nmain-nav ul.nav li:first-child {\n  margin-left: 0;\n}\nmain-nav ul.nav li a {\n  position: relative;\n  padding: 0 20px;\n  text-align: center;\n  font: 14px/40px 'Istok Web';\n  text-transform: uppercase;\n  background: transparent;\n  color: #333333;\n  -webkit-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\nmain-nav ul.nav li:hover a {\n  background: rgba(226, 32, 4, 0.38);\n}\nmain-nav ul.nav li.active a {\n  color: #ffffff;\n  background: #e22004;\n}\nmain-nav nav.navbar {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 14px 0;\n  min-height: 0;\n  border-color: #e7e7e7;\n}\nmain-nav nav.navbar ul.navbar-nav {\n  top: 5px;\n}\n"; });
define('text!components/nav-menu/category-nav/category-nav.css', ['module'], function(module) { module.exports = ".sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n"; });
//# sourceMappingURL=app-bundle.js.map