

document.getElementById("githubreq").onclick = function(){searchGitHub();};



function searchGitHub()
{
	var httprequest = new XMLHttpRequest();
	if(!httprequest)

		{
			throw 'Unable to create httprequest';
		}

		var temp = document.getElementsByName("pages")[0];
		var pagesRequested = temp.toString();

		var url = 'https://api.github.com/gists';// + '?page=' + temp + '&per_page=30';

		httprequest.onreadystatechange = alertContents;
		httprequest.open('GET',url,true);
		httprequest.send();

	}


function alertContents()
{
	
	if (this.readyState === 4 && this.status===200)
	{
		var changeData = JSON.stringify(this.responseText);
		localStorage.setItem("rawGistData",changeData);
	}

}


function listResults()
{
	var results = localStorage.getItem("rawGistData");
	var presults = JSON.parse(results);

	for(var i = 0;i < presults.length; i++)
	{
		var temp = (presults[i].files.language);
		console.write(temp);
	}

}

listResults();







