$(document).ready(function(){
    //puntos de vida y nivel
    
    var nivel = 0;
    var niveles = 0;
    var vida = 5;
    var coint = 0;

    //asignacion de vida y nivel
    
    

   $('#contenedor').slideDown(300, function () {
        $('#contenedor').css({
            display:'flex'
        });
        //titulo
        $('#t').show();
        //nivel
        $('#contenedor_nivel').show();
        //vida
        $('#contenedor_vida').show();
    });
    $('#btn_jugar').on('click', function () {
        sonidoSiguienteNivel();
        $('#btn_ayuda').fadeOut(300, function () {
            $('#btn_jugar').fadeOut(300, function () {
                $('#t').fadeOut(300, function () {
                    $('#nivel1').fadeIn(2000, function () {
                        $('#nivel1').fadeOut(1000, function () {
                            $('#n1-0').slideDown(300, function () {
                                nivel++
                                muestra();
                            });
                        });
                    });
                });
                    
            });
        });
        
    });
    $('#btn_ayuda');
    //============================= NIVELES =============================
    //nivel1
    $('#nivel1').hide();
        //niveles del nivel1
        $('#n1-0').hide();
        //opciones
            $('#opc_1_000').on('click', pulsarFalso);
            $('#opc_1_001').on('click', function () {
                sonidoCheck()
                $('#n1-0').slideUp(300, function () {
                    $('#n1-1').slideDown(1000);
                    niveles++;
                    muestra();
                })
            });
            $('#opc_1_002').on('click', pulsarFalso);
            $('#opc_1_003').on('click', pulsarFalso);

        $('#n1-1').hide();
        //opciones
            $('#opc_1_010').on('click', pulsarFalso);
            $('#opc_1_011').on('click', function () {
                sonidoCheck()
                $('#n1-1').slideUp(300, function () {
                    $('#n1-2').slideDown(1000);
                    niveles++;
                    muestra();
                })
            });
            $('#opc_1_012').on('click', pulsarFalso);
            $('#opc_1_013').on('click', pulsarFalso);

        $('#n1-2').hide();
        //opciones
            $('#opc_1_020').on('click', function () {
                sonidoCheck()
                $('#n1-2').slideUp(300, function () {
                    $('#n1-3').slideDown(1000);
                    niveles++;
                    muestra();
                });
            });
            $('#opc_1_021').on('click', pulsarFalso);
            $('#opc_1_022').on('click', pulsarFalso);
            $('#opc_1_023').on('click', pulsarFalso);

        $('#n1-3').hide();
        //opciones
            $('#opc_1_030').on('click', pulsarFalso);
            $('#opc_1_031').on('click', pulsarFalso);
            $('#opc_1_032').on('click', pulsarFalso);
            $('#opc_1_033').on('click', function () {
                sonidoCheck()
                $('#n1-3').slideUp(300, function () {
                    $('#n1-4').slideDown(1000);
                    niveles++;
                    muestra();
                })
            });

        $('#n1-4').hide();
        //opciones
            $('#opc_1_040').on('click', pulsarFalso);
            $('#opc_1_041').on('click', pulsarFalso);
            $('#opc_1_042').on('click', pulsarFalso);
            $('#opc_1_043').on('click', function () {
                sonidoCheck()
                $('#n1-4').slideUp(300, function () {
                    $('#n1-5').slideDown(1000);
                    niveles++;
                    muestra();
                })
            });
        $('#n1-5').hide();
        //opciones
            $('#opc_1_050').on('click', pulsarFalso);
            $('#opc_1_051').on('click', pulsarFalso);
            $('#opc_1_052').on('click', function () {
                sonidoCheck()
                $('#n1-5').slideUp(300, function () {
                    $('#n1-6').slideDown(1000);
                    niveles++;
                    muestra();
                })
            });
            $('#opc_1_053').on('click', pulsarFalso);
        $('#n1-6').hide();
        //opciones
            $('#opc_1_060').on('click', function () {
                sonidoCheck()
                $('#n1-6').slideUp(300, function () {
                    $('#n1-7').slideDown(1000);
                    niveles++;
                    muestra();
                })
            });
            $('#opc_1_061').on('click', pulsarFalso);
            $('#opc_1_062').on('click', pulsarFalso);
            $('#opc_1_063').on('click', pulsarFalso);
        $('#n1-7').hide();
        //opciones
            $('#opc_1_070').on('click', pulsarFalso);
            $('#opc_1_071').on('click', pulsarFalso);
            $('#opc_1_072').on('click', function () {
                sonidoCheck()
                $('#n1-7').slideUp(300, function () {
                    $('#n1-8').slideDown(1000);
                    niveles++;
                    muestra();
                })
            });
            $('#opc_1_073').on('click', pulsarFalso);
        $('#n1-8').hide();
        //opciones
            $('#opc_1_080').on('click', pulsarFalso);
            $('#opc_1_081').on('click', pulsarFalso);
            $('#opc_1_082').on('click', pulsarFalso);
            $('#opc_1_083').on('click', function () {
                sonidoCheck()
                $('#n1-8').slideUp(300, function () {
                    $('#n1-9').slideDown(1000);
                    niveles++;
                    muestra();
                })
            });
        $('#n1-9').hide();
        //opciones
            $('#opc_1_090').on('click', function () {
                sonidoSiguienteNivel();
                $('#n1-9').slideUp(300, function () {
                    $('#nivel2').fadeIn(2000);
                    niveles = 0;
                    nivel++;
                    muestra();
                })
            });
            $('#opc_1_091').on('click', pulsarFalso);
            $('#opc_1_092').on('click', pulsarFalso);
            $('#opc_1_093').on('click', pulsarFalso);
    //nivel2
    $('#nivel2').hide();
        //niveles del nivel2
        $('#n2-0').hide();
        //opciones
            $('#opc_2_000').on('click', function () { });
            $('#opc_2_001').on('click', function () { });
            $('#opc_2_002').on('click', function () { });
            $('#opc_2_003').on('click', function () { });
        $('#n2-1').hide();
        //opciones
            $('#opc_2_010').on('click', function () { });
            $('#opc_2_011').on('click', function () { });
            $('#opc_2_012').on('click', function () { });
            $('#opc_2_013').on('click', function () { });
        $('#n2-2').hide();
        //opciones
            $('#opc_2_020').on('click', function () { });
            $('#opc_2_021').on('click', function () { });
            $('#opc_2_022').on('click', function () { });
            $('#opc_2_023').on('click', function () { });
        $('#n2-3').hide();
        //opciones
            $('#opc_2_030').on('click', function () { });
            $('#opc_2_031').on('click', function () { });
            $('#opc_2_032').on('click', function () { });
            $('#opc_2_033').on('click', function () { });
        $('#n2-4').hide();
        //opciones
            $('#opc_2_040').on('click', function () { });
            $('#opc_2_041').on('click', function () { });
            $('#opc_2_042').on('click', function () { });
            $('#opc_2_043').on('click', function () { });
        $('#n2-5').hide();
        //opciones
            $('#opc_2_050').on('click', function () { });
            $('#opc_2_051').on('click', function () { });
            $('#opc_2_052').on('click', function () { });
            $('#opc_2_053').on('click', function () { });
        $('#n2-6').hide();
        //opciones
            $('#opc_2_060').on('click', function () { });
            $('#opc_2_061').on('click', function () { });
            $('#opc_2_062').on('click', function () { });
            $('#opc_2_063').on('click', function () { });
        $('#n2-7').hide();
        //opciones
            $('#opc_2_070').on('click', function () { });
            $('#opc_2_071').on('click', function () { });
            $('#opc_2_072').on('click', function () { });
            $('#opc_2_073').on('click', function () { });
        $('#n2-8').hide();
        //opciones
            $('#opc_2_080').on('click', function () { });
            $('#opc_2_081').on('click', function () { });
            $('#opc_2_082').on('click', function () { });
            $('#opc_2_083').on('click', function () { });
        $('#n2-9').hide();
        //opciones
            $('#opc_2_090').on('click', function () { });
            $('#opc_2_090').on('click', function () { });
            $('#opc_2_092').on('click', function () { });
            $('#opc_2_093').on('click', function () { });
    //nivel3
    $('#nivel3').hide();
        //niveles del nivel3
        $('#n3-0').hide();
        //opciones
            $('#opc_3_000').on('click', function () { });
            $('#opc_3_001').on('click', function () { });
            $('#opc_3_002').on('click', function () { });
            $('#opc_3_003').on('click', function () { });
        $('#n3-1').hide();
        //opciones
            $('#opc_3_010').on('click', function () { });
            $('#opc_3_011').on('click', function () { });
            $('#opc_3_012').on('click', function () { });
            $('#opc_3_013').on('click', function () { });
        $('#n3-2').hide();
        //opciones
            $('#opc_3_020').on('click', function () { });
            $('#opc_3_021').on('click', function () { });
            $('#opc_3_022').on('click', function () { });
            $('#opc_3_023').on('click', function () { });
        $('#n3-3').hide();
        //opciones
            $('#opc_3_030').on('click', function () { });
            $('#opc_3_031').on('click', function () { });
            $('#opc_3_032').on('click', function () { });
            $('#opc_3_033').on('click', function () { });
        $('#n3-4').hide();
        //opciones
            $('#opc_3_040').on('click', function () { });
            $('#opc_3_041').on('click', function () { });
            $('#opc_3_042').on('click', function () { });
            $('#opc_3_043').on('click', function () { });
        $('#n3-5').hide();
        //opciones
            $('#opc_3_050').on('click', function () { });
            $('#opc_3_051').on('click', function () { });
            $('#opc_3_052').on('click', function () { });
            $('#opc_3_053').on('click', function () { });
        $('#n3-6').hide();
        //opciones
            $('#opc_3_060').on('click', function () { });
            $('#opc_3_061').on('click', function () { });
            $('#opc_3_062').on('click', function () { });
            $('#opc_3_063').on('click', function () { });
        $('#n3-7').hide();
        //opciones
            $('#opc_3_070').on('click', function () { });
            $('#opc_3_071').on('click', function () { });
            $('#opc_3_072').on('click', function () { });
            $('#opc_3_073').on('click', function () { });
        $('#n3-8').hide();
        //opciones
            $('#opc_3_080').on('click', function () { });
            $('#opc_3_081').on('click', function () { });
            $('#opc_3_082').on('click', function () { });
            $('#opc_3_083').on('click', function () { });
        $('#n3-9').hide();
        //opciones
            $('#opc_3_090').on('click', function () { });
            $('#opc_3_090').on('click', function () { });
            $('#opc_3_092').on('click', function () { });
            $('#opc_3_093').on('click', function () { });
    //nivel4
    $('#nivel4').hide();
        //niveles del nivel4
        $('#n4-0').hide();
        //opciones
            $('#opc_4_000').on('click', function () { });
            $('#opc_4_001').on('click', function () { });
            $('#opc_4_002').on('click', function () { });
            $('#opc_4_003').on('click', function () { });
        $('#n4-1').hide();
        //opciones
            $('#opc_4_010').on('click', function () { });
            $('#opc_4_011').on('click', function () { });
            $('#opc_4_012').on('click', function () { });
            $('#opc_4_013').on('click', function () { });
        $('#n4-2').hide();
        //opciones
            $('#opc_4_020').on('click', function () { });
            $('#opc_4_021').on('click', function () { });
            $('#opc_4_022').on('click', function () { });
            $('#opc_4_023').on('click', function () { });
        $('#n4-3').hide();
        //opciones
            $('#opc_4_030').on('click', function () { });
            $('#opc_4_031').on('click', function () { });
            $('#opc_4_032').on('click', function () { });
            $('#opc_4_033').on('click', function () { });
        $('#n4-4').hide();
        //opciones
            $('#opc_4_040').on('click', function () { });
            $('#opc_4_041').on('click', function () { });
            $('#opc_4_042').on('click', function () { });
            $('#opc_4_043').on('click', function () { });
        $('#n4-5').hide();
        //opciones
            $('#opc_4_050').on('click', function () { });
            $('#opc_4_051').on('click', function () { });
            $('#opc_4_052').on('click', function () { });
            $('#opc_4_053').on('click', function () { });
        $('#n4-6').hide();
        //opciones
            $('#opc_4_060').on('click', function () { });
            $('#opc_4_061').on('click', function () { });
            $('#opc_4_062').on('click', function () { });
            $('#opc_4_063').on('click', function () { });
        $('#n4-7').hide();
        //opciones
            $('#opc_4_070').on('click', function () { });
            $('#opc_4_071').on('click', function () { });
            $('#opc_4_072').on('click', function () { });
            $('#opc_4_073').on('click', function () { });
        $('#n4-8').hide();
        //opciones
            $('#opc_4_080').on('click', function () { });
            $('#opc_4_081').on('click', function () { });
            $('#opc_4_082').on('click', function () { });
            $('#opc_4_083').on('click', function () { });
        $('#n4-9').hide();
        //opciones
            $('#opc_4_090').on('click', function () { });
            $('#opc_4_090').on('click', function () { });
            $('#opc_4_092').on('click', function () { });
            $('#opc_4_093').on('click', function () { });
    //nivel5
    $('#nivel5').hide();
        //niveles del nivel5
        $('#n5-0').hide();
        //opciones
            $('#opc_5_000').on('click', function () { });
            $('#opc_5_001').on('click', function () { });
            $('#opc_5_002').on('click', function () { });
            $('#opc_5_003').on('click', function () { });
        $('#n5-1').hide();
        //opciones
            $('#opc_5_010').on('click', function () { });
            $('#opc_5_011').on('click', function () { });
            $('#opc_5_012').on('click', function () { });
            $('#opc_5_013').on('click', function () { });
        $('#n5-2').hide();
        //opciones
            $('#opc_5_020').on('click', function () { });
            $('#opc_5_021').on('click', function () { });
            $('#opc_5_022').on('click', function () { });
            $('#opc_5_023').on('click', function () { });
        $('#n5-3').hide();
        //opciones
            $('#opc_5_030').on('click', function () { });
            $('#opc_5_031').on('click', function () { });
            $('#opc_5_032').on('click', function () { });
            $('#opc_5_033').on('click', function () { });
        $('#n5-4').hide();
        //opciones
            $('#opc_5_040').on('click', function () { });
            $('#opc_5_041').on('click', function () { });
            $('#opc_5_042').on('click', function () { });
            $('#opc_5_043').on('click', function () { });
        $('#n5-5').hide();
        //opciones
            $('#opc_5_050').on('click', function () { });
            $('#opc_5_051').on('click', function () { });
            $('#opc_5_052').on('click', function () { });
            $('#opc_5_053').on('click', function () { });
        $('#n5-6').hide();
        //opciones
            $('#opc_5_060').on('click', function () { });
            $('#opc_5_061').on('click', function () { });
            $('#opc_5_062').on('click', function () { });
            $('#opc_5_063').on('click', function () { });
        $('#n5-7').hide();
        //opciones
            $('#opc_5_070').on('click', function () { });
            $('#opc_5_071').on('click', function () { });
            $('#opc_5_072').on('click', function () { });
            $('#opc_5_073').on('click', function () { });
        $('#n5-8').hide();
        //opciones
            $('#opc_5_080').on('click', function () { });
            $('#opc_5_081').on('click', function () { });
            $('#opc_5_082').on('click', function () { });
            $('#opc_5_083').on('click', function () { });
        $('#n5-9').hide();
        //opciones
            $('#opc_5_090').on('click', function () { });
            $('#opc_5_090').on('click', function () { });
            $('#opc_5_092').on('click', function () { });
            $('#opc_5_093').on('click', function () { });
    //nivel6
    $('#nivel6').hide();
        //niveles del nivel6
        $('#n6-0').hide();
        //opciones
            $('#opc_6_000').on('click', function () { });
            $('#opc_6_001').on('click', function () { });
            $('#opc_6_002').on('click', function () { });
            $('#opc_6_003').on('click', function () { });
        $('#n6-1').hide();
        //opciones
            $('#opc_6_010').on('click', function () { });
            $('#opc_6_011').on('click', function () { });
            $('#opc_6_012').on('click', function () { });
            $('#opc_6_013').on('click', function () { });
        $('#n6-2').hide();
        //opciones
            $('#opc_6_020').on('click', function () { });
            $('#opc_6_021').on('click', function () { });
            $('#opc_6_022').on('click', function () { });
            $('#opc_6_023').on('click', function () { });
        $('#n6-3').hide();
        //opciones
            $('#opc_6_030').on('click', function () { });
            $('#opc_6_031').on('click', function () { });
            $('#opc_6_032').on('click', function () { });
            $('#opc_6_033').on('click', function () { });
        $('#n6-4').hide();
        //opciones
            $('#opc_6_040').on('click', function () { });
            $('#opc_6_041').on('click', function () { });
            $('#opc_6_042').on('click', function () { });
            $('#opc_6_043').on('click', function () { });
        $('#n6-5').hide();
        //opciones
            $('#opc_6_050').on('click', function () { });
            $('#opc_6_051').on('click', function () { });
            $('#opc_6_052').on('click', function () { });
            $('#opc_6_053').on('click', function () { });
        $('#n6-6').hide();
        //opciones
            $('#opc_6_060').on('click', function () { });
            $('#opc_6_061').on('click', function () { });
            $('#opc_6_062').on('click', function () { });
            $('#opc_6_063').on('click', function () { });
        $('#n6-7').hide();
        //opciones
            $('#opc_6_070').on('click', function () { });
            $('#opc_6_071').on('click', function () { });
            $('#opc_6_072').on('click', function () { });
            $('#opc_6_073').on('click', function () { });
        $('#n6-8').hide();
        //opciones
            $('#opc_6_080').on('click', function () { });
            $('#opc_6_081').on('click', function () { });
            $('#opc_6_082').on('click', function () { });
            $('#opc_6_083').on('click', function () { });
        $('#n6-9').hide();
        //opciones
            $('#opc_6_090').on('click', function () { });
            $('#opc_6_090').on('click', function () { });
            $('#opc_6_092').on('click', function () { });
            $('#opc_6_093').on('click', function () { });
    //nivel7
    $('#nivel7').hide();
        //niveles del nivel7
        $('#n7-0').hide();
        //opciones
            $('#opc_7_000').on('click', function () { });
            $('#opc_7_001').on('click', function () { });
            $('#opc_7_002').on('click', function () { });
            $('#opc_7_003').on('click', function () { });
        $('#n7-1').hide();
        //opciones
            $('#opc_7_010').on('click', function () { });
            $('#opc_7_011').on('click', function () { });
            $('#opc_7_012').on('click', function () { });
            $('#opc_7_013').on('click', function () { });
        $('#n7-2').hide();
        //opciones
            $('#opc_7_020').on('click', function () { });
            $('#opc_7_021').on('click', function () { });
            $('#opc_7_022').on('click', function () { });
            $('#opc_7_023').on('click', function () { });
        $('#n7-3').hide();
        //opciones
            $('#opc_7_030').on('click', function () { });
            $('#opc_7_031').on('click', function () { });
            $('#opc_7_032').on('click', function () { });
            $('#opc_7_033').on('click', function () { });
        $('#n7-4').hide();
        //opciones
            $('#opc_7_040').on('click', function () { });
            $('#opc_7_041').on('click', function () { });
            $('#opc_7_042').on('click', function () { });
            $('#opc_7_043').on('click', function () { });
        $('#n7-5').hide();
        //opciones
            $('#opc_7_050').on('click', function () { });
            $('#opc_7_051').on('click', function () { });
            $('#opc_7_052').on('click', function () { });
            $('#opc_7_053').on('click', function () { });
        $('#n7-6').hide();
        //opciones
            $('#opc_7_060').on('click', function () { });
            $('#opc_7_061').on('click', function () { });
            $('#opc_7_062').on('click', function () { });
            $('#opc_7_063').on('click', function () { });
        $('#n7-7').hide();
        //opciones
            $('#opc_7_070').on('click', function () { });
            $('#opc_7_071').on('click', function () { });
            $('#opc_7_072').on('click', function () { });
            $('#opc_7_073').on('click', function () { });
        $('#n7-8').hide();
        //opciones
            $('#opc_7_080').on('click', function () { });
            $('#opc_7_081').on('click', function () { });
            $('#opc_7_082').on('click', function () { });
            $('#opc_7_083').on('click', function () { });
        $('#n7-9').hide();
        //opciones
            $('#opc_7_090').on('click', function () { });
            $('#opc_7_090').on('click', function () { });
            $('#opc_7_092').on('click', function () { });
            $('#opc_7_093').on('click', function () { });
    //nivel8
    $('#nivel8').hide();
        //niveles del nivel8
        $('#n8-0').hide();
        //opciones
            $('#opc_8_000').on('click', function () { });
            $('#opc_8_001').on('click', function () { });
            $('#opc_8_002').on('click', function () { });
            $('#opc_8_003').on('click', function () { });
        $('#n8-1').hide();
        //opciones
            $('#opc_8_010').on('click', function () { });
            $('#opc_8_011').on('click', function () { });
            $('#opc_8_012').on('click', function () { });
            $('#opc_8_013').on('click', function () { });
        $('#n8-2').hide();
        //opciones
            $('#opc_8_020').on('click', function () { });
            $('#opc_8_021').on('click', function () { });
            $('#opc_8_022').on('click', function () { });
            $('#opc_8_023').on('click', function () { });
        $('#n8-3').hide();
        //opciones
            $('#opc_8_030').on('click', function () { });
            $('#opc_8_031').on('click', function () { });
            $('#opc_8_032').on('click', function () { });
            $('#opc_8_033').on('click', function () { });
        $('#n8-4').hide();
        //opciones
            $('#opc_8_040').on('click', function () { });
            $('#opc_8_041').on('click', function () { });
            $('#opc_8_042').on('click', function () { });
            $('#opc_8_043').on('click', function () { });
        $('#n8-5').hide();
        //opciones
            $('#opc_8_050').on('click', function () { });
            $('#opc_8_051').on('click', function () { });
            $('#opc_8_052').on('click', function () { });
            $('#opc_8_053').on('click', function () { });
        $('#n8-6').hide();
        //opciones
            $('#opc_8_060').on('click', function () { });
            $('#opc_8_061').on('click', function () { });
            $('#opc_8_062').on('click', function () { });
            $('#opc_8_063').on('click', function () { });
        $('#n8-7').hide();
        //opciones
            $('#opc_8_070').on('click', function () { });
            $('#opc_8_071').on('click', function () { });
            $('#opc_8_072').on('click', function () { });
            $('#opc_8_073').on('click', function () { });
        $('#n8-8').hide();
        //opciones
            $('#opc_8_080').on('click', function () { });
            $('#opc_8_081').on('click', function () { });
            $('#opc_8_082').on('click', function () { });
            $('#opc_8_083').on('click', function () { });
        $('#n8-9').hide();
        //opciones
            $('#opc_8_090').on('click', function () { });
            $('#opc_8_090').on('click', function () { });
            $('#opc_8_092').on('click', function () { });
            $('#opc_8_093').on('click', function () { });
    //nivel9
    $('#nivel9').hide();
        //niveles del nivel9
        $('#n9-0').hide();
        $('#n9-1').hide();
        $('#n9-2').hide();
        $('#n9-3').hide();
        $('#n9-4').hide();
        $('#n9-5').hide();
        $('#n9-6').hide();
        $('#n9-7').hide();
        $('#n9-8').hide();
        $('#n9-9').hide();
    //nivel10
    $('#nivel10').hide();
        //niveles del nivel10
        $('#n10-0').hide();
        $('#n10-1').hide();
        $('#n10-2').hide();
        $('#n10-3').hide();
        $('#n10-4').hide();
        $('#n10-5').hide();
        $('#n10-6').hide();
        $('#n10-7').hide();
        $('#n10-8').hide();
        $('#n10-9').hide();
        
        function muestra() {
            $('#p_nivel').text(nivel + ' - ' + niveles);
            $('#p_vida').text(vida);
            if (vida <= 0) {
                vida = 0;
            }
        }
        //BOTONES ERRONEOS
        function sonidoSiguienteNivel() {
            var sonidoCorrecto = new Audio('media/audio/botoncorrecto.wav');
            sonidoCorrecto.play();
        }

        function sonidoCheck() {
            var sonidoBueno = new Audio('media/audio/botonbien.wav')
            sonidoBueno.play();
        }
        function pulsarFalso(){
            var sonidoFalso = new Audio('media/audio/botonerroneo.wav');
            sonidoFalso.play();
            $(this).addClass('falso');
            if (vida > 0) {
                vida--;
            }
            if (vida <= 0) {
                    $('.opcion').removeClass('falso');
                    $('#nivel1').hide(0,function(){
                        $('#n1-0').hide();
                        $('#n1-1').hide();
                        $('#n1-2').hide();
                        $('#n1-3').hide();
                        $('#n1-4').hide();
                        $('#n1-5').hide();
                        $('#n1-6').hide();
                        $('#n1-7').hide();
                        $('#n1-8').hide();
                        $('#n1-9').hide();
                    });
                    $('#nivel2').hide(0,function(){
                        $('#n2-0').hide();
                        $('#n2-1').hide();
                        $('#n2-2').hide();
                        $('#n2-3').hide();
                        $('#n2-4').hide();
                        $('#n2-5').hide();
                        $('#n2-6').hide();
                        $('#n2-7').hide();
                        $('#n2-8').hide();
                        $('#n2-9').hide();
                    });
                    $('#nivel3').hide(0,function(){
                        $('#n3-0').hide();
                        $('#n3-1').hide();
                        $('#n3-2').hide();
                        $('#n3-3').hide();
                        $('#n3-4').hide();
                        $('#n3-5').hide();
                        $('#n3-6').hide();
                        $('#n3-7').hide();
                        $('#n3-8').hide();
                        $('#n3-9').hide();
                    });
                    $('#nivel4').hide(0,function(){
                        $('#n4-0').hide();
                        $('#n4-1').hide();
                        $('#n4-2').hide();
                        $('#n4-3').hide();
                        $('#n4-4').hide();
                        $('#n4-5').hide();
                        $('#n4-6').hide();
                        $('#n4-7').hide();
                        $('#n4-8').hide();
                        $('#n4-9').hide();
                    });
                    $('#nivel5').hide(0,function(){
                        $('#n5-0').hide();
                        $('#n5-1').hide();
                        $('#n5-2').hide();
                        $('#n5-3').hide();
                        $('#n5-4').hide();
                        $('#n5-5').hide();
                        $('#n5-6').hide();
                        $('#n5-7').hide();
                        $('#n5-8').hide();
                        $('#n5-9').hide();
                    });
                    $('#nivel6').hide(0,function(){
                        $('#n6-0').hide();
                        $('#n6-1').hide();
                        $('#n6-2').hide();
                        $('#n6-3').hide();
                        $('#n6-4').hide();
                        $('#n6-5').hide();
                        $('#n6-6').hide();
                        $('#n6-7').hide();
                        $('#n6-8').hide();
                        $('#n6-9').hide();
                    });
                    $('#nivel7').hide(0,function(){
                        $('#n7-0').hide();
                        $('#n7-1').hide();
                        $('#n7-2').hide();
                        $('#n7-3').hide();
                        $('#n7-4').hide();
                        $('#n7-5').hide();
                        $('#n7-6').hide();
                        $('#n7-7').hide();
                        $('#n7-8').hide();
                        $('#n7-9').hide();
                    });
                    $('#nivel8').hide(0,function(){
                        $('#n8-0').hide();
                        $('#n8-1').hide();
                        $('#n8-2').hide();
                        $('#n8-3').hide();
                        $('#n8-4').hide();
                        $('#n8-5').hide();
                        $('#n8-6').hide();
                        $('#n8-7').hide();
                        $('#n8-8').hide();
                        $('#n8-9').hide();
                    });
                    $('#nivel9').hide(300,function(){
                        $('#n9-0').hide();
                        $('#n9-1').hide();
                        $('#n9-2').hide();
                        $('#n9-3').hide();
                        $('#n9-4').hide();
                        $('#n9-5').hide();
                        $('#n9-6').hide();
                        $('#n9-7').hide();
                        $('#n9-8').hide();
                        $('#n9-9').hide();
                        nivel = 0;
                        niveles = 0;
                        $('#p_nivel').text(nivel);
                        $('#contenedor').hide(300, function () {
                            vida = 5;
                            $('#btn_ayuda').fadeIn(300);
                            $('#btn_jugar').fadeIn(300,function(){
                                    $('#contenedor').show(300,function(){
                                        $('#t').show(300);
                                    })
                                })
                        
                            });
                        })
                    
                }
        muestra(); 
     };   
    //CONSTANTES DE LAS TECLAS
    /*
    const arriba    = 38;
    const abajo     = 40;
    const izquierda = 37;
    const derecha   = 39;

    document.addEventListener('keydown', function (tecla) {
        var codigoTecla = tecla.keyCode;
        if(codigoTecla == 38){
            vida++;
            muestra();
        }
    });
    */
});