var names=new Array();
names[0]="Yaakov";
names[1]="Jenab";
names[2]="Joey";
names[3]="john";
names[4]="Fatema";
names[5]="Sarah";
names[6]="Paul";
names[7]="Zainab";
names[8]="Arva";
names[9]="jimmy";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
		console.log("Goodbye " + names[i])
	}
	else{
		console.log("Hello " + names[i])
	}
}