import { inject, customAttribute } from "aurelia-framework";

//@containerless()
@inject(Element)
@customAttribute('first-letter-span')
export class FirstLetterSpan {

    element: Element;

    constructor(element) {
        this.element = element;
        if (this.element.childElementCount === 0) {
            this.wrapFirstLetterInSpan();
        }
    }

    wrapFirstLetterInSpan() {
        const text = this.element.innerHTML;
        let transformed = text.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
        transformed = transformed.replace(/\b([a-z])/gi, "<span>$1</span>");
        this.element.innerHTML = transformed;
    }

}