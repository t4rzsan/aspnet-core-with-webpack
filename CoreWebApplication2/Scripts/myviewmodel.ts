import * as ko from "knockout"
import * as $ from "jquery"

class MyViewModel {
    firstname: KnockoutObservable<string>;
    lastname: KnockoutObservable<string>;

    constructor(firstname: string, lastname: string) {
        this.firstname = ko.observable(firstname);
        this.lastname = ko.observable(lastname);
    }
}

var container = $("#myview-container");
if (container.length == 1) {
    ko.applyBindings(new MyViewModel("Jakob", "Christensen"), container[0]);
}
