let td=document.getElementById('table').getElementsByTagName('td');

let arrayList=[{color:"#6F98A8",number:1},{color:"#2B8EAD",number:2},{color:"#333333",number:3},{color:"#2B8EAD",number:4},{color:"#333333",number:5}
,{color:"#bfbfbf",number:6},{color:"#bfbfbf",number:7},{color:"#6F98A8",number:8},{color:"#333333",number:9}];

//Initial Table values on page load
const initialTable=(data)=>{
for(let i=0;i<data?.length;i++){
    td[i].firstChild.nodeValue=data[i]?.number;
    td[i].style.background=data[i]?.color;
}
}

initialTable(arrayList);


//Utility function to display each table data
const displayNumberInTable=(arr)=>{
 for(let i=0;i<arr?.length;i++){
    td[i].firstChild.nodeValue=arr[i]?.number;
    td[i].style.background=arr[i]?.color;
 }
}

//To Shuffle Number
const getShuffledArray=()=>{
   arrayList.sort(()=>Math.random()-0.5);
   return arrayList;
}

//To Shuffle Numbers onClick of Shuffle Button 
const handleShuffle=()=>{
    const result=getShuffledArray();
    displayNumberInTable(result);
}

//To Sort Number onclick of Sort Button
const handleSort=()=>{
    const sortedNumber=arrayList?.sort((a,b)=>{return (a.number-b.number)});
    displayNumberInTable(sortedNumber);
}