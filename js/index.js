window.onload = function () {
  init()
}

function init(){
  Bank()
}

var Bank = (function () {
  var sec1 = document.getElementsByClassName('section_1')[0],
      sec1Btn = document.getElementsByClassName('btn')[0],
      sec2 = document.getElementsByClassName('section_2')[0],
      sec2backOff = sec2.getElementsByClassName('backOff')[0],
      sec2Main = sec2.getElementsByClassName('min')[0],
      sec2MainImg = sec2Main.getElementsByTagName('img'),
      sec3 = document.getElementsByClassName('section_3')[0],
      sec3backOff = sec3.getElementsByClassName('backOff')[0],
      sec3Main = sec3.getElementsByClassName('main')[0],
      sec3MainImg = sec3Main.getElementsByTagName('img'),
      sec4 = document.getElementsByClassName('section_4')[0],
      sec4backOff = sec4.getElementsByClassName('backOff')[0];

  function init() {
    bindEvent()
    document.body.addEventListener('touchmove', function (e) {
      e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
    }, {passive: false});
  }

  function bindEvent() {
    sec1Btn.addEventListener('click', sec1Click);
    sec2backOff.addEventListener('click', sec2backOffClick.bind(this, sec1, sec2))
    sec2Main.addEventListener('click', sec2MainClick)
    sec3backOff.addEventListener('click', sec2backOffClick.bind(this, sec2, sec3))
    sec3Main.addEventListener('click', sec3MainClick)
    sec4backOff.addEventListener('click', sec2backOffClick.bind(this, sec3, sec4))
  }

  function sec1Click() {
    sec1.style.display = 'none';
    sec2.style.display = 'block';
  }
  function sec2backOffClick(domBlock, domNone) {
    domBlock.style.display = 'block';
    domNone.style.display = 'none';
  }
  function sec2MainClick(e){
    var e= e || window.event,
        tar = e.target || e.srcEvent,
        indexOF = Array.prototype.indexOf,
        idx = indexOF.call(sec2MainImg, tar);
    sec2MainImg[idx].addEventListener('click',sec2MainImgClick());
  }
  function sec2MainImgClick() {
    sec2.style.display = 'none';
    sec3.style.display = 'block';
  }


  function sec3MainClick(e){
    var e= e || window.event,
        tar = e.target || e.srcEvent,
        indexOF = Array.prototype.indexOf,
        idx = indexOF.call(sec3MainImg, tar);

    sec3MainImg[idx].addEventListener('click',sec3MainImgClick());
  }
  function sec3MainImgClick() {
    sec3.style.display = 'none';
    sec4.style.display = 'block';
  }

  return init()
});