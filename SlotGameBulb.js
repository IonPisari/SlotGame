const SlotGameBulb = (rootElement) => {

    // let div = document.createElement('div')
    // div.className = 'slot-game-bulb'
    // rootElement.appendChild(div)


    let div = createElement('div', { class: 'slot-game-bulb top'}, rootElement)

    // let link = document.createElement('link')
    // link.href = 'src/components/SlotGameBulb.css'
    // link.rel = 'stylesheet'
    // document.head.appendChild(link)

    createElement('link', { href: '/SlotGame/src/components/SlotGameBulb.css', rel: 'stylesheet'}, document.head)

    let timer = setInterval(() => {
        if (div.className == 'slot-game-bulb top') {
            div.className = 'slot-game-bulb top lighted'
        } else {
            div.className = 'slot-game-bulb top'
        }
    }, Math.random() * 1000 + 1000)
}   