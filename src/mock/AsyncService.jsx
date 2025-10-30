const productsList = [
    {
        id: '01',
        name: 'Florero Julia',
        description: 'Florero de acrílico transparente en tono azulado',
        stock: 15,
        price: 25000,
        img: 'https://i.postimg.cc/XY7XTpnR/Deco-1.png',
        category: 'Deco',
    },
    {
        id: '02',
        name: 'Portavelas Midnight',
        description: 'Portavelas de cerámica negro',
        stock: 20,
        price: 33000,
        img: 'https://i.postimg.cc/52YWYVgt/Deco-3.png',
category: 'Deco',
    },
    {
        id: '03',
        name: 'Reloj Cubo',
        description: 'Reloj digital blanco en forma de cubo',
        stock: 15,
        price: 45000,
        img: 'https://i.postimg.cc/9fdSZF73/Deco-4.png',
category: 'Deco',
    },
    {
        id: '04',
        name: 'Florero New Day',
        description: 'Florero de vidrio',
        stock: 10,
        price: 39000,
        img: 'https://i.postimg.cc/3NcbYkPz/Deco-5.png',
category: 'Deco',
    },
    {
        id: '05',
        name: 'Cuadro Nature',
        description: 'Lámina de 50x30cm encuadrada en madera clara',
        stock: 13,
        price: 35000,
        img: 'https://i.postimg.cc/HnVBZpVw/Deco-6.png',
category: 'Deco',
    },
    {
        id: '06',
        name: 'Reloj Day',
        description: 'Reloj con detalles en color bronce',
        stock: 30,
        price: 43000,
        img: 'https://i.postimg.cc/qBzPZ0fK/Deco-7.png',
category: 'Deco',
    },
    {
        id: '07',
        name: 'Gatito Good Luck',
        description: 'Adorno de gatito en cerámica',
        stock: 41,
        price: 20000,
        img: 'https://i.postimg.cc/HxjhK0NV/Deco-8.png',
category: 'Deco',    },
    {
        id: '08',
        name: 'Lámpara Olivia',
        description: 'Lámpara estilo oficina en negro',
        stock: 20,
        price: 70000,
        img: 'https://i.postimg.cc/W4Y9MF4t/Iluminacio-n-1.png',
        category: 'Iluminación',
    },
    {
        id: '09',
        name: 'Lámpara Vera',
        description: 'Lámpara con detalles florales',
        stock: 13,
        price: 75000,
        img: 'https://i.postimg.cc/7YXSGvhf/Iluminacio-n-2.png',
        category: 'Iluminación',
    },
    {
        id: '10',
        name: 'Lámpara Simona',
        description: 'Lámpara amarilla tipo hongo',
        stock: 18,
        price: 65000,
        img: 'https://i.postimg.cc/9FX7jxpG/Iluminacio-n-3.png',
        category: 'Iluminación',
    },
    {
        id: '11',
        name: 'Lámpara Tilda',
        description: 'Lámpara estilo oficina en blanco',
        stock: 22,
        price: 70000,
        img: 'https://i.postimg.cc/2y036DGD/Iluminacio-n-4.png',
        category: 'Iluminación',
    },
    {
        id: '12',
        name: 'Lámpara Lina',
        description: 'Lámpara de metal',
        stock: 35,
        price: 74000,
        img: 'https://i.postimg.cc/1tH3CQLQ/Iluminacio-n-6.png',
        category: 'Iluminación',
    },
    {
        id: '13',
        name: 'Lámpara Renata',
        description: 'Lámpara de oficina tipo vintage',
        stock: 41,
        price: 90000,
        img: 'https://i.postimg.cc/7YbZVjXD/Iluminacio-n-7.png',
        category: 'Iluminación',
    },
    {
        id: '14',
        name: 'Sillón Emilia',
        description: 'Sillón individual tipo vintage forrado en cuero marrón',
        stock: 10,
        price: 170000,
        img: 'https://i.postimg.cc/MpVx3wQL/Sillas-y-sillones-1.png',
        category: 'Sillas y sillones',
    },
    {
        id: '15',
        name: 'Sillón Benjamín',
        description: 'Sillón individual tipo vintage de terciopelo verde oscuro',
        stock: 14,
        price: 150000,
        img: 'https://i.postimg.cc/fRNTNkDS/Sillas-y-sillones-2.png',
        category: 'Sillas y sillones',
    },
    {
        id: '16',
        name: 'Silla Gael',
        description: 'Silla de madera negra',
        stock: 20,
        price: 100000,
        img: 'https://i.postimg.cc/K8xFWVDh/Sillas-y-sillones-4.png',
        category: 'Sillas y sillones',
    },
    {
        id: '17',
        name: 'Silla Teo',
        description: 'Silla de madera oscura con asiento forrado en cuero negro',
        stock: 25,
        price: 110000,
        img: 'https://i.postimg.cc/Mp9kFGG4/Sillas-y-sillones-5.png',
        category: 'Sillas y sillones',
    },
    {
        id: '18',
        name: 'Sillón Lucy',
        description: 'Sillón individual forrado en terciopelo amarillo',
        stock: 11,
        price: 144000,
        img: 'https://i.postimg.cc/NjfSmwx2/Sillas-y-sillones-6.png',
        category: 'Sillas y sillones',
    },
    {
        id: '19',
        name: 'Sillón Bianca',
        description: 'Sillón individual forrado en terciopelo color mostaza',
        stock: 17,
        price: 136000,
        img: 'https://i.postimg.cc/3J3cQHzT/Sillas-y-sillones-7.png',
        category: 'Sillas y sillones',
    },
];

export const getProducts = () => {
    let success = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve(productsList);
            } else {
                reject('Un error ha ocurrido. Por favor, intenténlo más tarde')
            }
        }, 1000)
    })
};

export const getSingleProduct = (id) => {
    let success = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                let product = productsList.find((product) => product.id === id)
                resolve(product);
            } else {
                reject('Un error ha ocurrido. Por favor, intenténlo más tarde')
            }
        }, 1000)
    })
};
