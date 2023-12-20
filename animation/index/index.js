let x = 0;
function onLoad(e){
    var a = document.getElementById('test');
    h=x-a.scrollTop;
    if (h<0){
        document.getElementById('navbar').style.width="82px";
        document.getElementById('momo').style.opacity="0";
        x=a.scrollTop;
    }else{
        document.getElementById('navbar').style.width="95%";
        document.getElementById('momo').style.opacity="1";
        x=a.scrollTop;
    }
    console.log(a.scrollTop);

}
function fleche(){
    document.getElementById('fleche').classList.toggle('fleche2');
}
setInterval(fleche,500)

