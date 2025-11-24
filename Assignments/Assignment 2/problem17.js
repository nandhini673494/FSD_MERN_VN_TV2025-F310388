function downloadFile(filename,callback){
    setTimeout(()=>{
        console.log('Downloading ${filename}...');
    setTimeout(()=>{
            console.log("Download complete");
            callback?.();
    },0);
        },2000);
    }
        



