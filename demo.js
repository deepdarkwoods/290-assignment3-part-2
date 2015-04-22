

document.getElementById("githubreq").onclick = function(){searchGitHub();};



function searchGitHub()
	{
	var httprequest = new XMLHttpRequest();
	if(!httprequest)
		{
			throw 'Unable to create httprequest';
		}

		var url = 'https://api.github.com/gists';

		httprequest.onreadystatechange = alertContents;
		httprequest.open('GET',url,true);
		httprequest.send();

	}



function alertContents()
{
	
	if (this.readyState === 4 && this.status===200)
	{
		
				//alert(this.responseText);
				var serverresponsetext = JSON.parse(this.responseText);

				for(var key in serverresponsetext)
				{
					var val = serverresponsetext[key];
					console.log(val);
				}
	
	}
	



		/*
		var weather = JSON.parse(this.responseText);
		var maxt = weather.list[0].temp.max;
		var mint = weather.list[0].temp.min;
		*/
		

}


/*

function urlstringify(obj)
{
	
	var str = []
	for(var prop in obj){
		var s = encodeURIComponent(prop) + '=' + encodeURIComponent(obj[prop]);
		str.push(s);
		} 
	return str.join('&');

}

*/









/*


window.onload = function()
{
//code to retrieve local or session storage
var settingStr = localStorage.getItem('usersettings');
if (settingStr === null)
	{
	settings = {'sports':[]};
	localStorage.setItem('usersettings', JSON.stringify(settings));
	}

else 
	{
	settings = JSON.parse(localStorage.getItem('userSettings'));
	}
	getTomorrowsWeather();



};
*/