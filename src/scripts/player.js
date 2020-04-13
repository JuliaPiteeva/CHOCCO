////////////////Секция с плеером////////////////////////////////////////////////////////////////////////////////

var vid = document.getElementById("videoID");

vid.oncanplay = function () {
  //видео готово к воспроизведению
  const playerStartBtn = document.querySelector(".player__start");
  const playerContainer = document.querySelector(".player");
  const splashScreen = document.querySelector(".player__splash"); //select screen saver

  /////////////////////////////////////////Запуск/////////////////////////////////////////////////////////////
  playerStartBtn.addEventListener("click", function (event) {
    event.preventDefault();
    playerContainer.classList.contains("paused") ? vid.pause() : vid.play();
  });

  splashScreen.addEventListener("click", function (event) {
    //handle the click
    vid.play();
  });

  //////////////////////////////перемещаем ползунок при воспроизведении, опрашивая видео каждую секунду//////////
  const playbackBtn = document.getElementById("playbackButtonId");

  var interval = setInterval(() => {
    const durationSec = vid.duration;
    const currentTimeSec = vid.currentTime;
    const curTimePer = countPercent(currentTimeSec, durationSec);

    moveBtn(playbackBtn, curTimePer);
    
  }, 1000);


  ///////////////////////////передвигаем ползунок и перематываем видео/////////////////////////////////////////
  const playerPlaybackContainer = document.querySelector(".player__playback");

  playerPlaybackContainer.addEventListener("click", function (e) {
    const bar = e.target; //catch event on container
    const barWidth = parseInt(getComputedStyle(bar).width); //get width
    const clickedPosition = e.layerX; //save click point
    const duration = vid.duration;

    const newBtnPositionPer = countPercent(clickedPosition, barWidth);
    moveBtn(playbackBtn, newBtnPositionPer); //change position

    vid.currentTime = countLevelPositionSec(duration, newBtnPositionPer); // rewind video
  });

  ////////////////////////////Управление громкостью//////////////////////////////////
  const playerVolumeContainer = document.querySelector(".player__volume-level");
  const playerVolumeBtn = document.querySelector(".player__volume-btn");
  const volume = 0.5; //Значение по умолчанию:	1.0 https://www.w3schools.com/tags/av_prop_volume.asp

  /////////////устанавливаем стартовое значение
  playerVolumeBtn.style.left = volume * 100 + "%"; //установим громкость

  ////////////обрабатываем клики по шкале
  playerVolumeContainer.addEventListener("click", function (e) {
    const barVolume = e.target;
    const barVolumeWidth = parseInt(getComputedStyle(barVolume).width); //get width
    const clickedPosition = e.layerX; //save click point
    const newVolumeBtnPositionPer = countPercent(
      clickedPosition,
      barVolumeWidth
    ); //conversion

    moveBtn(playerVolumeBtn, newVolumeBtnPositionPer); //move btn

    vid.volume = countLevelPositionSec(volume, newVolumeBtnPositionPer); // rewind volume
  });

  //////////////////////////////////////////выключить звук///////////////////////////////////////////////////////
  const playerVolumeIcon = document.querySelector(".player__volume-icon");

  playerVolumeIcon.addEventListener("click", function (e) {
    if (!playerVolumeIcon.classList.contains("silent")) {
      vid.volume = 0;
      playerVolumeIcon.classList.add("silent");
      moveBtn(playerVolumeBtn, vid.volume);
    } else {
      vid.volume = 0.5;
      let val = vid.volume * 100;
      moveBtn(playerVolumeBtn, val);
      playerVolumeIcon.classList.remove("silent");
    }
  });

  ///////////Count Function/////////////////////////////////////////////////////////////////////////////////////////
  const moveBtn = function (btn, value) {
    btn.style.left = value + "%";
  };
  const countPercent = function (clickedPosition, blockWidth) {
    return (clickedPosition / blockWidth) * 100;
  };
  const countLevelPositionSec = function (generalValue, percentValue) {
    return (generalValue / 100) * percentValue;
  };

  ///////////////////////Cмену классов - централизовано //////////////////////////////////////////////////////////////////
  vid.onplay = function () {
    playerContainer.classList.add("active");
    playerContainer.classList.add("paused");
  };

  vid.onpause = function () {
    playerContainer.classList.remove("paused");
    playerContainer.classList.remove("active");
  };
};
