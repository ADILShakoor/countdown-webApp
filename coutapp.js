const endDate="18 June 2024 03:48 am";
 document.getElementById("enDate").innerHTML=endDate;
 const input=document.querySelectorAll("input")

 function clock(){
    const end=new Date(endDate);
    const now=new Date();
    const diff=end-now;
    if (diff<0) {
        // return alert("your time had finish")
        return
    }
    // console.log(diff);
    //always gives in miliseconds
    // 1 second = 1000 milisecond
    // 1 mint   = 60 seconds
    // 1 houre  = 60 mint
    //1 day     = 24 hourse 
    // convert millisecons into days by
    //in division give qoustent as days
    const days=Math.floor(diff/1000/60/60/24);
    input[0].value=days;
    //finds hours by take moduls of total hours by hours in one day
    input[1].value=Math.floor((diff/1000/60/60)%24);
    //find  mints by take modules of total mints by mints in one hour
    input[2].value=Math.floor((diff/1000/60)%60);
    //find seconds by take moduls of total seconds by second in one mint
    input[3].value=Math.floor((diff/1000)%60);


    // console.log(days);
 }

 //initialcall the function
 clock();
 //call every millisecond
 setInterval(() => {
    clock()
 }, 1000);

