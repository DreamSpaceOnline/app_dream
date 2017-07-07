export class BlobToUrlValueConverter {  
    toView(blob: any) {
        const imageUrl = URL.createObjectURL(blob);
        return imageUrl;
    }
}