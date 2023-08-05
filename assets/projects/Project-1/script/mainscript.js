let addBtn=document.getElementById("add-btn");
addBtn.addEventListener("click", addIng);
let parentList = document.getElementById("parentList");
let temp = true;
let contentList=[];
function addIng(e) {
    let currBtn=e.currentTarget;
    let currText=currBtn.previousElementSibling;
    curr=currText.value;
    let check = document.getElementsByClassName(curr.split(" ").join("-"));
    let newEle = document.createElement("li");
    newEle.classList.add("list-item");
    newEle.classList.add("minibox");
    newEle.classList.add(curr.split(" ").join("-"));
    newEle.textContent=curr;

    let newBtn = document.createElement("button");
    newBtn.classList.add("rmvbtn");
    newBtn.setAttribute('onclick','rmvIng(this)');
    newBtn.textContent="x";

    newEle.appendChild(newBtn);
    if(check.length<=0) {
        parentList.appendChild(newEle);
        // contentList.push(currText.className);
    }
    while(temp==true){
        if(parentList.children.length=1) {
            let newBtn = document.createElement("button");
            newBtn.classList.add("input-group-text");
            newBtn.classList.add("btn");
            newBtn.setAttribute("onclick","searchDish(this)");
            newBtn.classList.add("done-btn");
            newBtn.textContent = "Done";
            let currParent=addBtn.parentElement;
            currParent.appendChild(newBtn);
            temp=false;
        }
    }
}

function rmvIng(e) {
    let currBtn=e.parentElement;
    currBtn.remove();
}

function searchDish(e) {
    let contentList = [];
    let n = parentList.children.length;
    for(let i=0;i<n;i++) {
        contentList.push(parentList.children[i].childNodes[0].textContent);
    }

    let totalList = document.querySelectorAll("option");
    let finalDish = [];
    for(let j=0;j<contentList.length;j++) {
        for(let i=0;i<totalList.length;i++) {
            if(totalList[i].value==contentList[j]) {
                finalDish.push(totalList[i].className);
                break;
            }
        }
    }
    
    for(item in finalDish) {
        finalDish[item]=finalDish[item].split("-");
    }
    let finalList = [];
    for(item of finalDish) {
        for(subItem of item) {
            if(!finalList.includes(subItem)) {
                finalList.push(subItem);
            }
        }    
    }

    let newEle2 = document.createElement("h2");
    newEle2.textContent="Filtered Dishes"
    let mainDish = document.getElementById("mainDish");
    if(mainDish.hasChildNodes){
        while(mainDish.lastElementChild){
            mainDish.removeChild(mainDish.lastElementChild);
        }
    }
    mainDish.classList.add("maindish");
    mainDish.appendChild(newEle2);
    if(finalList.includes("dish1")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish1.html"><h2>Simple Lemon Herb Chicken</h2></a>
        <p>
          This lemon-herb chicken is a simple, quick, and delicious dish. All you need are a few herbs, a lemon, and of course, the chicken! The amount of spices is completely up to you. You can add more or less according to your taste.
        </p>`;
        mainDish.appendChild(newEle3);
    }
    if(finalList.includes("dish2")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish2.html"><h2>Baked Macaroni and Cheese</h2></a>
        <p>
          This easy mac and cheese is baked in the oven for a quick meal. A friend of mine sent me this recipe when I got my first apartment because she knew I hated cooking! It's really easy — even I can make it — and it tastes great. I'm not sure where she found the recipe.
        </p>`;
        mainDish.appendChild(newEle3);
    }
    if(finalList.includes("dish3")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish3.html"><h2>Filet Mignon with Rich Balsamic Glaze</h2></a>
        <p>
            This is the best filet mignon recipe for an elegant dinner for two. Red wine and balsamic vinegar make a wonderfully rich sauce to serve with the steak. Delicious with steamed asparagus and baby red potatoes.
        </p>`;
        mainDish.appendChild(newEle3);
    }
    if(finalList.includes("dish4")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish4.html"><h2>Egg Curry</h2></a>
        <p>
          This is a quick solution to a curry when there is no meat or fish. Best eaten hot over white rice. Garnish with cilantro leaves.
        </p>`;
        mainDish.appendChild(newEle3);
    }
    if(finalList.includes("dish5")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish5.html"><h2>Chef John's BLT Pasta</h2></a>
        <p>
          If you can't decide whether to make a BLT sandwich or a pasta, now you can do both. The combination of bacon, lettuce, and tomato has a proven track record of deliciousness! Try this BLT pasta for yourself.
        </p>`;
        mainDish.appendChild(newEle3);
    }
    if(finalList.includes("dish6")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish6.html"><h2>Stir-Fry Chicken and Vegetables</h2></a>
        <p>
          This chicken stir-fry with vegetables is one of my favorite stir-fry recipes. Simple, quick, and easy. Serve over rice.
        </p>`;
        mainDish.appendChild(newEle3);
    }
    if(finalList.includes("dish7")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish7.html"><h2>Lo Mein Noodles</h2></a>
        <p>
          These lo mein noodles were created from a blend of multiple recipes. Add your favorite meat for a main dish or serve as a side. If serving with meat, cook the meat separately.
        </p>`;
        mainDish.appendChild(newEle3);
    }
    if(finalList.includes("dish8")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish8.html"><h2>Quick and Easy Chicken Piquant</h2></a>
        <p>
          This recipe is a variation on traditional chicken piquant which is spicy Cajun chicken. This comes together quickly and is good served over white rice.
        </p>`;
        mainDish.appendChild(newEle3);
    }
    if(finalList.includes("dish9")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish9.html"><h2>Mexican Shakshuka</h2></a>
        <p>
          This Mexican-inspired shakshuka recipe is a one-skillet poached egg dish hearty enough to feed a crowd. It's full of all the flavors you expect from Mexican recipes — tomatoes, onions, smoked peppers, cumin, chili powders, and Spanish paprika. Serve with warmed corn or flour tortillas and butter-fried hominy.
        </p>`;
        mainDish.appendChild(newEle3);
    }
    if(finalList.includes("dish10")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish10.html"><h2>Spaghetti Aglio e Olio</h2></a>
        <p>
          No two aglio e olio recipes are alike, but this one is pretty true to the classic method. The key is slowly toasting the garlic slices to a perfect golden brown in the olive oil. If it's too light, you don't get the full flavor and if it's too dark it gets bitter. My advice? Do it perfectly.
        </p>`;
        mainDish.appendChild(newEle3);
    }
    if(finalList.includes("dish11")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish11.html"><h2>Chana Masala (Savory Indian Chick Peas)</h2></a>
        <p>
          Give this chana masala dish a try and don't look back. Indian food is not just curried sauces. This spin on an Indian chickpea curry features a healthy mixture of chickpeas, tomatoes, onion, and spices. Both carnivores and vegetarians will enjoy this meal. My kids love it. Leave out the green chile if the kiddies will be eating. Serve over basmati or jasmine rice and enjoy. Namaste y'all!
        </p>`;
        mainDish.appendChild(newEle3);
    }
    if(finalList.includes("dish12")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish12.html"><h2>Chicken with Lemon-Caper Sauce</h2></a>
        <p>
          A rich lemon sauce for chicken makes this dish perfect for a special meal.
        </p>`;
        mainDish.appendChild(newEle3);
    }
    if(finalList.includes("dish13")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish13.html"><h2>Salmon Fillets with Spinach for Two</h2></a>
        <p>
          Frozen spinach and garden vegetable cream cheese combine with salmon fillets! This is easy to double, if you need 4 servings. Created for a regular oven, this recipe is easily prepared in an air fryer by reducing the temperature by 25 degrees and reducing the time by five minutes. Be sure to monitor for doneness, because overcooking will dry out the salmon.
        </p>`;
        mainDish.appendChild(newEle3);
    }
    if(finalList.includes("dish14")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish14.html"><h2>Italian White Bean Chicken</h2></a>
        <p>
          Italian White Bean Chicken
        </p>`;
        mainDish.appendChild(newEle3);
    }
    if(finalList.includes("dish15")){
        let newEle3 = document.createElement("div");
        newEle3.classList.add("article");
        newEle3.innerHTML=`<a href="html/dish15.html"><h2>Pork Fried Rice</h2></a>
        <p>
          This pork fried rice recipe is my revised version of another recipe. I often substitute chicken for pork, and it doesn't change anything. I have used both basmati rice and long-grain rice which gives the dish only a slight flavor difference. I have also added celery in the past with good outcomes.
        </p>`;
        mainDish.appendChild(newEle3);
    }
}