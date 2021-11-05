$(function () {
  $('div.aside-pagetop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600)
    return false
  })
})

$(function () {

  let pagetop_up = $('button.notice-btn').offset().top - $(window).height()

  $(window).on('scroll', function () {
    if (
      $(window).scrollTop() > pagetop_up 
    ) {
      $('div.aside-pagetop').addClass('is-fixed')
    } else {
      console.log('464')
      $('div.aside-pagetop').removeClass('is-fixed')
    }
    
  })
})

