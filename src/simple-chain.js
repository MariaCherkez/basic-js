const CustomError = require("../extensions/custom-error");

const chainMaker = { 
  chain: [],	
  
  getLength() {
	return this.chain.length;
  },
  addLink(value) {    
  if (value !== undefined)
	this.chain.push('( ' + String(value) + ' )'); 
  else 
	this.chain.push('(  )');  
	
  return this;
  },
  removeLink(position) {   
  if (typeof position != 'number' || String(position).indexOf(".") != -1 || this.chain[position-1] == undefined || position < 1) { 
	this.chain = [];
	throw new Error;
  } 
   this.chain.splice(position-1, 1); 
   return this;
  },
  reverseChain() {  
   this.chain.reverse();
   return this;
  },
  finishChain() {  
	let res = this.chain.join('~~'); 
	this.chain = []; 
	return res; 
  }
};

module.exports = chainMaker;
