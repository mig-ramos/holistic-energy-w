export default class Hour{
    #id: string
    #hour: string

    constructor(hour: string, id: string = ''){
        this.#hour = hour
        this.#id = id
    }

    static vazio(){
        return new Hour('', '')
    }

    get id(){
        return this.#id
    }

    get hour(){
        return this.#hour
    }
}