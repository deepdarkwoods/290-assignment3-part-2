

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
		
		localStorage.setItem("rawGistData",(this.responseText));
	}

}


function listResults()
{
	
	var results = localStorage.getItem("rawGistData");
	var presults = JSON.parse(results);

	var table= document.createElement("table");
	var tableBody = document.createElement("tbody");


	for(var i = 0;i < presults.length; i++)
	{
		var row = document.createElement("tr");

		//url
		var cell1 = document.createElement("td");
		var cellText1 = document.createTextNode(presults[i].url);
		cell1.appendChild(cellText1);
		//document.write(i + ":"+ presults[i].url + "<br>");
		tableBody.appendChild(row);
	}
		table.appendChild(tableBody);
		var mainstruct = document.getElementById("tablestart");
		mainstruct.appendChild(table);


}

listResults();







