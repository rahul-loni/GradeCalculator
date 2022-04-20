// alert("rahul kumar")

const calcy = () =>{
    let wd=document.getElementById('wd').value;
    let maths=document.getElementById('maths').value;
    let comp=document.getElementById('comp').value;
    let phy=document.getElementById('phy').value;

    let grade="";


    let totalgrade=parseFloat(wd) +parseFloat(maths)+parseFloat(comp)+parseFloat(phy);
    alert(totalgrade)
    let percentage=(totalgrade/400)*100;
    alert(percentage)

    if(percentage <= 100 && percentage >= 80){
         grade = 'A';
    }
    else if(percentage <= 79 && percentage >= 60){
        grade = 'B';
    }
    else if(percentage <= 59 && percentage >= 40){
        grade = 'C';
    }else{
        grade ='F';
    }
    document.getElementById('showData').innerHTML= `out of 400 of your total is ${totalgrade} and percentage is 
    ${percentage} <br> your grade is ${grade}.`


}