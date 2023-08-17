//production nav
// basic nav code changes will be made depeneidng on new aditions

const navData = [
    { title: "Home", link: ""},
    { title: "WitsHub", link: ""},
    { title: "Academics", link: ""},
    { title: "Order", link: ""},
]


const navElement = document.getElementById("nav-Id");

let list = document.createElement("ul");

for(var i = 0; i < navData.length; i++){

    let listItemLink = document.createElement("a");
    listItemLink.innerText = navData[i].title;
    listItemLink.setAttribute("href", navData[i].link);
    
    let listItem = document.createElement("li");
    listItem.appendChild(listItemLink);
    list.appendChild(listItem);
}

navElement.appendChild(list);

//Dev notes

// Navigation data, you are essentially using relative referenicng for the links//

//const navData = [
   //{ title: "Home", link: "./home.html"},
   //{ title: "Theory", link: "../Theory/theory.tml"},
    //{ title: "Internet Art", link: "../Internet Art/internetgame.html"},
    //{ title: "Design", link: "../Design/desin.html"},