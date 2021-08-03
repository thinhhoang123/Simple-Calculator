class Calculator {
    constructor(
        preNumbandOperation,
        currentNumbandOperation
    ){
        this.preNumbandOperation = preNumbandOperation;
        this.currentNumbandOperation = currentNumbandOperation;
        this.clear();
    }
    // method for calculator
    clear(){
        this.currentNumb = ''; //at first dont have val so must '' of will be undefind
        this.preNumb = '';
        this.operation = undefined;
    }
    delete(){
        this.currentNumb = this.currentNumb.toString().slice(0,-1);
    }
    displayNumb(number){
        if(this.currentNumb.includes(".") && number === '.') {
            return 
        }
        this.currentNumb += number.toString(); //return string 
    }
    displayOperation(opera){ 
        if(this.currentNumb === '') return
        if(this.preNumb !== ''){
            this.compute();
        }
        this.operation = opera;
        this.preNumb = this.currentNumb;
        this.currentNumb = '';
    }
    compute(){
        let compute;
        const pre = parseFloat(this.preNumb);
        const curr = parseFloat(this.currentNumb);
        switch(this.operation){
            case '+':
                compute = pre + curr;
                break;
            case '-':
                compute = pre - curr;
                break;
            case 'x':
                compute = pre * curr;
                break;
            case '÷':
                compute = pre / curr;
                break;
            default:
                return;
        }
        this.currentNumb = compute;
        this.preNumb = '';
    }
    updateDisplay(){
        this.currentNumbandOperation.innerText = this.currentNumb;
        this.preNumbandOperation.innerText = this.preNumb;
    }
}
export default Calculator;