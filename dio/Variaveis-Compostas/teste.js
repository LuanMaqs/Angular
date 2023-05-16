let num = [11, 4, 8]

// console.log(num)
// num.sort()
// num.push(1)
// console.log(num)
// console.log(`O vetor tem ${num.length} posições`)
// console.log(`Nosso vetor é o ${num[0]} `)

// for (let pos = 0; pos < num .length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]} `)
    
// }

 
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]} `)
}