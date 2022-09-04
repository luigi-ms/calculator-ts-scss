const screenEl: HTMLInputElement = document.getElementById("screen") as HTMLInputElement,
	numericButtons: NodeList = document.querySelectorAll(".numeric-btn") as NodeList,
	operationButtons: NodeList = document.querySelectorAll(".operation-btn") as NodeList;

let expr: string = "";

function calculate(){
	let sum = (x: number, y: number ) => { return x + y },
		sub = (x: number, y: number) => { return x - y },
		mul = (x: number, y: number) => { return x * y },
		div = (x: number, y: number) => { return x / y };
	
	let nums: string[] = expr.split(/\D/),
		opers: string[] = expr.split(/\d/);

	let front: string = nums.shift();
	for(let index of opers){
		if(index === "+"){
			let second: string = nums.shift();
			let result: number = sum(Number(front), Number(second));
			nums.unshift(result.toString());
			front = nums.shift();
			console.log(nums);
		}
	}
}

function handleClick(this: HTMLElement){
	if(this.id === "equalBtn"){
		calculate();
	}else{
		expr += this.textContent;
		screenEl.textContent = expr;
	}
}

numericButtons.forEach((btn: HTMLButtonElement) => {
	btn?.addEventListener("click", handleClick);
});

operationButtons.forEach((btn: HTMLButtonElement) => {
	btn?.addEventListener("click", handleClick);
});
