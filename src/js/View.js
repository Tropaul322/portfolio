import {
    HEADER,
    ABOUT,
} from './constants'
class View {
    constructor () {
        this.age = 23; 
    }
    init() {
        this.renderHeader()
        this.renderAbout()
    }
    renderHeader (){
        this.header = document.querySelector('header');
        this.header.innerHTML = HEADER
    }
    renderAbout () {
        this.about = document.querySelector('.about_me')
        this.about.innerHTML = ABOUT
    }

}
export default View;