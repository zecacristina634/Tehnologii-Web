// let evenCollection=document.querySelectorAll("tbody tr:nth-child(even)");
// let oddCollection=document.querySelectorAll("tbody tr:nth-child(odd)");

// if(evenCollection && evenCollection.length>0)
//     for(let item of evenCollection)
//         item.bgColor="red";

// if(oddCollection && oddCollection.length>0)
//     for(let item of oddCollection)
//         item.bgColor="yellow";

let rows=document.querySelectorAll("tbody tr");

if(rows.length>0){
    for(let i=0;i<rows.length;i++)
        if(i%2===0)
            rows[i].style.backgroundColor="violet"; 
    rows[0].style.backgroundColor="blue";
    rows[rows.length-1].style.backgroundColor="green";
}