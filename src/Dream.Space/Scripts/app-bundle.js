define('common/types/enums',["require", "exports"], function (require, exports) {
    "use strict";
    var QuotePeriod;
    (function (QuotePeriod) {
        QuotePeriod[QuotePeriod["Daily"] = 0] = "Daily";
        QuotePeriod[QuotePeriod["Weekly"] = 1] = "Weekly";
    })(QuotePeriod = exports.QuotePeriod || (exports.QuotePeriod = {}));
    var ChartUpdateMode;
    (function (ChartUpdateMode) {
        ChartUpdateMode[ChartUpdateMode["Reset"] = 0] = "Reset";
        ChartUpdateMode[ChartUpdateMode["Insert"] = 1] = "Insert";
        ChartUpdateMode[ChartUpdateMode["Append"] = 2] = "Append";
    })(ChartUpdateMode = exports.ChartUpdateMode || (exports.ChartUpdateMode = {}));
    var TransformFunction;
    (function (TransformFunction) {
        TransformFunction[TransformFunction["First"] = 0] = "First";
        TransformFunction[TransformFunction["Max"] = 1] = "Max";
        TransformFunction[TransformFunction["Sum"] = 2] = "Sum";
        TransformFunction[TransformFunction["Avg"] = 3] = "Avg";
        TransformFunction[TransformFunction["Min"] = 4] = "Min";
    })(TransformFunction = exports.TransformFunction || (exports.TransformFunction = {}));
    var CompareOperator;
    (function (CompareOperator) {
        CompareOperator[CompareOperator["Greater"] = 0] = "Greater";
        CompareOperator[CompareOperator["GreaterOrEqual"] = 1] = "GreaterOrEqual";
        CompareOperator[CompareOperator["Equal"] = 2] = "Equal";
        CompareOperator[CompareOperator["Less"] = 3] = "Less";
        CompareOperator[CompareOperator["LessOrEqual"] = 4] = "LessOrEqual";
        CompareOperator[CompareOperator["NotEqual"] = 5] = "NotEqual";
    })(CompareOperator = exports.CompareOperator || (exports.CompareOperator = {}));
    var QuoteType;
    (function (QuoteType) {
        QuoteType[QuoteType["Close"] = 0] = "Close";
        QuoteType[QuoteType["Open"] = 1] = "Open";
        QuoteType[QuoteType["High"] = 2] = "High";
        QuoteType[QuoteType["Low"] = 3] = "Low";
        QuoteType[QuoteType["Volume"] = 4] = "Volume";
    })(QuoteType = exports.QuoteType || (exports.QuoteType = {}));
    var RuleDataSource;
    (function (RuleDataSource) {
        RuleDataSource[RuleDataSource["Indicator"] = 0] = "Indicator";
        RuleDataSource[RuleDataSource["HistoricalData"] = 1] = "HistoricalData";
        RuleDataSource[RuleDataSource["Constant"] = 2] = "Constant";
    })(RuleDataSource = exports.RuleDataSource || (exports.RuleDataSource = {}));
});

define('common/types/account-models',["require", "exports"], function (require, exports) {
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

define('services/account-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
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

define('common/types/article-models',["require", "exports"], function (require, exports) {
    "use strict";
});

define('common/types/indicator-models',["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    var IndicatorCore = (function () {
        function IndicatorCore() {
        }
        return IndicatorCore;
    }());
    exports.IndicatorCore = IndicatorCore;
    var IndicatorInfo = (function () {
        function IndicatorInfo() {
        }
        return IndicatorInfo;
    }());
    exports.IndicatorInfo = IndicatorInfo;
    var IndicatorModel = (function (_super) {
        tslib_1.__extends(IndicatorModel, _super);
        function IndicatorModel() {
            var _this = _super.call(this) || this;
            _this.isNew = false;
            _this.editMode = false;
            _this.expanded = false;
            _this.deleteMode = false;
            return _this;
        }
        return IndicatorModel;
    }(IndicatorInfo));
    exports.IndicatorModel = IndicatorModel;
});

define('services/indicator-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
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

define('common/helpers/enum-helper',["require", "exports", "../types/enums"], function (require, exports, enums_1) {
    "use strict";
    var EnumHelper = (function () {
        function EnumHelper() {
        }
        EnumHelper.getNamesAndValues = function (e) {
            return this.getNames(e).map(function (_name) { return { name: _name, value: e[_name] }; });
        };
        EnumHelper.getNames = function (e) {
            return this.getObjectValues(e).filter(function (v) { return typeof v === "string"; });
        };
        EnumHelper.getValues = function (e) {
            return this.getObjectValues(e).filter(function (v) { return typeof v === "number"; });
        };
        EnumHelper.getObjectValues = function (e) {
            return Object.keys(e).map(function (k) { return e[k]; });
        };
        return EnumHelper;
    }());
    exports.EnumHelper = EnumHelper;
    var EnumValues = (function () {
        function EnumValues() {
        }
        EnumValues.getTransformFunctions = function () {
            var values = EnumHelper.getNamesAndValues(enums_1.TransformFunction);
            var result = [];
            values.forEach(function (item) {
                var name = item.name;
                switch (item.value) {
                    case enums_1.TransformFunction.Avg: {
                        name = "Average";
                        break;
                    }
                }
                result.push({ id: item.value, name: name });
            });
            return result;
        };
        EnumValues.getRuleDataSources = function () {
            var values = EnumHelper.getNamesAndValues(enums_1.RuleDataSource);
            var result = [];
            values.forEach(function (item) {
                var name = item.name;
                switch (item.value) {
                    case enums_1.RuleDataSource.HistoricalData: {
                        name = "Historical Data";
                        break;
                    }
                }
                result.push({ id: item.value, name: name });
            });
            return result;
        };
        EnumValues.getCompareOperators = function () {
            var values = EnumHelper.getNamesAndValues(enums_1.CompareOperator);
            var result = [];
            values.forEach(function (item) {
                var name = item.name;
                switch (item.value) {
                    case enums_1.CompareOperator.NotEqual: {
                        name = "Not Equal";
                        break;
                    }
                    case enums_1.CompareOperator.GreaterOrEqual: {
                        name = "Greater Or Equal";
                        break;
                    }
                    case enums_1.CompareOperator.LessOrEqual: {
                        name = "Less Or Equal";
                        break;
                    }
                }
                result.push({ id: item.value, name: name });
            });
            return result;
        };
        EnumValues.getQuotePeriods = function () {
            var values = EnumHelper.getNamesAndValues(enums_1.QuotePeriod);
            var result = [];
            values.forEach(function (item) {
                result.push({ id: item.value, name: item.name });
            });
            return result;
        };
        EnumValues.geChartUpdateModes = function () {
            var values = EnumHelper.getNamesAndValues(enums_1.ChartUpdateMode);
            var result = [];
            values.forEach(function (item) {
                result.push({ id: item.value, name: item.name });
            });
            return result;
        };
        EnumValues.geQuoteTypes = function () {
            var values = EnumHelper.getNamesAndValues(enums_1.QuoteType);
            var result = [];
            values.forEach(function (item) {
                result.push({ id: item.value, name: item.name });
            });
            return result;
        };
        return EnumValues;
    }());
    exports.EnumValues = EnumValues;
    var IdName = (function () {
        function IdName() {
            this.active = false;
        }
        return IdName;
    }());
    exports.IdName = IdName;
});

define('services/settings-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client", "./indicator-service", "../common/helpers/enum-helper"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1, indicator_service_1, enum_helper_1) {
    "use strict";
    var SettingsService = (function () {
        function SettingsService(http, indicatorService) {
            this.http = http;
            this.indicatorService = indicatorService;
            this.sections = [];
            this.initialized = false;
            this.homePage = 'studies';
            this.indicators = [];
            this.periods = enum_helper_1.EnumValues.getQuotePeriods();
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

define('app',["require", "exports", "tslib", "aurelia-framework", "aurelia-router", "./services/account-service", "./services/settings-service"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1, account_service_1, settings_service_1) {
    "use strict";
    var App = (function () {
        function App(account) {
            this.account = account;
            this.user = this.account.currentUser;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "Dream Space";
            config.options.pushState = true;
            this.router = router;
            config.addPipelineStep("authorize", AuthorizeStep);
            config.map([
                { route: ["user"], moduleId: "./components/user/navigation", name: "user", title: "Login", nav: false },
                { route: ["studies"], moduleId: "./components/studies/navigation", name: "studies", title: "Studies", nav: true },
                { route: ["markets"], moduleId: "./components/market/navigation", name: "markets", title: "Markets", nav: true },
                { route: ["strategies"], moduleId: "./components/strategies/navigation", name: "strategies", title: "Strategies", nav: true, auth: true },
                { route: ["categories"], moduleId: "./components/categories/navigation", name: "categories", title: "Categories", nav: false },
                { route: "", redirect: "studies" }
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
                    return next.cancel(new aurelia_router_1.RedirectToRoute("user"));
                }
            }
            else {
                if (navigationInstruction.getAllInstructions()
                    .some(function (i) { return i.config.name === "user-login" && _this.isAuthenticated; })) {
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

define('common/types/company-models',["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    var CompanyHeader = (function () {
        function CompanyHeader() {
        }
        return CompanyHeader;
    }());
    exports.CompanyHeader = CompanyHeader;
    var QuoteInfo = (function () {
        function QuoteInfo() {
        }
        return QuoteInfo;
    }());
    exports.QuoteInfo = QuoteInfo;
    var CompanyInfo = (function (_super) {
        tslib_1.__extends(CompanyInfo, _super);
        function CompanyInfo() {
            var _this = _super.call(this) || this;
            _this.historyQuotes = [];
            return _this;
        }
        return CompanyInfo;
    }(CompanyHeader));
    exports.CompanyInfo = CompanyInfo;
    var CompanyViewModel = (function (_super) {
        tslib_1.__extends(CompanyViewModel, _super);
        function CompanyViewModel() {
            var _this = _super.call(this) || this;
            _this.show = false;
            return _this;
        }
        return CompanyViewModel;
    }(CompanyInfo));
    exports.CompanyViewModel = CompanyViewModel;
});

define('common/types/playground-models',["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    var PlaygroundRuleInfo = (function () {
        function PlaygroundRuleInfo() {
        }
        return PlaygroundRuleInfo;
    }());
    exports.PlaygroundRuleInfo = PlaygroundRuleInfo;
    var PlaygroundRuleSetInfo = (function () {
        function PlaygroundRuleSetInfo() {
            this.rules = [];
        }
        return PlaygroundRuleSetInfo;
    }());
    exports.PlaygroundRuleSetInfo = PlaygroundRuleSetInfo;
    var PlaygroundInfo = (function () {
        function PlaygroundInfo() {
            this.periods = [];
            this.ruleSets = [];
        }
        return PlaygroundInfo;
    }());
    exports.PlaygroundInfo = PlaygroundInfo;
    var PlaygroundViewModel = (function (_super) {
        tslib_1.__extends(PlaygroundViewModel, _super);
        function PlaygroundViewModel() {
            return _super.call(this) || this;
        }
        return PlaygroundViewModel;
    }(PlaygroundInfo));
    exports.PlaygroundViewModel = PlaygroundViewModel;
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
        ErrorInterceptor.prototype.responseError = function (response, _request) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var validationError;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(response.status === 400)) return [3 /*break*/, 2];
                            return [4 /*yield*/, response.json()];
                        case 1:
                            validationError = (_a.sent()).message;
                            this.eventEmitter.publish('ValidationError', validationError);
                            return [2 /*return*/, Promise.reject(validationError)];
                        case 2:
                            if (response.status === 401) {
                                this.eventEmitter.publish("ServerError", { message: "401" });
                                return [2 /*return*/, Promise.reject(null)];
                            }
                            if (response.status === 403) {
                                this.eventEmitter.publish("ServerError", { message: "NotAuthorised" });
                                return [2 /*return*/, Promise.reject(null)];
                            }
                            if (response.status >= 500) {
                                this.eventEmitter.publish("ServerError", { message: "Unhandled" });
                                return [2 /*return*/, Promise.reject(null)];
                            }
                            return [2 /*return*/];
                    }
                });
            });
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

define('main',["require", "exports", "tslib", "aurelia-fetch-client", "./environment", "./infrastructure/error-interceptor", "./services/account-service", "./services/settings-service", "./form-validation/custom-validation-rules"], function (require, exports, tslib_1, aurelia_fetch_client_1, environment_1, error_interceptor_1, account_service_1, settings_service_1, custom_validation_rules_1) {
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
                            .plugin("aurelia-dialog", function (config) {
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
                        return [4 /*yield*/, aurelia.start()];
                    case 3:
                        _a.sent();
                        aurelia.setRoot();
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
            "./value-converters/blob-to-url",
            "./value-converters/filelist-to-array"
        ]);
        config.globalResources([
            "./elements/article-parts/article-parts",
            "./elements/article-parts/article-part-paragraph",
            "./elements/article-parts/article-part-heading",
            "./elements/article-parts/article-part-actions",
            "./elements/article-parts/article-part-image",
            "./elements/article-parts/article-part-list",
            "./elements/article-parts/article-part-new"
        ]);
        config.globalResources([
            "./elements/rule/rule",
            "./elements/rule-set/rule-set",
            "./elements/rule-set/rule-set-item"
        ]);
        config.globalResources([
            "./elements/strategy/strategy-admin",
            "./elements/strategy/strategy-navigation",
            "./elements/strategy/side-navigation",
            "./elements/strategy/strategy-rule-set"
        ]);
        config.globalResources(["./elements/indicator/indicator"]);
        config.globalResources(["./elements/company/company-details"]);
        config.globalResources(["./elements/chart/stock-chart"]);
        config.globalResources(["./elements/progress/s-progress"]);
        config.globalResources(["./attributes/first-letter-span"]);
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

define('services/company-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var CompanyService = (function () {
        function CompanyService(http) {
            this.http = http;
        }
        CompanyService.prototype.getCompany = function (ticker) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("company/" + ticker, { method: "get" })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        CompanyService.prototype.searchCompanies = function (ticker, maxCount) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var model, response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            model = {
                                ticker: ticker,
                                maxCount: maxCount
                            };
                            return [4 /*yield*/, this.http.fetch('company/search', { method: 'post', body: aurelia_fetch_client_1.json(model) })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return CompanyService;
    }());
    CompanyService = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], CompanyService);
    exports.CompanyService = CompanyService;
});

define('components/market/jobs-dashboard/jobs/job-details/job-details',["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    var JobDetails = (function () {
        function JobDetails() {
            this.expanded = false;
        }
        JobDetails.prototype.expand = function () {
            this.expanded = !this.expanded;
        };
        JobDetails.prototype.delete = function () {
        };
        Object.defineProperty(JobDetails.prototype, "completed", {
            get: function () {
                return "2/10/2017 18:23 PM";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JobDetails.prototype, "status", {
            get: function () {
                return "Successful";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JobDetails.prototype, "runTime", {
            get: function () {
                return "1hr 42m";
            },
            enumerable: true,
            configurable: true
        });
        return JobDetails;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], JobDetails.prototype, "job", void 0);
    JobDetails = tslib_1.__decorate([
        aurelia_framework_1.autoinject()
    ], JobDetails);
    exports.JobDetails = JobDetails;
    var JobType;
    (function (JobType) {
        JobType[JobType["All"] = 0] = "All";
        JobType[JobType["RefreshAllStocks"] = 1] = "RefreshAllStocks";
        JobType[JobType["RefreshSP500Stocks"] = 2] = "RefreshSP500Stocks";
        JobType[JobType["CalculateGlobalIndicators"] = 3] = "CalculateGlobalIndicators";
    })(JobType = exports.JobType || (exports.JobType = {}));
    var JobStatus;
    (function (JobStatus) {
        JobStatus[JobStatus["Pending"] = 0] = "Pending";
        JobStatus[JobStatus["InProgress"] = 1] = "InProgress";
        JobStatus[JobStatus["Completed"] = 2] = "Completed";
        JobStatus[JobStatus["Cancelled"] = 3] = "Cancelled";
        JobStatus[JobStatus["Paused"] = 4] = "Paused";
        JobStatus[JobStatus["Error"] = 99] = "Error";
    })(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
});

define('services/job-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var JobService = (function () {
        function JobService(http) {
            this.http = http;
        }
        JobService.prototype.loadHistory = function (jobUrl) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var jobType, response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            jobType = this.getJobType(jobUrl);
                            return [4 /*yield*/, this.http.fetch("job/history/" + jobType, { method: "get" })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        JobService.prototype.startJob = function (jobUrl) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var jobType, response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            jobType = this.getJobType(jobUrl);
                            return [4 /*yield*/, this.http.fetch("job/start/" + jobType, { method: "post" })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        JobService.prototype.currentJob = function (jobUrl) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var jobType, response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            jobType = this.getJobType(jobUrl);
                            return [4 /*yield*/, this.http.fetch("job/current/" + jobType, { method: "get" })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        JobService.prototype.pauseJob = function (jobId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("job/pause/" + jobId, { method: "put" })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        JobService.prototype.resumeJob = function (jobId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("job/resume/" + jobId, { method: "put" })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        JobService.prototype.cancelJob = function (jobId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("job/cancel/" + jobId, { method: "put" })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        JobService.prototype.getJob = function (jobId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("job/info/" + jobId, { method: "get" })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        JobService.prototype.getJobType = function (jobUrl) {
            switch (jobUrl) {
                case "recalculate-global-indicators":
                    return 3;
                case "refresh-sp500-stocks":
                    return 2;
                case "refresh-all-stocks":
                    return 1;
                default:
                    return 0;
            }
        };
        return JobService;
    }());
    JobService = tslib_1.__decorate([
        aurelia_framework_1.autoinject(),
        tslib_1.__metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], JobService);
    exports.JobService = JobService;
});

define('services/playground-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var PlaygroundService = (function () {
        function PlaygroundService(http) {
            this.http = http;
        }
        PlaygroundService.prototype.loadPlayground = function (ticker, strategyId, bars, date) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("playground/" + ticker + "/" + strategyId + "/" + bars + "/" + date, { method: "get" })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        PlaygroundService.prototype.loadNext = function (ticker, strategyId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("playground/" + ticker + "/" + strategyId + "/next", { method: "get" })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        PlaygroundService.prototype.loadPrev = function (ticker, strategyId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("playground/" + ticker + "/" + strategyId + "/prev", { method: "get" })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return PlaygroundService;
    }());
    PlaygroundService = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], PlaygroundService);
    exports.PlaygroundService = PlaygroundService;
});

define('common/types/rule-models',["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    var RuleInfo = (function () {
        function RuleInfo() {
            this.ruleId = 0;
        }
        return RuleInfo;
    }());
    exports.RuleInfo = RuleInfo;
    var RuleSetInfo = (function () {
        function RuleSetInfo() {
            this.description = "";
            this.ruleSetId = 0;
            this.rules = [];
        }
        return RuleSetInfo;
    }());
    exports.RuleSetInfo = RuleSetInfo;
    var RuleModel = (function () {
        function RuleModel() {
            this.deleted = false;
            this.expanded = false;
            this.deleteMode = false;
            this.orderId = 0;
        }
        return RuleModel;
    }());
    exports.RuleModel = RuleModel;
    var StrategyRuleSetInfo = (function () {
        function StrategyRuleSetInfo() {
            this.expanded = false;
            this.deleteMode = false;
        }
        return StrategyRuleSetInfo;
    }());
    exports.StrategyRuleSetInfo = StrategyRuleSetInfo;
    var StrategyRuleSetViewModel = (function (_super) {
        tslib_1.__extends(StrategyRuleSetViewModel, _super);
        function StrategyRuleSetViewModel() {
            var _this = _super.call(this) || this;
            _this.editMode = false;
            return _this;
        }
        return StrategyRuleSetViewModel;
    }(StrategyRuleSetInfo));
    exports.StrategyRuleSetViewModel = StrategyRuleSetViewModel;
    var RuleViewModel = (function (_super) {
        tslib_1.__extends(RuleViewModel, _super);
        function RuleViewModel() {
            var _this = _super.call(this) || this;
            _this.editMode = false;
            _this.expanded = false;
            _this.deleteMode = false;
            _this.dataSeriesOptionsV1 = [];
            _this.dataSeriesOptionsV2 = [];
            return _this;
        }
        return RuleViewModel;
    }(RuleInfo));
    exports.RuleViewModel = RuleViewModel;
    var RuleSetViewModel = (function (_super) {
        tslib_1.__extends(RuleSetViewModel, _super);
        function RuleSetViewModel() {
            var _this = _super.call(this) || this;
            _this.expanded = false;
            _this.deleteMode = false;
            _this.editMode = false;
            _this.isAdding = false;
            return _this;
        }
        return RuleSetViewModel;
    }(RuleSetInfo));
    exports.RuleSetViewModel = RuleSetViewModel;
});

define('services/rule-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var RuleService = (function () {
        function RuleService(http) {
            this.http = http;
        }
        RuleService.prototype.getRule = function (id) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('rule/' + id, { method: 'get' })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        RuleService.prototype.getRulesForPeriod = function (period) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('rule/' + period + '/all', { method: 'get' })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        RuleService.prototype.deleteRule = function (id) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("rule/" + id, { method: 'delete' })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        RuleService.prototype.saveRule = function (rule) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("rule", { method: 'post', body: aurelia_fetch_client_1.json(rule) })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return RuleService;
    }());
    RuleService = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], RuleService);
    exports.RuleService = RuleService;
});

define('services/rule-set-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var RuleSetService = (function () {
        function RuleSetService(http) {
            this.http = http;
        }
        RuleSetService.prototype.getRuleSet = function (id) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('ruleset/' + id, { method: 'get' })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        RuleSetService.prototype.getRuleSetsForPeriod = function (period) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('ruleset/' + period + '/all', { method: 'get' })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        RuleSetService.prototype.getRuleSetsForStrategy = function (strategyId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('ruleset/strategy/' + strategyId, { method: 'get' })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        RuleSetService.prototype.saveRuleSetsForStrategy = function (strategyId, rulesets) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('ruleset/strategy/' + strategyId, { method: 'post', body: aurelia_fetch_client_1.json(rulesets) })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        RuleSetService.prototype.deleteRuleSet = function (id) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("ruleset/" + id, { method: 'delete' })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        RuleSetService.prototype.saveRuleSet = function (ruleSet) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch("ruleset", { method: 'post', body: aurelia_fetch_client_1.json(ruleSet) })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return RuleSetService;
    }());
    RuleSetService = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], RuleSetService);
    exports.RuleSetService = RuleSetService;
});

define('services/stock-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var StockService = (function () {
        function StockService(http) {
            this.http = http;
        }
        StockService.prototype.updateQuotes = function (ticker) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('stock/' + ticker + '/update-quotes', { method: 'put' })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return StockService;
    }());
    StockService = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], StockService);
    exports.StockService = StockService;
});

define('services/storage-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
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

define('common/types/strategy-models',["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    var StrategySummary = (function () {
        function StrategySummary() {
            this.selected = false;
        }
        return StrategySummary;
    }());
    exports.StrategySummary = StrategySummary;
    var StrategyInfo = (function () {
        function StrategyInfo() {
            this.strategyId = 0;
            this.title = "";
            this.url = "";
            this.summary = "";
            this.blocks = [];
        }
        return StrategyInfo;
    }());
    exports.StrategyInfo = StrategyInfo;
    var StrategyViewModel = (function (_super) {
        tslib_1.__extends(StrategyViewModel, _super);
        function StrategyViewModel() {
            var _this = _super.call(this) || this;
            _this.editMode = false;
            return _this;
        }
        return StrategyViewModel;
    }(StrategyInfo));
    exports.StrategyViewModel = StrategyViewModel;
});

define('services/strategy-service',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var StrategyService = (function () {
        function StrategyService(http) {
            this.http = http;
        }
        StrategyService.prototype.getSummaries = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('strategy/getSummaries', { method: 'get' })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        StrategyService.prototype.getByUrl = function (url) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('strategy/getByUrl/' + url, { method: 'get' })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        StrategyService.prototype.getSummaryByUrl = function (url) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('strategy/getSummaryByUrl/' + url, { method: 'get' })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        StrategyService.prototype.getById = function (id) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('strategy/get/' + id, { method: 'get' })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        StrategyService.prototype.update = function (strategy) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('strategy', { method: 'post', body: aurelia_fetch_client_1.json(strategy) })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        StrategyService.prototype.deleteStrategy = function (strategyId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.fetch('strategy/' + strategyId, { method: 'delete' })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return StrategyService;
    }());
    StrategyService = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], StrategyService);
    exports.StrategyService = StrategyService;
});

define('components/categories/categories',["require", "exports", "tslib", "aurelia-framework", "aurelia-validation", "../../form-validation/bootstrap-form-renderer", "../../services/article-service", "../../services/settings-service", "../../services/account-service"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_validation_1, Bootstrapformrenderer, article_service_1, settings_service_1, account_service_1) {
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
            settings_service_1.SettingsService,
            account_service_1.AccountService,
            aurelia_validation_1.ValidationController])
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

define('dialogs/login/user-login',["require", "exports", "tslib", "aurelia-framework", "aurelia-dialog", "aurelia-validation", "../../form-validation/bootstrap-form-renderer", "../../services/account-service", "aurelia-binding"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_dialog_1, aurelia_validation_1, bootstrap_form_renderer_1, account_service_1, aurelia_binding_1) {
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

define('components/header/dream-header',["require", "exports", "tslib", "aurelia-framework", "aurelia-router", "aurelia-dialog", "../../services/account-service", "../../dialogs/login/user-login"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1, aurelia_dialog_1, account_service_1, user_login_1) {
    "use strict";
    var DreamHeader = (function () {
        function DreamHeader(account, dialogService) {
            this.account = account;
            this.dialogService = dialogService;
            this.user = this.account.currentUser;
        }
        DreamHeader.prototype.attached = function () {
            this.isAuthenticated = this.user.isAuthenticated;
            this.loginUrl = this.router.generate("user") + '/profile';
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

define('components/market/navigation',["require", "exports", "tslib", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    var Navigation = (function () {
        function Navigation(eventAggregator) {
            this.eventAggregator = eventAggregator;
            this.url = "";
        }
        Navigation.prototype.configureRouter = function (config, router) {
            config.title = "Global Markets";
            config.map([
                { route: ["sp500"], moduleId: "./market-indices/sp500/sp500", name: "market-indices-sp500", title: "S&P 500 Index", nav: true },
                { route: ["jobs"], moduleId: "./jobs-dashboard/navigation", name: "jobs-dashboard", title: "Jobs Dashboard", nav: true },
                { route: "", redirect: "sp500" }
            ]);
            this.router = router;
            this.section = config.title;
        };
        Navigation.prototype.attached = function () {
            this.eventAggregator.publish("this.marketChangedEvent", this.url);
        };
        return Navigation;
    }());
    Navigation = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], Navigation);
    exports.Navigation = Navigation;
});

define('components/strategies/navigation',["require", "exports", "tslib", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    var Navigation = (function () {
        function Navigation(eventAggregator) {
            this.eventAggregator = eventAggregator;
            this.url = "";
        }
        Navigation.prototype.configureRouter = function (config, router) {
            config.title = "Strategies";
            config.map([
                { route: ["", "strategy/:strategyUrl"], moduleId: "./strategy", name: "strategy", title: "Strategy", nav: true },
                { route: ["rules", "rules/:period"], moduleId: "./rules/rules", name: "manage-rules", title: "Manage Rules", nav: false, auth: true },
                { route: ["rule-sets", "rule-sets/:period"], moduleId: "./rules/rule-sets", name: "manage-rule-sets", title: "Manage Rule Sets", nav: false, auth: true },
                { route: ["strategy-rule-sets", "strategy-rule-sets/:strategyUrl"], moduleId: "./strategy-rule-sets", name: "strategy-rule-sets", title: "Strategy Rule Sets", nav: false, auth: true },
                { route: ["strategy-playground", "strategy-playground/:strategyUrl", 'strategy-playground/:strategyUrl/:ticker'], moduleId: "./strategy-playground", name: "strategy-playground", title: "Strategy Playground", nav: false, auth: true },
                { route: ["indicators", "indicators/:period"], moduleId: "./indicators/indicators", name: "manage-indicators", title: "Manage Indicators", nav: false, auth: true }
            ]);
            this.router = router;
            this.section = config.title;
        };
        Navigation.prototype.attached = function () {
            this.eventAggregator.publish("this.strategyChangedEvent", this.url);
        };
        return Navigation;
    }());
    Navigation = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], Navigation);
    exports.Navigation = Navigation;
});

define('components/strategies/strategy-playground',["require", "exports", "tslib", "toastr", "aurelia-framework", "../../services/strategy-service", "../../services/company-service", "../../services/stock-service", "../../services/playground-service", "../../services/settings-service"], function (require, exports, tslib_1, toastr, aurelia_framework_1, strategy_service_1, company_service_1, stock_service_1, playground_service_1, settings_service_1) {
    "use strict";
    var StrategyPlayground = (function () {
        function StrategyPlayground(strategyService, companyService, stockService, playgroundService, settings) {
            this.strategyService = strategyService;
            this.companyService = companyService;
            this.stockService = stockService;
            this.playgroundService = playgroundService;
            this.settings = settings;
            this.periods = [];
            this.searchCriteria = "";
            this.companies = [];
            this.chartWeeklyContainer = "weekly-container";
            this.playgroundLoaded = false;
            this.streaming = false;
            this.periods = this.settings.periods;
        }
        StrategyPlayground.prototype.activate = function (params, routeConfig, navigationInstruction) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response, company, e_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.router = navigationInstruction.router;
                            this.routeName = routeConfig.name;
                            this.playgroundLoaded = false;
                            if (!params.strategyUrl) return [3 /*break*/, 9];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 8, , 9]);
                            return [4 /*yield*/, this.strategyService.getSummaryByUrl(params.strategyUrl)];
                        case 2:
                            response = _a.sent();
                            if (!(response && response.strategyId > 0)) return [3 /*break*/, 6];
                            this.strategy = response;
                            if (!params.ticker) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.companyService.getCompany(params.ticker)];
                        case 3:
                            company = _a.sent();
                            if (!(company && company.ticker)) return [3 /*break*/, 5];
                            this.company = company;
                            return [4 /*yield*/, this.loadPlayground()];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            toastr.error("Failed to load summary for url " + params.strategyUrl, "Load Summary Failed");
                            _a.label = 7;
                        case 7: return [3 /*break*/, 9];
                        case 8:
                            e_1 = _a.sent();
                            toastr.error("Failed to load summary for url " + params.strategyUrl, "Exception");
                            return [3 /*break*/, 9];
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        StrategyPlayground.prototype.searchCompanies = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.companyService.searchCompanies(this.searchCriteria, 15)];
                        case 1:
                            _a.companies = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        StrategyPlayground.prototype.selectCompany = function (company) {
            var url = "/strategies/strategy-playground/" + this.strategy.url + "/" + company.ticker.toLowerCase();
            company.expanded = false;
            this.playgroundLoaded = false;
            this.router.navigate(url);
        };
        StrategyPlayground.prototype.updateCompany = function (ticker) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a, e_2;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, this.stockService.updateQuotes(ticker)];
                        case 1:
                            _b.sent();
                            _a = this;
                            return [4 /*yield*/, this.companyService.getCompany(ticker)];
                        case 2:
                            _a.company = _b.sent();
                            this.company.show = true;
                            return [3 /*break*/, 4];
                        case 3:
                            e_2 = _b.sent();
                            toastr.error("Failed to load company for ticker " + ticker, "Exception");
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        StrategyPlayground.prototype.streamData = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var self;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            self = this;
                            return [4 /*yield*/, this.loadNext().then(function (data) {
                                    var flag = data;
                                    setTimeout(function () {
                                        if (self.streaming && flag) {
                                            self.streamData();
                                        }
                                    }, 500);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        StrategyPlayground.prototype.startStreaming = function () {
            this.streaming = true;
            this.streamData();
        };
        StrategyPlayground.prototype.stopStreaming = function () {
            this.streaming = false;
        };
        StrategyPlayground.prototype.loadPlayground = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var playground, e_3;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.playgroundService.loadPlayground(this.company.ticker, this.strategy.strategyId, 100, 0)];
                        case 1:
                            playground = _a.sent();
                            if (playground && playground.company) {
                                this.playgroundLoaded = true;
                                this.playgroundModel = playground;
                            }
                            else {
                                toastr.error("Failed to load playground for company " + this.company.name, "Load Playground Failed");
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            e_3 = _a.sent();
                            toastr.error("Failed to load playground", "Exception");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        StrategyPlayground.prototype.loadNext = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var playground, e_4;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.playgroundService.loadNext(this.company.ticker, this.strategy.strategyId)];
                        case 1:
                            playground = _a.sent();
                            if (playground && playground.company) {
                                this.playgroundModel = playground;
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            e_4 = _a.sent();
                            toastr.error("Failed to load next playground", "Exception");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        StrategyPlayground.prototype.loadPrev = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var playground, e_5;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.playgroundService.loadPrev(this.company.ticker, this.strategy.strategyId)];
                        case 1:
                            playground = _a.sent();
                            if (playground && playground.company) {
                                this.playgroundModel = playground;
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            e_5 = _a.sent();
                            toastr.error("Failed to load previous playground", "Exception");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return StrategyPlayground;
    }());
    StrategyPlayground = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [strategy_service_1.StrategyService,
            company_service_1.CompanyService,
            stock_service_1.StockService,
            playground_service_1.PlaygroundService,
            settings_service_1.SettingsService])
    ], StrategyPlayground);
    exports.StrategyPlayground = StrategyPlayground;
});

define('components/strategies/strategy-rule-sets',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-event-aggregator", "../../services/strategy-service", "../../services/rule-set-service", "../../services/settings-service", "../../common/types/rule-models"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_event_aggregator_1, strategy_service_1, rule_set_service_1, settings_service_1, rule_models_1) {
    "use strict";
    var StrategyRuleSets = (function () {
        function StrategyRuleSets(eventAggregator, strategyService, ruleSetService, settings) {
            this.eventAggregator = eventAggregator;
            this.strategyService = strategyService;
            this.ruleSetService = ruleSetService;
            this.subscriptions = [];
            this.periods = [];
            this.editMode = false;
            this.rulesets = [];
            this.originalRulesets = [];
            this.periodRuleSets = [];
            this.addingMode = false;
            this.periods = settings.periods;
            this.subscribe();
        }
        StrategyRuleSets.prototype.subscribe = function () {
            var _this = this;
            this.subscriptions.push(this.eventAggregator.subscribe("strategy-rule-set-up", function (ruleSetId) { return _this.moveRuleSetUp(ruleSetId); }));
            this.subscriptions.push(this.eventAggregator.subscribe("strategy-rule-set-down", function (ruleSetId) { return _this.moveRuleSetDown(ruleSetId); }));
            this.subscriptions.push(this.eventAggregator.subscribe("strategy-rule-set-detach", function (ruleSetId) { return _this.detachRuleSet(ruleSetId); }));
        };
        StrategyRuleSets.prototype.detached = function () {
            if (this.subscriptions.length > 0) {
                this.subscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
            }
        };
        StrategyRuleSets.prototype.moveRuleSetUp = function (ruleSetId) {
            var index = this.rulesets.findIndex(function (item) { return item.ruleSetId === ruleSetId; });
            if (index > 0) {
                this.rulesets.splice(index - 1, 0, this.rulesets.splice(index, 1)[0]);
            }
        };
        StrategyRuleSets.prototype.moveRuleSetDown = function (ruleSetId) {
            var index = this.rulesets.findIndex(function (item) { return item.ruleSetId === ruleSetId; });
            if (index > -1 && index < this.rulesets.length - 1) {
                this.rulesets.splice(index + 1, 0, this.rulesets.splice(index, 1)[0]);
            }
        };
        StrategyRuleSets.prototype.detachRuleSet = function (ruleSetId) {
            var index = this.rulesets.findIndex(function (item) { return item.ruleSetId === ruleSetId; });
            if (index !== -1) {
                this.rulesets.splice(index, 1);
            }
        };
        StrategyRuleSets.prototype.activate = function (params) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var strategy, e_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!params.strategyUrl) return [3 /*break*/, 7];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 6, , 7]);
                            return [4 /*yield*/, this.strategyService.getSummaryByUrl(params.strategyUrl)];
                        case 2:
                            strategy = _a.sent();
                            if (!(strategy && strategy.strategyId)) return [3 /*break*/, 4];
                            this.strategy = strategy;
                            return [4 /*yield*/, this.loadRuleSets(this.strategy.strategyId)];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            toastr.error("Failed to load summary for url " + params.strategyUrl, "Load Summary Failed");
                            _a.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            e_1 = _a.sent();
                            toastr.error("Failed to load summary for url " + params.strategyUrl, "Exception");
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        StrategyRuleSets.prototype.loadRuleSets = function (strategyId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.ruleSetService.getRuleSetsForStrategy(strategyId)];
                        case 1:
                            _a.rulesets = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        StrategyRuleSets.prototype.startEdit = function () {
            var _this = this;
            this.originalRulesets = [];
            this.rulesets.forEach(function (item) {
                _this.originalRulesets.push(Object.assign({}, item));
            });
            this.setEditMode(true);
        };
        StrategyRuleSets.prototype.cancelEdit = function () {
            this.rulesets = this.originalRulesets;
            this.setEditMode(false);
        };
        StrategyRuleSets.prototype.setEditMode = function (mode) {
            this.editMode = mode;
            if (this.rulesets.length > 0) {
                this.rulesets.forEach(function (item) {
                    item.editMode = mode;
                });
            }
        };
        StrategyRuleSets.prototype.addRuleSet = function () {
            this.attachedRuleSet = {
                ruleSetId: 0,
                period: -1,
                description: "",
                name: ""
            };
            this.addingMode = true;
        };
        StrategyRuleSets.prototype.cancelAddRuleSet = function () {
            this.addingMode = false;
        };
        StrategyRuleSets.prototype.onPeriodSelected = function () {
            var _this = this;
            this.ruleSetService.getRuleSetsForPeriod(this.attachedRuleSet.period)
                .then(function (data) {
                _this.periodRuleSets = data;
            });
        };
        StrategyRuleSets.prototype.onRuleSetSelected = function () {
            var _this = this;
            var index = this.periodRuleSets.findIndex(function (r) { return r.ruleSetId === _this.attachedRuleSet.ruleSetId; });
            if (index !== -1) {
                this.attachedRuleSet = this.periodRuleSets[index];
            }
        };
        StrategyRuleSets.prototype.confirmAddRuleSet = function () {
            var ruleset = new rule_models_1.StrategyRuleSetViewModel();
            ruleset.editMode = true;
            ruleset.ruleSetName = this.attachedRuleSet.name;
            ruleset.ruleSetDescription = this.attachedRuleSet.description;
            ruleset.ruleSetPeriod = this.attachedRuleSet.period;
            ruleset.ruleSetId = this.attachedRuleSet.ruleSetId;
            if (this.validateRuleSet(ruleset)) {
                this.rulesets.push(ruleset);
                this.addingMode = false;
            }
        };
        StrategyRuleSets.prototype.validateRuleSet = function (ruleSet) {
            var result = true;
            if (ruleSet.ruleSetId > 0) {
                var index = this.rulesets.findIndex(function (r) { return r.ruleSetId === ruleSet.ruleSetId; });
                if (index !== -1) {
                    result = false;
                    toastr.warning("Selected Rule Set is already part of this strategy", "Validation Error");
                }
            }
            else {
                result = false;
                toastr.warning("Selected Rule Set doesn't have ID", "Validation Error");
            }
            return result;
        };
        StrategyRuleSets.prototype.trySaveRuleSets = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.rulesets && this.rulesets.length > 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.saveRuleSets()];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            toastr.warning("At least 1 rule set must be attached", "Validation Error");
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        StrategyRuleSets.prototype.saveRuleSets = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var orderId, strategyId, e_2;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            orderId = 1;
                            strategyId = this.strategy.strategyId;
                            this.rulesets.forEach(function (item) {
                                item.ruleSetOrderId = orderId;
                                item.strategyId = strategyId;
                                orderId = orderId + 1;
                            });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.ruleSetService.saveRuleSetsForStrategy(this.strategy.strategyId, this.rulesets)];
                        case 2:
                            _a.sent();
                            this.setEditMode(false);
                            toastr.success("Rule Sets are successfully saved", "Rule Sets Attached");
                            return [3 /*break*/, 4];
                        case 3:
                            e_2 = _a.sent();
                            toastr.error("Rule Sets failed to save", "Exception");
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return StrategyRuleSets;
    }());
    StrategyRuleSets = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator,
            strategy_service_1.StrategyService,
            rule_set_service_1.RuleSetService,
            settings_service_1.SettingsService])
    ], StrategyRuleSets);
    exports.StrategyRuleSets = StrategyRuleSets;
});

define('components/strategies/strategy',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-event-aggregator", "aurelia-validation", "../../services/strategy-service", "../../form-validation/bootstrap-form-renderer", "../../services/account-service", "../../common/types/strategy-models"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_event_aggregator_1, aurelia_validation_1, strategy_service_1, bootstrap_form_renderer_1, account_service_1, strategy_models_1) {
    "use strict";
    var Strategy = (function () {
        function Strategy(eventAggregator, strategyService, account, validation) {
            this.eventAggregator = eventAggregator;
            this.strategyService = strategyService;
            this.validation = validation;
            this.powerUser = false;
            this.editMode = false;
            this.subscriptions = [];
            this.errors = [];
            this.summaries = [];
            this.powerUser = account.currentUser.isAuthenticated;
            this.validation.validateTrigger = aurelia_validation_1.validateTrigger.change;
            this.validation.addRenderer(new bootstrap_form_renderer_1.BootstrapFormRenderer());
        }
        Strategy.prototype.activate = function (params, routeConfig, navigationInstruction) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.router = navigationInstruction.router;
                            this.routeName = routeConfig.name;
                            _a = this;
                            return [4 /*yield*/, this.strategyService.getSummaries()];
                        case 1:
                            _a.summaries = _b.sent();
                            return [4 /*yield*/, this.loadStrategy(params.strategyUrl)];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Strategy.prototype.addStrategy = function () {
            this.strategy = new strategy_models_1.StrategyViewModel();
            this.startEdit();
            this.validation.validate();
        };
        Strategy.prototype.deleteStrategy = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var e_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.strategy && this.strategy.strategyId > 0)) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.strategyService.deleteStrategy(this.strategy.strategyId)];
                        case 2:
                            _a.sent();
                            toastr.success("Strategy deleted successfully", "Strategy Deleted");
                            this.setEditMode(false);
                            this.router.navigate("/strategies");
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            toastr.error("Failed to delete strategy", "Delete Failed");
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        Strategy.prototype.setActiveStatus = function (flag) {
            var _this = this;
            this.strategy.active = flag;
            var summary = this.summaries.find(function (s) { return s.strategyId === _this.strategy.strategyId; });
            if (summary) {
                summary.active = flag;
            }
        };
        Strategy.prototype.navigateToStrategy = function (url) {
            if (url && url.length > 0) {
                this.setEditMode(false);
                var strategyUrl = "/strategies/strategy/" + url;
                this.router.navigate(strategyUrl);
            }
        };
        Strategy.prototype.loadStrategy = function (url) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a, e_2;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(url && url.length > 0)) return [3 /*break*/, 5];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            _a = this;
                            return [4 /*yield*/, this.strategyService.getByUrl(url)];
                        case 2:
                            _a.strategy = _b.sent();
                            if (!this.strategy.blocks) {
                                this.strategy.blocks = [];
                            }
                            this.selectActiveSummary(this.strategy.strategyId);
                            return [3 /*break*/, 4];
                        case 3:
                            e_2 = _b.sent();
                            toastr.error("Failed to load strategy", "Load Failed");
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            this.navigateToDefaultStrategy();
                            _b.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        Strategy.prototype.selectActiveSummary = function (id) {
            this.summaries.forEach(function (item) {
                item.selected = item.strategyId === id;
            });
        };
        Strategy.prototype.navigateToDefaultStrategy = function () {
            if (this.summaries && this.summaries.length > 0) {
                var strategyUrl = "/strategies/strategy/" + this.summaries[0].url;
                this.router.navigate(strategyUrl);
            }
        };
        Strategy.prototype.setEditMode = function (editMode) {
            this.editMode = editMode;
            this.eventAggregator.publish("article-edit-mode-changed", editMode);
        };
        Strategy.prototype.startEdit = function () {
            this.originalStrategy = Object.assign({}, this.strategy);
            this.setEditMode(true);
            aurelia_validation_1.ValidationRules
                .ensure(function (u) { return u.title; }).displayName("Strategy name").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (u) { return u.summary; }).displayName("Summary").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (u) { return u.url; }).displayName("Strategy url").required().withMessage("${$displayName} cannot be blank.")
                .on(this.strategy);
        };
        Strategy.prototype.cancelEdit = function () {
            this.setEditMode(false);
            if (this.strategy.strategyId > 0) {
                this.strategy = this.originalStrategy;
                this.strategy.editMode = false;
            }
            else {
                this.strategy.deleted = true;
            }
            this.validation.reset();
        };
        Strategy.prototype.trySaveArticle = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var valid, response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            valid = false;
                            return [4 /*yield*/, this.validation.validate()];
                        case 1:
                            response = _a.sent();
                            if (response.valid) {
                                if (this.articlePartsValidate()) {
                                    valid = true;
                                }
                            }
                            if (!valid) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.saveStrategy()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            toastr.warning("Please correct validation errors.", "Validation Errors");
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        Strategy.prototype.articlePartsValidate = function () {
            if (this.strategy.blocks.length > 0) {
                var index = this.strategy.blocks.findIndex(function (b) { return !b.valid; });
                return index === -1;
            }
            else {
                toastr.warning("Article is empty", "Validation Errors");
                return false;
            }
        };
        Strategy.prototype.saveStrategy = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response, e_3;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.setEditMode(false);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.strategyService.update(this.strategy)];
                        case 2:
                            response = _a.sent();
                            if (response.url.length > 0) {
                                toastr.success("Strategy staved successfully!", 'Strategy saved');
                                this.navigateToStrategy(response.url);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            e_3 = _a.sent();
                            toastr.error("Failed to save strategy!", "Application Error");
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return Strategy;
    }());
    Strategy = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator,
            strategy_service_1.StrategyService,
            account_service_1.AccountService,
            aurelia_validation_1.ValidationController])
    ], Strategy);
    exports.Strategy = Strategy;
});

define('components/studies/navigation',["require", "exports", "tslib", "aurelia-framework", "../../services/article-service", "../../services/settings-service"], function (require, exports, tslib_1, aurelia_framework_1, article_service_1, settings_service_1) {
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

define('components/studies/study',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-event-aggregator", "./navigation", "aurelia-validation", "../../services/article-service", "../../form-validation/bootstrap-form-renderer", "../../services/account-service"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_event_aggregator_1, navigation_1, aurelia_validation_1, article_service_1, bootstrap_form_renderer_1, account_service_1) {
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
                { route: ["", "login"], moduleId: "./login", name: "user-login", title: "Login", nav: false },
                {
                    route: ["profile"],
                    moduleId: "./profile",
                    name: "user-profile",
                    title: "Profile",
                    nav: false,
                    auth: true
                }
            ]);
            this.router = router;
        };
        return Navigation;
    }());
    exports.Navigation = Navigation;
});

define('components/user/profile',["require", "exports"], function (require, exports) {
    "use strict";
    var Profile = (function () {
        function Profile() {
        }
        return Profile;
    }());
    exports.Profile = Profile;
});

define('resources/attributes/first-letter-span',["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    var FirstLetterSpan = (function () {
        function FirstLetterSpan(element) {
            this.element = element;
            if (this.element.childElementCount === 0) {
                this.wrapFirstLetterInSpan();
            }
        }
        FirstLetterSpan.prototype.wrapFirstLetterInSpan = function () {
            var text = this.element.innerHTML;
            var transformed = text.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
            transformed = transformed.replace(/\b([a-z])/gi, "<span>$1</span>");
            this.element.innerHTML = transformed;
        };
        return FirstLetterSpan;
    }());
    FirstLetterSpan = tslib_1.__decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customAttribute('first-letter-span'),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], FirstLetterSpan);
    exports.FirstLetterSpan = FirstLetterSpan;
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

define('components/market/jobs-dashboard/navigation',["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    var Navigation = (function () {
        function Navigation() {
        }
        Navigation.prototype.configureRouter = function (config, router) {
            config.title = "Jobs";
            config.map([
                { route: ["recalculate-global-indicators"], moduleId: "./jobs/job", name: "recalculate-global-indicators", title: "Recalculate Global Indicators", nav: true },
                { route: ["refresh-sp500-stocks"], moduleId: "./jobs/job", name: "refresh-sp500-stocks", title: "Refresh SP500 Stocks", nav: true },
                { route: ["refresh-all-stocks"], moduleId: "./jobs/job", name: "refresh-all-stocks", title: "Refresh All Stocks", nav: true },
                { route: "", redirect: "recalculate-global-indicators" }
            ]);
            this.router = router;
        };
        return Navigation;
    }());
    Navigation = tslib_1.__decorate([
        aurelia_framework_1.autoinject
    ], Navigation);
    exports.Navigation = Navigation;
});

define('components/market/market-nav/market-nav',["require", "exports", "tslib", "aurelia-framework", "aurelia-router"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    var MarketNav = (function () {
        function MarketNav() {
            this.router = null;
        }
        return MarketNav;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", aurelia_router_1.Router)
    ], MarketNav.prototype, "router", void 0);
    exports.MarketNav = MarketNav;
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

define('components/nav-menu/sub-nav/sub-nav',["require", "exports", "tslib", "aurelia-framework", "aurelia-event-aggregator", "../../../services/account-service"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_event_aggregator_1, account_service_1) {
    "use strict";
    var SubNav = (function () {
        function SubNav(account, eventAggregator) {
            this.account = account;
            this.eventAggregator = eventAggregator;
            this.powerUser = this.account.currentUser.isAuthenticated;
        }
        SubNav.prototype.publishEvent = function (channel, params) {
            this.eventAggregator.publish(channel, params);
        };
        SubNav.prototype.attached = function () {
        };
        return SubNav;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], SubNav.prototype, "router", void 0);
    SubNav = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService, aurelia_event_aggregator_1.EventAggregator])
    ], SubNav);
    exports.SubNav = SubNav;
});

define('components/strategies/indicators/indicators',["require", "exports", "tslib", "aurelia-framework", "../../../services/indicator-service", "../../../services/settings-service", "../../../common/types/indicator-models"], function (require, exports, tslib_1, aurelia_framework_1, indicator_service_1, settings_service_1, indicator_models_1) {
    "use strict";
    var Indicators = (function () {
        function Indicators(indicatorService, globalSettings) {
            this.indicatorService = indicatorService;
            this.globalSettings = globalSettings;
            this.indicators = [];
            this.periods = [];
            this.activePeriod = this.globalSettings.defaultPeriod;
            this.periods = this.globalSettings.periods;
        }
        Indicators.prototype.activate = function (params, routeConfig, navigationInstruction) {
            this.router = navigationInstruction.router;
            this.routeName = routeConfig.name;
            if (params.period) {
                this.activePeriod = this.activatePeriod(params.period);
                this.loadIndicators(this.activePeriod.id);
            }
            else {
                var defaultUrl = "/strategies/indicators/" + this.activePeriod.name.toLowerCase();
                this.router.navigate(defaultUrl);
            }
        };
        Indicators.prototype.activatePeriod = function (periodUrl) {
            this.periods.forEach(function (element) {
                element.active = false;
            });
            var result;
            var index = this.periods.findIndex(function (i) { return i.name.toLowerCase() === periodUrl.toLowerCase(); });
            if (index === -1) {
                result = this.activePeriod;
            }
            else {
                result = this.periods[index];
            }
            return result;
        };
        Indicators.prototype.addIndicator = function () {
            var indicator = new indicator_models_1.IndicatorModel();
            indicator.isNew = true;
            indicator.expanded = true;
            indicator.period = this.activePeriod.id;
            indicator.description = "New Indicator";
            indicator.params = [];
            this.indicators.push(indicator);
        };
        Indicators.prototype.loadIndicatorsForPeriod = function (period) {
            var url = "/strategies/indicators/" + period.url;
            this.router.navigate(url);
        };
        Indicators.prototype.isPeriodActive = function (period) {
            return period.id === this.activePeriod.id;
        };
        Indicators.prototype.loadIndicators = function (periodId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.indicatorService.getIndicatorsForPeriod(periodId)];
                        case 1:
                            _a.indicators = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Indicators;
    }());
    Indicators = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [indicator_service_1.IndicatorService, settings_service_1.SettingsService])
    ], Indicators);
    exports.Indicators = Indicators;
});

define('components/strategies/rules/rule-sets',["require", "exports", "tslib", "aurelia-framework", "../../../services/rule-set-service", "../../../services/settings-service", "../../../services/account-service", "../../../common/types/rule-models"], function (require, exports, tslib_1, aurelia_framework_1, rule_set_service_1, settings_service_1, account_service_1, rule_models_1) {
    "use strict";
    var RuleSets = (function () {
        function RuleSets(ruleSetService, globalSettings, account) {
            this.ruleSetService = ruleSetService;
            this.globalSettings = globalSettings;
            this.rulesets = [];
            this.errors = [];
            this.periods = [];
            this.powerUser = account.currentUser.isAuthenticated;
            this.activePeriod = this.globalSettings.defaultPeriod;
            this.periods = this.globalSettings.periods;
        }
        RuleSets.prototype.activate = function (params, routeConfig, navigationInstruction) {
            this.router = navigationInstruction.router;
            this.routeName = routeConfig.name;
            if (params.period) {
                this.activePeriod = this.activatePeriod(params.period);
                this.loadRuleSets(this.activePeriod.id);
            }
            else {
                var defaultUrl = '/strategies/rule-sets/' + this.activePeriod.name.toLowerCase();
                this.router.navigate(defaultUrl);
            }
        };
        RuleSets.prototype.activatePeriod = function (periodUrl) {
            this.periods.forEach(function (element) {
                element.active = false;
            });
            var result;
            var index = this.periods.findIndex(function (i) { return i.name.toLowerCase() === periodUrl.toLowerCase(); });
            if (index === -1) {
                result = this.activePeriod;
            }
            else {
                result = this.periods[index];
            }
            return result;
        };
        RuleSets.prototype.addRuleSet = function () {
            var ruleset = new rule_models_1.RuleSetViewModel();
            ruleset.name = "New Rule set";
            ruleset.expanded = true;
            ruleset.period = this.activePeriod.id;
            ruleset.editMode = true;
            this.rulesets.push(ruleset);
        };
        RuleSets.prototype.loadRuleSetsForPeriod = function (period) {
            var url = "/strategies/rule-sets/" + period.url;
            this.router.navigate(url);
        };
        RuleSets.prototype.isPeriodActive = function (period) {
            return period.id === this.activePeriod.id;
        };
        RuleSets.prototype.loadRuleSets = function (periodId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.ruleSetService.getRuleSetsForPeriod(periodId)];
                        case 1:
                            _a.rulesets = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return RuleSets;
    }());
    RuleSets = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [rule_set_service_1.RuleSetService,
            settings_service_1.SettingsService,
            account_service_1.AccountService])
    ], RuleSets);
    exports.RuleSets = RuleSets;
});

define('components/strategies/rules/rules',["require", "exports", "tslib", "aurelia-framework", "../../../services/rule-service", "../../../services/settings-service", "../../../common/types/rule-models"], function (require, exports, tslib_1, aurelia_framework_1, rule_service_1, settings_service_1, rule_models_1) {
    "use strict";
    var Rules = (function () {
        function Rules(ruleService, globalSettings) {
            this.ruleService = ruleService;
            this.globalSettings = globalSettings;
            this.rules = [];
            this.periods = [];
            this.errors = [];
            this.activePeriod = this.globalSettings.defaultPeriod;
            this.periods = this.globalSettings.periods;
        }
        Rules.prototype.activate = function (params, routeConfig, navigationInstruction) {
            this.router = navigationInstruction.router;
            this.routeName = routeConfig.name;
            if (params.period) {
                this.activePeriod = this.activatePeriod(params.period);
                this.loadRules(this.activePeriod.id);
            }
            else {
                var defaultUrl = '/strategies/rules/' + this.activePeriod.name.toLowerCase();
                this.router.navigate(defaultUrl);
            }
        };
        Rules.prototype.activatePeriod = function (periodUrl) {
            this.periods.forEach(function (element) {
                element.active = false;
            });
            var result;
            var index = this.periods.findIndex(function (i) { return i.name.toLowerCase() === periodUrl.toLowerCase(); });
            if (index === -1) {
                result = this.activePeriod;
            }
            else {
                result = this.periods[index];
            }
            return result;
        };
        Rules.prototype.addRule = function () {
            var rule = new rule_models_1.RuleViewModel();
            rule.name = "New Rule";
            rule.expanded = true;
            rule.period = this.activePeriod.id;
            rule.editMode = true;
            this.rules.push(rule);
        };
        Rules.prototype.loadRulesForPeriod = function (period) {
            var url = "/strategies/rules/" + period.url;
            this.router.navigate(url);
        };
        Rules.prototype.isPeriodActive = function (period) {
            return period.id === this.activePeriod.id;
        };
        Rules.prototype.loadRules = function (periodId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.ruleService.getRulesForPeriod(periodId)];
                        case 1:
                            _a.rules = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Rules;
    }());
    Rules = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [rule_service_1.RuleService, settings_service_1.SettingsService])
    ], Rules);
    exports.Rules = Rules;
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

define('resources/elements/article-parts/article-part-image',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-binding", "../../../services/storage-service"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_binding_1, storage_service_1) {
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
                this.part.imageUrl = "";
            }
            if (!this.part.text) {
                this.part.text = "";
            }
            this.subscriptions.push(this.bindingEngine.propertyObserver(this.part, "imageUrl")
                .subscribe(function () { return _this.validate(); }));
            this.subscriptions.push(this.bindingEngine.propertyObserver(this.part, "text")
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
                        toastr.warning("Uploading selected file", "Uploading...");
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
            this.subscriptions.push(this.bindingEngine.propertyObserver(this.part, "text")
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
            var _this = this;
            if (this.partsSubscriptions.length > 0) {
                this.partsSubscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
                this.partsSubscriptions = [];
            }
            if (this.parts && this.parts.length > 0) {
                this.parts.forEach(function (item) {
                    _this.partsSubscriptions.push(_this.bindingEngine.propertyObserver(item, "action")
                        .subscribe(function (action) { return _this.onPartActionChange(action); }));
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

define('resources/elements/chart/stock-chart',["require", "exports", "tslib", "aurelia-framework", "../../../common/types/playground-models", "../../../infrastructure/event-emitter"], function (require, exports, tslib_1, aurelia_framework_1, playground_models_1, event_emitter_1) {
    "use strict";
    var StockChart = (function () {
        function StockChart(eventEmitter) {
            this.eventEmitter = eventEmitter;
            this.subscriptions = [];
            this.isAttached = false;
        }
        StockChart.prototype.modelChanged = function () {
            if (this.model && this.model.company && this.isAttached) {
                $("#container-Weekly").empty();
                $("#container-Daily").empty();
                this.drawChart();
            }
        };
        StockChart.prototype.attached = function () {
            var _this = this;
            this.isAttached = true;
            if (this.model && this.model.company) {
                this.drawChart();
            }
            this.subscriptions.push(this.eventEmitter.subscribe("ChartData", function (data) { return _this.loadChartData(data); }));
        };
        StockChart.prototype.detached = function () {
            if (this.subscriptions.length > 0) {
                this.subscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
            }
        };
        StockChart.prototype.loadChartData = function (data) {
            console.log(data.company.name);
        };
        StockChart.prototype.drawChart = function () {
            var _this = this;
            this.model.periods.forEach(function (period) {
                var plotNumber = 0;
                _this.chart = anychart.stock();
                period.table = anychart.data.table();
                period.quotes.forEach(function (item) {
                    var row = [[item.date, item.open, item.high, item.low, item.close, item.volume]];
                    period.table.addData(row);
                });
                var mapping = period.table.mapAs();
                mapping.addField("open", 1, anychart.enums.AggregationType.FIRST);
                mapping.addField("high", 2, anychart.enums.AggregationType.MAX);
                mapping.addField("low", 3, anychart.enums.AggregationType.MIN);
                mapping.addField("close", 4, anychart.enums.AggregationType.LAST);
                var series = _this.chart.plot(plotNumber).ohlc(mapping);
                var seriesName = _this.model.company.name + " (" + period.name + ")";
                series.name(seriesName);
                var legend = series.legendItem();
                legend.text(seriesName);
                _this.chart.plot(plotNumber).grid(0).enabled(true);
                _this.chart.plot(plotNumber).grid(0).stroke("#EEE");
                period.indicators.forEach(function (indicator) {
                    var indicatorPlot = _this.chart.plot(plotNumber);
                    indicator.table = anychart.data.table(0);
                    var fieldValues = null;
                    indicator.indicatorValues.forEach(function (value) {
                        var row = [];
                        row.push(value.date);
                        value.values.forEach(function (item) {
                            row.push(item.value);
                        });
                        if (!fieldValues) {
                            fieldValues = value.values;
                        }
                        indicator.table.addData([row]);
                    });
                    var indicatorMapping = indicator.table.mapAs();
                    var index = 0;
                    fieldValues.forEach(function (item) {
                        index++;
                        indicatorMapping.addField(item.name, index);
                    });
                    var indicatorSeries = indicatorPlot.line(indicatorMapping);
                    indicatorSeries.name(indicator.name);
                });
                var volumePlot = _this.chart.plot(1 + plotNumber);
                var volumeMapping = period.table.mapAs();
                volumeMapping.addField("value", 5);
                volumePlot.column(volumeMapping).name("Volume");
                volumePlot.height("30%");
                _this.chart.title(seriesName);
                _this.chart.container("container-" + period.name);
                _this.chart.draw();
            });
        };
        return StockChart;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", playground_models_1.PlaygroundViewModel)
    ], StockChart.prototype, "model", void 0);
    StockChart = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [event_emitter_1.EventEmitter])
    ], StockChart);
    exports.StockChart = StockChart;
});

define('resources/elements/company/company-details',["require", "exports", "tslib", "aurelia-framework", "moment"], function (require, exports, tslib_1, aurelia_framework_1, moment) {
    "use strict";
    var CompanyDetails = (function () {
        function CompanyDetails() {
        }
        CompanyDetails.prototype.formatDate = function (date) {
            var date1 = moment(date);
            var date2 = moment(new Date());
            var diff = date2.diff(date1);
            var duration = moment.duration(diff);
            var days = duration.asDays();
            return Math.round(days) + ' days ago';
        };
        return CompanyDetails;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], CompanyDetails.prototype, "company", void 0);
    exports.CompanyDetails = CompanyDetails;
});

define('resources/elements/indicator/indicator',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-validation", "../../../services/indicator-service", "../../../form-validation/bootstrap-form-renderer", "../../../services/account-service", "../../../services/settings-service", "../../../common/types/indicator-models"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_validation_1, indicator_service_1, bootstrap_form_renderer_1, account_service_1, settings_service_1, indicator_models_1) {
    "use strict";
    var Indicator = (function () {
        function Indicator(indicatorService, account, validation, globalSettings) {
            this.indicatorService = indicatorService;
            this.account = account;
            this.validation = validation;
            this.globalSettings = globalSettings;
            this.powerUser = this.account.currentUser.isAuthenticated;
            this.validation.validateTrigger = aurelia_validation_1.validateTrigger.change;
            this.validation.addRenderer(new bootstrap_form_renderer_1.BootstrapFormRenderer());
            this.errors = [];
            this.indicatorDataSeries = [];
            this.periods = this.globalSettings.periods;
            this.formulaes = [
                {
                    name: "EMA", defaults: [
                        { paramName: "Period", value: 13 }
                    ]
                },
                {
                    name: "MACD", defaults: [
                        { paramName: "FastEmaPeriod", value: 12 },
                        { paramName: "SlowEmaPeriod", value: 26 },
                        { paramName: "SignalEmaPeriod", value: 9 }
                    ]
                },
                {
                    name: "ImpulseSystem", defaults: [
                        { paramName: "FastEmaPeriod", value: 12 },
                        { paramName: "SlowEmaPeriod", value: 26 },
                        { paramName: "SignalEmaPeriod", value: 9 },
                        { paramName: "EmaPeriod", value: 13 }
                    ]
                },
                {
                    name: "ForceIndex", defaults: [
                        { paramName: "Period", value: 13 }
                    ]
                }
            ];
            this.plotNumbers = [0, 1, 2, 3];
            this.chartTypes = [
                { name: "Ohlc", id: 0 },
                { name: "Candlestick", id: 1 },
                { name: "Line", id: 2 },
                { name: "Column", id: 3 },
                { name: "Area", id: 4 }
            ];
        }
        Indicator.prototype.indicatorChanged = function (indicatorItem) {
            if (indicatorItem) {
                var newIndicator = Object.assign({}, indicatorItem);
                this.indicatorInfo = newIndicator;
                if (this.indicatorInfo.isNew) {
                    this.indicatorInfo.name = this.formulaes[0].name;
                    this.indicatorInfo.params = this.formulaes[0].defaults;
                }
            }
        };
        Indicator.prototype.onExpanded = function () {
            this.indicatorInfo.expanded = !this.indicatorInfo.expanded;
            if (!this.indicatorInfo.expanded && this.indicatorInfo.indicatorId > 0 && this.indicatorInfo.editMode) {
                this.cancelEdit();
            }
        };
        Indicator.prototype.onFormulaChange = function () {
            var _this = this;
            var defParams = this.formulaes.filter(function (c) { return c.name === _this.indicatorInfo.name; });
            if (defParams && defParams.length > 0) {
                this.indicatorInfo.params = defParams[0].defaults;
            }
            else {
                toastr.warning("Unable to pull default params for selected formula.", "Data is missing");
            }
        };
        Indicator.prototype.startEdit = function () {
            this.originalIndicator = Object.assign({}, this.indicatorInfo);
            this.indicatorInfo.editMode = true;
            aurelia_validation_1.ValidationRules
                .ensure(function (m) { return m.description; }).displayName("Indicator Name").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (m) { return m.chartColor; }).displayName('Line Color').required().withMessage("${$displayName} cannot be blank.")
                .matches(/^#[0-9a-fA-F]{6}$/).withMessage("${$displayName} value should be in format: #AAFF99.")
                .on(this.indicatorInfo);
        };
        Indicator.prototype.cancelEdit = function () {
            if (this.indicatorInfo.indicatorId > 0) {
                this.indicatorInfo = this.originalIndicator;
                this.indicatorInfo.editMode = false;
            }
            else {
                this.indicatorInfo.deleted = true;
            }
            this.validation.reset();
        };
        Indicator.prototype.cancelDelete = function () {
            this.indicatorInfo.deleteMode = false;
            this.indicatorInfo.expanded = false;
        };
        Indicator.prototype.startDelete = function () {
            this.indicatorInfo.deleteMode = true;
            this.indicatorInfo.expanded = true;
        };
        Indicator.prototype.confirmDelete = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var e_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.indicatorService.deleteIndicator(this.indicatorInfo.indicatorId)];
                        case 1:
                            _a.sent();
                            this.indicatorInfo.deleted = true;
                            toastr.success("Indicator " + this.indicatorInfo
                                .description + " deleted successfully!", "Indicator Deleted");
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            this.errors.push(e_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        Indicator.prototype.trySaveIndicator = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validation.validate()];
                        case 1:
                            response = _a.sent();
                            if (!response.valid) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.saveIndicator()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            toastr.warning("Please correct validation errors.", "Validation Errors");
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        Indicator.prototype.saveIndicator = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.errors = [];
                            this.indicatorInfo.jsonParams = JSON.stringify(this.indicatorInfo.params);
                            return [4 /*yield*/, this.indicatorService.saveIndicator(this.indicatorInfo)];
                        case 1:
                            response = _a.sent();
                            if (response.name) {
                                this.indicatorInfo.editMode = false;
                                this.indicatorInfo.expanded = false;
                                toastr.success("indicator " + response.name + " saved successfully!", "Indicator Saved");
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Indicator;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", indicator_models_1.IndicatorInfo)
    ], Indicator.prototype, "indicator", void 0);
    Indicator = tslib_1.__decorate([
        aurelia_framework_1.autoinject(),
        tslib_1.__metadata("design:paramtypes", [indicator_service_1.IndicatorService,
            account_service_1.AccountService,
            aurelia_validation_1.ValidationController,
            settings_service_1.SettingsService])
    ], Indicator);
    exports.Indicator = Indicator;
});

define('resources/elements/progress/s-progress',["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    var SProgress = (function () {
        function SProgress(element) {
            this.element = element;
        }
        SProgress.prototype.progressChanged = function () {
            this.bind();
        };
        SProgress.prototype.bind = function () {
            var el = $(this.element).children()[0];
            $(el).css("width", this.progress + "%");
        };
        SProgress.prototype.unbind = function () {
        };
        return SProgress;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Number)
    ], SProgress.prototype, "progress", void 0);
    SProgress = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], SProgress);
    exports.SProgress = SProgress;
});

define('resources/elements/rule/rule',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-validation", "../../../services/rule-service", "../../../services/account-service", "../../../form-validation/bootstrap-form-renderer", "../../../services/settings-service", "../../../common/types/rule-models", "../../../common/helpers/enum-helper", "../../../common/types/enums"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_validation_1, rule_service_1, account_service_1, bootstrap_form_renderer_1, settings_service_1, rule_models_1, enum_helper_1, enums_1) {
    "use strict";
    var Rule = (function () {
        function Rule(ruleService, account, validation, globalSettings) {
            this.ruleService = ruleService;
            this.account = account;
            this.validation = validation;
            this.globalSettings = globalSettings;
            this.powerUser = this.account.currentUser.isAuthenticated;
            this.validation.validateTrigger = aurelia_validation_1.validateTrigger.change;
            this.validation.addRenderer(new bootstrap_form_renderer_1.BootstrapFormRenderer());
            this.errors = [];
            this.ruleInfo = new rule_models_1.RuleViewModel();
            this.periods = this.globalSettings.periods;
            this.compareTypes = enum_helper_1.EnumValues.getCompareOperators();
            this.dataSources = enum_helper_1.EnumValues.getRuleDataSources();
            this.priceDataSeries = enum_helper_1.EnumValues.geQuoteTypes();
            this.transformFunctions = enum_helper_1.EnumValues.getTransformFunctions();
        }
        Rule.prototype.ruleChanged = function (ruleItem) {
            if (ruleItem) {
                var newRule = Object.assign({}, ruleItem);
                this.indicatorDataSeries = this.globalSettings.getIndicators(newRule.period);
                this.setDataSeries(newRule);
                this.ruleInfo = newRule;
            }
        };
        Rule.prototype.onExpanded = function () {
            this.ruleInfo.expanded = !this.ruleInfo.expanded;
            if (!this.ruleInfo.expanded && this.ruleInfo.ruleId > 0 && this.ruleInfo.editMode) {
                this.cancelEdit();
            }
        };
        Rule.prototype.onPeriodChange = function () {
            this.indicatorDataSeries = this.globalSettings.getIndicators(this.ruleInfo.period);
            this.setDataSeries(this.ruleInfo);
        };
        Rule.prototype.onDataSourceV1Change = function () {
            this.setDataSeries(this.ruleInfo);
        };
        Rule.prototype.onDataSourceV2Change = function () {
            this.setDataSeries(this.ruleInfo);
        };
        Rule.prototype.setDataSeries = function (rule) {
            if (rule) {
                if (rule.dataSourceV1 === enums_1.RuleDataSource.Indicator) {
                    rule.dataSeriesOptionsV1 = this.indicatorDataSeries;
                }
                if (rule.dataSourceV1 === enums_1.RuleDataSource.HistoricalData) {
                    rule.dataSeriesOptionsV1 = this.priceDataSeries;
                }
                if (rule.dataSourceV1 === enums_1.RuleDataSource.Constant) {
                    rule.dataSeriesOptionsV1 = [];
                }
                if (rule.dataSourceV2 === enums_1.RuleDataSource.Indicator) {
                    rule.dataSeriesOptionsV2 = this.indicatorDataSeries;
                }
                if (rule.dataSourceV2 === enums_1.RuleDataSource.HistoricalData) {
                    rule.dataSeriesOptionsV2 = this.priceDataSeries;
                }
                if (rule.dataSourceV2 === enums_1.RuleDataSource.Constant) {
                    rule.dataSeriesOptionsV2 = [];
                }
            }
        };
        Rule.prototype.startEdit = function () {
            this.originalRule = Object.assign({}, this.ruleInfo);
            this.ruleInfo.editMode = true;
            aurelia_validation_1.ValidationRules
                .ensure(function (u) { return u.name; }).displayName("Rule name").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (u) { return u.description; }).displayName("Rule description").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (u) { return u.skipItemsV1; }).displayName("Skip value").required().withMessage("${$displayName} cannot be blank.")
                .satisfies(function (value) { return value >= 0 && value < 1000; }).withMessage("${$displayName} must be between 0 - 999.")
                .ensure(function (u) { return u.skipItemsV2; }).displayName("Skip value").required().withMessage("${$displayName} cannot be blank.")
                .satisfies(function (value) { return value >= 0 && value < 1000; }).withMessage("${$displayName} must be between 0 - 999.")
                .ensure(function (u) { return u.takeItemsV1; }).displayName("Take value").required().withMessage("${$displayName} cannot be blank.")
                .satisfies(function (value) { return value >= 0 && value < 1000; }).withMessage("${$displayName} must be between 0 - 999.")
                .ensure(function (u) { return u.takeItemsV2; }).displayName("Take value").required().withMessage("${$displayName} cannot be blank.")
                .satisfies(function (value) { return value >= 0 && value < 1000; }).withMessage("${$displayName} must be between 0 - 999.")
                .on(this.ruleInfo);
        };
        Rule.prototype.cancelEdit = function () {
            if (this.ruleInfo.ruleId > 0) {
                this.ruleInfo = this.originalRule;
                this.ruleInfo.editMode = false;
            }
            else {
                this.ruleInfo.deleted = true;
            }
            this.validation.reset();
        };
        Rule.prototype.cancelDelete = function () {
            this.ruleInfo.deleteMode = false;
            this.ruleInfo.expanded = false;
        };
        Rule.prototype.startDelete = function () {
            this.ruleInfo.deleteMode = true;
            this.ruleInfo.expanded = true;
        };
        Rule.prototype.confirmDelete = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var e_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.ruleService.deleteRule(this.ruleInfo.ruleId)];
                        case 1:
                            _a.sent();
                            this.ruleInfo.deleted = true;
                            toastr.success("Rule " + this.ruleInfo.name + " deleted successfully!", "Rule Deleted");
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            toastr.error("Failed to delete rule", "Error");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        Rule.prototype.trySaveRule = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validation.validate()];
                        case 1:
                            response = _a.sent();
                            if (response.valid) {
                                this.saveRule();
                            }
                            else {
                                toastr.warning("Please correct validation errors.", "Validation Errors");
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        Rule.prototype.saveRule = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ruleService.saveRule(this.ruleInfo)];
                        case 1:
                            response = _a.sent();
                            if (response.ruleId > 0) {
                                this.ruleInfo.editMode = false;
                                this.ruleInfo.expanded = false;
                                toastr.success("Rule " + response.name + " saved successfully!", 'Rule Saved');
                            }
                            else {
                                toastr.error("Failed to save rule", "Error");
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Rule;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", rule_models_1.RuleInfo)
    ], Rule.prototype, "rule", void 0);
    Rule = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [rule_service_1.RuleService,
            account_service_1.AccountService,
            aurelia_validation_1.ValidationController,
            settings_service_1.SettingsService])
    ], Rule);
    exports.Rule = Rule;
});

define('resources/elements/rule-set/rule-set-item',["require", "exports", "tslib", "aurelia-framework", "aurelia-event-aggregator", "../../../common/types/rule-models"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_event_aggregator_1, rule_models_1) {
    "use strict";
    var RuleSetItem = (function () {
        function RuleSetItem(eventAggregator) {
            this.eventAggregator = eventAggregator;
            this.subscriptions = [];
            this.editMode = false;
        }
        RuleSetItem.prototype.onExpanded = function () {
            this.rule.expanded = !this.rule.expanded;
        };
        RuleSetItem.prototype.startDelete = function () {
            this.rule.deleteMode = true;
            this.rule.expanded = true;
        };
        RuleSetItem.prototype.confirmDelete = function () {
            this.rule.deleteMode = false;
            this.rule.expanded = false;
            this.rule.deleted = true;
        };
        RuleSetItem.prototype.cancelDelete = function () {
            this.rule.deleteMode = false;
            this.rule.expanded = false;
        };
        RuleSetItem.prototype.onMoveUp = function () {
            this.eventAggregator.publish('rule-set-item-up-' + this.rule.ruleSetId, this.rule);
            return false;
        };
        RuleSetItem.prototype.onMoveDown = function () {
            this.eventAggregator.publish('rule-set-item-down-' + this.rule.ruleSetId, this.rule);
            return false;
        };
        RuleSetItem.prototype.detached = function () {
            this.unsubscribe();
        };
        RuleSetItem.prototype.setEditMode = function (flag) {
            this.editMode = flag;
        };
        RuleSetItem.prototype.unsubscribe = function () {
            if (this.subscriptions.length > 0) {
                this.subscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
            }
        };
        RuleSetItem.prototype.attached = function () {
            var _this = this;
            this.subscriptions.push(this.eventAggregator.subscribe('rule-set-edit-mode-' + this.rule.ruleSetId, function (flag) { return _this.setEditMode(flag); }));
            this.subscriptions.push(this.eventAggregator.subscribe('rule-set-edit-mode-' + this.rule.ruleSetId, function (flag) { return _this.setEditMode(flag); }));
        };
        return RuleSetItem;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", rule_models_1.RuleModel)
    ], RuleSetItem.prototype, "rule", void 0);
    RuleSetItem = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], RuleSetItem);
    exports.RuleSetItem = RuleSetItem;
});

define('resources/elements/rule-set/rule-set',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-event-aggregator", "../../../services/rule-set-service", "../../../services/rule-service", "aurelia-validation", "../../../form-validation/bootstrap-form-renderer", "../../../services/account-service", "../../../services/settings-service", "../../../common/types/rule-models"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_event_aggregator_1, rule_set_service_1, rule_service_1, aurelia_validation_1, bootstrap_form_renderer_1, account_service_1, settings_service_1, rule_models_1) {
    "use strict";
    var RuleSet = (function () {
        function RuleSet(eventAggregator, ruleSetService, ruleService, account, validation, globalSettings) {
            this.eventAggregator = eventAggregator;
            this.ruleSetService = ruleSetService;
            this.ruleService = ruleService;
            this.account = account;
            this.validation = validation;
            this.globalSettings = globalSettings;
            this.errors = [];
            this.subscriptions = [];
            this.periods = [];
            this.rules = [];
            this.attachedRuleId = 0;
            this.powerUser = this.account.currentUser.isAuthenticated;
            this.validation.validateTrigger = aurelia_validation_1.validateTrigger.change;
            this.validation.addRenderer(new bootstrap_form_renderer_1.BootstrapFormRenderer());
            this.periods = this.globalSettings.periods;
        }
        RuleSet.prototype.rulesetChanged = function (ruleSetItem) {
            if (ruleSetItem) {
                var newRule = Object.assign({}, ruleSetItem);
                this.ruleSetInfo = newRule;
            }
        };
        RuleSet.prototype.onExpanded = function () {
            this.ruleSetInfo.expanded = !this.ruleSetInfo.expanded;
            if (!this.ruleSetInfo.expanded && this.ruleSetInfo.ruleSetId > 0 && this.ruleSetInfo.editMode === true) {
                this.cancelEdit();
            }
        };
        RuleSet.prototype.startEdit = function () {
            this.originalRuleSet = Object.assign({}, this.ruleSetInfo);
            this.ruleSetInfo.editMode = true;
            this.eventAggregator.publish('rule-set-edit-mode-' + this.ruleSetInfo.ruleSetId, true);
            aurelia_validation_1.ValidationRules
                .ensure(function (u) { return u.name; }).displayName('Rule Set Name').required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (u) { return u.description; }).displayName('Description').required().withMessage("${$displayName} cannot be blank.")
                .on(this.ruleSetInfo);
        };
        RuleSet.prototype.cancelEdit = function () {
            if (this.ruleSetInfo.ruleSetId > 0) {
                this.ruleSetInfo = this.originalRuleSet;
                this.ruleSetInfo.editMode = false;
                this.eventAggregator.publish('rule-set-edit-mode-' + this.ruleSetInfo.ruleSetId, false);
            }
            else {
                this.ruleSetInfo.deleted = true;
            }
            this.validation.reset();
        };
        RuleSet.prototype.cancelDelete = function () {
            this.ruleSetInfo.deleteMode = false;
            this.ruleSetInfo.expanded = false;
        };
        RuleSet.prototype.startDelete = function () {
            this.ruleSetInfo.deleteMode = true;
            this.ruleSetInfo.expanded = true;
        };
        RuleSet.prototype.confirmDelete = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var e_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.ruleSetService.deleteRuleSet(this.ruleSetInfo.ruleSetId)];
                        case 1:
                            _a.sent();
                            this.ruleSetInfo.deleted = true;
                            toastr.success("Rule set " + this.ruleSetInfo.description + " deleted successfully!", 'Rule Set Deleted');
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            toastr.error("Failed to delete rule set", "Error");
                            this.errors.push(e_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        RuleSet.prototype.addRule = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response, e_2;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.ruleSetInfo.isAdding = !this.ruleSetInfo.isAdding;
                            if (!(this.ruleSetInfo.isAdding && this.rules.length === 0)) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.ruleService.getRulesForPeriod(this.ruleSetInfo.period)];
                        case 2:
                            response = _a.sent();
                            this.rules = response;
                            if (this.rules.length > 0) {
                                this.attachedRule = this.rules[0];
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            e_2 = _a.sent();
                            toastr.error("Failed to get rules", "ruleService.getRulesForPeriod");
                            this.errors.push(e_2);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        RuleSet.prototype.onRuleChange = function () {
            var _this = this;
            this.attachedRule = this.rules.find(function (item) { return item.ruleId === _this.attachedRuleId; });
        };
        RuleSet.prototype.cancelAddRule = function () {
            this.ruleSetInfo.isAdding = false;
        };
        RuleSet.prototype.confirmAddRule = function () {
            this.ruleSetInfo.isAdding = false;
            var rule = {
                name: this.attachedRule.name,
                ruleId: this.attachedRule.ruleId,
                description: this.attachedRule.description,
                ruleSetId: this.ruleSetInfo.ruleSetId
            };
            this.ruleSetInfo.rules.push(rule);
        };
        RuleSet.prototype.trySaveRuleSet = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validation.validate()];
                        case 1:
                            response = _a.sent();
                            if (!response.valid) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.saveRuleSet()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            toastr.warning("Please correct validation errors.", "Validation Errors");
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        RuleSet.prototype.saveRuleSet = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response, e_3;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.errors = [];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.ruleSetService.saveRuleSet(this.ruleSetInfo)];
                        case 2:
                            response = _a.sent();
                            if (response.ruleSetId > 0) {
                                this.ruleSetInfo.editMode = false;
                                this.ruleSetInfo.expanded = false;
                                toastr.success("Rule set " + response.name + " saved successfully!", "Rule set Saved");
                                this.eventAggregator.publish("rule-set-edit-mode-" + this.ruleSetInfo.ruleSetId, false);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            e_3 = _a.sent();
                            toastr.error("Failed to save rule set", "Error");
                            this.errors.push(e_3);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        RuleSet.prototype.moveRuleUp = function (rule) {
            if (rule && rule.ruleId) {
                var index = this.ruleSetInfo.rules.findIndex(function (item) { return item.ruleId === rule.ruleId; });
                if (index > 0) {
                    this.ruleSetInfo.rules.splice(index - 1, 0, this.ruleSetInfo.rules.splice(index, 1)[0]);
                }
            }
        };
        RuleSet.prototype.moveRuleDown = function (rule) {
            if (rule && rule.ruleId) {
                var index = this.ruleSetInfo.rules.findIndex(function (item) { return item.ruleId === rule.ruleId; });
                if (index > -1 && index < this.ruleSetInfo.rules.length - 1) {
                    this.ruleSetInfo.rules.splice(index + 1, 0, this.ruleSetInfo.rules.splice(index, 1)[0]);
                }
            }
        };
        RuleSet.prototype.detached = function () {
            this.unsubscribe();
        };
        RuleSet.prototype.unsubscribe = function () {
            if (this.subscriptions.length > 0) {
                this.subscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
            }
        };
        RuleSet.prototype.attached = function () {
            var _this = this;
            this.subscriptions.push(this.eventAggregator.subscribe('rule-set-item-up-' + this.ruleset.ruleSetId, function (rule) { return _this.moveRuleUp(rule); }));
            this.subscriptions.push(this.eventAggregator.subscribe('rule-set-item-down-' + this.ruleset.ruleSetId, function (rule) { return _this.moveRuleDown(rule); }));
        };
        return RuleSet;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", rule_models_1.RuleSetInfo)
    ], RuleSet.prototype, "ruleset", void 0);
    RuleSet = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator,
            rule_set_service_1.RuleSetService,
            rule_service_1.RuleService,
            account_service_1.AccountService,
            aurelia_validation_1.ValidationController,
            settings_service_1.SettingsService])
    ], RuleSet);
    exports.RuleSet = RuleSet;
});

define('resources/elements/strategy/side-navigation',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-router", "../../../services/strategy-service"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_router_1, strategy_service_1) {
    "use strict";
    var SideNavigation = (function () {
        function SideNavigation(strategyService, router) {
            this.strategyService = strategyService;
            this.router = router;
            this.summaries = [];
            this.currentModuleName = this.router.currentInstruction.config.name;
        }
        SideNavigation.prototype.strategyurlChanged = function (newValue) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a, e_1;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(newValue && newValue.length > 0)) return [3 /*break*/, 6];
                            if (!this.summaryNotFound(newValue)) return [3 /*break*/, 5];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            _a = this;
                            return [4 /*yield*/, this.strategyService.getSummaries()];
                        case 2:
                            _a.summaries = _b.sent();
                            this.setActiveStrategy(newValue);
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _b.sent();
                            toastr.error("Failed to load summaries", "Load Summaries Failed");
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            this.setActiveStrategy(newValue);
                            _b.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        SideNavigation.prototype.summaryNotFound = function (url) {
            var result = true;
            if (this.summaries && this.summaries.length > 0) {
                result = this.summaries.findIndex(function (s) { return s.url.toLowerCase() === url.toLowerCase(); }) === -1;
            }
            return result;
        };
        SideNavigation.prototype.setActiveStrategy = function (url) {
            if (this.summaryNotFound(url)) {
                this.navigateToDefaultStrategy();
            }
            else {
                if (this.summaries) {
                    this.summaries.forEach(function (item) {
                        item.selected = item.url.toLowerCase() === url.toLowerCase();
                    });
                }
            }
        };
        SideNavigation.prototype.navigateToDefaultStrategy = function () {
            if (this.summaries && this.summaries.length > 0) {
                var strategyUrl = "/strategies/" + this.currentModuleName + "/" + this.summaries[0].url;
                this.router.navigate(strategyUrl);
            }
        };
        SideNavigation.prototype.navigateToStrategy = function (url) {
            if (url && url.length > 0) {
                var strategyUrl = "/strategies/" + this.currentModuleName + "/" + url;
                this.router.navigate(strategyUrl);
            }
        };
        return SideNavigation;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", String)
    ], SideNavigation.prototype, "strategyurl", void 0);
    SideNavigation = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [strategy_service_1.StrategyService, aurelia_router_1.Router])
    ], SideNavigation);
    exports.SideNavigation = SideNavigation;
});

define('resources/elements/strategy/strategy-admin',["require", "exports", "tslib", "aurelia-framework", "../../../services/account-service"], function (require, exports, tslib_1, aurelia_framework_1, account_service_1) {
    "use strict";
    var StrategyAdmin = (function () {
        function StrategyAdmin(account) {
            this.powerUser = account.currentUser.isAuthenticated;
        }
        return StrategyAdmin;
    }());
    StrategyAdmin = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService])
    ], StrategyAdmin);
    exports.StrategyAdmin = StrategyAdmin;
});

define('resources/elements/strategy/strategy-navigation',["require", "exports", "tslib", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    var StrategyNavigation = (function () {
        function StrategyNavigation(eventAggregator) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.subscription = null;
            this.items = [];
            this.subscription = this.eventAggregator.subscribe("router:navigation:complete", function (request) {
                _this.onNavigatioComplete(request.instruction);
            });
        }
        StrategyNavigation.prototype.detached = function () {
            if (this.subscription) {
                this.subscription.dispose();
            }
        };
        StrategyNavigation.prototype.onNavigatioComplete = function (instruction) {
            if (instruction.config.name !== "strategies")
                return;
            var currentUrl = window.location.pathname;
            var page = "";
            var fragments = currentUrl.split("/");
            if (fragments.length > 3) {
                page = fragments[3];
            }
            this.items = [];
            var strategyMenuItem = {
                isActive: currentUrl.startsWith("/strategies/strategy/"),
                title: "Strategy Article",
                url: "/strategies/strategy/" + page,
                name: "strategy"
            };
            var rulesetsMenuItem = {
                isActive: currentUrl.startsWith("/strategies/strategy-rule-sets/"),
                title: "Strategy Rule Sets",
                url: "/strategies/strategy-rule-sets/" + page,
                name: "rule-sets"
            };
            var playgroundMenuItem = {
                isActive: currentUrl.startsWith("/strategies/strategy-playground/"),
                title: "Playground",
                url: "/strategies/strategy-playground/" + page,
                name: "strategy-playground"
            };
            this.items.push(strategyMenuItem);
            this.items.push(rulesetsMenuItem);
            this.items.push(playgroundMenuItem);
        };
        return StrategyNavigation;
    }());
    StrategyNavigation = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], StrategyNavigation);
    exports.StrategyNavigation = StrategyNavigation;
    var LinkInfo = (function () {
        function LinkInfo() {
            this.isActive = false;
        }
        return LinkInfo;
    }());
    exports.LinkInfo = LinkInfo;
});

define('resources/elements/strategy/strategy-rule-set',["require", "exports", "tslib", "aurelia-framework", "aurelia-event-aggregator", "../../../common/types/rule-models", "../../../services/settings-service"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_event_aggregator_1, rule_models_1, settings_service_1) {
    "use strict";
    var StrategyRuleSet = (function () {
        function StrategyRuleSet(eventAggregator, settings) {
            this.eventAggregator = eventAggregator;
            this.periods = settings.periods;
        }
        StrategyRuleSet.prototype.rulesetChanged = function (newValue) {
            if (newValue) {
            }
        };
        StrategyRuleSet.prototype.onExpanded = function () {
            this.ruleset.expanded = !!!this.ruleset.expanded;
        };
        StrategyRuleSet.prototype.cancelDelete = function () {
            this.ruleset.deleteMode = false;
            this.ruleset.expanded = false;
        };
        StrategyRuleSet.prototype.startDelete = function () {
            this.ruleset.deleteMode = true;
            this.ruleset.expanded = true;
        };
        StrategyRuleSet.prototype.setOptionalStatus = function (flag) {
            this.ruleset.ruleSetOptional = flag;
        };
        StrategyRuleSet.prototype.onMoveUp = function () {
            this.eventAggregator.publish("strategy-rule-set-up", this.ruleset.ruleSetId);
        };
        StrategyRuleSet.prototype.onMoveDown = function () {
            this.eventAggregator.publish("strategy-rule-set-down", this.ruleset.ruleSetId);
        };
        StrategyRuleSet.prototype.confirmDelete = function () {
            this.eventAggregator.publish("strategy-rule-set-detach", this.ruleset.ruleSetId);
        };
        return StrategyRuleSet;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", rule_models_1.StrategyRuleSetInfo)
    ], StrategyRuleSet.prototype, "ruleset", void 0);
    StrategyRuleSet = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, settings_service_1.SettingsService])
    ], StrategyRuleSet);
    exports.StrategyRuleSet = StrategyRuleSet;
});

define('components/market/jobs-dashboard/jobs/job',["require", "exports", "tslib", "aurelia-framework", "../../../../services/account-service", "../../../../services/job-service", "aurelia-event-aggregator", "./job-details/job-details"], function (require, exports, tslib_1, aurelia_framework_1, account_service_1, job_service_1, aurelia_event_aggregator_1, job_details_1) {
    "use strict";
    var Job = (function () {
        function Job(account, jobService, eventAggregator) {
            var _this = this;
            this.jobService = jobService;
            this.powerUser = false;
            this.title = "Job Dashboard";
            this.jobs = [];
            this.jobUrl = "";
            this.powerUser = account.currentUser.isAuthenticated;
            this.subscription = eventAggregator.subscribe("router:navigation:complete", function () {
                _this.onNavigatioComplete();
            });
        }
        Job.prototype.activate = function (params, routeconfig, navigationInstruction) {
            this.router = navigationInstruction.router;
            if (params && routeconfig) {
            }
        };
        Job.prototype.detached = function () {
            this.subscription.dispose();
        };
        Job.prototype.onNavigatioComplete = function () {
            this.title = this.router.currentInstruction.config.title;
            this.jobUrl = this.router.currentInstruction.config.name;
            this.loadJobs();
        };
        Job.prototype.loadJobs = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return tslib_1.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.jobService.currentJob(this.jobUrl)];
                        case 1:
                            _a.currentJob = _c.sent();
                            _b = this;
                            return [4 /*yield*/, this.jobService.loadHistory(this.jobUrl)];
                        case 2:
                            _b.jobs = _c.sent();
                            this.watchCurrentJob();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Job.prototype.deleteAll = function () {
            this.jobs = [];
        };
        Job.prototype.startJob = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.jobService.startJob(this.jobUrl)];
                        case 1:
                            _a.currentJob = _b.sent();
                            this.watchCurrentJob();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Job.prototype.watchCurrentJob = function () {
            var _this = this;
            if (this.currentJob != null && this.currentJob.jobId > 0) {
                setTimeout(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this;
                                return [4 /*yield*/, this.jobService.currentJob(this.jobUrl)];
                            case 1:
                                _a.currentJob = _b.sent();
                                this.watchCurrentJob();
                                return [2 /*return*/];
                        }
                    });
                }); }, 1000);
            }
        };
        Job.prototype.resumeJob = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.jobService.resumeJob(this.currentJob.jobId)];
                        case 1:
                            _b.sent();
                            _a = this;
                            return [4 /*yield*/, this.jobService.getJob(this.currentJob.jobId)];
                        case 2:
                            _a.currentJob = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Job.prototype.pauseJob = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.jobService.pauseJob(this.currentJob.jobId)];
                        case 1:
                            _b.sent();
                            _a = this;
                            return [4 /*yield*/, this.jobService.getJob(this.currentJob.jobId)];
                        case 2:
                            _a.currentJob = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Job.prototype.cancelJob = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.jobService.cancelJob(this.currentJob.jobId)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.loadJobs()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Job.prototype.viewLog = function (jobId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    console.log(jobId);
                    return [2 /*return*/];
                });
            });
        };
        Object.defineProperty(Job.prototype, "currentJobInProgress", {
            get: function () {
                if (this.currentJob && this.currentJob.jobId > 0) {
                    return this.currentJob.status === job_details_1.JobStatus.InProgress
                        || this.currentJob.status === job_details_1.JobStatus.Pending;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Job.prototype, "currentJobPaused", {
            get: function () {
                if (this.currentJob && this.currentJob.jobId > 0) {
                    return this.currentJob.status === job_details_1.JobStatus.Paused;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Job.prototype, "currentJobStarted", {
            get: function () {
                if (this.currentJob && this.currentJob.jobId > 0) {
                    return true;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Job.prototype, "jobTypeName", {
            get: function () {
                if (this.currentJob) {
                    switch (this.currentJob.jobType) {
                        case job_details_1.JobType.All: return "All";
                        case job_details_1.JobType.CalculateGlobalIndicators: return "Calculate Global Indicators";
                        case job_details_1.JobType.RefreshAllStocks: return "Refresh All Stocks";
                        case job_details_1.JobType.RefreshSP500Stocks: return "Refresh S&P 500 Stocks";
                        default: return this.currentJob.jobType + "";
                    }
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Job.prototype, "jobStatusName", {
            get: function () {
                if (this.currentJob) {
                    switch (this.currentJob.status) {
                        case job_details_1.JobStatus.Cancelled: return "Cancelled";
                        case job_details_1.JobStatus.Completed: return "Completed";
                        case job_details_1.JobStatus.Error: return "Error";
                        case job_details_1.JobStatus.InProgress: return "In Progress";
                        case job_details_1.JobStatus.Paused: return "Paused";
                        case job_details_1.JobStatus.Pending: return "Pending";
                        default: return this.currentJob.status + "";
                    }
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        return Job;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.computedFrom("currentJob.jobId", "currentJob.status"),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], Job.prototype, "currentJobInProgress", null);
    tslib_1.__decorate([
        aurelia_framework_1.computedFrom("currentJob.jobId", "currentJob.status"),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], Job.prototype, "currentJobPaused", null);
    tslib_1.__decorate([
        aurelia_framework_1.computedFrom("currentJob.jobId"),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], Job.prototype, "currentJobStarted", null);
    tslib_1.__decorate([
        aurelia_framework_1.computedFrom("currentJob.jobType"),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [])
    ], Job.prototype, "jobTypeName", null);
    tslib_1.__decorate([
        aurelia_framework_1.computedFrom("currentJob.status"),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [])
    ], Job.prototype, "jobStatusName", null);
    Job = tslib_1.__decorate([
        aurelia_framework_1.autoinject(),
        tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService, job_service_1.JobService, aurelia_event_aggregator_1.EventAggregator])
    ], Job);
    exports.Job = Job;
});

define('components/market/jobs-dashboard/jobs-nav/jobs-nav',["require", "exports", "tslib", "aurelia-framework", "aurelia-router"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    var JobsNav = (function () {
        function JobsNav() {
            this.router = null;
        }
        return JobsNav;
    }());
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", aurelia_router_1.Router)
    ], JobsNav.prototype, "router", void 0);
    exports.JobsNav = JobsNav;
});

define('components/market/market-indices/sp500/sp500',["require", "exports", "tslib", "aurelia-framework", "../../../../services/account-service"], function (require, exports, tslib_1, aurelia_framework_1, account_service_1) {
    "use strict";
    var Sp500 = (function () {
        function Sp500(account) {
            this.powerUser = false;
            this.powerUser = account.currentUser.isAuthenticated;
        }
        return Sp500;
    }());
    Sp500 = tslib_1.__decorate([
        aurelia_framework_1.autoinject(),
        tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService])
    ], Sp500);
    exports.Sp500 = Sp500;
});

define('aurelia-validation/get-target-dom-element',["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Gets the DOM element associated with the data-binding. Most of the time it's
     * the binding.target but sometimes binding.target is an aurelia custom element,
     * or custom attribute which is a javascript "class" instance, so we need to use
     * the controller's container to retrieve the actual DOM element.
     */
    function getTargetDOMElement(binding, view) {
        var target = binding.target;
        // DOM element
        if (target instanceof Element) {
            return target;
        }
        // custom element or custom attribute
        // tslint:disable-next-line:prefer-const
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
    }
    exports.getTargetDOMElement = getTargetDOMElement;
});

define('aurelia-validation/property-info',["require", "exports", "aurelia-binding"], function (require, exports, aurelia_binding_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getObject(expression, objectExpression, source) {
        var value = objectExpression.evaluate(source, null);
        if (value === null || value === undefined || value instanceof Object) {
            return value;
        }
        // tslint:disable-next-line:max-line-length
        throw new Error("The '" + objectExpression + "' part of '" + expression + "' evaluates to " + value + " instead of an object, null or undefined.");
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('aurelia-validation/validate-binding-behavior',["require", "exports", "aurelia-task-queue", "./validate-trigger", "./validate-binding-behavior-base"], function (require, exports, aurelia_task_queue_1, validate_trigger_1, validate_binding_behavior_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the validate trigger specified by the associated controller's
     * validateTrigger property occurs.
     */
    var ValidateBindingBehavior = (function (_super) {
        __extends(ValidateBindingBehavior, _super);
        function ValidateBindingBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
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
            return _super !== null && _super.apply(this, arguments) || this;
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
            return _super !== null && _super.apply(this, arguments) || this;
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
            return _super !== null && _super.apply(this, arguments) || this;
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
            return _super !== null && _super.apply(this, arguments) || this;
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
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Validation triggers.
     */
    var validateTrigger;
    (function (validateTrigger) {
        /**
         * Manual validation.  Use the controller's `validate()` and  `reset()` methods
         * to validate all bindings.
         */
        validateTrigger[validateTrigger["manual"] = 0] = "manual";
        /**
         * Validate the binding when the binding's target element fires a DOM "blur" event.
         */
        validateTrigger[validateTrigger["blur"] = 1] = "blur";
        /**
         * Validate the binding when it updates the model due to a change in the view.
         */
        validateTrigger[validateTrigger["change"] = 2] = "change";
        /**
         * Validate the binding when the binding's target element fires a DOM "blur" event and
         * when it updates the model due to a change in the view.
         */
        validateTrigger[validateTrigger["changeOrBlur"] = 3] = "changeOrBlur";
    })(validateTrigger = exports.validateTrigger || (exports.validateTrigger = {}));
    ;
});

define('aurelia-validation/validate-binding-behavior-base',["require", "exports", "aurelia-dependency-injection", "./validation-controller", "./validate-trigger", "./get-target-dom-element"], function (require, exports, aurelia_dependency_injection_1, validation_controller_1, validate_trigger_1, get_target_dom_element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Binding behavior. Indicates the bound property should be validated.
     */
    var ValidateBindingBehaviorBase = (function () {
        function ValidateBindingBehaviorBase(taskQueue) {
            this.taskQueue = taskQueue;
        }
        ValidateBindingBehaviorBase.prototype.bind = function (binding, source, rulesOrController, rules) {
            var _this = this;
            // identify the target element.
            var target = get_target_dom_element_1.getTargetDOMElement(binding, source);
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
            // tslint:disable-next-line:no-bitwise
            if (trigger & validate_trigger_1.validateTrigger.change) {
                binding.standardUpdateSource = binding.updateSource;
                // tslint:disable-next-line:only-arrow-functions
                binding.updateSource = function (value) {
                    this.standardUpdateSource(value);
                    this.validationController.validateBinding(this);
                };
            }
            // tslint:disable-next-line:no-bitwise
            if (trigger & validate_trigger_1.validateTrigger.blur) {
                binding.validateBlurHandler = function () {
                    _this.taskQueue.queueMicroTask(function () { return controller.validateBinding(binding); });
                };
                binding.validateTarget = target;
                target.addEventListener('blur', binding.validateBlurHandler);
            }
            if (trigger !== validate_trigger_1.validateTrigger.manual) {
                binding.standardUpdateTarget = binding.updateTarget;
                // tslint:disable-next-line:only-arrow-functions
                binding.updateTarget = function (value) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
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
                // tslint:disable-next-line:prefer-const
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
            var rules;
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
    Object.defineProperty(exports, "__esModule", { value: true });
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
    Object.defineProperty(exports, "__esModule", { value: true });
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
    Object.defineProperty(exports, "__esModule", { value: true });
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
define('aurelia-validation/validation-errors-custom-attribute',["require", "exports", "aurelia-binding", "aurelia-dependency-injection", "aurelia-templating", "./validation-controller", "aurelia-pal"], function (require, exports, aurelia_binding_1, aurelia_dependency_injection_1, aurelia_templating_1, validation_controller_1, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationErrorsCustomAttribute = (function () {
        function ValidationErrorsCustomAttribute(boundaryElement, controllerAccessor) {
            this.boundaryElement = boundaryElement;
            this.controllerAccessor = controllerAccessor;
            this.controller = null;
            this.errors = [];
            this.errorsInternal = [];
        }
        ValidationErrorsCustomAttribute.prototype.sort = function () {
            this.errorsInternal.sort(function (a, b) {
                if (a.targets[0] === b.targets[0]) {
                    return 0;
                }
                // tslint:disable-next-line:no-bitwise
                return a.targets[0].compareDocumentPosition(b.targets[0]) & 2 ? 1 : -1;
            });
        };
        ValidationErrorsCustomAttribute.prototype.interestingElements = function (elements) {
            var _this = this;
            return elements.filter(function (e) { return _this.boundaryElement.contains(e); });
        };
        ValidationErrorsCustomAttribute.prototype.render = function (instruction) {
            var _loop_1 = function (result) {
                var index = this_1.errorsInternal.findIndex(function (x) { return x.error === result; });
                if (index !== -1) {
                    this_1.errorsInternal.splice(index, 1);
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
                    this.errorsInternal.push({ error: result, targets: targets });
                }
            }
            this.sort();
            this.errors = this.errorsInternal;
        };
        ValidationErrorsCustomAttribute.prototype.bind = function () {
            if (!this.controller) {
                this.controller = this.controllerAccessor();
            }
            // this will call render() with the side-effect of updating this.errors
            this.controller.addRenderer(this);
        };
        ValidationErrorsCustomAttribute.prototype.unbind = function () {
            if (this.controller) {
                this.controller.removeRenderer(this);
            }
        };
        return ValidationErrorsCustomAttribute;
    }());
    ValidationErrorsCustomAttribute.inject = [aurelia_pal_1.DOM.Element, aurelia_dependency_injection_1.Lazy.of(validation_controller_1.ValidationController)];
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay })
    ], ValidationErrorsCustomAttribute.prototype, "controller", void 0);
    __decorate([
        aurelia_templating_1.bindable({ primaryProperty: true, defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
    ], ValidationErrorsCustomAttribute.prototype, "errors", void 0);
    ValidationErrorsCustomAttribute = __decorate([
        aurelia_templating_1.customAttribute('validation-errors')
    ], ValidationErrorsCustomAttribute);
    exports.ValidationErrorsCustomAttribute = ValidationErrorsCustomAttribute;
});

define('aurelia-validation/validation-renderer-custom-attribute',["require", "exports", "./validation-controller"], function (require, exports, validation_controller_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    Object.defineProperty(exports, "__esModule", { value: true });
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('aurelia-validation/implementation/standard-validator',["require", "exports", "aurelia-templating", "../validator", "../validate-result", "./rules", "./validation-messages"], function (require, exports, aurelia_templating_1, validator_1, validate_result_1, rules_1, validation_messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            // tslint:disable-next-line:prefer-const
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
                // returns the name of a given property, given just the property name (irrespective of the property's displayName)
                // split on capital letters, first letter ensured to be capitalized
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
    Object.defineProperty(exports, "__esModule", { value: true });
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
                return (displayName instanceof Function) ? displayName() : displayName;
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('aurelia-validation/implementation/validation-parser',["require", "exports", "aurelia-binding", "aurelia-templating", "./util", "aurelia-logging"], function (require, exports, aurelia_binding_1, aurelia_templating_1, util_1, LogManager) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            /* tslint:disable:max-line-length */
            var classic = /^function\s*\([$_\w\d]+\)\s*\{(?:\s*"use strict";)?\s*(?:[$_\w\d.['"\]+;]+)?\s*return\s+[$_\w\d]+\.([$_\w\d]+)\s*;?\s*\}$/;
            /* tslint:enable:max-line-length */
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
    Object.defineProperty(exports, "__esModule", { value: true });
    function isString(value) {
        return Object.prototype.toString.call(value) === '[object String]';
    }
    exports.isString = isString;
});

define('aurelia-validation/implementation/validation-rules',["require", "exports", "./util", "./rules", "./validation-messages"], function (require, exports, util_1, rules_1, validation_messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
         * @internal
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
            throw new Error("Did you forget to add \".plugin('aurelia-validation')\" to your main.js?");
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
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./app.css\"></require><require from=\"./components/header/dream-header\"></require><require from=\"./components/footer/dream-footer\"></require><require from=\"./components/nav-menu/main-nav/main-nav\"></require><dream-header router.bind=\"router\"></dream-header><main-nav router.bind=\"router\"></main-nav><router-view></router-view><dream-footer></dream-footer></template>"; });
define('text!components/categories/categories.html', ['module'], function(module) { module.exports = "<template><div class=\"row categories\"><div class=\"col-md-8\"><h2>${section.Title}</h2><div repeat.for=\"item of sortedCategories\" class=\"category\"><read-mode if.bind=\"editMode !== true\"><h4>${item.Title}</h4></read-mode><edit-mode class=\"form-horizontal\" if.bind=\"editMode === true\"><div if.bind=\"item.isDeleting !== true\" class=\"btn-group\" role=\"group\" aria-label=\"Actions\"><button type=\"button\" click.delegate=\"$parent.startDeleting(item)\" class=\"btn btn-danger btn-xs\">Delete</button> <button type=\"button\" click.delegate=\"$parent.moveUp(item)\" class=\"btn btn-default btn-xs\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"true\"></span></button> <button type=\"button\" click.delegate=\"$parent.moveDown(item)\" class=\"btn btn-default btn-xs\"><span class=\"glyphicon glyphicon-arrow-down\" aria-hidden=\"true\"></span></button></div><div if.bind=\"item.isDeleting === true\" class=\"btn-group\" role=\"group\" aria-label=\"Actions\"><button type=\"button\" click.delegate=\"$parent.confirmDelete(item)\" class=\"btn btn-danger btn-xs\">Delete Block</button> <button type=\"button\" click.delegate=\"$parent.cancelDelete(item)\" class=\"btn btn-default btn-xs\">Cancel</button></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Title</label><div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" value.bind=\"item.Title\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Url</label><div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" value.bind=\"item.Url\"></div></div></edit-mode></div><div if.bind=\"editMode === true\" class=\"block-actions\"><div class=\"btn-group\" role=\"group\" aria-label=\"Actions\"><button type=\"button\" click.delegate=\"addCategory()\" class=\"btn btn-primary btn-xs\">Add New Category</button></div></div></div><div class=\"col-md-4 side-navigation\"><h3>Sections</h3><ul><li repeat.for=\"item of sortedSections\"><a href.bind=\"$parent.getSectionUrl(item)\" class=\"${item.SectionId === $parent.sectionId ? 'active' : ''}\">${item.Title}</a></li></ul></div></div></template>"; });
define('text!components/categories/navigation.html', ['module'], function(module) { module.exports = "<template><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!components/footer/dream-footer.html', ['module'], function(module) { module.exports = "<template><require from=\"./dream-footer.css\"></require></template>"; });
define('text!components/header/dream-header.html', ['module'], function(module) { module.exports = "<template><require from=\"./dream-header.css\"></require><div class=\"container\"><div class=\"navbar-brand\"><img class=\"logo\" src=\"/content/images/logo.png\"> <a first-letter-span href=\"/\">Dream Space</a></div><ul class=\"nav navbar-nav navbar-right\"><li role=\"presentation\" class=\"dropdown\" if.bind=\"isAuthenticated === true\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> ${user.firstName} <span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a href.bind=\"loginUrl\">Account</a></li><li><a click.delegate=\"logout()\">Logout</a></li></ul></li><li if.bind=\"isAuthenticated !== true\"><a click.delegate=\"login()\">Login</a></li></ul></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "@charset 'UTF-8';\n@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@import url(//fonts.googleapis.com/css?family=Open+Sans:400|Roboto);\n@import url(//fonts.googleapis.com/css?family=Istok+Web:400,700);\n@import url(//fonts.googleapis.com/css?family=Inder);\n@import url(//fonts.googleapis.com/css?family=Raleway);\n@import url(//fonts.googleapis.com/css?family=PT+Sans);\n@import url(//fonts.googleapis.com/css?family=Lato);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('/fonts/glyphicons-halflings-regular.eot');\n  src: url('/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('/fonts/glyphicons-halflings-regular.woff') format('woff'), url('/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');\n}\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: 'Hind Vadodara', sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #333333;\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.8) 100%, #ffffff 0%), url(/Content/Images/emma_bg.jpg) no-repeat 0 0;\n  background-size: 100%;\n  background-attachment: fixed;\n  background-position: top;\n}\nbody a,\nbody a:hover {\n  color: #e22004;\n}\nbody a[first-letter-span] {\n  color: #2d4945;\n}\nbody a[first-letter-span] span {\n  color: #e22004;\n}\nbody .aurelia-validation-message {\n  display: none;\n}\nbody .has-success .form-control {\n  border-color: #ccc;\n}\nbody .has-success .form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\nbody .no-border {\n  border: 0!important;\n}\nbody .right {\n  text-align: right!important;\n}\nbody .uppercase {\n  text-transform: uppercase;\n}\nbody .pointer {\n  cursor: pointer!important;\n}\nbody a:hover {\n  cursor: pointer;\n}\n.btn {\n  font-weight: normal;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  border-radius: 0;\n  min-width: 70px;\n}\n.btn-group .btn,\n.btn-group-vertical .btn {\n  min-width: 10px;\n  margin-right: 0;\n}\n.btn-default {\n  color: #c9302c;\n  border-color: #c9302c;\n}\n.btn-default:active,\n.btn-default:focus {\n  color: #c9302c;\n  border-color: #c9302c;\n  background-color: white;\n}\n.btn-default:hover {\n  color: #c9302c;\n  background-color: rgba(201, 48, 44, 0.05);\n  border-color: #c9302c;\n}\n.btn-danger {\n  background-color: #e22004;\n}\n.dropdown-menu > li > a {\n  font-family: 'Open Sans', sans-serif;\n}\n.btn.active.focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn:active:focus,\n.btn:focus {\n  outline-color: transparent;\n}\n.btn-default.active.focus,\n.btn-default.active:focus,\n.btn-default.active:hover,\n.btn-default:active.focus,\n.btn-default:active:focus,\n.btn-default:active:hover,\n.open > .dropdown-toggle.btn-default.focus,\n.open > .dropdown-toggle.btn-default:focus,\n.open > .dropdown-toggle.btn-default:hover {\n  color: #c9302c;\n  background-color: rgba(201, 48, 44, 0.05);\n  border-color: #c9302c;\n}\n.s-progress {\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  height: 5px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  display: block;\n}\n.s-progress .s-progress-bar {\n  height: 100%;\n  background-color: #5cb85c;\n}\n.page-content {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-bottom: 50px;\n}\n.page-content header {\n  margin-bottom: 15px;\n}\n.page-content header .btn {\n  float: right;\n  margin-left: 10px;\n  margin-top: 25px;\n}\n.page-content header h3 {\n  font-size: 22px;\n  margin-top: 18px;\n  display: inline-block;\n  color: #333333;\n}\n.page-content .actions {\n  float: right;\n  position: relative;\n  top: -39px;\n  margin-right: 0px;\n  margin-bottom: -25px;\n  z-index: 996;\n}\n.page-content .actions .btn {\n  border-radius: 4px 4px 0 0;\n  padding: 2px 12px;\n}\nai-dialog {\n  border-radius: 0;\n}\nai-dialog ai-dialog-body {\n  padding: 15px 30px;\n}\nai-dialog ai-dialog-body h3 {\n  margin: -30px -30px 25px;\n  padding: 20px;\n  font-weight: 500;\n  text-align: center;\n  background-color: #f5f5f5;\n}\nai-dialog ai-dialog-footer {\n  padding-bottom: 20px;\n  border: none;\n  padding-right: 30px;\n}\nai-dialog ai-dialog-footer .btn {\n  margin-left: 14px;\n}\nai-dialog-overlay.active {\n  background-color: black;\n  opacity: .5;\n}\nai-dialog > ai-dialog-footer button.btn-primary,\nai-dialog > ai-dialog-footer button.btn-primary:hover,\nai-dialog > ai-dialog-footer button.btn-primary:hover:enabled {\n  background-color: #2771cd;\n  border: solid 1px #ffffff;\n  color: #ffffff;\n}\nai-dialog > ai-dialog-footer button.btn-default,\nai-dialog > ai-dialog-footer button.btn-default:hover,\nai-dialog > ai-dialog-footer button.btn-default:hover:enabled {\n  background-color: #ffffff;\n  border: solid 1px #2771cd;\n  color: #2771cd;\n}\n.form-group {\n  margin-bottom: 14px;\n}\n.form-group label {\n  font-weight: 500;\n}\n.form-group.has-error label {\n  color: #333333;\n}\n.form-group.has-error input {\n  border-color: #d50525;\n}\n.form-group.has-error span.help-block {\n  margin-left: 18px;\n  color: #CA1D04;\n  display: inline-block;\n  margin-bottom: 0;\n}\n.form-group.has-error span.help-block.validation-message {\n  font-weight: 500;\n  margin-left: 15px;\n}\n.form-group.has-error .input-group-addon {\n  border-color: #d50525;\n  border-right: none;\n  color: #333333;\n  background-color: #f5f5f5;\n}\n.form-group .input-group-addon {\n  border-color: #cacaca;\n  border-radius: 2px;\n}\n.form-control {\n  border-radius: 2px;\n  box-shadow: none;\n  border-color: #cacaca;\n  height: 38px;\n  padding: 6px 15px;\n  color: #4a4a4a;\n}\nselect.form-control {\n  padding: 6px 10px;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #f5f5f5;\n  opacity: 1;\n}\n.form-control {\n  font-size: 14px;\n  border-radius: 0;\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.82);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  cursor: default;\n  background-color: rgba(223, 223, 223, 0.13);\n  color: rgba(0, 0, 0, 0.82);\n  box-shadow: none;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\np.form-control {\n  height: 32px;\n}\nform {\n  margin-bottom: 10px;\n}\nform .form-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n  margin-left: 15px;\n}\nform label {\n  font-weight: normal;\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.55);\n  margin-bottom: -2px;\n  margin-left: 2px;\n}\nform label input[type=\"file\"] {\n  position: fixed;\n  top: -1000px;\n}\nform .form-group .form-actions {\n  text-align: right;\n  border: 0;\n  padding-top: 0px;\n}\nform .form-group .form-actions .btn {\n  padding: 2px 10px;\n}\nform .form-group .file {\n  background-color: rgba(223, 223, 223, 0.13);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\nform .form-group .file label {\n  margin-left: -2px;\n}\nform .form-group .file span {\n  margin-top: 5px;\n  float: right;\n  margin-right: 10px;\n}\nform .form-group label.btn {\n  padding-top: 6px;\n}\nform textarea.html {\n  font-family: monospace;\n}\nform .validation-summary-error {\n  color: #CA1D04;\n}\nform .validation-summary-error .glyphicon {\n  font-size: 18px;\n  position: relative;\n}\nform .validation-summary-error .col-xs-1 {\n  width: 20px;\n}\nform .validation-summary-error ul {\n  padding-left: 0;\n}\nform .validation-summary-error ul li {\n  list-style: none;\n}\nform fieldset {\n  margin-bottom: 15px;\n}\n.sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n.article {\n  background-color: rgba(255, 255, 255, 0.7);\n  min-height: 50px;\n}\n.article ol li,\n.article ul li {\n  border-bottom: 1px dotted #777;\n  padding: 6px 0;\n  font-size: 14px;\n}\n.article .form-horizontal {\n  margin-top: 18px;\n  display: block;\n  margin-bottom: 25px;\n}\n.article article-image {\n  display: block;\n  text-align: center;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.article article-image img {\n  max-width: 100%;\n}\n.article article-image p {\n  color: #333333;\n  padding-bottom: 0px;\n  margin-top: 5px;\n  font-size: 11px;\n}\n.article article-part.edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.article article-part.edit-mode li {\n  border: none;\n}\n.article article-part.edit-mode li .col-xs-10,\n.article article-part.edit-mode li col-xs-2 {\n  padding: 0;\n  margin: 0;\n}\n.article article-part textarea {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: solid 1px #ccc;\n}\n.article .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.article ordered-list-block {\n  display: block;\n}\n.article ordered-list-block edit-mode {\n  display: block;\n  text-align: right;\n}\n.article ordered-list-block edit-mode li button {\n  margin-bottom: 5px;\n}\n.article heading-block read-mode {\n  display: block;\n  font-family: \"PT Sans\";\n  font-size: 17px;\n  font-weight: 400;\n  color: #000000;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.article heading-block .col-xs-10 {\n  padding-left: 0;\n}\n.article image-block edit-mode {\n  margin-top: 9px;\n  display: block;\n}\n.article image-block edit-mode img {\n  max-width: 100%;\n}\n.article image-block edit-mode .col-xs-3 {\n  text-align: right;\n  padding-top: 7px;\n}\n.article image-block edit-mode .col-xs-9 {\n  padding-left: 0;\n}\n.article image-block edit-mode .row {\n  margin-bottom: 10px;\n}\n.c_article_parts.edit-mode {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_article_parts.edit-mode .c_article_part {\n  border-bottom: solid 1px rgba(204, 204, 204, 0.36);\n}\n.c_article_part {\n  padding-top: 10px;\n  padding-bottom: 0px;\n}\n.c_article_part form h4 {\n  margin-top: 2px;\n  border: 0;\n  color: #333333;\n  margin-bottom: 5px;\n}\n.c_article_part img {\n  width: 100%;\n}\n.c_article_part .form-group {\n  margin-bottom: 10px;\n}\n.c_article_part .form-group .form-control {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.c_article_part .form-group label {\n  padding-top: 10px;\n}\n.c_article_part article-part-list fieldset {\n  margin-bottom: 30px;\n}\n.c_article_part-add {\n  cursor: pointer;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-top: 10px;\n}\n.c_article_part-add .chevron {\n  float: right;\n  color: #008000;\n}\n.form-group {\n  margin-bottom: 10px;\n}\nh3 {\n  font-family: 'Lato', sans-serif;\n}\n.categories .category edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 10px 10px 0 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.categories .category edit-mode .btn-group {\n  float: right;\n  position: relative;\n  top: -20px;\n}\n.side-navigation {\n  font-family: 'Lato', sans-serif;\n  padding: 0 15px;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.side-navigation h3 {\n  padding-top: 20px;\n  margin-top: 0;\n  color: #333333;\n  margin-bottom: 20px;\n}\n.side-navigation .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.side-navigation .block-actions .glyphicon {\n  color: #333333;\n  position: relative;\n  font-size: 12px;\n  top: 1px;\n  margin-right: 2px;\n}\n.side-navigation ul {\n  list-style-type: none;\n  padding-left: 0;\n  padding-bottom: 10px;\n}\n.side-navigation ul li {\n  border-bottom: 1px dotted #777;\n  margin-bottom: 5px;\n  padding: 2px 10px 7px;\n}\n.side-navigation ul li a {\n  color: #333333;\n}\n.side-navigation ul li a.active,\n.side-navigation ul li a:hover {\n  color: #e22004;\n  cursor: pointer;\n  /*text-decoration: none;*/\n  -webkit-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\n.side-navigation ul li a.disabled {\n  opacity: 0.6;\n}\n.side-navigation ul li .glyphicon {\n  font-size: 8px;\n  color: #e22004;\n  position: relative;\n  top: -1px;\n  margin-right: 5px;\n}\n.side-navigation ul li.edit-mode {\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid #DDD;\n}\n.side-navigation ul li.active a {\n  color: #e22004;\n}\n.side-navigation .side-navigation-add .glyphicon,\n.side-navigation .side-navigation-delete .glyphicon {\n  position: relative;\n  font-size: 13px;\n  top: 2px;\n}\n.side-navigation .side-navigation-add .glyphicon {\n  color: #008000;\n}\n.side-navigation .glyphicon-ok {\n  color: #5cb85c;\n}\n.side-navigation .glyphicon-time {\n  color: #f59f25;\n}\n"; });
define('text!components/market/navigation.html', ['module'], function(module) { module.exports = "<template><require from=\"./market-nav/market-nav\"></require><market-nav router.bind=\"router\"></market-nav><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!components/strategies/navigation.html', ['module'], function(module) { module.exports = "<template><strategy-navigation></strategy-navigation><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!components/strategies/strategy-playground.html', ['module'], function(module) { module.exports = "<template><require from=\"./strategy-playground.css\"></require><strategy-admin></strategy-admin><div class=\"c_playground-content\"><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_playground\"><header><h3 first-letter-span>Strategy Playground</h3></header><form><fieldset><div class=\"form-group\"><label>Selected Strategy</label><p class=\"form-control\" readonly=\"readonly\">${strategy.title}</p></div><div class=\"form-group\"><label>Selected Company</label><div class=\"input-group\"><p class=\"form-control\" readonly=\"readonly\">${company.ticker} - ${company.name}</p><div class=\"input-group-btn\"><button type=\"button\" if.bind=\"!company.show && !searchMode\" click.delegate=\"company.show = true\" class=\"btn btn-default\">Show Details</button> <button type=\"button\" click.delegate=\"searchMode = !!!searchMode\" class=\"btn ${searchMode ? 'btn-default' : 'btn-danger'}\">${searchMode ? 'Cancel' : 'Search'}</button></div></div><div class=\"c_company-details\" if.bind=\"company.show\"><company-details company.bind=\"company\"></company-details><div class=\"c_company-actions\"><button type=\"button\" click.delegate=\"updateCompany(company.ticker)\" class=\"btn btn-danger\">Update</button> <button type=\"button\" click.delegate=\"company.show = false\" class=\"btn btn-default\">Hide</button></div></div></div></fieldset></form><div if.bind=\"searchMode\" class=\"c_companies-content\"><form submit.delegate=\"searchCompanies()\"><fieldset><div class=\"form-inline right\"><label>Company Search:</label><div class=\"input-group\"><input type=\"text\" class=\"form-control uppercase\" value.bind=\"searchCriteria\"><div class=\"input-group-btn\"><button type=\"submit\" disabled.bind=\"searchCriteria.length===0\" class=\"btn btn-danger\">Go</button></div></div></div></fieldset></form><div class=\"c_company_list\" if.bind=\"companies.length > 0\"><div repeat.for=\"company of companies\" class=\"c_company ${$index === $parent.companies.length-1 ? 'no-border': ''}\"><div class=\"c_company-header\"><button type=\"button\" click.trigger=\"selectCompany(company)\" class=\"btn btn-warning btn-xs\">Select</button> <span click.trigger=\"company.expanded = !!!company.expanded\"><span>${company.ticker} - ${company.name}</span> <a class=\"chevron\"><span class=\"glyphicon ${company.expanded ? 'glyphicon-menu-down' : 'glyphicon-menu-left'}\" aria-hidden=\"true\"></span></a></span></div><div class=\"c_company-details\" if.bind=\"company.expanded\"><company-details company.bind=\"company\"></company-details></div></div></div></div><div if.bind=\"strategy.strategyId && company.ticker && !playgroundLoaded\"><div class=\"right\"><button type=\"button\" click.delegate=\"loadPlayground()\" class=\"btn btn-danger\">Load Playground</button></div></div></div><div class=\"col-md-4 col-xs-12\"><side-navigation strategyurl.bind=\"strategy.url\"></side-navigation></div></div><div class=\"row o_chart-content\" if.bind=\"playgroundLoaded\"><div class=\"col-md-8 col-xs-12 c_playground\"><header><h3>Charts</h3></header><div class=\"o_chart\"><stock-chart model.bind=\"playgroundModel\"></stock-chart></div><br></div><div class=\"col-md-4 col-xs-12 c_strategy-runner\"><div class=\"side-navigation\"><h3>Strategy Runner</h3><form><fieldset><div class=\"c_strategy-runner--progress\"><div class=\"form-group\" repeat.for=\"ruleSet of playgroundModel.ruleSets\"><span>${ruleSet.name}</span><s-progress progress.bind=\"ruleSet.progress\"></s-progress><div class=\"col-sm-12\" repeat.for=\"rule of ruleSet.rules\"><span class=\"glyphicon ${rule.valid ? 'glyphicon-ok' : 'glyphicon-time'}\" aria-hidden=\"true\"></span><label>${rule.ruleName}</label></div></div></div><div class=\"c_strategy-runner--options\"><header>Runner</header><div class=\"form-group\"><div class=\"checkbox\"><label><input type=\"checkbox\"> Stop when rules met</label></div></div><div class=\"form-group\"><span class=\"btn-group btn-group-sm\"><button class=\"btn btn-default\" if.bind=\"streaming\" click.delegate=\"stopStreaming()\" type=\"button\"><span class=\"glyphicon glyphicon-pause\" aria-hidden=\"true\"></span></button> <button class=\"btn btn-default\" if.bind=\"!streaming\" click.delegate=\"startStreaming()\" type=\"button\"><span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span></button> <button class=\"btn btn-default\" click.delegate=\"loadPlayground()\" type=\"button\"><span class=\"glyphicon glyphicon-stop\" aria-hidden=\"true\"></span></button> <button class=\"btn btn-default\" click.delegate=\"loadPrev()\" type=\"button\"><span class=\"glyphicon glyphicon-backward\" aria-hidden=\"true\"></span></button> <button class=\"btn btn-default\" click.delegate=\"loadNext()\" type=\"button\"><span class=\"glyphicon glyphicon-forward\" aria-hidden=\"true\"></span></button></span></div></div></fieldset></form></div></div></div></div></template>"; });
define('text!components/strategies/strategy-rule-sets.html', ['module'], function(module) { module.exports = "<template><require from=\"./rules/rule-sets.css\"></require><strategy-admin></strategy-admin><div class=\"c_rule_sets-content\"><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_rule_sets\"><header><h3 first-letter-span>Strategy Rule Sets</h3><h5>${strategy.title}</h5><p class=\"summary\">${strategy.summary}</p></header><div class=\"c_rule_set-list\"><strategy-rule-set repeat.for=\"ruleset of rulesets\" class=\"${$index === $parent.rulesets.length-1 && !editMode ? 'no-border': ''}\" ruleset.bind=\"ruleset\"></strategy-rule-set><div class=\"c_rule_set c_rule_set-add\" show.bind=\"editMode\"><div class=\"c_rule_set-header\" click.delegate=\"addRuleSet()\"><a>Attach Rule Set</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div><div class=\"c_rule_set-details\" show.bind=\"addingMode === true && editMode\"><form><fieldset><div class=\"form-group\"><label>Period</label><select class=\"form-control\" value.bind=\"attachedRuleSet.period\" change.delegate=\"onPeriodSelected()\"><option>- Select Period -</option><option repeat.for=\"period of periods\" model.bind=\"period.id\">${period.name}</option></select></div><div class=\"form-group\"><label>Rule Set</label><select class=\"form-control\" value.bind=\"attachedRuleSet.ruleSetId\" change.delegate=\"onRuleSetSelected()\"><option>- Select Rule Set -</option><option repeat.for=\"periodRuleSet of periodRuleSets\" model.bind=\"periodRuleSet.ruleSetId\">${periodRuleSet.name}</option></select></div><div class=\"form-group\" if.bind=\"attachedRuleSet.ruleSetId > 0\"><label>Description</label><p class=\"form-control\" readonly=\"readonly\">${attachedRuleSet.description}</p></div></fieldset><div class=\"c_rule-actions\"><button type=\"button\" click.delegate=\"confirmAddRuleSet()\" class=\"btn btn-warning\">Attach</button> <button type=\"button\" click.delegate=\"cancelAddRuleSet()\" class=\"btn btn-default\">Cancel</button></div></form></div></div></div><div class=\"c_rule_set-actions\"><button type=\"button\" click.delegate=\"startEdit()\" if.bind=\"!editMode\" class=\"btn btn-danger\">Edit</button> <button type=\"button\" click.delegate=\"trySaveRuleSets()\" if.bind=\"editMode\" class=\"btn btn-danger\">Save</button> <button type=\"button\" click.delegate=\"cancelEdit()\" if.bind=\"editMode\" class=\"btn btn-default\">Cancel</button></div></div><div class=\"col-md-4 col-xs-12\"><side-navigation strategyurl.bind=\"strategy.url\"></side-navigation></div></div></div></template>"; });
define('text!common/styles/common.css', ['module'], function(module) { module.exports = "@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@import url(//fonts.googleapis.com/css?family=Open+Sans:400|Roboto);\n@import url(//fonts.googleapis.com/css?family=Istok+Web:400,700);\n@import url(//fonts.googleapis.com/css?family=Inder);\n@import url(//fonts.googleapis.com/css?family=Raleway);\n@import url(//fonts.googleapis.com/css?family=PT+Sans);\n@import url(//fonts.googleapis.com/css?family=Lato);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('/fonts/glyphicons-halflings-regular.eot');\n  src: url('/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('/fonts/glyphicons-halflings-regular.woff') format('woff'), url('/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');\n}\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: 'Hind Vadodara', sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #333333;\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.8) 100%, #ffffff 0%), url(/Content/Images/emma_bg.jpg) no-repeat 0 0;\n  background-size: 100%;\n  background-attachment: fixed;\n  background-position: top;\n}\nbody a,\nbody a:hover {\n  color: #e22004;\n}\nbody a[first-letter-span] {\n  color: #2d4945;\n}\nbody a[first-letter-span] span {\n  color: #e22004;\n}\nbody .aurelia-validation-message {\n  display: none;\n}\nbody .has-success .form-control {\n  border-color: #ccc;\n}\nbody .has-success .form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\nbody .no-border {\n  border: 0!important;\n}\nbody .right {\n  text-align: right!important;\n}\nbody .uppercase {\n  text-transform: uppercase;\n}\nbody .pointer {\n  cursor: pointer!important;\n}\nbody a:hover {\n  cursor: pointer;\n}\n.btn {\n  font-weight: normal;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  border-radius: 0;\n  min-width: 70px;\n}\n.btn-group .btn,\n.btn-group-vertical .btn {\n  min-width: 10px;\n  margin-right: 0;\n}\n.btn-default {\n  color: #c9302c;\n  border-color: #c9302c;\n}\n.btn-default:active,\n.btn-default:focus {\n  color: #c9302c;\n  border-color: #c9302c;\n  background-color: white;\n}\n.btn-default:hover {\n  color: #c9302c;\n  background-color: rgba(201, 48, 44, 0.05);\n  border-color: #c9302c;\n}\n.btn-danger {\n  background-color: #e22004;\n}\n.dropdown-menu > li > a {\n  font-family: 'Open Sans', sans-serif;\n}\n.btn.active.focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn:active:focus,\n.btn:focus {\n  outline-color: transparent;\n}\n.btn-default.active.focus,\n.btn-default.active:focus,\n.btn-default.active:hover,\n.btn-default:active.focus,\n.btn-default:active:focus,\n.btn-default:active:hover,\n.open > .dropdown-toggle.btn-default.focus,\n.open > .dropdown-toggle.btn-default:focus,\n.open > .dropdown-toggle.btn-default:hover {\n  color: #c9302c;\n  background-color: rgba(201, 48, 44, 0.05);\n  border-color: #c9302c;\n}\n.s-progress {\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  height: 5px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  display: block;\n}\n.s-progress .s-progress-bar {\n  height: 100%;\n  background-color: #5cb85c;\n}\n.page-content {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-bottom: 50px;\n}\n.page-content header {\n  margin-bottom: 15px;\n}\n.page-content header .btn {\n  float: right;\n  margin-left: 10px;\n  margin-top: 25px;\n}\n.page-content header h3 {\n  font-size: 22px;\n  margin-top: 18px;\n  display: inline-block;\n  color: #333333;\n}\n.page-content .actions {\n  float: right;\n  position: relative;\n  top: -39px;\n  margin-right: 0px;\n  margin-bottom: -25px;\n  z-index: 996;\n}\n.page-content .actions .btn {\n  border-radius: 4px 4px 0 0;\n  padding: 2px 12px;\n}\nai-dialog {\n  border-radius: 0;\n}\nai-dialog ai-dialog-body {\n  padding: 15px 30px;\n}\nai-dialog ai-dialog-body h3 {\n  margin: -30px -30px 25px;\n  padding: 20px;\n  font-weight: 500;\n  text-align: center;\n  background-color: #f5f5f5;\n}\nai-dialog ai-dialog-footer {\n  padding-bottom: 20px;\n  border: none;\n  padding-right: 30px;\n}\nai-dialog ai-dialog-footer .btn {\n  margin-left: 14px;\n}\nai-dialog-overlay.active {\n  background-color: black;\n  opacity: .5;\n}\nai-dialog > ai-dialog-footer button.btn-primary,\nai-dialog > ai-dialog-footer button.btn-primary:hover,\nai-dialog > ai-dialog-footer button.btn-primary:hover:enabled {\n  background-color: #2771cd;\n  border: solid 1px #ffffff;\n  color: #ffffff;\n}\nai-dialog > ai-dialog-footer button.btn-default,\nai-dialog > ai-dialog-footer button.btn-default:hover,\nai-dialog > ai-dialog-footer button.btn-default:hover:enabled {\n  background-color: #ffffff;\n  border: solid 1px #2771cd;\n  color: #2771cd;\n}\n.form-group {\n  margin-bottom: 14px;\n}\n.form-group label {\n  font-weight: 500;\n}\n.form-group.has-error label {\n  color: #333333;\n}\n.form-group.has-error input {\n  border-color: #d50525;\n}\n.form-group.has-error span.help-block {\n  margin-left: 18px;\n  color: #CA1D04;\n  display: inline-block;\n  margin-bottom: 0;\n}\n.form-group.has-error span.help-block.validation-message {\n  font-weight: 500;\n  margin-left: 15px;\n}\n.form-group.has-error .input-group-addon {\n  border-color: #d50525;\n  border-right: none;\n  color: #333333;\n  background-color: #f5f5f5;\n}\n.form-group .input-group-addon {\n  border-color: #cacaca;\n  border-radius: 2px;\n}\n.form-control {\n  border-radius: 2px;\n  box-shadow: none;\n  border-color: #cacaca;\n  height: 38px;\n  padding: 6px 15px;\n  color: #4a4a4a;\n}\nselect.form-control {\n  padding: 6px 10px;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #f5f5f5;\n  opacity: 1;\n}\n.form-control {\n  font-size: 14px;\n  border-radius: 0;\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.82);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  cursor: default;\n  background-color: rgba(223, 223, 223, 0.13);\n  color: rgba(0, 0, 0, 0.82);\n  box-shadow: none;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\np.form-control {\n  height: 32px;\n}\nform {\n  margin-bottom: 10px;\n}\nform .form-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n  margin-left: 15px;\n}\nform label {\n  font-weight: normal;\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.55);\n  margin-bottom: -2px;\n  margin-left: 2px;\n}\nform label input[type=\"file\"] {\n  position: fixed;\n  top: -1000px;\n}\nform .form-group .form-actions {\n  text-align: right;\n  border: 0;\n  padding-top: 0px;\n}\nform .form-group .form-actions .btn {\n  padding: 2px 10px;\n}\nform .form-group .file {\n  background-color: rgba(223, 223, 223, 0.13);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\nform .form-group .file label {\n  margin-left: -2px;\n}\nform .form-group .file span {\n  margin-top: 5px;\n  float: right;\n  margin-right: 10px;\n}\nform .form-group label.btn {\n  padding-top: 6px;\n}\nform textarea.html {\n  font-family: monospace;\n}\nform .validation-summary-error {\n  color: #CA1D04;\n}\nform .validation-summary-error .glyphicon {\n  font-size: 18px;\n  position: relative;\n}\nform .validation-summary-error .col-xs-1 {\n  width: 20px;\n}\nform .validation-summary-error ul {\n  padding-left: 0;\n}\nform .validation-summary-error ul li {\n  list-style: none;\n}\nform fieldset {\n  margin-bottom: 15px;\n}\n.sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n.article {\n  background-color: rgba(255, 255, 255, 0.7);\n  min-height: 50px;\n}\n.article ol li,\n.article ul li {\n  border-bottom: 1px dotted #777;\n  padding: 6px 0;\n  font-size: 14px;\n}\n.article .form-horizontal {\n  margin-top: 18px;\n  display: block;\n  margin-bottom: 25px;\n}\n.article article-image {\n  display: block;\n  text-align: center;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.article article-image img {\n  max-width: 100%;\n}\n.article article-image p {\n  color: #333333;\n  padding-bottom: 0px;\n  margin-top: 5px;\n  font-size: 11px;\n}\n.article article-part.edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.article article-part.edit-mode li {\n  border: none;\n}\n.article article-part.edit-mode li .col-xs-10,\n.article article-part.edit-mode li col-xs-2 {\n  padding: 0;\n  margin: 0;\n}\n.article article-part textarea {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: solid 1px #ccc;\n}\n.article .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.article ordered-list-block {\n  display: block;\n}\n.article ordered-list-block edit-mode {\n  display: block;\n  text-align: right;\n}\n.article ordered-list-block edit-mode li button {\n  margin-bottom: 5px;\n}\n.article heading-block read-mode {\n  display: block;\n  font-family: \"PT Sans\";\n  font-size: 17px;\n  font-weight: 400;\n  color: #000000;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.article heading-block .col-xs-10 {\n  padding-left: 0;\n}\n.article image-block edit-mode {\n  margin-top: 9px;\n  display: block;\n}\n.article image-block edit-mode img {\n  max-width: 100%;\n}\n.article image-block edit-mode .col-xs-3 {\n  text-align: right;\n  padding-top: 7px;\n}\n.article image-block edit-mode .col-xs-9 {\n  padding-left: 0;\n}\n.article image-block edit-mode .row {\n  margin-bottom: 10px;\n}\n.c_article_parts.edit-mode {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_article_parts.edit-mode .c_article_part {\n  border-bottom: solid 1px rgba(204, 204, 204, 0.36);\n}\n.c_article_part {\n  padding-top: 10px;\n  padding-bottom: 0px;\n}\n.c_article_part form h4 {\n  margin-top: 2px;\n  border: 0;\n  color: #333333;\n  margin-bottom: 5px;\n}\n.c_article_part img {\n  width: 100%;\n}\n.c_article_part .form-group {\n  margin-bottom: 10px;\n}\n.c_article_part .form-group .form-control {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.c_article_part .form-group label {\n  padding-top: 10px;\n}\n.c_article_part article-part-list fieldset {\n  margin-bottom: 30px;\n}\n.c_article_part-add {\n  cursor: pointer;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-top: 10px;\n}\n.c_article_part-add .chevron {\n  float: right;\n  color: #008000;\n}\n.form-group {\n  margin-bottom: 10px;\n}\nh3 {\n  font-family: 'Lato', sans-serif;\n}\n.categories .category edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 10px 10px 0 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.categories .category edit-mode .btn-group {\n  float: right;\n  position: relative;\n  top: -20px;\n}\n.side-navigation {\n  font-family: 'Lato', sans-serif;\n  padding: 0 15px;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.side-navigation h3 {\n  padding-top: 20px;\n  margin-top: 0;\n  color: #333333;\n  margin-bottom: 20px;\n}\n.side-navigation .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.side-navigation .block-actions .glyphicon {\n  color: #333333;\n  position: relative;\n  font-size: 12px;\n  top: 1px;\n  margin-right: 2px;\n}\n.side-navigation ul {\n  list-style-type: none;\n  padding-left: 0;\n  padding-bottom: 10px;\n}\n.side-navigation ul li {\n  border-bottom: 1px dotted #777;\n  margin-bottom: 5px;\n  padding: 2px 10px 7px;\n}\n.side-navigation ul li a {\n  color: #333333;\n}\n.side-navigation ul li a.active,\n.side-navigation ul li a:hover {\n  color: #e22004;\n  cursor: pointer;\n  /*text-decoration: none;*/\n  -webkit-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\n.side-navigation ul li a.disabled {\n  opacity: 0.6;\n}\n.side-navigation ul li .glyphicon {\n  font-size: 8px;\n  color: #e22004;\n  position: relative;\n  top: -1px;\n  margin-right: 5px;\n}\n.side-navigation ul li.edit-mode {\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid #DDD;\n}\n.side-navigation ul li.active a {\n  color: #e22004;\n}\n.side-navigation .side-navigation-add .glyphicon,\n.side-navigation .side-navigation-delete .glyphicon {\n  position: relative;\n  font-size: 13px;\n  top: 2px;\n}\n.side-navigation .side-navigation-add .glyphicon {\n  color: #008000;\n}\n.side-navigation .glyphicon-ok {\n  color: #5cb85c;\n}\n.side-navigation .glyphicon-time {\n  color: #f59f25;\n}\n"; });
define('text!components/strategies/strategy.html', ['module'], function(module) { module.exports = "<template><require from=\"./strategy.css\"></require><div class=\"actions\" if.bind=\"powerUser\"><div if.bind=\"editMode !== true\" class=\"btn-group\" role=\"group\"><button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Administration <span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li><a click.delegate=\"startEdit()\">Edit Article</a></li><li role=\"separator\" class=\"divider\"></li><li><a href=\"/strategies/rules\">Manage Rules</a></li><li><a href=\"/strategies/rule-sets\">Manage Rule Sets</a></li><li><a href=\"/strategies/indicators\">Manage Indicators</a></li></ul></div><div class=\"btn-group\" role=\"group\" aria-label=\"...\" if.bind=\"editMode === true\"><button type=\"button\" click.delegate=\"trySaveArticle()\" class=\"btn btn-danger\">Apply Changes</button> <button type=\"button\" click.delegate=\"cancelEdit()\" class=\"btn btn-default\">Cancel</button></div></div><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_strategy\"><header><h3>${strategy.title}</h3></header><form if.bind=\"editMode === true\"><fieldset><div class=\"form-group\"><label>Strategy Name</label><input type=\"text\" class=\"form-control\" value.bind=\"strategy.title & validate\"></div><div class=\"form-group\"><label>Summary</label><textarea rows=\"4\" class=\"form-control\" value.bind=\"strategy.summary & validate\"></textarea></div><div class=\"form-group\"><label>Strategy Url</label><input type=\"text\" class=\"form-control\" value.bind=\"strategy.url & validate\"></div><div class=\"form-group\"><label>Strategy Status:</label><div class=\"input-group\" style=\"width:40%\"><input type=\"text\" class=\"form-control\" disabled=\"disabled\" aria-label=\"...\" value=\"${strategy.active ? 'Active' : 'Inactive'}\"><div class=\"input-group-btn\"><button type=\"button\" click.delegate=\"setActiveStatus(true)\" if.bind=\"!strategy.active\" class=\"btn btn-danger\">Activate</button> <button type=\"button\" click.delegate=\"setActiveStatus(false)\" if.bind=\"strategy.active\" class=\"btn btn-danger\">Deactivate</button></div></div></div></fieldset><h4>Article Parts</h4></form><div class=\"c_article_parts ${editMode ? 'edit-mode' : ''}\"><article-parts parts.bind=\"strategy.blocks\"></article-parts></div></div><div class=\"col-md-4 col-xs-12\"><div class=\"side-navigation\"><h3>Defined Strategies</h3><ul><li repeat.for=\"summary of summaries\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a click.delegate=\"$parent.navigateToStrategy(summary.url)\" title=\"${summary.summary}\" class=\"${summary.selected ? 'active' : ''} ${summary.active ? '' : 'disabled'}\">${summary.title} Rules</a></li></ul><div if.bind=\"editMode\"><h3>Add / Remove Strategies</h3><ul><li class=\"side-navigation-add\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span> <a click.delegate=\"addStrategy()\">Register New Strategy</a></li><li class=\"side-navigation-delete\"><form><span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> <a click.delegate=\"deleting = true\">Delete Loaded Strategy</a><div class=\"form-actions no-border\" if.bind=\"deleting \"><input class=\"btn btn-danger\" type=\"button\" click.delegate=\"deleteStrategy()\" value=\"Delete\"> <input class=\"btn btn-default\" type=\"button\" click.delegate=\"deleting = false\" value=\"Cancel\"></div></form></li></ul></div></div></div></div></template>"; });
define('text!components/studies/navigation.html', ['module'], function(module) { module.exports = "<template><require from=\"../nav-menu/category-nav/category-nav\"></require><category-nav menu.bind=\"menu\"></category-nav><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!common/styles/_article.css', ['module'], function(module) { module.exports = ".article {\n  background-color: rgba(255, 255, 255, 0.7);\n  min-height: 50px;\n}\n.article ol li,\n.article ul li {\n  border-bottom: 1px dotted #777;\n  padding: 6px 0;\n  font-size: 14px;\n}\n.article .form-horizontal {\n  margin-top: 18px;\n  display: block;\n  margin-bottom: 25px;\n}\n.article article-image {\n  display: block;\n  text-align: center;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.article article-image img {\n  max-width: 100%;\n}\n.article article-image p {\n  color: #333333;\n  padding-bottom: 0px;\n  margin-top: 5px;\n  font-size: 11px;\n}\n.article article-part.edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.article article-part.edit-mode li {\n  border: none;\n}\n.article article-part.edit-mode li .col-xs-10,\n.article article-part.edit-mode li col-xs-2 {\n  padding: 0;\n  margin: 0;\n}\n.article article-part textarea {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: solid 1px #ccc;\n}\n.article .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.article ordered-list-block {\n  display: block;\n}\n.article ordered-list-block edit-mode {\n  display: block;\n  text-align: right;\n}\n.article ordered-list-block edit-mode li button {\n  margin-bottom: 5px;\n}\n.article heading-block read-mode {\n  display: block;\n  font-family: \"PT Sans\";\n  font-size: 17px;\n  font-weight: 400;\n  color: #000000;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.article heading-block .col-xs-10 {\n  padding-left: 0;\n}\n.article image-block edit-mode {\n  margin-top: 9px;\n  display: block;\n}\n.article image-block edit-mode img {\n  max-width: 100%;\n}\n.article image-block edit-mode .col-xs-3 {\n  text-align: right;\n  padding-top: 7px;\n}\n.article image-block edit-mode .col-xs-9 {\n  padding-left: 0;\n}\n.article image-block edit-mode .row {\n  margin-bottom: 10px;\n}\n.c_article_parts.edit-mode {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_article_parts.edit-mode .c_article_part {\n  border-bottom: solid 1px rgba(204, 204, 204, 0.36);\n}\n.c_article_part {\n  padding-top: 10px;\n  padding-bottom: 0px;\n}\n.c_article_part form h4 {\n  margin-top: 2px;\n  border: 0;\n  color: #333333;\n  margin-bottom: 5px;\n}\n.c_article_part img {\n  width: 100%;\n}\n.c_article_part .form-group {\n  margin-bottom: 10px;\n}\n.c_article_part .form-group .form-control {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.c_article_part .form-group label {\n  padding-top: 10px;\n}\n.c_article_part article-part-list fieldset {\n  margin-bottom: 30px;\n}\n.c_article_part-add {\n  cursor: pointer;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-top: 10px;\n}\n.c_article_part-add .chevron {\n  float: right;\n  color: #008000;\n}\n.form-group {\n  margin-bottom: 10px;\n}\n"; });
define('text!components/studies/study.html', ['module'], function(module) { module.exports = "<template><require from=\"./study.css\"></require><div class=\"actions\" if.bind=\"powerUser\"><div if.bind=\"editMode !== true\" class=\"btn-group\" role=\"group\"><button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Administration <span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li><a click.delegate=\"startEdit()\">Edit Page</a></li><li role=\"separator\" class=\"divider\"></li><li><a href=\"/categories\">Manage Categories</a></li></ul></div><div class=\"btn-group\" role=\"group\" aria-label=\"...\"><button type=\"button\" if.bind=\"editMode === true\" click.delegate=\"saveArticle()\" class=\"btn btn-success\">Apply Changes</button> <button type=\"button\" if.bind=\"editMode === true\" click.delegate=\"cancelEdit()\" class=\"btn btn-default\">Cancel</button></div></div><div class=\"row\"><div class=\"col-md-8 article\"><header><h3>${article.title}</h3></header><form if.bind=\"editMode === true\"><fieldset><div class=\"form-group\"><label>Article Name</label><input type=\"text\" class=\"form-control\" value.bind=\"article.title & validate\"></div><div class=\"form-group\"><label>Article Url</label><input type=\"text\" class=\"form-control\" value.bind=\"article.url & validate\"></div></fieldset><h4>Article Parts</h4></form><div class=\"c_article_parts ${editMode ? 'edit-mode' : ''}\"><article-parts parts.bind=\"article.blocks\"></article-parts></div></div><div class=\"col-md-4\"><div class=\"side-navigation\"><h3>${category.title}</h3><ul><li repeat.for=\"summary of articles\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a click.delegate=\"$parent.navigateToArticle(summary.url)\" title=\"${summary.summary}\" class=\"${summary.selected ? 'active' : ''}\">${summary.title} Rules</a></li></ul><div if.bind=\"editMode\"><h3>Add / Remove Articles</h3><ul><li class=\"side-navigation-add\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span> <a click.delegate=\"addArticle()\">Add New Article</a></li><li class=\"side-navigation-delete\"><form><span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> <a click.delegate=\"deleting = true\">Delete Loaded Article</a><div class=\"form-actions no-border\" if.bind=\"deleting \"><input class=\"btn btn-danger\" type=\"button\" click.delegate=\"deleteArticle()\" value=\"Delete\"> <input class=\"btn btn-default\" type=\"button\" click.delegate=\"deleting = false\" value=\"Cancel\"></div></form></li></ul></div></div></div></div></template>"; });
define('text!components/user/login.html', ['module'], function(module) { module.exports = "<template><h3>Login</h3></template>"; });
define('text!common/styles/_body.css', ['module'], function(module) { module.exports = "body {\n  width: 100%;\n  height: 100%;\n  font-family: 'Hind Vadodara', sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #333333;\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.8) 100%, #ffffff 0%), url(/Content/Images/emma_bg.jpg) no-repeat 0 0;\n  background-size: 100%;\n  background-attachment: fixed;\n  background-position: top;\n}\nbody a,\nbody a:hover {\n  color: #e22004;\n}\nbody a[first-letter-span] {\n  color: #2d4945;\n}\nbody a[first-letter-span] span {\n  color: #e22004;\n}\nbody .aurelia-validation-message {\n  display: none;\n}\nbody .has-success .form-control {\n  border-color: #ccc;\n}\nbody .has-success .form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\nbody .no-border {\n  border: 0!important;\n}\nbody .right {\n  text-align: right!important;\n}\nbody .uppercase {\n  text-transform: uppercase;\n}\nbody .pointer {\n  cursor: pointer!important;\n}\nbody a:hover {\n  cursor: pointer;\n}\n"; });
define('text!components/user/navigation.html', ['module'], function(module) { module.exports = "<template><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!components/user/profile.html', ['module'], function(module) { module.exports = "<template><h3>Login</h3></template>"; });
define('text!dialogs/login/user-login.html', ['module'], function(module) { module.exports = "<template><require from=\"./user-login.css\"></require><div class=\"user-login\"><ai-dialog><ai-dialog-body><h3>Login</h3><form class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-12 control-label\">Username / Email</label><div class=\"col-sm-12\"><input type=\"text\" class=\"form-control\" value.bind=\"model.email & validate\"></div></div><div class=\"form-group\"><label class=\"col-sm-12 control-label\">Password</label><div class=\"col-sm-12\"><input type=\"password\" class=\"form-control\" value.bind=\"model.password & validate\"></div></div><div class=\"form-group has-error\" if.bind=\"loginFailed\"><span class=\"help-block validation-message\">Your account or password is incorrect.</span></div></form></ai-dialog-body><ai-dialog-footer><button class=\"btn btn-primary\" click.trigger=\"tryLogin()\">Login</button> <button class=\"btn btn-default\" click.trigger=\"controller.cancel()\">Cancel</button></ai-dialog-footer></ai-dialog></div></template>"; });
define('text!common/styles/_button.css', ['module'], function(module) { module.exports = ".btn {\n  font-weight: normal;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  border-radius: 0;\n  min-width: 70px;\n}\n.btn-group .btn,\n.btn-group-vertical .btn {\n  min-width: 10px;\n  margin-right: 0;\n}\n.btn-default {\n  color: #c9302c;\n  border-color: #c9302c;\n}\n.btn-default:active,\n.btn-default:focus {\n  color: #c9302c;\n  border-color: #c9302c;\n  background-color: white;\n}\n.btn-default:hover {\n  color: #c9302c;\n  background-color: rgba(201, 48, 44, 0.05);\n  border-color: #c9302c;\n}\n.btn-danger {\n  background-color: #e22004;\n}\n.dropdown-menu > li > a {\n  font-family: 'Open Sans', sans-serif;\n}\n.btn.active.focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn:active:focus,\n.btn:focus {\n  outline-color: transparent;\n}\n.btn-default.active.focus,\n.btn-default.active:focus,\n.btn-default.active:hover,\n.btn-default:active.focus,\n.btn-default:active:focus,\n.btn-default:active:hover,\n.open > .dropdown-toggle.btn-default.focus,\n.open > .dropdown-toggle.btn-default:focus,\n.open > .dropdown-toggle.btn-default:hover {\n  color: #c9302c;\n  background-color: rgba(201, 48, 44, 0.05);\n  border-color: #c9302c;\n}\n"; });
define('text!components/market/jobs-dashboard/navigation.html', ['module'], function(module) { module.exports = "<template><require from=\"./jobs-nav/jobs-nav\"></require><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_dashboard\"><router-view></router-view></div><div class=\"col-md-4 col-xs-12\"><div class=\"side-navigation\"><jobs-nav router.bind=\"router\"></jobs-nav></div></div></div></template>"; });
define('text!components/market/market-nav/market-nav.html', ['module'], function(module) { module.exports = "<template><div class=\"sub-nav\"><nav class=\"navbar navbar\"><div class=\"container\"><nav class=\"navbar\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a href.bind=\"row.href\">${row.title}</a></li></ul></nav></div></nav></div></template>"; });
define('text!common/styles/_dialog.css', ['module'], function(module) { module.exports = "ai-dialog {\n  border-radius: 0;\n}\nai-dialog ai-dialog-body {\n  padding: 15px 30px;\n}\nai-dialog ai-dialog-body h3 {\n  margin: -30px -30px 25px;\n  padding: 20px;\n  font-weight: 500;\n  text-align: center;\n  background-color: #f5f5f5;\n}\nai-dialog ai-dialog-footer {\n  padding-bottom: 20px;\n  border: none;\n  padding-right: 30px;\n}\nai-dialog ai-dialog-footer .btn {\n  margin-left: 14px;\n}\nai-dialog-overlay.active {\n  background-color: black;\n  opacity: .5;\n}\nai-dialog > ai-dialog-footer button.btn-primary,\nai-dialog > ai-dialog-footer button.btn-primary:hover,\nai-dialog > ai-dialog-footer button.btn-primary:hover:enabled {\n  background-color: #2771cd;\n  border: solid 1px #ffffff;\n  color: #ffffff;\n}\nai-dialog > ai-dialog-footer button.btn-default,\nai-dialog > ai-dialog-footer button.btn-default:hover,\nai-dialog > ai-dialog-footer button.btn-default:hover:enabled {\n  background-color: #ffffff;\n  border: solid 1px #2771cd;\n  color: #2771cd;\n}\n"; });
define('text!components/nav-menu/category-nav/category-nav.html', ['module'], function(module) { module.exports = "<template><div class=\"sub-nav\"><nav class=\"navbar navbar\"><div class=\"container\"><nav class=\"navbar\"><ul class=\"nav navbar-nav\"><li repeat.for=\"item of menu.items\" class=\"${item.isActive ? 'active' : ''}\"><a href.bind=\"$parent.getUrl(item)\">${item.title}</a></li></ul></nav></div></nav></div></template>"; });
define('text!common/styles/_fonts.css', ['module'], function(module) { module.exports = "@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@import url(//fonts.googleapis.com/css?family=Open+Sans:400|Roboto);\n@import url(//fonts.googleapis.com/css?family=Istok+Web:400,700);\n@import url(//fonts.googleapis.com/css?family=Inder);\n@import url(//fonts.googleapis.com/css?family=Raleway);\n@import url(//fonts.googleapis.com/css?family=PT+Sans);\n@import url(//fonts.googleapis.com/css?family=Lato);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('/fonts/glyphicons-halflings-regular.eot');\n  src: url('/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('/fonts/glyphicons-halflings-regular.woff') format('woff'), url('/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');\n}\n"; });
define('text!components/nav-menu/main-nav/main-nav.html', ['module'], function(module) { module.exports = "<template><require from=\"./main-nav.css\"></require><div class=\"container\"><div class=\"main-nav-items\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a href.bind=\"row.href\">${row.title}</a></li></ul></div></div></template>"; });
define('text!components/nav-menu/sub-nav/sub-nav.html', ['module'], function(module) { module.exports = "<template><div class=\"sub-nav\"><nav class=\"navbar navbar\"><div class=\"container\"><nav class=\"navbar\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a href.bind=\"row.href\">${row.title}</a></li></ul></nav></div></nav></div></template>"; });
define('text!common/styles/_form.css', ['module'], function(module) { module.exports = ".form-group {\n  margin-bottom: 14px;\n}\n.form-group label {\n  font-weight: 500;\n}\n.form-group.has-error label {\n  color: #333333;\n}\n.form-group.has-error input {\n  border-color: #d50525;\n}\n.form-group.has-error span.help-block {\n  margin-left: 18px;\n  color: #CA1D04;\n  display: inline-block;\n  margin-bottom: 0;\n}\n.form-group.has-error span.help-block.validation-message {\n  font-weight: 500;\n  margin-left: 15px;\n}\n.form-group.has-error .input-group-addon {\n  border-color: #d50525;\n  border-right: none;\n  color: #333333;\n  background-color: #f5f5f5;\n}\n.form-group .input-group-addon {\n  border-color: #cacaca;\n  border-radius: 2px;\n}\n.form-control {\n  border-radius: 2px;\n  box-shadow: none;\n  border-color: #cacaca;\n  height: 38px;\n  padding: 6px 15px;\n  color: #4a4a4a;\n}\nselect.form-control {\n  padding: 6px 10px;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #f5f5f5;\n  opacity: 1;\n}\n.form-control {\n  font-size: 14px;\n  border-radius: 0;\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.82);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  cursor: default;\n  background-color: rgba(223, 223, 223, 0.13);\n  color: rgba(0, 0, 0, 0.82);\n  box-shadow: none;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\np.form-control {\n  height: 32px;\n}\nform {\n  margin-bottom: 10px;\n}\nform .form-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n  margin-left: 15px;\n}\nform label {\n  font-weight: normal;\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.55);\n  margin-bottom: -2px;\n  margin-left: 2px;\n}\nform label input[type=\"file\"] {\n  position: fixed;\n  top: -1000px;\n}\nform .form-group .form-actions {\n  text-align: right;\n  border: 0;\n  padding-top: 0px;\n}\nform .form-group .form-actions .btn {\n  padding: 2px 10px;\n}\nform .form-group .file {\n  background-color: rgba(223, 223, 223, 0.13);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\nform .form-group .file label {\n  margin-left: -2px;\n}\nform .form-group .file span {\n  margin-top: 5px;\n  float: right;\n  margin-right: 10px;\n}\nform .form-group label.btn {\n  padding-top: 6px;\n}\nform textarea.html {\n  font-family: monospace;\n}\nform .validation-summary-error {\n  color: #CA1D04;\n}\nform .validation-summary-error .glyphicon {\n  font-size: 18px;\n  position: relative;\n}\nform .validation-summary-error .col-xs-1 {\n  width: 20px;\n}\nform .validation-summary-error ul {\n  padding-left: 0;\n}\nform .validation-summary-error ul li {\n  list-style: none;\n}\nform fieldset {\n  margin-bottom: 15px;\n}\n"; });
define('text!components/strategies/indicators/indicators.html', ['module'], function(module) { module.exports = "<template><require from=\"./indicators.css\"></require><strategy-admin></strategy-admin><div class=\"c_indicators-content\"><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_indicators\"><header><h3 first-letter-span>Manage Indicators</h3></header><div class=\"c_indicator-list\"><indicator repeat.for=\"indicator of indicators\" indicator.bind=\"indicator\"></indicator><div class=\"c_indicator c_indicator-add\" click.delegate=\"addIndicator()\"><div class=\"c_indicator-header\"><a>Register new indicator</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div></div></div></div><div class=\"col-md-4 col-xs-12\"><div class=\"side-navigation\"><h3>Time Frame</h3><ul><li repeat.for=\"period of periods\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a click.delegate=\"$parent.loadIndicatorsForPeriod(period)\" class=\"${period.active ? 'active' : ''}\">${period.name} Indicators</a></li></ul></div></div></div><ul if.bind=\"errors.length > 0\"><li repeat.for=\"error of errors\">${error}</li></ul></div></template>"; });
define('text!components/strategies/rules/rule-sets.html', ['module'], function(module) { module.exports = "<template><require from=\"./rule-sets.css\"></require><strategy-admin></strategy-admin><div class=\"c_rule_sets-content\"><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_rule_sets\"><header><h3 first-letter-span>Manage Rule Sets</h3></header><div class=\"c_rule_set-list\"><rule-set repeat.for=\"ruleset of rulesets\" ruleset.bind=\"ruleset\"></rule-set><div class=\"c_rule_set c_rule_set-add\" click.delegate=\"addRuleSet()\"><div class=\"c_rule_set-header\"><a>Register new rule set</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div></div></div></div><div class=\"col-md-4 col-xs-12\"><div class=\"side-navigation\"><h3>Time Frame</h3><ul><li repeat.for=\"period of periods\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a click.delegate=\"$parent.loadRuleSetsForPeriod(period)\" class=\"${period.active ? 'active' : ''}\">${period.name} Rules</a></li></ul></div></div></div><ul if.bind=\"errors.length > 0\"><li repeat.for=\"error of errors\">${error}</li></ul></div></template>"; });
define('text!common/styles/_page.css', ['module'], function(module) { module.exports = ".page-content {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-bottom: 50px;\n}\n.page-content header {\n  margin-bottom: 15px;\n}\n.page-content header .btn {\n  float: right;\n  margin-left: 10px;\n  margin-top: 25px;\n}\n.page-content header h3 {\n  font-size: 22px;\n  margin-top: 18px;\n  display: inline-block;\n  color: #333333;\n}\n.page-content .actions {\n  float: right;\n  position: relative;\n  top: -39px;\n  margin-right: 0px;\n  margin-bottom: -25px;\n  z-index: 996;\n}\n.page-content .actions .btn {\n  border-radius: 4px 4px 0 0;\n  padding: 2px 12px;\n}\n"; });
define('text!components/strategies/rules/rules.html', ['module'], function(module) { module.exports = "<template><require from=\"./rules.css\"></require><strategy-admin></strategy-admin><div class=\"c_rules-content\"><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_rules\"><header><h3 first-letter-span>Manage Rules</h3></header><div class=\"c_rule-list\"><rule repeat.for=\"rule of rules\" rule.bind=\"rule\"></rule><div class=\"c_rule c_rule-add\" click.delegate=\"addRule()\"><div class=\"c_rule-header\"><a>Register new rule</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div></div></div></div><div class=\"col-md-4 col-xs-12\"><div class=\"side-navigation\"><h3>Time Frame</h3><ul><li repeat.for=\"period of periods\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a click.delegate=\"$parent.loadRulesForPeriod(period)\" class=\"${period.active ? 'active' : ''}\">${period.name} Rules</a></li></ul></div></div></div><ul if.bind=\"errors.length > 0\"><li repeat.for=\"error of errors\">${error}</li></ul></div></template>"; });
define('text!resources/elements/article-parts/article-part-actions.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"part.editMode === true\"><div class=\"form-actions\"><button type=\"button\" click.delegate=\"remove()\" class=\"btn btn-danger\">Remove</button> <button type=\"button\" click.delegate=\"moveUp()\" class=\"btn btn-default\">Move Up</button> <button type=\"button\" click.delegate=\"moveDown()\" class=\"btn btn-default\">Move Down</button></div></form></template>"; });
define('text!resources/elements/article-parts/article-part-heading.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"part.editMode === true\"><h4>Define heading</h4><fieldset><div class=\"form-group ${!typeValid ? 'has-error' : ''}\"><label class=\"col-sm-10\">Heading Type</label><div class=\"col-sm-5\"><select class=\"form-control\" change.delegate=\"onChange()\" value.bind=\"part.headingType\"><option>- Select heading type -</option><option repeat.for=\"heading of headingTypes\" value.bind=\"heading\">${heading}</option></select><span if.bind=\"!typeValid\" class=\"help-block validation-message\">Heading type not selected.</span></div></div><div class=\"form-group ${!textValid ? 'has-error' : ''}\"><label class=\"col-sm-10\">Heading Text</label><div class=\"col-sm-12\"><input type=\"text\" class=\"form-control\" value.bind=\"part.text\"> <span if.bind=\"!textValid\" class=\"help-block validation-message\">Heading text cannot be blank.</span></div></div></fieldset></form><span if.bind=\"part.editMode !== true\" class=\"${part.headingType}\">${part.text}</span></template>"; });
define('text!common/styles/_progress.css', ['module'], function(module) { module.exports = ".s-progress {\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  height: 5px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  display: block;\n}\n.s-progress .s-progress-bar {\n  height: 100%;\n  background-color: #5cb85c;\n}\n"; });
define('text!resources/elements/article-parts/article-part-image.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"part.editMode === true\"><h4>Select Image</h4><fieldset><div class=\"form-group ${!textValid ? 'has-error' : ''}\"><label class=\"col-sm-10\">Image Title</label><div class=\"col-sm-12\"><input type=\"text\" class=\"form-control\" value.bind=\"part.text\"> <span if.bind=\"!textValid\" class=\"help-block validation-message\">Image title cannot be blank.</span> <span if.bind=\"textValid\">&nbsp;</span></div></div><div class=\"form-group ${!imageValid ? 'has-error' : ''}\"><div class=\"col-sm-12\"><div class=\"file\"><label class=\"btn btn-danger\"><input type=\"file\" accept=\"image/*\" class=\"form-control\" change.delegate=\"uploadImage()\" files.bind=\"selectedFiles\"> Select Image</label><span if.bind=\"selectedFiles.length > 0\" repeat.for=\"file of selectedFiles | fileListToArray\">${file.name} [${file.size / 1000} kb]</span></div><span if.bind=\"!imageValid\" class=\"help-block validation-message\">Image is not selected.</span></div></div><div class=\"form-group\" if.bind=\"imageValid\"><label class=\"col-sm-10\">Active Image</label><div class=\"col-sm-12\"><img src.bind=\"part.imageUrl\"></div></div></fieldset></form><span if.bind=\"part.editMode !== true\"><img src.bind=\"part.imageUrl\"><p>${part.text}</p></span></template>"; });
define('text!resources/elements/article-parts/article-part-list.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"part.editMode === true\"><h4>Define List Items</h4><fieldset><div repeat.for=\"item of part.items\" class=\"form-group ${!item.valid ? 'has-error' : ''}\"><label class=\"col-sm-10\">${$index + 1}.</label><div class=\"col-sm-12\"><textarea rows=\"4\" class=\"form-control\" value.bind=\"item.text\"></textarea><span if.bind=\"!item.valid\" class=\"help-block validation-message\">Text cannot be blank.</span><div class=\"form-actions\"><button type=\"button\" if.bind=\"$index+1 === $parent.part.items.length\" click.delegate=\"$parent.addItem($index)\" class=\"btn btn-success\">New Item</button> <button type=\"button\" click.delegate=\"$parent.deleteItem($index)\" class=\"btn btn-danger\">Delete Item</button></div></div></div></fieldset></form><ol class=\"f\" if.bind=\"!part.editMode && part.items && part.items.length > 0\"><li repeat.for=\"item of part.items\">${item.text}</li></ol></template>"; });
define('text!common/styles/_sub-nav.css', ['module'], function(module) { module.exports = ".sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n"; });
define('text!common/styles/_variables.css', ['module'], function(module) { module.exports = ""; });
define('text!components/categories/categories.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/article-parts/article-part-new.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"part.editMode === true\"><h4>Add new part</h4><fieldset><div class=\"form-group\"><label class=\"col-sm-10 control-label\">Part Type</label><div class=\"col-sm-6\"><select class=\"form-control\" change.delegate=\"onTypeChange()\" value.bind=\"selectedType\"><option>- Select part type -</option><option repeat.for=\"type of partTypes\" value.bind=\"type\">${type}</option></select></div></div></fieldset><div class=\"form-actions\"><button type=\"button\" show.bind=\"canAdd\" click.delegate=\"add()\" class=\"btn btn-danger au-target\" au-target-id=\"97\">Add</button> <button type=\"button\" click.delegate=\"cancel()\" class=\"btn btn-default au-target\" au-target-id=\"97\">Cancel</button></div></form></template>"; });
define('text!resources/elements/article-parts/article-part-paragraph.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"part.editMode === true\"><h4>Define Paragraph</h4><fieldset><div class=\"form-group ${!textValid ? 'has-error' : ''}\"><label class=\"col-sm-10\">Paragraph Text</label><div class=\"col-sm-12\"><textarea rows=\"4\" class=\"form-control\" value.bind=\"part.text\"></textarea><span if.bind=\"!textValid\" class=\"help-block validation-message\">Paragraph text cannot be blank.</span></div></div></fieldset></form><p if.bind=\"part.editMode !== true\">${part.text}</p></template>"; });
define('text!components/footer/dream-footer.css', ['module'], function(module) { module.exports = "dream-footer {\n  display: block;\n  padding-bottom: 30px;\n}\n"; });
define('text!resources/elements/article-parts/article-parts.html', ['module'], function(module) { module.exports = "<template><div class=\"c_article_part\" repeat.for=\"part of parts\"><article-part-paragraph part.bind=\"part\" if.bind=\"part.type === 'Paragraph'\"></article-part-paragraph><article-part-heading part.bind=\"part\" if.bind=\"part.type === 'Heading'\"></article-part-heading><article-part-image part.bind=\"part\" if.bind=\"part.type === 'Image'\"></article-part-image><article-part-list part.bind=\"part\" if.bind=\"part.type === 'List'\"></article-part-list><article-part-new part.bind=\"part\" if.bind=\"part.type === 'Unset'\"></article-part-new><article-part-actions part.bind=\"part\" if.bind=\"part.type !== 'Unset'\"></article-part-actions></div><div class=\"c_article_part-add\" click.delegate=\"addPart()\" if.bind=\"editMode === true\"><a>Add new part</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div></template>"; });
define('text!resources/elements/chart/stock-chart.html', ['module'], function(module) { module.exports = "<template><require from=\"./stock-chart.css\"></require><div id=\"container-Weekly\" class=\"o_chart-container\"></div><div id=\"container-Daily\" class=\"o_chart-container\"></div></template>"; });
define('text!components/header/dream-header.css', ['module'], function(module) { module.exports = "dream-header {\n  font-family: 'Arial', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  top: 0px;\n  z-index: 999;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  background: #ffffff;\n  padding: 0;\n}\ndream-header .nav .open > a,\ndream-header .nav .open > a:hover,\ndream-header .nav .open > a:focus {\n  background-color: transparent;\n}\ndream-header .navbar-nav > li > a.dropdown-toggle {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-top: 24px;\n}\ndream-header .nav > li > a:hover,\ndream-header .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  color: #e22004;\n}\ndream-header .nav > li > a:hover {\n  text-decoration: underline;\n}\ndream-header .navbar-brand {\n  margin: 0;\n  padding: 0;\n  float: left;\n  font-size: 26px;\n  line-height: 52px;\n  cursor: pointer;\n}\ndream-header .navbar-brand img.logo {\n  margin-right: -2px;\n  top: -2px;\n  position: relative;\n  display: inline-block;\n  width: 47px;\n  opacity: 0.96;\n}\ndream-header .navbar-brand span.pound {\n  color: #e22004;\n  font-weight: bold;\n  font-size: 46px;\n  line-height: 25px;\n  position: relative;\n  top: 6px;\n}\ndream-header .navbar-brand a,\ndream-header .navbar-brand a:hover {\n  text-decoration: none;\n}\n"; });
define('text!resources/elements/company/company-details.html', ['module'], function(module) { module.exports = "<template><form><fieldset disabled=\"disabled\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label>Sector</label><p class=\"form-control\" readonly=\"readonly\">${company.sector}</p></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label>Industry</label><p class=\"form-control\" readonly=\"readonly\">${company.industry}</p></div></div></div><div class=\"row\"><div class=\"col-md-4\"><div class=\"form-group\"><label>Price</label><p class=\"form-control\" readonly=\"readonly\">${company.price}</p></div><div class=\"form-group\"><label>Volume</label><p class=\"form-control\" readonly=\"readonly\">${company.volume}</p></div></div><div class=\"col-md-4\"><div class=\"form-group\"><label>Lowest 52</label><p class=\"form-control\" readonly=\"readonly\">${company.lowestPrice52}</p></div><div class=\"form-group\"><label>Chaos</label><p class=\"form-control\" readonly=\"readonly\">${company.chaosPercentage}%</p></div></div><div class=\"col-md-4\"><div class=\"form-group\"><label>Highest 52</label><p class=\"form-control\" readonly=\"readonly\">${company.highestPrice52}</p></div><div class=\"form-group\"><label>Last Time Updated</label><p class=\"form-control\" readonly=\"readonly\">${formatDate(company.lastUpdated)}</p></div></div></div></fieldset></form></template>"; });
define('text!resources/elements/indicator/indicator.html', ['module'], function(module) { module.exports = "<template><div class=\"c_indicator\" if.bind=\"indicatorInfo.deleted !== true\"><div class=\"c_indicator-header\" click.trigger=\"onExpanded()\"><button type=\"button\" show.bind=\"indicatorInfo.expanded !== true\" click.delegate=\"startDelete()\" class=\"btn btn-danger btn-xs\">Delete</button> <span><span>${indicatorInfo.description}</span> <a class=\"chevron\"><span if.bind=\"indicatorInfo.expanded === true\" class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span> <span if.bind=\"indicatorInfo.expanded !== true\" class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span></a></span></div><div class=\"c_indicator-details\" if.bind=\"indicatorInfo.expanded === true\"><form submit.delegate=\"trySaveIndicator()\" if.bind=\"indicatorInfo.deleteMode !== true\"><fieldset disabled.bind=\"indicatorInfo.editMode !== true\"><div class=\"form-group\"><label for=\"txtDescription-${indicatorInfo.indicatorId}\">Indicator Name</label><input type=\"text\" class=\"form-control\" id=\"txtDescription-${indicatorInfo.indicatorId}\" value.bind=\"indicatorInfo.description & validate\"></div><div class=\"form-inline\"><div class=\"form-group\"><label for=\"ddlPeriod-${indicatorInfo.indicatorId}\">Period:</label><select id=\"ddlPeriod-${indicatorInfo.indicatorId}\" class=\"form-control\" value.bind=\"indicatorInfo.period\"><option repeat.for=\"period of periods\" model.bind=\"period.id\">${period.name}</option></select></div><div class=\"form-group\"><label for=\"ddlFormula-${indicatorInfo.indicatorId}\">Formula:</label><select id=\"ddlFormula-${indicatorInfo.indicatorId}\" class=\"form-control\" value.bind=\"indicatorInfo.name\" change.delegate=\"onFormulaChange()\"><option repeat.for=\"formula of formulaes\" value.bind=\"formula.name\">${formula.name}</option></select></div></div><div class=\"col-md-6\"><h4>Chart Properties</h4><div class=\"form-inline-stack\"><div class=\"form-group\"><label for=\"ddlChartType-${indicatorInfo.indicatorId}\">Chart Type:</label><select id=\"ddlChartType-${indicatorInfo.indicatorId}\" class=\"form-control\" value.bind=\"indicatorInfo.chartType\"><option repeat.for=\"chartType of chartTypes\" model.bind=\"chartType.id\">${chartType.name}</option></select></div><div class=\"form-group\"><label for=\"txtChartPlot-${indicatorInfo.indicatorId}\">Plot Number:</label><select id=\"txtChartPlot-${indicatorInfo.indicatorId}\" class=\"form-control\" value.bind=\"indicatorInfo.chartPlotNumber\"><option repeat.for=\"plotNumber of plotNumbers\" model.bind=\"plotNumber\">${plotNumber}</option></select></div><div class=\"form-group\"><label for=\"txtChartColor-${indicatorInfo.indicatorId}\">Line Color:</label><input type=\"text\" class=\"form-control\" id=\"txtChartColor-${indicatorInfo.indicatorId}\" value.bind=\"indicatorInfo.chartColor & validate\"></div></div></div><div class=\"col-md-6\"><h4>Formula Parameters</h4><div class=\"form-inline-stack\"><div class=\"form-group\" repeat.for=\"param of indicatorInfo.params\"><label for=\"txtParam-${param.paramName}\">${param.paramName}:</label><input type=\"text\" class=\"form-control\" id=\"txtParam-${param.paramName}\" value.bind=\"param.value\"></div></div></div></fieldset><ul if.bind=\"errors.length > 0\"><li repeat.for=\"error of errors\">${error}</li></ul><div class=\"c_indicator-actions\"><button type=\"submit\" class=\"btn btn-danger\" if.bind=\"indicatorInfo.editMode === true\">Save</button> <button type=\"button\" click.delegate=\"cancelEdit()\" if.bind=\"indicatorInfo.editMode === true\" class=\"btn btn-default\">Cancel</button> <button type=\"button\" click.delegate=\"startEdit()\" if.bind=\"indicatorInfo.editMode !== true\" class=\"btn btn-danger\">Edit</button></div></form><div class=\"c_indicator-actions\" if.bind=\"indicatorInfo.deleteMode === true\"><p><br>I'll try to delete the indicator, however, if this indicator is used anywhere else then delete will be cancelled.<br></p><button type=\"button\" click.delegate=\"confirmDelete()\" class=\"btn btn-danger\">Delete</button> <button type=\"button\" click.delegate=\"cancelDelete()\" class=\"btn btn-default\">Cancel</button></div></div></div></template>"; });
define('text!components/strategies/strategy-playground.css', ['module'], function(module) { module.exports = ".c_playground-content .c_playground {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-bottom: 15px;\n}\n.c_strategy-runner form .form-group {\n  margin-bottom: 15px;\n}\n.c_strategy-runner form .form-group .checkbox,\n.c_strategy-runner form .form-group .radio {\n  margin-top: 0;\n}\n.c_strategy-runner form .form-group .col-sm-12 {\n  float: none;\n}\n.c_strategy-runner .c_strategy-runner--progress {\n  margin-bottom: 30px;\n}\n.c_strategy-runner .c_strategy-runner--options {\n  border: solid 1px rgba(204, 204, 204, 0.36);\n  text-align: center;\n  margin-bottom: 15px;\n  background-color: rgba(223, 223, 223, 0.13);\n}\n.c_strategy-runner .c_strategy-runner--options header {\n  background-color: #f5f5f5;\n  z-index: 100;\n  position: relative;\n  top: -13px;\n  font-size: 13px;\n  padding: 0 5px;\n  display: inline;\n}\n.o_chart-content {\n  margin-top: 15px;\n}\n.o_chart-content .o_chart {\n  z-index: 100;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.c_company_list {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.c_company {\n  padding: 10px 10px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_company.c_company-add,\n.c_company .c_company-add {\n  cursor: pointer;\n  border-bottom: 0px solid rgba(204, 204, 204, 0.36);\n}\n.c_company.c_company-add .glyphicon,\n.c_company .c_company-add .glyphicon {\n  color: green;\n}\n.c_company .c_company-header {\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.c_company .c_company-header .chevron {\n  float: right;\n}\n.c_company .c_company-header .btn {\n  margin-right: 10px;\n  z-index: 100;\n}\n.c_company-details {\n  padding-top: 10px;\n}\n.c_company-details form {\n  padding-top: 10px;\n}\n.c_company-details form fieldset {\n  padding-bottom: 10px;\n}\n.c_company-details h4 {\n  border-bottom: 1px solid #e22004;\n}\n.c_company-details .c_company-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.form-group .c_company-details {\n  padding: 15px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  border-top: 0;\n}\n"; });
define('text!resources/elements/progress/s-progress.html', ['module'], function(module) { module.exports = "<template class=\"s-progress\" style=\"width:100%\"><div class=\"s-progress-bar\"></div></template>"; });
define('text!resources/elements/rule/rule.html', ['module'], function(module) { module.exports = "<template><div class=\"c_rule\" if.bind=\"ruleInfo.deleted !== true\"><div class=\"c_rule-header\" click.trigger=\"onExpanded()\"><button type=\"button\" show.bind=\"ruleInfo.expanded !== true\" click.delegate=\"startDelete()\" class=\"btn btn-danger btn-xs\">Delete</button> <span><span>${ruleInfo.name}</span> <a class=\"chevron\"><span if.bind=\"ruleInfo.expanded === true\" class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span> <span if.bind=\"ruleInfo.expanded !== true\" class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span></a></span></div><div class=\"c_rule-details\" if.bind=\"ruleInfo.expanded === true\"><form submit.delegate=\"trySaveRule()\" if.bind=\"ruleInfo.deleteMode !== true\"><fieldset disabled.bind=\"ruleInfo.editMode !== true\"><div class=\"form-group\"><label for=\"txtName-${ruleInfo.ruleId}\">Rule Name</label><input type=\"text\" class=\"form-control\" id=\"txtName-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.name & validate\"></div><div class=\"form-group\"><label for=\"txtDescription-${ruleInfo.ruleId}\">Description</label><textarea rows=\"4\" class=\"form-control\" id=\"txtDescription-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.description & validate\"></textarea></div><div class=\"form-inline\"><div class=\"form-group\"><label for=\"ddlPeriod-${ruleInfo.ruleId}\">Period:</label><select id=\"ddlPeriod-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.period\" change.delegate=\"onPeriodChange()\"><option repeat.for=\"period of periods\" model.bind=\"period.id\">${period.name}</option></select></div><div class=\"form-group\"><label for=\"ddlCondition-${ruleInfo.ruleId}\">Compare operator:</label><select id=\"ddlCondition-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.condition\"><option repeat.for=\"compareType of compareTypes\" model.bind=\"compareType.id\">${compareType.name}</option></select></div></div><div class=\"col-md-6\"><h4>Compare What</h4><div class=\"form-group\"><label for=\"ddlDataSourceV1-${ruleInfo.ruleId}\">Data Source:</label><select id=\"ddlDataSourceV1-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.dataSourceV1\" change.delegate=\"onDataSourceV1Change()\"><option repeat.for=\"dataSource of dataSources\" model.bind=\"dataSource.id\">${dataSource.name}</option></select></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV1 !== 2\"><label for=\"ddlDataSeriesV1-${ruleInfo.ruleId}\">Data Series:</label><select id=\"ddlDataSeriesV1-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.dataSeriesV1\"><option repeat.for=\"dataSeries of ruleInfo.dataSeriesOptionsV1\" model.bind=\"dataSeries.id\">${dataSeries.name}</option></select></div><div class=\"form-inline-stack\"><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV1 === 2\"><label for=\"txtConstV1-${ruleInfo.ruleId}\">Constant:</label><input type=\"text\" class=\"form-control\" id=\"txtConstV1-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.constV1\"></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV1 !== 2\"><label for=\"txtSkipItemsV1-${ruleInfo.ruleId}\">Skip:</label><input type=\"text\" class=\"form-control\" id=\"txtSkipItemsV1-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.skipItemsV1 & validate\"></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV1 !== 2\"><label for=\"txtTakeItemsV1-${ruleInfo.ruleId}\">Take:</label><input type=\"text\" class=\"form-control\" id=\"txtTakeItemsV1-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.takeItemsV1 & validate\"></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV1 !== 2\"><label for=\"ddlTransformItemsV1-${ruleInfo.ruleId}\">Data Transform:</label><select id=\"ddlTransformItemsV1-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.transformItemsV1\"><option repeat.for=\"transformFunction of transformFunctions\" model.bind=\"transformFunction.id\">${transformFunction.name}</option></select></div></div></div><div class=\"col-md-6\"><h4>Compare With</h4><div class=\"form-group\"><label for=\"ddlDataSourceV2-${ruleInfo.ruleId}\">Data Source:</label><select id=\"ddlDataSourceV2-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.dataSourceV2\" change.delegate=\"onDataSourceV2Change()\"><option repeat.for=\"dataSource of dataSources\" model.bind=\"dataSource.id\">${dataSource.name}</option></select></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV2 !== 2\"><label for=\"ddlDataSeriesV2-${ruleInfo.ruleId}\">Data Series:</label><select id=\"ddlDataSeriesV2-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.dataSeriesV2\"><option repeat.for=\"dataSeries of ruleInfo.dataSeriesOptionsV2\" model.bind=\"dataSeries.id\">${dataSeries.name}</option></select></div><div class=\"form-inline-stack\"><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV2 === 2\"><label for=\"txtConstV2-${ruleInfo.ruleId}\">Constant:</label><input type=\"text\" class=\"form-control\" id=\"txtConstV2-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.constV2\"></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV2 !== 2\"><label for=\"txtSkipItemsV2-${ruleInfo.ruleId}\">Skip:</label><input type=\"text\" class=\"form-control\" id=\"txtSkipItemsV2-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.skipItemsV2 & validate\"></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV2 !== 2\"><label for=\"txtTakeItemsV2-${ruleInfo.ruleId}\">Take:</label><input type=\"text\" class=\"form-control\" id=\"txtTakeItemsV2-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.takeItemsV2 & validate\"></div></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV2 !== 2\"><label for=\"ddlTransformItemsV2-${ruleInfo.ruleId}\">Data Transform:</label><select id=\"ddlTransformItemsV2-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.transformItemsV2\"><option repeat.for=\"transformFunction of transformFunctions\" model.bind=\"transformFunction.id\">${transformFunction.name}</option></select></div></div></fieldset><ul if.bind=\"errors.length > 0\"><li repeat.for=\"error of errors\">${error}</li></ul><div class=\"c_rule-actions\"><button type=\"submit\" class=\"btn btn-danger\" if.bind=\"ruleInfo.editMode === true\">Save</button> <button type=\"button\" click.delegate=\"cancelEdit()\" if.bind=\"ruleInfo.editMode === true\" class=\"btn btn-default\">Cancel</button> <button type=\"button\" click.delegate=\"startEdit()\" if.bind=\"ruleInfo.editMode !== true\" class=\"btn btn-danger\">Edit</button></div></form><div class=\"c_rule-actions\" if.bind=\"ruleInfo.deleteMode === true\"><p><br>I'll try to delete the rule, however, if this rule is used anywhere else then delete will be cancelled.<br></p><button type=\"button\" click.delegate=\"confirmDelete()\" class=\"btn btn-danger\">Delete</button> <button type=\"button\" click.delegate=\"cancelDelete()\" class=\"btn btn-default\">Cancel</button></div></div></div></template>"; });
define('text!resources/elements/rule-set/rule-set-item.html', ['module'], function(module) { module.exports = "<template><div class=\"c_rule_set\" if.bind=\"rule.deleted !== true\"><div class=\"c_rule_set-header\" click.trigger=\"onExpanded()\"><button type=\"button\" show.bind=\"rule.expanded !== true && editMode === true\" click.delegate=\"startDelete()\" class=\"btn btn-warning btn-xs\">Detach</button> <span>${rule.name}</span><div class=\"chevron\"><a><span if.bind=\"rule.expanded === true\" class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span> <span if.bind=\"rule.expanded !== true\" class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span></a><div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" show.bind=\"editMode === true\"><button type=\"button\" class=\"btn btn-xs btn-default\" click.trigger=\"onMoveUp()\"><span class=\"glyphicon glyphicon-menu-up\" aria-hidden=\"true\"></span></button> <button type=\"button\" class=\"btn btn-xs btn-default\" click.trigger=\"onMoveDown()\"><span class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span></button></div></div></div><div class=\"c_rule_set-details\" if.bind=\"rule.expanded === true\"><form if.bind=\"rule.deleteMode !== true\"><fieldset disabled.bind=\"rule.editMode !== true\"><div class=\"form-group\"><label for=\"txtDescription-${rule.ruleId}\">Description</label><textarea rows=\"4\" class=\"form-control\" id=\"txtDescription-${rule.ruleId}\" value.bind=\"rule.description\"></textarea></div></fieldset></form><div class=\"c_rule_set-actions\" if.bind=\"rule.deleteMode === true\"><p><br>Rule will be detached from the rule set. You can add it later at any time.<br></p><button type=\"button\" click.delegate=\"confirmDelete()\" class=\"btn btn-warning\">Detach</button> <button type=\"button\" click.delegate=\"cancelDelete()\" class=\"btn btn-default\">Cancel</button></div></div></div></template>"; });
define('text!resources/elements/rule-set/rule-set.html', ['module'], function(module) { module.exports = "<template><div class=\"c_rule_set\" if.bind=\"ruleSetInfo.deleted !== true\"><div class=\"c_rule_set-header\" click.trigger=\"onExpanded()\"><button type=\"button\" show.bind=\"ruleSetInfo.expanded !== true\" click.delegate=\"startDelete()\" class=\"btn btn-danger btn-xs\">Delete</button> <span>${ruleSetInfo.name}</span> <a class=\"chevron\"><span if.bind=\"ruleSetInfo.expanded === true\" class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span> <span if.bind=\"ruleSetInfo.expanded !== true\" class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span></a></div><div class=\"c_rule_set-details\" if.bind=\"ruleSetInfo.expanded === true\"><form submit.delegate=\"trySaveRuleSet()\" if.bind=\"ruleSetInfo.deleteMode !== true\"><fieldset disabled.bind=\"ruleSetInfo.editMode !== true\"><div class=\"form-group\"><label for=\"txtName-${ruleSetInfo.ruleSetId}\">Rule Set Name</label><input type=\"text\" class=\"form-control\" id=\"txtName-${ruleSetInfo.ruleSetId}\" value.bind=\"ruleSetInfo.name & validate\"></div><div class=\"form-group\"><label for=\"txtDescription-${ruleSetInfo.ruleSetId}\">Description</label><textarea rows=\"4\" class=\"form-control\" id=\"txtDescription-${ruleSetInfo.ruleSetId}\" value.bind=\"ruleSetInfo.description & validate\"></textarea></div><div class=\"form-inline\"><div class=\"form-group\"><label for=\"ddlPeriod-${ruleSetInfo.ruleSetId}\">Period:</label><select id=\"ddlPeriod-${ruleSetInfo.ruleSetId}\" class=\"form-control\" value.bind=\"ruleSetInfo.period\"><option repeat.for=\"period of periods\" model.bind=\"period.id\">${period.name}</option></select></div></div></fieldset><h4>Set of Rules:</h4><div class=\"c_rule_set-list\"><rule-set-item class=\"c_rule_set-item\" repeat.for=\"rule of ruleSetInfo.rules\" rule.bind=\"rule\"></rule-set-item><div class=\"c_rule_set c_rule_set-add\" show.bind=\"ruleSetInfo.editMode === true\"><div class=\"c_rule_set-header\" click.delegate=\"addRule()\"><a>Attach rule</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div></div><div class=\"c_rule_set-details\" if.bind=\"ruleSetInfo.isAdding === true && ruleSetInfo.editMode === true\"><div class=\"form-group\"><label for=\"ddlRules-${ruleSetInfo.ruleSetId}\">Period:</label><select id=\"ddlRules-${ruleSetInfo.ruleSetId}\" class=\"form-control\" value.bind=\"attachedRuleId\" change.delegate=\"onRuleChange()\"><option repeat.for=\"rule of rules\" model.bind=\"rule.ruleId\">${rule.name}</option></select></div><div class=\"form-group\" if.bind=\"attachedRule.ruleId > 0\"><label for=\"txtRuleDescription-${attachedRule.ruleId}\">Description</label><textarea rows=\"4\" class=\"form-control\" readonly=\"readonly\" id=\"txtRuleDescription-${attachedRule.ruleId}\" value.bind=\"attachedRule.description\"></textarea></div><div class=\"c_rule-actions\"><button type=\"button\" click.delegate=\"confirmAddRule()\" class=\"btn btn-warning\">Attach</button> <button type=\"button\" click.delegate=\"cancelAddRule()\" class=\"btn btn-default\">Cancel</button></div></div></div><ul if.bind=\"errors.length > 0\"><li repeat.for=\"error of errors\">${error}</li></ul><div class=\"c_rule_set-actions\"><button type=\"submit\" class=\"btn btn-danger\" if.bind=\"ruleSetInfo.editMode === true\">Save</button> <button type=\"button\" click.delegate=\"cancelEdit()\" if.bind=\"ruleSetInfo.editMode === true\" class=\"btn btn-default\">Cancel</button> <button type=\"button\" click.delegate=\"startEdit()\" if.bind=\"ruleSetInfo.editMode !== true\" class=\"btn btn-danger\">Edit</button></div></form><div class=\"c_rule_set-actions\" if.bind=\"ruleSetInfo.deleteMode === true\"><p><br>I'll try to delete the rule set, however, if this rule set is used anywhere else then delete will be cancelled.<br></p><button type=\"button\" click.delegate=\"confirmDelete()\" class=\"btn btn-danger\">Delete</button> <button type=\"button\" click.delegate=\"cancelDelete()\" class=\"btn btn-default\">Cancel</button></div></div></div></template>"; });
define('text!components/strategies/strategy.css', ['module'], function(module) { module.exports = ".article {\n  background-color: rgba(255, 255, 255, 0.7);\n  min-height: 50px;\n}\n.article ol li,\n.article ul li {\n  border-bottom: 1px dotted #777;\n  padding: 6px 0;\n  font-size: 14px;\n}\n.article .form-horizontal {\n  margin-top: 18px;\n  display: block;\n  margin-bottom: 25px;\n}\n.article article-image {\n  display: block;\n  text-align: center;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.article article-image img {\n  max-width: 100%;\n}\n.article article-image p {\n  color: #333333;\n  padding-bottom: 0px;\n  margin-top: 5px;\n  font-size: 11px;\n}\n.article article-part.edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.article article-part.edit-mode li {\n  border: none;\n}\n.article article-part.edit-mode li .col-xs-10,\n.article article-part.edit-mode li col-xs-2 {\n  padding: 0;\n  margin: 0;\n}\n.article article-part textarea {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: solid 1px #ccc;\n}\n.article .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.article ordered-list-block {\n  display: block;\n}\n.article ordered-list-block edit-mode {\n  display: block;\n  text-align: right;\n}\n.article ordered-list-block edit-mode li button {\n  margin-bottom: 5px;\n}\n.article heading-block read-mode {\n  display: block;\n  font-family: \"PT Sans\";\n  font-size: 17px;\n  font-weight: 400;\n  color: #000000;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.article heading-block .col-xs-10 {\n  padding-left: 0;\n}\n.article image-block edit-mode {\n  margin-top: 9px;\n  display: block;\n}\n.article image-block edit-mode img {\n  max-width: 100%;\n}\n.article image-block edit-mode .col-xs-3 {\n  text-align: right;\n  padding-top: 7px;\n}\n.article image-block edit-mode .col-xs-9 {\n  padding-left: 0;\n}\n.article image-block edit-mode .row {\n  margin-bottom: 10px;\n}\n.c_article_parts.edit-mode {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_article_parts.edit-mode .c_article_part {\n  border-bottom: solid 1px rgba(204, 204, 204, 0.36);\n}\n.c_article_part {\n  padding-top: 10px;\n  padding-bottom: 0px;\n}\n.c_article_part form h4 {\n  margin-top: 2px;\n  border: 0;\n  color: #333333;\n  margin-bottom: 5px;\n}\n.c_article_part img {\n  width: 100%;\n}\n.c_article_part .form-group {\n  margin-bottom: 10px;\n}\n.c_article_part .form-group .form-control {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.c_article_part .form-group label {\n  padding-top: 10px;\n}\n.c_article_part article-part-list fieldset {\n  margin-bottom: 30px;\n}\n.c_article_part-add {\n  cursor: pointer;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-top: 10px;\n}\n.c_article_part-add .chevron {\n  float: right;\n  color: #008000;\n}\n.form-group {\n  margin-bottom: 10px;\n}\n.c_strategy {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-bottom: 15px;\n}\n"; });
define('text!resources/elements/strategy/side-navigation.html', ['module'], function(module) { module.exports = "<template><div class=\"side-navigation\"><h3>Defined Strategies</h3><ul><li repeat.for=\"summary of summaries\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a click.delegate=\"$parent.navigateToStrategy(summary.url)\" title=\"${summary.summary}\" class=\"${summary.selected ? 'active' : ''}\">${summary.title} Rules</a></li></ul></div></template>"; });
define('text!resources/elements/strategy/strategy-admin.html', ['module'], function(module) { module.exports = "<template><div class=\"actions\" if.bind=\"powerUser\"><div if.bind=\"editMode !== true\" class=\"btn-group\" role=\"group\"><button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Administration <span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li><a href=\"/strategies/rules\">Manage Rules</a></li><li><a href=\"/strategies/rule-sets\">Manage Rule Sets</a></li><li><a href=\"/strategies/indicators\">Manage Indicators</a></li></ul></div></div></template>"; });
define('text!resources/elements/strategy/strategy-navigation.html', ['module'], function(module) { module.exports = "<template><div class=\"sub-nav\"><nav class=\"navbar navbar\"><div class=\"container\"><nav class=\"navbar\"><ul class=\"nav navbar-nav\"><li repeat.for=\"item of items\" class=\"${item.isActive ? 'active' : ''}\"><a href.bind=\"item.url\">${item.title}</a></li></ul></nav></div></nav></div></template>"; });
define('text!resources/elements/strategy/strategy-rule-set.html', ['module'], function(module) { module.exports = "<template><div class=\"c_rule_set\" if.bind=\"ruleset.deleted !== true\"><div class=\"c_rule_set-header\" click.trigger=\"onExpanded()\"><button type=\"button\" show.bind=\"ruleset.expanded !== true && ruleset.editMode === true\" click.delegate=\"startDelete()\" class=\"btn btn-warning btn-xs\">Detach</button> <span>${ruleset.ruleSetName}</span><div class=\"chevron\"><span if.bind=\"ruleset.expanded === true\" class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span> <span if.bind=\"ruleset.expanded !== true\" class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span><div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" show.bind=\"ruleset.editMode === true\"><button type=\"button\" class=\"btn btn-xs btn-default\" click.trigger=\"onMoveUp()\"><span class=\"glyphicon glyphicon-menu-up\" aria-hidden=\"true\"></span></button> <button type=\"button\" class=\"btn btn-xs btn-default\" click.trigger=\"onMoveDown()\"><span class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span></button></div></div></div><div class=\"c_rule_set-details\" if.bind=\"ruleset.expanded === true\"><form if.bind=\"ruleset.deleteMode !== true\"><fieldset disabled.bind=\"ruleset.editMode !== true\"><div class=\"form-group\"><label>Description</label><p class=\"form-control\" readonly=\"readonly\">${ruleset.ruleSetDescription}</p></div><div class=\"form-inline\"><div class=\"form-group\"><label>Period:</label><select readonly=\"readonly\" class=\"form-control\" value.bind=\"ruleset.ruleSetPeriod\"><option repeat.for=\"period of periods\" model.bind=\"period.id\">${period.name}</option></select></div><div class=\"form-group\"><label>RuleSet Optional:</label><div class=\"input-group\"><input type=\"text\" class=\"form-control\" aria-label=\"...\" value=\"${ruleset.ruleSetOptional ? 'Optional' : 'Required'}\"><div class=\"input-group-btn\" if.bind=\"ruleset.editMode\"><button type=\"button\" click.delegate=\"setOptionalStatus(true)\" if.bind=\"!ruleset.ruleSetOptional\" class=\"btn btn-danger\">Make Optional</button> <button type=\"button\" click.delegate=\"setOptionalStatus(false)\" if.bind=\"ruleset.ruleSetOptional\" class=\"btn btn-danger\">Make Required</button></div></div></div></div></fieldset></form><div class=\"c_rule_set-actions\" if.bind=\"ruleset.deleteMode === true\"><p><br>Rule set will be detached from the rule set. You can add it later at any time.<br></p><button type=\"button\" click.delegate=\"confirmDelete()\" class=\"btn btn-warning\">Detach</button> <button type=\"button\" click.delegate=\"cancelDelete()\" class=\"btn btn-default\">Cancel</button></div></div></div></template>"; });
define('text!components/studies/study.css', ['module'], function(module) { module.exports = ".article {\n  background-color: rgba(255, 255, 255, 0.7);\n  min-height: 50px;\n}\n.article ol li,\n.article ul li {\n  border-bottom: 1px dotted #777;\n  padding: 6px 0;\n  font-size: 14px;\n}\n.article .form-horizontal {\n  margin-top: 18px;\n  display: block;\n  margin-bottom: 25px;\n}\n.article article-image {\n  display: block;\n  text-align: center;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.article article-image img {\n  max-width: 100%;\n}\n.article article-image p {\n  color: #333333;\n  padding-bottom: 0px;\n  margin-top: 5px;\n  font-size: 11px;\n}\n.article article-part.edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.article article-part.edit-mode li {\n  border: none;\n}\n.article article-part.edit-mode li .col-xs-10,\n.article article-part.edit-mode li col-xs-2 {\n  padding: 0;\n  margin: 0;\n}\n.article article-part textarea {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: solid 1px #ccc;\n}\n.article .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.article ordered-list-block {\n  display: block;\n}\n.article ordered-list-block edit-mode {\n  display: block;\n  text-align: right;\n}\n.article ordered-list-block edit-mode li button {\n  margin-bottom: 5px;\n}\n.article heading-block read-mode {\n  display: block;\n  font-family: \"PT Sans\";\n  font-size: 17px;\n  font-weight: 400;\n  color: #000000;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.article heading-block .col-xs-10 {\n  padding-left: 0;\n}\n.article image-block edit-mode {\n  margin-top: 9px;\n  display: block;\n}\n.article image-block edit-mode img {\n  max-width: 100%;\n}\n.article image-block edit-mode .col-xs-3 {\n  text-align: right;\n  padding-top: 7px;\n}\n.article image-block edit-mode .col-xs-9 {\n  padding-left: 0;\n}\n.article image-block edit-mode .row {\n  margin-bottom: 10px;\n}\n.c_article_parts.edit-mode {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_article_parts.edit-mode .c_article_part {\n  border-bottom: solid 1px rgba(204, 204, 204, 0.36);\n}\n.c_article_part {\n  padding-top: 10px;\n  padding-bottom: 0px;\n}\n.c_article_part form h4 {\n  margin-top: 2px;\n  border: 0;\n  color: #333333;\n  margin-bottom: 5px;\n}\n.c_article_part img {\n  width: 100%;\n}\n.c_article_part .form-group {\n  margin-bottom: 10px;\n}\n.c_article_part .form-group .form-control {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.c_article_part .form-group label {\n  padding-top: 10px;\n}\n.c_article_part article-part-list fieldset {\n  margin-bottom: 30px;\n}\n.c_article_part-add {\n  cursor: pointer;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-top: 10px;\n}\n.c_article_part-add .chevron {\n  float: right;\n  color: #008000;\n}\n.form-group {\n  margin-bottom: 10px;\n}\n"; });
define('text!components/market/jobs-dashboard/jobs/job.html', ['module'], function(module) { module.exports = "<template><require from=\"./job.css\"></require><require from=\"./job-details/job-details\"></require><header><h3>${title}</h3></header><h4>Current Job</h4><div class=\"form-horizontal\"><fieldset if.bind=\"currentJobStarted\"><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Job Number</label><div class=\"col-sm-10\"><p class=\"form-control\" readonly=\"readonly\">${currentJob.jobId}</p></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Started Date</label><div class=\"col-sm-10\"><p class=\"form-control\" readonly=\"readonly\">${currentJob.startDate}</p></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Status</label><div class=\"col-sm-10\"><p class=\"form-control\" readonly=\"readonly\">${jobStatusName}</p></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Progress</label><div class=\"col-sm-10\"><s-progress progress.bind=\"currentJob.progress\"></s-progress></div></div></fieldset><div class=\"c_job-actions\"><button type=\"button\" if.bind=\"!currentJobStarted\" click.delegate=\"startJob()\" class=\"btn btn-default btn-xs\">Start Job</button> <button type=\"button\" if.bind=\"currentJobPaused\" click.delegate=\"resumeJob()\" class=\"btn btn-default btn-xs\">Resume Job</button> <button type=\"button\" if.bind=\"currentJobStarted\" click.delegate=\"cancelJob()\" class=\"btn btn-default btn-xs\">Cancel Job</button> <button type=\"button\" if.bind=\"currentJobInProgress\" click.delegate=\"pauseJob()\" class=\"btn btn-default btn-xs\">Pause Job</button> <button type=\"button\" if.bind=\"currentJobStarted\" click.delegate=\"viewLog(currentJob.jobId)\" class=\"btn btn-info btn-xs\">View Log</button></div></div><div if.bind=\"jobs.length > 0\"><h4>History</h4><div class=\"c_job-details-list\"><job-details repeat.for=\"job of jobs\" job.bind=\"job\"></job-details><div class=\"c_jod_details no-border\"><div class=\"c_jod_details-header right\"><button type=\"button\" click.delegate=\"deleteAll()\" class=\"btn btn-warning btn-xs\">Clear</button></div></div></div></div></template>"; });
define('text!dialogs/login/user-login.css', ['module'], function(module) { module.exports = ".user-login ai-dialog {\n  width: 400px;\n}\n.user-login .form-horizontal {\n  margin-bottom: 15px;\n}\n.user-login .form-horizontal .control-label {\n  text-align: left;\n  margin-bottom: 4px;\n}\n.user-login .col-left {\n  padding-right: 7px;\n}\n.user-login .col-right {\n  padding-left: 7px;\n}\n.user-login ai-dialog-footer .btn {\n  width: 162px;\n}\n.user-login .form-group {\n  margin-bottom: 3px;\n}\n"; });
define('text!components/market/market-indices/market-indices.css', ['module'], function(module) { module.exports = ""; });
define('text!components/market/jobs-dashboard/jobs-nav/jobs-nav.html', ['module'], function(module) { module.exports = "<template><h3>${router.title}</h3><ul><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a href.bind=\"row.href\">${row.title}</a></li></ul></template>"; });
define('text!components/market/market-indices/sp500/sp500.html', ['module'], function(module) { module.exports = "<template><require from=\"../market-indices.css\"></require><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_dashboard\"><header><h3>S&P 500 Index</h3></header></div><div class=\"col-md-4 col-xs-12\"><div class=\"side-navigation\"><h3></h3></div></div></div></template>"; });
define('text!components/nav-menu/category-nav/category-nav.css', ['module'], function(module) { module.exports = ".sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n"; });
define('text!components/market/jobs-dashboard/jobs/job-details/job-details.html', ['module'], function(module) { module.exports = "<template><div class=\"c_jod_details\"><div class=\"c_jod_details-header\" click.trigger=\"expand()\"><button type=\"button\" click.delegate=\"delete()\" class=\"btn btn-info btn-xs\">Delete</button> <span>Completed: ${completed}</span> <span>Status: ${status}</span> <span>Run time: ${runTime}</span><div class=\"chevron\"><span class=\"glyphicon ${expanded ? 'glyphicon-menu-down':'glyphicon-menu-left'}\" aria-hidden=\"true\"></span></div></div><div class=\"c_jod_details-details\" if.bind=\"expanded\"><div class=\"form-group\" if.bind=\"expanded\"><label>Log</label><p class=\"form-control\" readonly=\"readonly\">sometthing big</p></div></div></div></template>"; });
define('text!components/nav-menu/main-nav/main-nav.css', ['module'], function(module) { module.exports = "@media (min-width: 768px) {\n  main-nav .navbar-nav {\n    float: none;\n  }\n}\nmain-nav .main-nav-items {\n  background-color: rgba(161, 161, 161, 0.2);\n}\nmain-nav ul.nav li {\n  float: left;\n  padding: 0;\n  position: relative;\n  margin-left: 1px;\n}\nmain-nav ul.nav li:first-child {\n  margin-left: 0;\n}\nmain-nav ul.nav li a {\n  position: relative;\n  padding: 0 20px;\n  text-align: center;\n  font: 14px/40px 'Istok Web';\n  text-transform: uppercase;\n  background: transparent;\n  color: #333333;\n  -webkit-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\nmain-nav ul.nav li:hover a {\n  background: rgba(226, 32, 4, 0.38);\n}\nmain-nav ul.nav li.active a {\n  color: #ffffff;\n  background: #e22004;\n}\nmain-nav nav.navbar {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 14px 0;\n  min-height: 0;\n  border-color: #e7e7e7;\n}\nmain-nav nav.navbar ul.navbar-nav {\n  top: 5px;\n}\n"; });
define('text!components/strategies/indicators/indicators.css', ['module'], function(module) { module.exports = ".c_indicators-content .c_indicators {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.c_indicators-content .c_indicator-list {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.c_indicators-content .c_indicator {\n  padding: 10px 10px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_indicators-content .c_indicator.c_indicator-add,\n.c_indicators-content .c_indicator .c_indicator-add {\n  cursor: pointer;\n  border-bottom: 0px solid rgba(204, 204, 204, 0.36);\n}\n.c_indicators-content .c_indicator.c_indicator-add .glyphicon,\n.c_indicators-content .c_indicator .c_indicator-add .glyphicon {\n  color: green;\n}\n.c_indicators-content .c_indicator .c_indicator-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.c_indicators-content .c_indicator .c_indicator-header {\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.c_indicators-content .c_indicator .c_indicator-header .chevron {\n  float: right;\n}\n.c_indicators-content .c_indicator .c_indicator-header .btn {\n  margin-right: 10px;\n  z-index: 100;\n}\n.c_indicators-content .c_indicator .c_indicator-details {\n  padding-top: 10px;\n}\n.c_indicators-content .c_indicator .c_indicator-details form {\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.c_indicators-content .c_indicator .c_indicator-details form fieldset {\n  padding-bottom: 10px;\n}\n.c_indicators-content .c_indicator .c_indicator-details .form-inline {\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n.c_indicators-content .c_indicator .c_indicator-details h4 {\n  border-bottom: 1px solid #e22004;\n}\n"; });
define('text!components/strategies/rules/rule-sets.css', ['module'], function(module) { module.exports = ".c_rule_sets-content {\n  padding-bottom: 30px;\n}\n.c_rule_sets-content .c_rule_sets {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-bottom: 15px;\n}\n.c_rule_sets-content .c_rule_set-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.c_rule_sets-content .c_rule_set {\n  padding: 10px 10px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_rule_sets-content .c_rule_set.c_rule_set-add,\n.c_rule_sets-content .c_rule_set .c_rule_set-add {\n  cursor: pointer;\n  border-bottom: 0px solid rgba(204, 204, 204, 0.36);\n}\n.c_rule_sets-content .c_rule_set.c_rule_set-add .glyphicon,\n.c_rule_sets-content .c_rule_set .c_rule_set-add .glyphicon {\n  color: green;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-header {\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-header .chevron {\n  float: right;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-header .btn {\n  margin-right: 10px;\n  z-index: 100;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-header .btn-group,\n.c_rule_sets-content .c_rule_set .c_rule_set-header .btn-group-vertical {\n  margin-top: -3px;\n  margin-right: -3px;\n  margin-left: 6px;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-header .btn-group .btn,\n.c_rule_sets-content .c_rule_set .c_rule_set-header .btn-group-vertical .btn {\n  margin-right: 0;\n  font-size: 8px;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-details {\n  padding-top: 10px;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-details form {\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-details form fieldset {\n  padding-bottom: 10px;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-details .c_rule_set-list {\n  margin-left: 14px;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-details .c_rule-actions {\n  text-align: right;\n  margin-bottom: 20px;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-details h4 {\n  margin-top: 25px;\n  margin-left: 14px;\n  border-bottom: 1px solid #e22004;\n}\n.c_rule_sets-content .c_rule_set-list {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.c_rule_sets-content .c_rule_set-list .no-border .c_rule_set {\n  border-bottom: 0;\n}\n"; });
define('text!components/strategies/rules/rules.css', ['module'], function(module) { module.exports = ".c_rules-content .c_rules {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.c_rules-content .c_rule-list {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.c_rules-content .c_rule {\n  padding: 10px 10px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_rules-content .c_rule.c_rule-add,\n.c_rules-content .c_rule .c_rule-add {\n  cursor: pointer;\n  border-bottom: 0px solid rgba(204, 204, 204, 0.36);\n}\n.c_rules-content .c_rule.c_rule-add .glyphicon,\n.c_rules-content .c_rule .c_rule-add .glyphicon {\n  color: green;\n}\n.c_rules-content .c_rule .c_rule-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.c_rules-content .c_rule .c_rule-header {\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.c_rules-content .c_rule .c_rule-header .chevron {\n  float: right;\n}\n.c_rules-content .c_rule .c_rule-header .btn {\n  margin-right: 10px;\n  z-index: 100;\n}\n.c_rules-content .c_rule .c_rule-details {\n  padding-top: 10px;\n}\n.c_rules-content .c_rule .c_rule-details form {\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.c_rules-content .c_rule .c_rule-details form fieldset {\n  padding-bottom: 10px;\n}\n.c_rules-content .c_rule .c_rule-details h4 {\n  border-bottom: 1px solid #e22004;\n}\n"; });
define('text!resources/elements/chart/stock-chart.css', ['module'], function(module) { module.exports = "stock-chart {\n  display: block;\n}\nstock-chart .o_chart-container {\n  height: 600px;\n  width: 100%;\n  margin-bottom: 20px;\n}\n"; });
define('text!components/market/jobs-dashboard/jobs/job.css', ['module'], function(module) { module.exports = ".c_dashboard {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-bottom: 15px;\n}\n.c_job-details-list {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.c_job-details-list .no-border .c_rule_set {\n  border-bottom: 0;\n}\n.c_job-details-list .c_jod_details {\n  padding: 10px 10px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_job-details-list .c_jod_details .c_jod_details-header {\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.c_job-details-list .c_jod_details .c_jod_details-header .chevron {\n  float: right;\n}\n.c_job-details-list .c_jod_details .c_jod_details-header .btn {\n  margin-right: 10px;\n  z-index: 100;\n}\n.c_job-details-list .c_jod_details .c_jod_details-header .btn-group,\n.c_job-details-list .c_jod_details .c_jod_details-header .btn-group-vertical {\n  margin-top: -3px;\n  margin-right: -3px;\n  margin-left: 6px;\n}\n.c_job-details-list .c_jod_details .c_jod_details-header .btn-group .btn,\n.c_job-details-list .c_jod_details .c_jod_details-header .btn-group-vertical .btn {\n  margin-right: 0;\n  font-size: 8px;\n}\n.c_job-details-list .c_jod_details .c_jod_details-details {\n  padding-top: 10px;\n}\n.c_job-details-list .c_jod_details .c_jod_details-details h4 {\n  margin-top: 25px;\n  margin-left: 14px;\n  border-bottom: 1px solid #e22004;\n}\n"; });
//# sourceMappingURL=app-bundle.js.map