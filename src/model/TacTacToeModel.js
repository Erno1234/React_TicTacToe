class TicTacToeModel{
    #lista=[]
    constructor(){
        this.#lista = [""," ","",""," ",""," ",""," "]
    }
    getLista(){
        return {...this.#lista}
    }
    setLista(index){
        this.#lista[index]="X";
    }
}
export default TicTacToeModel