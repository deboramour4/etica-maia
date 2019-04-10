if ($("#inicio").length) {
  inicio()
}

$(document).ready(function() {

});

// inicio =================================
function inicio() {
    $("button.costumes").click(function () {
      updateSectionAJAX("costumes")
    })
    $("button.pensadores").click(function () {
      updateSectionAJAX("pensadores")
    })
    $("button.expansao").click(function () {
      updateSectionAJAX("expansao")
    })
    $("button.historia").click(function () {
      updateSectionAJAX("historia")
    })
    $("button.etica").click(function () {
      updateSectionAJAX("etica")
    })
    $("button.queda").click(function () {
      updateSectionAJAX("queda")
    })
    $("button.conclusao").click(function () {
      updateSectionAJAX("conclusao")
    })
    $("button.bibliografia").click(function () {
      updateSectionAJAX("bibliografia")
    })
  }

// costumes =================================
function costumes() {
    $("button.costumes").click(function () {
      updateSectionAJAX("costumes")
    })
    $("button.pensadores").click(function () {
      updateSectionAJAX("pensadores")
    })
    $("button.expansao").click(function () {
      updateSectionAJAX("expansao")
    })
    $("button.historia").click(function () {
      updateSectionAJAX("historia")
    })
    $("button.etica").click(function () {
      updateSectionAJAX("etica")
    })
    $("button.queda").click(function () {
      updateSectionAJAX("queda")
    })
    $("button.conclusao").click(function () {
      updateSectionAJAX("conclusao")
    })
    $("button.bibliografia").click(function () {
      updateSectionAJAX("bibliografia")
    })
  }


 // ajax =================================
  function updateSectionAJAX(name) {
    $.ajaxSetup ({ cache: false });

    var ajax_load = "<img class='centeredX' style='background-color: #FFEFCD; width: 100%;' src='img/loading.gif' alt='Carregando...' />";

    var loadUrl = "views/"+name+".html";

    $("main").html(ajax_load).load(loadUrl, function(){
     $(this).hide().fadeIn('slow');
     
     window[name](arguments)
    });
  }