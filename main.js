#!/usr/bin/env node


let arr = process.argv
const fs = require('fs');
const path = require('path');
const helpobj = require("./commands/help.js");
const organizeobj = require("./commands/organize");
const treeobj = require("./commands/tree.js");
//console.log(arr);
//node main.js tree "directorypath"
//node main.js organize "directorypath"
// node main.js help


types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'jpeg' , 'jpg' ,'asm', 'tex' , 'pptx'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


const command = arr[2];

if(command === "tree")
{
    treeobj.helpkey(arr[3]);
}

else if(command==="organize")
{
    organizeobj.helpkey(arr[3]);
}
else if(command==="help")
{
    helpobj.helpkey();
}

