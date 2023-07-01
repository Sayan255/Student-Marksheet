function Total(){
    var sub1=parseInt(document.getElementById("eng").value);
    var sub2=parseInt(document.getElementById("sci").value);
    var sub3=parseInt(document.getElementById("mat").value);
    var sub4=parseInt(document.getElementById("hin").value);
    var sub5=parseInt(document.getElementById("com").value);
    
    if(sub1>100||sub2>100||sub3>100||sub4>100||sub5>100){
        alert("Please mark range of 100");
    }
    else{
        var total=sub1+sub2+sub3+sub4+sub5;
        document.getElementById("total").innerHTML="English Marks:"+sub2+"<br> Science Marks:"+sub3+
        "<br>Mathematics Marks:"+sub4+"<br>Hindi Marks:"+sub5+"<br>Computer Marks:"+sub1+"<br>____________<br>Total Marks:"+total;
    }
}
function Average(){
    var sub1=parseInt(document.getElementById("eng").value);
    var sub2=parseInt(document.getElementById("sci").value);
    var sub3=parseInt(document.getElementById("mat").value);
    var sub4=parseInt(document.getElementById("hin").value);
    var sub5=parseInt(document.getElementById("com").value);

    if(sub1>100||sub2>100||sub3>100||sub4>100||sub5>100){
        alert("Please mark range of 100");
    }
    else{
        var total=sub1+sub2+sub3+sub4+sub5;
        var ave=total/5;
        document.getElementById("average").innerHTML="Your Average mark is:"+ave;
    }
}
function grade(){
    var sub1=parseInt(document.getElementById("eng").value);
    var sub2=parseInt(document.getElementById("sci").value);
    var sub3=parseInt(document.getElementById("mat").value);
    var sub4=parseInt(document.getElementById("hin").value);
    var sub5=parseInt(document.getElementById("com").value);

    if(sub1>100||sub2>100||sub3>100||sub4>100||sub5>100){
        alert("Please mark range of 100");
    }
    else{
    var total=sub1+sub2+sub3+sub4+sub5;
    var ave=total/5;

    if(ave>=80 && ave<=100){
        document.getElementById("grade").innerHTML="Your grade is: A";
    }
    else if(ave>=70 && ave<=80){
        document.getElementById("grade").innerHTML="Your grade is: B";
    }
    else if(ave>=60 && ave<=70){
        document.getElementById("grade").innerHTML="Your grade is: C";
    }
    else if(ave>=50 && ave<=60){
        document.getElementById("grade").innerHTML="Your grade is: D";
    }
    else if(ave>=40 && ave<=50){
        document.getElementById("grade").innerHTML="Your grade is: E";
    }
    else{
        document.getElementById("grade").innerHTML="You are fail in Exam";
    }
}
}
