let queerEye = [
    {
        nome: 'Antoni Porowski',
        idade: 35,
        natural: 'Canadá',
        residencia: 'Nova York',
        ocupação: 'Chef'
    },
    {
        nome: 'Jonathan Van Ness',
        idade: 32,
        natural: 'USA',
        residencia: 'Los Ageles e Nova York',
        ocupação: 'Hairstylist'
    },
    {
        nome: 'Karamo Brown',
        idade: 29,
        natural: 'USA',
        residencia: 'Los Angeles',
        ocupação: 'Pscicoterapeuta'
    },
    {
        nome: 'Tan France',
        idade: 36,
        natural: 'Inglaterra',
        residencia: 'SAlt Lake City',
        ocupação: 'Stylist'
    },
    {
        nome: 'Bobby Berk',
        idade: 37,
        natural: 'USA',
        residencia: 'Los Angeles',
        ocupação: 'Desing de interiores'
    }
]
console.log (Object.keys(queerEye[0]))
for (i=0; i<5; i++) {
    for (j=0; j < 5; j ++) {
        document.getElementById ("l"+(i+1)+"-"+(j+1)).innerHTML = queerEye[i][Object.keys(queerEye[i])[j]];
        
    }
}

/*
let nome1 = document.querySelector('#n1')
let nome2 = document.querySelector('#n2')
let nome3 = document.querySelector('#n3')
let nome4 = document.querySelector('#n4')
let nome5 = document.querySelector('#n5')

let idade1 = document.querySelector('#i1')
let idade2 = document.querySelector('#i2')
let idade3 = document.querySelector('#i3')
let idade4 = document.querySelector('#i4')
let idade5 = document.querySelector('#i5')

let nat1 = document.querySelector('#nat1')
let nat2 = document.querySelector('#nat2')
let nat3 = document.querySelector('#nat3')
let nat4 = document.querySelector('#nat4')
let nat5 = document.querySelector('#nat5')

let res1 = document.querySelector('#r1')
let res2 = document.querySelector('#r2')
let res3 = document.querySelector('#r3')
let res4 = document.querySelector('#r4')
let res5 = document.querySelector('#r5')

let ocupacao1 = document.querySelector('#o1')
let ocupacao2 = document.querySelector('#o2')
let ocupacao3 = document.querySelector('#o3')
let ocupacao4 = document.querySelector('#o4')
let ocupacao5 = document.querySelector('#o5')

nome1.innerHTML=queerEye[0].nome
nome2.innerHTML=queerEye[1].nome
nome3.innerHTML=queerEye[2].nome
nome4.innerHTML=queerEye[3].nome
nome5.innerHTML=queerEye[4].nome

idade1.innerHTML=queerEye[0].idade
idade2.innerHTML=queerEye[1].idade
idade3.innerHTML=queerEye[2].idade
idade4.innerHTML=queerEye[3].idade
idade5.innerHTML=queerEye[4].idade

nat1.innerHTML=queerEye[0].natural
nat2.innerHTML=queerEye[1].natural
nat3.innerHTML=queerEye[2].natural
nat4.innerHTML=queerEye[3].natural
nat5.innerHTML=queerEye[4].natural

res1.innerHTML=queerEye[0].residencia
res2.innerHTML=queerEye[1].residencia
res3.innerHTML=queerEye[2].residencia
res4.innerHTML=queerEye[3].residencia
res5.innerHTML=queerEye[4].residencia

ocupacao1.innerHTML=queerEye[0].ocupação
ocupacao2.innerHTML=queerEye[1].ocupação
ocupacao3.innerHTML=queerEye[2].ocupação
ocupacao4.innerHTML=queerEye[3].ocupação
ocupacao5.innerHTML=queerEye[4].ocupação*/




