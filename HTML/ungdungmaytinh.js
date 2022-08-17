

/*document.getElementById('nhapvao1').value;
document.getElementById('nhapvao2').value;*/
/*document.getElementById('cong').onclick=cong*/
function cong(){
    let conga = parseFloat(document.getElementById('nhapvao1').value);
    let congb = parseFloat(document.getElementById('nhapvao2').value);
    let tong  = (conga + congb)
    document.getElementById('text').innerHTML= "=" + tong
}
function tru() {
    let conga = parseFloat(document.getElementById('nhapvao1').value);
    let congb = parseFloat(document.getElementById('nhapvao2').value);
    let hieu  = (conga-congb)
    document.getElementById('text').innerHTML= "=" + hieu
}
function nhan(){
    let conga = parseFloat(document.getElementById('nhapvao1').value);
    let congb = parseFloat(document.getElementById('nhapvao2').value);
    let tich  = (conga*congb)
    document.getElementById('text').innerHTML= "=" + tich
}
function chia() {
    let conga = parseFloat(document.getElementById('nhapvao1').value);
    let congb = parseFloat(document.getElementById('nhapvao2').value);
    let thuong = (conga / congb)
    document.getElementById('text').innerHTML = "=" + thuong
}