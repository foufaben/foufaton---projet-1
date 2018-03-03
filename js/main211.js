var imagenumber=1;
setInterval(carousel,2000);
setTimeout(carousel,1000)

function carousel (){
	if(imagenumber>4)
	{
		imagenumber=1;}
		var images = [ "22","11","223","225"];

	$("#test_imag").attr('src',"ressource/image/"+images[imagenumber]+".jpg");
	imagenumber++;
	

}