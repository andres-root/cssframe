(function() {
  'user strict';
  var frameNumber = 1;
  var iteration = 1;
  var totalFrames = 100;
  var frameExt = '.jpg';
  var frame = document.querySelector('.hrt-animated-video .frame');
  var postframe = document.querySelector('.hrt-animated-video .frame.post');
  var image = frameNumber + frameExt;
  postframe.style.backgroundImage = 'url(img/frames/' + (frameNumber + 2) + frameExt + ')';
  console.log('url(img/frames/' + (frameNumber + 2) + frameExt + ')');
  frame.style.backgroundImage = 'url(img/frames/' + image + ')';

  function animate() {
    if (frameNumber == 48) {
      frameNumber = 0;
      if (iteration < 2) {
				iteration += 1;
      }
    }
    frameNumber += 1
    image = (frameNumber) + frameExt;
    postframe.style.backgroundImage = 'url(img/frames/' + (frameNumber + 1) + frameExt + ')';
    frame.style.backgroundImage = 'url(img/frames/' + image + ')';

  }

  frame.addEventListener('animationiteration', animate, false);
})();
