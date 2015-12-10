/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function ($) {
    $(window).resize(function () {
        if ($(window).width() <= 800) {
            $("#text-caption").css({'position': 'absolute',
                'left': '15%',
                'right': '15%',
                'bottom': '200px'
            });
            $(".carousel-indicators").css({'position': 'absolute',
                'bottom': '100px'
            });
            $("#signin").css({
                'border': 'medium none'
            });
            $("#salida").hide();
            $("#llegada").hide();
            $("#lupa").hide();
            $("#sel3").hide();
            $("#lista1").hide();
            $("#lista2").hide();
            $("#lista3").hide();
        }
        if ($(window).width() > 800) {
            $("#salida").show();
            $("#llegada").show();
            $("#sel3").show();
            $("#lupa").show();

            setTimeout('document.location.reload()', 10);
        }

        if ($(window).width() <= 768) {

            $("#shearh").css({
                'margin-top': '5px',
                'width': '500px'
            });
            $("#lupa").show();

            $("#lupa").css({
                'margin-top': '-136px',
                'margin-left': '502px'
            });


        }

        if ($(window).width() <= 680) {

            $("#shearh").css({
                'margin-top': '5px',
                'width': '403px'
            });
            $("#lupa").show();

            $("#lupa").css({
                'margin-top': '-138px',
                'margin-left': '406px'
            });
        }

        if ($(window).width() <= 400) {

            $("#shearh").css({
                'margin-top': '5px',
                'width': '218px'
            });
            $("#lupa").show();
        }

    });
});