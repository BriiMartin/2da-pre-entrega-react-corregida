export const listadoProductos = [
    {
        id: 1,
        category: "Notbooks",
        description: "¡Bienvenidos al futuro de la informática portátil con la Notebook Asus Core I3 Ultrabook 4gb 15.6 + Ssd 240gb Gamer",
        img: "https://http2.mlstatic.com/D_Q_NP_2X_998484-MLA43804999375_102020-R.webp 2x",
        name: "Notebook Asus",
        price: 528.995,
        stock: 2
    },
    {
        id: 2,
        category: "Notbooks",
        description: "Notebook ASUS Zenbook 14 14” RYZEN 5 UM3402YA-KP373W LPDDR4X 16GB",
        img: "https://http2.mlstatic.com/D_Q_NP_2X_858460-MLA75127053917_032024-R.webp 2x",
        name: "Notebook Asus Zenbook",
        price: 2085449,
        stock: 4
    },
    {
        id: 3,
        category: "Consolas",
        description: "Experimenta una velocidad impresionante de carga con una inmersión más intensa gracias a la SSD de ultra alta velocidad, compatible con retroalimentación háptica, gatillos adaptables y audio 3D, y una generación de increíbles juegos de PlayStation®.",
        img: "https://http2.mlstatic.com/D_Q_NP_970261-MLU74424378377_022024-R.webp",
        name: "Sony Playstation 5 ",
        price: 1149999,
        stock: 2
    },
    {
        id: 4,
        category: "Consolas",
        description: "Únete a la batalla sin fin entre los Altos Cielos y los Infiernos Ardientes con Xbox Series X – Diablo® IV Bundle. Forja tu camino a través de las tierras corruptas de Sanctuary con 12 teraflops de poder de procesamiento gráfico bruto",
        img: "https://http2.mlstatic.com/D_Q_NP_634307-MLU73665058671_122023-R.webp",
        name: "Consola Xbox Series",
        price: 74999,
        stock: 2
    },
    {
        id: 5,
        category: "Auriculares",
        description: "Auricular Gamer Moderno de ultima generación con sonido Surround envolvente HD que ofrece una gama de sonidos vívidos y claros que otorgarán una grán experiencia al momento de jugar.",
        img: "https://http2.mlstatic.com/D_Q_NP_2X_850124-MLA49496510445_032022-R.webp 2x",
        name: "Auricular Gamer Nw400",
        price: 129999,
        stock: 7
    },
    {
        id: 6,
        category: "Auriculares",
        description: "Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida gamer VSG Kuiper",
        img: "https://http2.mlstatic.com/D_Q_NP_945675-MLA74806227201_022024-R.webp",
        name: "Auriculares gamer VSG Kuiper",
        price: 28699,
        stock: 7
    }
]

export const getProducts = (idCategory) => {

    const listado = idCategory ? listadoProductos.filter(unProducto => unProducto.category === idCategory) : listadoProductos

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            listado.length > 0 ?
                resolve(listado)
                :
                reject("No hay datos")
        }, 500
        )
    })
}


export const getProductById = (id) => {
    const product = listadoProductos.find(unProducto => unProducto.id === parseInt(id));

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product ? resolve(product) : reject("Producto no encontrado");
        }, 500);
    });
};