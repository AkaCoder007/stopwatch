tracker=0;
var sec=0;
var minutes="0"+0;
var hours=0;
function secfunc()
{    
   sec++;
   if(sec<60)
   {
   if(sec<10) sec="0"+sec;

   document.getElementById("disp").innerHTML =hours+":"+minutes+":"+sec;



   }
   
else               {
    

   sec=0;

   if(minutes<59)
   {
       
       
       minutes++;
       if(minutes<10) document.getElementById("disp").innerHTML ="00:"+hours+"0"+minutes+":"+sec;
     else document.getElementById("disp").innerHTML =hours+":"+minutes+":"+sec;

     

   }
   else 
   {
      minutes=0;
      hours++;
      
      if(hours<10)  hours="0"+hours;
     
      else document.getElementById("disp").innerHTML =hours+":"+"0"+minutes+":"+sec;
   }


   }

  
}
function start()
{
    tracker++; 
    
    
    
    clearInterval();
    if(tracker%2==1)
    {
        document.getElementById("start").innerHTML ="pause";
       time = setInterval(secfunc, 100);
    }
    else {
        stop();
        document.getElementById("start").innerHTML ="continue";
    }
       
      
      
}

function stop()
{
clearInterval(time);
}

function reset()
{
    sec=0;
    hours=0;
    minutes=0;
    stop();
    document.getElementById("start").innerHTML ="start";
   document.getElementById("disp").innerHTML =" 00:00:00";

}
