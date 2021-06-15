const fs = require('fs');
const path = require('path');
function organizefunc(dir)
{
    //1) take input of the directory
    //2) create a directory named organized file
     let dest;
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
    dest = path.join(dir , "organized_folder");
    if(!fs.existsSync(dest)){
    fs.mkdirSync(dest);
    }
 }
   
    //3) Identify categories of all the files present in the input directory

    helporganize(dir , dest)

    //4)copy or cut files to that organized directory inside of any category folder
}

function helporganize(dir , dest)
{
 //3) Identify categories of all the files present in the input directory
 let child = fs.readdirSync(dir);
 for(let i=0;i<child.length;i++)
 {
     let address = path.join(dir, child[i]);
     let isfile  = fs.statSync(address).isFile();

     if(isfile)
     {
         let category = getcategory(child[i]);
         sendfile( address , dest , category)
         
     }
 }

}

function sendfile(file , dest , category)
{
    let filepath = path.join(dest , category);
    if(!fs.existsSync(filepath))
    {
        fs.mkdirSync(filepath);
    }
     
    let filename = path.basename(file);
    let destination = path.join(filepath , filename);
    fs.copyFileSync(file, destination);
    fs.unlinkSync(file);
    console.log(filename +" cutted down ");

}
function getcategory(file)
{
    let ext = path.extname(file);
    ext = ext.slice(1);
   // console.log(ext);
    for(type in types)
    {
        let arr = types[type];
        for(let i=0;i<arr.length;i++)
        {
           if(ext === arr[i])
           {
               return type;
           }
        }
    }

    return "others";
}

module.exports={
    helpkey : organizefunc
}