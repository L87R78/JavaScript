let extensible = (function f() {
	let id = 0;
	
	return class Extensible {
		constructor(){
			this.id = id++;
		}
		extend (template){
			for (let property in template)
			
			if (typeof template[property] === 'function') {
			Extensible.prototype[property] = template[property];
			
		}else{
		this[property] = template[property]
	}//
}
	}}());

//let obj1 = new extensible();
//let obj2 = new extensible();
//let obj3 = new extensible();
//console.log(obj1.id);
//console.log(obj2.id);
//console.log(obj3.id);