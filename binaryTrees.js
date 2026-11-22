class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.sig = null;
        this.ant = null;
        this.hder = null;
        this.hizq = null;
    }
}

class Expresiones {
    constructor() {
        this.primero = null;
    }

    agregar(nuevo) {
        if (this.primero == null) {
            this.primero = nuevo;
        } else {
            let aux = this.primero;
            while (aux.sig != null) {
                aux = aux.sig;
            }
            nuevo.ant = aux;
            aux.sig = nuevo;
        }
    }

    extraerOperandos(operador) {
        let izq = operador.ant;
        let der = operador.sig;

        operador.hizq = izq;
        operador.hder = der;

        if (izq.ant != null) {
            izq.ant.sig = operador;
            operador.ant = izq.ant;
        } else {
   
            this.primero = operador;
            operador.ant = null;
        }

        if (der.sig != null) {
            der.sig.ant = operador;
            operador.sig = der.sig;
        } else {
            operador.sig = null;
        }

        izq.ant = null;
        izq.sig = null;
        der.ant = null;
        der.sig = null;
    }

    evaluar() {
        if (this.primero == null) return;

        let aux = this.primero;
        while (aux != null) {
            if ((aux.dato == '*' || aux.dato == '/') && aux.hizq == null && aux.hder == null) {
                this.extraerOperandos(aux);
            }
            aux = aux.sig;
        }

        aux = this.primero;
        while (aux != null) {
            if ((aux.dato == '+' || aux.dato == '-') && aux.hizq == null && aux.hder == null) {
                this.extraerOperandos(aux);
            }
            aux = aux.sig;
        }
    }

    preOrder(nodo = this.primero) {
        if (nodo == null) {
            return "";
        }
        let recorrido = nodo.dato + " ";
        if (nodo.hizq != null) {
            recorrido += this.preOrder(nodo.hizq);
        }
        if (nodo.hder != null) {
            recorrido += this.preOrder(nodo.hder);
        }
        return recorrido;
    }

    posOrder(nodo = this.primero){
        if(nodo == null){
            return "";
        }
        if(nodo.hizq != null){
            recorrido += this.posOrder(nodo.hizq);
        }
        if(nodo.hder != null){
            recorrido += this.posOrder(nodo.hde);
        }
        let recorrido = nodo.dato + " ";
        return recorrido;
    }
}








let expresion = new Expresiones();
let nuevo = new Nodo(3);
expresion.agregar(nuevo);
nuevo = new Nodo('*');
expresion.agregar(nuevo);
nuevo = new Nodo(4);
expresion.agregar(nuevo);
nuevo = new Nodo('-');
expresion.agregar(nuevo);
nuevo = new Nodo(2);
expresion.agregar(nuevo);
expresion.evaluar();
console.log(expresion.preOrder());
console.log(expresion.posOrder());