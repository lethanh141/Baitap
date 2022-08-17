
document.getElementById('alo').onclick = convert;
function convert() {
    let Amount   = parseFloat(document.getElementById('amount').value);
    let From     = parseFloat(document.getElementById('from').value.trim()) ;
    let To       = parseFloat(document.getElementById('to').value.trim()) ;
    if(document.getElementById('amount').value==''){ document.getElementById('text').innerHTML="<i style='color: red'> *Please Input!<i/>"}
    else {let kq = Amount * From/To;
        let i=document.getElementById('to').selectedIndex;
        document.getElementById('text').innerText="Result : " + kq +"\t"
            + document.getElementById('to')[i].text;}

}

























