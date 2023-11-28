// var styles = `

// @keyframes firework {
//   0% { transform: translate(var(--x), var(--initialY)); width: var(--initialSize); opacity: 1; }
//   50% { width: 0.5vmin; opacity: 1; }
//   100% { width: var(--finalSize); opacity: 0; }
// }

// /* @keyframes fireworkPseudo {
//   0% { transform: translate(-50%, -50%); width: var(--initialSize); opacity: 1; }
//   50% { width: 0.5vmin; opacity: 1; }
//   100% { width: var(--finalSize); opacity: 0; }
// }
//  */
// .firework,
// .firework::before,
// .firework::after
// {
//   --initialSize: 0.5vmin;
//   --finalSize: 45vmin;
//   --particleSize: 0.2vmin;
//   --color1: yellow;
//   --color2: khaki;
//   --color3: white;
//   --color4: lime;
//   --color5: gold;
//   --color6: mediumseagreen;
//   --y: -30vmin;
//   --x: -50%;
//   --initialY: 60vmin;
//   content: "";
//   animation: firework 2s infinite;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, var(--y));
//   width: var(--initialSize);
//   aspect-ratio: 1;
//   background: 
//     /*
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 0% 0%,
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 100% 0%,
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 100% 100%,
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 0% 100%,
//     */
    
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 50% 0%,
//     radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 100% 50%,
//     radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 50% 100%,
//     radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 0% 50%,
    
//     /* bottom right */
//     radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 80% 90%,
//     radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 95% 90%,
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 90% 70%,
//     radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 100% 60%,
//     radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 55% 80%,
//     radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 70% 77%,
    
//     /* bottom left */
//     radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 22% 90%,
//     radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 45% 90%,
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 33% 70%,
//     radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 10% 60%,
//     radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 31% 80%,
//     radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 28% 77%,
//     radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 13% 72%,
    
//     /* top left */
//     radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 80% 10%,
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 95% 14%,
//     radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 90% 23%,
//     radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 100% 43%,
//     radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 85% 27%,
//     radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 77% 37%,
//     radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 60% 7%,
    
//     /* top right */
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 22% 14%,
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 45% 20%,
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 33% 34%,
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 10% 29%,
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 31% 37%,
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 28% 7%,
//     radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 13% 42%
//     ;
//   background-size: var(--initialSize) var(--initialSize);
//   background-repeat: no-repeat;
// }

// .firework::before {
//   --x: -50%;
//   --y: -30%;
//   --initialY: -50%;
// /*   transform: translate(-20vmin, -2vmin) rotate(40deg) scale(2.0) rotateY(40deg); */
//   transform: translate(-50%, -50%) rotate(40deg) scale(2.0) rotateY(40deg);
// /*   animation: fireworkPseudo 10s infinite; */
// }

// .firework::after {
//   --x: -50%;
//   --y: -50%;
//   --initialY: -50%;
// /*   transform: translate(44vmin, -50%) rotate(170deg) scale(2.0) rotateY(-30deg); */
//   transform: translate(-50%, -50%) rotate(10deg) scale(2.0) rotateY(-30deg);
// /*   animation: fireworkPseudo 10s infinite; */
// }

// .firework:nth-child(2) {
//   --x: 30vmin;
// }

// .firework:nth-child(2),
// .firework:nth-child(2)::before,
// .firework:nth-child(2)::after {
//   --color1: pink;
//   --color2: violet;
//   --color3: fuchsia;
//   --color4: orchid;
//   --color5: plum;
//   --color6: lavender;  
//   --finalSize: 40vmin;
//   left: 35%;
//   top: 50%;
//   animation-delay: -0.25s;
// }

// .firework:nth-child(3) {
//   --x: -30vmin;
//   --y: -50vmin;
// }

// .firework:nth-child(3),
// .firework:nth-child(3)::before,
// .firework:nth-child(3)::after {
//   --color1: cyan;
//   --color2: lightcyan;
//   --color3: lightblue;
//   --color4: PaleTurquoise;
//   --color5: SkyBlue;
//   --color6: lavender;
//   --finalSize: 35vmin;
//   left: 65%;
//   top: 75%;
//   animation-delay: -2.0s;
// }

// .firework:nth-child(4) {
//   --x: -30vmin;
//   --y: -50vmin;
// }

// .firework:nth-child(4),
// .firework:nth-child(4)::before,
// .firework:nth-child(4)::after {
//   --color1: cyan;
//   --color2: lightcyan;
//   --color3: lightblue;
//   --color4: PaleTurquoise;
//   --color5: SkyBlue;
//   --color6: lavender;
//   --finalSize: 30vmin;
//   left: 70%;
//   top: 70%;
//   animation-delay: 5.0s;
// }
// .firework:nth-child(5) {
//   --x: -30vmin;
//   --y: -50vmin;
// }

// .firework:nth-child(5),
// .firework:nth-child(5)::before,
// .firework:nth-child(5)::after {
//   --color1: rgb(231, 144, 144);
//   --color2: rgb(103, 241, 12);
//   --color3: rgb(19, 14, 26);
//   --color4: rgb(200, 42, 78);
//   --color5: rgb(103, 241, 12);
//   --color6: rgb(12, 215, 125);
//   --finalSize: 30vmin;
//   left: 70%;
//   top: 70%;
//   animation-delay: 5.0s;
// }

// .firework:nth-child(5) {
//   --x: -30vmin;
//   --y: -50vmin;
// }

// .firework:nth-child(5),
// .firework:nth-child(5)::before,
// .firework:nth-child(5)::after {
//   --color1: rgb(109, 144, 144);
//   --color2: rgb(99, 104, 84);
//   --color3: rgb(19, 14, 26);
//   --color4: rgb(200, 144, 78);
//   --color5: rgb(300, 154, 151);
//   --color6: rgb(250, 194, 198);
//   --finalSize: 30vmin;
//   left: 70%;
//   top: 70%;
//   animation-delay: 5.0s;
// }

// .firework:nth-child(6) {
//   --x: -30vmin;
//   --y: -50vmin;
// }

// .firework:nth-child(6),
// .firework:nth-child(6)::before,
// .firework:nth-child(6)::after {
//   --color1: rgb(109, 144, 144);
//   --color2: rgb(99, 104, 84);
//   --color3: rgb(19, 14, 26);
//   --color4: rgb(200, 144, 78);
//   --color5: rgb(300, 154, 151);
//   --color6: rgb(250, 194, 198);
//   --finalSize: 30vmin;
//   left: 70%;
//   top: 70%;
//   animation-delay: -0.2s;
// }


// `
// var str = ``;
// let timer;
// let time = 0;


// setInterval(function () {
// 	let styleSheet = document.createElement("style");
// 	if (time < 3) {
// 		time++;
// 		console.log(time);
		
// 		styleSheet.innerText = styles;
// 		document.getElementById("div").appendChild(styleSheet);
// 	} else {
// 		styleSheet.innerText = str;
// 		document.getElementById("div").removeChild(styleSheet);
		
		
// 		return
// 	}
// }, 1000)









