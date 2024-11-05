const categories = document.querySelectorAll(".item");
const categoryNum = `Number of categories: ${categories.length}`;
console.log(categoryNum);

categories.forEach(function (number, index) {
    
    console.log(`Category: ${number.firstElementChild.textContent}`);
    console.log(`Elements: ${number.getElementsByTagName("li").length}`);
    
});
