let td=document.getElementById('table').getElementsByTagName('td');

//To reload page on page resize
window.onresize=function(){ location.reload();}  

let arrayList=[{color:"#6F98A8",number:1},{color:"#2B8EAD",number:2},{color:"#333333",number:3},{color:"#2B8EAD",number:4},{color:"#333333",number:5}
,{color:"#bfbfbf",number:6},{color:"#bfbfbf",number:7},{color:"#6F98A8",number:8},{color:"#333333",number:9}];

// //Utility function to display each table data
const displayTableData=(data)=>{
    const isMediaQuery = window.matchMedia("(max-width: 375px)") // Media Size as per given criteria

for(let i=0;i<data?.length;i++){
    td[i].firstChild.nodeValue=data[i]?.number;
    if(isMediaQuery.matches){
      td[i].style.borderLeft=`10px solid ${data[i]?.color}`;
    }else{
        td[i].style.background=data[i]?.color;
    }
    
}
}

displayTableData(arrayList); //To show initial data on page load


//To Shuffle Number
const getShuffledArray=()=>{
   arrayList.sort(()=>Math.random()-0.5);
   return arrayList;
}

//To Shuffle Numbers onClick of Shuffle Button 
const handleShuffle=()=>{
    const result=getShuffledArray();
    displayTableData(result);
}

//To Sort Number onclick of Sort Button
const handleSort=()=>{
    const sortedNumber=arrayList?.sort((a,b)=>{return (a.number-b.number)});
    displayTableData(sortedNumber);
}