"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
var $ = require("jquery");
var MyViewModel = (function () {
    function MyViewModel(firstname, lastname) {
        this.firstname = ko.observable(firstname);
        this.lastname = ko.observable(lastname);
    }
    return MyViewModel;
}());
var container = $("#myview-container");
if (container.length == 1) {
    ko.applyBindings(new MyViewModel("Jakob", "Christensen"), container[0]);
}
//# sourceMappingURL=myviewmodel.js.map