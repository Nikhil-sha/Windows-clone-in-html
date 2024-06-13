function search() {
    const searchQuery = document.getElementById("search-input").value;
    const filteredQuery = searchQuery.replace(/ /g, "+");
    console.log(filteredQuery);
    const finalSearchQuery = "https://www.google.com/search?q=" + filteredQuery;
    
    window.location.href = finalSearchQuery;
}

document.getElementById("search-button").addEventListener('click', search);
