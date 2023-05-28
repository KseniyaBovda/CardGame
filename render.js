
const renderLevels = () => {
    const appEl = document.getElementById("app");   
    let appHtml = `<div class="main-card" >
                    <p class="text">Выбери сложность</p>
                    <div  class="level"> 
                        <input type="radio" id="radio1" name="radios" value="1" checked>
                        <label for="radio1">1</label>
                        
                        <input type="radio" id="radio2" name="radios" value="2">
                        <label for="radio2">2</label>
                        
                        <input type="radio" id="radio3" name="radios" value="3">
                        <label for="radio3">3</label>
                    </div> 
                    <button class="start-button" id="start-button">Старт</button>
                </div>`

    appEl.innerHTML = appHtml;

    const levels = document.querySelectorAll('div > input');
    const startButton = document.getElementById("start-button");

    startButton.addEventListener('click', () => {
        let selectedLevel;
        for (const level of levels) {
            if (level.checked) {
                selectedLevel = level.value;
                break;
            }
        }
        if (selectedLevel === "1") {
            appHtml = `<div class="main-card" >
                            <p class="text">Легкий уровень</p>
                        </div>`;
        } else if (selectedLevel === "2") {
            appHtml = `<div class="main-card" >
                            <p class="text">Средний уровень</p>
                        </div>`;
        } else if (selectedLevel === "3") {
            appHtml = `<div class="main-card" >
                            <p class="text">Сложный уровень</p>
                        </div>`;
        } 
        appEl.innerHTML = appHtml;
    });    


}    
renderLevels();
