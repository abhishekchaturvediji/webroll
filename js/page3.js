/*******************big and small image functionality starts here****************************/
$(document).ready(function () {
	$("#imgId1ss").mouseover(function(){
		$("#imgIdss").attr('src',this.src);
	});

	$("#imgId1ss").mouseout(function(){
		$("#imgIdss").attr("src","../image/bigimg1.jpeg");
	});

	$("#imgId2ss").mouseover(function(){
		$("#imgIdss").attr('src',this.src);
	});

	$("#imgId2ss").mouseout(function(){
		$("#imgIdss").attr("src","../image/bigimg1.jpeg");
	});

	$("#imgId3ss").mouseover(function(){
		$("#imgIdss").attr('src',this.src);
		$("#imgIdss").css("width","10%");
		$("#imgIdss").css("margin-left","40%");
		$("#descriptionId").html("Side View");
		$("#descriptionId").css("margin-left","0");
		$("#descriptionId").css("color","#dbe2e7");
	});

	$("#imgId3ss").mouseout(function(){
		$("#imgIdss").attr("src","../image/bigimg1.jpeg");
		$("#imgIdss").css("width","100%");
		$("#imgIdss").css("margin-left","0");
		$("#descriptionId").html("");
	});

	$("#imgId4ss").mouseover(function(){
		$("#imgIdss").attr('src',this.src);
		$("#imgIdss").css("height","10%");
		$("#imgIdss").css("margin-top","40%");
		$("#descriptionId").html("Top View");
		$("#descriptionId").css("margin-left","40%");
		$("#descriptionId").css("color","#dbe2e7");
	});

	$("#imgId4ss").mouseout(function(){
		$("#imgIdss").attr("src","../image/bigimg1.jpeg");
		$("#imgIdss").css("height","100%");
		$("#imgIdss").css("margin-top","0");
		$("#descriptionId").html("");
	});

});
/*******************big and small image functionality ends here****************************/




/*****************tabs fuctionality starts here***********************/
$( function() {
    $( "#tabs" ).tabs();
} );
/*****************tabs functionality ends here**********************/





/******************carousel functionality strats here*********************/


$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<3;i++) {
    next=next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});


/******************carousel functionality ends here*********************/

$('.carousel').carousel({
  interval: 1000
})



















