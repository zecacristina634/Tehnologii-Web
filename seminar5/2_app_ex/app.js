let fs=require('fs');
let path=require('path');
let rimraf=require('rimraf');

const dirPath=path.join(__dirname, 'exemplu_dir');
const filePath=path.join(dirPath,'exemplu.txt');

try{
    if(!fs.existsSync(dirPath)){
        fs.mkdirSync(dirPath, {recursive:true});
        console.log('A fost creat directorul: '+dirPath);
    }
    fs.writeFileSync(filePath,'Hello world!');
    console.log('A fost creat fisierul: '+filePath);

    rimraf.sync(dirPath);
    console.log('A fost sters directorul: '+dirPath);

}catch(err){
    console.error('Eroare:',err);
}