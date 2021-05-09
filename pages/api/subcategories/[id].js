const subcategories = [
    {
        id: 1,
        name: "Развлечения дома",
        isActive: true,
        desc: "Дома с детьми",
        image: "asset/img/noimage.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        id: 2,
        name: "Творчество",
        isActive: true,
        desc: "Дома с детьми",
        image: "asset/img/noimage.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        id: 3,
        name: "Познание",
        isActive: true,
        desc: "Дома с детьми",
        image: "asset/img/noimage.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        id: 4,
        name: "Физическая активность",
        isActive: true,
        desc: "В город с детьми",
        image: "asset/img/noimage.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        id: 5,
        name: "Развлечения в городе",
        isActive: true,
        desc: "В город с детьми",
        image: "asset/img/noimage.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        id: 6,
        name: "Культура и познание",
        isActive: true,
        desc: "В город с детьми",
        image: "asset/img/noimage.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        id: 7,
        name: "Оздоровление",
        isActive: true,
        desc: "На природу с детьми",
        image: "asset/img/noimage.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        id: 8,
        name: "Культура и познание",
        isActive: true,
        desc: "На природу с детьми",
        image: "asset/img/noimage.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        id: 9,
        name: "Аренда домиков",
        isActive: true,
        desc: "На природу с детьми",
        image: "asset/img/noimage.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        id: 10,
        name: "Площадки",
        isActive: true,
        desc: "День рождения ребенка",
        image: "asset/img/noimage.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        id: 11,
        name: "Аниматоры и ведущие",
        isActive: true,
        desc: "День рождения ребенка",
        image: "asset/img/noimage.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        id: 12,
        name: "Идеи подарков",
        isActive: true,
        desc: "День рождения ребенка",
        image: "asset/img/noimage.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
];

export default (req, res) => {
    const { id } = req.query;
    const subcategory = subcategories.find(
        (subcategory) => subcategory.id === Number(id)
    );

    res.json(subcategory);
};
