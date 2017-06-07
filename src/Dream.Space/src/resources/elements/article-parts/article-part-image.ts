import * as toastr from "toastr";
import {bindable, autoinject} from 'aurelia-framework';
import {BindingEngine, Disposable} from 'aurelia-binding';
import {ArticleBlockInfo} from "../../../common/types/article-models";
import {BlobApiClient, FileDetails } from "../../../services/services-generated";

@autoinject
export class ArticlePartImage {
    @bindable part: ArticleBlockInfo;
    subscriptions: Disposable[];
    selectedFiles: any;
    textValid:boolean;
    imageValid: boolean;

    constructor(private readonly blobServices: BlobApiClient, private readonly bindingEngine: BindingEngine) {
        this.subscriptions = [];
    }

    attached() {
        if (!this.part.imageUrl) {
            this.part.imageUrl = "";
        }
        if (!this.part.text) {
            this.part.text = "";
        }

        this.subscriptions.push(this.bindingEngine.propertyObserver(this.part, "imageUrl")
            .subscribe(() => this.validate()));

        this.subscriptions.push(this.bindingEngine.propertyObserver(this.part, "text")
            .subscribe(() => this.validate()));

        this.validate();
    }

    detached() {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(subscription => {
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
            toastr.warning("Uploading selected file", "Uploading...");

            const reader = new FileReader();
            const file = this.selectedFiles.item(0);

            reader.addEventListener("loadend", async () => {
                if (reader.readyState === 2) {
                    const payload = new FileDetails();
                    payload.fileName = file.name;
                    payload.fileBody = reader.result;


                    const imageUrl = await this.blobServices.uploadSingle(payload);
                    if (imageUrl) {
                        this.part.imageUrl = imageUrl;
                        toastr.success('Image uploaded successfully', 'Image Uploaded');
                    } else {
                        toastr.error('Sorry, this image is too big. Must be 2MB max.', 'Failed to Uploaded');
                    }

                }
            });

            reader.readAsDataURL(file);
        }
    }
}
