//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");
/** @type {CanvasRenderingContext2D} */
//@ts-ignore
const ctx = canvas.getContext("2d");
 canvas.width = 2042;
 canvas.height = 1532;
//  canvas.width = 3000;
//  canvas.height = 3000;

let width = 100;
let height = 100;

var shadowFredImg = document.getElementById("fredSprites");

var extraSpritesImg = document.getElementById("extraSprites");

var coverImg = document.getElementById("cover");

var fredRoomImg1 = document.getElementById("fredRoom");

var bonnieImg = document.getElementById("BonnieSprites");



class BonnieMove {
	constructor() {

		
		this.image = bonnieImg
		this.x = 475;

		this.y = 214;

		this.sx = 0;

		this.sy = 0;

		this.sWidth = 194;

		this.sHeight = 198;

		this.width = 400;

		this.height = 400;
		
	}
	

	move(xMod, yMod, sxMod, syMod) {
		this.x = this.x + xMod;
		this.y = this.y + yMod;

		
		this.sy = syMod;
		
	  

		


		
		
// console.log(this.x, this.y)
	};

	draw(){ if (bonnieImg !== null) {
			// @ts-ignore
			ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.y, this.width, this.height)
		}}
	}

	class error {
		constructor() {
			this.image = extraSpritesImg;
			this.x = 0;
			this.y = 0;
			this.sx = 801;
			this.sy = 5560;
			
			this.width = 400;
			this.height = 200;
			this.sWidth = 199;
			this.sHeight = 96;
		}
		 moveFrame(xMod, yMod, sxMod, syMod) {
			this.x = this.x + xMod;
			this.y = this.y + yMod;
			this.sx = this.sx + sxMod;
			this.sy = this.sy + syMod;
			
			
			
	
		}
		draw() {
			if (coverImg !== null)
			// @ts-ignore
			{ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.y, this.width, this.height)}
		}
	}

	class followMe {
		constructor() {
			this.image = extraSpritesImg;
			this.x = 0;
			this.y = 0;
			this.sx = 801;
			this.sy = 5323;
			
			this.width = 600;
			this.height = 100;
			this.sWidth = 574;
			this.sHeight = 73;
		}
		 moveFrame(xMod, yMod, sxMod, syMod) {
			this.x = this.x + xMod;
			this.y = this.y + yMod;
			this.sx = this.sx + sxMod;
			this.sy = this.sy + syMod;
			
			
			
	
		}
		draw() {
			if (coverImg !== null)
			// @ts-ignore
			{ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.y, this.width, this.height)}
		}
	}
	
class cover {
	constructor() {
		this.image = coverImg;
		this.x = 0;
		this.y = 0;
		this.sx = 2045;
		this.sy = 0;
		
		this.width = canvas.width;
		this.height = canvas.height;
		this.sWidth = 889;
		this.sHeight = 586;
	}
	 moveFrame(xMod, yMod, sxMod, syMod) {
		this.x = this.x + xMod;
		this.y = this.y + yMod;
		this.sx = this.sx + sxMod;
		this.sy = this.sy + syMod;
		
		
		

	}
	draw() {
		if (coverImg !== null)
		// @ts-ignore
		{ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.y, this.width, this.height)}
	}
}


class Room1 {
	constructor() {
		this.image = fredRoomImg1;
		this.x = 0;
		this.y = 0;
		
		this.sx = 418;
		this.sy = 180;
		this.sWidth = 176;
		this.sHeight = 133;
		this.width = canvas.width;
		this.height = canvas.height;
	}
	moveRoom(xMod, yMod, sxMod, syMod) {
		this.x = this.x + xMod;
		this.y = this.y + yMod;
		this.sx = this.sx + sxMod;
		this.sy = this.sy + syMod;
	}
	draw() {
		if (fredRoomImg1 !== null) {
			// @ts-ignore
			ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.y, this.width, this.height)}
	}
}


class shadowFreddyMove {
	constructor() {

		this.image = shadowFredImg
		this.x = 785;

		this.y = 500;

		this.sx = 0;

		this.sy = 0;

		this.sWidth = 194;

		this.sHeight = 198;

		this.width = 400;

		this.height = 400;
		
	}
	

	move(xMod, yMod, sxMod, syMod) {
		this.x = this.x + xMod;
		this.y = this.y + yMod;
		
		
		this.sy = syMod;

	};

	draw() {
			// @ts-ignore
			ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.y, this.width, this.height)
		}
	}

	let building1 = new Room1 ();
	building1.draw();
	
	let shadowFred = new shadowFreddyMove ();
	shadowFred.draw();
	
	let Bonnie = new BonnieMove ();
	Bonnie.draw();

	let makeCover = new cover ();
	makeCover.draw();

	let err = new error ();
	err.draw();
	let shadowTalk = new followMe ();
	shadowTalk.draw();
	

	
window.addEventListener("keypress", (event) => {
	let pressedKey = event.key.toUpperCase();
	if (pressedKey === "D") {
		Bonnie.move(5, 0, 0, 400);	
	}
	if (pressedKey === "A") {
		Bonnie.move(-5, 0, 0, 200);
		
	}
	if (pressedKey === "W") { 
		Bonnie.move(0, -5, 0, 600);	
	}
	if (pressedKey === "S") {
		Bonnie.move(0, 5, 0, 0);
	}
});

		

	

		

let collumNum = 0;
let rowNum = 0;
let roomNum = 0;



			let update = (timestamp) => {				
				ctx.clearRect(0, 0, canvas.width, canvas.height)
	if(building1.sy === 47){rowNum = 0}
	if(building1.sy === 180){rowNum = 1}
	if(building1.sy === 313){rowNum = 2}
	if(building1.sy === 446){rowNum = 3}
	if(building1.sy === 579){rowNum = 4}

	if(building1.sy === 66){collumNum = 1}
	if(building1.sx=== 242){collumNum = 2}
	if(building1.sx === 418){collumNum = 3}
	if(building1.sx === 594){collumNum = 4}
	if(building1.sx === 770){collumNum = 5}
	

	
	const eventRoomChange = new Event("roomChange", {}); 

				if(Bonnie.sx > 200)
				{Bonnie.sx = 0};

				if(shadowFred.sx > 200)
				{shadowFred.sx = 0};

	
				if (Bonnie.x > 2042){Bonnie.x = 0; Bonnie.y = Bonnie.y; building1.sx = building1.sx + 176; dispatchEvent(eventRoomChange)}
				if (Bonnie.x < -100){Bonnie.x = 2042; Bonnie.y = Bonnie.y; building1.sx = building1.sx - 176; dispatchEvent(eventRoomChange)}
				if (Bonnie.y > 1532){Bonnie.y = 0; Bonnie.x = Bonnie.x; building1.sy = building1.sy + 133; dispatchEvent(eventRoomChange)}
				if (Bonnie.y < 0){Bonnie.y = 1532; Bonnie.x = Bonnie.x; building1.sy = building1.sy - 133; dispatchEvent(eventRoomChange)}
				
				if (shadowFred.x > 2042){shadowFred.x = 0, shadowFred.y = shadowFred.y}
				if (shadowFred.x < -100){shadowFred.x = 2042, shadowFred.y = shadowFred.y}
				if (shadowFred.y > 1532){shadowFred.y = 0, shadowFred.x = shadowFred.x}
				if (shadowFred.y < 0){shadowFred.y = 1532, shadowFred.x = shadowFred.x}
				console.log(building1.sx, building1.sy, "Building room cord", roomNum)
		let erro = false;
		if(roomNum === 0 ){erro = true}	else {erro = false}
		
	
	   building1.draw();
	   shadowFred.draw();
		Bonnie.draw();
		if(erro === false){shadowTalk.draw()};
		if(erro === true){shadowTalk.y = -100} else {shadowTalk.y = 0};
		if(roomNum === 0){	err.draw();};
		makeCover.draw();
		
		
		requestAnimationFrame(update)
	
			}
			requestAnimationFrame(update) 
const spriteChangerBonnie = () => {
	Bonnie.sx = Bonnie.sx +200
}

setInterval(spriteChangerBonnie, 500)

const spriteChangerShadowFred = () => {
	shadowFred.sx = shadowFred.sx +200
	
}
const coverMove = () => {
	makeCover.sx = makeCover.sx +200
	
}


let searching = "true";

setInterval(spriteChangerShadowFred, 500)


	addEventListener("roomChange", (event) => {
		
		const ShadowFredMoveRight = () => {
			shadowFred.move(+10, +0, +0, +400)
		}
		const ShadowFredMoveLeft = () => {
			shadowFred.move(-10, +0, +0, +200)
		}
		const ShadowFredMoveUp = () => {
			shadowFred.move(+0, -10, +0, +600)
		}
		const ShadowFredMoveDown = () => {
			shadowFred.move(+0, +10, +0, +0)
		}
		
		

	if(collumNum === 5 && rowNum === 0){
		roomNum = 0};

	if(collumNum === 1 && rowNum === 1){
		roomNum = 1};

	if(collumNum === 2 && rowNum === 1){
		roomNum = 2};

	if(collumNum === 3 && rowNum === 1){
		roomNum = 3};

	if(collumNum === 4 && rowNum === 1){
		roomNum = 4};

	if(collumNum === 5 && rowNum === 1){
		roomNum = 5};

	if(collumNum === 2 && rowNum === 2){
		roomNum = 6};

	if(collumNum === 3 && rowNum === 2){
		roomNum = 7};

	if(collumNum === 4 && rowNum === 2){
		roomNum = 8};

	if(collumNum === 5 && rowNum === 2){
		roomNum = 8.5};

	if(collumNum === 2 && rowNum === 3){
		roomNum = 9};

	if(collumNum === 4 && rowNum === 3){
		roomNum = 10};

	if(collumNum === 2 && rowNum === 4){
		roomNum = 11};

	if(collumNum === 3 && rowNum === 4){
		roomNum = 12};

	if(collumNum === 4 && rowNum === 4){
		roomNum = 13};
	


if(roomNum === 1 ){setInterval(ShadowFredMoveRight, 500), console.log("moving right")};

if(roomNum === 2 ){setInterval(ShadowFredMoveRight, 500), console.log("moving right")};

if(roomNum === 3 ){setInterval(ShadowFredMoveRight, 500), console.log("moving right")};

if(roomNum === 4 ){setInterval(ShadowFredMoveRight, 500), console.log("moving right")};

if(roomNum === 5){setInterval(ShadowFredMoveUp, 500), console.log("moving up")};

if(roomNum === 6 ){setInterval(ShadowFredMoveRight, 500), console.log("moving right")};

if(roomNum === 7 ){setInterval(ShadowFredMoveRight, 500), console.log("moving right")};

if(roomNum === 8 ){setInterval(ShadowFredMoveUp, 500), console.log("moving up")};

if(roomNum === 8.5 ){setInterval(ShadowFredMoveUp, 500), console.log("moving up")};

if(roomNum === 9 ){setInterval(ShadowFredMoveDown, 500), console.log("moving down")};

if(roomNum === 10 ){setInterval(ShadowFredMoveUp, 500), console.log("moving up")};

if(roomNum === 11 ){setInterval(ShadowFredMoveRight, 500), console.log("moving right")};

if(roomNum === 12 ){setInterval(ShadowFredMoveRight, 500), console.log("moving right")};

if(roomNum === 13 ){setInterval(ShadowFredMoveUp, 500), console.log("moving up")};
	}
	)
 
