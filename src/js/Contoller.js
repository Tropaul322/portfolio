import View from './View';
class Contoller {
    constructor (){
        this.view = new View();
    }
    init() {
        this.view.init()
    }
}

export default Contoller