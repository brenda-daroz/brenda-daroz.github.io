
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
        "Farinha até a massa nao grudar",
    ],
    directions: ""
}

const massaDePizza = {
    title: "Massa de pizza",
    ingredients: [
        "3 xícaras de farinha",
        "10 g fermento biológico",
        "1 col chá sal",
        "1 1/4 xícara água morna",
        "1/8 xícara de azeite",
        "Farinha para polvilhar superfície",
        "Azeite para untar tigela"
    ],
    directions: ""
}

const pipocaDoce = {
    title: "Pipoca doce",
    ingredients: [
        "70 g pipoca",
        "30 g nescau",
        "50 g açucar",
        "10 mL água",
        "15 g óleo",
    ],
    directions: ""
}

const panquecaAmericana = {
    title: "Panqueca americana",
    ingredients: [
        "195 g de farinha",
        "2 col sopa açúcar",
        "1 col sopa fermento",
        "1/2 colher chá sal",
        "295 mL leite",
        "1 ovo",
        "4 col sopa manteiga amolecida",
        "1 col chá baunilha",
    ],
    directions: ""
}

const muffinDeBanana = {
    title: "Muffin de banana",
    ingredients: [
        "50 g manteiga sem sal",
        "100 g açúcar",
        "1 ovo",
        "2 bananas pequenas",
        "1/2 col chá baunilha",
        "3/4 cup farinha",
        "1/4 col chá sal",
        "1/2 col chá bicarbonato",
        "Chocolate opcional"
    ],
    directions: ""
}


const boloDeCenoura = {
    title: "Bolo de cenoura",
    ingredients: [
        "4 ovos",
        "240 mL de óleo",
        "200 g de cenoura",
        "400 g de açúcar",
        "320 g farinha",
        "1 col sopa de fermento",
    ],
    directions: ""
}

const cookie = {
    title: "Cookie",
    ingredients: [
        "90 g açúcar",
        "135 g açúcar mascavo",
        "100 mL manteiga derretida",
        "1 ovo",
        "1 col chá baunilha",
        "160 g farinha",
        "1/2 colher chá sal",
        "1 barra chocolate meio amargo",
        "1 barra chocolate ao leite",
    ],
    directions: ""
}

const boloDeNozes = {
    title: "Bolo de nozes",
    ingredients: [
        "1 1/4 xic farinha (remover 1 1/2 colher sopa",
        "2 2/1 colher sopa amido de milho",
        "1 xic açúcar",
        "3/8 xic óleo",
        "1 1/4 col chá fermento",
        "1.2 col chá baunilha",
        "1/4 col chá sal",
        "2 ovos",
        "1/2 xic leite",
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
    document.getElementById("massa-de-pizza").onclick = function () { renderRecipe(massaDePizza) }
    
    document.getElementById("panqueca-americana").onclick = function () { renderRecipe(panquecaAmericana) }
    document.getElementById("pipoca-doce").onclick = function () { renderRecipe(pipocaDoce) }
    document.getElementById("muffin-de-banana").onclick = function () { renderRecipe(muffinDeBanana) }
    document.getElementById("bolo-de-cenoura").onclick = function () { renderRecipe(boloDeCenoura) }
    document.getElementById("bolo-de-nozes").onclick = function () { renderRecipe(boloDeNozes) }
    document.getElementById("cookie").onclick = function () { renderRecipe(cookie) }

    document.getElementsByClassName("link-de-receita-salgada").onclick = function (event) { }
    document.getElementsByClassName("link-de-receita-doce").onclick = function (event) { }
    
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
