function bgImgRotate() 
{ 
	var images = Array( "images/login_screens/login1.jpg", "images/login_screens/login2.jpg", "images/login_screens/login3.jpg", "images/login_screens/login4.jpg"); 
	var myDate = new Date();
	var hour = myDate.getHours(); 
	var uxtm = myDate.getTime(); 
	// var index = Math.floor(hour/8); 
	var index; 

	if (hour < 5) { 
		index = 3; 
	} 
	else if (hour < 8) { 
		index = 0; 
	} 
	else if (hour < 17) { 
		index = 1; 
	} 
	else if (hour < 20) { 
		index = 2; 
	} 
	else if (hour < 24) { 
		index = 3; 
	} 
	else { 
		index = 1; 
	}
	document.getElementById('mainImage').src = images[index]+'?'+uxtm;
} 


function closeSurvey(div_id)
{
	document.getElementById(div_id).style.display = "none";
}


function locationTextColor(){
	if ((document.getElementById('specifyLocation').checked == 1) && !(document.getElementById('specificLocation').value == 'Region Name')) {
		document.getElementById('specificLocation').style.color = '#FFFFFF';
	} else {
		document.getElementById('specificLocation').style.color = '#666666';
	}
}


function selectRegionRadio(){
	document.getElementById('specifyLocation').checked = 1;
}


function CheckFieldsNotEmpty(){
	var mUsername = document.getElementById('firstname_input');
	var mLastname = document.getElementById('lastname_input');
	var mPassword = document.getElementById('password_input');
	var myButton  = document.getElementById('conbtn');
		
	if (( mUsername.value != "") && (mLastname.value != "") && (mPassword.value != "") )
	{
			myButton.disabled = false;
			myButton.className = "input_over";
	}else
	{
		myButton.disabled = true;
		myButton.className = "pressed";
	}
}
