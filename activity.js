//SIR's CODE FOR REFERENCE 

// let fs= require('fs');
// let path = require('path');
// let extensions={
//     "Images":['.png','.jpg','.jpeg','.gif'],
//     'Audio':['.mp3'],
//     'Documents':['.pdf','.txt','.doc'],
//     'Compressed':['.zip','.rar'],
//     'Videos':['.mkv','.mp4']
// }
// let input = process.argv.slice(2);
// console.log(input[0]);
// let content = fs.readdirSync(input[0]);
// for(let i=0;i<content.length;i++)
// {
//     // console.log(content[i]);
//     //extensions
//     console.log(path.extname(content[i]));
// }













let fs = require('fs');
let path = require('path');

let extensions={
    "Images":['.png','.jpg','.jpeg','.gif'],
    'Audio':['.mp3'],
    'Documents':['.pdf','.txt','.doc'],
    'Compressed':['.zip','.rar'],
    'Videos':['.mkv','.mp4']
}

let input = process.argv.slice(2);
let folderPath = input[0];
console.log(input[0]);
let extFolderPath = folderPath;
function createFolder(){
    console.log(extFolderPath);
    fs.mkdirSync(extFolderPath);
}
function checkFolder(extension, folderPath){
    for(let key in extensions){
        let karr = extensions[key];
        //array.includes values array exist or not
        let eon = karr.includes(extension);
        if(eon == true){
            //console.log(true);
            //console.log(key);
            extFolderPath = path.join(folderPath, key);
            console.log(extFolderPath);
            break;
        }
    }
    return fs.existsSync(extFolderPath);
}

let content = fs.readdirSync(input[0]);
for(let i = 0; i < content.length; i++){

    //console.log(path.extname(content[i]));
    //extensions
    //console.log(path.name, content[i]);
    let extensionName = path.extname(content[i]);
    let extensionFolderExist = checkFolder(extensionName, folderPath);

    console.log(extensionFolderExist);
    if(extensionFolderExist == false){
        console.log(extFolderPath);
        createFolder();
        //file move kara dena is folder me
    }else{
        //file move kara do
    }
}