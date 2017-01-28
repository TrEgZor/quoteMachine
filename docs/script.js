var rand=0;
		var randBefore =rand;
		var clickCount = 0;
		var quoteArr = [];
		var prevCount ;
		$(document).ready(function(){
			
			$("#quoteBtn").on("click",function(){
					$.getJSON("quote.json",function(json){
						var html="";
						while(randBefore == rand){    
						rand = Math.floor(Math.random()*json.length-1)+1;
						if(rand === 0 || rand > 20 ){rand = 1;}
						};
						randBefore = rand;
						clickCount++;
						if(clickCount == 1){
							randBefore = rand;
							$("#previous").css("display","inline");
						}
						quoteArr.push(randBefore);
						
						
						
						
						json = json.filter(function(val){
							return val.id == rand;
						});
						console.log(rand);
						json.forEach(function(val){
							html += "<div class='quote'>";
							html +="<div class='row'>";
							html +="<div class='col-xs-10 col-xs-offset-1'>"
							html +="<img class='img-responsive authorImg' src='"+val.imgLink+"' alt='"+val.altText+"'>";
							html +="<p>\""+val.text+"\"</p>";
							html +="<p id='author'>"+val.author+"</p></div></div>";
							html +="</div>";
						});
						$("#quoteField").html(html);
						prevCount = clickCount-1;
						});
					

			});
			$("#previous").on("click",function(){
					$.getJSON("quote.json",function(json){
						var html="";
						

						console.log(quoteArr+" "+prevCount);
						if(prevCount <= 0 )
						{
							prevCount = clickCount;
						}
						var prev = quoteArr[(prevCount-1)];

						prevCount--;
						

						json = json.filter(function(val){
							return val.id == prev;
						});
												json.forEach(function(val){
							html += "<div class='quote'>";
							html +="<div class='row'>";
							html +="<div class='col-xs-10 col-xs-offset-1'>";
							html +="<img class='img-responsive authorImg' src='"+val.imgLink+"' alt='"+val.altText
							+"'";				
							html +="<p>\""+val.text+"\"</p>";
							html +="<p id='author'>"+val.author+"</p></div></div>";
							html +="</div>";
						});
						$("#quoteField").html(html);
						

					});
					   });
    
});
