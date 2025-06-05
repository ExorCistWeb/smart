 document.addEventListener('DOMContentLoaded', function() {
     const videoBox = document.querySelector('.video_box');
     const video = videoBox.querySelector('.video-player');
     const overlay = videoBox.querySelector('.video-overlay');
     const playButton = overlay.querySelector('.video-play-button');

     // Обработчик клика по кнопке воспроизведения
     playButton.addEventListener('click', function() {
         video.play();
         videoBox.classList.add('playing');
     });

     // Обработчик клика по видео (пауза/воспроизведение)
     video.addEventListener('click', function() {
         if (video.paused) {
             video.play();
             videoBox.classList.add('playing');
         } else {
             video.pause();
             videoBox.classList.remove('playing');
         }
     });

     // Когда видео закончится, показываем оверлей снова
     video.addEventListener('ended', function() {
         videoBox.classList.remove('playing');
     });
 });