//ex3 les tableaux:
let arr=[12,55,11,8,-22,6,7];
let n=Number(prompt());
function go(arr,n)
{
    if(n>arr.length)
    {
        for(let i=0 ;i <arr.length;i++)
        {  let  last = arr[arr.length-i-1];
        console.log(last);}
    }
    else 
    {for(let i=0 ;i < n;i++)
        {  let  last = arr[arr.length-i-1];
        console.log(last);}
        }
}
go(arr,n);
