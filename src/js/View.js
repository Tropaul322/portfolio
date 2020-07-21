import {
    HEADER,
    ABOUT,
    SKILLS,
    EDUCATION,
} from './constants'
class View {
    constructor () {
        this.age = 23; 
    }
    init() {
        this.render('header', HEADER)
        this.render('.about_me', ABOUT)
        this.render('.skills', SKILLS)
        this.render(".education", EDUCATION)
    }
    render(section, constant) {
        this.header = document.querySelector(section);
        this.header.innerHTML = constant
    }
}
export default View;