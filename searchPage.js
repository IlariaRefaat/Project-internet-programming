let searchInput = document.getElementById("search-input");
let searchResult = document.getElementById("search-result");
searchInput.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    emptyArray = UserArray.filter((data) => {
      return data.name.toLowerCase().includes(userData.toLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data.name = "<li>" + data.name + "</li>");
    });
    console.log(emptyArray);
  } else {
  }
  showSearchResult(emptyArray);
  let allList = searchResult.querySelectorAll("li");
  for (let i = 0; i < allList.length; i++) {
    if (!emptyArray.length) {
    } else {
      allList[i].setAttribute("onclick", "select(this)");
    }
  }
};
function showSearchResult(list) {
  let listData;
  if (!list.length) {
    userValue = searchInput.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  searchResult.innerHTML = listData;
}
function select(element) {
  window.location.href = "./profilePage.html";
}
