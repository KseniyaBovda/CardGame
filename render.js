import { firstLevel } from "./components/first-level.js";
import { secondLevel } from "./components/second-level.js";
import { thirdLevel } from "./components/third-level.js";


const renderApp = () => {
    const appEl = document.getElementById("app");   
    let appHtml = `<div class="main-card" >
                    <p class="text">Выбери сложность</p>
                    <div  class="level"> 
                        <input type="radio" id="radio1" name="radios" value="1">
                        <label for="radio1">1</label>
                        
                        <input type="radio" id="radio2" name="radios" value="2">
                        <label for="radio2">2</label>
                        
                        <input type="radio" id="radio3" name="radios" value="3">
                        <label for="radio3">3</label>
                    </div> 
                    <button class="start-button" id="start-button">Старт</button>
                </div>`

    appEl.innerHTML = appHtml;

    for(const level of document.querySelectorAll('input')) {
        level.addEventListener('click', () => {
           window.localStorage.setItem('level', `${level.value}`);
        })
    }

    const startButton = document.getElementById("start-button");
    startButton.addEventListener('click', () => {
        const selectedLevel = parseInt(window.localStorage.getItem('level'));
        if(selectedLevel === 1) {
            firstLevel( {appEl} )
        }
        if(selectedLevel === 2) {
            secondLevel( {appEl} )
        }
        if(selectedLevel === 3) {
            thirdLevel( {appEl} )
        }
    });    

}
 
renderApp();
