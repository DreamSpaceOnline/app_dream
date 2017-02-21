import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
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
