define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('auction/auction',["require", "exports"], function (require, exports) {
    "use strict";
    var Auction = (function () {
        function Auction() {
            this.outcode = 'Some cool area';
        }
        return Auction;
    }());
    exports.Auction = Auction;
});

define('commission-auction/commission-auction',["require", "exports"], function (require, exports) {
    "use strict";
    var CommissionAuction = (function () {
        function CommissionAuction() {
            this.outcode = 'Some cool commission auction area';
        }
        return CommissionAuction;
    }());
    exports.CommissionAuction = CommissionAuction;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./app.css\"></require><require from=\"./auction/auction\"></require><require from=\"./commission-auction/commission-auction\"></require><h1 class=\"main-header\">${message}</h1><auction></auction><commission-auction></commission-auction></template>"; });
define('text!commission-auction/commission-auction.html', ['module'], function(module) { module.exports = "<template class=\"commission-auction\"><require from=\"./commission-auction.css\"></require><h2 class=\"outcode\">Your outcode is ${outcode}</h2></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "@import url(//fonts.googleapis.com/css?family=Ubuntu:400,500);\n@import url(//fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500);\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url(\"/fonts/glyphicons-halflings-regular.eot\");\n  src: url(\"/fonts/glyphicons-halflings-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/glyphicons-halflings-regular.woff\") format(\"woff\"), url(\"/fonts/glyphicons-halflings-regular.ttf\") format(\"truetype\"), url(\"/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular\") format(\"svg\"); }\n"; });
define('text!commission-auction/commission-auction.css', ['module'], function(module) { module.exports = ".commission-auction .outcode {\n  color: grey; }\n"; });
define('text!auction/auction.html', ['module'], function(module) { module.exports = "<template class=\"auction\"><require from=\"./auction.css\"></require><h2 class=\"outcode\">Your outcode is ${outcode}</h2></template>"; });
define('text!auction/auction.css', ['module'], function(module) { module.exports = ".auction .outcode {\n  color: pink; }\n"; });
//# sourceMappingURL=app-bundle.js.map