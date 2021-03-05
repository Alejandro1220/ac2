      var tu=11;
      tmpo=setInterval(mer,1000);
function tt(){
    setTimeout(cur,2000);
}
function cur(){
    tmpo;
}
function mer(){
    tu=tu-1;
    document.getElementById('con').innerHTML=(tu);
    if (tu==0) {
        clearInterval(tmpo);
        document.getElementById('con').innerHTML=("FIN :)");
        document.getElementById('con').style.background="#E10404";

    }
}