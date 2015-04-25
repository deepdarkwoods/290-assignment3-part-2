

var originalGistList = [];
var favoritesList = [];
var httprequest;


var fetchData = function()
{

	httprequest = new XMLHttpRequest();
	if(!httprequest)
		{
			throw 'Unable to create httprequest';
		}


		var numpages = document.getElementById('pagesToDisplay').value;
		

		console.log(numpages);

		if(numpages ==1)
		{
			var url = 'https://api.github.com/gists/public?page=1&per_page=100';
		}

		else if(numpages ==2)
		{
			var url = 'https://api.github.com/gists/public?page=2&per_page=100';
		}
		
		else if(numpages ==3)
		{
			var url = 'https://api.github.com/gists/public?page=3&per_page=100';
		}
		else if(numpages ==4)
		{
			var url = 'https://api.github.com/gists/public?page=4&per_page=100';
		}
		else if(numpages ==5)
		{
			var url = 'https://api.github.com/gists/public?page=5&per_page=100';
		}





		httprequest.open('GET',url,true);
		httprequest.send();
		httprequest.onreadystatechange = alertContents;
	
};


function alertContents()
{
	
	if (this.readyState === 4 && this.status===200)
		{
			


			originalGistList = httprequest.responseText;
			localStorage.setItem("rawGistData",(originalGistList));
			generateGistHtml();
		
		}

}


function generateGistHtml ()

{
		var parsedGistList = JSON.parse(originalGistList);
		var topElement =document.getElementById("tablestart");
		var tbl = document.createElement("table");
		var tblBody = document.createElement("tbody");


	for(var x=0; x<parsedGistList.length; x++)
		{
		var row = document.createElement("tr");

		var rowLink = document.createElement("a");
		rowLink.href = parsedGistList[x].url;

		
		var cell = document.createElement("td");
		var cell2 = document.createElement("td");
		var cell3 = document.createElement("td");
		var link = document.createElement("td");
		

		var cellText = document.createTextNode(parsedGistList[x].url);
		var cellTextDescription = document.createTextNode(parsedGistList[x].description);
		//favoritebutton
		var fbutton = document.createElement("button");
		fbutton.innerHTML = "Add to Favorite + ";
		fbutton.setAttribute("gistID",parsedGistList[x].id);

		fbutton.onClick = function() {
			var gistId = this.getAttribute("gistId");
			favoritesList.push(gistId);
			localStorage.setItem("favorite",(favoritesList));
		};

		


		link.appendChild(rowLink);
		cell.appendChild(cellTextDescription);
		cell2.appendChild(cellText);
		cell3.appendChild(fbutton);
		row.appendChild(link);
		row.appendChild(cell);
		row.appendChild(cell2);
		row.appendChild(cell3);
		tblBody.appendChild(row);
		}
	
		
		tbl.appendChild(tblBody);
		topElement.appendChild(tbl);

		generateFavoriteList();
}


var addToFavorites = function(gistID)
{
console.log("adding to fav");
console.log(gistID);



};

function generateFavoriteList()
{

var list = localStorage.getItem("rawGistData");
var plist = JSON.parse(list);

var topElement =document.getElementById("favstart");
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");

for(var x=0; x<plist.length; x++)
{
	

}

}


/*

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

		var url = 'https://api.github.com/gists'; + '?page=' + temp + '&per_page=30';

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


*/




