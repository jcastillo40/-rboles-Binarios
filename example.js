class Nodo{
    constructor(codigo){
        this.codigo = codigo;
        this.hder = null;
        this.hiz = null;
    }
}
class AB{
    constructor(){
        this.raiz = null;
    }

    agregar(nuevo){
        if(this.raiz == null){
            this.raiz = nuevo;
        } else{
            this._agregate(nuevo, this.raiz);
        }
    }
    _agregate(nuevo, nodor){
        if(nuevo.codigo > nodor.codigo){
            if(nodor.hder == null){
                nodor.hder = nuevo;
            } else{
                this._agregate(nuevo, nodor.hder);
            }
        } else{
            if(nodor.hiz == null){
                nodor.hiz = nuevo;
            } else{
                this._agregate(nuevo, nodor.hiz);
            }
        }
    }

    inOrder(){
        if(this.raiz == null){
            console.log("no hay raiz");
        } else{
            this._inOrder(this.raiz);
        }
    }
    _inOrder(nodor){
        if(nodor.hiz != null){
            this._inOrder(nodor.hiz);
        }

        console.log(nodor.codigo);

        if(nodor.hder != null){
            this._inOrder(nodor.hder);
        }
    }

}

let salon = new AB();
let nuevo = new Nodo(2);
salon.agregar(nuevo);
nuevo = new Nodo(4);
salon.agregar(nuevo);
salon.agregar(nuevo = new Nodo(1));
salon.agregar(nuevo = new Nodo(16));
salon.agregar(nuevo = new Nodo(6));
salon.agregar(nuevo = new Nodo(7));
salon._inOrder();