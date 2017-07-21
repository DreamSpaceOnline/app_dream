define('services/services-generated',["require", "exports", "tslib", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AccountApiClient = (function () {
        function AccountApiClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.baseUrl = baseUrl ? baseUrl : "";
            this.http = http ? http : window;
        }
        AccountApiClient.prototype.updateProfile = function (model) {
            var _this = this;
            var url_ = this.baseUrl + "/api/account/update";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(model ? model.toJSON() : null);
            var options_ = {
                body: content_,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processUpdateProfile(_response);
            });
        };
        AccountApiClient.prototype.processUpdateProfile = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? UpdateProfileResponse.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        AccountApiClient.prototype.login = function (model) {
            var _this = this;
            var url_ = this.baseUrl + "/api/account/login";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(model ? model.toJSON() : null);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processLogin(_response);
            });
        };
        AccountApiClient.prototype.processLogin = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? LoginResponse.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        AccountApiClient.prototype.logout = function () {
            var _this = this;
            var url_ = this.baseUrl + "/api/account/logout";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processLogout(_response);
            });
        };
        AccountApiClient.prototype.processLogout = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        AccountApiClient.prototype.isAuthenticated = function () {
            var _this = this;
            var url_ = this.baseUrl + "/api/account/isAuthenticated";
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processIsAuthenticated(_response);
            });
        };
        AccountApiClient.prototype.processIsAuthenticated = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 !== undefined ? resultData200 : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        AccountApiClient.prototype.currentUser = function () {
            var _this = this;
            var url_ = this.baseUrl + "/api/account/user";
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processCurrentUser(_response);
            });
        };
        AccountApiClient.prototype.processCurrentUser = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? UserInfo.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        AccountApiClient = tslib_1.__decorate([
            aurelia_framework_1.inject(String, aurelia_fetch_client_1.HttpClient),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], AccountApiClient);
        return AccountApiClient;
    }());
    exports.AccountApiClient = AccountApiClient;
    var ArticlesApiClient = (function () {
        function ArticlesApiClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.baseUrl = baseUrl ? baseUrl : "";
            this.http = http ? http : window;
        }
        ArticlesApiClient.prototype.getArticle = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/article/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetArticle(_response);
            });
        };
        ArticlesApiClient.prototype.processGetArticle = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? ArticleModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        ArticlesApiClient.prototype.deleteArticle = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/article/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processDeleteArticle(_response);
            });
        };
        ArticlesApiClient.prototype.processDeleteArticle = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        ArticlesApiClient.prototype.updateArticleOrder = function (model) {
            var _this = this;
            var url_ = this.baseUrl + "/api/article//order";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(model ? model.toJSON() : null);
            var options_ = {
                body: content_,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processUpdateArticleOrder(_response);
            });
        };
        ArticlesApiClient.prototype.processUpdateArticleOrder = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        ArticlesApiClient.prototype.deleteCategory = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/article/category/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processDeleteCategory(_response);
            });
        };
        ArticlesApiClient.prototype.processDeleteCategory = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        ArticlesApiClient.prototype.getSection = function (sectionUrl) {
            var _this = this;
            var url_ = this.baseUrl + "/api/article/section/{sectionUrl}";
            if (sectionUrl === undefined || sectionUrl === null)
                throw new Error("The parameter 'sectionUrl' must be defined.");
            url_ = url_.replace("{sectionUrl}", encodeURIComponent("" + sectionUrl));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetSection(_response);
            });
        };
        ArticlesApiClient.prototype.processGetSection = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? SectionModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        ArticlesApiClient.prototype.getSections = function () {
            var _this = this;
            var url_ = this.baseUrl + "/api/article/sections";
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetSections(_response);
            });
        };
        ArticlesApiClient.prototype.processGetSections = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                            var item = resultData200_1[_i];
                            result200.push(SectionModel.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        ArticlesApiClient.prototype.getFeaturedArticle = function (categoryId) {
            var _this = this;
            var url_ = this.baseUrl + "/api/article/{categoryId}/featured";
            if (categoryId === undefined || categoryId === null)
                throw new Error("The parameter 'categoryId' must be defined.");
            url_ = url_.replace("{categoryId}", encodeURIComponent("" + categoryId));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetFeaturedArticle(_response);
            });
        };
        ArticlesApiClient.prototype.processGetFeaturedArticle = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? ArticleModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        ArticlesApiClient.prototype.getArticleByUrl = function (categoryId, articleUrl) {
            var _this = this;
            var url_ = this.baseUrl + "/api/article/url/{categoryId}/{articleUrl}";
            if (categoryId === undefined || categoryId === null)
                throw new Error("The parameter 'categoryId' must be defined.");
            url_ = url_.replace("{categoryId}", encodeURIComponent("" + categoryId));
            if (articleUrl === undefined || articleUrl === null)
                throw new Error("The parameter 'articleUrl' must be defined.");
            url_ = url_.replace("{articleUrl}", encodeURIComponent("" + articleUrl));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetArticleByUrl(_response);
            });
        };
        ArticlesApiClient.prototype.processGetArticleByUrl = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? ArticleModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        ArticlesApiClient.prototype.getArticles = function (categoryId) {
            var _this = this;
            var url_ = this.baseUrl + "/api/article/{categoryId}/all";
            if (categoryId === undefined || categoryId === null)
                throw new Error("The parameter 'categoryId' must be defined.");
            url_ = url_.replace("{categoryId}", encodeURIComponent("" + categoryId));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetArticles(_response);
            });
        };
        ArticlesApiClient.prototype.processGetArticles = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_2 = resultData200; _i < resultData200_2.length; _i++) {
                            var item = resultData200_2[_i];
                            result200.push(ArticleHeader.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        ArticlesApiClient.prototype.setFeaturedArticle = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/article/{id}/featured";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processSetFeaturedArticle(_response);
            });
        };
        ArticlesApiClient.prototype.processSetFeaturedArticle = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        ArticlesApiClient.prototype.getCategories = function (sectionId) {
            var _this = this;
            var url_ = this.baseUrl + "/api/article/categories/{sectionId}";
            if (sectionId === undefined || sectionId === null)
                throw new Error("The parameter 'sectionId' must be defined.");
            url_ = url_.replace("{sectionId}", encodeURIComponent("" + sectionId));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetCategories(_response);
            });
        };
        ArticlesApiClient.prototype.processGetCategories = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_3 = resultData200; _i < resultData200_3.length; _i++) {
                            var item = resultData200_3[_i];
                            result200.push(CategoryModel.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        ArticlesApiClient.prototype.getCategory = function (categoryUrl) {
            var _this = this;
            var url_ = this.baseUrl + "/api/article/category/{categoryUrl}";
            if (categoryUrl === undefined || categoryUrl === null)
                throw new Error("The parameter 'categoryUrl' must be defined.");
            url_ = url_.replace("{categoryUrl}", encodeURIComponent("" + categoryUrl));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetCategory(_response);
            });
        };
        ArticlesApiClient.prototype.processGetCategory = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? CategoryModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        ArticlesApiClient.prototype.saveArticle = function (model) {
            var _this = this;
            var url_ = this.baseUrl + "/api/article";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(model ? model.toJSON() : null);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processSaveArticle(_response);
            });
        };
        ArticlesApiClient.prototype.processSaveArticle = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? ArticleModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        ArticlesApiClient.prototype.saveCategory = function (model) {
            var _this = this;
            var url_ = this.baseUrl + "/api/article/category";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(model ? model.toJSON() : null);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processSaveCategory(_response);
            });
        };
        ArticlesApiClient.prototype.processSaveCategory = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? CategoryModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        ArticlesApiClient = tslib_1.__decorate([
            aurelia_framework_1.inject(String, aurelia_fetch_client_1.HttpClient),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], ArticlesApiClient);
        return ArticlesApiClient;
    }());
    exports.ArticlesApiClient = ArticlesApiClient;
    var BlobApiClient = (function () {
        function BlobApiClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.baseUrl = baseUrl ? baseUrl : "";
            this.http = http ? http : window;
        }
        BlobApiClient.prototype.test = function () {
            var _this = this;
            var url_ = this.baseUrl + "/api/blob/monitor";
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processTest(_response);
            });
        };
        BlobApiClient.prototype.processTest = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 !== undefined ? resultData200 : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        BlobApiClient.prototype.uploadSingle = function (file) {
            var _this = this;
            var url_ = this.baseUrl + "/api/blob/upload";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(file ? file.toJSON() : null);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processUploadSingle(_response);
            });
        };
        BlobApiClient.prototype.processUploadSingle = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 !== undefined ? resultData200 : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        BlobApiClient = tslib_1.__decorate([
            aurelia_framework_1.inject(String, aurelia_fetch_client_1.HttpClient),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], BlobApiClient);
        return BlobApiClient;
    }());
    exports.BlobApiClient = BlobApiClient;
    var CompaniesApiClient = (function () {
        function CompaniesApiClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.baseUrl = baseUrl ? baseUrl : "";
            this.http = http ? http : window;
        }
        CompaniesApiClient.prototype.getCompany = function (ticker) {
            var _this = this;
            var url_ = this.baseUrl + "/api/company/{ticker}";
            if (ticker === undefined || ticker === null)
                throw new Error("The parameter 'ticker' must be defined.");
            url_ = url_.replace("{ticker}", encodeURIComponent("" + ticker));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetCompany(_response);
            });
        };
        CompaniesApiClient.prototype.processGetCompany = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? CompanyModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        CompaniesApiClient.prototype.search = function (request) {
            var _this = this;
            var url_ = this.baseUrl + "/api/company/search";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(request ? request.toJSON() : null);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processSearch(_response);
            });
        };
        CompaniesApiClient.prototype.processSearch = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_4 = resultData200; _i < resultData200_4.length; _i++) {
                            var item = resultData200_4[_i];
                            result200.push(CompanyHeader.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        CompaniesApiClient = tslib_1.__decorate([
            aurelia_framework_1.inject(String, aurelia_fetch_client_1.HttpClient),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], CompaniesApiClient);
        return CompaniesApiClient;
    }());
    exports.CompaniesApiClient = CompaniesApiClient;
    var IndicatorsApiClient = (function () {
        function IndicatorsApiClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.baseUrl = baseUrl ? baseUrl : "";
            this.http = http ? http : window;
        }
        IndicatorsApiClient.prototype.getIndicator = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/indicator/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetIndicator(_response);
            });
        };
        IndicatorsApiClient.prototype.processGetIndicator = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? Indicator.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        IndicatorsApiClient.prototype.deleteIndicator = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/indicator/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processDeleteIndicator(_response);
            });
        };
        IndicatorsApiClient.prototype.processDeleteIndicator = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        IndicatorsApiClient.prototype.getIndicatorsAll = function (period) {
            var _this = this;
            var url_ = this.baseUrl + "/api/indicator/{period}/all";
            if (period === undefined || period === null)
                throw new Error("The parameter 'period' must be defined.");
            url_ = url_.replace("{period}", encodeURIComponent("" + period));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetIndicatorsAll(_response);
            });
        };
        IndicatorsApiClient.prototype.processGetIndicatorsAll = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_5 = resultData200; _i < resultData200_5.length; _i++) {
                            var item = resultData200_5[_i];
                            result200.push(Indicator.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        IndicatorsApiClient.prototype.getIndicators = function () {
            var _this = this;
            var url_ = this.baseUrl + "/api/indicator/all";
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetIndicators(_response);
            });
        };
        IndicatorsApiClient.prototype.processGetIndicators = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_6 = resultData200; _i < resultData200_6.length; _i++) {
                            var item = resultData200_6[_i];
                            result200.push(IndicatorCore.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        IndicatorsApiClient.prototype.saveIndicator = function (model) {
            var _this = this;
            var url_ = this.baseUrl + "/api/indicator";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(model ? model.toJSON() : null);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processSaveIndicator(_response);
            });
        };
        IndicatorsApiClient.prototype.processSaveIndicator = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? Indicator.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        IndicatorsApiClient = tslib_1.__decorate([
            aurelia_framework_1.inject(String, aurelia_fetch_client_1.HttpClient),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], IndicatorsApiClient);
        return IndicatorsApiClient;
    }());
    exports.IndicatorsApiClient = IndicatorsApiClient;
    var JobsApiClient = (function () {
        function JobsApiClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.baseUrl = baseUrl ? baseUrl : "";
            this.http = http ? http : window;
        }
        JobsApiClient.prototype.cancelScheduledJob = function (jobId) {
            var _this = this;
            var url_ = this.baseUrl + "/api/job/cancel/{jobId}";
            if (jobId === undefined || jobId === null)
                throw new Error("The parameter 'jobId' must be defined.");
            url_ = url_.replace("{jobId}", encodeURIComponent("" + jobId));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processCancelScheduledJob(_response);
            });
        };
        JobsApiClient.prototype.processCancelScheduledJob = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        JobsApiClient.prototype.pauseScheduledJob = function (jobId) {
            var _this = this;
            var url_ = this.baseUrl + "/api/job/pause/{jobId}";
            if (jobId === undefined || jobId === null)
                throw new Error("The parameter 'jobId' must be defined.");
            url_ = url_.replace("{jobId}", encodeURIComponent("" + jobId));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processPauseScheduledJob(_response);
            });
        };
        JobsApiClient.prototype.processPauseScheduledJob = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        JobsApiClient.prototype.resumeScheduledJob = function (jobId) {
            var _this = this;
            var url_ = this.baseUrl + "/api/job/resume/{jobId}";
            if (jobId === undefined || jobId === null)
                throw new Error("The parameter 'jobId' must be defined.");
            url_ = url_.replace("{jobId}", encodeURIComponent("" + jobId));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processResumeScheduledJob(_response);
            });
        };
        JobsApiClient.prototype.processResumeScheduledJob = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        JobsApiClient.prototype.clearJobsHistory = function (jobType) {
            var _this = this;
            var url_ = this.baseUrl + "/api/job/history/clear/{jobType}";
            if (jobType === undefined || jobType === null)
                throw new Error("The parameter 'jobType' must be defined.");
            url_ = url_.replace("{jobType}", encodeURIComponent("" + jobType));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processClearJobsHistory(_response);
            });
        };
        JobsApiClient.prototype.processClearJobsHistory = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        JobsApiClient.prototype.deleteScheduledJob = function (jobId) {
            var _this = this;
            var url_ = this.baseUrl + "/api/job/delete/{jobId}";
            if (jobId === undefined || jobId === null)
                throw new Error("The parameter 'jobId' must be defined.");
            url_ = url_.replace("{jobId}", encodeURIComponent("" + jobId));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processDeleteScheduledJob(_response);
            });
        };
        JobsApiClient.prototype.processDeleteScheduledJob = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        JobsApiClient.prototype.startScheduledJobs = function (jobType) {
            var _this = this;
            var url_ = this.baseUrl + "/api/job/start/{jobType}";
            if (jobType === undefined || jobType === null)
                throw new Error("The parameter 'jobType' must be defined.");
            url_ = url_.replace("{jobType}", encodeURIComponent("" + jobType));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processStartScheduledJobs(_response);
            });
        };
        JobsApiClient.prototype.processStartScheduledJobs = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? ScheduledJob.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        JobsApiClient.prototype.getSheduledJobHistory = function (jobType) {
            var _this = this;
            var url_ = this.baseUrl + "/api/job/history/{jobType}";
            if (jobType === undefined || jobType === null)
                throw new Error("The parameter 'jobType' must be defined.");
            url_ = url_.replace("{jobType}", encodeURIComponent("" + jobType));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetSheduledJobHistory(_response);
            });
        };
        JobsApiClient.prototype.processGetSheduledJobHistory = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_7 = resultData200; _i < resultData200_7.length; _i++) {
                            var item = resultData200_7[_i];
                            result200.push(ScheduledJob.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        JobsApiClient.prototype.getCurrentJob = function (jobType) {
            var _this = this;
            var url_ = this.baseUrl + "/api/job/current/{jobType}";
            if (jobType === undefined || jobType === null)
                throw new Error("The parameter 'jobType' must be defined.");
            url_ = url_.replace("{jobType}", encodeURIComponent("" + jobType));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetCurrentJob(_response);
            });
        };
        JobsApiClient.prototype.processGetCurrentJob = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? ScheduledJob.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        JobsApiClient.prototype.getJob = function (jobId) {
            var _this = this;
            var url_ = this.baseUrl + "/api/job/info/{jobId}";
            if (jobId === undefined || jobId === null)
                throw new Error("The parameter 'jobId' must be defined.");
            url_ = url_.replace("{jobId}", encodeURIComponent("" + jobId));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetJob(_response);
            });
        };
        JobsApiClient.prototype.processGetJob = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? ScheduledJob.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        JobsApiClient = tslib_1.__decorate([
            aurelia_framework_1.inject(String, aurelia_fetch_client_1.HttpClient),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], JobsApiClient);
        return JobsApiClient;
    }());
    exports.JobsApiClient = JobsApiClient;
    var JournalApiClient = (function () {
        function JournalApiClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.baseUrl = baseUrl ? baseUrl : "";
            this.http = http ? http : window;
        }
        JournalApiClient.prototype.getJournal = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/journal/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetJournal(_response);
            });
        };
        JournalApiClient.prototype.processGetJournal = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? JournalModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        JournalApiClient.prototype.saveJournal = function (model) {
            var _this = this;
            var url_ = this.baseUrl + "/api/journal";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(model ? model.toJSON() : null);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processSaveJournal(_response);
            });
        };
        JournalApiClient.prototype.processSaveJournal = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        JournalApiClient = tslib_1.__decorate([
            aurelia_framework_1.inject(String, aurelia_fetch_client_1.HttpClient),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], JournalApiClient);
        return JournalApiClient;
    }());
    exports.JournalApiClient = JournalApiClient;
    var LayoutApiClient = (function () {
        function LayoutApiClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.baseUrl = baseUrl ? baseUrl : "";
            this.http = http ? http : window;
        }
        LayoutApiClient.prototype.getLayoutsForPeriod = function (period) {
            var _this = this;
            var url_ = this.baseUrl + "/api/layout/period/{period}";
            if (period === undefined || period === null)
                throw new Error("The parameter 'period' must be defined.");
            url_ = url_.replace("{period}", encodeURIComponent("" + period));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetLayoutsForPeriod(_response);
            });
        };
        LayoutApiClient.prototype.processGetLayoutsForPeriod = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_8 = resultData200; _i < resultData200_8.length; _i++) {
                            var item = resultData200_8[_i];
                            result200.push(ChartLayoutModel.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        LayoutApiClient.prototype.getLayout = function (layoutId) {
            var _this = this;
            var url_ = this.baseUrl + "/api/layout/{layoutId}";
            if (layoutId === undefined || layoutId === null)
                throw new Error("The parameter 'layoutId' must be defined.");
            url_ = url_.replace("{layoutId}", encodeURIComponent("" + layoutId));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetLayout(_response);
            });
        };
        LayoutApiClient.prototype.processGetLayout = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? ChartLayoutModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        LayoutApiClient.prototype.getDefaultLayout = function (period) {
            var _this = this;
            var url_ = this.baseUrl + "/api/layout/period/{period}/default";
            if (period === undefined || period === null)
                throw new Error("The parameter 'period' must be defined.");
            url_ = url_.replace("{period}", encodeURIComponent("" + period));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetDefaultLayout(_response);
            });
        };
        LayoutApiClient.prototype.processGetDefaultLayout = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? ChartLayoutModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        LayoutApiClient.prototype.saveLayout = function (model) {
            var _this = this;
            var url_ = this.baseUrl + "/api/layout";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(model ? model.toJSON() : null);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processSaveLayout(_response);
            });
        };
        LayoutApiClient.prototype.processSaveLayout = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? ChartLayoutModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        LayoutApiClient = tslib_1.__decorate([
            aurelia_framework_1.inject(String, aurelia_fetch_client_1.HttpClient),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], LayoutApiClient);
        return LayoutApiClient;
    }());
    exports.LayoutApiClient = LayoutApiClient;
    var LogsApiClient = (function () {
        function LogsApiClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.baseUrl = baseUrl ? baseUrl : "";
            this.http = http ? http : window;
        }
        LogsApiClient.prototype.getJobLogs = function (jobId) {
            var _this = this;
            var url_ = this.baseUrl + "/api/logs/job/{jobId}";
            if (jobId === undefined || jobId === null)
                throw new Error("The parameter 'jobId' must be defined.");
            url_ = url_.replace("{jobId}", encodeURIComponent("" + jobId));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetJobLogs(_response);
            });
        };
        LogsApiClient.prototype.processGetJobLogs = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_9 = resultData200; _i < resultData200_9.length; _i++) {
                            var item = resultData200_9[_i];
                            result200.push(ProcessorLog.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        LogsApiClient.prototype.deleteJobLogs = function (jobId) {
            var _this = this;
            var url_ = this.baseUrl + "/api/logs/job/delete/{jobId}";
            if (jobId === undefined || jobId === null)
                throw new Error("The parameter 'jobId' must be defined.");
            url_ = url_.replace("{jobId}", encodeURIComponent("" + jobId));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processDeleteJobLogs(_response);
            });
        };
        LogsApiClient.prototype.processDeleteJobLogs = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        LogsApiClient.prototype.deleteAllLogs = function (jobType) {
            var _this = this;
            var url_ = this.baseUrl + "/api/logs/job-type/delete/{jobType}";
            if (jobType === undefined || jobType === null)
                throw new Error("The parameter 'jobType' must be defined.");
            url_ = url_.replace("{jobType}", encodeURIComponent("" + jobType));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processDeleteAllLogs(_response);
            });
        };
        LogsApiClient.prototype.processDeleteAllLogs = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        LogsApiClient = tslib_1.__decorate([
            aurelia_framework_1.inject(String, aurelia_fetch_client_1.HttpClient),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], LogsApiClient);
        return LogsApiClient;
    }());
    exports.LogsApiClient = LogsApiClient;
    var PlaygroundApiClient = (function () {
        function PlaygroundApiClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.baseUrl = baseUrl ? baseUrl : "";
            this.http = http ? http : window;
        }
        PlaygroundApiClient.prototype.loadPlayground = function (ticker, strategyId, bars, date) {
            var _this = this;
            var url_ = this.baseUrl + "/api/playground/{ticker}/{strategyId}/{bars}/{date}";
            if (ticker === undefined || ticker === null)
                throw new Error("The parameter 'ticker' must be defined.");
            url_ = url_.replace("{ticker}", encodeURIComponent("" + ticker));
            if (strategyId === undefined || strategyId === null)
                throw new Error("The parameter 'strategyId' must be defined.");
            url_ = url_.replace("{strategyId}", encodeURIComponent("" + strategyId));
            if (bars === undefined || bars === null)
                throw new Error("The parameter 'bars' must be defined.");
            url_ = url_.replace("{bars}", encodeURIComponent("" + bars));
            if (date === undefined || date === null)
                throw new Error("The parameter 'date' must be defined.");
            url_ = url_.replace("{date}", encodeURIComponent("" + date));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processLoadPlayground(_response);
            });
        };
        PlaygroundApiClient.prototype.processLoadPlayground = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? CompanyChartData.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        PlaygroundApiClient.prototype.next = function (ticker, strategyId) {
            var _this = this;
            var url_ = this.baseUrl + "/api/playground/{ticker}/{strategyId}/next";
            if (ticker === undefined || ticker === null)
                throw new Error("The parameter 'ticker' must be defined.");
            url_ = url_.replace("{ticker}", encodeURIComponent("" + ticker));
            if (strategyId === undefined || strategyId === null)
                throw new Error("The parameter 'strategyId' must be defined.");
            url_ = url_.replace("{strategyId}", encodeURIComponent("" + strategyId));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processNext(_response);
            });
        };
        PlaygroundApiClient.prototype.processNext = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? CompanyChartData.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        PlaygroundApiClient.prototype.prev = function (ticker, strategyId) {
            var _this = this;
            var url_ = this.baseUrl + "/api/playground/{ticker}/{strategyId}/prev";
            if (ticker === undefined || ticker === null)
                throw new Error("The parameter 'ticker' must be defined.");
            url_ = url_.replace("{ticker}", encodeURIComponent("" + ticker));
            if (strategyId === undefined || strategyId === null)
                throw new Error("The parameter 'strategyId' must be defined.");
            url_ = url_.replace("{strategyId}", encodeURIComponent("" + strategyId));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processPrev(_response);
            });
        };
        PlaygroundApiClient.prototype.processPrev = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? CompanyChartData.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        PlaygroundApiClient = tslib_1.__decorate([
            aurelia_framework_1.inject(String, aurelia_fetch_client_1.HttpClient),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], PlaygroundApiClient);
        return PlaygroundApiClient;
    }());
    exports.PlaygroundApiClient = PlaygroundApiClient;
    var RulesApiClient = (function () {
        function RulesApiClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.baseUrl = baseUrl ? baseUrl : "";
            this.http = http ? http : window;
        }
        RulesApiClient.prototype.getRule = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/rule/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetRule(_response);
            });
        };
        RulesApiClient.prototype.processGetRule = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? Rule.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        RulesApiClient.prototype.deleteRule = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/rule/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processDeleteRule(_response);
            });
        };
        RulesApiClient.prototype.processDeleteRule = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        RulesApiClient.prototype.getRules = function (period) {
            var _this = this;
            var url_ = this.baseUrl + "/api/rule/{period}/all";
            if (period === undefined || period === null)
                throw new Error("The parameter 'period' must be defined.");
            url_ = url_.replace("{period}", encodeURIComponent("" + period));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetRules(_response);
            });
        };
        RulesApiClient.prototype.processGetRules = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_10 = resultData200; _i < resultData200_10.length; _i++) {
                            var item = resultData200_10[_i];
                            result200.push(Rule.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        RulesApiClient.prototype.saveRule = function (model) {
            var _this = this;
            var url_ = this.baseUrl + "/api/rule";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(model ? model.toJSON() : null);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processSaveRule(_response);
            });
        };
        RulesApiClient.prototype.processSaveRule = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? Rule.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        RulesApiClient = tslib_1.__decorate([
            aurelia_framework_1.inject(String, aurelia_fetch_client_1.HttpClient),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], RulesApiClient);
        return RulesApiClient;
    }());
    exports.RulesApiClient = RulesApiClient;
    var RuleSetsApiClient = (function () {
        function RuleSetsApiClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.baseUrl = baseUrl ? baseUrl : "";
            this.http = http ? http : window;
        }
        RuleSetsApiClient.prototype.getRuleSet = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/ruleset/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetRuleSet(_response);
            });
        };
        RuleSetsApiClient.prototype.processGetRuleSet = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? RuleSetModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        RuleSetsApiClient.prototype.deleteRuleSet = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/ruleset/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processDeleteRuleSet(_response);
            });
        };
        RuleSetsApiClient.prototype.processDeleteRuleSet = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        RuleSetsApiClient.prototype.getRuleSets = function (period) {
            var _this = this;
            var url_ = this.baseUrl + "/api/ruleset/{period}/all";
            if (period === undefined || period === null)
                throw new Error("The parameter 'period' must be defined.");
            url_ = url_.replace("{period}", encodeURIComponent("" + period));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetRuleSets(_response);
            });
        };
        RuleSetsApiClient.prototype.processGetRuleSets = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_11 = resultData200; _i < resultData200_11.length; _i++) {
                            var item = resultData200_11[_i];
                            result200.push(RuleSetModel.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        RuleSetsApiClient.prototype.saveRuleSet = function (model) {
            var _this = this;
            var url_ = this.baseUrl + "/api/ruleset";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(model ? model.toJSON() : null);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processSaveRuleSet(_response);
            });
        };
        RuleSetsApiClient.prototype.processSaveRuleSet = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? RuleSetModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        RuleSetsApiClient.prototype.getStrategyRuleSets = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/ruleset/strategy/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetStrategyRuleSets(_response);
            });
        };
        RuleSetsApiClient.prototype.processGetStrategyRuleSets = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_12 = resultData200; _i < resultData200_12.length; _i++) {
                            var item = resultData200_12[_i];
                            result200.push(VStrategyRuleSet.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        RuleSetsApiClient.prototype.saveStrategyRuleSets = function (id, ruleSets) {
            var _this = this;
            var url_ = this.baseUrl + "/api/ruleset/strategy/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var contentData_ = [];
            if (ruleSets) {
                for (var _i = 0, ruleSets_1 = ruleSets; _i < ruleSets_1.length; _i++) {
                    var item = ruleSets_1[_i];
                    contentData_.push(item.toJSON());
                }
            }
            var content_ = JSON.stringify(ruleSets ? contentData_ : null);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processSaveStrategyRuleSets(_response);
            });
        };
        RuleSetsApiClient.prototype.processSaveStrategyRuleSets = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        RuleSetsApiClient = tslib_1.__decorate([
            aurelia_framework_1.inject(String, aurelia_fetch_client_1.HttpClient),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], RuleSetsApiClient);
        return RuleSetsApiClient;
    }());
    exports.RuleSetsApiClient = RuleSetsApiClient;
    var StockApiClient = (function () {
        function StockApiClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.baseUrl = baseUrl ? baseUrl : "";
            this.http = http ? http : window;
        }
        StockApiClient.prototype.updateQuotes = function (ticker) {
            var _this = this;
            var url_ = this.baseUrl + "/api/stock/{ticker}/update-quotes";
            if (ticker === undefined || ticker === null)
                throw new Error("The parameter 'ticker' must be defined.");
            url_ = url_.replace("{ticker}", encodeURIComponent("" + ticker));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processUpdateQuotes(_response);
            });
        };
        StockApiClient.prototype.processUpdateQuotes = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        StockApiClient = tslib_1.__decorate([
            aurelia_framework_1.inject(String, aurelia_fetch_client_1.HttpClient),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], StockApiClient);
        return StockApiClient;
    }());
    exports.StockApiClient = StockApiClient;
    var StrategiesApiClient = (function () {
        function StrategiesApiClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.baseUrl = baseUrl ? baseUrl : "";
            this.http = http ? http : window;
        }
        StrategiesApiClient.prototype.geStrategySummaries = function () {
            var _this = this;
            var url_ = this.baseUrl + "/api/strategy/getSummaries";
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGeStrategySummaries(_response);
            });
        };
        StrategiesApiClient.prototype.processGeStrategySummaries = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_13 = resultData200; _i < resultData200_13.length; _i++) {
                            var item = resultData200_13[_i];
                            result200.push(StrategySummary.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        StrategiesApiClient.prototype.getStrategyByUrl = function (url) {
            var _this = this;
            var url_ = this.baseUrl + "/api/strategy/getByUrl/{url}";
            if (url === undefined || url === null)
                throw new Error("The parameter 'url' must be defined.");
            url_ = url_.replace("{url}", encodeURIComponent("" + url));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetStrategyByUrl(_response);
            });
        };
        StrategiesApiClient.prototype.processGetStrategyByUrl = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? StrategyModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        StrategiesApiClient.prototype.getStrategySummaryByUrl = function (url) {
            var _this = this;
            var url_ = this.baseUrl + "/api/strategy/getSummaryByUrl/{url}";
            if (url === undefined || url === null)
                throw new Error("The parameter 'url' must be defined.");
            url_ = url_.replace("{url}", encodeURIComponent("" + url));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetStrategySummaryByUrl(_response);
            });
        };
        StrategiesApiClient.prototype.processGetStrategySummaryByUrl = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? StrategySummary.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        StrategiesApiClient.prototype.getStrategyById = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/strategy/get/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetStrategyById(_response);
            });
        };
        StrategiesApiClient.prototype.processGetStrategyById = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? Strategy.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        StrategiesApiClient.prototype.saveStrategy = function (model) {
            var _this = this;
            var url_ = this.baseUrl + "/api/strategy";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(model ? model.toJSON() : null);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept": "application/json; charset=UTF-8"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processSaveStrategy(_response);
            });
        };
        StrategiesApiClient.prototype.processSaveStrategy = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (responseText) {
                    var result200 = null;
                    var resultData200 = responseText === "" ? null : JSON.parse(responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? StrategyModel.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        StrategiesApiClient.prototype.deleteStrategy = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/strategy/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = "";
            var options_ = {
                body: content_,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processDeleteStrategy(_response);
            });
        };
        StrategiesApiClient.prototype.processDeleteStrategy = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.blob();
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (responseText) {
                    return throwException("An unexpected server error occurred.", status, responseText);
                });
            }
            return Promise.resolve(null);
        };
        StrategiesApiClient = tslib_1.__decorate([
            aurelia_framework_1.inject(String, aurelia_fetch_client_1.HttpClient),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], StrategiesApiClient);
        return StrategiesApiClient;
    }());
    exports.StrategiesApiClient = StrategiesApiClient;
    var UserInfo = (function () {
        function UserInfo(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        UserInfo.prototype.init = function (data) {
            if (data) {
                this.username = data["username"] !== undefined ? data["username"] : null;
                this.isAuthenticated = data["isAuthenticated"] !== undefined ? data["isAuthenticated"] : null;
                this.firstName = data["firstName"] !== undefined ? data["firstName"] : null;
            }
        };
        UserInfo.fromJS = function (data) {
            var result = new UserInfo();
            result.init(data);
            return result;
        };
        UserInfo.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["username"] = this.username !== undefined ? this.username : null;
            data["isAuthenticated"] = this.isAuthenticated !== undefined ? this.isAuthenticated : null;
            data["firstName"] = this.firstName !== undefined ? this.firstName : null;
            return data;
        };
        return UserInfo;
    }());
    exports.UserInfo = UserInfo;
    var UpdateProfileResponse = (function () {
        function UpdateProfileResponse(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        UpdateProfileResponse.prototype.init = function (data) {
            if (data) {
                this.status = data["status"] !== undefined ? data["status"] : null;
                this.user = data["user"] ? UserInfo.fromJS(data["user"]) : null;
                if (data["modelState"] && data["modelState"].constructor === Array) {
                    this.modelState = [];
                    for (var _i = 0, _a = data["modelState"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.modelState.push(item);
                    }
                }
            }
        };
        UpdateProfileResponse.fromJS = function (data) {
            var result = new UpdateProfileResponse();
            result.init(data);
            return result;
        };
        UpdateProfileResponse.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["status"] = this.status !== undefined ? this.status : null;
            data["user"] = this.user ? this.user.toJSON() : null;
            if (this.modelState && this.modelState.constructor === Array) {
                data["modelState"] = [];
                for (var _i = 0, _a = this.modelState; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["modelState"].push(item);
                }
            }
            return data;
        };
        return UpdateProfileResponse;
    }());
    exports.UpdateProfileResponse = UpdateProfileResponse;
    var UpdateProfileStatus;
    (function (UpdateProfileStatus) {
        UpdateProfileStatus[UpdateProfileStatus["Success"] = "Success"] = "Success";
        UpdateProfileStatus[UpdateProfileStatus["Failure"] = "Failure"] = "Failure";
        UpdateProfileStatus[UpdateProfileStatus["ValidationError"] = "ValidationError"] = "ValidationError";
    })(UpdateProfileStatus = exports.UpdateProfileStatus || (exports.UpdateProfileStatus = {}));
    var LoginViewModel = (function () {
        function LoginViewModel(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        LoginViewModel.prototype.init = function (data) {
            if (data) {
                this.email = data["email"] !== undefined ? data["email"] : null;
                this.password = data["password"] !== undefined ? data["password"] : null;
                this.rememberMe = data["rememberMe"] !== undefined ? data["rememberMe"] : null;
            }
        };
        LoginViewModel.fromJS = function (data) {
            var result = new LoginViewModel();
            result.init(data);
            return result;
        };
        LoginViewModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["email"] = this.email !== undefined ? this.email : null;
            data["password"] = this.password !== undefined ? this.password : null;
            data["rememberMe"] = this.rememberMe !== undefined ? this.rememberMe : null;
            return data;
        };
        return LoginViewModel;
    }());
    exports.LoginViewModel = LoginViewModel;
    var LoginResponse = (function () {
        function LoginResponse(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        LoginResponse.prototype.init = function (data) {
            if (data) {
                this.status = data["status"] !== undefined ? data["status"] : null;
                this.user = data["user"] ? UserInfo.fromJS(data["user"]) : null;
                if (data["modelState"] && data["modelState"].constructor === Array) {
                    this.modelState = [];
                    for (var _i = 0, _a = data["modelState"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.modelState.push(item);
                    }
                }
            }
        };
        LoginResponse.fromJS = function (data) {
            var result = new LoginResponse();
            result.init(data);
            return result;
        };
        LoginResponse.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["status"] = this.status !== undefined ? this.status : null;
            data["user"] = this.user ? this.user.toJSON() : null;
            if (this.modelState && this.modelState.constructor === Array) {
                data["modelState"] = [];
                for (var _i = 0, _a = this.modelState; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["modelState"].push(item);
                }
            }
            return data;
        };
        return LoginResponse;
    }());
    exports.LoginResponse = LoginResponse;
    var LoginStatus;
    (function (LoginStatus) {
        LoginStatus[LoginStatus["Success"] = "Success"] = "Success";
        LoginStatus[LoginStatus["LockedOut"] = "LockedOut"] = "LockedOut";
        LoginStatus[LoginStatus["RequiresVerification"] = "RequiresVerification"] = "RequiresVerification";
        LoginStatus[LoginStatus["Failure"] = "Failure"] = "Failure";
        LoginStatus[LoginStatus["ValidationError"] = "ValidationError"] = "ValidationError";
    })(LoginStatus = exports.LoginStatus || (exports.LoginStatus = {}));
    var ArticleHeader = (function () {
        function ArticleHeader(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        ArticleHeader.prototype.init = function (data) {
            if (data) {
                this.articleId = data["articleId"] !== undefined ? data["articleId"] : null;
                this.title = data["title"] !== undefined ? data["title"] : null;
                this.url = data["url"] !== undefined ? data["url"] : null;
                this.summary = data["summary"] !== undefined ? data["summary"] : null;
                this.categoryId = data["categoryId"] !== undefined ? data["categoryId"] : null;
                this.orderId = data["orderId"] !== undefined ? data["orderId"] : null;
                this.isFeatured = data["isFeatured"] !== undefined ? data["isFeatured"] : null;
                this.deleted = data["deleted"] !== undefined ? data["deleted"] : null;
            }
        };
        ArticleHeader.fromJS = function (data) {
            var result = new ArticleHeader();
            result.init(data);
            return result;
        };
        ArticleHeader.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["articleId"] = this.articleId !== undefined ? this.articleId : null;
            data["title"] = this.title !== undefined ? this.title : null;
            data["url"] = this.url !== undefined ? this.url : null;
            data["summary"] = this.summary !== undefined ? this.summary : null;
            data["categoryId"] = this.categoryId !== undefined ? this.categoryId : null;
            data["orderId"] = this.orderId !== undefined ? this.orderId : null;
            data["isFeatured"] = this.isFeatured !== undefined ? this.isFeatured : null;
            data["deleted"] = this.deleted !== undefined ? this.deleted : null;
            return data;
        };
        return ArticleHeader;
    }());
    exports.ArticleHeader = ArticleHeader;
    var ArticleModel = (function (_super) {
        tslib_1.__extends(ArticleModel, _super);
        function ArticleModel(data) {
            return _super.call(this, data) || this;
        }
        ArticleModel.prototype.init = function (data) {
            _super.prototype.init.call(this, data);
            if (data) {
                if (data["articleBlocks"] && data["articleBlocks"].constructor === Array) {
                    this.articleBlocks = [];
                    for (var _i = 0, _a = data["articleBlocks"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.articleBlocks.push(ArticleBlock.fromJS(item));
                    }
                }
            }
        };
        ArticleModel.fromJS = function (data) {
            var result = new ArticleModel();
            result.init(data);
            return result;
        };
        ArticleModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            if (this.articleBlocks && this.articleBlocks.constructor === Array) {
                data["articleBlocks"] = [];
                for (var _i = 0, _a = this.articleBlocks; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["articleBlocks"].push(item.toJSON());
                }
            }
            _super.prototype.toJSON.call(this, data);
            return data;
        };
        return ArticleModel;
    }(ArticleHeader));
    exports.ArticleModel = ArticleModel;
    var ArticleBlock = (function () {
        function ArticleBlock(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        ArticleBlock.prototype.init = function (data) {
            if (data) {
                this.valid = data["valid"] !== undefined ? data["valid"] : null;
                this.type = data["type"] !== undefined ? data["type"] : null;
                this.text = data["text"] !== undefined ? data["text"] : null;
                this.headingType = data["headingType"] !== undefined ? data["headingType"] : null;
                this.imageUrl = data["imageUrl"] !== undefined ? data["imageUrl"] : null;
                if (data["items"] && data["items"].constructor === Array) {
                    this.items = [];
                    for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.items.push(ArticleBlockItem.fromJS(item));
                    }
                }
            }
        };
        ArticleBlock.fromJS = function (data) {
            var result = new ArticleBlock();
            result.init(data);
            return result;
        };
        ArticleBlock.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["valid"] = this.valid !== undefined ? this.valid : null;
            data["type"] = this.type !== undefined ? this.type : null;
            data["text"] = this.text !== undefined ? this.text : null;
            data["headingType"] = this.headingType !== undefined ? this.headingType : null;
            data["imageUrl"] = this.imageUrl !== undefined ? this.imageUrl : null;
            if (this.items && this.items.constructor === Array) {
                data["items"] = [];
                for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["items"].push(item.toJSON());
                }
            }
            return data;
        };
        return ArticleBlock;
    }());
    exports.ArticleBlock = ArticleBlock;
    var ArticleBlockType;
    (function (ArticleBlockType) {
        ArticleBlockType[ArticleBlockType["Unset"] = "Unset"] = "Unset";
        ArticleBlockType[ArticleBlockType["Paragraph"] = "Paragraph"] = "Paragraph";
        ArticleBlockType[ArticleBlockType["Heading"] = "Heading"] = "Heading";
        ArticleBlockType[ArticleBlockType["Image"] = "Image"] = "Image";
        ArticleBlockType[ArticleBlockType["List"] = "List"] = "List";
    })(ArticleBlockType = exports.ArticleBlockType || (exports.ArticleBlockType = {}));
    var HeadingType;
    (function (HeadingType) {
        HeadingType[HeadingType["H1"] = "H1"] = "H1";
        HeadingType[HeadingType["H2"] = "H2"] = "H2";
        HeadingType[HeadingType["H3"] = "H3"] = "H3";
        HeadingType[HeadingType["H4"] = "H4"] = "H4";
        HeadingType[HeadingType["H5"] = "H5"] = "H5";
    })(HeadingType = exports.HeadingType || (exports.HeadingType = {}));
    var ArticleBlockItem = (function () {
        function ArticleBlockItem(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        ArticleBlockItem.prototype.init = function (data) {
            if (data) {
                this.text = data["text"] !== undefined ? data["text"] : null;
                this.valid = data["valid"] !== undefined ? data["valid"] : null;
            }
        };
        ArticleBlockItem.fromJS = function (data) {
            var result = new ArticleBlockItem();
            result.init(data);
            return result;
        };
        ArticleBlockItem.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["text"] = this.text !== undefined ? this.text : null;
            data["valid"] = this.valid !== undefined ? this.valid : null;
            return data;
        };
        return ArticleBlockItem;
    }());
    exports.ArticleBlockItem = ArticleBlockItem;
    var UpdateArticleOrderModel = (function () {
        function UpdateArticleOrderModel(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        UpdateArticleOrderModel.prototype.init = function (data) {
            if (data) {
                this.articleId = data["articleId"] !== undefined ? data["articleId"] : null;
                this.orderId = data["orderId"] !== undefined ? data["orderId"] : null;
            }
        };
        UpdateArticleOrderModel.fromJS = function (data) {
            var result = new UpdateArticleOrderModel();
            result.init(data);
            return result;
        };
        UpdateArticleOrderModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["articleId"] = this.articleId !== undefined ? this.articleId : null;
            data["orderId"] = this.orderId !== undefined ? this.orderId : null;
            return data;
        };
        return UpdateArticleOrderModel;
    }());
    exports.UpdateArticleOrderModel = UpdateArticleOrderModel;
    var SectionModel = (function () {
        function SectionModel(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        SectionModel.prototype.init = function (data) {
            if (data) {
                this.sectionId = data["sectionId"] !== undefined ? data["sectionId"] : null;
                this.title = data["title"] !== undefined ? data["title"] : null;
                this.url = data["url"] !== undefined ? data["url"] : null;
                this.orderId = data["orderId"] !== undefined ? data["orderId"] : null;
                this.isDeleted = data["isDeleted"] !== undefined ? data["isDeleted"] : null;
            }
        };
        SectionModel.fromJS = function (data) {
            var result = new SectionModel();
            result.init(data);
            return result;
        };
        SectionModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["sectionId"] = this.sectionId !== undefined ? this.sectionId : null;
            data["title"] = this.title !== undefined ? this.title : null;
            data["url"] = this.url !== undefined ? this.url : null;
            data["orderId"] = this.orderId !== undefined ? this.orderId : null;
            data["isDeleted"] = this.isDeleted !== undefined ? this.isDeleted : null;
            return data;
        };
        return SectionModel;
    }());
    exports.SectionModel = SectionModel;
    var CategoryModel = (function () {
        function CategoryModel(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        CategoryModel.prototype.init = function (data) {
            if (data) {
                this.categoryId = data["categoryId"] !== undefined ? data["categoryId"] : null;
                this.title = data["title"] !== undefined ? data["title"] : null;
                this.orderId = data["orderId"] !== undefined ? data["orderId"] : null;
                this.url = data["url"] !== undefined ? data["url"] : null;
                this.sectionId = data["sectionId"] !== undefined ? data["sectionId"] : null;
                this.deleted = data["deleted"] !== undefined ? data["deleted"] : null;
            }
        };
        CategoryModel.fromJS = function (data) {
            var result = new CategoryModel();
            result.init(data);
            return result;
        };
        CategoryModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["categoryId"] = this.categoryId !== undefined ? this.categoryId : null;
            data["title"] = this.title !== undefined ? this.title : null;
            data["orderId"] = this.orderId !== undefined ? this.orderId : null;
            data["url"] = this.url !== undefined ? this.url : null;
            data["sectionId"] = this.sectionId !== undefined ? this.sectionId : null;
            data["deleted"] = this.deleted !== undefined ? this.deleted : null;
            return data;
        };
        return CategoryModel;
    }());
    exports.CategoryModel = CategoryModel;
    var FileDetails = (function () {
        function FileDetails(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        FileDetails.prototype.init = function (data) {
            if (data) {
                this.fileName = data["fileName"] !== undefined ? data["fileName"] : null;
                this.fileBody = data["fileBody"] !== undefined ? data["fileBody"] : null;
                this.category = data["category"] !== undefined ? data["category"] : null;
            }
        };
        FileDetails.fromJS = function (data) {
            var result = new FileDetails();
            result.init(data);
            return result;
        };
        FileDetails.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["fileName"] = this.fileName !== undefined ? this.fileName : null;
            data["fileBody"] = this.fileBody !== undefined ? this.fileBody : null;
            data["category"] = this.category !== undefined ? this.category : null;
            return data;
        };
        return FileDetails;
    }());
    exports.FileDetails = FileDetails;
    var FileCategory;
    (function (FileCategory) {
        FileCategory[FileCategory["Articles"] = "Articles"] = "Articles";
        FileCategory[FileCategory["Journal"] = "Journal"] = "Journal";
    })(FileCategory = exports.FileCategory || (exports.FileCategory = {}));
    var CompanyHeader = (function () {
        function CompanyHeader(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        CompanyHeader.prototype.init = function (data) {
            if (data) {
                this.ticker = data["ticker"] !== undefined ? data["ticker"] : null;
                this.name = data["name"] !== undefined ? data["name"] : null;
                this.lastUpdated = data["lastUpdated"] ? new Date(data["lastUpdated"].toString()) : null;
                this.volume = data["volume"] !== undefined ? data["volume"] : null;
                this.price = data["price"] !== undefined ? data["price"] : null;
                this.highestPrice52 = data["highestPrice52"] !== undefined ? data["highestPrice52"] : null;
                this.lowestPrice52 = data["lowestPrice52"] !== undefined ? data["lowestPrice52"] : null;
                this.chaosPercentage = data["chaosPercentage"] !== undefined ? data["chaosPercentage"] : null;
                this.updateSuccessful = data["updateSuccessful"] !== undefined ? data["updateSuccessful"] : null;
                this.filtered = data["filtered"] !== undefined ? data["filtered"] : null;
                this.fullName = data["fullName"] !== undefined ? data["fullName"] : null;
                this.updateError = data["updateError"] !== undefined ? data["updateError"] : null;
                this.marketCap = data["marketCap"] !== undefined ? data["marketCap"] : null;
                this.lastCalculated = data["lastCalculated"] ? new Date(data["lastCalculated"].toString()) : null;
                this.nextReportDate = data["nextReportDate"] ? new Date(data["nextReportDate"].toString()) : null;
                this.calculatedSuccessful = data["calculatedSuccessful"] !== undefined ? data["calculatedSuccessful"] : null;
                this.calculatedError = data["calculatedError"] !== undefined ? data["calculatedError"] : null;
                this.startDate = data["startDate"] ? new Date(data["startDate"].toString()) : null;
                this.endDate = data["endDate"] ? new Date(data["endDate"].toString()) : null;
                this.sectorId = data["sectorId"] !== undefined ? data["sectorId"] : null;
                this.industryId = data["industryId"] !== undefined ? data["industryId"] : null;
                this.sP500 = data["sP500"] !== undefined ? data["sP500"] : null;
                this.isIndex = data["isIndex"] !== undefined ? data["isIndex"] : null;
            }
        };
        CompanyHeader.fromJS = function (data) {
            var result = new CompanyHeader();
            result.init(data);
            return result;
        };
        CompanyHeader.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["ticker"] = this.ticker !== undefined ? this.ticker : null;
            data["name"] = this.name !== undefined ? this.name : null;
            data["lastUpdated"] = this.lastUpdated ? this.lastUpdated.toISOString() : null;
            data["volume"] = this.volume !== undefined ? this.volume : null;
            data["price"] = this.price !== undefined ? this.price : null;
            data["highestPrice52"] = this.highestPrice52 !== undefined ? this.highestPrice52 : null;
            data["lowestPrice52"] = this.lowestPrice52 !== undefined ? this.lowestPrice52 : null;
            data["chaosPercentage"] = this.chaosPercentage !== undefined ? this.chaosPercentage : null;
            data["updateSuccessful"] = this.updateSuccessful !== undefined ? this.updateSuccessful : null;
            data["filtered"] = this.filtered !== undefined ? this.filtered : null;
            data["fullName"] = this.fullName !== undefined ? this.fullName : null;
            data["updateError"] = this.updateError !== undefined ? this.updateError : null;
            data["marketCap"] = this.marketCap !== undefined ? this.marketCap : null;
            data["lastCalculated"] = this.lastCalculated ? this.lastCalculated.toISOString() : null;
            data["nextReportDate"] = this.nextReportDate ? this.nextReportDate.toISOString() : null;
            data["calculatedSuccessful"] = this.calculatedSuccessful !== undefined ? this.calculatedSuccessful : null;
            data["calculatedError"] = this.calculatedError !== undefined ? this.calculatedError : null;
            data["startDate"] = this.startDate ? this.startDate.toISOString() : null;
            data["endDate"] = this.endDate ? this.endDate.toISOString() : null;
            data["sectorId"] = this.sectorId !== undefined ? this.sectorId : null;
            data["industryId"] = this.industryId !== undefined ? this.industryId : null;
            data["sP500"] = this.sP500 !== undefined ? this.sP500 : null;
            data["isIndex"] = this.isIndex !== undefined ? this.isIndex : null;
            return data;
        };
        return CompanyHeader;
    }());
    exports.CompanyHeader = CompanyHeader;
    var CompanyModel = (function (_super) {
        tslib_1.__extends(CompanyModel, _super);
        function CompanyModel(data) {
            return _super.call(this, data) || this;
        }
        CompanyModel.prototype.init = function (data) {
            _super.prototype.init.call(this, data);
            if (data) {
                this.sectorName = data["sectorName"] !== undefined ? data["sectorName"] : null;
                this.industryName = data["industryName"] !== undefined ? data["industryName"] : null;
                if (data["historyQuotes"] && data["historyQuotes"].constructor === Array) {
                    this.historyQuotes = [];
                    for (var _i = 0, _a = data["historyQuotes"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.historyQuotes.push(QuotesModel.fromJS(item));
                    }
                }
            }
        };
        CompanyModel.fromJS = function (data) {
            var result = new CompanyModel();
            result.init(data);
            return result;
        };
        CompanyModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["sectorName"] = this.sectorName !== undefined ? this.sectorName : null;
            data["industryName"] = this.industryName !== undefined ? this.industryName : null;
            if (this.historyQuotes && this.historyQuotes.constructor === Array) {
                data["historyQuotes"] = [];
                for (var _i = 0, _a = this.historyQuotes; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["historyQuotes"].push(item.toJSON());
                }
            }
            _super.prototype.toJSON.call(this, data);
            return data;
        };
        return CompanyModel;
    }(CompanyHeader));
    exports.CompanyModel = CompanyModel;
    var QuotesModel = (function () {
        function QuotesModel(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        QuotesModel.prototype.init = function (data) {
            if (data) {
                this.date = data["date"] ? new Date(data["date"].toString()) : null;
                this.close = data["close"] !== undefined ? data["close"] : null;
                this.volume = data["volume"] !== undefined ? data["volume"] : null;
                this.open = data["open"] !== undefined ? data["open"] : null;
                this.high = data["high"] !== undefined ? data["high"] : null;
                this.low = data["low"] !== undefined ? data["low"] : null;
                this.impulse = data["impulse"] !== undefined ? data["impulse"] : null;
            }
        };
        QuotesModel.fromJS = function (data) {
            var result = new QuotesModel();
            result.init(data);
            return result;
        };
        QuotesModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["date"] = this.date ? this.date.toISOString() : null;
            data["close"] = this.close !== undefined ? this.close : null;
            data["volume"] = this.volume !== undefined ? this.volume : null;
            data["open"] = this.open !== undefined ? this.open : null;
            data["high"] = this.high !== undefined ? this.high : null;
            data["low"] = this.low !== undefined ? this.low : null;
            data["impulse"] = this.impulse !== undefined ? this.impulse : null;
            return data;
        };
        return QuotesModel;
    }());
    exports.QuotesModel = QuotesModel;
    var CompanySearchRequest = (function () {
        function CompanySearchRequest(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        CompanySearchRequest.prototype.init = function (data) {
            if (data) {
                this.ticker = data["ticker"] !== undefined ? data["ticker"] : null;
                this.maxCount = data["maxCount"] !== undefined ? data["maxCount"] : null;
            }
        };
        CompanySearchRequest.fromJS = function (data) {
            var result = new CompanySearchRequest();
            result.init(data);
            return result;
        };
        CompanySearchRequest.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["ticker"] = this.ticker !== undefined ? this.ticker : null;
            data["maxCount"] = this.maxCount !== undefined ? this.maxCount : null;
            return data;
        };
        return CompanySearchRequest;
    }());
    exports.CompanySearchRequest = CompanySearchRequest;
    var Indicator = (function () {
        function Indicator(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        Indicator.prototype.init = function (data) {
            if (data) {
                this.indicatorId = data["indicatorId"] !== undefined ? data["indicatorId"] : null;
                this.name = data["name"] !== undefined ? data["name"] : null;
                this.description = data["description"] !== undefined ? data["description"] : null;
                this.period = data["period"] !== undefined ? data["period"] : null;
                this.jsonParams = data["jsonParams"] !== undefined ? data["jsonParams"] : null;
                this.lastUpdated = data["lastUpdated"] ? new Date(data["lastUpdated"].toString()) : null;
                this.deleted = data["deleted"] !== undefined ? data["deleted"] : null;
                this.global = data["global"] !== undefined ? data["global"] : null;
                this.chartPlotNumber = data["chartPlotNumber"] !== undefined ? data["chartPlotNumber"] : null;
                this.chartColor = data["chartColor"] !== undefined ? data["chartColor"] : null;
                if (data["params"] && data["params"].constructor === Array) {
                    this.params = [];
                    for (var _i = 0, _a = data["params"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.params.push(IndicatorParam.fromJS(item));
                    }
                }
                this.chartType = data["chartType"] !== undefined ? data["chartType"] : null;
            }
        };
        Indicator.fromJS = function (data) {
            var result = new Indicator();
            result.init(data);
            return result;
        };
        Indicator.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["indicatorId"] = this.indicatorId !== undefined ? this.indicatorId : null;
            data["name"] = this.name !== undefined ? this.name : null;
            data["description"] = this.description !== undefined ? this.description : null;
            data["period"] = this.period !== undefined ? this.period : null;
            data["jsonParams"] = this.jsonParams !== undefined ? this.jsonParams : null;
            data["lastUpdated"] = this.lastUpdated ? this.lastUpdated.toISOString() : null;
            data["deleted"] = this.deleted !== undefined ? this.deleted : null;
            data["global"] = this.global !== undefined ? this.global : null;
            data["chartPlotNumber"] = this.chartPlotNumber !== undefined ? this.chartPlotNumber : null;
            data["chartColor"] = this.chartColor !== undefined ? this.chartColor : null;
            if (this.params && this.params.constructor === Array) {
                data["params"] = [];
                for (var _i = 0, _a = this.params; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["params"].push(item.toJSON());
                }
            }
            data["chartType"] = this.chartType !== undefined ? this.chartType : null;
            return data;
        };
        return Indicator;
    }());
    exports.Indicator = Indicator;
    var QuotePeriod;
    (function (QuotePeriod) {
        QuotePeriod[QuotePeriod["Daily"] = "Daily"] = "Daily";
        QuotePeriod[QuotePeriod["Weekly"] = "Weekly"] = "Weekly";
    })(QuotePeriod = exports.QuotePeriod || (exports.QuotePeriod = {}));
    var IndicatorParam = (function () {
        function IndicatorParam(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        IndicatorParam.prototype.init = function (data) {
            if (data) {
                this.paramName = data["paramName"] !== undefined ? data["paramName"] : null;
                this.value = data["value"] !== undefined ? data["value"] : null;
            }
        };
        IndicatorParam.fromJS = function (data) {
            var result = new IndicatorParam();
            result.init(data);
            return result;
        };
        IndicatorParam.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["paramName"] = this.paramName !== undefined ? this.paramName : null;
            data["value"] = this.value !== undefined ? this.value : null;
            return data;
        };
        return IndicatorParam;
    }());
    exports.IndicatorParam = IndicatorParam;
    var ChartType;
    (function (ChartType) {
        ChartType[ChartType["OHLC"] = "OHLC"] = "OHLC";
        ChartType[ChartType["Line"] = "Line"] = "Line";
        ChartType[ChartType["Column"] = "Column"] = "Column";
    })(ChartType = exports.ChartType || (exports.ChartType = {}));
    var IndicatorCore = (function () {
        function IndicatorCore(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        IndicatorCore.prototype.init = function (data) {
            if (data) {
                this.name = data["name"] !== undefined ? data["name"] : null;
                this.id = data["id"] !== undefined ? data["id"] : null;
                this.period = data["period"] !== undefined ? data["period"] : null;
            }
        };
        IndicatorCore.fromJS = function (data) {
            var result = new IndicatorCore();
            result.init(data);
            return result;
        };
        IndicatorCore.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["name"] = this.name !== undefined ? this.name : null;
            data["id"] = this.id !== undefined ? this.id : null;
            data["period"] = this.period !== undefined ? this.period : null;
            return data;
        };
        return IndicatorCore;
    }());
    exports.IndicatorCore = IndicatorCore;
    var ScheduledJob = (function () {
        function ScheduledJob(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        ScheduledJob.prototype.init = function (data) {
            if (data) {
                this.jobId = data["jobId"] !== undefined ? data["jobId"] : null;
                this.jobType = data["jobType"] !== undefined ? data["jobType"] : null;
                this.startDate = data["startDate"] ? new Date(data["startDate"].toString()) : null;
                this.completedDate = data["completedDate"] ? new Date(data["completedDate"].toString()) : null;
                this.jobName = data["jobName"] !== undefined ? data["jobName"] : null;
                this.status = data["status"] !== undefined ? data["status"] : null;
                this.progress = data["progress"] !== undefined ? data["progress"] : null;
            }
        };
        ScheduledJob.fromJS = function (data) {
            var result = new ScheduledJob();
            result.init(data);
            return result;
        };
        ScheduledJob.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["jobId"] = this.jobId !== undefined ? this.jobId : null;
            data["jobType"] = this.jobType !== undefined ? this.jobType : null;
            data["startDate"] = this.startDate ? this.startDate.toISOString() : null;
            data["completedDate"] = this.completedDate ? this.completedDate.toISOString() : null;
            data["jobName"] = this.jobName !== undefined ? this.jobName : null;
            data["status"] = this.status !== undefined ? this.status : null;
            data["progress"] = this.progress !== undefined ? this.progress : null;
            return data;
        };
        return ScheduledJob;
    }());
    exports.ScheduledJob = ScheduledJob;
    var ScheduledJobType;
    (function (ScheduledJobType) {
        ScheduledJobType[ScheduledJobType["All"] = "All"] = "All";
        ScheduledJobType[ScheduledJobType["RefreshAllStocks"] = "RefreshAllStocks"] = "RefreshAllStocks";
        ScheduledJobType[ScheduledJobType["RefreshSP500Stocks"] = "RefreshSP500Stocks"] = "RefreshSP500Stocks";
        ScheduledJobType[ScheduledJobType["CalculateGlobalIndicators"] = "CalculateGlobalIndicators"] = "CalculateGlobalIndicators";
        ScheduledJobType[ScheduledJobType["RefreshIndices"] = "RefreshIndices"] = "RefreshIndices";
    })(ScheduledJobType = exports.ScheduledJobType || (exports.ScheduledJobType = {}));
    var JobStatus;
    (function (JobStatus) {
        JobStatus[JobStatus["Pending"] = "Pending"] = "Pending";
        JobStatus[JobStatus["InProgress"] = "InProgress"] = "InProgress";
        JobStatus[JobStatus["Completed"] = "Completed"] = "Completed";
        JobStatus[JobStatus["Cancelled"] = "Cancelled"] = "Cancelled";
        JobStatus[JobStatus["Paused"] = "Paused"] = "Paused";
        JobStatus[JobStatus["Error"] = "Error"] = "Error";
    })(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
    var JournalHeader = (function () {
        function JournalHeader(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        JournalHeader.prototype.init = function (data) {
            if (data) {
                this.journalId = data["journalId"] !== undefined ? data["journalId"] : null;
                this.ticker = data["ticker"] !== undefined ? data["ticker"] : null;
                this.accountId = data["accountId"] !== undefined ? data["accountId"] : null;
                this.maxSharesCount = data["maxSharesCount"] !== undefined ? data["maxSharesCount"] : null;
                this.accountName = data["accountName"] !== undefined ? data["accountName"] : null;
                this.created = data["created"] ? new Date(data["created"].toString()) : null;
                this.userId = data["userId"] !== undefined ? data["userId"] : null;
                this.tradeDirection = data["tradeDirection"] !== undefined ? data["tradeDirection"] : null;
                this.entryPrice = data["entryPrice"] !== undefined ? data["entryPrice"] : null;
                this.stopLossPrice = data["stopLossPrice"] !== undefined ? data["stopLossPrice"] : null;
                this.takeProfitPrice = data["takeProfitPrice"] !== undefined ? data["takeProfitPrice"] : null;
                this.maxRiskValuePrice = data["maxRiskValuePrice"] !== undefined ? data["maxRiskValuePrice"] : null;
                this.rewardRiskRatio = data["rewardRiskRatio"] !== undefined ? data["rewardRiskRatio"] : null;
            }
        };
        JournalHeader.fromJS = function (data) {
            var result = new JournalHeader();
            result.init(data);
            return result;
        };
        JournalHeader.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["journalId"] = this.journalId !== undefined ? this.journalId : null;
            data["ticker"] = this.ticker !== undefined ? this.ticker : null;
            data["accountId"] = this.accountId !== undefined ? this.accountId : null;
            data["maxSharesCount"] = this.maxSharesCount !== undefined ? this.maxSharesCount : null;
            data["accountName"] = this.accountName !== undefined ? this.accountName : null;
            data["created"] = this.created ? this.created.toISOString() : null;
            data["userId"] = this.userId !== undefined ? this.userId : null;
            data["tradeDirection"] = this.tradeDirection !== undefined ? this.tradeDirection : null;
            data["entryPrice"] = this.entryPrice !== undefined ? this.entryPrice : null;
            data["stopLossPrice"] = this.stopLossPrice !== undefined ? this.stopLossPrice : null;
            data["takeProfitPrice"] = this.takeProfitPrice !== undefined ? this.takeProfitPrice : null;
            data["maxRiskValuePrice"] = this.maxRiskValuePrice !== undefined ? this.maxRiskValuePrice : null;
            data["rewardRiskRatio"] = this.rewardRiskRatio !== undefined ? this.rewardRiskRatio : null;
            return data;
        };
        return JournalHeader;
    }());
    exports.JournalHeader = JournalHeader;
    var JournalModel = (function (_super) {
        tslib_1.__extends(JournalModel, _super);
        function JournalModel(data) {
            return _super.call(this, data) || this;
        }
        JournalModel.prototype.init = function (data) {
            _super.prototype.init.call(this, data);
            if (data) {
                if (data["entries"] && data["entries"].constructor === Array) {
                    this.entries = [];
                    for (var _i = 0, _a = data["entries"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.entries.push(TradeOrder.fromJS(item));
                    }
                }
                if (data["exists"] && data["exists"].constructor === Array) {
                    this.exists = [];
                    for (var _b = 0, _c = data["exists"]; _b < _c.length; _b++) {
                        var item = _c[_b];
                        this.exists.push(TradeOrder.fromJS(item));
                    }
                }
                this.summary = data["summary"] !== undefined ? data["summary"] : null;
                this.strategyId = data["strategyId"] !== undefined ? data["strategyId"] : null;
                this.maxRisk = data["maxRisk"] !== undefined ? data["maxRisk"] : null;
                this.entryDate = data["entryDate"] ? new Date(data["entryDate"].toString()) : null;
                this.exitDate = data["exitDate"] ? new Date(data["exitDate"].toString()) : null;
            }
        };
        JournalModel.fromJS = function (data) {
            var result = new JournalModel();
            result.init(data);
            return result;
        };
        JournalModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            if (this.entries && this.entries.constructor === Array) {
                data["entries"] = [];
                for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["entries"].push(item.toJSON());
                }
            }
            if (this.exists && this.exists.constructor === Array) {
                data["exists"] = [];
                for (var _b = 0, _c = this.exists; _b < _c.length; _b++) {
                    var item = _c[_b];
                    data["exists"].push(item.toJSON());
                }
            }
            data["summary"] = this.summary !== undefined ? this.summary : null;
            data["strategyId"] = this.strategyId !== undefined ? this.strategyId : null;
            data["maxRisk"] = this.maxRisk !== undefined ? this.maxRisk : null;
            data["entryDate"] = this.entryDate ? this.entryDate.toISOString() : null;
            data["exitDate"] = this.exitDate ? this.exitDate.toISOString() : null;
            _super.prototype.toJSON.call(this, data);
            return data;
        };
        return JournalModel;
    }(JournalHeader));
    exports.JournalModel = JournalModel;
    var TradeOrder = (function () {
        function TradeOrder(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        TradeOrder.prototype.init = function (data) {
            if (data) {
                this.created = data["created"] ? new Date(data["created"].toString()) : null;
                this.journalId = data["journalId"] !== undefined ? data["journalId"] : null;
                this.sharePrice = data["sharePrice"] !== undefined ? data["sharePrice"] : null;
                this.sharesCount = data["sharesCount"] !== undefined ? data["sharesCount"] : null;
                this.tradeOrderId = data["tradeOrderId"] !== undefined ? data["tradeOrderId"] : null;
            }
        };
        TradeOrder.fromJS = function (data) {
            var result = new TradeOrder();
            result.init(data);
            return result;
        };
        TradeOrder.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["created"] = this.created ? this.created.toISOString() : null;
            data["journalId"] = this.journalId !== undefined ? this.journalId : null;
            data["sharePrice"] = this.sharePrice !== undefined ? this.sharePrice : null;
            data["sharesCount"] = this.sharesCount !== undefined ? this.sharesCount : null;
            data["tradeOrderId"] = this.tradeOrderId !== undefined ? this.tradeOrderId : null;
            return data;
        };
        return TradeOrder;
    }());
    exports.TradeOrder = TradeOrder;
    var TradeDirection;
    (function (TradeDirection) {
        TradeDirection[TradeDirection["Short"] = "Short"] = "Short";
        TradeDirection[TradeDirection["Long"] = "Long"] = "Long";
    })(TradeDirection = exports.TradeDirection || (exports.TradeDirection = {}));
    var ChartLayoutModel = (function () {
        function ChartLayoutModel(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        ChartLayoutModel.prototype.init = function (data) {
            if (data) {
                if (data["plots"] && data["plots"].constructor === Array) {
                    this.plots = [];
                    for (var _i = 0, _a = data["plots"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.plots.push(ChartPlotModel.fromJS(item));
                    }
                }
                this.layoutId = data["layoutId"] !== undefined ? data["layoutId"] : null;
                this.title = data["title"] !== undefined ? data["title"] : null;
                this.description = data["description"] !== undefined ? data["description"] : null;
                this.deleted = data["deleted"] !== undefined ? data["deleted"] : null;
                this.period = data["period"] !== undefined ? data["period"] : null;
                this.default = data["default"] !== undefined ? data["default"] : null;
            }
        };
        ChartLayoutModel.fromJS = function (data) {
            var result = new ChartLayoutModel();
            result.init(data);
            return result;
        };
        ChartLayoutModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            if (this.plots && this.plots.constructor === Array) {
                data["plots"] = [];
                for (var _i = 0, _a = this.plots; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["plots"].push(item.toJSON());
                }
            }
            data["layoutId"] = this.layoutId !== undefined ? this.layoutId : null;
            data["title"] = this.title !== undefined ? this.title : null;
            data["description"] = this.description !== undefined ? this.description : null;
            data["deleted"] = this.deleted !== undefined ? this.deleted : null;
            data["period"] = this.period !== undefined ? this.period : null;
            data["default"] = this.default !== undefined ? this.default : null;
            return data;
        };
        return ChartLayoutModel;
    }());
    exports.ChartLayoutModel = ChartLayoutModel;
    var ChartPlotModel = (function () {
        function ChartPlotModel(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        ChartPlotModel.prototype.init = function (data) {
            if (data) {
                this.layoutId = data["layoutId"] !== undefined ? data["layoutId"] : null;
                this.plotId = data["plotId"] !== undefined ? data["plotId"] : null;
                this.orderId = data["orderId"] !== undefined ? data["orderId"] : null;
                this.height = data["height"] !== undefined ? data["height"] : null;
                if (data["indicators"] && data["indicators"].constructor === Array) {
                    this.indicators = [];
                    for (var _i = 0, _a = data["indicators"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.indicators.push(LayoutIndicatorModel.fromJS(item));
                    }
                }
            }
        };
        ChartPlotModel.fromJS = function (data) {
            var result = new ChartPlotModel();
            result.init(data);
            return result;
        };
        ChartPlotModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["layoutId"] = this.layoutId !== undefined ? this.layoutId : null;
            data["plotId"] = this.plotId !== undefined ? this.plotId : null;
            data["orderId"] = this.orderId !== undefined ? this.orderId : null;
            data["height"] = this.height !== undefined ? this.height : null;
            if (this.indicators && this.indicators.constructor === Array) {
                data["indicators"] = [];
                for (var _i = 0, _a = this.indicators; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["indicators"].push(item.toJSON());
                }
            }
            return data;
        };
        return ChartPlotModel;
    }());
    exports.ChartPlotModel = ChartPlotModel;
    var LayoutIndicatorModel = (function () {
        function LayoutIndicatorModel(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        LayoutIndicatorModel.prototype.init = function (data) {
            if (data) {
                this.id = data["id"] !== undefined ? data["id"] : null;
                this.plotId = data["plotId"] !== undefined ? data["plotId"] : null;
                this.indicatorId = data["indicatorId"] !== undefined ? data["indicatorId"] : null;
                this.orderId = data["orderId"] !== undefined ? data["orderId"] : null;
                this.indicator = data["indicator"] ? IndicatorModel.fromJS(data["indicator"]) : null;
                this.name = data["name"] !== undefined ? data["name"] : null;
                this.lineColor = data["lineColor"] !== undefined ? data["lineColor"] : null;
            }
        };
        LayoutIndicatorModel.fromJS = function (data) {
            var result = new LayoutIndicatorModel();
            result.init(data);
            return result;
        };
        LayoutIndicatorModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["id"] = this.id !== undefined ? this.id : null;
            data["plotId"] = this.plotId !== undefined ? this.plotId : null;
            data["indicatorId"] = this.indicatorId !== undefined ? this.indicatorId : null;
            data["orderId"] = this.orderId !== undefined ? this.orderId : null;
            data["indicator"] = this.indicator ? this.indicator.toJSON() : null;
            data["name"] = this.name !== undefined ? this.name : null;
            data["lineColor"] = this.lineColor !== undefined ? this.lineColor : null;
            return data;
        };
        return LayoutIndicatorModel;
    }());
    exports.LayoutIndicatorModel = LayoutIndicatorModel;
    var IndicatorModel = (function () {
        function IndicatorModel(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        IndicatorModel.prototype.init = function (data) {
            if (data) {
                this.indicatorId = data["indicatorId"] !== undefined ? data["indicatorId"] : null;
                this.period = data["period"] !== undefined ? data["period"] : null;
                if (data["params"] && data["params"].constructor === Array) {
                    this.params = [];
                    for (var _i = 0, _a = data["params"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.params.push(IndicatorParam.fromJS(item));
                    }
                }
                this.name = data["name"] !== undefined ? data["name"] : null;
                this.jsonParams = data["jsonParams"] !== undefined ? data["jsonParams"] : null;
                this.description = data["description"] !== undefined ? data["description"] : null;
            }
        };
        IndicatorModel.fromJS = function (data) {
            var result = new IndicatorModel();
            result.init(data);
            return result;
        };
        IndicatorModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["indicatorId"] = this.indicatorId !== undefined ? this.indicatorId : null;
            data["period"] = this.period !== undefined ? this.period : null;
            if (this.params && this.params.constructor === Array) {
                data["params"] = [];
                for (var _i = 0, _a = this.params; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["params"].push(item.toJSON());
                }
            }
            data["name"] = this.name !== undefined ? this.name : null;
            data["jsonParams"] = this.jsonParams !== undefined ? this.jsonParams : null;
            data["description"] = this.description !== undefined ? this.description : null;
            return data;
        };
        return IndicatorModel;
    }());
    exports.IndicatorModel = IndicatorModel;
    var ProcessorLog = (function () {
        function ProcessorLog(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        ProcessorLog.prototype.init = function (data) {
            if (data) {
                this.id = data["id"] !== undefined ? data["id"] : null;
                this.logged = data["logged"] ? new Date(data["logged"].toString()) : null;
                this.level = data["level"] !== undefined ? data["level"] : null;
                this.message = data["message"] !== undefined ? data["message"] : null;
                this.processor = data["processor"] !== undefined ? data["processor"] : null;
                this.jobType = data["jobType"] !== undefined ? data["jobType"] : null;
                this.jobState = data["jobState"] !== undefined ? data["jobState"] : null;
                this.exception = data["exception"] !== undefined ? data["exception"] : null;
                this.jobId = data["jobId"] !== undefined ? data["jobId"] : null;
            }
        };
        ProcessorLog.fromJS = function (data) {
            var result = new ProcessorLog();
            result.init(data);
            return result;
        };
        ProcessorLog.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["id"] = this.id !== undefined ? this.id : null;
            data["logged"] = this.logged ? this.logged.toISOString() : null;
            data["level"] = this.level !== undefined ? this.level : null;
            data["message"] = this.message !== undefined ? this.message : null;
            data["processor"] = this.processor !== undefined ? this.processor : null;
            data["jobType"] = this.jobType !== undefined ? this.jobType : null;
            data["jobState"] = this.jobState !== undefined ? this.jobState : null;
            data["exception"] = this.exception !== undefined ? this.exception : null;
            data["jobId"] = this.jobId !== undefined ? this.jobId : null;
            return data;
        };
        return ProcessorLog;
    }());
    exports.ProcessorLog = ProcessorLog;
    var GlobalIndexChartData = (function () {
        function GlobalIndexChartData(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        GlobalIndexChartData.prototype.init = function (data) {
            if (data) {
                if (data["periods"] && data["periods"].constructor === Array) {
                    this.periods = [];
                    for (var _i = 0, _a = data["periods"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.periods.push(ChartData.fromJS(item));
                    }
                }
                this.company = data["company"] ? CompanyInfo.fromJS(data["company"]) : null;
            }
        };
        GlobalIndexChartData.fromJS = function (data) {
            var result = new GlobalIndexChartData();
            result.init(data);
            return result;
        };
        GlobalIndexChartData.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            if (this.periods && this.periods.constructor === Array) {
                data["periods"] = [];
                for (var _i = 0, _a = this.periods; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["periods"].push(item.toJSON());
                }
            }
            data["company"] = this.company ? this.company.toJSON() : null;
            return data;
        };
        return GlobalIndexChartData;
    }());
    exports.GlobalIndexChartData = GlobalIndexChartData;
    var CompanyChartData = (function (_super) {
        tslib_1.__extends(CompanyChartData, _super);
        function CompanyChartData(data) {
            return _super.call(this, data) || this;
        }
        CompanyChartData.prototype.init = function (data) {
            _super.prototype.init.call(this, data);
            if (data) {
                if (data["ruleSets"] && data["ruleSets"].constructor === Array) {
                    this.ruleSets = [];
                    for (var _i = 0, _a = data["ruleSets"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.ruleSets.push(StrategyRuleSetResult.fromJS(item));
                    }
                }
            }
        };
        CompanyChartData.fromJS = function (data) {
            var result = new CompanyChartData();
            result.init(data);
            return result;
        };
        CompanyChartData.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            if (this.ruleSets && this.ruleSets.constructor === Array) {
                data["ruleSets"] = [];
                for (var _i = 0, _a = this.ruleSets; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["ruleSets"].push(item.toJSON());
                }
            }
            _super.prototype.toJSON.call(this, data);
            return data;
        };
        return CompanyChartData;
    }(GlobalIndexChartData));
    exports.CompanyChartData = CompanyChartData;
    var StrategyRuleSetResult = (function () {
        function StrategyRuleSetResult(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        StrategyRuleSetResult.prototype.init = function (data) {
            if (data) {
                this.ruleSetId = data["ruleSetId"] !== undefined ? data["ruleSetId"] : null;
                this.name = data["name"] !== undefined ? data["name"] : null;
                this.progress = data["progress"] !== undefined ? data["progress"] : null;
                if (data["rules"] && data["rules"].constructor === Array) {
                    this.rules = [];
                    for (var _i = 0, _a = data["rules"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.rules.push(StrategyRuleResult.fromJS(item));
                    }
                }
            }
        };
        StrategyRuleSetResult.fromJS = function (data) {
            var result = new StrategyRuleSetResult();
            result.init(data);
            return result;
        };
        StrategyRuleSetResult.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["ruleSetId"] = this.ruleSetId !== undefined ? this.ruleSetId : null;
            data["name"] = this.name !== undefined ? this.name : null;
            data["progress"] = this.progress !== undefined ? this.progress : null;
            if (this.rules && this.rules.constructor === Array) {
                data["rules"] = [];
                for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["rules"].push(item.toJSON());
                }
            }
            return data;
        };
        return StrategyRuleSetResult;
    }());
    exports.StrategyRuleSetResult = StrategyRuleSetResult;
    var StrategyRuleResult = (function () {
        function StrategyRuleResult(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        StrategyRuleResult.prototype.init = function (data) {
            if (data) {
                this.condition = data["condition"] !== undefined ? data["condition"] : null;
                this.ruleSetId = data["ruleSetId"] !== undefined ? data["ruleSetId"] : null;
                this.ruleId = data["ruleId"] !== undefined ? data["ruleId"] : null;
                this.ruleName = data["ruleName"] !== undefined ? data["ruleName"] : null;
                this.ruleSetName = data["ruleSetName"] !== undefined ? data["ruleSetName"] : null;
                this.firstValue = data["firstValue"] !== undefined ? data["firstValue"] : null;
                this.secondValue = data["secondValue"] !== undefined ? data["secondValue"] : null;
                this.valid = data["valid"] !== undefined ? data["valid"] : null;
            }
        };
        StrategyRuleResult.fromJS = function (data) {
            var result = new StrategyRuleResult();
            result.init(data);
            return result;
        };
        StrategyRuleResult.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["condition"] = this.condition !== undefined ? this.condition : null;
            data["ruleSetId"] = this.ruleSetId !== undefined ? this.ruleSetId : null;
            data["ruleId"] = this.ruleId !== undefined ? this.ruleId : null;
            data["ruleName"] = this.ruleName !== undefined ? this.ruleName : null;
            data["ruleSetName"] = this.ruleSetName !== undefined ? this.ruleSetName : null;
            data["firstValue"] = this.firstValue !== undefined ? this.firstValue : null;
            data["secondValue"] = this.secondValue !== undefined ? this.secondValue : null;
            data["valid"] = this.valid !== undefined ? this.valid : null;
            return data;
        };
        return StrategyRuleResult;
    }());
    exports.StrategyRuleResult = StrategyRuleResult;
    var CompareOperator;
    (function (CompareOperator) {
        CompareOperator[CompareOperator["Greater"] = "Greater"] = "Greater";
        CompareOperator[CompareOperator["GreaterOrEqual"] = "GreaterOrEqual"] = "GreaterOrEqual";
        CompareOperator[CompareOperator["Equal"] = "Equal"] = "Equal";
        CompareOperator[CompareOperator["Less"] = "Less"] = "Less";
        CompareOperator[CompareOperator["LessOrEqual"] = "LessOrEqual"] = "LessOrEqual";
        CompareOperator[CompareOperator["NotEqual"] = "NotEqual"] = "NotEqual";
    })(CompareOperator = exports.CompareOperator || (exports.CompareOperator = {}));
    var ChartData = (function () {
        function ChartData(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        ChartData.prototype.init = function (data) {
            if (data) {
                if (data["quotes"] && data["quotes"].constructor === Array) {
                    this.quotes = [];
                    for (var _i = 0, _a = data["quotes"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.quotes.push(QuotesModel.fromJS(item));
                    }
                }
                if (data["indicators"] && data["indicators"].constructor === Array) {
                    this.indicators = [];
                    for (var _b = 0, _c = data["indicators"]; _b < _c.length; _b++) {
                        var item = _c[_b];
                        this.indicators.push(IndicatorChartData.fromJS(item));
                    }
                }
                this.period = data["period"] !== undefined ? data["period"] : null;
                this.name = data["name"] !== undefined ? data["name"] : null;
            }
        };
        ChartData.fromJS = function (data) {
            var result = new ChartData();
            result.init(data);
            return result;
        };
        ChartData.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            if (this.quotes && this.quotes.constructor === Array) {
                data["quotes"] = [];
                for (var _i = 0, _a = this.quotes; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["quotes"].push(item.toJSON());
                }
            }
            if (this.indicators && this.indicators.constructor === Array) {
                data["indicators"] = [];
                for (var _b = 0, _c = this.indicators; _b < _c.length; _b++) {
                    var item = _c[_b];
                    data["indicators"].push(item.toJSON());
                }
            }
            data["period"] = this.period !== undefined ? this.period : null;
            data["name"] = this.name !== undefined ? this.name : null;
            return data;
        };
        return ChartData;
    }());
    exports.ChartData = ChartData;
    var IndicatorChartData = (function () {
        function IndicatorChartData(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        IndicatorChartData.prototype.init = function (data) {
            if (data) {
                this.indicator = data["indicator"] ? IIndicatorEntity.fromJS(data["indicator"]) : null;
                if (data["indicatorValues"] && data["indicatorValues"].constructor === Array) {
                    this.indicatorValues = [];
                    for (var _i = 0, _a = data["indicatorValues"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.indicatorValues.push(IndicatorResult.fromJS(item));
                    }
                }
            }
        };
        IndicatorChartData.fromJS = function (data) {
            var result = new IndicatorChartData();
            result.init(data);
            return result;
        };
        IndicatorChartData.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["indicator"] = this.indicator ? this.indicator.toJSON() : null;
            if (this.indicatorValues && this.indicatorValues.constructor === Array) {
                data["indicatorValues"] = [];
                for (var _i = 0, _a = this.indicatorValues; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["indicatorValues"].push(item.toJSON());
                }
            }
            return data;
        };
        return IndicatorChartData;
    }());
    exports.IndicatorChartData = IndicatorChartData;
    var IIndicatorEntity = (function () {
        function IIndicatorEntity(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        IIndicatorEntity.prototype.init = function (data) {
            if (data) {
                this.indicatorId = data["indicatorId"] !== undefined ? data["indicatorId"] : null;
                this.period = data["period"] !== undefined ? data["period"] : null;
                if (data["params"] && data["params"].constructor === Array) {
                    this.params = [];
                    for (var _i = 0, _a = data["params"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.params.push(IndicatorParam.fromJS(item));
                    }
                }
                this.name = data["name"] !== undefined ? data["name"] : null;
                this.jsonParams = data["jsonParams"] !== undefined ? data["jsonParams"] : null;
                this.description = data["description"] !== undefined ? data["description"] : null;
            }
        };
        IIndicatorEntity.fromJS = function (data) {
            var result = new IIndicatorEntity();
            result.init(data);
            return result;
        };
        IIndicatorEntity.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["indicatorId"] = this.indicatorId !== undefined ? this.indicatorId : null;
            data["period"] = this.period !== undefined ? this.period : null;
            if (this.params && this.params.constructor === Array) {
                data["params"] = [];
                for (var _i = 0, _a = this.params; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["params"].push(item.toJSON());
                }
            }
            data["name"] = this.name !== undefined ? this.name : null;
            data["jsonParams"] = this.jsonParams !== undefined ? this.jsonParams : null;
            data["description"] = this.description !== undefined ? this.description : null;
            return data;
        };
        return IIndicatorEntity;
    }());
    exports.IIndicatorEntity = IIndicatorEntity;
    var IndicatorResult = (function () {
        function IndicatorResult(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        IndicatorResult.prototype.init = function (data) {
            if (data) {
                this.date = data["date"] ? new Date(data["date"].toString()) : null;
                if (data["values"] && data["values"].constructor === Array) {
                    this.values = [];
                    for (var _i = 0, _a = data["values"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.values.push(IndicatorValueItem.fromJS(item));
                    }
                }
            }
        };
        IndicatorResult.fromJS = function (data) {
            var result = new IndicatorResult();
            result.init(data);
            return result;
        };
        IndicatorResult.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["date"] = this.date ? this.date.toISOString() : null;
            if (this.values && this.values.constructor === Array) {
                data["values"] = [];
                for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["values"].push(item.toJSON());
                }
            }
            return data;
        };
        return IndicatorResult;
    }());
    exports.IndicatorResult = IndicatorResult;
    var IndicatorValueItem = (function () {
        function IndicatorValueItem(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        IndicatorValueItem.prototype.init = function (data) {
            if (data) {
                this.kind = data["kind"] !== undefined ? data["kind"] : null;
                this.name = data["name"] !== undefined ? data["name"] : null;
                this.value = data["value"] !== undefined ? data["value"] : null;
                this.lineColor = data["lineColor"] !== undefined ? data["lineColor"] : null;
                this.chartType = data["chartType"] !== undefined ? data["chartType"] : null;
            }
        };
        IndicatorValueItem.fromJS = function (data) {
            var result = new IndicatorValueItem();
            result.init(data);
            return result;
        };
        IndicatorValueItem.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["kind"] = this.kind !== undefined ? this.kind : null;
            data["name"] = this.name !== undefined ? this.name : null;
            data["value"] = this.value !== undefined ? this.value : null;
            data["lineColor"] = this.lineColor !== undefined ? this.lineColor : null;
            data["chartType"] = this.chartType !== undefined ? this.chartType : null;
            return data;
        };
        return IndicatorValueItem;
    }());
    exports.IndicatorValueItem = IndicatorValueItem;
    var ValueKind;
    (function (ValueKind) {
        ValueKind[ValueKind["Value"] = "Value"] = "Value";
        ValueKind[ValueKind["NewNigh"] = "NewNigh"] = "NewNigh";
        ValueKind[ValueKind["NewLow"] = "NewLow"] = "NewLow";
        ValueKind[ValueKind["UpperBand"] = "UpperBand"] = "UpperBand";
        ValueKind[ValueKind["LowerBand"] = "LowerBand"] = "LowerBand";
    })(ValueKind = exports.ValueKind || (exports.ValueKind = {}));
    var CompanyInfo = (function () {
        function CompanyInfo(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        CompanyInfo.prototype.init = function (data) {
            if (data) {
                this.ticker = data["ticker"] !== undefined ? data["ticker"] : null;
                this.name = data["name"] !== undefined ? data["name"] : null;
            }
        };
        CompanyInfo.fromJS = function (data) {
            var result = new CompanyInfo();
            result.init(data);
            return result;
        };
        CompanyInfo.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["ticker"] = this.ticker !== undefined ? this.ticker : null;
            data["name"] = this.name !== undefined ? this.name : null;
            return data;
        };
        return CompanyInfo;
    }());
    exports.CompanyInfo = CompanyInfo;
    var Rule = (function () {
        function Rule(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        Rule.prototype.init = function (data) {
            if (data) {
                this.ruleId = data["ruleId"] !== undefined ? data["ruleId"] : null;
                this.name = data["name"] !== undefined ? data["name"] : null;
                this.description = data["description"] !== undefined ? data["description"] : null;
                this.deleted = data["deleted"] !== undefined ? data["deleted"] : null;
                this.period = data["period"] !== undefined ? data["period"] : null;
                this.dataSourceV1 = data["dataSourceV1"] !== undefined ? data["dataSourceV1"] : null;
                this.dataSourceV2 = data["dataSourceV2"] !== undefined ? data["dataSourceV2"] : null;
                this.dataSeriesV1 = data["dataSeriesV1"] !== undefined ? data["dataSeriesV1"] : null;
                this.dataSeriesV2 = data["dataSeriesV2"] !== undefined ? data["dataSeriesV2"] : null;
                this.constV1 = data["constV1"] !== undefined ? data["constV1"] : null;
                this.constV2 = data["constV2"] !== undefined ? data["constV2"] : null;
                this.skipItemsV1 = data["skipItemsV1"] !== undefined ? data["skipItemsV1"] : null;
                this.skipItemsV2 = data["skipItemsV2"] !== undefined ? data["skipItemsV2"] : null;
                this.takeItemsV1 = data["takeItemsV1"] !== undefined ? data["takeItemsV1"] : null;
                this.takeItemsV2 = data["takeItemsV2"] !== undefined ? data["takeItemsV2"] : null;
                this.transformItemsV1 = data["transformItemsV1"] !== undefined ? data["transformItemsV1"] : null;
                this.transformItemsV2 = data["transformItemsV2"] !== undefined ? data["transformItemsV2"] : null;
                this.condition = data["condition"] !== undefined ? data["condition"] : null;
            }
        };
        Rule.fromJS = function (data) {
            var result = new Rule();
            result.init(data);
            return result;
        };
        Rule.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["ruleId"] = this.ruleId !== undefined ? this.ruleId : null;
            data["name"] = this.name !== undefined ? this.name : null;
            data["description"] = this.description !== undefined ? this.description : null;
            data["deleted"] = this.deleted !== undefined ? this.deleted : null;
            data["period"] = this.period !== undefined ? this.period : null;
            data["dataSourceV1"] = this.dataSourceV1 !== undefined ? this.dataSourceV1 : null;
            data["dataSourceV2"] = this.dataSourceV2 !== undefined ? this.dataSourceV2 : null;
            data["dataSeriesV1"] = this.dataSeriesV1 !== undefined ? this.dataSeriesV1 : null;
            data["dataSeriesV2"] = this.dataSeriesV2 !== undefined ? this.dataSeriesV2 : null;
            data["constV1"] = this.constV1 !== undefined ? this.constV1 : null;
            data["constV2"] = this.constV2 !== undefined ? this.constV2 : null;
            data["skipItemsV1"] = this.skipItemsV1 !== undefined ? this.skipItemsV1 : null;
            data["skipItemsV2"] = this.skipItemsV2 !== undefined ? this.skipItemsV2 : null;
            data["takeItemsV1"] = this.takeItemsV1 !== undefined ? this.takeItemsV1 : null;
            data["takeItemsV2"] = this.takeItemsV2 !== undefined ? this.takeItemsV2 : null;
            data["transformItemsV1"] = this.transformItemsV1 !== undefined ? this.transformItemsV1 : null;
            data["transformItemsV2"] = this.transformItemsV2 !== undefined ? this.transformItemsV2 : null;
            data["condition"] = this.condition !== undefined ? this.condition : null;
            return data;
        };
        return Rule;
    }());
    exports.Rule = Rule;
    var DataSourceType;
    (function (DataSourceType) {
        DataSourceType[DataSourceType["Indicator"] = "Indicator"] = "Indicator";
        DataSourceType[DataSourceType["HistoricalData"] = "HistoricalData"] = "HistoricalData";
        DataSourceType[DataSourceType["Constant"] = "Constant"] = "Constant";
    })(DataSourceType = exports.DataSourceType || (exports.DataSourceType = {}));
    var TransformFunction;
    (function (TransformFunction) {
        TransformFunction[TransformFunction["First"] = "First"] = "First";
        TransformFunction[TransformFunction["Max"] = "Max"] = "Max";
        TransformFunction[TransformFunction["Sum"] = "Sum"] = "Sum";
        TransformFunction[TransformFunction["Avg"] = "Avg"] = "Avg";
        TransformFunction[TransformFunction["Min"] = "Min"] = "Min";
    })(TransformFunction = exports.TransformFunction || (exports.TransformFunction = {}));
    var RuleSetModel = (function () {
        function RuleSetModel(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        RuleSetModel.prototype.init = function (data) {
            if (data) {
                if (data["rules"] && data["rules"].constructor === Array) {
                    this.rules = [];
                    for (var _i = 0, _a = data["rules"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.rules.push(RuleModel.fromJS(item));
                    }
                }
                this.period = data["period"] !== undefined ? data["period"] : null;
                this.ruleSetId = data["ruleSetId"] !== undefined ? data["ruleSetId"] : null;
                this.name = data["name"] !== undefined ? data["name"] : null;
                this.deleted = data["deleted"] !== undefined ? data["deleted"] : null;
                this.description = data["description"] !== undefined ? data["description"] : null;
            }
        };
        RuleSetModel.fromJS = function (data) {
            var result = new RuleSetModel();
            result.init(data);
            return result;
        };
        RuleSetModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            if (this.rules && this.rules.constructor === Array) {
                data["rules"] = [];
                for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["rules"].push(item.toJSON());
                }
            }
            data["period"] = this.period !== undefined ? this.period : null;
            data["ruleSetId"] = this.ruleSetId !== undefined ? this.ruleSetId : null;
            data["name"] = this.name !== undefined ? this.name : null;
            data["deleted"] = this.deleted !== undefined ? this.deleted : null;
            data["description"] = this.description !== undefined ? this.description : null;
            return data;
        };
        return RuleSetModel;
    }());
    exports.RuleSetModel = RuleSetModel;
    var RuleModel = (function () {
        function RuleModel(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        RuleModel.prototype.init = function (data) {
            if (data) {
                this.name = data["name"] !== undefined ? data["name"] : null;
                this.ruleId = data["ruleId"] !== undefined ? data["ruleId"] : null;
                this.ruleSetId = data["ruleSetId"] !== undefined ? data["ruleSetId"] : null;
                this.orderId = data["orderId"] !== undefined ? data["orderId"] : null;
                this.description = data["description"] !== undefined ? data["description"] : null;
                this.deleted = data["deleted"] !== undefined ? data["deleted"] : null;
            }
        };
        RuleModel.fromJS = function (data) {
            var result = new RuleModel();
            result.init(data);
            return result;
        };
        RuleModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["name"] = this.name !== undefined ? this.name : null;
            data["ruleId"] = this.ruleId !== undefined ? this.ruleId : null;
            data["ruleSetId"] = this.ruleSetId !== undefined ? this.ruleSetId : null;
            data["orderId"] = this.orderId !== undefined ? this.orderId : null;
            data["description"] = this.description !== undefined ? this.description : null;
            data["deleted"] = this.deleted !== undefined ? this.deleted : null;
            return data;
        };
        return RuleModel;
    }());
    exports.RuleModel = RuleModel;
    var VStrategyRuleSet = (function () {
        function VStrategyRuleSet(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        VStrategyRuleSet.prototype.init = function (data) {
            if (data) {
                this.strategyId = data["strategyId"] !== undefined ? data["strategyId"] : null;
                this.strategyActive = data["strategyActive"] !== undefined ? data["strategyActive"] : null;
                this.ruleSetId = data["ruleSetId"] !== undefined ? data["ruleSetId"] : null;
                this.ruleSetName = data["ruleSetName"] !== undefined ? data["ruleSetName"] : null;
                this.ruleSetDescription = data["ruleSetDescription"] !== undefined ? data["ruleSetDescription"] : null;
                this.ruleSetPeriod = data["ruleSetPeriod"] !== undefined ? data["ruleSetPeriod"] : null;
                this.ruleSetOrderId = data["ruleSetOrderId"] !== undefined ? data["ruleSetOrderId"] : null;
                this.ruleSetOptional = data["ruleSetOptional"] !== undefined ? data["ruleSetOptional"] : null;
            }
        };
        VStrategyRuleSet.fromJS = function (data) {
            var result = new VStrategyRuleSet();
            result.init(data);
            return result;
        };
        VStrategyRuleSet.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["strategyId"] = this.strategyId !== undefined ? this.strategyId : null;
            data["strategyActive"] = this.strategyActive !== undefined ? this.strategyActive : null;
            data["ruleSetId"] = this.ruleSetId !== undefined ? this.ruleSetId : null;
            data["ruleSetName"] = this.ruleSetName !== undefined ? this.ruleSetName : null;
            data["ruleSetDescription"] = this.ruleSetDescription !== undefined ? this.ruleSetDescription : null;
            data["ruleSetPeriod"] = this.ruleSetPeriod !== undefined ? this.ruleSetPeriod : null;
            data["ruleSetOrderId"] = this.ruleSetOrderId !== undefined ? this.ruleSetOrderId : null;
            data["ruleSetOptional"] = this.ruleSetOptional !== undefined ? this.ruleSetOptional : null;
            return data;
        };
        return VStrategyRuleSet;
    }());
    exports.VStrategyRuleSet = VStrategyRuleSet;
    var StrategySummary = (function () {
        function StrategySummary(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        StrategySummary.prototype.init = function (data) {
            if (data) {
                this.active = data["active"] !== undefined ? data["active"] : null;
                this.url = data["url"] !== undefined ? data["url"] : null;
                this.summary = data["summary"] !== undefined ? data["summary"] : null;
                this.strategyId = data["strategyId"] !== undefined ? data["strategyId"] : null;
                this.title = data["title"] !== undefined ? data["title"] : null;
            }
        };
        StrategySummary.fromJS = function (data) {
            var result = new StrategySummary();
            result.init(data);
            return result;
        };
        StrategySummary.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["active"] = this.active !== undefined ? this.active : null;
            data["url"] = this.url !== undefined ? this.url : null;
            data["summary"] = this.summary !== undefined ? this.summary : null;
            data["strategyId"] = this.strategyId !== undefined ? this.strategyId : null;
            data["title"] = this.title !== undefined ? this.title : null;
            return data;
        };
        return StrategySummary;
    }());
    exports.StrategySummary = StrategySummary;
    var StrategyModel = (function () {
        function StrategyModel(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        StrategyModel.prototype.init = function (data) {
            if (data) {
                if (data["ruleSets"] && data["ruleSets"].constructor === Array) {
                    this.ruleSets = [];
                    for (var _i = 0, _a = data["ruleSets"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.ruleSets.push(StrategyRuleSetModel.fromJS(item));
                    }
                }
                if (data["blocks"] && data["blocks"].constructor === Array) {
                    this.blocks = [];
                    for (var _b = 0, _c = data["blocks"]; _b < _c.length; _b++) {
                        var item = _c[_b];
                        this.blocks.push(item);
                    }
                }
                this.strategyId = data["strategyId"] !== undefined ? data["strategyId"] : null;
                this.title = data["title"] !== undefined ? data["title"] : null;
                this.deleted = data["deleted"] !== undefined ? data["deleted"] : null;
                this.summary = data["summary"] !== undefined ? data["summary"] : null;
                this.active = data["active"] !== undefined ? data["active"] : null;
                this.url = data["url"] !== undefined ? data["url"] : null;
            }
        };
        StrategyModel.fromJS = function (data) {
            var result = new StrategyModel();
            result.init(data);
            return result;
        };
        StrategyModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            if (this.ruleSets && this.ruleSets.constructor === Array) {
                data["ruleSets"] = [];
                for (var _i = 0, _a = this.ruleSets; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["ruleSets"].push(item.toJSON());
                }
            }
            if (this.blocks && this.blocks.constructor === Array) {
                data["blocks"] = [];
                for (var _b = 0, _c = this.blocks; _b < _c.length; _b++) {
                    var item = _c[_b];
                    data["blocks"].push(item);
                }
            }
            data["strategyId"] = this.strategyId !== undefined ? this.strategyId : null;
            data["title"] = this.title !== undefined ? this.title : null;
            data["deleted"] = this.deleted !== undefined ? this.deleted : null;
            data["summary"] = this.summary !== undefined ? this.summary : null;
            data["active"] = this.active !== undefined ? this.active : null;
            data["url"] = this.url !== undefined ? this.url : null;
            return data;
        };
        return StrategyModel;
    }());
    exports.StrategyModel = StrategyModel;
    var StrategyRuleSetModel = (function () {
        function StrategyRuleSetModel(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        StrategyRuleSetModel.prototype.init = function (data) {
            if (data) {
                if (data["rules"] && data["rules"].constructor === Array) {
                    this.rules = [];
                    for (var _i = 0, _a = data["rules"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.rules.push(StrategyRuleModel.fromJS(item));
                    }
                }
                this.description = data["description"] !== undefined ? data["description"] : null;
                this.name = data["name"] !== undefined ? data["name"] : null;
                this.optional = data["optional"] !== undefined ? data["optional"] : null;
                this.orderId = data["orderId"] !== undefined ? data["orderId"] : null;
                this.period = data["period"] !== undefined ? data["period"] : null;
                this.ruleSetId = data["ruleSetId"] !== undefined ? data["ruleSetId"] : null;
            }
        };
        StrategyRuleSetModel.fromJS = function (data) {
            var result = new StrategyRuleSetModel();
            result.init(data);
            return result;
        };
        StrategyRuleSetModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            if (this.rules && this.rules.constructor === Array) {
                data["rules"] = [];
                for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["rules"].push(item.toJSON());
                }
            }
            data["description"] = this.description !== undefined ? this.description : null;
            data["name"] = this.name !== undefined ? this.name : null;
            data["optional"] = this.optional !== undefined ? this.optional : null;
            data["orderId"] = this.orderId !== undefined ? this.orderId : null;
            data["period"] = this.period !== undefined ? this.period : null;
            data["ruleSetId"] = this.ruleSetId !== undefined ? this.ruleSetId : null;
            return data;
        };
        return StrategyRuleSetModel;
    }());
    exports.StrategyRuleSetModel = StrategyRuleSetModel;
    var StrategyRuleModel = (function () {
        function StrategyRuleModel(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        StrategyRuleModel.prototype.init = function (data) {
            if (data) {
            }
        };
        StrategyRuleModel.fromJS = function (data) {
            var result = new StrategyRuleModel();
            result.init(data);
            return result;
        };
        StrategyRuleModel.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            return data;
        };
        return StrategyRuleModel;
    }());
    exports.StrategyRuleModel = StrategyRuleModel;
    var Strategy = (function () {
        function Strategy(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        Strategy.prototype.init = function (data) {
            if (data) {
                this.strategyId = data["strategyId"] !== undefined ? data["strategyId"] : null;
                this.name = data["name"] !== undefined ? data["name"] : null;
                this.url = data["url"] !== undefined ? data["url"] : null;
                this.jsonArticleBlocks = data["jsonArticleBlocks"] !== undefined ? data["jsonArticleBlocks"] : null;
                this.description = data["description"] !== undefined ? data["description"] : null;
                this.deleted = data["deleted"] !== undefined ? data["deleted"] : null;
                this.active = data["active"] !== undefined ? data["active"] : null;
            }
        };
        Strategy.fromJS = function (data) {
            var result = new Strategy();
            result.init(data);
            return result;
        };
        Strategy.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["strategyId"] = this.strategyId !== undefined ? this.strategyId : null;
            data["name"] = this.name !== undefined ? this.name : null;
            data["url"] = this.url !== undefined ? this.url : null;
            data["jsonArticleBlocks"] = this.jsonArticleBlocks !== undefined ? this.jsonArticleBlocks : null;
            data["description"] = this.description !== undefined ? this.description : null;
            data["deleted"] = this.deleted !== undefined ? this.deleted : null;
            data["active"] = this.active !== undefined ? this.active : null;
            return data;
        };
        return Strategy;
    }());
    exports.Strategy = Strategy;
    var SwaggerException = (function (_super) {
        tslib_1.__extends(SwaggerException, _super);
        function SwaggerException(message, status, response, result) {
            var _this = _super.call(this) || this;
            _this.message = message;
            _this.status = status;
            _this.response = response;
            _this.result = result;
            return _this;
        }
        return SwaggerException;
    }(Error));
    exports.SwaggerException = SwaggerException;
    function throwException(message, status, response, result) {
        if (result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response, null);
    }
});

define('authorize-pipeline-step',["require", "exports", "tslib", "aurelia-framework", "aurelia-router", "./services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthorizePipelineStep = (function () {
        function AuthorizePipelineStep(account) {
            this.account = account;
            this.homePage = "/";
        }
        AuthorizePipelineStep.prototype.run = function (navigationInstruction, next) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.account.currentUser()];
                        case 1:
                            _a.user = _b.sent();
                            if (navigationInstruction.getAllInstructions().some(function (i) { return i.config.auth; })) {
                                if (this.user.isAuthenticated) {
                                    return [2, next()];
                                }
                                else {
                                    return [2, next.cancel(new aurelia_router_1.RedirectToRoute("user"))];
                                }
                            }
                            else {
                                if (navigationInstruction.getAllInstructions()
                                    .some(function (i) { return i.config.name === "user-login" && _this.user.isAuthenticated; })) {
                                    return [2, next.cancel(new aurelia_router_1.RedirectToRoute(this.homePage))];
                                }
                                return [2, next()];
                            }
                            return [2];
                    }
                });
            });
        };
        AuthorizePipelineStep = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [services_generated_1.AccountApiClient])
        ], AuthorizePipelineStep);
        return AuthorizePipelineStep;
    }());
    exports.AuthorizePipelineStep = AuthorizePipelineStep;
});

define('app',["require", "exports", "tslib", "aurelia-framework", "./authorize-pipeline-step"], function (require, exports, tslib_1, aurelia_framework_1, authorize_pipeline_step_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "Dream Space";
            config.options.pushState = true;
            this.router = router;
            config.addPipelineStep("authorize", authorize_pipeline_step_1.AuthorizePipelineStep);
            config.map([
                { route: ["user"], moduleId: "./components/user/navigation", name: "user", title: "Login", nav: false },
                { route: ["studies"], moduleId: "./components/studies/navigation", name: "studies", title: "Studies", nav: true },
                { route: ["journals"], moduleId: "./components/journal/navigation", name: "journals", title: "Journals", nav: true },
                { route: ["markets"], moduleId: "./components/market/navigation", name: "markets", title: "Markets", nav: true },
                { route: ["strategies"], moduleId: "./components/strategies/navigation", name: "strategies", title: "Strategies", nav: true, auth: true },
                { route: ["categories"], moduleId: "./components/categories/navigation", name: "categories", title: "Categories", nav: false },
                { route: "", redirect: "studies" }
            ]);
        };
        App = tslib_1.__decorate([
            aurelia_framework_1.autoinject
        ], App);
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var settings = {
        debug: true,
        testing: true
    };
    exports.default = settings;
});

define('common/types/enums',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChartType;
    (function (ChartType) {
        ChartType[ChartType["OHLC"] = 0] = "OHLC";
        ChartType[ChartType["Line"] = 1] = "Line";
        ChartType[ChartType["Column"] = 2] = "Column";
    })(ChartType = exports.ChartType || (exports.ChartType = {}));
    var Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
    })(Direction = exports.Direction || (exports.Direction = {}));
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

define('infrastructure/event-emitter',["require", "exports", "tslib", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        EventEmitter = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
        ], EventEmitter);
        return EventEmitter;
    }());
    exports.EventEmitter = EventEmitter;
});

define('infrastructure/error-interceptor',["require", "exports", "tslib", "aurelia-framework", "./event-emitter"], function (require, exports, tslib_1, aurelia_framework_1, event_emitter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        ErrorInterceptor.prototype.responseError = function (response, request) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var validationError;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(response.status === 400)) return [3, 2];
                            return [4, response.json()];
                        case 1:
                            validationError = (_a.sent()).message;
                            this.eventEmitter.publish("ValidationError", validationError);
                            return [2, Promise.reject(validationError)];
                        case 2:
                            if (response.status === 401) {
                                this.eventEmitter.publish("ServerError", { message: "401" });
                                return [2, Promise.reject(null)];
                            }
                            if (response.status === 403) {
                                this.eventEmitter.publish("ServerError", { message: "NotAuthorised" });
                                return [2, Promise.reject(null)];
                            }
                            if (response.status >= 500) {
                                this.eventEmitter.publish("ServerError", { message: "Unhandled" });
                                return [2, Promise.reject(null)];
                            }
                            if (request != null) { }
                            return [2, Promise.resolve(response)];
                    }
                });
            });
        };
        ErrorInterceptor = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [event_emitter_1.EventEmitter])
        ], ErrorInterceptor);
        return ErrorInterceptor;
    }());
    exports.ErrorInterceptor = ErrorInterceptor;
});

define('startup',["require", "exports", "tslib", "aurelia-fetch-client", "./infrastructure/error-interceptor"], function (require, exports, tslib_1, aurelia_fetch_client_1, error_interceptor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configureCommonStartup(aurelia, resourcePathResolver) {
        if (resourcePathResolver === void 0) { resourcePathResolver = function (path) { return path; }; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var errorInterceptor, httpClient;
            return tslib_1.__generator(this, function (_a) {
                errorInterceptor = aurelia.container.get(error_interceptor_1.ErrorInterceptor);
                httpClient = aurelia.container.get(aurelia_fetch_client_1.HttpClient);
                httpClient.configure(function (config) {
                    config
                        .useStandardConfiguration()
                        .withInterceptor(errorInterceptor);
                });
                aurelia.use
                    .standardConfiguration()
                    .plugin("aurelia-dialog", function (config) {
                    config.useDefaults();
                    config.settings.lock = false;
                    config.settings.keyboard = "Escape";
                })
                    .plugin("aurelia-validation")
                    .plugin("aurelia-bootstrap-datetimepicker", function (config) {
                    config.extra.withDateIcon = false;
                    config.options.format = "DD MMM YYYY";
                })
                    .feature(resourcePathResolver("resources"));
                return [2];
            });
        });
    }
    exports.configureCommonStartup = configureCommonStartup;
});

define('main',["require", "exports", "tslib", "./environment", "./startup"], function (require, exports, tslib_1, environment_1, startup_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startup_1.configureCommonStartup(aurelia);
                        if (environment_1.default.debug) {
                            aurelia.use.developmentLogging();
                        }
                        if (environment_1.default.testing) {
                            aurelia.use.plugin("aurelia-testing");
                        }
                        return [4, aurelia.start()];
                    case 1:
                        _a.sent();
                        return [4, aurelia.setRoot()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    }
    exports.configure = configure;
});

define('form-validation/bootstrap-form-renderer',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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

define('form-validation/custom-validation-rules',["require", "exports", "aurelia-validation", "moment"], function (require, exports, aurelia_validation_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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

define('services/account-service',["require", "exports", "tslib", "aurelia-framework", "./services-generated"], function (require, exports, tslib_1, aurelia_framework_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AccountService = (function () {
        function AccountService(account) {
            this.account = account;
        }
        AccountService.prototype.initialize = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.account.currentUser()];
                        case 1:
                            _a.currentUser = _b.sent();
                            return [2, this.currentUser];
                    }
                });
            });
        };
        AccountService.prototype.login = function (username, password) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var loginRequest, response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            loginRequest = new services_generated_1.LoginViewModel();
                            loginRequest.email = username;
                            loginRequest.password = password;
                            loginRequest.rememberMe = true;
                            return [4, this.account.login(loginRequest)];
                        case 1:
                            response = _a.sent();
                            this.currentUser = response.user;
                            return [2, response];
                    }
                });
            });
        };
        AccountService.prototype.logout = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.account.logout()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        AccountService.prototype.update = function (user) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.account.updateProfile(user)];
                        case 1:
                            response = _a.sent();
                            this.currentUser = response.user;
                            return [2, response];
                    }
                });
            });
        };
        AccountService = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [services_generated_1.AccountApiClient])
        ], AccountService);
        return AccountService;
    }());
    exports.AccountService = AccountService;
});

define('common/helpers/enum-helper',["require", "exports", "../types/enums", "../../services/services-generated"], function (require, exports, enums_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            var values = EnumHelper.getNamesAndValues(services_generated_1.QuotePeriod);
            var result = [];
            values.forEach(function (item) {
                result.push({ id: item.value, name: item.name });
            });
            return result;
        };
        EnumValues.getQuotePeriod = function (period) {
            var values = EnumHelper.getNamesAndValues(services_generated_1.QuotePeriod);
            var result = { id: values[0].value, name: values[0].name };
            values.forEach(function (item) {
                if (item.name.toLowerCase() === period.toLowerCase()) {
                    result = { id: item.value, name: item.name };
                }
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
        EnumValues.getDirectionTypes = function () {
            var values = EnumHelper.getNamesAndValues(services_generated_1.TradeDirection);
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

define('services/settings-service',["require", "exports", "tslib", "aurelia-framework", "../common/helpers/enum-helper", "./services-generated"], function (require, exports, tslib_1, aurelia_framework_1, enum_helper_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SettingsService = (function () {
        function SettingsService(indicatorService, articleService) {
            this.indicatorService = indicatorService;
            this.articleService = articleService;
            this.sections = [];
            this.initialized = false;
            this.homePage = "studies";
            this.indicators = [];
            this.periods = enum_helper_1.EnumValues.getQuotePeriods();
            this.defaultPeriod = this.periods[0];
            if (this.indicatorService && this.articleService) { }
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
                var _a, _b;
                return tslib_1.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = this;
                            return [4, this.articleService.getSections()];
                        case 1:
                            _a.sections = _c.sent();
                            _b = this;
                            return [4, this.indicatorService.getIndicators()];
                        case 2:
                            _b.indicators = _c.sent();
                            this.initialized = true;
                            return [2];
                    }
                });
            });
        };
        SettingsService.prototype.getIndicators = function (period) {
            return this.indicators.filter(function (indicator) { return indicator.period === period; });
        };
        SettingsService = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [services_generated_1.IndicatorsApiClient, services_generated_1.ArticlesApiClient])
        ], SettingsService);
        return SettingsService;
    }());
    exports.SettingsService = SettingsService;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        config.globalResources(["./elements/chart/chart-layout"]);
        config.globalResources(["./elements/progress/s-progress"]);
        config.globalResources(["./attributes/first-letter-span"]);
        config.globalResources(["./elements/navigation/side-nav"]);
        config.globalResources(["./elements/navigation/sub-nav"]);
    }
    exports.configure = configure;
});

define('common/helpers/date-helper',["require", "exports", "moment"], function (require, exports, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateHelper = (function () {
        function DateHelper() {
        }
        DateHelper.getUIDate = function (date) {
            return moment(date).format("D-MMM-YYYY  HH:mm");
        };
        DateHelper.runTime = function (fromDate, toDate) {
            var result = null;
            if (fromDate != null && toDate != null) {
                var diff = moment(toDate).diff(moment(fromDate));
                var duration = moment.duration(diff);
                var seconds = duration.asSeconds();
                result = this.secondsToTime(seconds);
            }
            return result;
        };
        DateHelper.secondsToTime = function (secs) {
            secs = Math.round(secs);
            var hours = Math.floor(secs / (60 * 60));
            var divisorForMinutes = secs % (60 * 60);
            var minutes = Math.floor(divisorForMinutes / 60);
            var divisorForSeconds = divisorForMinutes % 60;
            var seconds = Math.ceil(divisorForSeconds);
            if (hours > 0) {
                return hours + "h " + minutes + "m";
            }
            if (minutes > 0) {
                return minutes + "m " + seconds + "s";
            }
            return seconds + "s";
        };
        return DateHelper;
    }());
    exports.DateHelper = DateHelper;
});

define('common/types/job-models',["require", "exports", "../../services/services-generated"], function (require, exports, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JobInfoExtentions = (function () {
        function JobInfoExtentions() {
        }
        JobInfoExtentions.getJobStatusName = function (status) {
            switch (status) {
                case services_generated_1.JobStatus.Cancelled: return "Cancelled";
                case services_generated_1.JobStatus.Completed: return "Completed";
                case services_generated_1.JobStatus.Error: return "Error";
                case services_generated_1.JobStatus.InProgress: return "In Progress";
                case services_generated_1.JobStatus.Paused: return "Paused";
                case services_generated_1.JobStatus.Pending: return "In Progress";
                default: return status + "";
            }
        };
        JobInfoExtentions.getJobTypeName = function (jobType) {
            switch (jobType) {
                case services_generated_1.ScheduledJobType.All: return "All";
                case services_generated_1.ScheduledJobType.CalculateGlobalIndicators: return "Calculate Global Indicators";
                case services_generated_1.ScheduledJobType.RefreshAllStocks: return "Refresh All Stocks";
                case services_generated_1.ScheduledJobType.RefreshSP500Stocks: return "Refresh S&P 500 Stocks";
                case services_generated_1.ScheduledJobType.RefreshIndices: return "Refresh Indices";
                default: return jobType + "";
            }
        };
        JobInfoExtentions.isJobInProgress = function (job) {
            if (job && job.jobId > 0) {
                return job.status === services_generated_1.JobStatus.InProgress
                    || job.status === services_generated_1.JobStatus.Pending;
            }
            return false;
        };
        JobInfoExtentions.isJobPaused = function (job) {
            if (job && job.jobId > 0) {
                return job.status === services_generated_1.JobStatus.Paused;
            }
            return false;
        };
        JobInfoExtentions.getJobType = function (jobUrl) {
            switch (jobUrl) {
                case "recalculate-global-indicators":
                    return services_generated_1.ScheduledJobType.CalculateGlobalIndicators;
                case "refresh-sp500-stocks":
                    return services_generated_1.ScheduledJobType.RefreshSP500Stocks;
                case "refresh-all-stocks":
                    return services_generated_1.ScheduledJobType.RefreshAllStocks;
                case "refresh-indices":
                    return services_generated_1.ScheduledJobType.RefreshIndices;
                default:
                    return 0;
            }
        };
        return JobInfoExtentions;
    }());
    exports.JobInfoExtentions = JobInfoExtentions;
});

define('components/footer/dream-footer',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DreamFooter = (function () {
        function DreamFooter() {
        }
        return DreamFooter;
    }());
    exports.DreamFooter = DreamFooter;
});

define('dialogs/login/user-login',["require", "exports", "tslib", "aurelia-framework", "aurelia-dialog", "aurelia-validation", "../../form-validation/bootstrap-form-renderer", "aurelia-binding", "../../services/account-service", "../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_dialog_1, aurelia_validation_1, bootstrap_form_renderer_1, aurelia_binding_1, account_service_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            this.subscriptions.push(this.bindingEngine.propertyObserver(this.model, "email").subscribe(function () { return _this.onChange(); }));
            this.subscriptions.push(this.bindingEngine.propertyObserver(this.model, "password").subscribe(function () { return _this.onChange(); }));
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
                .ensure(function (m) { return m.email; }).displayName("Email").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (m) { return m.password; }).displayName("Password").required().withMessage("${$displayName} cannot be blank.")
                .on(this.model);
        };
        UserLogin.prototype.tryLogin = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.validation.validate()];
                        case 1:
                            if (!(_a.sent()).valid) return [3, 3];
                            return [4, this.account.login(this.model.email, this.model.password)];
                        case 2:
                            response = _a.sent();
                            if (response.status === services_generated_1.LoginStatus.Success) {
                                this.controller.ok(this.model);
                            }
                            else {
                                this.loginFailed = true;
                            }
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        UserLogin = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [aurelia_dialog_1.DialogController, aurelia_validation_1.ValidationController, account_service_1.AccountService, aurelia_binding_1.BindingEngine])
        ], UserLogin);
        return UserLogin;
    }());
    exports.UserLogin = UserLogin;
    var UserLoginModel = (function () {
        function UserLoginModel() {
        }
        return UserLoginModel;
    }());
    exports.UserLoginModel = UserLoginModel;
});

define('components/header/dream-header',["require", "exports", "tslib", "aurelia-framework", "aurelia-router", "aurelia-dialog", "../../dialogs/login/user-login", "../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1, aurelia_dialog_1, user_login_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DreamHeader = (function () {
        function DreamHeader(account, dialogService) {
            this.account = account;
            this.dialogService = dialogService;
        }
        DreamHeader.prototype.attached = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.account.currentUser()];
                        case 1:
                            _a.user = _b.sent();
                            this.loginUrl = this.router.generate("user") + "/profile";
                            return [2];
                    }
                });
            });
        };
        DreamHeader.prototype.logout = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.account.logout()];
                        case 1:
                            _a.sent();
                            window.location.href = "/";
                            return [2];
                    }
                });
            });
        };
        DreamHeader.prototype.login = function () {
            var model = new user_login_1.UserLoginModel();
            this.dialogService.open({ viewModel: user_login_1.UserLogin, model: model }).whenClosed(function (response) {
                if (!response.wasCancelled) {
                    window.location.reload();
                }
            });
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", aurelia_router_1.Router)
        ], DreamHeader.prototype, "router", void 0);
        DreamHeader = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [services_generated_1.AccountApiClient,
                aurelia_dialog_1.DialogService])
        ], DreamHeader);
        return DreamHeader;
    }());
    exports.DreamHeader = DreamHeader;
});

define('components/journal/navigation',["require", "exports", "tslib", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Navigation = (function () {
        function Navigation(eventAggregator) {
            this.eventAggregator = eventAggregator;
            this.url = "";
        }
        Navigation.prototype.configureRouter = function (config, router) {
            config.title = "Journal";
            config.map([
                { route: ["", ":period"], moduleId: "./journals/journals", name: "journals", title: "Journals", nav: true },
                { route: ["create"], moduleId: "./journals/journal-create/journal-create", name: "create-journal", title: "Create Journal", nav: true },
                { route: ["journal/:id"], moduleId: "./journals/journal/journal", name: "view-journal", title: "View Journal", nav: false },
                { route: ["journal/:id/edit"], moduleId: "./journals/journal/journal", name: "edit-journal", title: "Edit Journal", nav: false }
            ]);
            this.router = router;
            this.section = config.title;
        };
        Navigation.prototype.attached = function () {
            this.eventAggregator.publish("this.journalChangedEvent", this.url);
        };
        Navigation = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
        ], Navigation);
        return Navigation;
    }());
    exports.Navigation = Navigation;
});

define('components/main-nav/main-nav',["require", "exports", "tslib", "aurelia-framework", "aurelia-router"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MainNav = (function () {
        function MainNav() {
            this.router = null;
        }
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", aurelia_router_1.Router)
        ], MainNav.prototype, "router", void 0);
        return MainNav;
    }());
    exports.MainNav = MainNav;
});

define('components/market/navigation',["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Navigation = (function () {
        function Navigation() {
        }
        Navigation.prototype.configureRouter = function (config, router) {
            config.title = "Global Markets";
            config.map([
                { route: ["indices"], moduleId: "./market-indices/navigation", name: "market-indices", title: "Market Indices", nav: true },
                { route: ["jobs"], moduleId: "./jobs-dashboard/navigation", name: "jobs-dashboard", title: "Jobs Dashboard", nav: true },
                { route: ["layouts"], moduleId: "./chart-layouts/navigation", name: "chart-layouts", title: "Chart Layouts", nav: true },
                { route: "", redirect: "indices" }
            ]);
            this.router = router;
            this.section = config.title;
        };
        Navigation = tslib_1.__decorate([
            aurelia_framework_1.autoinject
        ], Navigation);
        return Navigation;
    }());
    exports.Navigation = Navigation;
});

define('components/strategies/navigation',["require", "exports", "tslib", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        Navigation = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
        ], Navigation);
        return Navigation;
    }());
    exports.Navigation = Navigation;
});

define('components/strategies/strategy-playground',["require", "exports", "tslib", "toastr", "aurelia-framework", "../../services/settings-service", "../../services/services-generated"], function (require, exports, tslib_1, toastr, aurelia_framework_1, settings_service_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                            if (!params.strategyUrl) return [3, 9];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 8, , 9]);
                            return [4, this.strategyService.getStrategySummaryByUrl(params.strategyUrl)];
                        case 2:
                            response = _a.sent();
                            if (!(response && response.strategyId > 0)) return [3, 6];
                            this.strategy = response;
                            if (!params.ticker) return [3, 5];
                            return [4, this.companyService.getCompany(params.ticker)];
                        case 3:
                            company = _a.sent();
                            if (!(company && company.ticker)) return [3, 5];
                            this.company = company;
                            return [4, this.loadPlayground()];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5: return [3, 7];
                        case 6:
                            toastr.error("Failed to load summary for url " + params.strategyUrl, "Load Summary Failed");
                            _a.label = 7;
                        case 7: return [3, 9];
                        case 8:
                            e_1 = _a.sent();
                            toastr.error("Failed to load summary for url " + params.strategyUrl, "Exception");
                            return [3, 9];
                        case 9: return [2];
                    }
                });
            });
        };
        StrategyPlayground.prototype.searchCompanies = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var request, _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            request = new services_generated_1.CompanySearchRequest();
                            request.ticker = this.searchCriteria;
                            request.maxCount = 15;
                            _a = this;
                            return [4, this.companyService.search(request)];
                        case 1:
                            _a.companies = _b.sent();
                            return [2];
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
                            return [4, this.stockService.updateQuotes(ticker)];
                        case 1:
                            _b.sent();
                            _a = this;
                            return [4, this.companyService.getCompany(ticker)];
                        case 2:
                            _a.company = _b.sent();
                            return [3, 4];
                        case 3:
                            e_2 = _b.sent();
                            toastr.error("Failed to load company for ticker " + ticker, "Exception");
                            return [3, 4];
                        case 4: return [2];
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
                            return [4, this.loadNext().then(function (data) {
                                    var flag = data;
                                    setTimeout(function () {
                                        if (self.streaming && flag) {
                                            self.streamData();
                                        }
                                    }, 500);
                                })];
                        case 1:
                            _a.sent();
                            return [2];
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
                            return [4, this.playgroundService.loadPlayground(this.company.ticker, this.strategy.strategyId, 100, 0)];
                        case 1:
                            playground = _a.sent();
                            if (playground && playground.company) {
                                this.playgroundLoaded = true;
                                this.playgroundModel = playground;
                            }
                            else {
                                toastr.error("Failed to load playground for company " + this.company.name, "Load Playground Failed");
                            }
                            return [3, 3];
                        case 2:
                            e_3 = _a.sent();
                            toastr.error("Failed to load playground", "Exception");
                            return [3, 3];
                        case 3: return [2];
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
                            return [4, this.playgroundService.next(this.company.ticker, this.strategy.strategyId)];
                        case 1:
                            playground = _a.sent();
                            if (playground && playground.company) {
                                this.playgroundModel = playground;
                            }
                            return [3, 3];
                        case 2:
                            e_4 = _a.sent();
                            toastr.error("Failed to load next playground", "Exception");
                            return [3, 3];
                        case 3: return [2];
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
                            return [4, this.playgroundService.prev(this.company.ticker, this.strategy.strategyId)];
                        case 1:
                            playground = _a.sent();
                            if (playground && playground.company) {
                                this.playgroundModel = playground;
                            }
                            return [3, 3];
                        case 2:
                            e_5 = _a.sent();
                            toastr.error("Failed to load previous playground", "Exception");
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            });
        };
        StrategyPlayground = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [services_generated_1.StrategiesApiClient,
                services_generated_1.CompaniesApiClient,
                services_generated_1.StockApiClient,
                services_generated_1.PlaygroundApiClient,
                settings_service_1.SettingsService])
        ], StrategyPlayground);
        return StrategyPlayground;
    }());
    exports.StrategyPlayground = StrategyPlayground;
});

define('components/strategies/strategy-rule-sets',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-event-aggregator", "../../services/settings-service", "../../services/services-generated"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_event_aggregator_1, settings_service_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                            if (!params.strategyUrl) return [3, 7];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 6, , 7]);
                            return [4, this.strategyService.getStrategySummaryByUrl(params.strategyUrl)];
                        case 2:
                            strategy = _a.sent();
                            if (!(strategy && strategy.strategyId)) return [3, 4];
                            this.strategy = strategy;
                            return [4, this.loadRuleSets(this.strategy.strategyId)];
                        case 3:
                            _a.sent();
                            return [3, 5];
                        case 4:
                            toastr.error("Failed to load summary for url " + params.strategyUrl, "Load Summary Failed");
                            _a.label = 5;
                        case 5: return [3, 7];
                        case 6:
                            e_1 = _a.sent();
                            toastr.error("Failed to load summary for url " + params.strategyUrl, "Exception");
                            return [3, 7];
                        case 7: return [2];
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
                            return [4, this.ruleSetService.getStrategyRuleSets(strategyId)];
                        case 1:
                            _a.rulesets = _b.sent();
                            return [2];
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
                    if (item.ruleSetId) {
                    }
                });
            }
        };
        StrategyRuleSets.prototype.addRuleSet = function () {
            this.attachedRuleSet = new services_generated_1.RuleSetModel();
            this.attachedRuleSet.ruleSetId = 0;
            this.attachedRuleSet.period = -1;
            this.attachedRuleSet.description = "";
            this.attachedRuleSet.name = "";
            this.addingMode = true;
        };
        StrategyRuleSets.prototype.cancelAddRuleSet = function () {
            this.addingMode = false;
        };
        StrategyRuleSets.prototype.onPeriodSelected = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.ruleSetService.getRuleSets(this.attachedRuleSet.period)];
                        case 1:
                            _a.periodRuleSets = _b.sent();
                            return [2];
                    }
                });
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
            var ruleset = new services_generated_1.VStrategyRuleSet();
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
                            if (!(this.rulesets && this.rulesets.length > 0)) return [3, 2];
                            return [4, this.saveRuleSets()];
                        case 1:
                            _a.sent();
                            return [3, 3];
                        case 2:
                            toastr.warning("At least 1 rule set must be attached", "Validation Error");
                            _a.label = 3;
                        case 3: return [2];
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
                            return [4, this.ruleSetService.saveStrategyRuleSets(this.strategy.strategyId, this.rulesets)];
                        case 2:
                            _a.sent();
                            this.setEditMode(false);
                            toastr.success("Rule Sets are successfully saved", "Rule Sets Attached");
                            return [3, 4];
                        case 3:
                            e_2 = _a.sent();
                            toastr.error("Rule Sets failed to save", "Exception");
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            });
        };
        StrategyRuleSets = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator,
                services_generated_1.StrategiesApiClient,
                services_generated_1.RuleSetsApiClient,
                settings_service_1.SettingsService])
        ], StrategyRuleSets);
        return StrategyRuleSets;
    }());
    exports.StrategyRuleSets = StrategyRuleSets;
});

define('components/strategies/strategy',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-event-aggregator", "aurelia-validation", "../../form-validation/bootstrap-form-renderer", "../../services/account-service", "../../services/services-generated"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_event_aggregator_1, aurelia_validation_1, bootstrap_form_renderer_1, account_service_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                            return [4, this.strategyService.geStrategySummaries()];
                        case 1:
                            _a.summaries = _b.sent();
                            return [4, this.loadStrategy(params.strategyUrl)];
                        case 2:
                            _b.sent();
                            return [2];
                    }
                });
            });
        };
        Strategy.prototype.addStrategy = function () {
            this.strategy = new services_generated_1.StrategyModel();
            this.startEdit();
            this.validation.validate();
        };
        Strategy.prototype.deleteStrategy = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var e_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.strategy && this.strategy.strategyId > 0)) return [3, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, this.strategyService.deleteStrategy(this.strategy.strategyId)];
                        case 2:
                            _a.sent();
                            toastr.success("Strategy deleted successfully", "Strategy Deleted");
                            this.setEditMode(false);
                            this.router.navigate("/strategies");
                            return [3, 4];
                        case 3:
                            e_1 = _a.sent();
                            toastr.error("Failed to delete strategy", "Delete Failed");
                            return [3, 4];
                        case 4: return [2];
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
                            if (!(url && url.length > 0)) return [3, 5];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            _a = this;
                            return [4, this.strategyService.getStrategyByUrl(url)];
                        case 2:
                            _a.strategy = _b.sent();
                            if (!this.strategy.blocks) {
                                this.strategy.blocks = [];
                            }
                            this.selectActiveSummary(this.strategy.strategyId);
                            return [3, 4];
                        case 3:
                            e_2 = _b.sent();
                            toastr.error("Failed to load strategy", "Load Failed");
                            return [3, 4];
                        case 4: return [3, 6];
                        case 5:
                            this.navigateToDefaultStrategy();
                            _b.label = 6;
                        case 6: return [2];
                    }
                });
            });
        };
        Strategy.prototype.selectActiveSummary = function (id) {
            this.summaries.forEach(function (item) {
                if (item.strategyId === id) {
                }
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
                this.editMode = false;
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
                            return [4, this.validation.validate()];
                        case 1:
                            response = _a.sent();
                            if (response.valid) {
                                if (this.articlePartsValidate()) {
                                    valid = true;
                                }
                            }
                            if (!valid) return [3, 3];
                            return [4, this.saveStrategy()];
                        case 2:
                            _a.sent();
                            return [3, 4];
                        case 3:
                            toastr.warning("Please correct validation errors.", "Validation Errors");
                            _a.label = 4;
                        case 4: return [2];
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
                            return [4, this.strategyService.saveStrategy(this.strategy)];
                        case 2:
                            response = _a.sent();
                            if (response.url.length > 0) {
                                toastr.success("Strategy staved successfully!", 'Strategy saved');
                                this.navigateToStrategy(response.url);
                            }
                            return [3, 4];
                        case 3:
                            e_3 = _a.sent();
                            toastr.error("Failed to save strategy!", "Application Error");
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            });
        };
        Strategy = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator,
                services_generated_1.StrategiesApiClient,
                account_service_1.AccountService,
                aurelia_validation_1.ValidationController])
        ], Strategy);
        return Strategy;
    }());
    exports.Strategy = Strategy;
});

define('components/studies/navigation',["require", "exports", "tslib", "aurelia-framework", "../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Navigation = (function () {
        function Navigation(articleService) {
            this.articleService = articleService;
        }
        Navigation.prototype.configureRouter = function (config, router) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var routes, section, categories;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            config.title = "Studies";
                            routes = [];
                            return [4, this.articleService.getSection("studies")];
                        case 1:
                            section = _a.sent();
                            if (!section) return [3, 3];
                            return [4, this.articleService.getCategories(section.sectionId)];
                        case 2:
                            categories = _a.sent();
                            if (categories && categories.length > 0) {
                                categories.forEach(function (category) {
                                    routes.push({
                                        route: [category.url, category.url + "/:articleUrl"],
                                        moduleId: "./study/study",
                                        name: category.url,
                                        title: category.title,
                                        nav: true
                                    });
                                });
                            }
                            _a.label = 3;
                        case 3:
                            routes.push({ route: [""], moduleId: "./study/study", name: "study" });
                            routes.push({ route: ["categories"], moduleId: "./categories/categories", name: "categories", title: "Manage categories" });
                            config.map(routes);
                            this.router = router;
                            return [2];
                    }
                });
            });
        };
        Navigation = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [services_generated_1.ArticlesApiClient])
        ], Navigation);
        return Navigation;
    }());
    exports.Navigation = Navigation;
});

define('components/sub-nav/sub-nav',["require", "exports", "tslib", "aurelia-framework", "aurelia-router"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SubNav = (function () {
        function SubNav() {
        }
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", aurelia_router_1.Router)
        ], SubNav.prototype, "router", void 0);
        return SubNav;
    }());
    exports.SubNav = SubNav;
});

define('components/user/login',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Login = (function () {
        function Login() {
        }
        return Login;
    }());
    exports.Login = Login;
});

define('components/user/navigation',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Navigation = (function () {
        function Navigation() {
        }
        Navigation.prototype.configureRouter = function (config, router) {
            config.title = "Login";
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
    Object.defineProperty(exports, "__esModule", { value: true });
    var Profile = (function () {
        function Profile() {
        }
        return Profile;
    }());
    exports.Profile = Profile;
});

define('resources/attributes/first-letter-span',["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        FirstLetterSpan = tslib_1.__decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customAttribute('first-letter-span'),
            tslib_1.__metadata("design:paramtypes", [Element])
        ], FirstLetterSpan);
        return FirstLetterSpan;
    }());
    exports.FirstLetterSpan = FirstLetterSpan;
});

define('resources/value-converters/blob-to-url',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    Object.defineProperty(exports, "__esModule", { value: true });
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

define('components/journal/journals/journals',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Journals = (function () {
        function Journals() {
        }
        return Journals;
    }());
    exports.Journals = Journals;
});

define('components/market/chart-layouts/navigation',["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Navigation = (function () {
        function Navigation() {
        }
        Navigation.prototype.configureRouter = function (config, router) {
            config.title = "Chart Layouts";
            config.map([
                { route: ["weekly"], moduleId: "./layouts/chart-layouts", name: "Weekly", title: "Weekly Chart Layouts", nav: true },
                { route: ["daily"], moduleId: "./layouts/chart-layouts", name: "Daily", title: "Daily Chart Layouts", nav: true },
                { route: "", redirect: "weekly" }
            ]);
            this.router = router;
        };
        Navigation = tslib_1.__decorate([
            aurelia_framework_1.autoinject
        ], Navigation);
        return Navigation;
    }());
    exports.Navigation = Navigation;
});

define('components/market/jobs-dashboard/navigation',["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Navigation = (function () {
        function Navigation() {
        }
        Navigation.prototype.configureRouter = function (config, router) {
            config.title = "Jobs";
            config.map([
                { route: ["recalculate-global-indicators"], moduleId: "./jobs/job", name: "recalculate-global-indicators", title: "Recalculate Global Indicators", nav: true },
                { route: ["refresh-sp500-stocks"], moduleId: "./jobs/job", name: "refresh-sp500-stocks", title: "Refresh SP500 Stocks", nav: true },
                { route: ["refresh-all-stocks"], moduleId: "./jobs/job", name: "refresh-all-stocks", title: "Refresh All Stocks", nav: true },
                { route: ["refresh-indices"], moduleId: "./jobs/job", name: "refresh-indices", title: "Refresh Indices", nav: true },
                { route: "", redirect: "recalculate-global-indicators" }
            ]);
            this.router = router;
        };
        Navigation = tslib_1.__decorate([
            aurelia_framework_1.autoinject
        ], Navigation);
        return Navigation;
    }());
    exports.Navigation = Navigation;
});

define('components/market/market-indices/navigation',["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Navigation = (function () {
        function Navigation() {
        }
        Navigation.prototype.configureRouter = function (config, router) {
            config.title = "Market Indices";
            config.map([
                { route: ["sp500"], moduleId: "./indices/market-index", name: "^GSPC", title: "S&P 500 Index", nav: true },
                { route: ["ftse100"], moduleId: "./indices/market-index", name: "^FTSE", title: "FTSE 100", nav: true },
                { route: ["dow-jones"], moduleId: "./indices/market-index", name: "^DJI", title: "Dow Jones Industrial", nav: true },
                { route: ["nasdaq"], moduleId: "./indices/market-index", name: "^IXIC", title: "NASDAQ Composite", nav: true },
                { route: ["nyse"], moduleId: "./indices/market-index", name: "^NYA", title: "NYSE Composite", nav: true },
                { route: "", redirect: "sp500" }
            ]);
            this.router = router;
        };
        Navigation = tslib_1.__decorate([
            aurelia_framework_1.autoinject
        ], Navigation);
        return Navigation;
    }());
    exports.Navigation = Navigation;
});

define('components/strategies/indicators/indicators',["require", "exports", "tslib", "aurelia-framework", "../../../services/settings-service", "../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, settings_service_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            var indicator = new services_generated_1.Indicator();
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
                            return [4, this.indicatorService.getIndicatorsAll(periodId)];
                        case 1:
                            _a.indicators = _b.sent();
                            return [2];
                    }
                });
            });
        };
        Indicators = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [services_generated_1.IndicatorsApiClient, settings_service_1.SettingsService])
        ], Indicators);
        return Indicators;
    }());
    exports.Indicators = Indicators;
});

define('components/strategies/rules/rule-sets',["require", "exports", "tslib", "aurelia-framework", "../../../services/settings-service", "../../../services/account-service", "../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, settings_service_1, account_service_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                var defaultUrl = "/strategies/rule-sets/" + this.activePeriod.name.toLowerCase();
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
            var ruleset = new services_generated_1.RuleSetModel();
            ruleset.name = "New Rule set";
            ruleset.period = this.activePeriod.id;
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
                            return [4, this.ruleSetService.getRuleSets(periodId)];
                        case 1:
                            _a.rulesets = _b.sent();
                            return [2];
                    }
                });
            });
        };
        RuleSets = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [services_generated_1.RuleSetsApiClient,
                settings_service_1.SettingsService,
                account_service_1.AccountService])
        ], RuleSets);
        return RuleSets;
    }());
    exports.RuleSets = RuleSets;
});

define('components/strategies/rules/rules',["require", "exports", "tslib", "aurelia-framework", "../../../services/settings-service", "../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, settings_service_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                var defaultUrl = "/strategies/rules/" + this.activePeriod.name.toLowerCase();
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
            var rule = new services_generated_1.Rule();
            rule.name = "New Rule";
            rule.period = this.activePeriod.id;
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
                            return [4, this.ruleService.getRules(periodId)];
                        case 1:
                            _a.rules = _b.sent();
                            return [2];
                    }
                });
            });
        };
        Rules = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [services_generated_1.RulesApiClient, settings_service_1.SettingsService])
        ], Rules);
        return Rules;
    }());
    exports.Rules = Rules;
});

define('components/studies/categories/categories',["require", "exports", "tslib", "aurelia-framework", "aurelia-validation", "../../../form-validation/bootstrap-form-renderer", "../../../services/settings-service", "../../../services/account-service", "../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_validation_1, Bootstrapformrenderer, settings_service_1, account_service_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                            if (!(this.sectionId > 0)) return [3, 2];
                            this.section = this.settings.getSection(this.sectionId);
                            _a = this;
                            return [4, this.articleService.getCategories(this.sectionId)];
                        case 1:
                            _a.categories = _b.sent();
                            _b.label = 2;
                        case 2: return [2];
                    }
                });
            });
        };
        Categories.prototype.getSectionUrl = function (section) {
            return "/categories/" + section.SectionId;
        };
        Categories = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [services_generated_1.ArticlesApiClient,
                settings_service_1.SettingsService,
                account_service_1.AccountService,
                aurelia_validation_1.ValidationController])
        ], Categories);
        return Categories;
    }());
    exports.Categories = Categories;
});

define('components/studies/study/study',["require", "exports", "tslib", "aurelia-framework", "../navigation", "aurelia-validation", "../../../form-validation/bootstrap-form-renderer", "../../../services/services-generated", "../../../infrastructure/event-emitter"], function (require, exports, tslib_1, aurelia_framework_1, navigation_1, aurelia_validation_1, bootstrap_form_renderer_1, services_generated_1, event_emitter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Study = (function () {
        function Study(eventEmitter, articleService, navigation, validation) {
            var _this = this;
            this.eventEmitter = eventEmitter;
            this.articleService = articleService;
            this.navigation = navigation;
            this.validation = validation;
            this.subscriptions = [];
            this.validation.validateTrigger = aurelia_validation_1.validateTrigger.change;
            this.validation.addRenderer(new bootstrap_form_renderer_1.BootstrapFormRenderer());
            this.subscriptions.push(this.eventEmitter.subscribe("Article-StartEdit", function () { return _this.startEdit(); }));
            this.subscriptions.push(this.eventEmitter.subscribe("Article-CancelEdit", function () { return _this.cancelEdit(); }));
            this.subscriptions.push(this.eventEmitter.subscribe("router:navigation:complete", function () { return _this.onNavigatioComplete(); }));
            this.editMode = false;
        }
        Study.prototype.onNavigatioComplete = function () {
            var categoryUrl = this.router.currentInstruction.config.name;
            this.loadPage(categoryUrl);
        };
        Study.prototype.detached = function () {
            this.subscriptions.forEach(function (item) { return item.dispose(); });
        };
        Study.prototype.activate = function (params, routeconfig, navigationInstruction) {
            this.router = navigationInstruction.router;
            this.articleUrl = "default";
            if (params.articleUrl && routeconfig) {
                this.articleUrl = params.articleUrl;
            }
        };
        Study.prototype.loadPage = function (categoryUrl) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a, _b, _c;
                return tslib_1.__generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _a = this;
                            return [4, this.articleService.getCategory(categoryUrl)];
                        case 1:
                            _a.category = _d.sent();
                            if (!this.category) return [3, 4];
                            _b = this;
                            return [4, this.articleService.getArticleByUrl(this.category.categoryId, this.articleUrl)];
                        case 2:
                            _b.article = _d.sent();
                            _c = this;
                            return [4, this.articleService.getArticles(this.category.categoryId)];
                        case 3:
                            _c.articles = _d.sent();
                            this.selectSideNavigationItem();
                            _d.label = 4;
                        case 4: return [2];
                    }
                });
            });
        };
        Study.prototype.setEditMode = function (editMode) {
            this.editMode = editMode;
        };
        Study.prototype.startEdit = function () {
            this.originalArticle = Object.assign({}, this.article);
            this.setEditMode(true);
            aurelia_validation_1.ValidationRules
                .ensure(function (u) { return u.title; }).displayName("Strategy name").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (u) { return u.summary; }).displayName("Summary").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (u) { return u.url; }).displayName("Strategy url").required().withMessage("${$displayName} cannot be blank.")
                .on(this.article);
        };
        Study.prototype.cancelEdit = function () {
            this.setEditMode(false);
            if (this.article.articleId > 0) {
                this.article = this.originalArticle;
                this.editMode = false;
            }
            else {
                this.article.deleted = true;
            }
            this.validation.reset();
        };
        Study.prototype.addArticle = function () {
            this.article = new services_generated_1.ArticleModel();
            this.article.articleId = 0;
            this.article.categoryId = this.category.categoryId;
            this.article.isFeatured = false;
            this.article.deleted = false;
            this.article.title = "New Article";
            this.article.url = "new-article";
            this.article.articleBlocks = [];
            this.article.summary = "";
            this.startEdit();
            this.validation.validate();
        };
        Study.prototype.selectSideNavigationItem = function () {
            var self = this;
            if (this.articles && this.articles.length > 0) {
                this.articles.forEach(function (item) {
                    if (item.articleId === self.article.articleId) {
                    }
                });
            }
        };
        Study.prototype.navigateToArticle = function (url) {
            if (url && url.length > 0) {
                this.setEditMode(false);
                var articleUrl = "/" + this.navigation.section + "/" + this.category.url + "/" + url;
                this.router.navigate(articleUrl);
            }
        };
        Study.prototype.deleteArticle = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.article && this.article.articleId > 0)) return [3, 2];
                            return [4, this.articleService.deleteArticle(this.article.articleId)];
                        case 1:
                            _a.sent();
                            return [3, 3];
                        case 2:
                            toastr.warning("Article is not selected", "Delete Failed");
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        Study.prototype.trySaveArticle = function () {
            var _this = this;
            this.validation.validate()
                .then(function (response) {
                var valid = false;
                if (response.valid) {
                    if (_this.articlePartsValidate()) {
                        valid = true;
                    }
                }
                if (valid) {
                    _this.saveArticle();
                }
                else {
                }
            });
        };
        Study.prototype.articlePartsValidate = function () {
            if (this.article.articleBlocks.length > 0) {
                var index = this.article.articleBlocks.findIndex(function (b) { return !b.valid; });
                return index === -1;
            }
            else {
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
                            return [4, this.articleService.saveArticle(this.article)];
                        case 1:
                            a = _a.sent();
                            if (a.url && a.url.length > 0) {
                                this.navigateToArticle(a.url);
                            }
                            return [2];
                    }
                });
            });
        };
        Study = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [event_emitter_1.EventEmitter,
                services_generated_1.ArticlesApiClient,
                navigation_1.Navigation,
                aurelia_validation_1.ValidationController])
        ], Study);
        return Study;
    }());
    exports.Study = Study;
});

define('resources/elements/article-parts/article-part-actions',["require", "exports", "tslib", "aurelia-framework", "../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArticlePartActions = (function () {
        function ArticlePartActions() {
        }
        ArticlePartActions.prototype.remove = function () {
            if (this.part) {
            }
        };
        ArticlePartActions.prototype.moveUp = function () {
            if (this.part) {
            }
        };
        ArticlePartActions.prototype.moveDown = function () {
            if (this.part) {
            }
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.ArticleBlock)
        ], ArticlePartActions.prototype, "part", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Boolean)
        ], ArticlePartActions.prototype, "editMode", void 0);
        return ArticlePartActions;
    }());
    exports.ArticlePartActions = ArticlePartActions;
});

define('resources/elements/article-parts/article-part-heading',["require", "exports", "tslib", "aurelia-framework", "aurelia-binding", "../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_binding_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArticlePartHeading = (function () {
        function ArticlePartHeading(bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.headingTypes = [services_generated_1.HeadingType.H1, services_generated_1.HeadingType.H2, services_generated_1.HeadingType.H3, services_generated_1.HeadingType.H4, services_generated_1.HeadingType.H5];
            this.textValid = true;
            this.typeValid = true;
            this.subscriptions = [];
        }
        ArticlePartHeading.prototype.attached = function () {
            var _this = this;
            if (!this.part.headingType) {
                this.part.headingType = services_generated_1.HeadingType.H3;
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
            this.typeValid = (this.part.headingType) ? true : false;
            this.textValid = this.part.text.length > 0;
            this.part.valid = this.typeValid && this.textValid;
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.ArticleBlock)
        ], ArticlePartHeading.prototype, "part", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Boolean)
        ], ArticlePartHeading.prototype, "editMode", void 0);
        ArticlePartHeading = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [aurelia_binding_1.BindingEngine])
        ], ArticlePartHeading);
        return ArticlePartHeading;
    }());
    exports.ArticlePartHeading = ArticlePartHeading;
});

define('resources/elements/article-parts/article-part-image',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-binding", "../../../services/services-generated"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_binding_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                var _this = this;
                var reader_1, file_1;
                return tslib_1.__generator(this, function (_a) {
                    if (this.selectedFiles.length > 0) {
                        toastr.warning("Uploading selected file", "Uploading...");
                        reader_1 = new FileReader();
                        file_1 = this.selectedFiles.item(0);
                        reader_1.addEventListener("loadend", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var payload, imageUrl;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(reader_1.readyState === 2)) return [3, 2];
                                        payload = new services_generated_1.FileDetails();
                                        payload.fileName = file_1.name;
                                        payload.fileBody = reader_1.result;
                                        return [4, this.blobServices.uploadSingle(payload)];
                                    case 1:
                                        imageUrl = _a.sent();
                                        if (imageUrl) {
                                            this.part.imageUrl = imageUrl;
                                            toastr.success('Image uploaded successfully', 'Image Uploaded');
                                        }
                                        else {
                                            toastr.error('Sorry, this image is too big. Must be 2MB max.', 'Failed to Uploaded');
                                        }
                                        _a.label = 2;
                                    case 2: return [2];
                                }
                            });
                        }); });
                        reader_1.readAsDataURL(file_1);
                    }
                    return [2];
                });
            });
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.ArticleBlock)
        ], ArticlePartImage.prototype, "part", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Boolean)
        ], ArticlePartImage.prototype, "editMode", void 0);
        ArticlePartImage = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [services_generated_1.BlobApiClient, aurelia_binding_1.BindingEngine])
        ], ArticlePartImage);
        return ArticlePartImage;
    }());
    exports.ArticlePartImage = ArticlePartImage;
});

define('resources/elements/article-parts/article-part-list',["require", "exports", "tslib", "aurelia-framework", "aurelia-binding", "../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_binding_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            var item = new services_generated_1.ArticleBlockItem();
            item.text = "";
            item.valid = false;
            this.part.items.push(item);
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
                    self_1.itemsSubscriptions.push(self_1.bindingEngine.propertyObserver(item, "text")
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
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.ArticleBlock)
        ], ArticlePartList.prototype, "part", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Boolean)
        ], ArticlePartList.prototype, "editMode", void 0);
        ArticlePartList = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [aurelia_binding_1.BindingEngine])
        ], ArticlePartList);
        return ArticlePartList;
    }());
    exports.ArticlePartList = ArticlePartList;
});

define('resources/elements/article-parts/article-part-new',["require", "exports", "tslib", "aurelia-framework", "../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArticlePartNew = (function () {
        function ArticlePartNew() {
            this.partTypes = [services_generated_1.ArticleBlockType.Unset, services_generated_1.ArticleBlockType.Heading, services_generated_1.ArticleBlockType.Image, services_generated_1.ArticleBlockType.List];
            this.canAdd = false;
            this.selectedType = services_generated_1.ArticleBlockType.Unset;
        }
        ArticlePartNew.prototype.onTypeChange = function () {
            this.canAdd = this.selectedType !== services_generated_1.ArticleBlockType.Unset;
        };
        ArticlePartNew.prototype.add = function () {
            this.part.type = this.selectedType;
        };
        ArticlePartNew.prototype.cancel = function () {
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.ArticleBlock)
        ], ArticlePartNew.prototype, "part", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Boolean)
        ], ArticlePartNew.prototype, "editMode", void 0);
        return ArticlePartNew;
    }());
    exports.ArticlePartNew = ArticlePartNew;
});

define('resources/elements/article-parts/article-part-paragraph',["require", "exports", "tslib", "aurelia-framework", "aurelia-binding", "../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_binding_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArticlePartParagraph = (function () {
        function ArticlePartParagraph(bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.subscriptions = [];
        }
        ArticlePartParagraph.prototype.editModeChanged = function (newVaue) {
            if (newVaue) {
            }
        };
        ArticlePartParagraph.prototype.attached = function () {
            var _this = this;
            if (!this.part.text) {
                this.part.text = "";
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
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.ArticleBlock)
        ], ArticlePartParagraph.prototype, "part", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Boolean)
        ], ArticlePartParagraph.prototype, "editMode", void 0);
        ArticlePartParagraph = tslib_1.__decorate([
            aurelia_framework_1.autoinject(),
            tslib_1.__metadata("design:paramtypes", [aurelia_binding_1.BindingEngine])
        ], ArticlePartParagraph);
        return ArticlePartParagraph;
    }());
    exports.ArticlePartParagraph = ArticlePartParagraph;
});

define('resources/elements/article-parts/article-parts',["require", "exports", "tslib", "aurelia-framework", "aurelia-binding", "../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_binding_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArticleParts = (function () {
        function ArticleParts(bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.parts = [];
            this.partsSubscriptions = [];
            this.partsChangedSubscription = null;
            this.eventSubscriptions = [];
        }
        ArticleParts.prototype.partsChanged = function (newValue) {
            var _this = this;
            if (newValue) {
                if (!this.partsChangedSubscription) {
                    this.partsChangedSubscription = this.bindingEngine.collectionObserver(this.parts).subscribe(function () { return _this.onPartsChanged(); });
                }
                this.renewPartsSubscriptions();
            }
        };
        ArticleParts.prototype.editModeChanged = function (newValue) {
            if (newValue) {
            }
        };
        ArticleParts.prototype.isParagraph = function (part) {
            return part.type === services_generated_1.ArticleBlockType.Paragraph;
        };
        ArticleParts.prototype.isHeading = function (part) {
            return part.type === services_generated_1.ArticleBlockType.Heading;
        };
        ArticleParts.prototype.isImage = function (part) {
            return part.type === services_generated_1.ArticleBlockType.Image;
        };
        ArticleParts.prototype.isList = function (part) {
            return part.type === services_generated_1.ArticleBlockType.List;
        };
        ArticleParts.prototype.isUnset = function (part) {
            return part.type === services_generated_1.ArticleBlockType.Unset;
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
            var part = new services_generated_1.ArticleBlock();
            part.type = services_generated_1.ArticleBlockType.Unset;
            part.text = "";
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
        };
        ArticleParts.prototype.movePartUp = function () {
        };
        ArticleParts.prototype.movePartDown = function () {
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Array)
        ], ArticleParts.prototype, "parts", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Boolean)
        ], ArticleParts.prototype, "editMode", void 0);
        ArticleParts = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [aurelia_binding_1.BindingEngine])
        ], ArticleParts);
        return ArticleParts;
    }());
    exports.ArticleParts = ArticleParts;
});

define('resources/elements/chart/chart-layout',["require", "exports", "tslib", "aurelia-framework", "../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChartLayout = (function () {
        function ChartLayout() {
            this.data = null;
            this.isAttached = false;
        }
        ChartLayout.prototype.attached = function () {
            this.isAttached = true;
        };
        ChartLayout.prototype.dataChanged = function () {
            if (this.isAttached) {
                this.renderChart();
            }
        };
        ChartLayout.prototype.renderChart = function () {
            var _this = this;
            if (this.data.periods.length === 0)
                return;
            this.data.periods.forEach(function (period) {
                $("#container-" + period.period).empty();
                var chart = anychart.stock();
                _this.renderPeriod(chart, period);
                chart.container("container-" + period.period);
                chart.draw();
            });
        };
        ChartLayout.prototype.renderPeriod = function (chart, period) {
            var _this = this;
            if (period.quotes.length === 0 || period.plots.length === 0)
                return;
            var zeroPlot = this.attachQuotes(chart, period.quotes, period.period);
            var plotNumber = 0;
            period.plots.forEach(function (p) {
                var plot;
                if (plotNumber === 0) {
                    plot = zeroPlot;
                }
                else {
                    plot = chart.plot(plotNumber);
                }
                _this.attachChartPlot(chart, p, plot);
                if (p.height > 0) {
                    plot.height(p.height);
                }
                plotNumber++;
            });
        };
        ChartLayout.prototype.attachQuotes = function (chart, quotes, period) {
            if (chart == null || !chart) {
                return null;
            }
            var tableUp = anychart.data.table();
            var tableDown = anychart.data.table();
            var tableNeutral = anychart.data.table();
            quotes.forEach(function (item) {
                var row = [[item.date, item.open, item.high, item.low, item.close, item.volume]];
                if (item.impulse === 0) {
                    tableNeutral.addData(row);
                }
                if (item.impulse === 1) {
                    tableUp.addData(row);
                }
                if (item.impulse === -1) {
                    tableDown.addData(row);
                }
            });
            var mappingUp = this.createQuotesMappings(tableUp);
            var mappingDown = this.createQuotesMappings(tableDown);
            var mappingNeutral = this.createQuotesMappings(tableNeutral);
            var seriesUp = chart.plot(0).ohlc(mappingUp);
            seriesUp.fallingStroke("green");
            seriesUp.risingStroke("green");
            var seriesDown = chart.plot(0).ohlc(mappingDown);
            seriesDown.fallingStroke("red");
            seriesDown.risingStroke("red");
            var serieNeutral = chart.plot(0).ohlc(mappingNeutral);
            serieNeutral.fallingStroke("teal");
            serieNeutral.risingStroke("teal");
            var seriesName = this.data.company.name + " (" + period + ")";
            serieNeutral.name(seriesName);
            var legend = serieNeutral.legendItem();
            legend.text(seriesName);
            var plot = chart.plot(0);
            plot.grid(0).enabled(true);
            plot.grid(0).stroke("#EEE");
            return plot;
        };
        ChartLayout.prototype.createQuotesMappings = function (table) {
            var mapping = table.mapAs();
            mapping.addField("open", 1, anychart.enums.AggregationType.FIRST);
            mapping.addField("high", 2, anychart.enums.AggregationType.MAX);
            mapping.addField("low", 3, anychart.enums.AggregationType.MIN);
            mapping.addField("close", 4, anychart.enums.AggregationType.LAST);
            return mapping;
        };
        ChartLayout.prototype.attachChartPlot = function (chart, plotData, plotChart) {
            var _this = this;
            if (chart == null || !chart || plotData == null || !plotData || plotChart == null || !plotChart) {
                return;
            }
            plotData.indicators.forEach(function (indicator) {
                var table = anychart.data.table(0);
                indicator.data.forEach(function (value) {
                    var row = [];
                    row.push(value.date);
                    value.values.forEach(function (item) {
                        row.push(item.value);
                    });
                    table.addData([row]);
                });
                indicator.data[0].values.forEach(function (item) {
                    var mapping = table.mapAs();
                    mapping.addField("value", indicator.data[0].values.indexOf(item) + 1);
                    _this.drawIndicator(plotChart, mapping, item);
                });
            });
        };
        ChartLayout.prototype.drawIndicator = function (plotChart, mapping, value) {
            switch (value.chartType) {
                case services_generated_1.ChartType.Column:
                    var column = plotChart.column(mapping);
                    column.name(value.name);
                    if (value.lineColor !== "") {
                        column.stroke(value.lineColor);
                    }
                    break;
                default:
                    var line = plotChart.line(mapping);
                    line.name(value.name);
                    if (value.lineColor !== "") {
                        line.stroke(value.lineColor);
                    }
                    break;
            }
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], ChartLayout.prototype, "data", void 0);
        return ChartLayout;
    }());
    exports.ChartLayout = ChartLayout;
});

define('resources/elements/company/company-details',["require", "exports", "tslib", "aurelia-framework", "moment", "../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, moment, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CompanyDetails = (function () {
        function CompanyDetails() {
        }
        CompanyDetails.prototype.formatDate = function (date) {
            var date1 = moment(date);
            var date2 = moment(new Date());
            var diff = date2.diff(date1);
            var duration = moment.duration(diff);
            var days = duration.asDays();
            return Math.round(days) + " days ago";
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.CompanyModel)
        ], CompanyDetails.prototype, "company", void 0);
        return CompanyDetails;
    }());
    exports.CompanyDetails = CompanyDetails;
});

define('resources/elements/indicator/indicator',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-validation", "../../../form-validation/bootstrap-form-renderer", "../../../services/account-service", "../../../services/settings-service", "../../../services/services-generated"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_validation_1, bootstrap_form_renderer_1, account_service_1, settings_service_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Formula = (function () {
        function Formula() {
        }
        return Formula;
    }());
    exports.Formula = Formula;
    var Indicator = (function () {
        function Indicator(indicatorService, account, validation, globalSettings) {
            this.indicatorService = indicatorService;
            this.account = account;
            this.validation = validation;
            this.globalSettings = globalSettings;
            this.formulas = [];
            this.powerUser = this.account.currentUser.isAuthenticated;
            this.validation.validateTrigger = aurelia_validation_1.validateTrigger.change;
            this.validation.addRenderer(new bootstrap_form_renderer_1.BootstrapFormRenderer());
            this.errors = [];
            this.indicatorDataSeries = [];
            this.periods = this.globalSettings.periods;
            this.formulas = [
                this.createFormula("EMA", [
                    this.createIndicatorParam("Period", 13)
                ]),
                this.createFormula("UpperChannel", [
                    this.createIndicatorParam("Period", 26)
                ]),
                this.createFormula("LowerChannel", [
                    this.createIndicatorParam("Period", 26)
                ]),
                this.createFormula("SMA", [
                    this.createIndicatorParam("Period", 13)
                ]),
                this.createFormula("RSI", [
                    this.createIndicatorParam("Period", 14)
                ]),
                this.createFormula("NHNL", [
                    this.createIndicatorParam("Period", 26)
                ]),
                this.createFormula("MACD", [
                    this.createIndicatorParam("FastEmaPeriod", 12),
                    this.createIndicatorParam("SlowEmaPeriod", 26),
                    this.createIndicatorParam("SignalEmaPeriod", 9)
                ]),
                this.createFormula("ImpulseSystem", [
                    this.createIndicatorParam("FastEmaPeriod", 12),
                    this.createIndicatorParam("SlowEmaPeriod", 26),
                    this.createIndicatorParam("SignalEmaPeriod", 9),
                    this.createIndicatorParam("EmaPeriod", 13)
                ]),
                this.createFormula("ForceIndex", [
                    this.createIndicatorParam("Period", 13)
                ])
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
        Indicator.prototype.createIndicatorParam = function (paramName, paramValue) {
            var param = new services_generated_1.IndicatorParam();
            param.paramName = paramName;
            param.value = paramValue;
            return param;
        };
        Indicator.prototype.createFormula = function (formulaName, params) {
            var formula = new Formula();
            formula.name = formulaName;
            formula.defaults = params;
            return formula;
        };
        Indicator.prototype.indicatorChanged = function (indicatorItem) {
            if (indicatorItem) {
                var newIndicator = Object.assign({}, indicatorItem);
                this.indicatorInfo = newIndicator;
                if (this.indicatorInfo.indicatorId === 0) {
                    this.indicatorInfo.name = this.formulas[0].name;
                    this.indicatorInfo.params = this.formulas[0].defaults;
                }
            }
        };
        Indicator.prototype.onExpanded = function () {
            this.expanded = !this.expanded;
            if (!this.expanded && this.indicatorInfo.indicatorId > 0 && this.editMode) {
                this.cancelEdit();
            }
        };
        Indicator.prototype.onFormulaChange = function () {
            var _this = this;
            var defParams = this.formulas.filter(function (c) { return c.name === _this.indicatorInfo.name; });
            if (defParams && defParams.length > 0) {
                this.indicatorInfo.params = defParams[0].defaults;
            }
            else {
                toastr.warning("Unable to pull default params for selected formula.", "Data is missing");
            }
        };
        Indicator.prototype.startEdit = function () {
            this.originalIndicator = Object.assign({}, this.indicatorInfo);
            this.editMode = true;
            aurelia_validation_1.ValidationRules
                .ensure(function (m) { return m.description; }).displayName("Indicator Name").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (m) { return m.chartColor; }).displayName('Line Color').required().withMessage("${$displayName} cannot be blank.")
                .matches(/^#[0-9a-fA-F]{6}$/).withMessage("${$displayName} value should be in format: #AAFF99.")
                .on(this.indicatorInfo);
        };
        Indicator.prototype.cancelEdit = function () {
            if (this.indicatorInfo.indicatorId > 0) {
                this.indicatorInfo = this.originalIndicator;
                this.editMode = false;
            }
            else {
                this.indicatorInfo.deleted = true;
            }
            this.validation.reset();
        };
        Indicator.prototype.cancelDelete = function () {
            this.deleteMode = false;
            this.expanded = false;
        };
        Indicator.prototype.startDelete = function () {
            this.deleteMode = true;
            this.expanded = true;
        };
        Indicator.prototype.confirmDelete = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var e_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4, this.indicatorService.deleteIndicator(this.indicatorInfo.indicatorId)];
                        case 1:
                            _a.sent();
                            this.indicatorInfo.deleted = true;
                            toastr.success("Indicator " + this.indicatorInfo
                                .description + " deleted successfully!", "Indicator Deleted");
                            return [3, 3];
                        case 2:
                            e_1 = _a.sent();
                            this.errors.push(e_1);
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            });
        };
        Indicator.prototype.trySaveIndicator = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.validation.validate()];
                        case 1:
                            response = _a.sent();
                            if (!response.valid) return [3, 3];
                            return [4, this.saveIndicator()];
                        case 2:
                            _a.sent();
                            return [3, 4];
                        case 3:
                            toastr.warning("Please correct validation errors.", "Validation Errors");
                            _a.label = 4;
                        case 4: return [2];
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
                            return [4, this.indicatorService.saveIndicator(this.indicatorInfo)];
                        case 1:
                            response = _a.sent();
                            if (response.name) {
                                this.editMode = false;
                                this.expanded = false;
                                toastr.success("indicator " + response.name + " saved successfully!", "Indicator Saved");
                            }
                            return [2];
                    }
                });
            });
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.Indicator)
        ], Indicator.prototype, "indicator", void 0);
        Indicator = tslib_1.__decorate([
            aurelia_framework_1.autoinject(),
            tslib_1.__metadata("design:paramtypes", [services_generated_1.IndicatorsApiClient,
                account_service_1.AccountService,
                aurelia_validation_1.ValidationController,
                settings_service_1.SettingsService])
        ], Indicator);
        return Indicator;
    }());
    exports.Indicator = Indicator;
});

define('resources/elements/navigation/side-nav',["require", "exports", "tslib", "aurelia-framework", "aurelia-router"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SideNav = (function () {
        function SideNav() {
            this.router = null;
        }
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", aurelia_router_1.Router)
        ], SideNav.prototype, "router", void 0);
        return SideNav;
    }());
    exports.SideNav = SideNav;
});

define('resources/elements/navigation/sub-nav',["require", "exports", "tslib", "aurelia-framework", "aurelia-router"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SubNav = (function () {
        function SubNav() {
            this.router = null;
        }
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", aurelia_router_1.Router)
        ], SubNav.prototype, "router", void 0);
        return SubNav;
    }());
    exports.SubNav = SubNav;
});

define('resources/elements/progress/s-progress',["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Number)
        ], SProgress.prototype, "progress", void 0);
        SProgress = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], SProgress);
        return SProgress;
    }());
    exports.SProgress = SProgress;
});

define('resources/elements/rule/rule',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-validation", "../../../services/account-service", "../../../form-validation/bootstrap-form-renderer", "../../../services/settings-service", "../../../common/helpers/enum-helper", "../../../services/services-generated"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_validation_1, account_service_1, bootstrap_form_renderer_1, settings_service_1, enum_helper_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            this.ruleInfo = new services_generated_1.Rule();
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
            this.expanded = !this.expanded;
            if (!this.expanded && this.ruleInfo.ruleId > 0 && this.editMode) {
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
                if (rule.dataSourceV1 === services_generated_1.DataSourceType.Indicator) {
                    this.dataSeriesV1 = this.indicatorDataSeries;
                }
                if (rule.dataSourceV1 === services_generated_1.DataSourceType.HistoricalData) {
                    this.dataSeriesV1 = this.priceDataSeries;
                }
                if (rule.dataSourceV1 === services_generated_1.DataSourceType.Constant) {
                    this.dataSeriesV1 = [];
                }
                if (rule.dataSourceV2 === services_generated_1.DataSourceType.Indicator) {
                    this.dataSeriesV2 = this.indicatorDataSeries;
                }
                if (rule.dataSourceV2 === services_generated_1.DataSourceType.HistoricalData) {
                    this.dataSeriesV2 = this.priceDataSeries;
                }
                if (rule.dataSourceV2 === services_generated_1.DataSourceType.Constant) {
                    this.dataSeriesV2 = [];
                }
            }
        };
        Rule.prototype.startEdit = function () {
            this.originalRule = Object.assign({}, this.ruleInfo);
            this.editMode = true;
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
                this.editMode = false;
            }
            else {
                this.ruleInfo.deleted = true;
            }
            this.validation.reset();
        };
        Rule.prototype.cancelDelete = function () {
            this.deleteMode = false;
            this.expanded = false;
        };
        Rule.prototype.startDelete = function () {
            this.deleteMode = true;
            this.expanded = true;
        };
        Rule.prototype.confirmDelete = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var e_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4, this.ruleService.deleteRule(this.ruleInfo.ruleId)];
                        case 1:
                            _a.sent();
                            this.ruleInfo.deleted = true;
                            toastr.success("Rule " + this.ruleInfo.name + " deleted successfully!", "Rule Deleted");
                            return [3, 3];
                        case 2:
                            e_1 = _a.sent();
                            toastr.error("Failed to delete rule", "Error");
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            });
        };
        Rule.prototype.trySaveRule = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.validation.validate()];
                        case 1:
                            response = _a.sent();
                            if (response.valid) {
                                this.saveRule();
                            }
                            else {
                                toastr.warning("Please correct validation errors.", "Validation Errors");
                            }
                            return [2];
                    }
                });
            });
        };
        Rule.prototype.saveRule = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.ruleService.saveRule(this.ruleInfo)];
                        case 1:
                            response = _a.sent();
                            if (response.ruleId > 0) {
                                this.editMode = false;
                                this.expanded = false;
                                toastr.success("Rule " + response.name + " saved successfully!", 'Rule Saved');
                            }
                            else {
                                toastr.error("Failed to save rule", "Error");
                            }
                            return [2];
                    }
                });
            });
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.Rule)
        ], Rule.prototype, "rule", void 0);
        Rule = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [services_generated_1.RulesApiClient,
                account_service_1.AccountService,
                aurelia_validation_1.ValidationController,
                settings_service_1.SettingsService])
        ], Rule);
        return Rule;
    }());
    exports.Rule = Rule;
});

define('resources/elements/rule-set/rule-set-item',["require", "exports", "tslib", "aurelia-framework", "aurelia-event-aggregator", "../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_event_aggregator_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RuleSetItem = (function () {
        function RuleSetItem(eventAggregator) {
            this.eventAggregator = eventAggregator;
            this.subscriptions = [];
            this.editMode = false;
        }
        RuleSetItem.prototype.onExpanded = function () {
            this.expanded = !this.expanded;
        };
        RuleSetItem.prototype.startDelete = function () {
            this.deleteMode = true;
            this.expanded = true;
        };
        RuleSetItem.prototype.confirmDelete = function () {
            this.deleteMode = false;
            this.expanded = false;
            this.rule.deleted = true;
        };
        RuleSetItem.prototype.cancelDelete = function () {
            this.deleteMode = false;
            this.expanded = false;
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
            this.subscriptions.push(this.eventAggregator.subscribe("rule-set-edit-mode-" + this.rule.ruleSetId, function (flag) { return _this.setEditMode(flag); }));
            this.subscriptions.push(this.eventAggregator.subscribe("rule-set-edit-mode-" + this.rule.ruleSetId, function (flag) { return _this.setEditMode(flag); }));
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.RuleModel)
        ], RuleSetItem.prototype, "rule", void 0);
        RuleSetItem = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
        ], RuleSetItem);
        return RuleSetItem;
    }());
    exports.RuleSetItem = RuleSetItem;
});

define('resources/elements/rule-set/rule-set',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-event-aggregator", "aurelia-validation", "../../../form-validation/bootstrap-form-renderer", "../../../services/account-service", "../../../services/settings-service", "../../../services/services-generated"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_event_aggregator_1, aurelia_validation_1, bootstrap_form_renderer_1, account_service_1, settings_service_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            this.expanded = !this.expanded;
            if (!this.expanded && this.ruleSetInfo.ruleSetId > 0 && this.editMode) {
                this.cancelEdit();
            }
        };
        RuleSet.prototype.startEdit = function () {
            this.originalRuleSet = Object.assign({}, this.ruleSetInfo);
            this.editMode = true;
            this.eventAggregator.publish('rule-set-edit-mode-' + this.ruleSetInfo.ruleSetId, true);
            aurelia_validation_1.ValidationRules
                .ensure(function (u) { return u.name; }).displayName('Rule Set Name').required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (u) { return u.description; }).displayName('Description').required().withMessage("${$displayName} cannot be blank.")
                .on(this.ruleSetInfo);
        };
        RuleSet.prototype.cancelEdit = function () {
            if (this.ruleSetInfo.ruleSetId > 0) {
                this.ruleSetInfo = this.originalRuleSet;
                this.editMode = false;
                this.eventAggregator.publish('rule-set-edit-mode-' + this.ruleSetInfo.ruleSetId, false);
            }
            else {
                this.ruleSetInfo.deleted = true;
            }
            this.validation.reset();
        };
        RuleSet.prototype.cancelDelete = function () {
            this.deleteMode = false;
            this.expanded = false;
        };
        RuleSet.prototype.startDelete = function () {
            this.deleteMode = true;
            this.expanded = true;
        };
        RuleSet.prototype.confirmDelete = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var e_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4, this.ruleSetService.deleteRuleSet(this.ruleSetInfo.ruleSetId)];
                        case 1:
                            _a.sent();
                            this.ruleSetInfo.deleted = true;
                            toastr.success("Rule set " + this.ruleSetInfo.description + " deleted successfully!", 'Rule Set Deleted');
                            return [3, 3];
                        case 2:
                            e_1 = _a.sent();
                            toastr.error("Failed to delete rule set", "Error");
                            this.errors.push(e_1);
                            return [3, 3];
                        case 3: return [2];
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
                            this.addMode = !this.addMode;
                            if (!(this.addMode && this.rules.length === 0)) return [3, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, this.ruleService.getRules(this.ruleSetInfo.period)];
                        case 2:
                            response = _a.sent();
                            this.rules = response;
                            if (this.rules.length > 0) {
                                this.attachedRule = this.rules[0];
                            }
                            return [3, 4];
                        case 3:
                            e_2 = _a.sent();
                            toastr.error("Failed to get rules", "ruleService.getRulesForPeriod");
                            this.errors.push(e_2);
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            });
        };
        RuleSet.prototype.onRuleChange = function () {
            var _this = this;
            this.attachedRule = this.rules.find(function (item) { return item.ruleId === _this.attachedRuleId; });
        };
        RuleSet.prototype.cancelAddRule = function () {
            this.addMode = false;
        };
        RuleSet.prototype.confirmAddRule = function () {
            this.addMode = false;
            var rule = new services_generated_1.RuleModel();
            rule.name = this.attachedRule.name;
            rule.ruleId = this.attachedRule.ruleId;
            rule.description = this.attachedRule.description;
            rule.ruleSetId = this.ruleSetInfo.ruleSetId;
            this.ruleSetInfo.rules.push(rule);
        };
        RuleSet.prototype.trySaveRuleSet = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.validation.validate()];
                        case 1:
                            response = _a.sent();
                            if (!response.valid) return [3, 3];
                            return [4, this.saveRuleSet()];
                        case 2:
                            _a.sent();
                            return [3, 4];
                        case 3:
                            toastr.warning("Please correct validation errors.", "Validation Errors");
                            _a.label = 4;
                        case 4: return [2];
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
                            return [4, this.ruleSetService.saveRuleSet(this.ruleSetInfo)];
                        case 2:
                            response = _a.sent();
                            if (response.ruleSetId > 0) {
                                this.editMode = false;
                                this.expanded = false;
                                toastr.success("Rule set " + response.name + " saved successfully!", "Rule set Saved");
                                this.eventAggregator.publish("rule-set-edit-mode-" + this.ruleSetInfo.ruleSetId, false);
                            }
                            return [3, 4];
                        case 3:
                            e_3 = _a.sent();
                            toastr.error("Failed to save rule set", "Error");
                            this.errors.push(e_3);
                            return [3, 4];
                        case 4: return [2];
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
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.RuleSetModel)
        ], RuleSet.prototype, "ruleset", void 0);
        RuleSet = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator,
                services_generated_1.RuleSetsApiClient,
                services_generated_1.RulesApiClient,
                account_service_1.AccountService,
                aurelia_validation_1.ValidationController,
                settings_service_1.SettingsService])
        ], RuleSet);
        return RuleSet;
    }());
    exports.RuleSet = RuleSet;
});

define('resources/elements/strategy/side-navigation',["require", "exports", "tslib", "toastr", "aurelia-framework", "aurelia-router", "../../../services/services-generated"], function (require, exports, tslib_1, toastr, aurelia_framework_1, aurelia_router_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                            if (!(newValue && newValue.length > 0)) return [3, 6];
                            if (!this.summaryNotFound(newValue)) return [3, 5];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            _a = this;
                            return [4, this.strategyService.geStrategySummaries()];
                        case 2:
                            _a.summaries = _b.sent();
                            this.setActiveStrategy(newValue);
                            return [3, 4];
                        case 3:
                            e_1 = _b.sent();
                            toastr.error("Failed to load summaries", "Load Summaries Failed");
                            return [3, 4];
                        case 4: return [3, 6];
                        case 5:
                            this.setActiveStrategy(newValue);
                            _b.label = 6;
                        case 6: return [2];
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
                        if (item.url.toLowerCase() === url.toLowerCase()) {
                        }
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
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], SideNavigation.prototype, "strategyurl", void 0);
        SideNavigation = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [services_generated_1.StrategiesApiClient, aurelia_router_1.Router])
        ], SideNavigation);
        return SideNavigation;
    }());
    exports.SideNavigation = SideNavigation;
});

define('resources/elements/strategy/strategy-admin',["require", "exports", "tslib", "aurelia-framework", "../../../services/account-service"], function (require, exports, tslib_1, aurelia_framework_1, account_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StrategyAdmin = (function () {
        function StrategyAdmin(account) {
            this.powerUser = account.currentUser.isAuthenticated;
        }
        StrategyAdmin = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService])
        ], StrategyAdmin);
        return StrategyAdmin;
    }());
    exports.StrategyAdmin = StrategyAdmin;
});

define('resources/elements/strategy/strategy-navigation',["require", "exports", "tslib", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        StrategyNavigation = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
        ], StrategyNavigation);
        return StrategyNavigation;
    }());
    exports.StrategyNavigation = StrategyNavigation;
    var LinkInfo = (function () {
        function LinkInfo() {
            this.isActive = false;
        }
        return LinkInfo;
    }());
    exports.LinkInfo = LinkInfo;
});

define('resources/elements/strategy/strategy-rule-set',["require", "exports", "tslib", "aurelia-framework", "aurelia-event-aggregator", "../../../services/settings-service", "../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_event_aggregator_1, settings_service_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            this.expanded = !this.expanded;
        };
        StrategyRuleSet.prototype.cancelDelete = function () {
            this.deleteMode = false;
            this.expanded = false;
        };
        StrategyRuleSet.prototype.startDelete = function () {
            this.deleteMode = true;
            this.expanded = true;
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
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.VStrategyRuleSet)
        ], StrategyRuleSet.prototype, "ruleset", void 0);
        StrategyRuleSet = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, settings_service_1.SettingsService])
        ], StrategyRuleSet);
        return StrategyRuleSet;
    }());
    exports.StrategyRuleSet = StrategyRuleSet;
});

define('components/journal/journals/journal/journal',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JournalEntry = (function () {
        function JournalEntry() {
        }
        return JournalEntry;
    }());
    exports.JournalEntry = JournalEntry;
});

define('components/journal/journals/journal-create/journal-create',["require", "exports", "tslib", "aurelia-framework", "aurelia-validation", "../../../../common/helpers/enum-helper", "../../../../services/services-generated", "../../../../form-validation/bootstrap-form-renderer"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_validation_1, enum_helper_1, services_generated_1, bootstrap_form_renderer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JournalCreate = (function () {
        function JournalCreate(validation) {
            this.validation = validation;
            this.validation.validateTrigger = aurelia_validation_1.validateTrigger.change;
            this.validation.addRenderer(new bootstrap_form_renderer_1.BootstrapFormRenderer());
            this.directions = enum_helper_1.EnumValues.getDirectionTypes();
            this.journal = new services_generated_1.JournalModel();
            aurelia_validation_1.ValidationRules
                .ensure(function (m) { return m.ticker; }).displayName("Ticker").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (m) { return m.entryDate; }).displayName("Entry date").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (m) { return m.takeProfitPrice; }).displayName("Target price").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (m) { return m.entryPrice; }).displayName("Entry price").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (m) { return m.stopLossPrice; }).displayName("Stop loss price").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (m) { return m.maxRiskValuePrice; }).displayName("Risk value($)").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (m) { return m.rewardRiskRatio; }).displayName("Reward / Risk ratio").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (m) { return m.maxSharesCount; }).displayName("Max shares count").required().withMessage("${$displayName} cannot be blank.")
                .on(this.journal);
        }
        JournalCreate.prototype.trySaveJournal = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.validation.validate()];
                        case 1:
                            response = _a.sent();
                            if (response.valid) {
                            }
                            return [2];
                    }
                });
            });
        };
        JournalCreate.prototype.cancelEdit = function () {
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], JournalCreate.prototype, "entryDatePicker", void 0);
        JournalCreate = tslib_1.__decorate([
            aurelia_framework_1.autoinject(),
            tslib_1.__metadata("design:paramtypes", [aurelia_validation_1.ValidationController])
        ], JournalCreate);
        return JournalCreate;
    }());
    exports.JournalCreate = JournalCreate;
});

define('components/journal/journals/journal-periods/journal-periods',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JournalPeriods = (function () {
        function JournalPeriods() {
        }
        return JournalPeriods;
    }());
    exports.JournalPeriods = JournalPeriods;
});

define('components/market/chart-layouts/layouts/chart-layout-indicator',["require", "exports", "tslib", "aurelia-framework", "../../../../infrastructure/event-emitter", "../../../../common/types/enums", "../../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, event_emitter_1, Enums, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChartLayoutIndicator = (function () {
        function ChartLayoutIndicator(eventEmitter) {
            this.eventEmitter = eventEmitter;
            this.expanded = false;
        }
        ChartLayoutIndicator.prototype.toggleExpand = function () {
            this.expanded = !this.expanded;
        };
        ChartLayoutIndicator.prototype.onMoveUp = function () {
            var event = {
                direction: Enums.Direction.Up,
                indicatorId: this.indicator.indicatorId,
                layoutId: this.indicator.plotId
            };
            this.eventEmitter.publish("LayoutIndicatorMoved", event);
        };
        ChartLayoutIndicator.prototype.onMoveDown = function () {
            var event = {
                direction: Enums.Direction.Down,
                indicatorId: this.indicator.indicatorId,
                layoutId: this.indicator.plotId
            };
            this.eventEmitter.publish("LayoutIndicatorMoved", event);
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.LayoutIndicatorModel)
        ], ChartLayoutIndicator.prototype, "indicator", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Boolean)
        ], ChartLayoutIndicator.prototype, "editMode", void 0);
        ChartLayoutIndicator = tslib_1.__decorate([
            aurelia_framework_1.autoinject(),
            tslib_1.__metadata("design:paramtypes", [event_emitter_1.EventEmitter])
        ], ChartLayoutIndicator);
        return ChartLayoutIndicator;
    }());
    exports.ChartLayoutIndicator = ChartLayoutIndicator;
});

define('components/market/chart-layouts/layouts/chart-layout-plot',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChartLayoutPlot = (function () {
        function ChartLayoutPlot() {
        }
        return ChartLayoutPlot;
    }());
    exports.ChartLayoutPlot = ChartLayoutPlot;
});

define('components/market/chart-layouts/layouts/chart-layout',["require", "exports", "tslib", "aurelia-framework", "aurelia-validation", "../../../../form-validation/bootstrap-form-renderer", "../../../../services/settings-service", "../../../../infrastructure/event-emitter", "../../../../common/types/enums", "../../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_validation_1, bootstrap_form_renderer_1, settings_service_1, event_emitter_1, Enums, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChartLayout = (function () {
        function ChartLayout(validation, layoutService, globalSettings, eventEmitter) {
            this.validation = validation;
            this.layoutService = layoutService;
            this.globalSettings = globalSettings;
            this.eventEmitter = eventEmitter;
            this.subscriptions = [];
            this.expanded = false;
            this.editMode = false;
            this.addingMode = false;
            this.newIndicatorId = 0;
            this.validation.validateTrigger = aurelia_validation_1.validateTrigger.change;
            this.validation.addRenderer(new bootstrap_form_renderer_1.BootstrapFormRenderer());
            this.subscribe();
        }
        ChartLayout.prototype.subscribe = function () {
            var _this = this;
            this.subscriptions.push(this.eventEmitter.subscribe("LayoutIndicatorMoved", function (event) {
                _this.onLayoutIndicatorMoved(event);
            }));
        };
        ChartLayout.prototype.detached = function () {
            if (this.subscriptions.length > 0) {
                this.subscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
            }
        };
        ChartLayout.prototype.layoutChanged = function () {
            if (this.layout != null && this.layout.layoutId > 0) {
                this.definedIndicators = this.globalSettings.getIndicators(this.layout.period);
            }
        };
        ChartLayout.prototype.toggleExpand = function () {
            this.expanded = !this.expanded;
        };
        ChartLayout.prototype.startEdit = function () {
            this.editMode = true;
            this.originalLayout = Object.assign({}, this.layout);
            aurelia_validation_1.ValidationRules
                .ensure(function (u) { return u.title; }).displayName("Layout name").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (u) { return u.description; }).displayName("Description").required().withMessage("${$displayName} cannot be blank.")
                .on(this.layout);
        };
        ChartLayout.prototype.confirmSave = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var valid, response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            valid = false;
                            return [4, this.validation.validate()];
                        case 1:
                            response = _a.sent();
                            if (response.valid) {
                                valid = true;
                            }
                            if (valid) {
                                this.saveLayout();
                            }
                            else {
                                toastr.warning("Please correct validation errors.", "Validation Errors");
                            }
                            return [2];
                    }
                });
            });
        };
        ChartLayout.prototype.cancelSave = function () {
            this.editMode = false;
            this.layout = this.originalLayout;
            this.validation.reset();
        };
        ChartLayout.prototype.saveLayout = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.layoutService.saveLayout(this.layout)];
                        case 1:
                            _a.sent();
                            this.editMode = false;
                            return [2];
                    }
                });
            });
        };
        ChartLayout.prototype.addIndicator = function () {
            this.addingMode = true;
        };
        ChartLayout.prototype.confirmAddIndicator = function () {
        };
        ChartLayout.prototype.getIndicatorCore = function (indicatorId) {
            return this.definedIndicators.find(function (i) { return i.id === indicatorId; });
        };
        ChartLayout.prototype.cancelAddIndicator = function () {
            this.addingMode = false;
        };
        ChartLayout.prototype.onLayoutIndicatorMoved = function (event) {
            if (event.direction === Enums.Direction.Up) {
            }
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.ChartLayoutModel)
        ], ChartLayout.prototype, "layout", void 0);
        ChartLayout = tslib_1.__decorate([
            aurelia_framework_1.autoinject(),
            tslib_1.__metadata("design:paramtypes", [aurelia_validation_1.ValidationController, services_generated_1.LayoutApiClient,
                settings_service_1.SettingsService, event_emitter_1.EventEmitter])
        ], ChartLayout);
        return ChartLayout;
    }());
    exports.ChartLayout = ChartLayout;
});

define('components/market/chart-layouts/layouts/chart-layouts',["require", "exports", "tslib", "aurelia-framework", "../../../../services/account-service", "aurelia-event-aggregator", "../../../../common/helpers/enum-helper", "aurelia-validation", "../../../../form-validation/bootstrap-form-renderer", "../../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, account_service_1, aurelia_event_aggregator_1, enum_helper_1, aurelia_validation_1, bootstrap_form_renderer_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChartLayouts = (function () {
        function ChartLayouts(account, eventAggregator, layoutService, validation) {
            this.eventAggregator = eventAggregator;
            this.layoutService = layoutService;
            this.validation = validation;
            this.powerUser = false;
            this.subscriptions = [];
            this.router = null;
            this.layouts = [];
            this.title = "";
            this.editMode = false;
            this.addingMode = false;
            this.powerUser = account.currentUser.isAuthenticated;
            this.subscribe();
            this.validation.validateTrigger = aurelia_validation_1.validateTrigger.change;
            this.validation.addRenderer(new bootstrap_form_renderer_1.BootstrapFormRenderer());
        }
        ChartLayouts.prototype.onNavigatioComplete = function () {
            this.title = this.router.currentInstruction.config.title;
            var periodUrl = this.router.currentInstruction.config.name;
            this.period = enum_helper_1.EnumValues.getQuotePeriod(periodUrl);
            this.loadLayouts();
        };
        ChartLayouts.prototype.activate = function (params, routeconfig, navigationInstruction) {
            this.router = navigationInstruction.router;
            if (params && routeconfig) {
            }
        };
        ChartLayouts.prototype.subscribe = function () {
            var _this = this;
            this.subscriptions.push(this.eventAggregator.subscribe("router:navigation:complete", function () {
                _this.onNavigatioComplete();
            }));
        };
        ChartLayouts.prototype.detached = function () {
            if (this.subscriptions.length > 0) {
                this.subscriptions.forEach(function (subscription) {
                    subscription.dispose();
                });
            }
        };
        ChartLayouts.prototype.loadLayouts = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.layoutService.getLayoutsForPeriod(this.period.id)];
                        case 1:
                            _a.layouts = _b.sent();
                            return [2];
                    }
                });
            });
        };
        ChartLayouts.prototype.addLayout = function () {
            this.addingMode = true;
            this.newLayout = new services_generated_1.ChartLayoutModel();
            this.newLayout.period = this.period.id;
            this.startEdit(this.newLayout);
        };
        ChartLayouts.prototype.confirmAddLayout = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var valid, response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            valid = false;
                            return [4, this.validation.validate()];
                        case 1:
                            response = _a.sent();
                            if (response.valid) {
                                valid = true;
                            }
                            if (valid) {
                                this.saveLayout();
                            }
                            else {
                                toastr.warning("Please correct validation errors.", "Validation Errors");
                            }
                            return [2];
                    }
                });
            });
        };
        ChartLayouts.prototype.startEdit = function (layout) {
            this.editMode = true;
            aurelia_validation_1.ValidationRules
                .ensure(function (u) { return u.title; }).displayName("Layout name").required().withMessage("${$displayName} cannot be blank.")
                .ensure(function (u) { return u.description; }).displayName("Description").required().withMessage("${$displayName} cannot be blank.")
                .on(layout);
            this.validation.reset();
        };
        ChartLayouts.prototype.cancelAddLayout = function () {
            this.addingMode = false;
        };
        ChartLayouts.prototype.saveLayout = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.layoutService.saveLayout(this.newLayout)];
                        case 1:
                            _a.sent();
                            this.addingMode = false;
                            return [2];
                    }
                });
            });
        };
        ChartLayouts = tslib_1.__decorate([
            aurelia_framework_1.autoinject(),
            tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService, aurelia_event_aggregator_1.EventAggregator,
                services_generated_1.LayoutApiClient, aurelia_validation_1.ValidationController])
        ], ChartLayouts);
        return ChartLayouts;
    }());
    exports.ChartLayouts = ChartLayouts;
});

define('components/market/jobs-dashboard/jobs/job',["require", "exports", "tslib", "aurelia-framework", "../../../../services/account-service", "aurelia-event-aggregator", "../../../../common/helpers/date-helper", "../../../../services/services-generated", "../../../../common/types/job-models"], function (require, exports, tslib_1, aurelia_framework_1, account_service_1, aurelia_event_aggregator_1, date_helper_1, services_generated_1, job_models_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.loadCurrentJob()];
                        case 1:
                            _a.sent();
                            return [4, this.loadHistory()];
                        case 2:
                            _a.sent();
                            this.watchCurrentJob();
                            return [2];
                    }
                });
            });
        };
        Job.prototype.loadHistory = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var jobType, _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.jobs = [];
                            jobType = job_models_1.JobInfoExtentions.getJobType(this.jobUrl);
                            _a = this;
                            return [4, this.jobService.getSheduledJobHistory(jobType)];
                        case 1:
                            _a.jobs = _b.sent();
                            return [2];
                    }
                });
            });
        };
        Job.prototype.loadCurrentJob = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var jobType, _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            jobType = job_models_1.JobInfoExtentions.getJobType(this.jobUrl);
                            _a = this;
                            return [4, this.jobService.getCurrentJob(jobType)];
                        case 1:
                            _a.currentJob = _b.sent();
                            return [2];
                    }
                });
            });
        };
        Job.prototype.deleteAll = function () {
            this.jobs = [];
        };
        Job.prototype.startJob = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var jobType, _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            jobType = job_models_1.JobInfoExtentions.getJobType(this.jobUrl);
                            _a = this;
                            return [4, this.jobService.startScheduledJobs(jobType)];
                        case 1:
                            _a.currentJob = _b.sent();
                            this.watchCurrentJob();
                            return [2];
                    }
                });
            });
        };
        Job.prototype.watchCurrentJob = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.currentJob != null && this.currentJob.jobId > 0)) return [3, 1];
                            setTimeout(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4, this.loadCurrentJob()];
                                        case 1:
                                            _a.sent();
                                            this.watchCurrentJob();
                                            return [2];
                                    }
                                });
                            }); }, 1000);
                            return [3, 3];
                        case 1: return [4, this.loadHistory()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        Job.prototype.resumeJob = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4, this.jobService.resumeScheduledJob(this.currentJob.jobId)];
                        case 1:
                            _b.sent();
                            _a = this;
                            return [4, this.jobService.getJob(this.currentJob.jobId)];
                        case 2:
                            _a.currentJob = _b.sent();
                            return [2];
                    }
                });
            });
        };
        Job.prototype.pauseJob = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4, this.jobService.pauseScheduledJob(this.currentJob.jobId)];
                        case 1:
                            _b.sent();
                            _a = this;
                            return [4, this.jobService.getJob(this.currentJob.jobId)];
                        case 2:
                            _a.currentJob = _b.sent();
                            return [2];
                    }
                });
            });
        };
        Job.prototype.cancelJob = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.jobService.cancelScheduledJob(this.currentJob.jobId)];
                        case 1:
                            _a.sent();
                            return [4, this.loadJobs()];
                        case 2:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        Object.defineProperty(Job.prototype, "currentJobInProgress", {
            get: function () {
                return job_models_1.JobInfoExtentions.isJobInProgress(this.currentJob);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Job.prototype, "currentJobPaused", {
            get: function () {
                return job_models_1.JobInfoExtentions.isJobPaused(this.currentJob);
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
                    return job_models_1.JobInfoExtentions.getJobTypeName(this.currentJob.jobType);
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Job.prototype, "jobStatusName", {
            get: function () {
                if (this.currentJob) {
                    return job_models_1.JobInfoExtentions.getJobStatusName(this.currentJob.status);
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Job.prototype, "startDate", {
            get: function () {
                if (this.currentJob) {
                    return date_helper_1.DateHelper.getUIDate(this.currentJob.startDate);
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
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
        tslib_1.__decorate([
            aurelia_framework_1.computedFrom("currentJob.startDate"),
            tslib_1.__metadata("design:type", String),
            tslib_1.__metadata("design:paramtypes", [])
        ], Job.prototype, "startDate", null);
        Job = tslib_1.__decorate([
            aurelia_framework_1.autoinject(),
            tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService, services_generated_1.JobsApiClient, aurelia_event_aggregator_1.EventAggregator])
        ], Job);
        return Job;
    }());
    exports.Job = Job;
});

define('components/market/market-indices/indices/market-index',["require", "exports", "tslib", "aurelia-framework", "../../../../services/account-service", "aurelia-event-aggregator", "../../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, account_service_1, aurelia_event_aggregator_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MarketIndex = (function () {
        function MarketIndex(account, eventAggregator, companyService) {
            var _this = this;
            this.companyService = companyService;
            this.powerUser = false;
            this.subscription = null;
            this.router = null;
            this.title = "";
            this.indexUrl = "";
            this.indexInfo = null;
            this.powerUser = account.currentUser.isAuthenticated;
            this.subscription = eventAggregator.subscribe("router:navigation:complete", function () {
                _this.onNavigatioComplete();
            });
        }
        MarketIndex.prototype.onNavigatioComplete = function () {
            this.title = this.router.currentInstruction.config.title;
            this.indexUrl = this.router.currentInstruction.config.name;
            this.loadIndex();
        };
        MarketIndex.prototype.activate = function (params, routeconfig, navigationInstruction) {
            this.router = navigationInstruction.router;
            if (params && routeconfig) {
            }
        };
        MarketIndex.prototype.detached = function () {
            this.subscription.dispose();
        };
        MarketIndex.prototype.loadIndex = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.companyService.getCompany(this.indexUrl)];
                        case 1:
                            _a.indexInfo = _b.sent();
                            return [2];
                    }
                });
            });
        };
        MarketIndex = tslib_1.__decorate([
            aurelia_framework_1.autoinject(),
            tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService, aurelia_event_aggregator_1.EventAggregator, services_generated_1.CompaniesApiClient])
        ], MarketIndex);
        return MarketIndex;
    }());
    exports.MarketIndex = MarketIndex;
});

define('components/studies/study/category-studies/category-studies',["require", "exports", "tslib", "aurelia-framework", "../../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CategoryStudies = (function () {
        function CategoryStudies(articleService) {
            this.articleService = articleService;
        }
        CategoryStudies.prototype.categoryChanged = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.category && this.category.categoryId > 0)) return [3, 2];
                            return [4, this.loadArticles(this.category.categoryId)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2];
                    }
                });
            });
        };
        CategoryStudies.prototype.loadArticles = function (categoryId) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.articleService.getArticles(categoryId)];
                        case 1:
                            _a.articles = _b.sent();
                            return [2];
                    }
                });
            });
        };
        CategoryStudies.prototype.navigateToArticle = function (url) {
            console.log(url);
        };
        CategoryStudies.prototype.deleteArticle = function () {
        };
        CategoryStudies.prototype.addArticle = function () {
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.CategoryModel)
        ], CategoryStudies.prototype, "category", void 0);
        CategoryStudies = tslib_1.__decorate([
            aurelia_framework_1.autoinject(),
            tslib_1.__metadata("design:paramtypes", [services_generated_1.ArticlesApiClient])
        ], CategoryStudies);
        return CategoryStudies;
    }());
    exports.CategoryStudies = CategoryStudies;
});

define('components/studies/study/study-actions/study-actions',["require", "exports", "tslib", "aurelia-framework", "aurelia-router", "../../../../infrastructure/event-emitter"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_router_1, event_emitter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StudyActions = (function () {
        function StudyActions(eventEmitter, router) {
            this.eventEmitter = eventEmitter;
            this.router = router;
            this.powerUser = true;
        }
        StudyActions.prototype.startEdit = function () {
            this.eventEmitter.publish("Article-StartEdit");
        };
        StudyActions.prototype.cancelEdit = function () {
            this.eventEmitter.publish("Article-CancelEdit");
        };
        StudyActions.prototype.saveArticle = function () {
            this.eventEmitter.publish("Article-Save");
        };
        StudyActions.prototype.manageCategories = function () {
            this.router.navigateToRoute("categories");
        };
        StudyActions = tslib_1.__decorate([
            aurelia_framework_1.autoinject(),
            tslib_1.__metadata("design:paramtypes", [event_emitter_1.EventEmitter,
                aurelia_router_1.Router])
        ], StudyActions);
        return StudyActions;
    }());
    exports.StudyActions = StudyActions;
});

define('components/market/jobs-dashboard/jobs/job-details/job-details',["require", "exports", "tslib", "aurelia-framework", "../../../../../common/helpers/date-helper", "../../../../../common/types/job-models", "../../../../../services/services-generated"], function (require, exports, tslib_1, aurelia_framework_1, date_helper_1, job_models_1, services_generated_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JobDetails = (function () {
        function JobDetails(logService, jobService) {
            this.logService = logService;
            this.jobService = jobService;
            this.expanded = false;
            this.deleted = false;
            this.jobLogs = [];
        }
        JobDetails.prototype.expand = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.expanded = !this.expanded;
                            if (!(this.expanded && this.jobLogs != null && this.jobLogs.length === 0 && this.job != null)) return [3, 2];
                            _a = this;
                            return [4, this.logService.getJobLogs(this.job.jobId)];
                        case 1:
                            _a.jobLogs = _b.sent();
                            _b.label = 2;
                        case 2: return [2];
                    }
                });
            });
        };
        JobDetails.prototype.deleteJob = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.job != null && this.job.jobId > 0)) return [3, 3];
                            return [4, this.logService.deleteJobLogs(this.job.jobId)];
                        case 1:
                            _a.sent();
                            return [4, this.jobService.deleteScheduledJob(this.job.jobId)];
                        case 2:
                            _a.sent();
                            this.deleted = true;
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        Object.defineProperty(JobDetails.prototype, "completed", {
            get: function () {
                if (this.job != null) {
                    return date_helper_1.DateHelper.getUIDate(this.job.startDate);
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        JobDetails.prototype.runTime = function () {
            if (this.job != null) {
                return date_helper_1.DateHelper.runTime(this.job.startDate, this.job.completedDate);
            }
            return "";
        };
        Object.defineProperty(JobDetails.prototype, "status", {
            get: function () {
                if (this.job) {
                    return job_models_1.JobInfoExtentions.getJobStatusName(this.job.status);
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", services_generated_1.ScheduledJob)
        ], JobDetails.prototype, "job", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.computedFrom("job.status"),
            tslib_1.__metadata("design:type", String),
            tslib_1.__metadata("design:paramtypes", [])
        ], JobDetails.prototype, "status", null);
        JobDetails = tslib_1.__decorate([
            aurelia_framework_1.autoinject(),
            tslib_1.__metadata("design:paramtypes", [services_generated_1.LogsApiClient, services_generated_1.JobsApiClient])
        ], JobDetails);
        return JobDetails;
    }());
    exports.JobDetails = JobDetails;
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
            object = aurelia_binding_1.getContextFor(expression.name, source, expression.ancestor);
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

define('aurelia-validation/property-accessor-parser',["require", "exports", "aurelia-binding", "./util"], function (require, exports, aurelia_binding_1, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PropertyAccessorParser = (function () {
        function PropertyAccessorParser(parser) {
            this.parser = parser;
        }
        PropertyAccessorParser.prototype.parse = function (property) {
            if (util_1.isString(property)) {
                return property;
            }
            var accessorText = getAccessorExpression(property.toString());
            var accessor = this.parser.parse(accessorText);
            if (accessor instanceof aurelia_binding_1.AccessScope
                || accessor instanceof aurelia_binding_1.AccessMember && accessor.object instanceof aurelia_binding_1.AccessScope) {
                return accessor.name;
            }
            throw new Error("Invalid property expression: \"" + accessor + "\"");
        };
        PropertyAccessorParser.inject = [aurelia_binding_1.Parser];
        return PropertyAccessorParser;
    }());
    exports.PropertyAccessorParser = PropertyAccessorParser;
    function getAccessorExpression(fn) {
        /* tslint:disable:max-line-length */
        var classic = /^function\s*\([$_\w\d]+\)\s*\{(?:\s*"use strict";)?\s*(?:[$_\w\d.['"\]+;]+)?\s*return\s+[$_\w\d]+\.([$_\w\d]+)\s*;?\s*\}$/;
        /* tslint:enable:max-line-length */
        var arrow = /^\(?[$_\w\d]+\)?\s*=>\s*[$_\w\d]+\.([$_\w\d]+)$/;
        var match = classic.exec(fn) || arrow.exec(fn);
        if (match === null) {
            throw new Error("Unable to parse accessor function:\n" + fn);
        }
        return match[1];
    }
    exports.getAccessorExpression = getAccessorExpression;
});

define('aurelia-validation/util',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isString(value) {
        return Object.prototype.toString.call(value) === '[object String]';
    }
    exports.isString = isString;
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
        ValidateBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
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
        ValidateManuallyBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateManuallyBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
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
        ValidateOnBlurBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateOnBlurBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
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
        ValidateOnChangeBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateOnChangeBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
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
        ValidateOnChangeOrBlurBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateOnChangeOrBlurBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
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
                // tslint:disable-next-line:space-before-function-paren
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
                // tslint:disable-next-line:space-before-function-paren
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

define('aurelia-validation/validation-controller',["require", "exports", "./validator", "./validate-trigger", "./property-info", "./validate-result", "./property-accessor-parser", "./validate-event"], function (require, exports, validator_1, validate_trigger_1, property_info_1, validate_result_1, property_accessor_parser_1, validate_event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Orchestrates validation.
     * Manages a set of bindings, renderers and objects.
     * Exposes the current list of validation results for binding purposes.
     */
    var ValidationController = (function () {
        function ValidationController(validator, propertyParser) {
            this.validator = validator;
            this.propertyParser = propertyParser;
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
            this.eventCallbacks = [];
        }
        /**
         * Subscribe to controller validate and reset events. These events occur when the
         * controller's "validate"" and "reset" methods are called.
         * @param callback The callback to be invoked when the controller validates or resets.
         */
        ValidationController.prototype.subscribe = function (callback) {
            var _this = this;
            this.eventCallbacks.push(callback);
            return {
                dispose: function () {
                    var index = _this.eventCallbacks.indexOf(callback);
                    if (index === -1) {
                        return;
                    }
                    _this.eventCallbacks.splice(index, 1);
                }
            };
        };
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
            var resolvedPropertyName;
            if (propertyName === null) {
                resolvedPropertyName = propertyName;
            }
            else {
                resolvedPropertyName = this.propertyParser.parse(propertyName);
            }
            var result = new validate_result_1.ValidateResult({ __manuallyAdded__: true }, object, resolvedPropertyName, false, message);
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
                _this.invokeCallbacks(instruction, result);
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
            this.invokeCallbacks(instruction, null);
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
        /**
         * Changes the controller's validateTrigger.
         * @param newTrigger The new validateTrigger
         */
        ValidationController.prototype.changeTrigger = function (newTrigger) {
            this.validateTrigger = newTrigger;
            var bindings = Array.from(this.bindings.keys());
            for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
                var binding = bindings_1[_i];
                var source = binding.source;
                binding.unbind();
                binding.bind(source);
            }
        };
        /**
         * Revalidates the controller's current set of errors.
         */
        ValidationController.prototype.revalidateErrors = function () {
            for (var _i = 0, _a = this.errors; _i < _a.length; _i++) {
                var _b = _a[_i], object = _b.object, propertyName = _b.propertyName, rule = _b.rule;
                if (rule.__manuallyAdded__) {
                    continue;
                }
                var rules = [rule];
                this.validate({ object: object, propertyName: propertyName, rules: rules });
            }
        };
        ValidationController.prototype.invokeCallbacks = function (instruction, result) {
            if (this.eventCallbacks.length === 0) {
                return;
            }
            var event = new validate_event_1.ValidateEvent(result ? 'validate' : 'reset', this.errors, this.results, instruction || null, result);
            for (var i = 0; i < this.eventCallbacks.length; i++) {
                this.eventCallbacks[i](event);
            }
        };
        ValidationController.inject = [validator_1.Validator, property_accessor_parser_1.PropertyAccessorParser];
        return ValidationController;
    }());
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
        ValidateResult.nextId = 0;
        return ValidateResult;
    }());
    exports.ValidateResult = ValidateResult;
});

define('aurelia-validation/validate-event',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidateEvent = (function () {
        function ValidateEvent(
            /**
             * The type of validate event. Either "validate" or "reset".
             */
            type, 
            /**
             * The controller's current array of errors. For an array containing both
             * failed rules and passed rules, use the "results" property.
             */
            errors, 
            /**
             * The controller's current array of validate results. This
             * includes both passed rules and failed rules. For an array of only failed rules,
             * use the "errors" property.
             */
            results, 
            /**
             * The instruction passed to the "validate" or "reset" event. Will be null when
             * the controller's validate/reset method was called with no instruction argument.
             */
            instruction, 
            /**
             * In events with type === "validate", this property will contain the result
             * of validating the instruction (see "instruction" property). Use the controllerValidateResult
             * to access the validate results specific to the call to "validate"
             * (as opposed to using the "results" and "errors" properties to access the controller's entire
             * set of results/errors).
             */
            controllerValidateResult) {
            this.type = type;
            this.errors = errors;
            this.results = results;
            this.instruction = instruction;
            this.controllerValidateResult = controllerValidateResult;
        }
        return ValidateEvent;
    }());
    exports.ValidateEvent = ValidateEvent;
});

define('aurelia-validation/validation-controller-factory',["require", "exports", "./validation-controller", "./validator", "./property-accessor-parser"], function (require, exports, validation_controller_1, validator_1, property_accessor_parser_1) {
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
            var propertyParser = this.container.get(property_accessor_parser_1.PropertyAccessorParser);
            return new validation_controller_1.ValidationController(validator, propertyParser);
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
        return ValidationErrorsCustomAttribute;
    }());
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
        /**
         * The name of the property that stores the rules.
         */
        Rules.key = '__rules__';
        return Rules;
    }());
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
        StandardValidator.inject = [validation_messages_1.ValidationMessageProvider, aurelia_templating_1.ViewResources];
        return StandardValidator;
    }(validator_1.Validator));
    exports.StandardValidator = StandardValidator;
});

define('aurelia-validation/implementation/validation-messages',["require", "exports", "./validation-message-parser"], function (require, exports, validation_message_parser_1) {
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
            return this.parser.parse(message);
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
        ValidationMessageProvider.inject = [validation_message_parser_1.ValidationMessageParser];
        return ValidationMessageProvider;
    }());
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
define('aurelia-validation/implementation/validation-message-parser',["require", "exports", "aurelia-binding", "aurelia-templating", "aurelia-logging", "./expression-visitor"], function (require, exports, aurelia_binding_1, aurelia_templating_1, LogManager, expression_visitor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationMessageParser = (function () {
        function ValidationMessageParser(bindinqLanguage) {
            this.bindinqLanguage = bindinqLanguage;
            this.emptyStringExpression = new aurelia_binding_1.LiteralString('');
            this.nullExpression = new aurelia_binding_1.LiteralPrimitive(null);
            this.undefinedExpression = new aurelia_binding_1.LiteralPrimitive(undefined);
            this.cache = {};
        }
        ValidationMessageParser.prototype.parse = function (message) {
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
        ValidationMessageParser.prototype.coalesce = function (part) {
            // part === null || part === undefined ? '' : part
            return new aurelia_binding_1.Conditional(new aurelia_binding_1.Binary('||', new aurelia_binding_1.Binary('===', part, this.nullExpression), new aurelia_binding_1.Binary('===', part, this.undefinedExpression)), this.emptyStringExpression, new aurelia_binding_1.CallMember(part, 'toString', []));
        };
        ValidationMessageParser.inject = [aurelia_templating_1.BindingLanguage];
        return ValidationMessageParser;
    }());
    exports.ValidationMessageParser = ValidationMessageParser;
    var MessageExpressionValidator = (function (_super) {
        __extends(MessageExpressionValidator, _super);
        function MessageExpressionValidator(originalMessage) {
            var _this = _super.call(this) || this;
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
    }(expression_visitor_1.ExpressionVisitor));
    exports.MessageExpressionValidator = MessageExpressionValidator;
});

define('aurelia-validation/implementation/expression-visitor',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable:no-empty
    var ExpressionVisitor = (function () {
        function ExpressionVisitor() {
        }
        ExpressionVisitor.prototype.visitChain = function (chain) {
            this.visitArgs(chain.expressions);
        };
        ExpressionVisitor.prototype.visitBindingBehavior = function (behavior) {
            behavior.expression.accept(this);
            this.visitArgs(behavior.args);
        };
        ExpressionVisitor.prototype.visitValueConverter = function (converter) {
            converter.expression.accept(this);
            this.visitArgs(converter.args);
        };
        ExpressionVisitor.prototype.visitAssign = function (assign) {
            assign.target.accept(this);
            assign.value.accept(this);
        };
        ExpressionVisitor.prototype.visitConditional = function (conditional) {
            conditional.condition.accept(this);
            conditional.yes.accept(this);
            conditional.no.accept(this);
        };
        ExpressionVisitor.prototype.visitAccessThis = function (access) {
            access.ancestor = access.ancestor;
        };
        ExpressionVisitor.prototype.visitAccessScope = function (access) {
            access.name = access.name;
        };
        ExpressionVisitor.prototype.visitAccessMember = function (access) {
            access.object.accept(this);
        };
        ExpressionVisitor.prototype.visitAccessKeyed = function (access) {
            access.object.accept(this);
            access.key.accept(this);
        };
        ExpressionVisitor.prototype.visitCallScope = function (call) {
            this.visitArgs(call.args);
        };
        ExpressionVisitor.prototype.visitCallFunction = function (call) {
            call.func.accept(this);
            this.visitArgs(call.args);
        };
        ExpressionVisitor.prototype.visitCallMember = function (call) {
            call.object.accept(this);
            this.visitArgs(call.args);
        };
        ExpressionVisitor.prototype.visitPrefix = function (prefix) {
            prefix.expression.accept(this);
        };
        ExpressionVisitor.prototype.visitBinary = function (binary) {
            binary.left.accept(this);
            binary.right.accept(this);
        };
        ExpressionVisitor.prototype.visitLiteralPrimitive = function (literal) {
            literal.value = literal.value;
        };
        ExpressionVisitor.prototype.visitLiteralArray = function (literal) {
            this.visitArgs(literal.elements);
        };
        ExpressionVisitor.prototype.visitLiteralObject = function (literal) {
            this.visitArgs(literal.values);
        };
        ExpressionVisitor.prototype.visitLiteralString = function (literal) {
            literal.value = literal.value;
        };
        ExpressionVisitor.prototype.visitArgs = function (args) {
            for (var i = 0; i < args.length; i++) {
                args[i].accept(this);
            }
        };
        return ExpressionVisitor;
    }());
    exports.ExpressionVisitor = ExpressionVisitor;
});

define('aurelia-validation/implementation/validation-rules',["require", "exports", "./rules", "./validation-messages", "../util"], function (require, exports, rules_1, validation_messages_1, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Part of the fluent rule API. Enables customizing property rules.
     */
    var FluentRuleCustomizer = (function () {
        function FluentRuleCustomizer(property, condition, config, fluentEnsure, fluentRules, parsers) {
            if (config === void 0) { config = {}; }
            this.fluentEnsure = fluentEnsure;
            this.fluentRules = fluentRules;
            this.parsers = parsers;
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
            this.rule.message = this.parsers.message.parse(message);
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
        function FluentRules(fluentEnsure, parsers, property) {
            this.fluentEnsure = fluentEnsure;
            this.parsers = parsers;
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
            return new FluentRuleCustomizer(this.property, condition, config, this.fluentEnsure, this, this.parsers);
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
        FluentRules.customRules = {};
        return FluentRules;
    }());
    exports.FluentRules = FluentRules;
    /**
     * Part of the fluent rule API. Enables targeting properties and objects with rules.
     */
    var FluentEnsure = (function () {
        function FluentEnsure(parsers) {
            this.parsers = parsers;
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
            var name = this.parsers.property.parse(property);
            var fluentRules = new FluentRules(this, this.parsers, { name: name, displayName: null });
            return this.mergeRules(fluentRules, name);
        };
        /**
         * Targets an object with validation rules.
         */
        FluentEnsure.prototype.ensureObject = function () {
            this.assertInitialized();
            var fluentRules = new FluentRules(this, this.parsers, { name: null, displayName: null });
            return this.mergeRules(fluentRules, null);
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
            if (this.parsers) {
                return;
            }
            throw new Error("Did you forget to add \".plugin('aurelia-validation')\" to your main.js?");
        };
        FluentEnsure.prototype.mergeRules = function (fluentRules, propertyName) {
            var existingRules = this.rules.find(function (r) { return r.length > 0 && r[0].property.name === propertyName; });
            if (existingRules) {
                var rule = existingRules[existingRules.length - 1];
                fluentRules.sequence = rule.sequence;
                if (rule.property.displayName !== null) {
                    fluentRules = fluentRules.displayName(rule.property.displayName);
                }
            }
            return fluentRules;
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
        ValidationRules.initialize = function (messageParser, propertyParser) {
            this.parsers = {
                message: messageParser,
                property: propertyParser
            };
        };
        /**
         * Target a property with validation rules.
         * @param property The property to target. Can be the property name or a property accessor function.
         */
        ValidationRules.ensure = function (property) {
            return new FluentEnsure(ValidationRules.parsers).ensure(property);
        };
        /**
         * Targets an object with validation rules.
         */
        ValidationRules.ensureObject = function () {
            return new FluentEnsure(ValidationRules.parsers).ensureObject();
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
         * Returns rules that have no tag.
         * @param rules The rules to search.
         */
        ValidationRules.untaggedRules = function (rules) {
            return rules.map(function (x) { return x.filter(function (r) { return r.tag === undefined; }); });
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

define('aurelia-dialog/dialog-configuration',["require", "exports", "./renderer", "./dialog-settings", "./dialog-renderer", "aurelia-pal"], function (require, exports, renderer_1, dialog_settings_1, dialog_renderer_1, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var defaultRenderer = dialog_renderer_1.DialogRenderer;
    var resources = {
        'ux-dialog': aurelia_pal_1.PLATFORM.moduleName('./ux-dialog'),
        'ux-dialog-header': aurelia_pal_1.PLATFORM.moduleName('./ux-dialog-header'),
        'ux-dialog-body': aurelia_pal_1.PLATFORM.moduleName('./ux-dialog-body'),
        'ux-dialog-footer': aurelia_pal_1.PLATFORM.moduleName('./ux-dialog-footer'),
        'attach-focus': aurelia_pal_1.PLATFORM.moduleName('./attach-focus')
    };
    // tslint:disable-next-line:max-line-length
    var defaultCSSText = "ux-dialog-container,ux-dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0}ux-dialog-overlay{opacity:0}ux-dialog-overlay.active{opacity:1}ux-dialog-container{display:block;transition:opacity .2s linear;opacity:0;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}ux-dialog-container.active{opacity:1}ux-dialog-container>div{padding:30px}ux-dialog-container>div>div{display:block;min-width:300px;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto}ux-dialog-container,ux-dialog-container>div,ux-dialog-container>div>div{outline:0}ux-dialog{display:table;box-shadow:0 5px 15px rgba(0,0,0,.5);border:1px solid rgba(0,0,0,.2);border-radius:5px;padding:3px;min-width:300px;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;background:#fff}ux-dialog>ux-dialog-header{display:block;padding:16px;border-bottom:1px solid #e5e5e5}ux-dialog>ux-dialog-header>button{float:right;border:none;display:block;width:32px;height:32px;background:0 0;font-size:22px;line-height:16px;margin:-14px -16px 0 0;padding:0;cursor:pointer}ux-dialog>ux-dialog-body{display:block;padding:16px}ux-dialog>ux-dialog-footer{display:block;padding:6px;border-top:1px solid #e5e5e5;text-align:right}ux-dialog>ux-dialog-footer button{color:#333;background-color:#fff;padding:6px 12px;font-size:14px;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid #ccc;border-radius:4px;margin:5px 0 5px 5px}ux-dialog>ux-dialog-footer button:disabled{cursor:default;opacity:.45}ux-dialog>ux-dialog-footer button:hover:enabled{color:#333;background-color:#e6e6e6;border-color:#adadad}.ux-dialog-open{overflow:hidden}";
    /**
     * A configuration builder for the dialog plugin.
     */
    var DialogConfiguration = (function () {
        function DialogConfiguration(frameworkConfiguration, applySetter) {
            var _this = this;
            this.resources = [];
            this.fwConfig = frameworkConfiguration;
            this.settings = this.fwConfig.container.get(dialog_settings_1.DefaultDialogSettings);
            applySetter(function () { return _this._apply(); });
        }
        DialogConfiguration.prototype._apply = function () {
            var _this = this;
            this.fwConfig.transient(renderer_1.Renderer, this.renderer);
            this.resources.forEach(function (resourceName) { return _this.fwConfig.globalResources(resources[resourceName]); });
            if (this.cssText) {
                aurelia_pal_1.DOM.injectStyles(this.cssText);
            }
        };
        /**
         * Selects the Aurelia conventional defaults for the dialog plugin.
         * @return This instance.
         */
        DialogConfiguration.prototype.useDefaults = function () {
            return this.useRenderer(defaultRenderer)
                .useCSS(defaultCSSText)
                .useStandardResources();
        };
        /**
         * Exports the standard set of dialog behaviors to Aurelia's global resources.
         * @return This instance.
         */
        DialogConfiguration.prototype.useStandardResources = function () {
            return this.useResource('ux-dialog')
                .useResource('ux-dialog-header')
                .useResource('ux-dialog-body')
                .useResource('ux-dialog-footer')
                .useResource('attach-focus');
        };
        /**
         * Exports the chosen dialog element or view to Aurelia's global resources.
         * @param resourceName The name of the dialog resource to export.
         * @return This instance.
         */
        DialogConfiguration.prototype.useResource = function (resourceName) {
            this.resources.push(resourceName);
            return this;
        };
        /**
         * Configures the plugin to use a specific dialog renderer.
         * @param renderer A type that implements the Renderer interface.
         * @param settings Global settings for the renderer.
         * @return This instance.
         */
        DialogConfiguration.prototype.useRenderer = function (renderer, settings) {
            this.renderer = renderer;
            if (settings) {
                Object.assign(this.settings, settings);
            }
            return this;
        };
        /**
         * Configures the plugin to use specific css.
         * @param cssText The css to use in place of the default styles.
         * @return This instance.
         */
        DialogConfiguration.prototype.useCSS = function (cssText) {
            this.cssText = cssText;
            return this;
        };
        return DialogConfiguration;
    }());
    exports.DialogConfiguration = DialogConfiguration;
});

define('aurelia-dialog/renderer',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * An abstract base class for implementors of the basic Renderer API.
     */
    var Renderer = (function () {
        function Renderer() {
        }
        /**
         * Gets an anchor for the ViewSlot to insert a view into.
         * @returns A DOM element.
         */
        Renderer.prototype.getDialogContainer = function () {
            throw new Error('DialogRenderer must implement getDialogContainer().');
        };
        /**
         * Displays the dialog.
         * @returns Promise A promise that resolves when the dialog has been displayed.
         */
        Renderer.prototype.showDialog = function (dialogController) {
            throw new Error('DialogRenderer must implement showDialog().');
        };
        /**
         * Hides the dialog.
         * @returns Promise A promise that resolves when the dialog has been hidden.
         */
        Renderer.prototype.hideDialog = function (dialogController) {
            throw new Error('DialogRenderer must implement hideDialog().');
        };
        return Renderer;
    }());
    exports.Renderer = Renderer;
});

define('aurelia-dialog/dialog-settings',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @internal
     */
    var DefaultDialogSettings = (function () {
        function DefaultDialogSettings() {
            this.lock = true;
            this.startingZIndex = 1000;
            this.centerHorizontalOnly = false;
            this.rejectOnCancel = false;
            this.ignoreTransitions = false;
        }
        return DefaultDialogSettings;
    }());
    exports.DefaultDialogSettings = DefaultDialogSettings;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-dialog/dialog-renderer',["require", "exports", "aurelia-pal", "aurelia-dependency-injection"], function (require, exports, aurelia_pal_1, aurelia_dependency_injection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var containerTagName = 'ux-dialog-container';
    var overlayTagName = 'ux-dialog-overlay';
    exports.transitionEvent = (function () {
        var transition;
        return function () {
            if (transition) {
                return transition;
            }
            var el = aurelia_pal_1.DOM.createElement('fakeelement');
            var transitions = {
                transition: 'transitionend',
                OTransition: 'oTransitionEnd',
                MozTransition: 'transitionend',
                WebkitTransition: 'webkitTransitionEnd'
            };
            for (var t in transitions) {
                if (el.style[t] !== undefined) {
                    transition = transitions[t];
                    return transition;
                }
            }
            return '';
        };
    })();
    exports.hasTransition = (function () {
        var unprefixedName = 'transitionDuration';
        var el = aurelia_pal_1.DOM.createElement('fakeelement');
        var prefixedNames = ['webkitTransitionDuration', 'oTransitionDuration'];
        var transitionDurationName;
        if (unprefixedName in el.style) {
            transitionDurationName = unprefixedName;
        }
        else {
            transitionDurationName = prefixedNames.find(function (prefixed) { return (prefixed in el.style); });
        }
        return function (element) {
            return !!transitionDurationName && !!(aurelia_pal_1.DOM.getComputedStyle(element)[transitionDurationName]
                .split(',')
                .find(function (duration) { return !!parseFloat(duration); }));
        };
    })();
    var body = aurelia_pal_1.DOM.querySelectorAll('body')[0];
    function getActionKey(e) {
        if ((e.code || e.key) === 'Escape' || e.keyCode === 27) {
            return 'Escape';
        }
        if ((e.code || e.key) === 'Enter' || e.keyCode === 13) {
            return 'Enter';
        }
        return undefined;
    }
    var DialogRenderer = DialogRenderer_1 = (function () {
        function DialogRenderer() {
        }
        DialogRenderer.keyboardEventHandler = function (e) {
            var key = getActionKey(e);
            if (!key) {
                return;
            }
            var top = DialogRenderer_1.dialogControllers[DialogRenderer_1.dialogControllers.length - 1];
            if (!top || !top.settings.keyboard) {
                return;
            }
            var keyboard = top.settings.keyboard;
            if (key === 'Escape'
                && (keyboard === true || keyboard === key || (Array.isArray(keyboard) && keyboard.indexOf(key) > -1))) {
                top.cancel();
            }
            else if (key === 'Enter' && (keyboard === key || (Array.isArray(keyboard) && keyboard.indexOf(key) > -1))) {
                top.ok();
            }
        };
        DialogRenderer.trackController = function (dialogController) {
            if (!DialogRenderer_1.dialogControllers.length) {
                aurelia_pal_1.DOM.addEventListener('keyup', DialogRenderer_1.keyboardEventHandler, false);
            }
            DialogRenderer_1.dialogControllers.push(dialogController);
        };
        DialogRenderer.untrackController = function (dialogController) {
            var i = DialogRenderer_1.dialogControllers.indexOf(dialogController);
            if (i !== -1) {
                DialogRenderer_1.dialogControllers.splice(i, 1);
            }
            if (!DialogRenderer_1.dialogControllers.length) {
                aurelia_pal_1.DOM.removeEventListener('keyup', DialogRenderer_1.keyboardEventHandler, false);
            }
        };
        DialogRenderer.prototype.getOwnElements = function (parent, selector) {
            var elements = parent.querySelectorAll(selector);
            var own = [];
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].parentElement === parent) {
                    own.push(elements[i]);
                }
            }
            return own;
        };
        DialogRenderer.prototype.attach = function (dialogController) {
            var spacingWrapper = aurelia_pal_1.DOM.createElement('div'); // TODO: check if redundant
            spacingWrapper.appendChild(this.anchor);
            this.dialogContainer = aurelia_pal_1.DOM.createElement(containerTagName);
            this.dialogContainer.appendChild(spacingWrapper);
            this.dialogOverlay = aurelia_pal_1.DOM.createElement(overlayTagName);
            var zIndex = typeof dialogController.settings.startingZIndex === 'number'
                ? dialogController.settings.startingZIndex + ''
                : null;
            this.dialogOverlay.style.zIndex = zIndex;
            this.dialogContainer.style.zIndex = zIndex;
            var lastContainer = this.getOwnElements(this.host, containerTagName).pop();
            if (lastContainer && lastContainer.parentElement) {
                this.host.insertBefore(this.dialogContainer, lastContainer.nextSibling);
                this.host.insertBefore(this.dialogOverlay, lastContainer.nextSibling);
            }
            else {
                this.host.insertBefore(this.dialogContainer, this.host.firstChild);
                this.host.insertBefore(this.dialogOverlay, this.host.firstChild);
            }
            dialogController.controller.attached();
            this.host.classList.add('ux-dialog-open');
        };
        DialogRenderer.prototype.detach = function (dialogController) {
            this.host.removeChild(this.dialogOverlay);
            this.host.removeChild(this.dialogContainer);
            dialogController.controller.detached();
            if (!DialogRenderer_1.dialogControllers.length) {
                this.host.classList.remove('ux-dialog-open');
            }
        };
        DialogRenderer.prototype.setAsActive = function () {
            this.dialogOverlay.classList.add('active');
            this.dialogContainer.classList.add('active');
        };
        DialogRenderer.prototype.setAsInactive = function () {
            this.dialogOverlay.classList.remove('active');
            this.dialogContainer.classList.remove('active');
        };
        DialogRenderer.prototype.setupClickHandling = function (dialogController) {
            this.stopPropagation = function (e) { e._aureliaDialogHostClicked = true; };
            this.closeDialogClick = function (e) {
                if (dialogController.settings.overlayDismiss && !e._aureliaDialogHostClicked) {
                    dialogController.cancel();
                }
            };
            this.dialogContainer.addEventListener('click', this.closeDialogClick);
            this.anchor.addEventListener('click', this.stopPropagation);
        };
        DialogRenderer.prototype.clearClickHandling = function () {
            this.dialogContainer.removeEventListener('click', this.closeDialogClick);
            this.anchor.removeEventListener('click', this.stopPropagation);
        };
        DialogRenderer.prototype.centerDialog = function () {
            var child = this.dialogContainer.children[0];
            var vh = Math.max(aurelia_pal_1.DOM.querySelectorAll('html')[0].clientHeight, window.innerHeight || 0);
            child.style.marginTop = Math.max((vh - child.offsetHeight) / 2, 30) + 'px';
            child.style.marginBottom = Math.max((vh - child.offsetHeight) / 2, 30) + 'px';
        };
        DialogRenderer.prototype.awaitTransition = function (setActiveInactive, ignore) {
            var _this = this;
            return new Promise(function (resolve) {
                var renderer = _this;
                var eventName = exports.transitionEvent();
                function onTransitionEnd(e) {
                    if (e.target !== renderer.dialogContainer) {
                        return;
                    }
                    renderer.dialogContainer.removeEventListener(eventName, onTransitionEnd);
                    resolve();
                }
                if (ignore || !exports.hasTransition(_this.dialogContainer)) {
                    resolve();
                }
                else {
                    _this.dialogContainer.addEventListener(eventName, onTransitionEnd);
                }
                setActiveInactive();
            });
        };
        DialogRenderer.prototype.getDialogContainer = function () {
            return this.anchor || (this.anchor = aurelia_pal_1.DOM.createElement('div'));
        };
        DialogRenderer.prototype.showDialog = function (dialogController) {
            var _this = this;
            if (dialogController.settings.host) {
                this.host = dialogController.settings.host;
            }
            else {
                this.host = body;
            }
            var settings = dialogController.settings;
            this.attach(dialogController);
            if (typeof settings.position === 'function') {
                settings.position(this.dialogContainer, this.dialogOverlay);
            }
            else if (!settings.centerHorizontalOnly) {
                this.centerDialog();
            }
            DialogRenderer_1.trackController(dialogController);
            this.setupClickHandling(dialogController);
            return this.awaitTransition(function () { return _this.setAsActive(); }, dialogController.settings.ignoreTransitions);
        };
        DialogRenderer.prototype.hideDialog = function (dialogController) {
            var _this = this;
            this.clearClickHandling();
            DialogRenderer_1.untrackController(dialogController);
            return this.awaitTransition(function () { return _this.setAsInactive(); }, dialogController.settings.ignoreTransitions)
                .then(function () { _this.detach(dialogController); });
        };
        return DialogRenderer;
    }());
    DialogRenderer.dialogControllers = [];
    DialogRenderer = DialogRenderer_1 = __decorate([
        aurelia_dependency_injection_1.transient()
    ], DialogRenderer);
    exports.DialogRenderer = DialogRenderer;
    var DialogRenderer_1;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-dialog/ux-dialog',["require", "exports", "aurelia-templating"], function (require, exports, aurelia_templating_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxDialog = (function () {
        function UxDialog() {
        }
        return UxDialog;
    }());
    UxDialog = __decorate([
        aurelia_templating_1.customElement('ux-dialog'),
        aurelia_templating_1.inlineView("\n  <template>\n    <slot></slot>\n  </template>\n")
    ], UxDialog);
    exports.UxDialog = UxDialog;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-dialog/ux-dialog-header',["require", "exports", "aurelia-templating", "./dialog-controller"], function (require, exports, aurelia_templating_1, dialog_controller_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxDialogHeader = (function () {
        function UxDialogHeader(controller) {
            this.controller = controller;
        }
        UxDialogHeader.prototype.bind = function () {
            if (typeof this.showCloseButton !== 'boolean') {
                this.showCloseButton = !this.controller.settings.lock;
            }
        };
        return UxDialogHeader;
    }());
    /**
     * @internal
     */
    UxDialogHeader.inject = [dialog_controller_1.DialogController];
    __decorate([
        aurelia_templating_1.bindable()
    ], UxDialogHeader.prototype, "showCloseButton", void 0);
    UxDialogHeader = __decorate([
        aurelia_templating_1.customElement('ux-dialog-header'),
        aurelia_templating_1.inlineView("\n  <template>\n    <button\n      type=\"button\"\n      class=\"dialog-close\"\n      aria-label=\"Close\"\n      if.bind=\"showCloseButton\"\n      click.trigger=\"controller.cancel()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n\n    <div class=\"dialog-header-content\">\n      <slot></slot>\n    </div>\n  </template>\n")
    ], UxDialogHeader);
    exports.UxDialogHeader = UxDialogHeader;
});

define('aurelia-dialog/dialog-controller',["require", "exports", "./renderer", "./lifecycle", "./dialog-cancel-error"], function (require, exports, renderer_1, lifecycle_1, dialog_cancel_error_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * A controller object for a Dialog instance.
     */
    var DialogController = (function () {
        /**
         * Creates an instance of DialogController.
         */
        function DialogController(renderer, settings, resolve, reject) {
            this.resolve = resolve;
            this.reject = reject;
            this.settings = settings;
            this.renderer = renderer;
        }
        /**
         * @internal
         */
        DialogController.prototype.releaseResources = function () {
            var _this = this;
            return lifecycle_1.invokeLifecycle(this.controller.viewModel || {}, 'deactivate')
                .then(function () { return _this.renderer.hideDialog(_this); })
                .then(function () { _this.controller.unbind(); });
        };
        /**
         * @internal
         */
        DialogController.prototype.cancelOperation = function () {
            if (!this.settings.rejectOnCancel) {
                return { wasCancelled: true };
            }
            throw dialog_cancel_error_1.createDialogCancelError();
        };
        /**
         * Closes the dialog with a successful output.
         * @param output The returned success output.
         */
        DialogController.prototype.ok = function (output) {
            return this.close(true, output);
        };
        /**
         * Closes the dialog with a cancel output.
         * @param output The returned cancel output.
         */
        DialogController.prototype.cancel = function (output) {
            return this.close(false, output);
        };
        /**
         * Closes the dialog with an error result.
         * @param message An error message.
         * @returns Promise An empty promise object.
         */
        DialogController.prototype.error = function (message) {
            var _this = this;
            return this.releaseResources().then(function () { _this.reject(message); });
        };
        /**
         * Closes the dialog.
         * @param ok Whether or not the user input signified success.
         * @param output The specified output.
         * @returns Promise An empty promise object.
         */
        DialogController.prototype.close = function (ok, output) {
            var _this = this;
            if (this.closePromise) {
                return this.closePromise;
            }
            return this.closePromise = lifecycle_1.invokeLifecycle(this.controller.viewModel || {}, 'canDeactivate').catch(function (reason) {
                _this.closePromise = undefined;
                return Promise.reject(reason);
            }).then(function (canDeactivate) {
                if (!canDeactivate) {
                    _this.closePromise = undefined; // we are done, do not block consecutive calls
                    return _this.cancelOperation();
                }
                return _this.releaseResources().then(function () {
                    if (!_this.settings.rejectOnCancel || ok) {
                        _this.resolve({ wasCancelled: !ok, output: output });
                    }
                    else {
                        _this.reject(dialog_cancel_error_1.createDialogCancelError(output));
                    }
                    return { wasCancelled: false };
                }).catch(function (reason) {
                    _this.closePromise = undefined;
                    return Promise.reject(reason);
                });
            });
        };
        return DialogController;
    }());
    /**
     * @internal
     */
    DialogController.inject = [renderer_1.Renderer];
    exports.DialogController = DialogController;
});

define('aurelia-dialog/lifecycle',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Call a lifecycle method on a viewModel if it exists.
     * @function
     * @param instance The viewModel instance.
     * @param name The lifecycle method name.
     * @param model The model to pass to the lifecycle method.
     * @returns Promise The result of the lifecycle method.
     */
    function invokeLifecycle(instance, name, model) {
        if (typeof instance[name] === 'function') {
            return new Promise(function (resolve) {
                resolve(instance[name](model));
            }).then(function (result) {
                if (result !== null && result !== undefined) {
                    return result;
                }
                return true;
            });
        }
        return Promise.resolve(true);
    }
    exports.invokeLifecycle = invokeLifecycle;
});

define('aurelia-dialog/dialog-cancel-error',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @internal
     */
    function createDialogCancelError(output) {
        var error = new Error('Operation cancelled.');
        error.wasCancelled = true;
        error.output = output;
        return error;
    }
    exports.createDialogCancelError = createDialogCancelError;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-dialog/ux-dialog-body',["require", "exports", "aurelia-templating"], function (require, exports, aurelia_templating_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxDialogBody = (function () {
        function UxDialogBody() {
        }
        return UxDialogBody;
    }());
    UxDialogBody = __decorate([
        aurelia_templating_1.customElement('ux-dialog-body'),
        aurelia_templating_1.inlineView("\n  <template>\n    <slot></slot>\n  </template>\n")
    ], UxDialogBody);
    exports.UxDialogBody = UxDialogBody;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-dialog/ux-dialog-footer',["require", "exports", "aurelia-templating", "./dialog-controller"], function (require, exports, aurelia_templating_1, dialog_controller_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * View-model for footer of Dialog.
     */
    var UxDialogFooter = UxDialogFooter_1 = (function () {
        function UxDialogFooter(controller) {
            this.controller = controller;
            this.buttons = [];
            this.useDefaultButtons = false;
        }
        UxDialogFooter.isCancelButton = function (value) {
            return value === 'Cancel';
        };
        UxDialogFooter.prototype.close = function (buttonValue) {
            if (UxDialogFooter_1.isCancelButton(buttonValue)) {
                this.controller.cancel(buttonValue);
            }
            else {
                this.controller.ok(buttonValue);
            }
        };
        UxDialogFooter.prototype.useDefaultButtonsChanged = function (newValue) {
            if (newValue) {
                this.buttons = ['Cancel', 'Ok'];
            }
        };
        return UxDialogFooter;
    }());
    /**
     * @internal
     */
    UxDialogFooter.inject = [dialog_controller_1.DialogController];
    __decorate([
        aurelia_templating_1.bindable
    ], UxDialogFooter.prototype, "buttons", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxDialogFooter.prototype, "useDefaultButtons", void 0);
    UxDialogFooter = UxDialogFooter_1 = __decorate([
        aurelia_templating_1.customElement('ux-dialog-footer'),
        aurelia_templating_1.inlineView("\n  <template>\n    <slot></slot>\n    <template if.bind=\"buttons.length > 0\">\n      <button type=\"button\"\n        class=\"btn btn-default\"\n        repeat.for=\"button of buttons\"\n        click.trigger=\"close(button)\">\n        ${button}\n      </button>\n    </template>\n  </template>\n")
    ], UxDialogFooter);
    exports.UxDialogFooter = UxDialogFooter;
    var UxDialogFooter_1;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-dialog/attach-focus',["require", "exports", "aurelia-templating", "aurelia-pal"], function (require, exports, aurelia_templating_1, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AttachFocus = (function () {
        function AttachFocus(element) {
            this.element = element;
            this.value = true;
        }
        AttachFocus.prototype.attached = function () {
            if (this.value && this.value !== 'false') {
                this.element.focus();
            }
        };
        AttachFocus.prototype.valueChanged = function (newValue) {
            this.value = newValue;
        };
        return AttachFocus;
    }());
    /**
     * @internal
     */
    AttachFocus.inject = [aurelia_pal_1.DOM.Element];
    AttachFocus = __decorate([
        aurelia_templating_1.customAttribute('attach-focus')
    ], AttachFocus);
    exports.AttachFocus = AttachFocus;
});

define('aurelia-dialog/dialog-service',["require", "exports", "aurelia-dependency-injection", "aurelia-metadata", "aurelia-templating", "./dialog-settings", "./dialog-cancel-error", "./lifecycle", "./dialog-controller"], function (require, exports, aurelia_dependency_injection_1, aurelia_metadata_1, aurelia_templating_1, dialog_settings_1, dialog_cancel_error_1, lifecycle_1, dialog_controller_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* tslint:enable:max-line-length */
    function whenClosed(onfulfilled, onrejected) {
        return this.then(function (r) { return r.wasCancelled ? r : r.closeResult; }).then(onfulfilled, onrejected);
    }
    function asDialogOpenPromise(promise) {
        promise.whenClosed = whenClosed;
        return promise;
    }
    /**
     * A service allowing for the creation of dialogs.
     */
    var DialogService = (function () {
        function DialogService(container, compositionEngine, defaultSettings) {
            /**
             * The current dialog controllers
             */
            this.controllers = [];
            /**
             * Is there an open dialog
             */
            this.hasOpenDialog = false;
            this.hasActiveDialog = false;
            this.container = container;
            this.compositionEngine = compositionEngine;
            this.defaultSettings = defaultSettings;
        }
        DialogService.prototype.validateSettings = function (settings) {
            if (!settings.viewModel && !settings.view) {
                throw new Error('Invalid Dialog Settings. You must provide "viewModel", "view" or both.');
            }
        };
        // tslint:disable-next-line:max-line-length
        DialogService.prototype.createCompositionContext = function (childContainer, host, settings) {
            return {
                container: childContainer.parent,
                childContainer: childContainer,
                bindingContext: null,
                viewResources: null,
                model: settings.model,
                view: settings.view,
                viewModel: settings.viewModel,
                viewSlot: new aurelia_templating_1.ViewSlot(host, true),
                host: host
            };
        };
        DialogService.prototype.ensureViewModel = function (compositionContext) {
            if (typeof compositionContext.viewModel === 'function') {
                compositionContext.viewModel = aurelia_metadata_1.Origin.get(compositionContext.viewModel).moduleId;
            }
            if (typeof compositionContext.viewModel === 'string') {
                return this.compositionEngine.ensureViewModel(compositionContext);
            }
            return Promise.resolve(compositionContext);
        };
        DialogService.prototype._cancelOperation = function (rejectOnCancel) {
            if (!rejectOnCancel) {
                return { wasCancelled: true };
            }
            throw dialog_cancel_error_1.createDialogCancelError();
        };
        // tslint:disable-next-line:max-line-length
        DialogService.prototype.composeAndShowDialog = function (compositionContext, dialogController) {
            var _this = this;
            if (!compositionContext.viewModel) {
                // provide access to the dialog controller for view only dialogs
                compositionContext.bindingContext = { controller: dialogController };
            }
            return this.compositionEngine.compose(compositionContext).then(function (controller) {
                dialogController.controller = controller;
                return dialogController.renderer.showDialog(dialogController).then(function () {
                    _this.controllers.push(dialogController);
                    _this.hasActiveDialog = _this.hasOpenDialog = !!_this.controllers.length;
                }, function (reason) {
                    if (controller.viewModel) {
                        lifecycle_1.invokeLifecycle(controller.viewModel, 'deactivate');
                    }
                    return Promise.reject(reason);
                });
            });
        };
        /**
         * @internal
         */
        DialogService.prototype.createSettings = function (settings) {
            settings = Object.assign({}, this.defaultSettings, settings);
            if (typeof settings.keyboard !== 'boolean' && !settings.keyboard) {
                settings.keyboard = !settings.lock;
            }
            if (typeof settings.overlayDismiss !== 'boolean') {
                settings.overlayDismiss = !settings.lock;
            }
            Object.defineProperty(settings, 'rejectOnCancel', {
                writable: false,
                configurable: true,
                enumerable: true
            });
            this.validateSettings(settings);
            return settings;
        };
        DialogService.prototype.open = function (settings) {
            var _this = this;
            if (settings === void 0) { settings = {}; }
            // tslint:enable:max-line-length
            settings = this.createSettings(settings);
            var childContainer = settings.childContainer || this.container.createChild();
            var resolveCloseResult;
            var rejectCloseResult;
            var closeResult = new Promise(function (resolve, reject) {
                resolveCloseResult = resolve;
                rejectCloseResult = reject;
            });
            var dialogController = childContainer.invoke(dialog_controller_1.DialogController, [settings, resolveCloseResult, rejectCloseResult]);
            childContainer.registerInstance(dialog_controller_1.DialogController, dialogController);
            closeResult.then(function () {
                removeController(_this, dialogController);
            }, function () {
                removeController(_this, dialogController);
            });
            var compositionContext = this.createCompositionContext(childContainer, dialogController.renderer.getDialogContainer(), dialogController.settings);
            var openResult = this.ensureViewModel(compositionContext).then(function (compositionContext) {
                if (!compositionContext.viewModel) {
                    return true;
                }
                return lifecycle_1.invokeLifecycle(compositionContext.viewModel, 'canActivate', dialogController.settings.model);
            }).then(function (canActivate) {
                if (!canActivate) {
                    return _this._cancelOperation(dialogController.settings.rejectOnCancel);
                }
                // if activation granted, compose and show
                return _this.composeAndShowDialog(compositionContext, dialogController)
                    .then(function () { return ({ controller: dialogController, closeResult: closeResult, wasCancelled: false }); });
            });
            return asDialogOpenPromise(openResult);
        };
        /**
         * Closes all open dialogs at the time of invocation.
         * @return Promise<DialogController[]> All controllers whose close operation was cancelled.
         */
        DialogService.prototype.closeAll = function () {
            return Promise.all(this.controllers.slice(0).map(function (controller) {
                if (!controller.settings.rejectOnCancel) {
                    return controller.cancel().then(function (result) {
                        if (result.wasCancelled) {
                            return controller;
                        }
                        return;
                    });
                }
                return controller.cancel().then(function () { return; }).catch(function (reason) {
                    if (reason.wasCancelled) {
                        return controller;
                    }
                    return Promise.reject(reason);
                });
            })).then(function (unclosedControllers) { return unclosedControllers.filter(function (unclosed) { return !!unclosed; }); });
        };
        return DialogService;
    }());
    /**
     * @internal
     */
    DialogService.inject = [aurelia_dependency_injection_1.Container, aurelia_templating_1.CompositionEngine, dialog_settings_1.DefaultDialogSettings];
    exports.DialogService = DialogService;
    function removeController(service, dialogController) {
        var i = service.controllers.indexOf(dialogController);
        if (i !== -1) {
            service.controllers.splice(i, 1);
            service.hasActiveDialog = service.hasOpenDialog = !!service.controllers.length;
        }
    }
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./app.css\"></require><require from=\"./components/header/dream-header\"></require><require from=\"./components/footer/dream-footer\"></require><require from=\"./components/main-nav/main-nav\"></require><dream-header router.bind=\"router\"></dream-header><main-nav router.bind=\"router\"></main-nav><router-view></router-view><dream-footer></dream-footer></template>"; });
define('text!dialogs/login/user-login.html', ['module'], function(module) { module.exports = "<template><require from=\"./user-login.css\"></require><div class=\"user-login\"><ai-dialog><ai-dialog-body><h3>Login</h3><form class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-12 control-label\">Username / Email</label><div class=\"col-sm-12\"><input type=\"text\" class=\"form-control\" value.bind=\"model.email & validate\"></div></div><div class=\"form-group\"><label class=\"col-sm-12 control-label\">Password</label><div class=\"col-sm-12\"><input type=\"password\" class=\"form-control\" value.bind=\"model.password & validate\"></div></div><div class=\"form-group has-error\" if.bind=\"loginFailed\"><span class=\"help-block validation-message\">Your account or password is incorrect.</span></div></form></ai-dialog-body><ai-dialog-footer><button class=\"btn btn-primary\" click.trigger=\"tryLogin()\">Login</button> <button class=\"btn btn-default\" click.trigger=\"controller.cancel()\">Cancel</button></ai-dialog-footer></ai-dialog></div></template>"; });
define('text!components/footer/dream-footer.html', ['module'], function(module) { module.exports = "<template><require from=\"./dream-footer.css\"></require></template>"; });
define('text!components/header/dream-header.html', ['module'], function(module) { module.exports = "<template><require from=\"./dream-header.css\"></require><div class=\"container\"><div class=\"navbar-brand\"><img class=\"logo\" src=\"/content/images/logo.png\"> <a first-letter-span href=\"/\">Dream Space</a></div><ul class=\"nav navbar-nav navbar-right\"><li role=\"presentation\" class=\"dropdown\" if.bind=\"user.isAuthenticated\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> ${user.firstName} <span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a href.bind=\"loginUrl\">Account</a></li><li><a click.delegate=\"logout()\">Logout</a></li></ul></li><li if.bind=\"user.isAuthenticated !== true\"><a click.delegate=\"login()\">Login</a></li></ul></div></template>"; });
define('text!components/journal/navigation.html', ['module'], function(module) { module.exports = "<template><require from=\"../sub-nav/sub-nav\"></require><sub-nav router.bind=\"router\"></sub-nav><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "@charset 'UTF-8';\n@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@import url(//fonts.googleapis.com/css?family=Open+Sans:400|Roboto);\n@import url(//fonts.googleapis.com/css?family=Istok+Web:400,700);\n@import url(//fonts.googleapis.com/css?family=Inder);\n@import url(//fonts.googleapis.com/css?family=Raleway);\n@import url(//fonts.googleapis.com/css?family=PT+Sans);\n@import url(//fonts.googleapis.com/css?family=Lato);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('/fonts/glyphicons-halflings-regular.eot');\n  src: url('/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('/fonts/glyphicons-halflings-regular.woff') format('woff'), url('/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');\n}\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: 'Hind Vadodara', sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #333333;\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.8) 100%, #ffffff 0%), url(/Content/Images/emma_bg.jpg) no-repeat 0 0;\n  background-size: 100%;\n  background-attachment: fixed;\n  background-position: top;\n}\nbody a,\nbody a:hover {\n  color: #e22004;\n}\nbody a[first-letter-span] {\n  color: #2d4945;\n}\nbody a[first-letter-span] span {\n  color: #e22004;\n}\nbody .aurelia-validation-message {\n  display: none;\n}\nbody .has-success .form-control {\n  border-color: #ccc;\n}\nbody .has-success .form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\nbody .no-border {\n  border: 0!important;\n}\nbody .right {\n  text-align: right!important;\n}\nbody .uppercase {\n  text-transform: uppercase;\n}\nbody .pointer {\n  cursor: pointer!important;\n}\nbody a:hover {\n  cursor: pointer;\n}\nbody h5 {\n  font-size: 16px;\n}\n.btn {\n  font-weight: normal;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  border-radius: 0;\n  min-width: 70px;\n}\n.btn-group .btn,\n.btn-group-vertical .btn {\n  min-width: 10px;\n  margin-right: 0;\n}\n.btn-default {\n  color: #c9302c;\n  border-color: #c9302c;\n}\n.btn-default:active,\n.btn-default:focus {\n  color: #c9302c;\n  border-color: #c9302c;\n  background-color: white;\n}\n.btn-default:hover {\n  color: #c9302c;\n  background-color: rgba(201, 48, 44, 0.05);\n  border-color: #c9302c;\n}\n.btn-danger {\n  background-color: #e22004;\n}\n.dropdown-menu > li > a {\n  font-family: 'Open Sans', sans-serif;\n}\n.btn.active.focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn:active:focus,\n.btn:focus {\n  outline-color: transparent;\n}\n.btn-default.active.focus,\n.btn-default.active:focus,\n.btn-default.active:hover,\n.btn-default:active.focus,\n.btn-default:active:focus,\n.btn-default:active:hover,\n.open > .dropdown-toggle.btn-default.focus,\n.open > .dropdown-toggle.btn-default:focus,\n.open > .dropdown-toggle.btn-default:hover {\n  color: #c9302c;\n  background-color: rgba(201, 48, 44, 0.05);\n  border-color: #c9302c;\n}\n.s-progress {\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  height: 5px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  display: block;\n}\n.s-progress .s-progress-bar {\n  height: 100%;\n  background-color: #5cb85c;\n}\n.page-content {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-bottom: 50px;\n}\n.page-content header {\n  margin-bottom: 15px;\n}\n.page-content header .btn {\n  float: right;\n  margin-left: 10px;\n  margin-top: 25px;\n}\n.page-content header h3 {\n  font-size: 22px;\n  margin-top: 18px;\n  display: inline-block;\n  color: #333333;\n}\n.page-content .actions {\n  float: right;\n  position: relative;\n  top: -39px;\n  margin-right: 0px;\n  margin-bottom: -25px;\n  z-index: 996;\n}\n.page-content .actions .btn {\n  border-radius: 4px 4px 0 0;\n  padding: 2px 12px;\n}\nai-dialog {\n  border-radius: 0;\n}\nai-dialog ai-dialog-body {\n  padding: 15px 30px;\n}\nai-dialog ai-dialog-body h3 {\n  margin: -30px -30px 25px;\n  padding: 20px;\n  font-weight: 500;\n  text-align: center;\n  background-color: #f5f5f5;\n}\nai-dialog ai-dialog-footer {\n  padding-bottom: 20px;\n  border: none;\n  padding-right: 30px;\n}\nai-dialog ai-dialog-footer .btn {\n  margin-left: 14px;\n}\nai-dialog-overlay.active {\n  background-color: black;\n  opacity: .5;\n}\nai-dialog > ai-dialog-footer button.btn-primary,\nai-dialog > ai-dialog-footer button.btn-primary:hover,\nai-dialog > ai-dialog-footer button.btn-primary:hover:enabled {\n  background-color: #2771cd;\n  border: solid 1px #ffffff;\n  color: #ffffff;\n}\nai-dialog > ai-dialog-footer button.btn-default,\nai-dialog > ai-dialog-footer button.btn-default:hover,\nai-dialog > ai-dialog-footer button.btn-default:hover:enabled {\n  background-color: #ffffff;\n  border: solid 1px #2771cd;\n  color: #2771cd;\n}\n.form-group {\n  margin-bottom: 14px;\n}\n.form-group label {\n  font-weight: 500;\n}\n.form-group.has-error label {\n  color: #333333;\n}\n.form-group.has-error input {\n  border-color: #d50525;\n}\n.form-group.has-error span.help-block {\n  margin-left: 18px;\n  color: #CA1D04;\n  display: inline-block;\n  margin-bottom: 0;\n}\n.form-group.has-error span.help-block.validation-message {\n  font-weight: 500;\n  margin-left: 15px;\n}\n.form-group.has-error .input-group-addon {\n  border-color: #d50525;\n  border-right: none;\n  color: #333333;\n  background-color: #f5f5f5;\n}\n.form-group .input-group-addon {\n  border-color: #cacaca;\n  border-radius: 2px;\n}\n.form-control {\n  border-radius: 2px;\n  box-shadow: none;\n  border-color: #cacaca;\n  padding: 6px 15px;\n  color: #4a4a4a;\n}\nselect.form-control {\n  padding: 6px 10px;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #f5f5f5;\n  opacity: 1;\n}\n.form-control {\n  font-size: 14px;\n  border-radius: 0;\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.82);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  cursor: default;\n  background-color: rgba(223, 223, 223, 0.13);\n  color: rgba(0, 0, 0, 0.82);\n  box-shadow: none;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\np.form-control {\n  min-height: 32px;\n  height: auto;\n}\nform {\n  margin-bottom: 10px;\n}\nform .form-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n  margin-left: 15px;\n}\nform label {\n  font-weight: normal;\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.55);\n  margin-bottom: -2px;\n  margin-left: 2px;\n  margin-right: 5px;\n}\nform label input[type=\"file\"] {\n  position: fixed;\n  top: -1000px;\n}\nform .form-group .form-actions {\n  text-align: right;\n  border: 0;\n  padding-top: 0px;\n}\nform .form-group .form-actions .btn {\n  padding: 2px 10px;\n}\nform .form-group .file {\n  background-color: rgba(223, 223, 223, 0.13);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\nform .form-group .file label {\n  margin-left: -2px;\n}\nform .form-group .file span {\n  margin-top: 5px;\n  float: right;\n  margin-right: 10px;\n}\nform .form-group label {\n  margin-right: 5px;\n}\nform .form-group label.btn {\n  padding-top: 6px;\n}\nform .form-inline .form-group {\n  margin-right: 10px;\n}\nform textarea.html {\n  font-family: monospace;\n}\nform .validation-summary-error {\n  color: #CA1D04;\n}\nform .validation-summary-error .glyphicon {\n  font-size: 18px;\n  position: relative;\n}\nform .validation-summary-error .col-xs-1 {\n  width: 20px;\n}\nform .validation-summary-error ul {\n  padding-left: 0;\n}\nform .validation-summary-error ul li {\n  list-style: none;\n}\nform fieldset {\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .form-inline .form-control {\n    width: 100%;\n  }\n}\n.sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n.article {\n  background-color: rgba(255, 255, 255, 0.7);\n  min-height: 50px;\n}\n.article ol li,\n.article ul li {\n  border-bottom: 1px dotted #777;\n  padding: 6px 0;\n  font-size: 14px;\n}\n.article .form-horizontal {\n  margin-top: 18px;\n  display: block;\n  margin-bottom: 25px;\n}\n.article article-image {\n  display: block;\n  text-align: center;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.article article-image img {\n  max-width: 100%;\n}\n.article article-image p {\n  color: #333333;\n  padding-bottom: 0px;\n  margin-top: 5px;\n  font-size: 11px;\n}\n.article article-part.edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.article article-part.edit-mode li {\n  border: none;\n}\n.article article-part.edit-mode li .col-xs-10,\n.article article-part.edit-mode li col-xs-2 {\n  padding: 0;\n  margin: 0;\n}\n.article article-part textarea {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: solid 1px #ccc;\n}\n.article .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.article ordered-list-block {\n  display: block;\n}\n.article ordered-list-block edit-mode {\n  display: block;\n  text-align: right;\n}\n.article ordered-list-block edit-mode li button {\n  margin-bottom: 5px;\n}\n.article heading-block read-mode {\n  display: block;\n  font-family: \"PT Sans\";\n  font-size: 17px;\n  font-weight: 400;\n  color: #000000;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.article heading-block .col-xs-10 {\n  padding-left: 0;\n}\n.article image-block edit-mode {\n  margin-top: 9px;\n  display: block;\n}\n.article image-block edit-mode img {\n  max-width: 100%;\n}\n.article image-block edit-mode .col-xs-3 {\n  text-align: right;\n  padding-top: 7px;\n}\n.article image-block edit-mode .col-xs-9 {\n  padding-left: 0;\n}\n.article image-block edit-mode .row {\n  margin-bottom: 10px;\n}\n.c_article_parts.edit-mode {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_article_parts.edit-mode .c_article_part {\n  border-bottom: solid 1px rgba(204, 204, 204, 0.36);\n}\n.c_article_part {\n  padding-top: 10px;\n  padding-bottom: 0px;\n}\n.c_article_part form h4 {\n  margin-top: 2px;\n  border: 0;\n  color: #333333;\n  margin-bottom: 5px;\n}\n.c_article_part img {\n  width: 100%;\n}\n.c_article_part .form-group {\n  margin-bottom: 10px;\n}\n.c_article_part .form-group .form-control {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.c_article_part .form-group label {\n  padding-top: 10px;\n}\n.c_article_part article-part-list fieldset {\n  margin-bottom: 30px;\n}\n.c_article_part-add {\n  cursor: pointer;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-top: 10px;\n}\n.c_article_part-add .chevron {\n  float: right;\n  color: #008000;\n}\n.form-group {\n  margin-bottom: 10px;\n}\nh3 {\n  font-family: 'Lato', sans-serif;\n}\n.categories .category edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 10px 10px 0 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.categories .category edit-mode .btn-group {\n  float: right;\n  position: relative;\n  top: -20px;\n}\n.side-navigation {\n  font-family: 'Lato', sans-serif;\n  padding: 0 15px;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.side-navigation h3 {\n  padding-top: 20px;\n  margin-top: 0;\n  color: #333333;\n  margin-bottom: 20px;\n}\n.side-navigation .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.side-navigation .block-actions .glyphicon {\n  color: #333333;\n  position: relative;\n  font-size: 12px;\n  top: 1px;\n  margin-right: 2px;\n}\n.side-navigation ul {\n  list-style-type: none;\n  padding-left: 0;\n  padding-bottom: 10px;\n}\n.side-navigation ul li {\n  border-bottom: 1px dotted #777;\n  margin-bottom: 5px;\n  padding: 2px 10px 7px;\n}\n.side-navigation ul li a {\n  color: #333333;\n}\n.side-navigation ul li a.active,\n.side-navigation ul li a:hover {\n  color: #e22004;\n  cursor: pointer;\n  /*text-decoration: none;*/\n  -webkit-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\n.side-navigation ul li a.disabled {\n  opacity: 0.6;\n}\n.side-navigation ul li .glyphicon {\n  font-size: 8px;\n  color: #e22004;\n  position: relative;\n  top: -1px;\n  margin-right: 5px;\n}\n.side-navigation ul li.edit-mode {\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid #DDD;\n}\n.side-navigation ul li.active a {\n  color: #e22004;\n}\n.side-navigation .side-navigation-add .glyphicon,\n.side-navigation .side-navigation-delete .glyphicon {\n  position: relative;\n  font-size: 13px;\n  top: 2px;\n}\n.side-navigation .side-navigation-add .glyphicon {\n  color: #008000;\n}\n.side-navigation .glyphicon-ok {\n  color: #5cb85c;\n}\n.side-navigation .glyphicon-time {\n  color: #f59f25;\n}\n"; });
define('text!components/main-nav/main-nav.html', ['module'], function(module) { module.exports = "<template><require from=\"./main-nav.css\"></require><div class=\"container\"><div class=\"main-nav-items\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a href.bind=\"row.href\">${row.title}</a></li></ul></div></div></template>"; });
define('text!components/market/navigation.html', ['module'], function(module) { module.exports = "<template><sub-nav router.bind=\"router\"></sub-nav><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!components/strategies/navigation.html', ['module'], function(module) { module.exports = "<template><strategy-navigation></strategy-navigation><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!components/strategies/strategy-playground.html', ['module'], function(module) { module.exports = "<template><require from=\"./strategy-playground.css\"></require><strategy-admin></strategy-admin><div class=\"c_playground-content\"><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_playground\"><header><h3 first-letter-span>Strategy Playground</h3></header><form><fieldset><div class=\"form-group\"><label>Selected Strategy</label><p class=\"form-control\" readonly=\"readonly\">${strategy.title}</p></div><div class=\"form-group\"><label>Selected Company</label><div class=\"input-group\"><p class=\"form-control\" readonly=\"readonly\">${company.ticker} - ${company.name}</p><div class=\"input-group-btn\"><button type=\"button\" if.bind=\"!company.show && !searchMode\" click.delegate=\"company.show = true\" class=\"btn btn-default\">Show Details</button> <button type=\"button\" click.delegate=\"searchMode = !!!searchMode\" class=\"btn ${searchMode ? 'btn-default' : 'btn-danger'}\">${searchMode ? 'Cancel' : 'Search'}</button></div></div><div class=\"c_company-details\" if.bind=\"company.show\"><company-details company.bind=\"company\"></company-details><div class=\"c_company-actions\"><button type=\"button\" click.delegate=\"updateCompany(company.ticker)\" class=\"btn btn-danger\">Update</button> <button type=\"button\" click.delegate=\"company.show = false\" class=\"btn btn-default\">Hide</button></div></div></div></fieldset></form><div if.bind=\"searchMode\" class=\"c_companies-content\"><form submit.delegate=\"searchCompanies()\"><fieldset><div class=\"form-inline right\"><label>Company Search:</label><div class=\"input-group\"><input type=\"text\" class=\"form-control uppercase\" value.bind=\"searchCriteria\"><div class=\"input-group-btn\"><button type=\"submit\" disabled.bind=\"searchCriteria.length===0\" class=\"btn btn-danger\">Go</button></div></div></div></fieldset></form><div class=\"c_company_list\" if.bind=\"companies.length > 0\"><div repeat.for=\"company of companies\" class=\"c_company ${$index === $parent.companies.length-1 ? 'no-border': ''}\"><div class=\"c_company-header\"><button type=\"button\" click.trigger=\"selectCompany(company)\" class=\"btn btn-warning btn-xs\">Select</button> <span click.trigger=\"company.expanded = !!!company.expanded\"><span>${company.ticker} - ${company.name}</span> <a class=\"chevron\"><span class=\"glyphicon ${company.expanded ? 'glyphicon-menu-down' : 'glyphicon-menu-left'}\" aria-hidden=\"true\"></span></a></span></div><div class=\"c_company-details\" if.bind=\"company.expanded\"><company-details company.bind=\"company\"></company-details></div></div></div></div><div if.bind=\"strategy.strategyId && company.ticker && !playgroundLoaded\"><div class=\"right\"><button type=\"button\" click.delegate=\"loadPlayground()\" class=\"btn btn-danger\">Load Playground</button></div></div></div><div class=\"col-md-4 col-xs-12\"><side-navigation strategyurl.bind=\"strategy.url\"></side-navigation></div></div><div class=\"row o_chart-content\" if.bind=\"playgroundLoaded\"><div class=\"col-md-8 col-xs-12 c_playground\"><header><h3>Charts</h3></header><div class=\"o_chart\"><stock-chart model.bind=\"playgroundModel\"></stock-chart></div><br></div><div class=\"col-md-4 col-xs-12 c_strategy-runner\"><div class=\"side-navigation\"><h3>Strategy Runner</h3><form><fieldset><div class=\"c_strategy-runner--progress\"><div class=\"form-group\" repeat.for=\"ruleSet of playgroundModel.ruleSets\"><span>${ruleSet.name}</span><s-progress progress.bind=\"ruleSet.progress\"></s-progress><div class=\"col-sm-12\" repeat.for=\"rule of ruleSet.rules\"><span class=\"glyphicon ${rule.valid ? 'glyphicon-ok' : 'glyphicon-time'}\" aria-hidden=\"true\"></span><label>${rule.ruleName}</label></div></div></div><div class=\"c_strategy-runner--options\"><header>Runner</header><div class=\"form-group\"><div class=\"checkbox\"><label><input type=\"checkbox\"> Stop when rules met</label></div></div><div class=\"form-group\"><span class=\"btn-group btn-group-sm\"><button class=\"btn btn-default\" if.bind=\"streaming\" click.delegate=\"stopStreaming()\" type=\"button\"><span class=\"glyphicon glyphicon-pause\" aria-hidden=\"true\"></span></button> <button class=\"btn btn-default\" if.bind=\"!streaming\" click.delegate=\"startStreaming()\" type=\"button\"><span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span></button> <button class=\"btn btn-default\" click.delegate=\"loadPlayground()\" type=\"button\"><span class=\"glyphicon glyphicon-stop\" aria-hidden=\"true\"></span></button> <button class=\"btn btn-default\" click.delegate=\"loadPrev()\" type=\"button\"><span class=\"glyphicon glyphicon-backward\" aria-hidden=\"true\"></span></button> <button class=\"btn btn-default\" click.delegate=\"loadNext()\" type=\"button\"><span class=\"glyphicon glyphicon-forward\" aria-hidden=\"true\"></span></button></span></div></div></fieldset></form></div></div></div></div></template>"; });
define('text!common/styles/common.css', ['module'], function(module) { module.exports = "@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@import url(//fonts.googleapis.com/css?family=Open+Sans:400|Roboto);\n@import url(//fonts.googleapis.com/css?family=Istok+Web:400,700);\n@import url(//fonts.googleapis.com/css?family=Inder);\n@import url(//fonts.googleapis.com/css?family=Raleway);\n@import url(//fonts.googleapis.com/css?family=PT+Sans);\n@import url(//fonts.googleapis.com/css?family=Lato);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('/fonts/glyphicons-halflings-regular.eot');\n  src: url('/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('/fonts/glyphicons-halflings-regular.woff') format('woff'), url('/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');\n}\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: 'Hind Vadodara', sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #333333;\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.8) 100%, #ffffff 0%), url(/Content/Images/emma_bg.jpg) no-repeat 0 0;\n  background-size: 100%;\n  background-attachment: fixed;\n  background-position: top;\n}\nbody a,\nbody a:hover {\n  color: #e22004;\n}\nbody a[first-letter-span] {\n  color: #2d4945;\n}\nbody a[first-letter-span] span {\n  color: #e22004;\n}\nbody .aurelia-validation-message {\n  display: none;\n}\nbody .has-success .form-control {\n  border-color: #ccc;\n}\nbody .has-success .form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\nbody .no-border {\n  border: 0!important;\n}\nbody .right {\n  text-align: right!important;\n}\nbody .uppercase {\n  text-transform: uppercase;\n}\nbody .pointer {\n  cursor: pointer!important;\n}\nbody a:hover {\n  cursor: pointer;\n}\nbody h5 {\n  font-size: 16px;\n}\n.btn {\n  font-weight: normal;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  border-radius: 0;\n  min-width: 70px;\n}\n.btn-group .btn,\n.btn-group-vertical .btn {\n  min-width: 10px;\n  margin-right: 0;\n}\n.btn-default {\n  color: #c9302c;\n  border-color: #c9302c;\n}\n.btn-default:active,\n.btn-default:focus {\n  color: #c9302c;\n  border-color: #c9302c;\n  background-color: white;\n}\n.btn-default:hover {\n  color: #c9302c;\n  background-color: rgba(201, 48, 44, 0.05);\n  border-color: #c9302c;\n}\n.btn-danger {\n  background-color: #e22004;\n}\n.dropdown-menu > li > a {\n  font-family: 'Open Sans', sans-serif;\n}\n.btn.active.focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn:active:focus,\n.btn:focus {\n  outline-color: transparent;\n}\n.btn-default.active.focus,\n.btn-default.active:focus,\n.btn-default.active:hover,\n.btn-default:active.focus,\n.btn-default:active:focus,\n.btn-default:active:hover,\n.open > .dropdown-toggle.btn-default.focus,\n.open > .dropdown-toggle.btn-default:focus,\n.open > .dropdown-toggle.btn-default:hover {\n  color: #c9302c;\n  background-color: rgba(201, 48, 44, 0.05);\n  border-color: #c9302c;\n}\n.s-progress {\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  height: 5px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  display: block;\n}\n.s-progress .s-progress-bar {\n  height: 100%;\n  background-color: #5cb85c;\n}\n.page-content {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-bottom: 50px;\n}\n.page-content header {\n  margin-bottom: 15px;\n}\n.page-content header .btn {\n  float: right;\n  margin-left: 10px;\n  margin-top: 25px;\n}\n.page-content header h3 {\n  font-size: 22px;\n  margin-top: 18px;\n  display: inline-block;\n  color: #333333;\n}\n.page-content .actions {\n  float: right;\n  position: relative;\n  top: -39px;\n  margin-right: 0px;\n  margin-bottom: -25px;\n  z-index: 996;\n}\n.page-content .actions .btn {\n  border-radius: 4px 4px 0 0;\n  padding: 2px 12px;\n}\nai-dialog {\n  border-radius: 0;\n}\nai-dialog ai-dialog-body {\n  padding: 15px 30px;\n}\nai-dialog ai-dialog-body h3 {\n  margin: -30px -30px 25px;\n  padding: 20px;\n  font-weight: 500;\n  text-align: center;\n  background-color: #f5f5f5;\n}\nai-dialog ai-dialog-footer {\n  padding-bottom: 20px;\n  border: none;\n  padding-right: 30px;\n}\nai-dialog ai-dialog-footer .btn {\n  margin-left: 14px;\n}\nai-dialog-overlay.active {\n  background-color: black;\n  opacity: .5;\n}\nai-dialog > ai-dialog-footer button.btn-primary,\nai-dialog > ai-dialog-footer button.btn-primary:hover,\nai-dialog > ai-dialog-footer button.btn-primary:hover:enabled {\n  background-color: #2771cd;\n  border: solid 1px #ffffff;\n  color: #ffffff;\n}\nai-dialog > ai-dialog-footer button.btn-default,\nai-dialog > ai-dialog-footer button.btn-default:hover,\nai-dialog > ai-dialog-footer button.btn-default:hover:enabled {\n  background-color: #ffffff;\n  border: solid 1px #2771cd;\n  color: #2771cd;\n}\n.form-group {\n  margin-bottom: 14px;\n}\n.form-group label {\n  font-weight: 500;\n}\n.form-group.has-error label {\n  color: #333333;\n}\n.form-group.has-error input {\n  border-color: #d50525;\n}\n.form-group.has-error span.help-block {\n  margin-left: 18px;\n  color: #CA1D04;\n  display: inline-block;\n  margin-bottom: 0;\n}\n.form-group.has-error span.help-block.validation-message {\n  font-weight: 500;\n  margin-left: 15px;\n}\n.form-group.has-error .input-group-addon {\n  border-color: #d50525;\n  border-right: none;\n  color: #333333;\n  background-color: #f5f5f5;\n}\n.form-group .input-group-addon {\n  border-color: #cacaca;\n  border-radius: 2px;\n}\n.form-control {\n  border-radius: 2px;\n  box-shadow: none;\n  border-color: #cacaca;\n  padding: 6px 15px;\n  color: #4a4a4a;\n}\nselect.form-control {\n  padding: 6px 10px;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #f5f5f5;\n  opacity: 1;\n}\n.form-control {\n  font-size: 14px;\n  border-radius: 0;\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.82);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  cursor: default;\n  background-color: rgba(223, 223, 223, 0.13);\n  color: rgba(0, 0, 0, 0.82);\n  box-shadow: none;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\np.form-control {\n  min-height: 32px;\n  height: auto;\n}\nform {\n  margin-bottom: 10px;\n}\nform .form-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n  margin-left: 15px;\n}\nform label {\n  font-weight: normal;\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.55);\n  margin-bottom: -2px;\n  margin-left: 2px;\n  margin-right: 5px;\n}\nform label input[type=\"file\"] {\n  position: fixed;\n  top: -1000px;\n}\nform .form-group .form-actions {\n  text-align: right;\n  border: 0;\n  padding-top: 0px;\n}\nform .form-group .form-actions .btn {\n  padding: 2px 10px;\n}\nform .form-group .file {\n  background-color: rgba(223, 223, 223, 0.13);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\nform .form-group .file label {\n  margin-left: -2px;\n}\nform .form-group .file span {\n  margin-top: 5px;\n  float: right;\n  margin-right: 10px;\n}\nform .form-group label {\n  margin-right: 5px;\n}\nform .form-group label.btn {\n  padding-top: 6px;\n}\nform .form-inline .form-group {\n  margin-right: 10px;\n}\nform textarea.html {\n  font-family: monospace;\n}\nform .validation-summary-error {\n  color: #CA1D04;\n}\nform .validation-summary-error .glyphicon {\n  font-size: 18px;\n  position: relative;\n}\nform .validation-summary-error .col-xs-1 {\n  width: 20px;\n}\nform .validation-summary-error ul {\n  padding-left: 0;\n}\nform .validation-summary-error ul li {\n  list-style: none;\n}\nform fieldset {\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .form-inline .form-control {\n    width: 100%;\n  }\n}\n.sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n.article {\n  background-color: rgba(255, 255, 255, 0.7);\n  min-height: 50px;\n}\n.article ol li,\n.article ul li {\n  border-bottom: 1px dotted #777;\n  padding: 6px 0;\n  font-size: 14px;\n}\n.article .form-horizontal {\n  margin-top: 18px;\n  display: block;\n  margin-bottom: 25px;\n}\n.article article-image {\n  display: block;\n  text-align: center;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.article article-image img {\n  max-width: 100%;\n}\n.article article-image p {\n  color: #333333;\n  padding-bottom: 0px;\n  margin-top: 5px;\n  font-size: 11px;\n}\n.article article-part.edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.article article-part.edit-mode li {\n  border: none;\n}\n.article article-part.edit-mode li .col-xs-10,\n.article article-part.edit-mode li col-xs-2 {\n  padding: 0;\n  margin: 0;\n}\n.article article-part textarea {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: solid 1px #ccc;\n}\n.article .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.article ordered-list-block {\n  display: block;\n}\n.article ordered-list-block edit-mode {\n  display: block;\n  text-align: right;\n}\n.article ordered-list-block edit-mode li button {\n  margin-bottom: 5px;\n}\n.article heading-block read-mode {\n  display: block;\n  font-family: \"PT Sans\";\n  font-size: 17px;\n  font-weight: 400;\n  color: #000000;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.article heading-block .col-xs-10 {\n  padding-left: 0;\n}\n.article image-block edit-mode {\n  margin-top: 9px;\n  display: block;\n}\n.article image-block edit-mode img {\n  max-width: 100%;\n}\n.article image-block edit-mode .col-xs-3 {\n  text-align: right;\n  padding-top: 7px;\n}\n.article image-block edit-mode .col-xs-9 {\n  padding-left: 0;\n}\n.article image-block edit-mode .row {\n  margin-bottom: 10px;\n}\n.c_article_parts.edit-mode {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_article_parts.edit-mode .c_article_part {\n  border-bottom: solid 1px rgba(204, 204, 204, 0.36);\n}\n.c_article_part {\n  padding-top: 10px;\n  padding-bottom: 0px;\n}\n.c_article_part form h4 {\n  margin-top: 2px;\n  border: 0;\n  color: #333333;\n  margin-bottom: 5px;\n}\n.c_article_part img {\n  width: 100%;\n}\n.c_article_part .form-group {\n  margin-bottom: 10px;\n}\n.c_article_part .form-group .form-control {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.c_article_part .form-group label {\n  padding-top: 10px;\n}\n.c_article_part article-part-list fieldset {\n  margin-bottom: 30px;\n}\n.c_article_part-add {\n  cursor: pointer;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-top: 10px;\n}\n.c_article_part-add .chevron {\n  float: right;\n  color: #008000;\n}\n.form-group {\n  margin-bottom: 10px;\n}\nh3 {\n  font-family: 'Lato', sans-serif;\n}\n.categories .category edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 10px 10px 0 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.categories .category edit-mode .btn-group {\n  float: right;\n  position: relative;\n  top: -20px;\n}\n.side-navigation {\n  font-family: 'Lato', sans-serif;\n  padding: 0 15px;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.side-navigation h3 {\n  padding-top: 20px;\n  margin-top: 0;\n  color: #333333;\n  margin-bottom: 20px;\n}\n.side-navigation .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.side-navigation .block-actions .glyphicon {\n  color: #333333;\n  position: relative;\n  font-size: 12px;\n  top: 1px;\n  margin-right: 2px;\n}\n.side-navigation ul {\n  list-style-type: none;\n  padding-left: 0;\n  padding-bottom: 10px;\n}\n.side-navigation ul li {\n  border-bottom: 1px dotted #777;\n  margin-bottom: 5px;\n  padding: 2px 10px 7px;\n}\n.side-navigation ul li a {\n  color: #333333;\n}\n.side-navigation ul li a.active,\n.side-navigation ul li a:hover {\n  color: #e22004;\n  cursor: pointer;\n  /*text-decoration: none;*/\n  -webkit-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\n.side-navigation ul li a.disabled {\n  opacity: 0.6;\n}\n.side-navigation ul li .glyphicon {\n  font-size: 8px;\n  color: #e22004;\n  position: relative;\n  top: -1px;\n  margin-right: 5px;\n}\n.side-navigation ul li.edit-mode {\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid #DDD;\n}\n.side-navigation ul li.active a {\n  color: #e22004;\n}\n.side-navigation .side-navigation-add .glyphicon,\n.side-navigation .side-navigation-delete .glyphicon {\n  position: relative;\n  font-size: 13px;\n  top: 2px;\n}\n.side-navigation .side-navigation-add .glyphicon {\n  color: #008000;\n}\n.side-navigation .glyphicon-ok {\n  color: #5cb85c;\n}\n.side-navigation .glyphicon-time {\n  color: #f59f25;\n}\n"; });
define('text!components/strategies/strategy-rule-sets.html', ['module'], function(module) { module.exports = "<template><require from=\"./rules/rule-sets.css\"></require><strategy-admin></strategy-admin><div class=\"c_rule_sets-content\"><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_rule_sets\"><header><h3 first-letter-span>Strategy Rule Sets</h3><h5>${strategy.title}</h5><p class=\"summary\">${strategy.summary}</p></header><div class=\"c_rule_set-list\"><strategy-rule-set repeat.for=\"ruleset of rulesets\" class=\"${$index === $parent.rulesets.length-1 && !editMode ? 'no-border': ''}\" ruleset.bind=\"ruleset\"></strategy-rule-set><div class=\"c_rule_set c_rule_set-add\" show.bind=\"editMode\"><div class=\"c_rule_set-header\" click.delegate=\"addRuleSet()\"><a>Attach Rule Set</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div><div class=\"c_rule_set-details\" show.bind=\"addingMode === true && editMode\"><form><fieldset><div class=\"form-group\"><label>Period</label><select class=\"form-control\" value.bind=\"attachedRuleSet.period\" change.delegate=\"onPeriodSelected()\"><option>- Select Period -</option><option repeat.for=\"period of periods\" model.bind=\"period.id\">${period.name}</option></select></div><div class=\"form-group\"><label>Rule Set</label><select class=\"form-control\" value.bind=\"attachedRuleSet.ruleSetId\" change.delegate=\"onRuleSetSelected()\"><option>- Select Rule Set -</option><option repeat.for=\"periodRuleSet of periodRuleSets\" model.bind=\"periodRuleSet.ruleSetId\">${periodRuleSet.name}</option></select></div><div class=\"form-group\" if.bind=\"attachedRuleSet.ruleSetId > 0\"><label>Description</label><p class=\"form-control\" readonly=\"readonly\">${attachedRuleSet.description}</p></div></fieldset><div class=\"c_rule-actions\"><button type=\"button\" click.delegate=\"confirmAddRuleSet()\" class=\"btn btn-warning\">Attach</button> <button type=\"button\" click.delegate=\"cancelAddRuleSet()\" class=\"btn btn-default\">Cancel</button></div></form></div></div></div><div class=\"c_rule_set-actions\"><button type=\"button\" click.delegate=\"startEdit()\" if.bind=\"!editMode\" class=\"btn btn-danger\">Edit</button> <button type=\"button\" click.delegate=\"trySaveRuleSets()\" if.bind=\"editMode\" class=\"btn btn-danger\">Save</button> <button type=\"button\" click.delegate=\"cancelEdit()\" if.bind=\"editMode\" class=\"btn btn-default\">Cancel</button></div></div><div class=\"col-md-4 col-xs-12\"><side-navigation strategyurl.bind=\"strategy.url\"></side-navigation></div></div></div></template>"; });
define('text!components/strategies/strategy.html', ['module'], function(module) { module.exports = "<template><require from=\"./strategy.css\"></require><div class=\"actions\" if.bind=\"powerUser\"><div if.bind=\"editMode !== true\" class=\"btn-group\" role=\"group\"><button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Administration <span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li><a click.delegate=\"startEdit()\">Edit Article</a></li><li role=\"separator\" class=\"divider\"></li><li><a href=\"/strategies/rules\">Manage Rules</a></li><li><a href=\"/strategies/rule-sets\">Manage Rule Sets</a></li><li><a href=\"/strategies/indicators\">Manage Indicators</a></li></ul></div><div class=\"btn-group\" role=\"group\" aria-label=\"...\" if.bind=\"editMode === true\"><button type=\"button\" click.delegate=\"trySaveArticle()\" class=\"btn btn-danger\">Apply Changes</button> <button type=\"button\" click.delegate=\"cancelEdit()\" class=\"btn btn-default\">Cancel</button></div></div><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_strategy\"><header><h3>${strategy.title}</h3></header><form if.bind=\"editMode === true\"><fieldset><div class=\"form-group\"><label>Strategy Name</label><input type=\"text\" class=\"form-control\" value.bind=\"strategy.title & validate\"></div><div class=\"form-group\"><label>Summary</label><textarea rows=\"4\" class=\"form-control\" value.bind=\"strategy.summary & validate\"></textarea></div><div class=\"form-group\"><label>Strategy Url</label><input type=\"text\" class=\"form-control\" value.bind=\"strategy.url & validate\"></div><div class=\"form-group\"><label>Strategy Status:</label><div class=\"input-group\" style=\"width:40%\"><input type=\"text\" class=\"form-control\" disabled=\"disabled\" aria-label=\"...\" value=\"${strategy.active ? 'Active' : 'Inactive'}\"><div class=\"input-group-btn\"><button type=\"button\" click.delegate=\"setActiveStatus(true)\" if.bind=\"!strategy.active\" class=\"btn btn-danger\">Activate</button> <button type=\"button\" click.delegate=\"setActiveStatus(false)\" if.bind=\"strategy.active\" class=\"btn btn-danger\">Deactivate</button></div></div></div></fieldset><h4>Article Parts</h4></form><div class=\"c_article_parts ${editMode ? 'edit-mode' : ''}\"><article-parts parts.bind=\"strategy.blocks\"></article-parts></div></div><div class=\"col-md-4 col-xs-12\"><div class=\"side-navigation\"><h3>Defined Strategies</h3><ul><li repeat.for=\"summary of summaries\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a click.delegate=\"$parent.navigateToStrategy(summary.url)\" title=\"${summary.summary}\" class=\"${summary.selected ? 'active' : ''} ${summary.active ? '' : 'disabled'}\">${summary.title} Rules</a></li></ul><div if.bind=\"editMode\"><h3>Add / Remove Strategies</h3><ul><li class=\"side-navigation-add\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span> <a click.delegate=\"addStrategy()\">Register New Strategy</a></li><li class=\"side-navigation-delete\"><form><span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> <a click.delegate=\"deleting = true\">Delete Loaded Strategy</a><div class=\"form-actions no-border\" if.bind=\"deleting \"><input class=\"btn btn-danger\" type=\"button\" click.delegate=\"deleteStrategy()\" value=\"Delete\"> <input class=\"btn btn-default\" type=\"button\" click.delegate=\"deleting = false\" value=\"Cancel\"></div></form></li></ul></div></div></div></div></template>"; });
define('text!components/studies/navigation.html', ['module'], function(module) { module.exports = "<template><require from=\"../sub-nav/sub-nav\"></require><sub-nav router.bind=\"router\"></sub-nav><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!common/styles/_article.css', ['module'], function(module) { module.exports = ".article {\n  background-color: rgba(255, 255, 255, 0.7);\n  min-height: 50px;\n}\n.article ol li,\n.article ul li {\n  border-bottom: 1px dotted #777;\n  padding: 6px 0;\n  font-size: 14px;\n}\n.article .form-horizontal {\n  margin-top: 18px;\n  display: block;\n  margin-bottom: 25px;\n}\n.article article-image {\n  display: block;\n  text-align: center;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.article article-image img {\n  max-width: 100%;\n}\n.article article-image p {\n  color: #333333;\n  padding-bottom: 0px;\n  margin-top: 5px;\n  font-size: 11px;\n}\n.article article-part.edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.article article-part.edit-mode li {\n  border: none;\n}\n.article article-part.edit-mode li .col-xs-10,\n.article article-part.edit-mode li col-xs-2 {\n  padding: 0;\n  margin: 0;\n}\n.article article-part textarea {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: solid 1px #ccc;\n}\n.article .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.article ordered-list-block {\n  display: block;\n}\n.article ordered-list-block edit-mode {\n  display: block;\n  text-align: right;\n}\n.article ordered-list-block edit-mode li button {\n  margin-bottom: 5px;\n}\n.article heading-block read-mode {\n  display: block;\n  font-family: \"PT Sans\";\n  font-size: 17px;\n  font-weight: 400;\n  color: #000000;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.article heading-block .col-xs-10 {\n  padding-left: 0;\n}\n.article image-block edit-mode {\n  margin-top: 9px;\n  display: block;\n}\n.article image-block edit-mode img {\n  max-width: 100%;\n}\n.article image-block edit-mode .col-xs-3 {\n  text-align: right;\n  padding-top: 7px;\n}\n.article image-block edit-mode .col-xs-9 {\n  padding-left: 0;\n}\n.article image-block edit-mode .row {\n  margin-bottom: 10px;\n}\n.c_article_parts.edit-mode {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_article_parts.edit-mode .c_article_part {\n  border-bottom: solid 1px rgba(204, 204, 204, 0.36);\n}\n.c_article_part {\n  padding-top: 10px;\n  padding-bottom: 0px;\n}\n.c_article_part form h4 {\n  margin-top: 2px;\n  border: 0;\n  color: #333333;\n  margin-bottom: 5px;\n}\n.c_article_part img {\n  width: 100%;\n}\n.c_article_part .form-group {\n  margin-bottom: 10px;\n}\n.c_article_part .form-group .form-control {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.c_article_part .form-group label {\n  padding-top: 10px;\n}\n.c_article_part article-part-list fieldset {\n  margin-bottom: 30px;\n}\n.c_article_part-add {\n  cursor: pointer;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-top: 10px;\n}\n.c_article_part-add .chevron {\n  float: right;\n  color: #008000;\n}\n.form-group {\n  margin-bottom: 10px;\n}\n"; });
define('text!components/sub-nav/sub-nav.html', ['module'], function(module) { module.exports = "<template><div class=\"sub-nav\"><nav class=\"navbar navbar\"><div class=\"container\"><nav class=\"navbar\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a href.bind=\"row.href\">${row.title}</a></li></ul></nav></div></nav></div></template>"; });
define('text!components/user/login.html', ['module'], function(module) { module.exports = "<template><h3>Login</h3></template>"; });
define('text!common/styles/_body.css', ['module'], function(module) { module.exports = "body {\n  width: 100%;\n  height: 100%;\n  font-family: 'Hind Vadodara', sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #333333;\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.8) 100%, #ffffff 0%), url(/Content/Images/emma_bg.jpg) no-repeat 0 0;\n  background-size: 100%;\n  background-attachment: fixed;\n  background-position: top;\n}\nbody a,\nbody a:hover {\n  color: #e22004;\n}\nbody a[first-letter-span] {\n  color: #2d4945;\n}\nbody a[first-letter-span] span {\n  color: #e22004;\n}\nbody .aurelia-validation-message {\n  display: none;\n}\nbody .has-success .form-control {\n  border-color: #ccc;\n}\nbody .has-success .form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\nbody .no-border {\n  border: 0!important;\n}\nbody .right {\n  text-align: right!important;\n}\nbody .uppercase {\n  text-transform: uppercase;\n}\nbody .pointer {\n  cursor: pointer!important;\n}\nbody a:hover {\n  cursor: pointer;\n}\nbody h5 {\n  font-size: 16px;\n}\n"; });
define('text!components/user/navigation.html', ['module'], function(module) { module.exports = "<template><div class=\"container page-content\"><router-view></router-view></div></template>"; });
define('text!components/user/profile.html', ['module'], function(module) { module.exports = "<template><h3>Login</h3></template>"; });
define('text!common/styles/_button.css', ['module'], function(module) { module.exports = ".btn {\n  font-weight: normal;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  border-radius: 0;\n  min-width: 70px;\n}\n.btn-group .btn,\n.btn-group-vertical .btn {\n  min-width: 10px;\n  margin-right: 0;\n}\n.btn-default {\n  color: #c9302c;\n  border-color: #c9302c;\n}\n.btn-default:active,\n.btn-default:focus {\n  color: #c9302c;\n  border-color: #c9302c;\n  background-color: white;\n}\n.btn-default:hover {\n  color: #c9302c;\n  background-color: rgba(201, 48, 44, 0.05);\n  border-color: #c9302c;\n}\n.btn-danger {\n  background-color: #e22004;\n}\n.dropdown-menu > li > a {\n  font-family: 'Open Sans', sans-serif;\n}\n.btn.active.focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn:active:focus,\n.btn:focus {\n  outline-color: transparent;\n}\n.btn-default.active.focus,\n.btn-default.active:focus,\n.btn-default.active:hover,\n.btn-default:active.focus,\n.btn-default:active:focus,\n.btn-default:active:hover,\n.open > .dropdown-toggle.btn-default.focus,\n.open > .dropdown-toggle.btn-default:focus,\n.open > .dropdown-toggle.btn-default:hover {\n  color: #c9302c;\n  background-color: rgba(201, 48, 44, 0.05);\n  border-color: #c9302c;\n}\n"; });
define('text!components/journal/journals/journals.html', ['module'], function(module) { module.exports = "<template><div class=\"journals\"></div></template>"; });
define('text!components/market/chart-layouts/navigation.html', ['module'], function(module) { module.exports = "<template><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_chart-layouts\"><router-view></router-view></div><div class=\"col-md-4 col-xs-12\"><side-nav router.bind=\"router\"></side-nav></div></div></template>"; });
define('text!common/styles/_dialog.css', ['module'], function(module) { module.exports = "ai-dialog {\n  border-radius: 0;\n}\nai-dialog ai-dialog-body {\n  padding: 15px 30px;\n}\nai-dialog ai-dialog-body h3 {\n  margin: -30px -30px 25px;\n  padding: 20px;\n  font-weight: 500;\n  text-align: center;\n  background-color: #f5f5f5;\n}\nai-dialog ai-dialog-footer {\n  padding-bottom: 20px;\n  border: none;\n  padding-right: 30px;\n}\nai-dialog ai-dialog-footer .btn {\n  margin-left: 14px;\n}\nai-dialog-overlay.active {\n  background-color: black;\n  opacity: .5;\n}\nai-dialog > ai-dialog-footer button.btn-primary,\nai-dialog > ai-dialog-footer button.btn-primary:hover,\nai-dialog > ai-dialog-footer button.btn-primary:hover:enabled {\n  background-color: #2771cd;\n  border: solid 1px #ffffff;\n  color: #ffffff;\n}\nai-dialog > ai-dialog-footer button.btn-default,\nai-dialog > ai-dialog-footer button.btn-default:hover,\nai-dialog > ai-dialog-footer button.btn-default:hover:enabled {\n  background-color: #ffffff;\n  border: solid 1px #2771cd;\n  color: #2771cd;\n}\n"; });
define('text!components/market/jobs-dashboard/navigation.html', ['module'], function(module) { module.exports = "<template><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_dashboard\"><router-view></router-view></div><div class=\"col-md-4 col-xs-12\"><side-nav router.bind=\"router\"></side-nav></div></div></template>"; });
define('text!common/styles/_fonts.css', ['module'], function(module) { module.exports = "@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@import url(//fonts.googleapis.com/css?family=Open+Sans:400|Roboto);\n@import url(//fonts.googleapis.com/css?family=Istok+Web:400,700);\n@import url(//fonts.googleapis.com/css?family=Inder);\n@import url(//fonts.googleapis.com/css?family=Raleway);\n@import url(//fonts.googleapis.com/css?family=PT+Sans);\n@import url(//fonts.googleapis.com/css?family=Lato);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('/fonts/glyphicons-halflings-regular.eot');\n  src: url('/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('/fonts/glyphicons-halflings-regular.woff') format('woff'), url('/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');\n}\n"; });
define('text!components/market/market-indices/navigation.html', ['module'], function(module) { module.exports = "<template><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_market-indices\"><router-view></router-view></div><div class=\"col-md-4 col-xs-12\"><side-nav router.bind=\"router\"></side-nav></div></div></template>"; });
define('text!components/strategies/indicators/indicators.html', ['module'], function(module) { module.exports = "<template><require from=\"./indicators.css\"></require><strategy-admin></strategy-admin><div class=\"c_indicators-content\"><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_indicators\"><header><h3 first-letter-span>Manage Indicators</h3></header><div class=\"c_indicator-list\"><indicator repeat.for=\"indicator of indicators\" indicator.bind=\"indicator\"></indicator><div class=\"c_indicator c_indicator-add\" click.delegate=\"addIndicator()\"><div class=\"c_indicator-header\"><a>Register new indicator</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div></div></div></div><div class=\"col-md-4 col-xs-12\"><div class=\"side-navigation\"><h3>Time Frame</h3><ul><li repeat.for=\"period of periods\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a click.delegate=\"$parent.loadIndicatorsForPeriod(period)\" class=\"${period.active ? 'active' : ''}\">${period.name} Indicators</a></li></ul></div></div></div><ul if.bind=\"errors.length > 0\"><li repeat.for=\"error of errors\">${error}</li></ul></div></template>"; });
define('text!common/styles/_form.css', ['module'], function(module) { module.exports = ".form-group {\n  margin-bottom: 14px;\n}\n.form-group label {\n  font-weight: 500;\n}\n.form-group.has-error label {\n  color: #333333;\n}\n.form-group.has-error input {\n  border-color: #d50525;\n}\n.form-group.has-error span.help-block {\n  margin-left: 18px;\n  color: #CA1D04;\n  display: inline-block;\n  margin-bottom: 0;\n}\n.form-group.has-error span.help-block.validation-message {\n  font-weight: 500;\n  margin-left: 15px;\n}\n.form-group.has-error .input-group-addon {\n  border-color: #d50525;\n  border-right: none;\n  color: #333333;\n  background-color: #f5f5f5;\n}\n.form-group .input-group-addon {\n  border-color: #cacaca;\n  border-radius: 2px;\n}\n.form-control {\n  border-radius: 2px;\n  box-shadow: none;\n  border-color: #cacaca;\n  padding: 6px 15px;\n  color: #4a4a4a;\n}\nselect.form-control {\n  padding: 6px 10px;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #f5f5f5;\n  opacity: 1;\n}\n.form-control {\n  font-size: 14px;\n  border-radius: 0;\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.82);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  cursor: default;\n  background-color: rgba(223, 223, 223, 0.13);\n  color: rgba(0, 0, 0, 0.82);\n  box-shadow: none;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\np.form-control {\n  min-height: 32px;\n  height: auto;\n}\nform {\n  margin-bottom: 10px;\n}\nform .form-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n  margin-left: 15px;\n}\nform label {\n  font-weight: normal;\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.55);\n  margin-bottom: -2px;\n  margin-left: 2px;\n  margin-right: 5px;\n}\nform label input[type=\"file\"] {\n  position: fixed;\n  top: -1000px;\n}\nform .form-group .form-actions {\n  text-align: right;\n  border: 0;\n  padding-top: 0px;\n}\nform .form-group .form-actions .btn {\n  padding: 2px 10px;\n}\nform .form-group .file {\n  background-color: rgba(223, 223, 223, 0.13);\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\nform .form-group .file label {\n  margin-left: -2px;\n}\nform .form-group .file span {\n  margin-top: 5px;\n  float: right;\n  margin-right: 10px;\n}\nform .form-group label {\n  margin-right: 5px;\n}\nform .form-group label.btn {\n  padding-top: 6px;\n}\nform .form-inline .form-group {\n  margin-right: 10px;\n}\nform textarea.html {\n  font-family: monospace;\n}\nform .validation-summary-error {\n  color: #CA1D04;\n}\nform .validation-summary-error .glyphicon {\n  font-size: 18px;\n  position: relative;\n}\nform .validation-summary-error .col-xs-1 {\n  width: 20px;\n}\nform .validation-summary-error ul {\n  padding-left: 0;\n}\nform .validation-summary-error ul li {\n  list-style: none;\n}\nform fieldset {\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .form-inline .form-control {\n    width: 100%;\n  }\n}\n"; });
define('text!components/strategies/rules/rule-sets.html', ['module'], function(module) { module.exports = "<template><require from=\"./rule-sets.css\"></require><strategy-admin></strategy-admin><div class=\"c_rule_sets-content\"><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_rule_sets\"><header><h3 first-letter-span>Manage Rule Sets</h3></header><div class=\"c_rule_set-list\"><rule-set repeat.for=\"ruleset of rulesets\" ruleset.bind=\"ruleset\"></rule-set><div class=\"c_rule_set c_rule_set-add\" click.delegate=\"addRuleSet()\"><div class=\"c_rule_set-header\"><a>Register new rule set</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div></div></div></div><div class=\"col-md-4 col-xs-12\"><div class=\"side-navigation\"><h3>Time Frame</h3><ul><li repeat.for=\"period of periods\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a click.delegate=\"$parent.loadRuleSetsForPeriod(period)\" class=\"${period.active ? 'active' : ''}\">${period.name} Rules</a></li></ul></div></div></div><ul if.bind=\"errors.length > 0\"><li repeat.for=\"error of errors\">${error}</li></ul></div></template>"; });
define('text!components/strategies/rules/rules.html', ['module'], function(module) { module.exports = "<template><require from=\"./rules.css\"></require><strategy-admin></strategy-admin><div class=\"c_rules-content\"><div class=\"row\"><div class=\"col-md-8 col-xs-12 c_rules\"><header><h3 first-letter-span>Manage Rules</h3></header><div class=\"c_rule-list\"><rule repeat.for=\"rule of rules\" rule.bind=\"rule\"></rule><div class=\"c_rule c_rule-add\" click.delegate=\"addRule()\"><div class=\"c_rule-header\"><a>Register new rule</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div></div></div></div><div class=\"col-md-4 col-xs-12\"><div class=\"side-navigation\"><h3>Time Frame</h3><ul><li repeat.for=\"period of periods\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a click.delegate=\"$parent.loadRulesForPeriod(period)\" class=\"${period.active ? 'active' : ''}\">${period.name} Rules</a></li></ul></div></div></div><ul if.bind=\"errors.length > 0\"><li repeat.for=\"error of errors\">${error}</li></ul></div></template>"; });
define('text!common/styles/_page.css', ['module'], function(module) { module.exports = ".page-content {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-bottom: 50px;\n}\n.page-content header {\n  margin-bottom: 15px;\n}\n.page-content header .btn {\n  float: right;\n  margin-left: 10px;\n  margin-top: 25px;\n}\n.page-content header h3 {\n  font-size: 22px;\n  margin-top: 18px;\n  display: inline-block;\n  color: #333333;\n}\n.page-content .actions {\n  float: right;\n  position: relative;\n  top: -39px;\n  margin-right: 0px;\n  margin-bottom: -25px;\n  z-index: 996;\n}\n.page-content .actions .btn {\n  border-radius: 4px 4px 0 0;\n  padding: 2px 12px;\n}\n"; });
define('text!components/studies/categories/categories.html', ['module'], function(module) { module.exports = "<template><div class=\"row categories\"><div class=\"col-md-8\"><h2>${section.Title}</h2><div repeat.for=\"item of sortedCategories\" class=\"category\"><read-mode if.bind=\"editMode !== true\"><h4>${item.Title}</h4></read-mode><edit-mode class=\"form-horizontal\" if.bind=\"editMode === true\"><div if.bind=\"item.isDeleting !== true\" class=\"btn-group\" role=\"group\" aria-label=\"Actions\"><button type=\"button\" click.delegate=\"$parent.startDeleting(item)\" class=\"btn btn-danger btn-xs\">Delete</button> <button type=\"button\" click.delegate=\"$parent.moveUp(item)\" class=\"btn btn-default btn-xs\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"true\"></span></button> <button type=\"button\" click.delegate=\"$parent.moveDown(item)\" class=\"btn btn-default btn-xs\"><span class=\"glyphicon glyphicon-arrow-down\" aria-hidden=\"true\"></span></button></div><div if.bind=\"item.isDeleting === true\" class=\"btn-group\" role=\"group\" aria-label=\"Actions\"><button type=\"button\" click.delegate=\"$parent.confirmDelete(item)\" class=\"btn btn-danger btn-xs\">Delete Block</button> <button type=\"button\" click.delegate=\"$parent.cancelDelete(item)\" class=\"btn btn-default btn-xs\">Cancel</button></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Title</label><div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" value.bind=\"item.Title\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Url</label><div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" value.bind=\"item.Url\"></div></div></edit-mode></div><div if.bind=\"editMode === true\" class=\"block-actions\"><div class=\"btn-group\" role=\"group\" aria-label=\"Actions\"><button type=\"button\" click.delegate=\"addCategory()\" class=\"btn btn-primary btn-xs\">Add New Category</button></div></div></div><div class=\"col-md-4 side-navigation\"><h3>Sections</h3><ul><li repeat.for=\"item of sortedSections\"><a href.bind=\"$parent.getSectionUrl(item)\" class=\"${item.SectionId === $parent.sectionId ? 'active' : ''}\">${item.Title}</a></li></ul></div></div></template>"; });
define('text!components/studies/study/study.html', ['module'], function(module) { module.exports = "<template><require from=\"./study.css\"></require><require from=\"./study-actions/study-actions\"></require><require from=\"./category-studies/category-studies\"></require><study-actions></study-actions><div class=\"row\"><div class=\"col-md-8 article\"><header><h3>${article.title}</h3></header><form if.bind=\"editMode === true\"><fieldset><div class=\"form-group\"><label>Article Name</label><input type=\"text\" class=\"form-control\" value.bind=\"article.title & validate\"></div><div class=\"form-group\"><label>Article Url</label><input type=\"text\" class=\"form-control\" value.bind=\"article.url & validate\"></div><div class=\"form-group\"><label>Summary</label><textarea rows=\"4\" class=\"form-control\" value.bind=\"article.summary & validate\"></textarea></div></fieldset><h4>Article Parts</h4></form><div class=\"c_article_parts ${editMode ? 'edit-mode' : ''}\"><article-parts parts.bind=\"article.articleBlocks\" edit-mode.bind=\"editMode\"></article-parts></div></div><div class=\"col-md-4\"><category-studies category.bind=\"category\"></category-studies></div></div></template>"; });
define('text!resources/elements/article-parts/article-part-actions.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"editMode\"><div class=\"form-actions\"><button type=\"button\" click.delegate=\"remove()\" class=\"btn btn-danger\">Remove</button> <button type=\"button\" click.delegate=\"moveUp()\" class=\"btn btn-default\">Move Up</button> <button type=\"button\" click.delegate=\"moveDown()\" class=\"btn btn-default\">Move Down</button></div></form></template>"; });
define('text!common/styles/_progress.css', ['module'], function(module) { module.exports = ".s-progress {\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  height: 5px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  display: block;\n}\n.s-progress .s-progress-bar {\n  height: 100%;\n  background-color: #5cb85c;\n}\n"; });
define('text!resources/elements/article-parts/article-part-heading.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"editMode\"><h4>Define heading</h4><fieldset><div class=\"form-group ${!typeValid ? 'has-error' : ''}\"><label class=\"col-sm-10\">Heading Type</label><div class=\"col-sm-5\"><select class=\"form-control\" change.delegate=\"onChange()\" value.bind=\"part.headingType\"><option>- Select heading type -</option><option repeat.for=\"heading of headingTypes\" value.bind=\"heading\">${heading}</option></select><span if.bind=\"!typeValid\" class=\"help-block validation-message\">Heading type not selected.</span></div></div><div class=\"form-group ${!textValid ? 'has-error' : ''}\"><label class=\"col-sm-10\">Heading Text</label><div class=\"col-sm-12\"><input type=\"text\" class=\"form-control\" value.bind=\"part.text\"> <span if.bind=\"!textValid\" class=\"help-block validation-message\">Heading text cannot be blank.</span></div></div></fieldset></form><span if.bind=\"!editMode\" class=\"${part.headingType}\">${part.text}</span></template>"; });
define('text!resources/elements/article-parts/article-part-image.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"editMode\"><h4>Select Image</h4><fieldset><div class=\"form-group ${!textValid ? 'has-error' : ''}\"><label class=\"col-sm-10\">Image Title</label><div class=\"col-sm-12\"><input type=\"text\" class=\"form-control\" value.bind=\"part.text\"> <span if.bind=\"!textValid\" class=\"help-block validation-message\">Image title cannot be blank.</span> <span if.bind=\"textValid\">&nbsp;</span></div></div><div class=\"form-group ${!imageValid ? 'has-error' : ''}\"><div class=\"col-sm-12\"><div class=\"file\"><label class=\"btn btn-danger\"><input type=\"file\" accept=\"image/*\" class=\"form-control\" change.delegate=\"uploadImage()\" files.bind=\"selectedFiles\"> Select Image</label><span if.bind=\"selectedFiles.length > 0\" repeat.for=\"file of selectedFiles | fileListToArray\">${file.name} [${file.size / 1000} kb]</span></div><span if.bind=\"!imageValid\" class=\"help-block validation-message\">Image is not selected.</span></div></div><div class=\"form-group\" if.bind=\"imageValid\"><label class=\"col-sm-10\">Active Image</label><div class=\"col-sm-12\"><img src.bind=\"part.imageUrl\"></div></div></fieldset></form><span if.bind=\"!editMode\"><img src.bind=\"part.imageUrl\"><p>${part.text}</p></span></template>"; });
define('text!common/styles/_sub-nav.css', ['module'], function(module) { module.exports = ".sub-nav {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.sub-nav .navbar {\n  background-color: white;\n  margin-bottom: 0;\n  min-height: 32px;\n  height: 32px;\n  z-index: 900;\n}\n.sub-nav .navbar .actions {\n  margin-top: 3px;\n  margin-right: -4px;\n  float: right;\n}\n.sub-nav .navbar .actions .btn {\n  padding: 4px 10px;\n  border-radius: 4px 4px 0 0;\n}\n.sub-nav .navbar-nav {\n  margin-bottom: -2px;\n}\n.sub-nav .navbar-nav > li {\n  margin-right: 20px;\n  padding: 0;\n}\n.sub-nav .navbar-nav > li a {\n  padding: 8px 0 3px 0;\n  color: #252d2c;\n  font: 13px/20px 'Istok Web';\n  text-transform: uppercase;\n}\n.sub-nav .navbar-nav > li:hover {\n  border-bottom: 3px solid rgba(226, 32, 4, 0.38);\n}\n.sub-nav .navbar-nav > li.active {\n  border-bottom: 3px solid #e22004;\n}\n.sub-nav .nav > li > a:hover,\n.sub-nav .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n}\n"; });
define('text!common/styles/_variables.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/article-parts/article-part-list.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"editMode\"><h4>Define List Items</h4><fieldset><div repeat.for=\"item of part.items\" class=\"form-group ${!item.valid ? 'has-error' : ''}\"><label class=\"col-sm-10\">${$index + 1}.</label><div class=\"col-sm-12\"><textarea rows=\"4\" class=\"form-control\" value.bind=\"item.text\"></textarea><span if.bind=\"!item.valid\" class=\"help-block validation-message\">Text cannot be blank.</span><div class=\"form-actions\"><button type=\"button\" if.bind=\"$index+1 === $parent.part.items.length\" click.delegate=\"$parent.addItem($index)\" class=\"btn btn-success\">New Item</button> <button type=\"button\" click.delegate=\"$parent.deleteItem($index)\" class=\"btn btn-danger\">Delete Item</button></div></div></div></fieldset></form><ol class=\"f\" if.bind=\"!editMode && part.items && part.items.length > 0\"><li repeat.for=\"item of part.items\">${item.text}</li></ol></template>"; });
define('text!dialogs/login/user-login.css', ['module'], function(module) { module.exports = ".user-login ai-dialog {\n  width: 400px;\n}\n.user-login .form-horizontal {\n  margin-bottom: 15px;\n}\n.user-login .form-horizontal .control-label {\n  text-align: left;\n  margin-bottom: 4px;\n}\n.user-login .col-left {\n  padding-right: 7px;\n}\n.user-login .col-right {\n  padding-left: 7px;\n}\n.user-login ai-dialog-footer .btn {\n  width: 162px;\n}\n.user-login .form-group {\n  margin-bottom: 3px;\n}\n"; });
define('text!resources/elements/article-parts/article-part-new.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"editMode\"><h4>Add new part</h4><fieldset><div class=\"form-group\"><label class=\"col-sm-10 control-label\">Part Type</label><div class=\"col-sm-6\"><select class=\"form-control\" change.delegate=\"onTypeChange()\" value.bind=\"selectedType\"><option>- Select part type -</option><option repeat.for=\"type of partTypes\" value.bind=\"type\">${type}</option></select></div></div></fieldset><div class=\"form-actions\"><button type=\"button\" show.bind=\"canAdd\" click.delegate=\"add()\" class=\"btn btn-danger au-target\" au-target-id=\"97\">Add</button> <button type=\"button\" click.delegate=\"cancel()\" class=\"btn btn-default au-target\" au-target-id=\"97\">Cancel</button></div></form></template>"; });
define('text!resources/elements/article-parts/article-part-paragraph.html', ['module'], function(module) { module.exports = "<template><form if.bind=\"editMode\"><h4>Define Paragraph</h4><fieldset><div class=\"form-group ${!textValid ? 'has-error' : ''}\"><label class=\"col-sm-10\">Paragraph Text</label><div class=\"col-sm-12\"><textarea rows=\"4\" class=\"form-control\" value.bind=\"part.text\"></textarea><span if.bind=\"!textValid\" class=\"help-block validation-message\">Paragraph text cannot be blank.</span></div></div></fieldset></form><p if.bind=\"!editMode\">${part.text}</p></template>"; });
define('text!components/footer/dream-footer.css', ['module'], function(module) { module.exports = "dream-footer {\n  display: block;\n  padding-bottom: 30px;\n}\n"; });
define('text!resources/elements/article-parts/article-parts.html', ['module'], function(module) { module.exports = "<template><div class=\"c_article_part\" repeat.for=\"part of parts\"><article-part-paragraph part.bind=\"part\" edit-mode.bind=\"editMode\" if.bind=\"isParagraph(part)\"></article-part-paragraph><article-part-heading part.bind=\"part\" edit-mode.bind=\"editMode\" if.bind=\"isHeading(part)\"></article-part-heading><article-part-image part.bind=\"part\" edit-mode.bind=\"editMode\" if.bind=\"isImage(part)\"></article-part-image><article-part-list part.bind=\"part\" edit-mode.bind=\"editMode\" if.bind=\"isList(part)\"></article-part-list><article-part-new part.bind=\"part\" edit-mode.bind=\"editMode\" if.bind=\"isUnset(part)\"></article-part-new><article-part-actions part.bind=\"part\" edit-mode.bind=\"editMode\" if.bind=\"!isUnset(part)\"></article-part-actions></div><div class=\"c_article_part-add\" click.delegate=\"addPart()\" if.bind=\"editMode\"><a>Add new part</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div></template>"; });
define('text!resources/elements/chart/chart-layout.html', ['module'], function(module) { module.exports = "<template><div id=\"container-weekly\" class=\"o_chart-container\"></div><div id=\"container-daily\" class=\"o_chart-container\"></div></template>"; });
define('text!components/header/dream-header.css', ['module'], function(module) { module.exports = "dream-header {\n  font-family: 'Arial', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  top: 0px;\n  z-index: 999;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  background: #ffffff;\n  padding: 0;\n}\ndream-header .nav .open > a,\ndream-header .nav .open > a:hover,\ndream-header .nav .open > a:focus {\n  background-color: transparent;\n}\ndream-header .navbar-nav > li > a.dropdown-toggle {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-top: 24px;\n}\ndream-header .nav > li > a:hover,\ndream-header .nav > li > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  color: #e22004;\n}\ndream-header .nav > li > a:hover {\n  text-decoration: underline;\n}\ndream-header .navbar-brand {\n  margin: 0;\n  padding: 0;\n  float: left;\n  font-size: 26px;\n  line-height: 52px;\n  cursor: pointer;\n}\ndream-header .navbar-brand img.logo {\n  margin-right: -2px;\n  top: -2px;\n  position: relative;\n  display: inline-block;\n  width: 47px;\n  opacity: 0.96;\n}\ndream-header .navbar-brand span.pound {\n  color: #e22004;\n  font-weight: bold;\n  font-size: 46px;\n  line-height: 25px;\n  position: relative;\n  top: 6px;\n}\ndream-header .navbar-brand a,\ndream-header .navbar-brand a:hover {\n  text-decoration: none;\n}\n"; });
define('text!resources/elements/company/company-details.html', ['module'], function(module) { module.exports = "<template><form><fieldset disabled=\"disabled\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label>Sector</label><p class=\"form-control\" readonly=\"readonly\">${company.sectorName}</p></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label>Industry</label><p class=\"form-control\" readonly=\"readonly\">${company.industryName}</p></div></div></div><div class=\"row\"><div class=\"col-md-4\"><div class=\"form-group\"><label>Price</label><p class=\"form-control\" readonly=\"readonly\">${company.price}</p></div><div class=\"form-group\"><label>Volume</label><p class=\"form-control\" readonly=\"readonly\">${company.volume}</p></div></div><div class=\"col-md-4\"><div class=\"form-group\"><label>Lowest 52</label><p class=\"form-control\" readonly=\"readonly\">${company.lowestPrice52}</p></div><div class=\"form-group\"><label>Chaos</label><p class=\"form-control\" readonly=\"readonly\">${company.chaosPercentage}%</p></div></div><div class=\"col-md-4\"><div class=\"form-group\"><label>Highest 52</label><p class=\"form-control\" readonly=\"readonly\">${company.highestPrice52}</p></div><div class=\"form-group\"><label>Last Time Updated</label><p class=\"form-control\" readonly=\"readonly\">${formatDate(company.lastUpdated)}</p></div></div></div></fieldset></form></template>"; });
define('text!resources/elements/indicator/indicator.html', ['module'], function(module) { module.exports = "<template><div class=\"c_indicator\" if.bind=\"indicatorInfo.deleted !== true\"><div class=\"c_indicator-header\" click.trigger=\"onExpanded()\"><button type=\"button\" show.bind=\"indicatorInfo.expanded !== true\" click.delegate=\"startDelete()\" class=\"btn btn-danger btn-xs\">Delete</button> <span><span>${indicatorInfo.description}</span> <a class=\"chevron\"><span if.bind=\"indicatorInfo.expanded === true\" class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span> <span if.bind=\"indicatorInfo.expanded !== true\" class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span></a></span></div><div class=\"c_indicator-details\" if.bind=\"indicatorInfo.expanded === true\"><form submit.delegate=\"trySaveIndicator()\" if.bind=\"indicatorInfo.deleteMode !== true\"><fieldset disabled.bind=\"indicatorInfo.editMode !== true\"><div class=\"form-group\"><label for=\"txtDescription-${indicatorInfo.indicatorId}\">Indicator Name</label><input type=\"text\" class=\"form-control\" id=\"txtDescription-${indicatorInfo.indicatorId}\" value.bind=\"indicatorInfo.description & validate\"></div><div class=\"form-inline\"><div class=\"form-group\"><label for=\"ddlPeriod-${indicatorInfo.indicatorId}\">Period:</label><select id=\"ddlPeriod-${indicatorInfo.indicatorId}\" class=\"form-control\" value.bind=\"indicatorInfo.period\"><option repeat.for=\"period of periods\" model.bind=\"period.id\">${period.name}</option></select></div><div class=\"form-group\"><label for=\"ddlFormula-${indicatorInfo.indicatorId}\">Formula:</label><select id=\"ddlFormula-${indicatorInfo.indicatorId}\" class=\"form-control\" value.bind=\"indicatorInfo.name\" change.delegate=\"onFormulaChange()\"><option repeat.for=\"formula of formulaes\" value.bind=\"formula.name\">${formula.name}</option></select></div></div><div class=\"col-md-6\"><h4>Chart Properties</h4><div class=\"form-inline-stack\"><div class=\"form-group\"><label for=\"ddlChartType-${indicatorInfo.indicatorId}\">Chart Type:</label><select id=\"ddlChartType-${indicatorInfo.indicatorId}\" class=\"form-control\" value.bind=\"indicatorInfo.chartType\"><option repeat.for=\"chartType of chartTypes\" model.bind=\"chartType.id\">${chartType.name}</option></select></div><div class=\"form-group\"><label for=\"txtChartPlot-${indicatorInfo.indicatorId}\">Plot Number:</label><select id=\"txtChartPlot-${indicatorInfo.indicatorId}\" class=\"form-control\" value.bind=\"indicatorInfo.chartPlotNumber\"><option repeat.for=\"plotNumber of plotNumbers\" model.bind=\"plotNumber\">${plotNumber}</option></select></div><div class=\"form-group\"><label for=\"txtChartColor-${indicatorInfo.indicatorId}\">Line Color:</label><input type=\"text\" class=\"form-control\" id=\"txtChartColor-${indicatorInfo.indicatorId}\" value.bind=\"indicatorInfo.chartColor & validate\"></div></div></div><div class=\"col-md-6\"><h4>Formula Parameters</h4><div class=\"form-inline-stack\"><div class=\"form-group\" repeat.for=\"param of indicatorInfo.params\"><label for=\"txtParam-${param.paramName}\">${param.paramName}:</label><input type=\"text\" class=\"form-control\" id=\"txtParam-${param.paramName}\" value.bind=\"param.value\"></div></div></div></fieldset><ul if.bind=\"errors.length > 0\"><li repeat.for=\"error of errors\">${error}</li></ul><div class=\"c_indicator-actions\"><button type=\"submit\" class=\"btn btn-danger\" if.bind=\"indicatorInfo.editMode === true\">Save</button> <button type=\"button\" click.delegate=\"cancelEdit()\" if.bind=\"indicatorInfo.editMode === true\" class=\"btn btn-default\">Cancel</button> <button type=\"button\" click.delegate=\"startEdit()\" if.bind=\"indicatorInfo.editMode !== true\" class=\"btn btn-danger\">Edit</button></div></form><div class=\"c_indicator-actions\" if.bind=\"indicatorInfo.deleteMode === true\"><p><br>I'll try to delete the indicator, however, if this indicator is used anywhere else then delete will be cancelled.<br></p><button type=\"button\" click.delegate=\"confirmDelete()\" class=\"btn btn-danger\">Delete</button> <button type=\"button\" click.delegate=\"cancelDelete()\" class=\"btn btn-default\">Cancel</button></div></div></div></template>"; });
define('text!components/main-nav/main-nav.css', ['module'], function(module) { module.exports = "@media (min-width: 768px) {\n  main-nav .navbar-nav {\n    float: none;\n  }\n}\nmain-nav .main-nav-items {\n  background-color: rgba(161, 161, 161, 0.2);\n}\nmain-nav ul.nav li {\n  float: left;\n  padding: 0;\n  position: relative;\n  margin-left: 1px;\n}\nmain-nav ul.nav li:first-child {\n  margin-left: 0;\n}\nmain-nav ul.nav li a {\n  position: relative;\n  padding: 0 20px;\n  text-align: center;\n  font: 14px/40px 'Istok Web';\n  text-transform: uppercase;\n  background: transparent;\n  color: #333333;\n  -webkit-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\nmain-nav ul.nav li:hover a {\n  background: rgba(226, 32, 4, 0.38);\n}\nmain-nav ul.nav li.active a {\n  color: #ffffff;\n  background: #e22004;\n}\nmain-nav nav.navbar {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 14px 0;\n  min-height: 0;\n  border-color: #e7e7e7;\n}\nmain-nav nav.navbar ul.navbar-nav {\n  top: 5px;\n}\n"; });
define('text!resources/elements/navigation/side-nav.html', ['module'], function(module) { module.exports = "<template><div class=\"side-navigation\"><h3>${router.title}</h3><ul><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a href.bind=\"row.href\">${row.title}</a></li></ul></div></template>"; });
define('text!resources/elements/navigation/sub-nav.html', ['module'], function(module) { module.exports = "<template><div class=\"sub-nav\"><nav class=\"navbar navbar\"><div class=\"container\"><nav class=\"navbar\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a href.bind=\"row.href\">${row.title}</a></li></ul></nav></div></nav></div></template>"; });
define('text!components/strategies/strategy-playground.css', ['module'], function(module) { module.exports = ".c_playground-content .c_playground {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-bottom: 15px;\n}\n.c_strategy-runner form .form-group {\n  margin-bottom: 15px;\n}\n.c_strategy-runner form .form-group .checkbox,\n.c_strategy-runner form .form-group .radio {\n  margin-top: 0;\n}\n.c_strategy-runner form .form-group .col-sm-12 {\n  float: none;\n}\n.c_strategy-runner .c_strategy-runner--progress {\n  margin-bottom: 30px;\n}\n.c_strategy-runner .c_strategy-runner--options {\n  border: solid 1px rgba(204, 204, 204, 0.36);\n  text-align: center;\n  margin-bottom: 15px;\n  background-color: rgba(223, 223, 223, 0.13);\n}\n.c_strategy-runner .c_strategy-runner--options header {\n  background-color: #f5f5f5;\n  z-index: 100;\n  position: relative;\n  top: -13px;\n  font-size: 13px;\n  padding: 0 5px;\n  display: inline;\n}\n.o_chart-content {\n  margin-top: 15px;\n}\n.o_chart-content .o_chart {\n  z-index: 100;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.c_company_list {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.c_company {\n  padding: 10px 10px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_company.c_company-add,\n.c_company .c_company-add {\n  cursor: pointer;\n  border-bottom: 0px solid rgba(204, 204, 204, 0.36);\n}\n.c_company.c_company-add .glyphicon,\n.c_company .c_company-add .glyphicon {\n  color: green;\n}\n.c_company .c_company-header {\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.c_company .c_company-header .chevron {\n  float: right;\n}\n.c_company .c_company-header .btn {\n  margin-right: 10px;\n  z-index: 100;\n}\n.c_company-details {\n  padding-top: 10px;\n}\n.c_company-details form {\n  padding-top: 10px;\n}\n.c_company-details form fieldset {\n  padding-bottom: 10px;\n}\n.c_company-details h4 {\n  border-bottom: 1px solid #e22004;\n}\n.c_company-details .c_company-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.form-group .c_company-details {\n  padding: 15px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  border-top: 0;\n}\n"; });
define('text!resources/elements/progress/s-progress.html', ['module'], function(module) { module.exports = "<template class=\"s-progress\" style=\"width:100%\"><div class=\"s-progress-bar\"></div></template>"; });
define('text!resources/elements/rule/rule.html', ['module'], function(module) { module.exports = "<template><div class=\"c_rule\" if.bind=\"ruleInfo.deleted !== true\"><div class=\"c_rule-header\" click.trigger=\"onExpanded()\"><button type=\"button\" show.bind=\"!expanded\" click.delegate=\"startDelete()\" class=\"btn btn-danger btn-xs\">Delete</button> <span><span>${ruleInfo.name}</span> <a class=\"chevron\"><span if.bind=\"expanded\" class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span> <span if.bind=\"!expanded\" class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span></a></span></div><div class=\"c_rule-details\" if.bind=\"expanded\"><form submit.delegate=\"trySaveRule()\" if.bind=\"!deleteMode\"><fieldset disabled.bind=\"!editMode\"><div class=\"form-group\"><label for=\"txtName-${ruleInfo.ruleId}\">Rule Name</label><input type=\"text\" class=\"form-control\" id=\"txtName-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.name & validate\"></div><div class=\"form-group\"><label for=\"txtDescription-${ruleInfo.ruleId}\">Description</label><textarea rows=\"4\" class=\"form-control\" id=\"txtDescription-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.description & validate\"></textarea></div><div class=\"form-inline\"><div class=\"form-group\"><label for=\"ddlPeriod-${ruleInfo.ruleId}\">Period:</label><select id=\"ddlPeriod-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.period\" change.delegate=\"onPeriodChange()\"><option repeat.for=\"period of periods\" model.bind=\"period.id\">${period.name}</option></select></div><div class=\"form-group\"><label for=\"ddlCondition-${ruleInfo.ruleId}\">Compare operator:</label><select id=\"ddlCondition-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.condition\"><option repeat.for=\"compareType of compareTypes\" model.bind=\"compareType.id\">${compareType.name}</option></select></div></div><div class=\"col-md-6\"><h4>Compare What</h4><div class=\"form-group\"><label for=\"ddlDataSourceV1-${ruleInfo.ruleId}\">Data Source:</label><select id=\"ddlDataSourceV1-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.dataSourceV1\" change.delegate=\"onDataSourceV1Change()\"><option repeat.for=\"dataSource of dataSources\" model.bind=\"dataSource.id\">${dataSource.name}</option></select></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV1 !== 2\"><label for=\"ddlDataSeriesV1-${ruleInfo.ruleId}\">Data Series:</label><select id=\"ddlDataSeriesV1-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.dataSeriesV1\"><option repeat.for=\"dataSeries of ruleInfo.dataSeriesOptionsV1\" model.bind=\"dataSeries.id\">${dataSeries.name}</option></select></div><div class=\"form-inline-stack\"><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV1 === 2\"><label for=\"txtConstV1-${ruleInfo.ruleId}\">Constant:</label><input type=\"text\" class=\"form-control\" id=\"txtConstV1-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.constV1\"></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV1 !== 2\"><label for=\"txtSkipItemsV1-${ruleInfo.ruleId}\">Skip:</label><input type=\"text\" class=\"form-control\" id=\"txtSkipItemsV1-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.skipItemsV1 & validate\"></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV1 !== 2\"><label for=\"txtTakeItemsV1-${ruleInfo.ruleId}\">Take:</label><input type=\"text\" class=\"form-control\" id=\"txtTakeItemsV1-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.takeItemsV1 & validate\"></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV1 !== 2\"><label for=\"ddlTransformItemsV1-${ruleInfo.ruleId}\">Data Transform:</label><select id=\"ddlTransformItemsV1-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.transformItemsV1\"><option repeat.for=\"transformFunction of transformFunctions\" model.bind=\"transformFunction.id\">${transformFunction.name}</option></select></div></div></div><div class=\"col-md-6\"><h4>Compare With</h4><div class=\"form-group\"><label for=\"ddlDataSourceV2-${ruleInfo.ruleId}\">Data Source:</label><select id=\"ddlDataSourceV2-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.dataSourceV2\" change.delegate=\"onDataSourceV2Change()\"><option repeat.for=\"dataSource of dataSources\" model.bind=\"dataSource.id\">${dataSource.name}</option></select></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV2 !== 2\"><label for=\"ddlDataSeriesV2-${ruleInfo.ruleId}\">Data Series:</label><select id=\"ddlDataSeriesV2-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.dataSeriesV2\"><option repeat.for=\"dataSeries of ruleInfo.dataSeriesOptionsV2\" model.bind=\"dataSeries.id\">${dataSeries.name}</option></select></div><div class=\"form-inline-stack\"><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV2 === 2\"><label for=\"txtConstV2-${ruleInfo.ruleId}\">Constant:</label><input type=\"text\" class=\"form-control\" id=\"txtConstV2-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.constV2\"></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV2 !== 2\"><label for=\"txtSkipItemsV2-${ruleInfo.ruleId}\">Skip:</label><input type=\"text\" class=\"form-control\" id=\"txtSkipItemsV2-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.skipItemsV2 & validate\"></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV2 !== 2\"><label for=\"txtTakeItemsV2-${ruleInfo.ruleId}\">Take:</label><input type=\"text\" class=\"form-control\" id=\"txtTakeItemsV2-${ruleInfo.ruleId}\" value.bind=\"ruleInfo.takeItemsV2 & validate\"></div></div><div class=\"form-group\" if.bind=\"ruleInfo.dataSourceV2 !== 2\"><label for=\"ddlTransformItemsV2-${ruleInfo.ruleId}\">Data Transform:</label><select id=\"ddlTransformItemsV2-${ruleInfo.ruleId}\" class=\"form-control\" value.bind=\"ruleInfo.transformItemsV2\"><option repeat.for=\"transformFunction of transformFunctions\" model.bind=\"transformFunction.id\">${transformFunction.name}</option></select></div></div></fieldset><ul if.bind=\"errors.length > 0\"><li repeat.for=\"error of errors\">${error}</li></ul><div class=\"c_rule-actions\"><button type=\"submit\" class=\"btn btn-danger\" if.bind=\"editMode\">Save</button> <button type=\"button\" click.delegate=\"cancelEdit()\" if.bind=\"editMode\" class=\"btn btn-default\">Cancel</button> <button type=\"button\" click.delegate=\"startEdit()\" if.bind=\"!editMode\" class=\"btn btn-danger\">Edit</button></div></form><div class=\"c_rule-actions\" if.bind=\"deleteMode\"><p><br>I'll try to delete the rule, however, if this rule is used anywhere else then delete will be cancelled.<br></p><button type=\"button\" click.delegate=\"confirmDelete()\" class=\"btn btn-danger\">Delete</button> <button type=\"button\" click.delegate=\"cancelDelete()\" class=\"btn btn-default\">Cancel</button></div></div></div></template>"; });
define('text!resources/elements/rule-set/rule-set-item.html', ['module'], function(module) { module.exports = "<template><div class=\"c_rule_set\" if.bind=\"rule.deleted !== true\"><div class=\"c_rule_set-header\" click.trigger=\"onExpanded()\"><button type=\"button\" show.bind=\"!expanded && editMode\" click.delegate=\"startDelete()\" class=\"btn btn-warning btn-xs\">Detach</button> <span>${rule.name}</span><div class=\"chevron\"><a><span if.bind=\"expanded\" class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span> <span if.bind=\"!expanded\" class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span></a><div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" show.bind=\"editMode\"><button type=\"button\" class=\"btn btn-xs btn-default\" click.trigger=\"onMoveUp()\"><span class=\"glyphicon glyphicon-menu-up\" aria-hidden=\"true\"></span></button> <button type=\"button\" class=\"btn btn-xs btn-default\" click.trigger=\"onMoveDown()\"><span class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span></button></div></div></div><div class=\"c_rule_set-details\" if.bind=\"expanded\"><form if.bind=\"!deleteMode\"><fieldset disabled.bind=\"!editMode\"><div class=\"form-group\"><label for=\"txtDescription-${rule.ruleId}\">Description</label><textarea rows=\"4\" class=\"form-control\" id=\"txtDescription-${rule.ruleId}\" value.bind=\"rule.description\"></textarea></div></fieldset></form><div class=\"c_rule_set-actions\" if.bind=\"deleteMode\"><p><br>Rule will be detached from the rule set. You can add it later at any time.<br></p><button type=\"button\" click.delegate=\"confirmDelete()\" class=\"btn btn-warning\">Detach</button> <button type=\"button\" click.delegate=\"cancelDelete()\" class=\"btn btn-default\">Cancel</button></div></div></div></template>"; });
define('text!components/strategies/strategy.css', ['module'], function(module) { module.exports = ".article {\n  background-color: rgba(255, 255, 255, 0.7);\n  min-height: 50px;\n}\n.article ol li,\n.article ul li {\n  border-bottom: 1px dotted #777;\n  padding: 6px 0;\n  font-size: 14px;\n}\n.article .form-horizontal {\n  margin-top: 18px;\n  display: block;\n  margin-bottom: 25px;\n}\n.article article-image {\n  display: block;\n  text-align: center;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.article article-image img {\n  max-width: 100%;\n}\n.article article-image p {\n  color: #333333;\n  padding-bottom: 0px;\n  margin-top: 5px;\n  font-size: 11px;\n}\n.article article-part.edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.article article-part.edit-mode li {\n  border: none;\n}\n.article article-part.edit-mode li .col-xs-10,\n.article article-part.edit-mode li col-xs-2 {\n  padding: 0;\n  margin: 0;\n}\n.article article-part textarea {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: solid 1px #ccc;\n}\n.article .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.article ordered-list-block {\n  display: block;\n}\n.article ordered-list-block edit-mode {\n  display: block;\n  text-align: right;\n}\n.article ordered-list-block edit-mode li button {\n  margin-bottom: 5px;\n}\n.article heading-block read-mode {\n  display: block;\n  font-family: \"PT Sans\";\n  font-size: 17px;\n  font-weight: 400;\n  color: #000000;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.article heading-block .col-xs-10 {\n  padding-left: 0;\n}\n.article image-block edit-mode {\n  margin-top: 9px;\n  display: block;\n}\n.article image-block edit-mode img {\n  max-width: 100%;\n}\n.article image-block edit-mode .col-xs-3 {\n  text-align: right;\n  padding-top: 7px;\n}\n.article image-block edit-mode .col-xs-9 {\n  padding-left: 0;\n}\n.article image-block edit-mode .row {\n  margin-bottom: 10px;\n}\n.c_article_parts.edit-mode {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_article_parts.edit-mode .c_article_part {\n  border-bottom: solid 1px rgba(204, 204, 204, 0.36);\n}\n.c_article_part {\n  padding-top: 10px;\n  padding-bottom: 0px;\n}\n.c_article_part form h4 {\n  margin-top: 2px;\n  border: 0;\n  color: #333333;\n  margin-bottom: 5px;\n}\n.c_article_part img {\n  width: 100%;\n}\n.c_article_part .form-group {\n  margin-bottom: 10px;\n}\n.c_article_part .form-group .form-control {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.c_article_part .form-group label {\n  padding-top: 10px;\n}\n.c_article_part article-part-list fieldset {\n  margin-bottom: 30px;\n}\n.c_article_part-add {\n  cursor: pointer;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-top: 10px;\n}\n.c_article_part-add .chevron {\n  float: right;\n  color: #008000;\n}\n.form-group {\n  margin-bottom: 10px;\n}\n.c_strategy {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-bottom: 15px;\n}\n"; });
define('text!components/journal/journals/journals.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/rule-set/rule-set.html', ['module'], function(module) { module.exports = "<template><div class=\"c_rule_set\" if.bind=\"ruleSetInfo.deleted !== true\"><div class=\"c_rule_set-header\" click.trigger=\"onExpanded()\"><button type=\"button\" show.bind=\"!expanded\" click.delegate=\"startDelete()\" class=\"btn btn-danger btn-xs\">Delete</button> <span>${ruleSetInfo.name}</span> <a class=\"chevron\"><span if.bind=\"expanded\" class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span> <span if.bind=\"!expanded\" class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span></a></div><div class=\"c_rule_set-details\" if.bind=\"expanded\"><form submit.delegate=\"trySaveRuleSet()\" if.bind=\"!ruleSetInfo.deleteMode\"><fieldset disabled.bind=\"!editMode\"><div class=\"form-group\"><label for=\"txtName-${ruleSetInfo.ruleSetId}\">Rule Set Name</label><input type=\"text\" class=\"form-control\" id=\"txtName-${ruleSetInfo.ruleSetId}\" value.bind=\"ruleSetInfo.name & validate\"></div><div class=\"form-group\"><label for=\"txtDescription-${ruleSetInfo.ruleSetId}\">Description</label><textarea rows=\"4\" class=\"form-control\" id=\"txtDescription-${ruleSetInfo.ruleSetId}\" value.bind=\"ruleSetInfo.description & validate\"></textarea></div><div class=\"form-inline\"><div class=\"form-group\"><label for=\"ddlPeriod-${ruleSetInfo.ruleSetId}\">Period:</label><select id=\"ddlPeriod-${ruleSetInfo.ruleSetId}\" class=\"form-control\" value.bind=\"ruleSetInfo.period\"><option repeat.for=\"period of periods\" model.bind=\"period.id\">${period.name}</option></select></div></div></fieldset><h4>Set of Rules:</h4><div class=\"c_rule_set-list\"><rule-set-item class=\"c_rule_set-item\" repeat.for=\"rule of ruleSetInfo.rules\" rule.bind=\"rule\"></rule-set-item><div class=\"c_rule_set c_rule_set-add\" show.bind=\"editMode\"><div class=\"c_rule_set-header\" click.delegate=\"addRule()\"><a>Attach rule</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div></div><div class=\"c_rule_set-details\" if.bind=\"addMode && editMode\"><div class=\"form-group\"><label for=\"ddlRules-${ruleSetInfo.ruleSetId}\">Period:</label><select id=\"ddlRules-${ruleSetInfo.ruleSetId}\" class=\"form-control\" value.bind=\"attachedRuleId\" change.delegate=\"onRuleChange()\"><option repeat.for=\"rule of rules\" model.bind=\"rule.ruleId\">${rule.name}</option></select></div><div class=\"form-group\" if.bind=\"attachedRule.ruleId > 0\"><label for=\"txtRuleDescription-${attachedRule.ruleId}\">Description</label><textarea rows=\"4\" class=\"form-control\" readonly=\"readonly\" id=\"txtRuleDescription-${attachedRule.ruleId}\" value.bind=\"attachedRule.description\"></textarea></div><div class=\"c_rule-actions\"><button type=\"button\" click.delegate=\"confirmAddRule()\" class=\"btn btn-warning\">Attach</button> <button type=\"button\" click.delegate=\"cancelAddRule()\" class=\"btn btn-default\">Cancel</button></div></div></div><ul if.bind=\"errors.length > 0\"><li repeat.for=\"error of errors\">${error}</li></ul><div class=\"c_rule_set-actions\"><button type=\"submit\" class=\"btn btn-danger\" if.bind=\"editMode\">Save</button> <button type=\"button\" click.delegate=\"cancelEdit()\" if.bind=\"editMode\" class=\"btn btn-default\">Cancel</button> <button type=\"button\" click.delegate=\"startEdit()\" if.bind=\"!editMode\" class=\"btn btn-danger\">Edit</button></div></form><div class=\"c_rule_set-actions\" if.bind=\"deleteMode\"><p><br>I'll try to delete the rule set, however, if this rule set is used anywhere else then delete will be cancelled.<br></p><button type=\"button\" click.delegate=\"confirmDelete()\" class=\"btn btn-danger\">Delete</button> <button type=\"button\" click.delegate=\"cancelDelete()\" class=\"btn btn-default\">Cancel</button></div></div></div></template>"; });
define('text!resources/elements/strategy/side-navigation.html', ['module'], function(module) { module.exports = "<template><div class=\"side-navigation\"><h3>Defined Strategies</h3><ul><li repeat.for=\"summary of summaries\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a click.delegate=\"$parent.navigateToStrategy(summary.url)\" title=\"${summary.summary}\" class=\"${summary.selected ? 'active' : ''}\">${summary.title} Rules</a></li></ul></div></template>"; });
define('text!components/market/chart-layouts/chart-layouts.css', ['module'], function(module) { module.exports = "chart-layout,\nchart-layout-indicator,\nchart-layout-plot {\n  display: block;\n}\n.c_layouts-content {\n  padding-bottom: 30px;\n}\n.c_layouts-content .c_layouts {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-bottom: 15px;\n}\n.c_layouts-content .c_layout-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.c_layouts-content .c_layout {\n  padding: 10px 10px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_layouts-content .c_layout .ordered-chevron {\n  float: right;\n  position: relative;\n  top: -26px;\n  left: 12px;\n}\n.c_layouts-content .c_layout .ordered-chevron .glyphicon {\n  top: 1px;\n}\n.c_layouts-content .c_layout .ordered-chevron .btn-group-vertical {\n  margin-left: 5px;\n}\n.c_layouts-content .c_layout .ordered-chevron .btn-group-vertical .btn-xs {\n  padding: 0px 4px;\n  height: 16px;\n}\n.c_layouts-content .c_layout .ordered-chevron .btn-group-vertical .glyphicon {\n  font-size: 8px;\n  top: -3px;\n}\n.c_layouts-content .c_layout.c_layout-add,\n.c_layouts-content .c_layout .c_layout-add {\n  cursor: pointer;\n  border-bottom: 0px solid rgba(204, 204, 204, 0.36);\n}\n.c_layouts-content .c_layout.c_layout-add .glyphicon,\n.c_layouts-content .c_layout .c_layout-add .glyphicon {\n  color: green;\n}\n.c_layouts-content .c_layout .c_layout-header {\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.c_layouts-content .c_layout .c_layout-header .chevron {\n  float: right;\n}\n.c_layouts-content .c_layout .c_layout-header .btn {\n  margin-right: 10px;\n  z-index: 100;\n}\n.c_layouts-content .c_layout .c_layout-header .btn-group,\n.c_layouts-content .c_layout .c_layout-header .btn-group-vertical {\n  margin-top: -3px;\n  margin-right: -3px;\n  margin-left: 6px;\n}\n.c_layouts-content .c_layout .c_layout-header .btn-group .btn,\n.c_layouts-content .c_layout .c_layout-header .btn-group-vertical .btn {\n  margin-right: 0;\n  font-size: 8px;\n}\n.c_layouts-content .c_layout .c_layout-details {\n  padding-top: 10px;\n}\n.c_layouts-content .c_layout .c_layout-details form {\n  padding-top: 10px;\n}\n.c_layouts-content .c_layout .c_layout-details form fieldset {\n  padding-bottom: 10px;\n}\n.c_layouts-content .c_layout .c_layout-details .c_layout-list {\n  margin-left: 14px;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.c_layouts-content .c_layout .c_layout-details .c_layout-actions {\n  text-align: right;\n  margin-bottom: 20px;\n}\n.c_layouts-content .c_layout .c_layout-details h4 {\n  margin-top: 25px;\n}\n.c_layouts-content .c_layout-list,\n.c_layouts-content .c_layout_indicator-list {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.c_layouts-content .c_layout-list .no-border .c_layout,\n.c_layouts-content .c_layout_indicator-list .no-border .c_layout {\n  border-bottom: 0;\n}\n"; });
define('text!components/market/market-indices/market-indices.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/strategy/strategy-admin.html', ['module'], function(module) { module.exports = "<template><div class=\"actions\" if.bind=\"powerUser\"><div if.bind=\"editMode !== true\" class=\"btn-group\" role=\"group\"><button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Administration <span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li><a href=\"/strategies/rules\">Manage Rules</a></li><li><a href=\"/strategies/rule-sets\">Manage Rule Sets</a></li><li><a href=\"/strategies/indicators\">Manage Indicators</a></li></ul></div></div></template>"; });
define('text!resources/elements/strategy/strategy-navigation.html', ['module'], function(module) { module.exports = "<template><div class=\"sub-nav\"><nav class=\"navbar navbar\"><div class=\"container\"><nav class=\"navbar\"><ul class=\"nav navbar-nav\"><li repeat.for=\"item of items\" class=\"${item.isActive ? 'active' : ''}\"><a href.bind=\"item.url\">${item.title}</a></li></ul></nav></div></nav></div></template>"; });
define('text!components/strategies/indicators/indicators.css', ['module'], function(module) { module.exports = ".c_indicators-content .c_indicators {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.c_indicators-content .c_indicator-list {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.c_indicators-content .c_indicator {\n  padding: 10px 10px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_indicators-content .c_indicator.c_indicator-add,\n.c_indicators-content .c_indicator .c_indicator-add {\n  cursor: pointer;\n  border-bottom: 0px solid rgba(204, 204, 204, 0.36);\n}\n.c_indicators-content .c_indicator.c_indicator-add .glyphicon,\n.c_indicators-content .c_indicator .c_indicator-add .glyphicon {\n  color: green;\n}\n.c_indicators-content .c_indicator .c_indicator-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.c_indicators-content .c_indicator .c_indicator-header {\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.c_indicators-content .c_indicator .c_indicator-header .chevron {\n  float: right;\n}\n.c_indicators-content .c_indicator .c_indicator-header .btn {\n  margin-right: 10px;\n  z-index: 100;\n}\n.c_indicators-content .c_indicator .c_indicator-details {\n  padding-top: 10px;\n}\n.c_indicators-content .c_indicator .c_indicator-details form {\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.c_indicators-content .c_indicator .c_indicator-details form fieldset {\n  padding-bottom: 10px;\n}\n.c_indicators-content .c_indicator .c_indicator-details .form-inline {\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n.c_indicators-content .c_indicator .c_indicator-details h4 {\n  border-bottom: 1px solid #e22004;\n}\n"; });
define('text!resources/elements/strategy/strategy-rule-set.html', ['module'], function(module) { module.exports = "<template><div class=\"c_rule_set\" if.bind=\"!ruleset.deleted\"><div class=\"c_rule_set-header\" click.trigger=\"onExpanded()\"><button type=\"button\" show.bind=\"!expanded && editMode\" click.delegate=\"startDelete()\" class=\"btn btn-warning btn-xs\">Detach</button> <span>${ruleset.ruleSetName}</span><div class=\"chevron\"><span class=\"glyphicon ${expanded ? 'glyphicon-menu-down' : 'glyphicon-menu-left'}\" aria-hidden=\"true\"></span><div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" show.bind=\"editMode\"><button type=\"button\" class=\"btn btn-xs btn-default\" click.trigger=\"onMoveUp()\"><span class=\"glyphicon glyphicon-menu-up\" aria-hidden=\"true\"></span></button> <button type=\"button\" class=\"btn btn-xs btn-default\" click.trigger=\"onMoveDown()\"><span class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span></button></div></div></div><div class=\"c_rule_set-details\" if.bind=\"expanded\"><form if.bind=\"!deleteMode\"><fieldset disabled.bind=\"!editMode\"><div class=\"form-group\"><label>Description</label><p class=\"form-control\" readonly=\"readonly\">${ruleset.ruleSetDescription}</p></div><div class=\"form-inline\"><div class=\"form-group\"><label>Period:</label><select readonly=\"readonly\" class=\"form-control\" value.bind=\"ruleset.ruleSetPeriod\"><option repeat.for=\"period of periods\" model.bind=\"period.id\">${period.name}</option></select></div><div class=\"form-group\"><label>RuleSet Optional:</label><div class=\"input-group\"><input type=\"text\" class=\"form-control\" aria-label=\"...\" value=\"${ruleset.ruleSetOptional ? 'Optional' : 'Required'}\"><div class=\"input-group-btn\" if.bind=\"ruleset.editMode\"><button type=\"button\" click.delegate=\"setOptionalStatus(true)\" if.bind=\"!ruleset.ruleSetOptional\" class=\"btn btn-danger\">Make Optional</button> <button type=\"button\" click.delegate=\"setOptionalStatus(false)\" if.bind=\"ruleset.ruleSetOptional\" class=\"btn btn-danger\">Make Required</button></div></div></div></div></fieldset></form><div class=\"c_rule_set-actions\" if.bind=\"deleteMode\"><p><br>Rule set will be detached from the rule set. You can add it later at any time.<br></p><button type=\"button\" click.delegate=\"confirmDelete()\" class=\"btn btn-warning\">Detach</button> <button type=\"button\" click.delegate=\"cancelDelete()\" class=\"btn btn-default\">Cancel</button></div></div></div></template>"; });
define('text!components/journal/journals/journal-periods/journal-periods.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!components/strategies/rules/rule-sets.css', ['module'], function(module) { module.exports = ".c_rule_sets-content {\n  padding-bottom: 30px;\n}\n.c_rule_sets-content .c_rule_sets {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-bottom: 15px;\n}\n.c_rule_sets-content .c_rule_set-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.c_rule_sets-content .c_rule_set {\n  padding: 10px 10px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_rule_sets-content .c_rule_set.c_rule_set-add,\n.c_rule_sets-content .c_rule_set .c_rule_set-add {\n  cursor: pointer;\n  border-bottom: 0px solid rgba(204, 204, 204, 0.36);\n}\n.c_rule_sets-content .c_rule_set.c_rule_set-add .glyphicon,\n.c_rule_sets-content .c_rule_set .c_rule_set-add .glyphicon {\n  color: green;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-header {\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-header .chevron {\n  float: right;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-header .btn {\n  margin-right: 10px;\n  z-index: 100;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-header .btn-group,\n.c_rule_sets-content .c_rule_set .c_rule_set-header .btn-group-vertical {\n  margin-top: -3px;\n  margin-right: -3px;\n  margin-left: 6px;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-header .btn-group .btn,\n.c_rule_sets-content .c_rule_set .c_rule_set-header .btn-group-vertical .btn {\n  margin-right: 0;\n  font-size: 8px;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-details {\n  padding-top: 10px;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-details form {\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-details form fieldset {\n  padding-bottom: 10px;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-details .c_rule_set-list {\n  margin-left: 14px;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-details .c_rule-actions {\n  text-align: right;\n  margin-bottom: 20px;\n}\n.c_rule_sets-content .c_rule_set .c_rule_set-details h4 {\n  margin-top: 25px;\n  margin-left: 14px;\n  border-bottom: 1px solid #e22004;\n}\n.c_rule_sets-content .c_rule_set-list {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.c_rule_sets-content .c_rule_set-list .no-border .c_rule_set {\n  border-bottom: 0;\n}\n"; });
define('text!components/journal/journals/journal/journal.html', ['module'], function(module) { module.exports = "<template><div class=\"journal\"></div></template>"; });
define('text!components/journal/journals/journal-create/journal-create.html', ['module'], function(module) { module.exports = "<template><require from=\"./journal-create.css\"></require><div class=\"journal-create\"><header><h3>Create journal entry</h3></header><form submit.delegate=\"trySaveJournal()\"><fieldset><div class=\"row\"><div class=\"form-inline col-xs-12 col-md-8\"><div class=\"form-group\"><label for=\"txtTicker\">Ticker</label><input type=\"text\" class=\"form-control ticker\" id=\"txtTicker\" value.bind=\"journal.ticker & validate\"></div><div class=\"form-group\"><label for=\"ddlDirection\">Direction:</label><select id=\"ddlDirection\" class=\"form-control\" value.bind=\"journal.tradeDirection\"><option repeat.for=\"direction of directions\" model.bind=\"direction.id\">${direction.name}</option></select></div><div class=\"form-group\"><label for=\"txtDate\">Entry Date:</label><abp-datetime-picker model.bind=\"journal.entryDate & validate\" id=\"txtDate\" element.bind=\"entryDatePicker\"></abp-datetime-picker></div></div></div><div class=\"row\"><div class=\"col-xs-6\"><h5>Trade setup</h5><div class=\"form-horizontal\"><div class=\"form-group\"><label for=\"txtEntryPrice\" class=\"col-sm-4 control-label\">Entry price:</label><div class=\"col-sm-6\"><input type=\"text\" class=\"form-control\" id=\"txtEntryPrice\" value.bind=\"journal.entryPrice & validate\"></div></div><div class=\"form-group\"><label for=\"txtTargetPrice\" class=\"col-sm-4 control-label\">Target price:</label><div class=\"col-sm-6\"><input type=\"text\" class=\"form-control\" id=\"txtTargetPrice\" value.bind=\"journal.takeProfitPrice & validate\"></div></div><div class=\"form-group\"><label for=\"txtStopPrice\" class=\"col-sm-4 control-label\">Stop loss price:</label><div class=\"col-sm-6\"><input type=\"text\" class=\"form-control\" id=\"txtStopPrice\" value.bind=\"journal.stopLossPrice & validate\"></div></div></div></div><div class=\"col-xs-6\"><h5>Risk management</h5><div class=\"form-horizontal\"><div class=\"form-group\"><label for=\"txtRiskValue\" class=\"col-sm-5 control-label\">Risk value($):</label><div class=\"col-sm-6\"><input type=\"text\" class=\"form-control\" id=\"txtRiskValue\" value.bind=\"journal.maxRiskValuePrice & validate\"></div></div><div class=\"form-group\"><label for=\"txtRewardRatio\" class=\"col-sm-5 control-label\">Reward / Risk ratio:</label><div class=\"col-sm-6\"><input type=\"text\" class=\"form-control\" readonly=\"readonly\" id=\"txtRewardRatio\" value.bind=\"journal.rewardRiskRatio & validate\"></div></div><div class=\"form-group\"><label for=\"txtMaxShares\" class=\"col-sm-5 control-label\">Max shares count:</label><div class=\"col-sm-6\"><input type=\"text\" class=\"form-control\" readonly=\"readonly\" id=\"txtMaxShares\" value.bind=\"journal.maxSharesCount & validate\"></div></div></div></div></div></fieldset><div class=\"c_journal-actions\"><button type=\"submit\" class=\"btn btn-danger\">Save</button> <button type=\"button\" click.delegate=\"cancelEdit()\" class=\"btn btn-default\">Cancel</button></div></form></div></template>"; });
define('text!components/strategies/rules/rules.css', ['module'], function(module) { module.exports = ".c_rules-content .c_rules {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.c_rules-content .c_rule-list {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.c_rules-content .c_rule {\n  padding: 10px 10px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_rules-content .c_rule.c_rule-add,\n.c_rules-content .c_rule .c_rule-add {\n  cursor: pointer;\n  border-bottom: 0px solid rgba(204, 204, 204, 0.36);\n}\n.c_rules-content .c_rule.c_rule-add .glyphicon,\n.c_rules-content .c_rule .c_rule-add .glyphicon {\n  color: green;\n}\n.c_rules-content .c_rule .c_rule-actions {\n  text-align: right;\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.c_rules-content .c_rule .c_rule-header {\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.c_rules-content .c_rule .c_rule-header .chevron {\n  float: right;\n}\n.c_rules-content .c_rule .c_rule-header .btn {\n  margin-right: 10px;\n  z-index: 100;\n}\n.c_rules-content .c_rule .c_rule-details {\n  padding-top: 10px;\n}\n.c_rules-content .c_rule .c_rule-details form {\n  border-top: 1px solid #e22004;\n  padding-top: 10px;\n}\n.c_rules-content .c_rule .c_rule-details form fieldset {\n  padding-bottom: 10px;\n}\n.c_rules-content .c_rule .c_rule-details h4 {\n  border-bottom: 1px solid #e22004;\n}\n"; });
define('text!components/studies/categories/categories.css', ['module'], function(module) { module.exports = ""; });
define('text!components/market/chart-layouts/layouts/chart-layout-indicator.html', ['module'], function(module) { module.exports = "<template><div class=\"c_layout-header\" click.delegate=\"toggleExpand()\"><span>${indicator.name}</span></div><div class=\"ordered-chevron\"><span class=\"glyphicon ${expanded ? 'glyphicon-menu-down' : 'glyphicon-menu-left'}\" aria-hidden=\"true\"></span><div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" show.bind=\"editMode\"><button type=\"button\" class=\"btn btn-xs btn-default\" click.trigger=\"onMoveUp()\"><span class=\"glyphicon glyphicon-menu-up\" aria-hidden=\"true\"></span></button> <button type=\"button\" class=\"btn btn-xs btn-default\" click.trigger=\"onMoveDown()\"><span class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span></button></div></div><div class=\"c_layout-details\" show.bind=\"expanded\"><form><fieldset disabled.bind=\"!editMode\"><div class=\"form-inline\"><div class=\"form-group\"><label for=\"txtColor\">Chart color</label><input type=\"text\" class=\"form-control\" id=\"txtColor\" value.bind=\"indicator.lineColor\"></div></div></fieldset></form></div></template>"; });
define('text!components/market/chart-layouts/layouts/chart-layout-plot.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart-layout-indicator\"></require><div class=\"c_layout-header\" click.delegate=\"toggleExpand()\"><span>${plot.name}</span></div><div class=\"ordered-chevron\"><span class=\"glyphicon ${expanded ? 'glyphicon-menu-down' : 'glyphicon-menu-left'}\" aria-hidden=\"true\"></span><div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\" show.bind=\"editMode\"><button type=\"button\" class=\"btn btn-xs btn-default\" click.trigger=\"onMoveUp()\"><span class=\"glyphicon glyphicon-menu-up\" aria-hidden=\"true\"></span></button> <button type=\"button\" class=\"btn btn-xs btn-default\" click.trigger=\"onMoveDown()\"><span class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span></button></div></div><div class=\"c_layout-details\" show.bind=\"expanded\"><h4>Indicators</h4><div class=\"c_layout_indicator-list\"><chart-layout-indicator class=\"c_layout ${$last && !editMode ? 'no-border':''} ${editMode ? 'edit-mode' : ''}\" repeat.for=\"indicator of plot.indicators\" indicator.bind=\"indicator\" edit-mode.bind=\"editMode\"></chart-layout-indicator><div class=\"c_layout c_layout-add\" show.bind=\"editMode\"><div class=\"c_layout-header\" click.delegate=\"addIndicator()\"><a>Attach Indicator</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div><div class=\"c_layout-details\" show.bind=\"addingMode && editMode\"><div class=\"form-group\"><label for=\"ddlIndicators\">Select Indicator</label><select id=\"ddlIndicators\" class=\"form-control\" value.bind=\"newIndicatorId\"><option repeat.for=\"item of definedIndicators\" model.bind=\"item.id\">${item.name}</option></select></div><div class=\"c_layout-actions no-border\"><button type=\"button\" click.delegate=\"confirmAddIndicator()\" class=\"btn btn-xs btn-warning\">Attach</button> <button type=\"button\" click.delegate=\"cancelAddIndicator()\" class=\"btn btn-xs btn-default\">Cancel</button></div></div></div></div></div></template>"; });
define('text!components/market/chart-layouts/layouts/chart-layout.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart-layout-plot\"></require><div class=\"c_layout-header\" click.delegate=\"toggleExpand()\"><span>${layout.title}</span> <a class=\"chevron\"><span class=\"glyphicon ${expanded ? 'glyphicon-menu-down' : 'glyphicon-menu-left'}\" aria-hidden=\"true\"></span></a></div><div class=\"c_layout-details\" show.bind=\"expanded\"><form><fieldset disabled.bind=\"!editMode\"><div class=\"form-group\" show.bind=\"editMode\"><label for=\"txtName\">Layout name</label><input type=\"text\" class=\"form-control\" id=\"txtName\" value.bind=\"layout.title & validate\"></div><div class=\"form-group\"><label show.bind=\"editMode\" for=\"txtDescription\">Description</label><textarea rows=\"4\" class=\"form-control\" id=\"txtDescription\" value.bind=\"layout.description & validate\"></textarea></div><h4>Indicators</h4><div class=\"c_layout_indicator-list\"><chart-layout-indicator class=\"c_layout ${$last && !editMode ? 'no-border':''} ${editMode ? 'edit-mode' : ''}\" repeat.for=\"indicator of layout.indicators\" indicator.bind=\"indicator\" edit-mode.bind=\"editMode\"></chart-layout-indicator><div class=\"c_layout c_layout-add\" show.bind=\"editMode\"><div class=\"c_layout-header\" click.delegate=\"addIndicator()\"><a>Attach Indicator</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div><div class=\"c_layout-details\" show.bind=\"addingMode && editMode\"><div class=\"form-group\"><label for=\"ddlIndicators\">Select Indicator</label><select id=\"ddlIndicators\" class=\"form-control\" value.bind=\"newIndicatorId\"><option repeat.for=\"item of definedIndicators\" model.bind=\"item.id\">${item.name}</option></select></div><div class=\"c_layout-actions no-border\"><button type=\"button\" click.delegate=\"confirmAddIndicator()\" class=\"btn btn-xs btn-warning\">Attach</button> <button type=\"button\" click.delegate=\"cancelAddIndicator()\" class=\"btn btn-xs btn-default\">Cancel</button></div></div></div></div></fieldset><div class=\"c_layout-actions\"><button type=\"button\" if.bind=\"!editMode\" click.delegate=\"startEdit()\" class=\"btn btn-danger\">Edit</button> <button type=\"button\" if.bind=\"editMode\" click.delegate=\"confirmSave()\" class=\"btn btn-danger\">Save</button> <button type=\"button\" if.bind=\"editMode\" click.delegate=\"cancelSave()\" class=\"btn btn-default\">Cancel</button></div></form></div></template>"; });
define('text!components/studies/study/study.css', ['module'], function(module) { module.exports = ".article {\n  background-color: rgba(255, 255, 255, 0.7);\n  min-height: 50px;\n}\n.article ol li,\n.article ul li {\n  border-bottom: 1px dotted #777;\n  padding: 6px 0;\n  font-size: 14px;\n}\n.article .form-horizontal {\n  margin-top: 18px;\n  display: block;\n  margin-bottom: 25px;\n}\n.article article-image {\n  display: block;\n  text-align: center;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.article article-image img {\n  max-width: 100%;\n}\n.article article-image p {\n  color: #333333;\n  padding-bottom: 0px;\n  margin-top: 5px;\n  font-size: 11px;\n}\n.article article-part.edit-mode {\n  display: block;\n  background-color: #F8F8F8;\n  padding: 2px 10px 10px 10px;\n  margin-bottom: 25px;\n  border-radius: 5px;\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.article article-part.edit-mode li {\n  border: none;\n}\n.article article-part.edit-mode li .col-xs-10,\n.article article-part.edit-mode li col-xs-2 {\n  padding: 0;\n  margin: 0;\n}\n.article article-part textarea {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: solid 1px #ccc;\n}\n.article .block-actions {\n  text-align: right;\n  position: relative;\n  top: -12px;\n  left: 2px;\n  margin-bottom: -3px;\n}\n.article ordered-list-block {\n  display: block;\n}\n.article ordered-list-block edit-mode {\n  display: block;\n  text-align: right;\n}\n.article ordered-list-block edit-mode li button {\n  margin-bottom: 5px;\n}\n.article heading-block read-mode {\n  display: block;\n  font-family: \"PT Sans\";\n  font-size: 17px;\n  font-weight: 400;\n  color: #000000;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.article heading-block .col-xs-10 {\n  padding-left: 0;\n}\n.article image-block edit-mode {\n  margin-top: 9px;\n  display: block;\n}\n.article image-block edit-mode img {\n  max-width: 100%;\n}\n.article image-block edit-mode .col-xs-3 {\n  text-align: right;\n  padding-top: 7px;\n}\n.article image-block edit-mode .col-xs-9 {\n  padding-left: 0;\n}\n.article image-block edit-mode .row {\n  margin-bottom: 10px;\n}\n.c_article_parts.edit-mode {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_article_parts.edit-mode .c_article_part {\n  border-bottom: solid 1px rgba(204, 204, 204, 0.36);\n}\n.c_article_part {\n  padding-top: 10px;\n  padding-bottom: 0px;\n}\n.c_article_part form h4 {\n  margin-top: 2px;\n  border: 0;\n  color: #333333;\n  margin-bottom: 5px;\n}\n.c_article_part img {\n  width: 100%;\n}\n.c_article_part .form-group {\n  margin-bottom: 10px;\n}\n.c_article_part .form-group .form-control {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.c_article_part .form-group label {\n  padding-top: 10px;\n}\n.c_article_part article-part-list fieldset {\n  margin-bottom: 30px;\n}\n.c_article_part-add {\n  cursor: pointer;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  padding-top: 10px;\n}\n.c_article_part-add .chevron {\n  float: right;\n  color: #008000;\n}\n.form-group {\n  margin-bottom: 10px;\n}\n"; });
define('text!components/market/chart-layouts/layouts/chart-layouts.html', ['module'], function(module) { module.exports = "<template><require from=\"../chart-layouts.css\"></require><require from=\"./chart-layout\"></require><div class=\"c_layouts-content\"><header><h3>${title}</h3></header><div class=\"c_layout-list\"><chart-layout class=\"c_layout\" repeat.for=\"layout of layouts\" layout.bind=\"layout\"></chart-layout><div class=\"c_layout c_layout-add\" show.bind=\"true\"><div class=\"c_layout-header\" click.delegate=\"addLayout()\"><a>Create New Layout</a> <a class=\"chevron\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span></a></div><div class=\"c_layout-details\" show.bind=\"addingMode === true && editMode\"><form><fieldset><div class=\"form-group\"><label for=\"txtName\">Layout Name</label><input type=\"text\" class=\"form-control\" id=\"txtName\" value.bind=\"newLayout.title & validate\"></div><div class=\"form-group\"><label for=\"txtDescription\">Description</label><textarea rows=\"4\" class=\"form-control\" id=\"txtDescription\" value.bind=\"newLayout.description & validate\"></textarea></div></fieldset><div class=\"c_layout-actions\"><button type=\"button\" click.delegate=\"confirmAddLayout()\" class=\"btn btn-danger\">Create</button> <button type=\"button\" click.delegate=\"cancelAddLayout()\" class=\"btn btn-default\">Cancel</button></div></form></div></div></div></div></template>"; });
define('text!components/market/jobs-dashboard/jobs/job.html', ['module'], function(module) { module.exports = "<template><require from=\"./job.css\"></require><require from=\"./job-details/job-details\"></require><header><h3>${title}</h3></header><h4>Current Job</h4><div class=\"form-horizontal form-current-job\"><fieldset if.bind=\"currentJobStarted\"><div class=\"form-group\"><label class=\"col-sm-3 control-label\">Job Number</label><div class=\"col-sm-8\"><p class=\"form-control\" readonly=\"readonly\">#000000${currentJob.jobId}</p></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\">Started Date</label><div class=\"col-sm-8\"><p class=\"form-control\" readonly=\"readonly\">${startDate}</p></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\">Status</label><div class=\"col-sm-8\"><p class=\"form-control\" readonly=\"readonly\">${jobStatusName}</p></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\">Progress</label><div class=\"col-sm-8 col-progress\"><span>${currentJob.progress}%</span><s-progress progress.bind=\"currentJob.progress\"></s-progress></div></div><div class=\"c_job-actions\"><button type=\"button\" if.bind=\"currentJobPaused\" click.delegate=\"resumeJob()\" class=\"btn btn-default\">Resume job</button> <button type=\"button\" if.bind=\"currentJobStarted\" click.delegate=\"cancelJob()\" class=\"btn btn-danger\">Cancel Job</button> <button type=\"button\" if.bind=\"currentJobInProgress\" click.delegate=\"pauseJob()\" class=\"btn btn-warning\">Pause job</button></div></fieldset></div><div class=\"c_job-actions\" if.bind=\"!currentJobStarted\"><button type=\"button\" click.delegate=\"startJob()\" class=\"btn btn-danger\">Start new job</button></div><div if.bind=\"jobs.length > 0\"><h4>History</h4><div class=\"c_job-details-list\"><job-details repeat.for=\"job of jobs\" job.bind=\"job\"></job-details><div class=\"c_jod_details no-border\"><div class=\"c_jod_details-header right\"><button type=\"button\" click.delegate=\"deleteAll()\" class=\"btn btn-warning\">Clear history</button></div></div></div></div></template>"; });
define('text!components/journal/journals/journal-create/journal-create.css', ['module'], function(module) { module.exports = ".journal-create abp-datetime-picker {\n  display: inline-block;\n}\n.journal-create abp-datetime-picker input {\n  width: 150px !important;\n}\n.journal-create input.ticker {\n  width: 150px !important;\n  text-transform: uppercase;\n}\n.journal-create .row {\n  margin-bottom: 20px;\n}\n.journal-create h5 {\n  border-bottom: solid 1px #cbcbcb;\n  margin-left: 15px;\n  padding-left: 15px;\n  margin-bottom: 21px;\n  padding-bottom: 6px;\n}\n"; });
define('text!components/market/market-indices/indices/market-index.html', ['module'], function(module) { module.exports = "<template><require from=\"../market-indices.css\"></require><header><h3>${title}</h3></header></template>"; });
define('text!components/studies/study/category-studies/category-studies.html', ['module'], function(module) { module.exports = "<template><require from=\"./category-studies.css\"></require><div class=\"side-navigation\"><h3>${category.title}</h3><ul><li repeat.for=\"summary of articles\"><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\"></span> <a click.delegate=\"navigateToArticle(summary.url)\" title=\"${summary.summary}\" class=\"${summary.selected ? 'active' : ''}\">${summary.title} Rules</a></li></ul><div if.bind=\"editMode\"><h3>Add / Remove Articles</h3><ul><li class=\"side-navigation-add\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span> <a click.delegate=\"addArticle()\">Add New Article</a></li><li class=\"side-navigation-delete\"><form><span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> <a click.delegate=\"deleting = true\">Delete Loaded Article</a><div class=\"form-actions no-border\" if.bind=\"deleting \"><input class=\"btn btn-danger\" type=\"button\" click.delegate=\"deleteArticle()\" value=\"Delete\"> <input class=\"btn btn-default\" type=\"button\" click.delegate=\"deleting = false\" value=\"Cancel\"></div></form></li></ul></div></div></template>"; });
define('text!components/studies/study/study-actions/study-actions.html', ['module'], function(module) { module.exports = "<template><div if.bind=\"powerUser\"><div if.bind=\"editMode !== true\" class=\"btn-group\" role=\"group\"><button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Administration <span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li><a click.delegate=\"startEdit()\">Edit Page</a></li><li role=\"separator\" class=\"divider\"></li><li><a click.delegate=\"manageCategories()\">Manage Categories</a></li></ul></div><div class=\"btn-group\" role=\"group\" aria-label=\"...\"><button type=\"button\" if.bind=\"editMode === true\" click.delegate=\"saveArticle()\" class=\"btn btn-success\">Apply Changes</button> <button type=\"button\" if.bind=\"editMode === true\" click.delegate=\"cancelEdit()\" class=\"btn btn-default\">Cancel</button></div></div></template>"; });
define('text!components/market/jobs-dashboard/jobs/job.css', ['module'], function(module) { module.exports = ".c_dashboard {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-bottom: 15px;\n}\n.c_job-details-list {\n  border: 1px solid rgba(204, 204, 204, 0.36);\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.c_job-details-list .no-border .c_rule_set {\n  border-bottom: 0;\n}\n.c_job-details-list .c_jod_details {\n  padding: 10px 10px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.36);\n}\n.c_job-details-list .c_jod_details .c_jod_details-header {\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.c_job-details-list .c_jod_details .c_jod_details-header .chevron {\n  float: right;\n}\n.c_job-details-list .c_jod_details .c_jod_details-header .btn {\n  margin-right: 10px;\n  z-index: 100;\n}\n.c_job-details-list .c_jod_details .c_jod_details-header .btn-group,\n.c_job-details-list .c_jod_details .c_jod_details-header .btn-group-vertical {\n  margin-top: -3px;\n  margin-right: -3px;\n  margin-left: 6px;\n}\n.c_job-details-list .c_jod_details .c_jod_details-header .btn-group .btn,\n.c_job-details-list .c_jod_details .c_jod_details-header .btn-group-vertical .btn {\n  margin-right: 0;\n  font-size: 8px;\n}\n.c_job-details-list .c_jod_details .c_jod_details-details {\n  padding-top: 10px;\n}\n.c_job-details-list .c_jod_details .c_jod_details-details h4 {\n  margin-top: 25px;\n  margin-left: 14px;\n  border-bottom: 1px solid #e22004;\n}\n.c_job-actions {\n  padding-top: 12px;\n  padding-right: 20px;\n  text-align: right;\n  border-top: solid 1px rgba(204, 204, 204, 0.36);\n}\n.job-staus-2 {\n  color: #5cb85c;\n}\n.job-staus-3 {\n  color: #f59f25;\n}\n.job-staus-99,\n.chevron {\n  color: #CA1D04;\n}\n.label {\n  font-weight: 300;\n  font-size: 13px;\n  padding: 4px 8px;\n}\n.form-current-job fieldset {\n  border: solid 1px rgba(204, 204, 204, 0.36);\n  padding: 20px 0 12px;\n}\n.monospace {\n  font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\n  font-size: 13px;\n  margin-top: 2px;\n}\n.form-group.exception .form-control {\n  font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\n  font-size: 13px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 19px;\n  color: rgba(0, 0, 0, 0.55);\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n}\n.form-group.error .form-control {\n  color: #CA1D04;\n}\n.col-progress {\n  text-align: center;\n}\n.col-progress span {\n  font-size: 13px;\n  position: relative;\n  color: #5cb85c;\n  font-weight: 500;\n}\n.col-progress s-progress {\n  position: relative;\n  top: -8px;\n}\n"; });
define('text!components/studies/study/category-studies/category-studies.css', ['module'], function(module) { module.exports = ""; });
define('text!components/market/jobs-dashboard/jobs/job-details/job-details.html', ['module'], function(module) { module.exports = "<template><div class=\"c_jod_details\" if.bind=\"!deleted\"><div class=\"c_jod_details-header\" click.trigger=\"expand()\"><div class=\"row\"><div class=\"col-xs-3 monospace\">${completed}</div><div class=\"col-xs-3 job-staus-${job.status}\">${status} <span if.bind=\"job.status === 2\" class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span></div><div class=\"col-xs-3 monospace\"><span if.bind=\"runTime() != null\" class=\"label label-info\">${runTime()}</span></div><div class=\"col-xs-1 chevron\"><span class=\"glyphicon ${expanded ? 'glyphicon-menu-down':'glyphicon-menu-left'}\" aria-hidden=\"true\"></span></div></div></div><div class=\"c_jod_details-details\" if.bind=\"expanded\"><form><div repeat.for=\"log of jobLogs\"><div class=\"form-group ${log.level.toLowerCase()}\"><label>${log.level}</label><p class=\"form-control\">${log.message}</p></div><div class=\"form-group exception\" if.bind=\"log.exception.length > 0\"><label>Exception</label><p class=\"form-control\">${log.exception}</p></div></div></form><div class=\"c_job-actions\"><button type=\"button\" click.delegate=\"deleteJob()\" class=\"btn btn-warning\">Delete log</button></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map