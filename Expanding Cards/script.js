document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.panel')
    console.log('Number of panels:', panels.length) 

    function removeActiveClasses(){
        panels.forEach(panel => {
            panel.classList.remove('active')
        })
    }

    panels.forEach((panel) =>{
        panel.addEventListener('click', () => {
            removeActiveClasses()
            panel.classList.add('active')

        })
    }) 
})

