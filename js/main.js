if ($("#index").length) {
  index()
}

$(document).ready(function() {
  var aspectRatioProp = window.innerWidth/window.innerHeight

  /*if (aspectRatioProp >= 1.7){ 
    $("main").css("padding-top", "56.25%")
  } else {
    $("main").css("padding-top", "79.25%")
  }*/

  toggleSoundSetup()
});

function toggleSoundSetup() {
    // Toggle sound
    $(".sound").click(function () {
      $(this).toggleClass("sound")
      $(this).toggleClass("mute")
      console.log("Inserir logica de mutar o som, aqui!")
    })
  }

// index =================================
function index() {
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
    $("button.back").click(function () {
      updateSectionAJAX("index")
    })

    toggleSoundSetup()
  }
// expansao =================================
function expansao() {
    $("button.back").click(function () {
      updateSectionAJAX("index")
    })

    toggleSoundSetup()
  }
// historia =================================
function historia() {
    $("button.back").click(function () {
      updateSectionAJAX("index")
    })

    toggleSoundSetup()
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