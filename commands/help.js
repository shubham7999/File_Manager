function helpfunc()
{
    let s = `Use the following command accordingy:

    1) arrange help -->> for taking help
    2) arrange organize dir_name -->> Organize the directory which you enter in place of dir_name
    3)arrange tree dir_name -->> Make a tree of the folder which you give in dir_name
    `
    console.log(s);
}

module.exports=
{
   helpkey : helpfunc
}