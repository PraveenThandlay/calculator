
			var num,num2;

			function clearfun() {
				document.getElementById("screen").innerHTML='';
				document.getElementById("screenp").innerHTML='';
				}

				function addition(){ 
					
				 	num=document.getElementById("screen").innerHTML;
				 	num=parseInt(num);
					document.getElementById("screenp").innerHTML=+num;
					document.getElementById("screenp").innerHTML=num+"+";
					document.getElementById("screen").innerHTML='';
					return num;
						}


				function subtraction () {
					num=document.getElementById("screen").innerHTML;
				 	num=parseInt(num);
					document.getElementById("screenp").innerHTML=+num;
					document.getElementById("screenp").innerHTML=num+"-";
					document.getElementById("screen").innerHTML='';
					return num;
				}
				
				function multiplication () {
					num=document.getElementById("screen").innerHTML;
				 	num=parseInt(num);
					document.getElementById("screenp").innerHTML=+num;
					document.getElementById("screenp").innerHTML=num+"*";
					document.getElementById("screen").innerHTML='';
					return num;
				}
			
 
 				function division () {
					num=document.getElementById("screen").innerHTML;
				 	num=parseInt(num);
					document.getElementById("screenp").innerHTML=+num;
					document.getElementById("screenp").innerHTML=num+"/";
					document.getElementById("screen").innerHTML='';
					return num;
				}
			
				function equals() {
					num2=document.getElementById("screen").innerHTML;
					num2=parseInt(num2);
					var c=document.getElementById("screenp").innerHTML;
					if (c.indexOf("+") >-1)
					 {
					var final=num+num2;
					document.getElementById("screen").innerHTML= +final;
					document.getElementById("screenp").innerHTML='';
						}
					if (c.indexOf("-")>-1) {
						var final=num-num2;
					document.getElementById("screen").innerHTML= +final;
					document.getElementById("screenp").innerHTML='';
					}
					if (c.indexOf("*")>-1) {
						var final=num*num2;
					document.getElementById("screen").innerHTML= +final;
					document.getElementById("screenp").innerHTML='';
					}
					if (c.indexOf("/")>-1) {
						var final=num/num2;
					document.getElementById("screen").innerHTML= +final;
					document.getElementById("screenp").innerHTML='';
					}
				}