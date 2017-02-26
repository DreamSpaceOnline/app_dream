import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {

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
    config.globalResources(["./elements/progress/progress"]);

    config.globalResources(["./attributes/first-letter-span"]);

}
