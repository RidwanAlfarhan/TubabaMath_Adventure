function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rtx4W69K5e":
        Script1();
        break;
      case "65sCUHJEEeZ":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="1.mp3";
audio.load();
audio.play();
audio.volume=0.4;
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.src="1.mp3";
audio.load();
audio.play();
audio.volume=0.4;
}

