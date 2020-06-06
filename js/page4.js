/*******************big and small image functionality starts here****************************/
$(document).ready(function () {
	$("#click1").click(function(){
		$("#deleteId1").html("");
		$("#deleteId5").html(78499-6999);
		
		
	});

	$("#click2").click(function(){
		$("#deleteId2").html("");
		$("#deleteId5").html(78499-6999-30000);

		
	});

	$("#click3").click(function(){
		$("#deleteId3").html("");
	    $("#deleteId5").html(78499-6999-30000-1500);
		console.log("hello3");
	});

	$("#click4").click(function(){
		$("#deleteId4").html("");
		$("#deleteId5").html(78499-6999-30000-1500-40000);

	});
});
