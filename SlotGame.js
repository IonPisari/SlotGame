





// Main Game Component Module
const SlotGame = (rootElement) => {
    let scriptElement = document.createElement("script")
    scriptElement.src = "/SlotGame/src/libs/DOMUtils.js"
    document.body.appendChild(scriptElement)
    
    
    
    setTimeout(() => {
        createElement('script', { src: "/SlotGame/src/components/SlotGameBulb.js"}, document.body)
        createElement('script', { src: "/SlotGame/src/components/SlotGameWheel.js"}, document.body)
        
        let divContainer = createElement('div' , {class:'slot-game-container'}, rootElement)
        let divHeader = createElement('div' ,    {class:'slot-game-header'}, divContainer)
        let divLHeader = createElement('div' ,    {class:'slot-game-header-left'}, divHeader)
        let divRHeader = createElement('div' ,    {class:'slot-game-header-right'}, divHeader)
        let divTHeader = createElement('div' ,    {class:'slot-game-header-top'}, divHeader)
        
        let divContent = createElement('div' ,   {class:'slot-game-content'}, divContainer)
        
        let diLContent = createElement('div' ,   {class:'slot-game-content-left'}, divContent)
        let diRContent = createElement('div' ,   {class:'slot-game-content-right'}, divContent)
        
        let divHeaderScreen = createElement('div' ,   {class:'slot-game-header-screen'}, divHeader)
        divHeaderScreen.innerHTML = "BIG WINNER"

        let divContentScreen = createElement('div' ,   {class:'slot-game-content-screen'}, divContent)
        let i = 3;
        while(i--) {
            let divScreenWindow = createElement('div' ,   {class:'slot-game-screen-window'}, divContentScreen)
        }
       
        


        document.head.innerHTML += `<link rel="stylesheet" href="/SlotGame/src/components/SlotGame.css">`
    },200)

    
    // delay the function invokation to make sure the script loaded
    setTimeout(() => {
        for(let bCount = 0; bCount<12; bCount++){
            SlotGameBulb(document.querySelector(".slot-game-content-left"))
            SlotGameBulb(document.querySelector(".slot-game-content-right"))

        }
        for(let bCount = 0; bCount<4; bCount++){
            SlotGameBulb(document.querySelector(".slot-game-header-left"))
            SlotGameBulb(document.querySelector(".slot-game-header-right"))

        }
        for(let bCount = 0; bCount<9; bCount++){
            
            SlotGameBulb(document.querySelector(".slot-game-header-top"))

        }
        SlotGameWheel(
            document.querySelector(".slot-game-screen-window")
        )
        // SlotGameWheel(
        //     document.querySelector(".slot-game-container")
        // )
        // SlotGameBulb(
        //     document.querySelector(".slot-game-container")
        // )
        // SlotGameBulb(
        //     document.querySelector(".slot-game-container")
        // )
    },500)
}


