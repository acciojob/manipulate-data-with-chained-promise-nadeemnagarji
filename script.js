
const output = document.getElementById("output")

let arr = [1, 2, 3, 4]
function mapipulation(){
	return new Promise((resolve) =>{
		setTimeout(()=>{
				resolve(arr)
		},3000)
	})
}

function filterOdd(array){
	return new Promise((resolve)=>{
		setTimeout(()=>{
				const filteredArr = array.filter(num=>num % 2 ===0)
			resolve(filteredArr)
		},1000)
		
	})
}

function Multiply(array){
	return new Promise((resolve)=>{
		setTimeout(()=>{
				const filteredArr = array.map(num=>num*2)
			resolve(filteredArr)
		},2000)
		
	})
	
}


mapipulation(arr).then((result)=> filterOdd(result))
 .then((ans)=> Multiply(ans)).then((result)=>{
   output.innerText  = result
 })


