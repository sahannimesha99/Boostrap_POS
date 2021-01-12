
var cuscount = $('#custbbody').last().children().children().first().text();
var itemcount = $('#itemtbbody').text();
var ordercount = $('#ordertbbody').text();

    $('#cusaddbtn').click(function () {
    var cusid = $('#formGroupExampleInput1').val();
    var cusname = $('#formGroupExampleInput2').val();
    var cusaddress = $('#formGroupExampleInput3').val();
    var cusnumber = $('#formGroupExampleInput4').val();

    $('#custable').append('<tr><th scope="row">' + ++cuscount + '</th><td>' + cusid + '</td><td>' + cusname + '</td><td>' + cusaddress + '</td><td>' + cusnumber + '</td> </tr>');

    $('#custbbody tr').last().click(function () {

        var id = $($(this).children().get(1)).text();
        var name = $($(this).children().get(2)).text();
        var address = $($(this).children().get(3)).text();
        var number = $($(this).children().get(4)).text();

        console.log(id, name, address, number);

        $('#cusid').val(id);
        $('#cusname').val(name);
        $('#cusaddress').val(address);
        $('#cusnumber').val(number);

    });
});
$('#itemaddbtn').click(function () {
    var itemid = $('#itemcode').val();
    var itemname = $('#itemname').val();
    var itemqty = $('#buyprice').val();
    var itemprice = $('#sellprice').val();
    var itemprice = $('#qty').val();

    $('#itemtable').append('<tr><th scope="row">' + ++itemcount + '</th><td>' + itemid + '</td><td>' + itemname + '</td><td>' + itemqty + '</td><td>' + itemprice + '</td> </tr>');

    $('#itemtbbody tr').last().click(function () {

        var setitemid = $($(this).children().get(1)).text();
        var setitemname = $($(this).children().get(2)).text();
        var setitemqty = $($(this).children().get(3)).text();
        var setitemprice = $($(this).children().get(4)).text();

        console.log(setitemid, setitemname, setitemqty, setitemprice);

        $('#txtitemid').val(setitemid);
        $('#txtitemname').val(setitemname);
        $('#txtitemqty').val(setitemqty);
        $('#txtitemprice').val(setitemprice);

    });
});



$('#orderaddbtn').click(function () {

    var orderid = $('#txtorderid').val();
    var orderCustname = $('#txtordercusname').val();
    var Orderitemid = $('#txtorderitemid').val();
    var orderqty = $('#txtordertqy').val();
    var orderunitprice = $('#txtorderunitprice').val();
    var orderdate = $('#orderdate').val();
    var total = $('#total').val();

    $('#ordertbbody').append('<tr><th scope="row">' + ++ordercount + '</th><td>' + orderid + '</td><td>' + orderCustname + '</td><td>' + Orderitemid + '</td><td>' + orderqty + '</td><td>' + orderunitprice + '</td><td>' + orderdate + '</td><td>' + total + '</td></tr>');

    $('#ordertbbody tr').last().click(function () {
        var orderrow =$(this).children();
        var setorderid = $($(this).children().get(1)).text();
        var setordercusname = $($(this).children().get(2)).text();
        var setOrderitemid = $($(this).children().get(3)).text();
        var setorderqty = $($(this).children().get(4)).text();
        var setorderunitprice = $($(this).children().get(5)).text();
        var setorderdate = $($(this).children().get(6)).text();
        var settotal = $($(this).children().get(7)).text();

        console.log(setorderid, setordercusname, setOrderitemid, setorderqty, setorderunitprice, setorderdate, settotal);

        $('#txtorderid').val(setorderid);
        $('#txtordercusname').val(setordercusname);
        $('#txtorderitemid').val(setOrderitemid);
        $('#txtordertqy').val(setorderqty);
        $('#txtorderunitprice').val(setorderunitprice);
        $('#orderdate').val(setorderdate);
        $('#total').val(settotal);

    });

});
