function calculateTip(){
    var billAmt=document.getElementById('bill').value;
    var serviceQual=document.getElementById('tipAmt').value;
    var numOfPeople=document.getElementById('people').value;

if(billAmt===''||serviceQual==0){
    alert('Enter the values');
    return;
}
if(numOfPeople==""||numOfPeople==0)
{
    numOfPeople=1;
    document.getElementById('each').style.display='none';
}
else{
    document.getElementById('each').style.display="block";
}

var total=(billAmt*serviceQual)/numOfPeople;
total=Math.round(total);
document.getElementById('totalTip').style.display='block';
document.getElementById('tip').innerHTML=total;
}
document.getElementById('totalTip').style.display='none';
document.getElementById("each").style.display='none';
document.getElementById('button').onclick=function(){
    calculateTip();
}
