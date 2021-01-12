


var eka=document.getElementById('eka');
var deka=document.getElementById('customer');
var thuna=document.getElementById('Order');
var hathra=document.getElementById('thuna');


var dt=document.getElementById('n1');
var ct=document.getElementById('n2');
var it=document.getElementById('n3');
var ot=document.getElementById('n4');



dt.addEventListener('click',function(){


    dt.className="nav-item active";
    ct.className="nav-item";
    it.className="nav-item";
    ot.className="nav-item";

    eka.style.display='block';
    deka.style.display='none';
    thuna.style.display='none';
    hathra.style.display='none';
});

ct.addEventListener('click',function(){


    dt.className="nav-item";
    ct.className="nav-item active";
    it.className="nav-item";
    ot.className="nav-item";

    eka.style.display='none';
    deka.style.display='block';
    thuna.style.display='none';
    hathra.style.display='none';
});

it.addEventListener('click',function(){


    dt.className="nav-item";
    ct.className="nav-item";
    it.className="nav-item active";
    ot.className="nav-item";

    eka.style.display='none';
    deka.style.display='none';
    thuna.style.display='block';
    hathra.style.display='none';
});

ot.addEventListener('click',function(){


    dt.className="nav-item";
    ct.className="nav-item";
    it.className="nav-item";
    ot.className="nav-item active";

    eka.style.display='none';
    deka.style.display='none';
    thuna.style.display='none';
    hathra.style.display='block';
});
