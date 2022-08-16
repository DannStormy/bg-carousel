$(document).ready(function(){

  $(".image-div img").click(function(){
    $(".image-div img").removeClass("active")
    $(this).addClass("active")
    let current = $(this).attr('src')
    $(".display").css("background-image", "url(" + current + ")")
    // $(this).parent().prepend(this)
  });

  let index = 0;
  let allImages = [];

  $(".forward").click(() => {
    changeForward()
  })

  $(".back").click(() => {
    changeBackward()
  })

  let image = $('img');
  image.each(function(i,e){
    allImages.push($(e).attr('src'))
  });

function changeForward(){
  index+=1;
  if (index > allImages.length - 1) {
    index = 0;
  }
  $('.display').css("background-image", "url(" + allImages[index] + ")")
}
function changeBackward(){
  index-=1;
  if (index < 0) {
    index = allImages.length - 1;
  }
  console.log(index)
  $('.display').css("background-image", "url(" + allImages[index] + ")")
}
index=-1

});