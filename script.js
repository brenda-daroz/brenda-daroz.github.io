
//document.getElementById("header-title").innerHTML = "Site de Receitas";
const cheddarSauce = {
    title: "Molho de Cheddar",
    ingredients: [
        "57 g manteiga",
        "30 g farinha",
        "225 queijo Cheddar",
        "480 mL leite",
        "225 g macarrão"
    ],
    directions: "Colocar manteiga numa panela"
}

const hummus = {
    title: "Hummus",
    ingredients: [
        "250 g grão de bico cozido",
        "60 mL suco de limão",
        "60 mL tahini",
        "1 dente de alho pequeno",
        "30 mL de azeite",
        "1/2 colher de chá de cominho",
        "Sal a gosto",
    ],
    directions: ""
}

const nhoqueDeBatata = {
    title: "Nhoque de Batata",
    ingredients: [
        "500 g batata asterix",
        "100 g de parmesão",
        "100 g farinha",
        "Sal, pimenta do reina e noz moscada a gosto",
    ],
    directions: ""
}

const paoDeQueijo = {
    title: "Pão de queijo",
    ingredients: [
        "600 mL de água",
        "1 xícara chá de óleo",
        "1 1/2 xícara chá leite",
        "2 colheres sopa de sal",
        "1 kg polvilho azedo (ou 1/2 kg doce e 1/2 g azedo)",
        "6 ovos",
        "300 g parmesão ralado",
    ],
    directions: ""
}

const quesoSauceDip = {
    title: "Molho de queso",
    ingredients: [
        "130 g queijo industrializado (polenghi)",
        "40 mL água",
        "50 mL leite",
        "1 colher sopa jalapeño picado",
        "1/2 colher sopa jalapeño conserva",
        "1/2 colher sopa suco jalapeño",
        "Sal a gosto",
        "Comindo a gosto",
    ],
    directions: ""
}

const massaDeCoxinha = {
    title: "Massa de coxinha",
    ingredients: [
        "1 xícara de água",
        "1 1/2 xicara de leite",
        "1 1/2 colher de manteiga",
        "2 batatas cozidas e amassadas",
        "Tempero (caldo knorr)",
        "Farinha atá a massa nao grudar",
    ],
    directions: ""
}
const receitaHTML = `
<div class="receita-container">
    <h2>Cheddar Sauce</h2>
    <div class="section-da-receita ingredientes blurred">
            <h3>Ingredientes</h3>
            <p>57 g manteiga<br />
                30 g farinha<br />
                225 queijo Cheddar<br />
                480 mL leite<br />
                225 g macarrão<br />
            </p>
    </div>
    <div class="section-da-receita directions blurred">
            <h3>Modo de directions:</h3>
            <p>{recipe.directions}</p>
    </div>
</div>
`
function renderRecipe(recipe) {
    const receitaContainer = document.createElement("div")
    receitaContainer.className = 'receita-container'
    const h2 = document.createElement("h2")
    h2.className = 'recipe-title'
    const sectionIngredients = document.createElement("div")
    sectionIngredients.className = 'section-ingredients'
    const ingredients = document.createElement("h3")
    ingredients.className = 'ingredientes'
    const ingredientsList = document.createElement("p")
    ingredientsList.className = 'ingredients-list'
    const sectionDirections= document.createElement("div")
    sectionDirections.className = 'section-directions'
    const directions = document.createElement("h3")
    directions.className = 'modo-de-preparo'
    const directionsList = document.createElement("p")
    directionsList.className = 'directions-list'

    receitaContainer.appendChild(h2)
    receitaContainer.appendChild(sectionIngredients)
    receitaContainer.appendChild(sectionDirections)

    sectionIngredients.appendChild(ingredients)
    sectionIngredients.appendChild(ingredientsList)

    sectionDirections.appendChild(directions)
    sectionDirections.appendChild(directionsList)

    const ingredientsListHTML = recipe.ingredients.join("<br/>")
    
    h2.appendChild(document.createTextNode(recipe.title))
    ingredients.appendChild(document.createTextNode("Ingredientes"))
    ingredientsList.innerHTML = ingredientsListHTML
    directions.appendChild(document.createTextNode("Modo de preparo"))
    directionsList.appendChild(document.createTextNode(recipe.directions))

    document.getElementById("main-page").replaceChildren(receitaContainer)
}

function renderIndex() {
    
    const imageContainer = document.createElement("div")
    imageContainer.className = 'image-container';
    const sourdough = document.createElement("div")
    sourdough.className = "sourdough"
    const image1 = document.createElement("img")
    image1.className = "image1"
    image1.setAttribute("src","pages/image1.png")
    const caption1 = document.createElement("p")
    caption1.className = 'caption1'
    const columnContainer = document.createElement("div")
    columnContainer.className = 'column-container'
    const blueberryPie = document.createElement("div")
    blueberryPie.className = 'blueberry-pie'
    const image2 = document.createElement("img")
    image2.className = 'image2'
    image2.src="pages/mac-and-cheese.jpeg"
    const caption2 = document.createElement("p")
    caption2.className = 'caption2'
    const macAndCheese = document.createElement("div")
    macAndCheese.className = 'mac-and-cheese'
    const image3 = document.createElement("img")
    image3.className = 'image3'
    image3.src="pages/blueberry-pie.jpeg"
    const caption3 = document.createElement("p")
    caption3.className = 'caption3'

    
    
    imageContainer.appendChild(sourdough)
    imageContainer.appendChild(columnContainer)
    
    sourdough.appendChild(image1)
    sourdough.appendChild(caption1)

    columnContainer.appendChild(blueberryPie)
    columnContainer.appendChild(macAndCheese)

    blueberryPie.appendChild(image3)
    blueberryPie.appendChild(caption3)

    macAndCheese.appendChild(image2)
    macAndCheese.appendChild(caption2)
    
    

    caption1.appendChild(document.createTextNode("Sourdough"))
    caption2.appendChild(document.createTextNode("Mac and cheese"))
    caption3.appendChild(document.createTextNode("Blueberry Pie"))

    document.getElementById("main-page").replaceChildren(imageContainer)

}


//function changeRecipe() {
   // document.getElementById("main").innerHTML = receitaHTML
//}            


function inicioDeTudo() {
    console.log('o documento foi corregado')

    renderIndex()


    document.getElementById("cheddar-sauce").onclick = function () { renderRecipe(cheddarSauce) }
    document.getElementById("hummus").onclick = function () { renderRecipe(hummus) }
    document.getElementById("nhoque-de-batata").onclick = function () { renderRecipe(nhoqueDeBatata) }
    document.getElementById("pao-de-queijo").onclick = function () { renderRecipe(paoDeQueijo) }
    document.getElementById("queso-sauce-dip").onclick = function () { renderRecipe(quesoSauceDip) }
    document.getElementById("massa-de-coxinha").onclick = function () { renderRecipe(massaDeCoxinha) }

    document.getElementsByClassName("link-de-receita").onclick = function (event) {

       
    }
    
    document.getElementById("pag-in").onclick = function () { renderIndex() }

}


document.addEventListener('DOMContentLoaded', inicioDeTudo);

function changePictures() {
    document.getElementById("image1").src = "pages/mac-and-cheese.jpeg";
    document.getElementById("image2").src = "pages/blueberry-pie.jpeg";
    document.getElementById("image3").src = "pages/image1.png";
}

function changeContent() {
    document.getElementById("pag-in").textContent = "Help me";
    document.getElementById("pag-in").style = "Color: red";
}