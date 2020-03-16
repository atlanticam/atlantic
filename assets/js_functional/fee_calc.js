var rate = 1.1104;

function getNum(val) {
    if (isNaN(val)) {
        return 0;
    }
    return parseInt(val);
}

    $.getJSON('https://api.exchangeratesapi.io/latest',function( data ) {
      rate = data.rates.USD;
    });
function copartfee(H4){
    var B4= 50;
    var B5= 100;
    var B6= 200;
    var B7= 300;
    var B8= 350;
    var B9= 400;
    var B10= 450;
    var B11= 500;
    var B12= 550;
    var B13= 600;
    var B14= 700;
    var B15= 800;
    var B16= 900;
    var B17= 1000;
    var B18= 1200;
    var B19= 1300;
    var B20= 1400;
    var B21= 1500;
    var B22= 1600;
    var B23= 1700;
    var B24= 1800;
    var B25= 2000;
    var B26= 2400;
    var B27= 2500;
    var B28= 3000;
    var B29= 3500;
    var B30= 4000;
    var B31= 4500;
    var B32= 5000;
    var B33= 6000;
    var B34= 7500;
    var B35= 10000;
    var B36= 15000;
    var B37= 20000;
    var B38= 25000;
    var B39= 30000;
    var B40= 35000;
    var B41= 10000000;
    var C4= 1;
    var C5= 1;
    var C6= 25;
    var C7= 50;
    var C8= 74;
    var C9= 75;
    var C10= 109;
    var C11= 110;
    var C12= 125;
    var C13= 129;
    var C14= 140;
    var C15= 155;
    var C16= 169;
    var C17= 185;
    var C18= 200;
    var C19= 225;
    var C20= 239;
    var C21= 250;
    var C22= 259;
    var C23= 275;
    var C24= 285;
    var C25= 300;
    var C26= 325;
    var C27= 335;
    var C28= 350;
    var C29= 400;
    var C30= 450;
    var C31= 475;
    var C32= 500;
    var C33= 525;
    var C34= 550;
    var C35= 575;
    var C36= 600;
    var C37= 0.04;
    var C38= 0.04;
    var C39= 0.04;
    var C40= 0.04;
    var C41= 0.04;


    var B51 = 100;
    var B52 = 500;
    var B53 = 1000;
    var B54 = 1500;
    var B55 = 2000;
    var B56 = 4000;
    var B57 = 6000;
    var B58 = 8000;
    var B59 = 10000000;
    var C51 = 0;
    var C52 = 39;
    var C53 = 49;
    var C54 = 69;
    var C55 = 79;
    var C56 = 89;
    var C57 = 99;
    var C58 = 119;
    var C59 = 129;
    var final =  H4<B4?C4:(H4<B5?C5:(H4<B6?C6:(H4<B7?C7:(H4<B8?C8:(H4<B9?C9:(H4<B10?C10:(H4<B11?C11:(H4<B12?C12:(H4<B13?C13:(H4<B14?C14:(H4<B15?C15:(H4<B16?C16:(H4<B17?C17:(H4<B18?C18:(H4<B19?C19:(H4<B20?C20:(H4<B21?C21:(H4<B22?C22:(H4<B23?C23:(H4<B24?C24:(H4<B25?C25:(H4<B26?C26:(H4<B27?C27:(H4<B28?C28:(H4<B29?C29:(H4<B30?C30:(H4<B31?C31:(H4<B32?C32:(H4<B33?C33:(H4<B34?C34:(H4<B35?C35:(H4<B36?C36:(H4<B37?H4*0.04:(H4<B38?H4*0.04:(H4<B39?H4*0.04:(H4<B40?H4*0.04:(H4<B41?H4*0.04:0)))))))))))))))))))))))))))))))))))));
    var other_fee = (H4<B51?C51:(H4<B52?C52:(H4<B53?C53:(H4<B54?C54:(H4<B55?C55:(H4<B56?C56:(H4<B57?C57:(H4<B58?C58:(H4<B59?C59:0)))))))));

    return other_fee+final+59;
}
function iaaifee(H3) {
    return 6000;
}

function rastamojka(gin = 0 ,fob =0 ,perevozka = 0,taretiv =2019,mator = 0) {
    var G1 = gin+fob;
    var G2 = perevozka;
    var J1 = taretiv;
    var J2 = mator;
    var G3 = G1+G2;

    var A1 = 2020;
    var A2 = 2019;
    var A3 = 2018;
    var A4 = 2017;
    var A5 = 2016;
    var A6 = 2015;
    var A7 = 2014;

    var B1 = 0.15;
    var B2 = 0.15;
    var B3 = 0.15;
    var B4 = 0.15;
    var B5 = 0.2;
    var B6 = 0.2;
    var B7 = 0.2;

    var C1 = 0;
    var C2 = 0;
    var C3 = 0;
    var C4 = 0;
    var C5 = 0;
    var C6 = 0.02;
    var C7 = 0.02;


    var A18 = 1000;
    var A19 = 1500;
    var A20 = 1800;
    var A21 = 2300;
    var A22 = 3000;
    var A23 = 1000000;

    var B18 = 0.36;
    var B19 = 0.4;
    var B20 = 0.36;
    var B21 = 0.44;
    var B22 = 0.44;
    var B23 = 0.8;
    // maksaturq invoice
    var G6 = (J1 >= A1 ? B1 : (J1 >= A2 ? B2 : ((J1 >= A3 ? B3 : ((J1 >= A4 ? B4 : ((J1 >= A5 ? B5 : ((J1 >= A6 ? B6 : ((J1 >= A7 ? B7 : B7)))))))))))) * G3;

    // maksaturq AAH
    var G7 = (G3+G6)*0.2;

    // maksaturq Mator
    var J6 = (J1 <= A5 ? J2 * ((J2 <= A18 ? B18 : ((J2 <= A19 ? B19 : ((J2 <= A20 ? B20 : ((J2 <= A21 ? B21 : ((J2 <= A22 ? B22 : B23)))))))))) : 0);

    // bnapahpanutyun
    var G8 = (J1 >= A1 ? C1 : (J1 >= A2 ? C2 : ((J1 >= A3 ? C3 : ((J1 >= A4 ? C4 : ((J1 >= A5 ? C5 : ((J1 >= A6 ? C6 : ((J1 >= A7 ? C7 : 5000)))))))))))) * G3;

    var G11 = G6+G7+G8;

    // verjnakan maksaturq
    var G15 = (G6>=J6?G6:J6);

    // verjanakn AAH
    var G16 = (G3+G15)*0.2;

    // Bnapahpanutyun
    var G17 = (J1 >= A1 ? C1 : (J1 >= A2 ? C2 : ((J1 >= A3 ? C3 : ((J1 >= A4 ? C4 : ((J1 >= A5 ? C5 : ((J1 >= A6 ? C6 : ((J1 >= A7 ? C7 : 5000)))))))))))) * G3;


    var G20 =G15+G16+G17;

    return {
        total:getNum(Math.round(G20)*rate),
        bnapahpanutyun:getNum(Math.round(G17)*rate),
        aah:getNum(Math.round(G16)*rate),
        maksavchar:getNum(Math.round(G15)*rate)
    }

}




/*
*  <p>Աճուրդի վճար՝ <span id="fee"></span></p>
                        <p>Տեղափոխում՝ <span id="texapoxum"></span></p>
                        <p>Մաքսատուրք՝ <span id="maksaturq"></span></p>
                        <p>ԱԱՀ՝	<span id="aah"></span></p>
                        <p>Բնապահպանական հարկ՝	<span id="bnapahpanutyun"></span></p>
                        <p>Ընդհանուր՝ <span id="total"></span></p>
* */

var calculate = function(){
    var gin = parseInt($('#search-price').val());
    var year = parseInt($('#year').val());
    var mator = parseInt($('#engine-volume').val());
    var fees = copartfee(gin);
    if($('#auction_type').val() == 'iaai')
         fees = iaaifee(gin);

    var transfer = parseInt($('#auction_location').val());


    $("#fee").text(fees);
    if( getNum(mator) && getNum(year)){
        var full_info = rastamojka(gin/rate,fees/rate,transfer/rate,year,mator);

        var mijnordavchar = getNum((full_info.total+gin+fees)*0.065);
        $('#maksaturq').text(full_info.maksavchar);
        $('#aah').text(full_info.aah);
        $('#bnapahpanutyun').text(full_info.bnapahpanutyun);
        $('#total_maksaturq').text(full_info.total);
        $('#total').text(full_info.total+gin+fees+mijnordavchar);
        $('#mijnordavchar').text(mijnordavchar);
    }
    $('#texapoxum').text(transfer);


};

$(document).ready(function () {
    $("#calculiator input").on('keyup',calculate);
    $("#calculiator select").on('change',calculate);
});