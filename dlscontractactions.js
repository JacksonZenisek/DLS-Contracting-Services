function refpage(){
    const homebutton = document.getElementById("pgrefbutalt");

    window.location.reload();
}

function showservicesmenu(){
    document.getElementById("slidingmenucontaineralt").style.height = "350px";
}

function hideservicesmenu(){
    document.getElementById("slidingmenucontaineralt").style.height = "0px";
}

function keeptrianglerotated(){
    document.getElementById("triangalt").style.transform = "rotate(180deg)";
}

function returntriangle(){
    document.getElementById("triangalt").style.transform = "rotate(0deg)";
}

window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    let bttbutton = document.getElementById("bttbuttonalt");
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000 ){
        bttbutton.style.display = "block";
    }else{
        bttbutton.style.display = "none";
    }
}

function gotothetopofthehomepage(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

setInterval(frontpagepicturesswitch,1000);

function frontpagepicturesswitch(){

    const time = new Date().getSeconds();

    let a = document.getElementById("frontpagepic1alt");
    let b = document.getElementById("frontpagepic2alt");
    let c = document.getElementById("frontpagepic3alt");
    let d = document.getElementById("frontpagepic4alt");

    if(time < 15){
        a.style.display = "block";
        a.style.transition = "0.5s";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }else if(time > 15, time < 30){
        a.style.display = "none";
        b.style.display = "block";
        b.style.transition = "0.5s";
        c.style.display = "none";
        d.style.display = "none";
    }else if(time > 30, time < 45){
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";
        c.style.transition = "0.5s";
        d.style.display = "none";
    }else{
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "block";
        d.style.transition = "0.5s";
    }

}

function gotoaboutpage(){
    const aboutbutton = document.getElementById("abtbutalt");

    window.location = "dlscontractingservicesabout.html";
}

function gobacktohomepageref(){
    const homepagerefbutton = document.getElementById("pgrefbutalt");

    window.location = "index.html";
}

function gotobacktohomepageother(){
    const homepagerefbutton = document.getElementById("backtohomebutalt");

    window.location = "index.html";
}

function gobacktohomepageservref(){
    const homepagerefbutton = document.getElementById("pgrefservbutalt");

    window.location = "index.html";
}

function gotobacktohomepageservother(){
    const homepagerefbutton = document.getElementById("backtohomebutalt");

    window.location = "index.html";
}

function gotoroofingpage() {
  window.location.href = "dlscontractingservicesservices.html#roofingmaincontaineralt";
}

function gotofencingpage() {
  window.location.href = "dlscontractingservicesservices.html#fencingmaincontaineralt";
}

function gotoconcretepage() {
  window.location.href = "dlscontractingservicesservices.html#concretemaincontaineralt";
}

function gotopaintingpage() {
  window.location.href = "dlscontractingservicesservices.html#paintingmaincontaineralt";
}

function gotosidingpage() {
  window.location.href = "dlscontractingservicesservices.html#sidingmaincontaineralt";
}

function gotomworkpage() {
  window.location.href = "dlscontractingservicesservices.html#mworkmaincontaineralt";
}

function gotombuildingspage() {
  window.location.href = "dlscontractingservicesservices.html#mbuildingsmaincontaineralt";
}

function gotogallerypage(){
    window.location = "dlscontractingservicesgallery.html";
}

function gotoservices(){
    window.location = "dlscontractingservicesservices.html"
}

function showmobilemenuhomepg(){

    let a = document.getElementById("mobileselectiondropdownmenucontaineralt");
    let b = document.getElementById("mobiledropdowniconiconcontaineralt");

    if(a.style.height === "0px"){
        a.style.height = "600px";
        b.style.transform = "rotate(180deg)";
    }else{
        a.style.height = "0px";
        b.style.transform = "rotate(0deg)";
    }
}

function gotocontactusform(){
    window.location.href = "index.html#cuscontformalt";
}
