const fs = require('fs');
const path = require('path');
function help(dirPath, indent) {
    // is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true) {
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    } else {
        let dirName = path.basename(dirPath)
        console.log(indent + "└──" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i]);
            help(childPath, indent + "\t");
        }
    }


}
function treefunc(dir)
{
    if(dir==null) 
    {
        console.log("Plaese give the directory path");
        return ;
    }
    
    let exist = fs.existsSync(dir);

    if(exist===false)
    {
        console.log("Sorry this directory do not exist");
        return ;
    }
    else{
           
        help(dir,"");
    }
}

module.exports=
{
    helpkey : treefunc
}