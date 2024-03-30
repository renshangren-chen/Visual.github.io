show3();
function show() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("divDemo").style.display = "block";
};
function show1() {
    document.getElementById("div1").style.display = "block";
    document.getElementById("div1-1").style.display = "block";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div2-1").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div3-1").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div4-1").style.display = "none";
    document.getElementById("divDemo").style.display = "none";
};
function show2() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div1-1").style.display = "none";
    document.getElementById("div2").style.display = "block";
    document.getElementById("div2-1").style.display = "block";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div3-1").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div4-1").style.display = "none";
    document.getElementById("divDemo").style.display = "none";
};
function show3() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div1-1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div2-1").style.display = "none";
    document.getElementById("div3").style.display = "block";
    document.getElementById("div3-1").style.display = "block";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div4-1").style.display = "none";
    document.getElementById("divDemo").style.display = "none";
};
function show4() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div1-1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div2-1").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div3-1").style.display = "none";
    document.getElementById("div4").style.display = "block";
    document.getElementById("div4-1").style.display = "block";
    document.getElementById("divDemo").style.display = "none";
};


zuo1();
function zuo1() {
    document.getElementById("cdrf1").style.display = "none";
    document.getElementById("cdrf2").style.display = "block";
    document.getElementById("cdrf3").style.display = "none";
    document.getElementById("cdrf4").style.display = "none";
};

function zuo2() {
    document.getElementById("cdrf2").style.display = "none";
    document.getElementById("cdrf1").style.display = "block";
    document.getElementById("cdrf3").style.display = "none";
    document.getElementById("cdrf4").style.display = "none";
};
function zuo3() {
    document.getElementById("cdrf2").style.display = "none";
    document.getElementById("cdrf3").style.display = "block";
    document.getElementById("cdrf1").style.display = "none";
    document.getElementById("cdrf4").style.display = "none";
};

function zuo4() {
    document.getElementById("cdrf2").style.display = "none";
    document.getElementById("cdrf4").style.display = "block";
    document.getElementById("cdrf1").style.display = "none";
    document.getElementById("cdrf3").style.display = "none";
};



// ToSingle1();
ToSingle1();
function ToSingle1() {
    // alert(1)
    document.getElementById("back1").style.display = "block";
    document.getElementById("back2").style.display = "none";//2
    document.getElementById("back3").style.display = "none";
    document.getElementById("back4").style.display = "none";
};

function ToSingle2() {
    // alert(2)
    document.getElementById("back2").style.display = "block";
    document.getElementById("back1").style.display = "none";//1
    document.getElementById("back3").style.display = "none";
    document.getElementById("back4").style.display = "none";
};
function ToSingle3() {
    document.getElementById("back2").style.display = "none";
    document.getElementById("back3").style.display = "block";//3
    document.getElementById("back1").style.display = "none";
    document.getElementById("back4").style.display = "none";
};

function ToSingle4() {
    document.getElementById("back2").style.display = "none";
    document.getElementById("back4").style.display = "block";//4
    document.getElementById("back1").style.display = "none";
    document.getElementById("back3").style.display = "none";
};
