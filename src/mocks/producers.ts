const green = require('../assets/produtores/green.png');
const salad = require('../assets/produtores/salad.png');
const grow = require('../assets/produtores/grow.png');
const potager = require('../assets/produtores/potager.png');
const jennyJack = require('../assets/produtores/jenny-jack.png');

// Verduras
const aspargos = require('../assets/verduras/Aspargos.png');
const tomate = require('../assets/verduras/Tomate.png');
const brocolis = require('../assets/verduras/Brócolis.png');
const batata = require('../assets/verduras/Batata.png');
const pepino = require('../assets/verduras/Pepino.png');
const abobora = require('../assets/verduras/Abóbora.png');
const cenoura = require('../assets/verduras/Cenouras.png');
const cenoura2 = require('../assets/verduras/Cenouras2.png');
const verduras = require('../assets/verduras/Verduras.png');

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const producers = {
    list: [
        {
            id: 1,
            name: "Green",
            image: green,
            distance: randomNumber(1, 500),
            stars: randomNumber(1, 5),
            cestas: [
                {
                    details: {
                        name: "Brócolis e Pepino",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: pepino
                    },
                    items: [
                        {
                            name: "Brócolis",
                            image: brocolis,
                        },
                        {
                            name: "Pepino",
                            image: pepino,
                        },
                    ]
                },
                {
                    details: {
                        name: "Brócolis",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",

                        image: brocolis
                    },
                    items: [
                        {
                            name: "Brócolis",
                            image: brocolis,
                        },
                        {
                            name: "Tomate",
                            image: tomate,
                        },
                        {
                            name: "Batata",
                            image: batata,
                        },
                        {
                            name: "Abobora",
                            image: abobora,
                        },
                        {
                            name: "Pepino",
                            image: pepino,
                        },
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Salad",
            image: salad,
            distance: randomNumber(1, 500),
            stars: randomNumber(1, 5),
            cestas: [
                {
                    details: {
                        name: "Salada completa",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",

                        image: verduras
                    },
                    items: [
                        {
                            name: "Tomate",
                            image: tomate,
                        },
                        {
                            name: "Brócolis",
                            image: brocolis,
                        },
                        {
                            name: "Pepino",
                            image: pepino,
                        },
                    ]
                },
                {
                    details: {
                        name: "Tomate e pepino",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",

                        image: tomate
                    },
                    items: [
                        {
                            name: "Tomate",
                            image: tomate,
                        },
                        {
                            name: "Pepino",
                            image: pepino,
                        },
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "Jenny Jack Farm",
            image: jennyJack,
            distance: randomNumber(1, 500),
            stars: randomNumber(1, 5),
            cestas: [
                {
                    details: {
                        name: "Batata",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",

                        image: batata
                    },
                    items: [
                        {
                            name: "Batata",
                            image: batata,
                        },
                    ]
                },
                {
                    details: {
                        name: "Tomate e Brócolis",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",

                        image: brocolis
                    },
                    items: [
                        {
                            name: "Tomate",
                            image: tomate,
                        },
                        {
                            name: "Brócolis",
                            image: brocolis,
                        },
                    ]
                }
            ]
        },
        {
            id: 4,
            name: "Grow",
            image: grow,
            distance: randomNumber(1, 500),
            stars: randomNumber(1, 5),
            cestas: [
                {
                    details: {
                        name: "Abobora e Aspargos",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",

                        image: aspargos
                    },
                    items: [
                        {
                            name: "Abóbora",
                            image: abobora,
                        },
                        {
                            name: "Aspargos",
                            image: aspargos,
                        }
                    ]
                },
                {
                    details: {
                        name: "Tomate e Abobora",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",

                        image: abobora
                    },
                    items: [
                        {
                            name: "Tomate",
                            image: tomate,
                        },
                        {
                            name: "Abóbora",
                            image: abobora,
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            name: "Potager",
            image: potager,
            distance: randomNumber(1, 500),
            stars: randomNumber(1, 5),
            cestas: [
                {
                    details: {
                        name: "Pepinos",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",

                        image: pepino
                    },
                    items: [
                        {
                            name: "Pepino",
                            image: pepino,
                        },
                    ]
                },
                {
                    details: {
                        name: "Brócolis, Aspargos e Cenoura",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",

                        image: cenoura2
                    },
                    items: [
                        {
                            name: "Brócolis",
                            image: brocolis,
                        },
                        {
                            name: "Aspargos",
                            image: aspargos,
                        },
                        {
                            name: "Cenoura",
                            image: cenoura,
                        }
                    ]
                }
            ]
        }
    ]
};

export default producers;