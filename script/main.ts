const screenEl: HTMLOutputElement = document.getElementById("screen") as HTMLOutputElement,
	buttons: NodeList = document.querySelectorAll("button") as NodeList;

const sum = (x: number, y: number ) => { return x + y },
	sub = (x: number, y: number) => { return x - y },
	mul = (x: number, y: number) => { return x * y },
	div = (x: number, y: number) => { return x / y };	

let expr: string = "";

function calculate(): string{
	let nums: string[] = expr.split(/\D/),
		oper: string[] = expr.split(/\d/);

	oper = oper.filter((op: string) => { return op !== "" });
	
	if(oper.length > 1){
		return "Invalid Expression";
	}

	const total: string = nums.reduce((a: string, b: string) => {
	 if(oper[0] === "+"){
		return sum(Number(a), Number(b)).toString();
	 }else if(oper[0] === "-"){
		 return sub(Number(a), Number(b)).toString();
	 }else if(oper[0] === "×"){
		 return mul(Number(a), Number(b)).toString();
	 }else if(oper[0] === "÷"){
		 return div(Number(a), Number(b)).toString();
	 }else{
		 return "Invalid Operator";
	 }
	});
	return total;
}

function handleClick(this: HTMLElement): void{
	if(this.id === "equalBtn"){
		expr = calculate();
		if(expr === undefined){
			expr = "Error";
		}
		screenEl.textContent = expr;
	}else if(this.id === "clearBtn"){
		screenEl.textContent = "0";
		expr = ""
	}else{
		expr += this.textContent;
		screenEl.textContent = expr;
	}
}

buttons.forEach((btn: HTMLButtonElement) => {
	btn?.addEventListener("click", handleClick);
});
