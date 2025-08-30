const  add =(num1,num2)=>{return num1+num2;}
const sub = (num1,num2)=>{return num1-num2;}

// export is an object internally you can methods to it 
/*
1.name export 
2.module export
*/
//if the name here is xyz then to access in other file the name 
// should also be same


// exports.xyz=add;
// exports.sub=sub;

//only one in the file pass multiple ,methods in it.
export default{
    add,
    sub
};