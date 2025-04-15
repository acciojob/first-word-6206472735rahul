function firstWord(s) {
  // your code here
	// base condition
	if(s==="") return "";
	const newStr= s.trim().split(" ")[0];
	return newStr;
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
