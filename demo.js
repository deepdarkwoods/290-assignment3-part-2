
//initialize section
var pagesToDisplay = 1;
var languages = [];
var httpRequest = [];
var favList = [];



document.getElementById("pages2display").onchange = function()
    {
    
        var temp = document.getElementById("pages2display");
        pagesToDisplay = temp.options[temp.selectedIndex].value;
        localStorage.setItem("pages",pagesToDisplay);
        
    }
    


document.getElementById("select-lang").onchange = function()
    {
        var list = document.getElementById("select-lang");        
        setLanguage(list);
    }

function setLanguage (langArray)
    {
        //clear current values
        languages = [];
        
        for(var i=0;i<langArray.length;i++)
        {
         if (langArray[i].selected)
             {
             languages.push(langArray[i].value);
             console.log(langArray[i].value);
             }
        }    
        
          localStorage.setItem("Language",languages);
    }
    
    
function searchGist ()
    
    {
        
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = waiting;        
        httpRequest.open('GET', 'https://api.github.com/gists/public', true);
        httpRequest.send(null);              
        
        
    }
    
    
function waiting()

{
    if(httpRequest.readyState == 4 && httpRequest.status == 200)
    {
    console.log("inside httprequest");
    localStorage.setItem("gistData",httpRequest.responseText);
    var parsedData = JSON.parse(httpRequest.responseText);
    
    displayResults(parsedData);
    }
    
}


function displayResults (gistArray)

    {
           
        
        var tableTop = document.getElementById("gistd");
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");
        
        
        for(var i =0;i<gistArray.length;i++)
        {
            var row = document.createElement("tr");
            
            //id
            var cell1 = document.createElement("td");
            var cell1t = document.createTextNode(gistArray[i].id);
           
          
            //url
            var cell2 = document.createElement("a");
            var cell2t = document.createTextNode(gistArray[i].url);
            var myLink = gistArray[i].url;
            cell2.href =myLink;
            
            //description
            var cell3 = document.createElement("td");
            var cell3t = document.createTextNode(gistArray[i].description);
            
            //favorite buttton
            var cell4 = document.createElement("button");          
            cell4.type="button";
            cell4.innerHTML = " + Fav";
            cell4.setAttribute("gistId", gistArray[i].id);
            cell4.onclick = function (){
                var gistId = this.getAttribute("gistId");
                addToFavList (gistId);
            }
          
          
         
            
            
            //add text to cells
            cell1.appendChild(cell1t);
            cell2.appendChild(cell2t);
            cell3.appendChild(cell3t);
          
            
            
            
            
            //add cells to row
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            tblBody.appendChild(row);
            
        }
        
        //add rows to main table
       
        tbl.appendChild(tblBody);
        tableTop.appendChild(tbl);     
        
        
        
    }
    
    

    function addToFavList(gistID)
    {
    var originalList = JSON.parse(localStorage.getItem("gistData"));
        for(x=0;x<originalList.length;x++)
        {
            if (originalList[x].id == gistID)
            {
                var newFav = JSON.stringify(originalList[x]);
                localStorage.setItem("FavList",newFav);
                originalList.splice(x,1);
               
                localStorage.setItem("gistData",JSON.stringify(originalList));            
                
            }               
            
        }      
        
 
        displayFavorites();
        
    }
    
    
   function displayFavorites()
    {
        var favoriteList = JSON.parse(localStorage.getItem("FavList"));
         
        var tableTop = document.getElementById("favd");
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");
        
        
        for(var i =0;i<favoriteList[0];i++)
        {
            var row = document.createElement("tr");
            
            //id
            var cell1 = document.createElement("td");
            var cell1t = document.createTextNode(favoriteList[i].id);
           
          
            //url
            var cell2 = document.createElement("a");
            var cell2t = document.createTextNode(favoriteList[i].url);
            var myLink = favoriteList[i].url;
            cell2.href =myLink;
            
            //description
            var cell3 = document.createElement("td");
            var cell3t = document.createTextNode(favoriteList[i].description);
            
            //favorite buttton
            var cell4 = document.createElement("button");          
            cell4.type="button";
            cell4.innerHTML = " Remove";
            cell4.setAttribute("gistId", favoriteList[i].id);
            cell4.onclick = function (){
                var gistId = this.getAttribute("gistId");
                removeFavList (gistId);
            }
          
          
         
            
            
            //add text to cells
            cell1.appendChild(cell1t);
            cell2.appendChild(cell2t);
            cell3.appendChild(cell3t);
          
            
            
            
            
            //add cells to row
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            tblBody.appendChild(row);
            
        }
        
        //add rows to main table
       
        tbl.appendChild(tblBody);
        tableTop.appendChild(tbl); 
        
        
        
        
    }
    
   function removeFavList (gistId)
    {
        
        
        
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    