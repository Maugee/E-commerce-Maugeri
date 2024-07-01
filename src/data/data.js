const productos = [
    {
        id: "h1",
        nombre: "Hamburguesa chica",
        descripcion: "doble, triple",
        stock: 6,
        categoria: "hamburguesa",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/640px-Cheeseburger.jpg",
        precio: 400,
    },
    {
        id: "p1",
        nombre: "Pizza chica",
        descripcion: "grande, morron, jamon",
        stock: 4,
        categoria: "pizza",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsBI7wmPiLZMdDVCCufKT2J0gBjr_M9zlnA&s",
        precio: 400,
    },
    {
        id: "l1",
        nombre: "Lomito chico",
        descripcion: "carne, pollo",
        stock: 4,
        categoria: "lomitos",
        imagen: "https://cdn.batitienda.com/baticloud/images/product_0b76ed54cd9f48e381e0663ef815c981_637502031612469862_0_m.png",
        precio: 400,
    },
    {
        id: "h2",
        nombre: "Hamburguesa mediana",
        descripcion: "doble, triple",
        stock: 5,
        categoria: "hamburguesa",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/640px-Cheeseburger.jpg",
        precio: 500,
    },
    {
        id: "p2",
        nombre: "Pizza mediana",
        descripcion: "grande, morron, jamon",
        stock: 5,
        categoria: "pizza",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsBI7wmPiLZMdDVCCufKT2J0gBjr_M9zlnA&s",
        precio: 500,
    },
    {
        id: "l2",
        nombre: "Lomito mediano",
        descripcion: "carne, pollo",
        stock: 5,
        categoria: "lomitos",
        imagen: "https://cdn.batitienda.com/baticloud/images/product_0b76ed54cd9f48e381e0663ef815c981_637502031612469862_0_m.png",
        precio: 500,
    },
    {
        id: "h3",
        nombre: "Hamburguesa grande",
        descripcion: "doble, triple",
        stock: 4,
        categoria: "hamburguesa",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/640px-Cheeseburger.jpg",
        precio: 600,
    },
    {
        id: "p3",
        nombre: "Pizza grande",
        descripcion: "grande, morron, jamon",
        stock: 6,
        categoria: "pizza",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsBI7wmPiLZMdDVCCufKT2J0gBjr_M9zlnA&s",
        precio: 600,
    },
    {
        id: "l3",
        nombre: "Lomito grande",
        descripcion: "carne, pollo",
        stock: 6,
        categoria: "lomitos",
        imagen: "https://cdn.batitienda.com/baticloud/images/product_0b76ed54cd9f48e381e0663ef815c981_637502031612469862_0_m.png",
        precio: 600,
    },
]


const obtenerProductos = () =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}

export { obtenerProductos }