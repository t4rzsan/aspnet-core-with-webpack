import * as ko from "knockout"

class MyViewModel {
    constructor(private firstname: KnockoutObservable<string>, private lastname: KnockoutObservable<string>) {

    }
}