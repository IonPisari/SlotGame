const SlotGameWheel = (rootElement) => {
    let div = createElement('div', {class:'slot-game--wheel'}, rootElement)
    div.innerHTML = "7"
    createElement('link', {href:"/SlotGame/src/components/SlotGameWheel.css", rel:"stylesheet"}, document.head)
}

