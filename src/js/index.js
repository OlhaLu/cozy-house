$(document).ready(function() {

  let slideExtraHeight = 80;
  let wrapperPaddingLeft = 50;
  let wrapperPaddingRight = 50;
  let slideItem = 3;
  let speed = 500;
  let slideMargin = 20;
  let sliderWrapper = $('#wrap-sh-slider').width();

  let slideCount = $('.sh-slider ul li').length;
  let slideWidth = (sliderWrapper -  wrapperPaddingLeft - wrapperPaddingRight);
  let slideUlWidth = (slideWidth / slideItem) * slideCount * slideMargin - slideMargin;


  $('.sh-slider ul').css(
    {
      width: slideUlWidth,
      marginLeft: - slideWidth / slideItem
    }
  );
  let slideHeight = $('.sh-slider ul li').height();
  $('.sh-slider ul li').css(
    {
      width: slideWidth / slideItem,
      height: slideHeight,
      marginRight: slideMargin
    }
  );
  $('.sh-slider ul li:last-child').prependTo('.sh-slider ul');

  $('.sh-slider').css(
    {
      width: slideWidth + 2 * slideMargin,
      height: slideHeight,
      paddingTop: slideExtraHeight / 2,
      paddingBottom: slideExtraHeight / 2
    }
  );

  $('.sh-slider ul li:first-child').next().next().animate(
    {
      height:slideHeight + slideExtraHeight / 2,
      marginTop: -slideExtraHeight / 4,
      marginLeft:-slideMargin,
      marginRight:0,
      zIndex: 11
    },speed
  );
  removeShadow($('.sh-slider ul li:first-child'));
  removeShadow($('.sh-slider ul li:first-child').next().next().next().next());

  /**
   * Move left
   */
  function moveLeft() {
    setShadow($('.sh-slider ul li'));
    $('.sh-slider ul li:first-child').next().animate(
      {
        height:slideHeight + slideExtraHeight / 2,
        marginTop: -slideExtraHeight / 4,
        marginLeft:-slideMargin,
        marginRight:0, zIndex: 11
      },speed
    );

    $('.sh-slider ul li:first-child').next().next().animate(
      {
        height:slideHeight,
        marginTop:0, marginLeft: 0,
        marginRight: slideMargin,
        zIndex: 1
      },speed
    );

    $('.sh-slider ul').animate({
      left: + slideWidth / slideItem
    }, speed, function () {
      $('.sh-slider ul li:last-child').prependTo('.sh-slider ul');
      $('.sh-slider ul').css('left', '');
    });


    removeShadow($('.sh-slider ul li:last-child'));
    removeShadow($('.sh-slider ul li:first-child').next().next().next());
  };

  /**
   * Move right
   */
  function moveRight() {
    setShadow($('.sh-slider ul li'));
    $('.sh-slider ul li:last-child').prev().prev().animate(
      {
        height:slideHeight + slideExtraHeight / 2,
        marginTop: -slideExtraHeight / 4,
        marginLeft:-slideMargin,
        marginRight:0,
        zIndex: 11
      },speed
    );
    $('.sh-slider ul li:last-child').prev().prev().prev().animate(
      {
        height:slideHeight,
        marginTop:0,
        marginLeft: 0,
        marginRight: slideMargin,
        zIndex: 1
      },speed
    );
    $('.sh-slider ul').animate({
      left: - slideWidth / slideItem
    }, speed, function () {
      $('.sh-slider ul li:first-child').appendTo('.sh-slider ul');
      $('.sh-slider ul').css('left', '');
    });

    removeShadow($('.sh-slider ul li:last-child'));
    removeShadow($('.sh-slider ul li:last-child').prev().prev().prev().prev());
  };

  function setShadow(elem) {
    let shadowValue = '0px 10px 20px #F1CDB3';
    $(elem).css(
      {
        '-webkit-box-shadow' : shadowValue,
        '-moz-box-shadow' : shadowValue,
        'box-shadow' : shadowValue
      }
    );
  }

  function removeShadow(elem) {
    $(elem).css(
      {
        '-webkit-box-shadow' : 'none',
        '-moz-box-shadow' : 'none',
        'box-shadow' : 'none'
      }
    );
  }

  $('a.control_prev').click(function (e) {
    moveLeft();
    e.preventDefault();
  });

  $('a.control_next').click(function (e) {
    moveRight();
    e.preventDefault();
  });

});
