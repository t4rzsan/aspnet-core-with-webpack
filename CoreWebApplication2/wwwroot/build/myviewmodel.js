"use strict";
var ko = require("knockout");
var MyViewModel = (function () {
    function MyViewModel(firstname, lastname) {
        this.firstname = ko.observable(firstname);
        this.lastname = ko.observable(lastname);
    }
    return MyViewModel;
}());
ko.applyBindings(new MyViewModel("Jakob", "Christensen"));
//# sourceMappingURL=myviewmodel.js.map