export class FileListToArrayValueConverter {  
    toView(fileList: any) {
        const files: any[] = [];
        if (!fileList) {
            return files;
        }
        for(let i = 0; i < fileList.length; i++) {
            files.push(fileList.item(i));
        }
        return files;
    }
}