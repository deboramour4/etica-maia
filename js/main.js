var isPaused = false

if ($("#index").length) {
  index()
}

$(document).ready(function() {
  // Toggle fullscreen
    $('#myModal').modal('show')
    $("#openFullscreen").click(function () {
      openFullscreen()
      playMayaAudio()
      $('#myModal').modal('hide')
    })

    $(".dismiss-fullscreen").click(function () {
      playMayaAudio()
    })
});

 function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { 
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }

function toggleSoundSetup() {
    if (isPaused) {
      $("#audio").addClass("mute")
    } else {
      $("#audio").addClass("sound")
    }

    // Toggle sound
    $("#audio").click(function () {
      $(this).toggleClass("sound")
      $(this).toggleClass("mute")
      console.log(isPaused)

      if (isPaused) {
        playMayaAudio()
        isPaused = false
      } else {
        pauseMayaAudio()
        isPaused = true
      }
    })
  }
function playMayaAudio() {
  document.getElementById("audio-maya").volume = 0.005;
  document.getElementById("audio-maya").play()
}
function pauseMayaAudio() {
  document.getElementById("audio-maya").volume = 0.005;
  document.getElementById("audio-maya").pause()
}

// index =================================
function index() {
    toggleSoundSetup()
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
// conclusao =================================
function conclusao() {
    $("button.back").click(function () {
      updateSectionAJAX("index")
    })

    toggleSoundSetup()
  }
// bibliografia =================================
function bibliografia() {
    $("button.back").click(function () {
      updateSectionAJAX("index")
    })

    toggleSoundSetup()
  }
// pensadores =================================
function pensadores() {
    $("button.back").click(function () {
      updateSectionAJAX("index")
    })

    toggleSoundSetup()
  }
// queda =================================
function queda() {
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