import * as toastr from "toastr";
import {bindable, autoinject} from 'aurelia-framework';
import {BindingEngine, Disposable} from 'aurelia-binding';
import {StorageService} from "../../../services/file-storage/storage-service";
import {ArticleBlockInfo } from "../../../services/articles/article-models";


@autoinject
export class ArticlePartImage {
    @bindable part: ArticleBlockInfo;
    subscriptions: Disposable[];
    selectedFiles: any;
    textValid:boolean;
    imageValid: boolean;

    constructor(private blobServices: StorageService, private bindingEngine: BindingEngine) {
        this.subscriptions = [];
    }

    attached() {
        if (!this.part.imageUrl) {
            this.part.imageUrl = '';
        }
        if (!this.part.text) {
            this.part.text = '';
        }

        this.subscriptions.push(this.bindingEngine.propertyObserver(this.part, 'imageUrl')
            .subscribe(() => this.validate()));

        this.subscriptions.push(this.bindingEngine.propertyObserver(this.part, 'text')
            .subscribe(() => this.validate()));

        this.validate();
    }

    detached() {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(function(subscription) {
                subscription.dispose();
            });
        }
    }

    validate() {
        this.textValid = this.part.text.length > 0;
        this.imageValid = this.part.imageUrl.length > 4;

        this.part.valid = this.textValid && this.imageValid;
        
    }

    blobToUrl(blob) {
        return URL.createObjectURL(blob);
    }

    async uploadImage() {
        if (this.selectedFiles.length > 0) {
            toastr.warning('Uploading selected file', 'Uploading...');

            let reader = new FileReader();
            let file = this.selectedFiles.item(0);
            let self = this;
            reader.addEventListener("loadend", function() {
                if (reader.readyState === 2) {
                    self.blobServices.uploadFile(file.name, reader.result)
                        .then(imageUrl => {
                            if (imageUrl) {
                                self.part.imageUrl = imageUrl;
                                toastr.success('Image uploaded successfully', 'Image Uploaded');
                            } else {
                                toastr.error('Sorry, this image is too big. Must be 2MB max.', 'Failed to Uploaded');
                            }

                        });
                }
            });

            reader.readAsDataURL(file);
        }
    }
}
