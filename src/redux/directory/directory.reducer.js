const INITIAL_STATE = {
    sections: [{
        title: 'coffee',
        imageUrl: 'https://www.itl.cat/pngfile/big/11-113886_coffee-wallpaper-best-pictures-of-coffee.jpg',
        id: 1,
        linkUrl: 'menu/coffee'
    },
    {
        title: 'cold drinks',
        imageUrl: 'https://image.freepik.com/free-photo/frappe-coffee-wooden-table_144627-17435.jpg',
        id: 2,
        linkUrl: 'menu/cold'
    },
    {
        title: 'desserts',
        imageUrl: 'https://image.freepik.com/free-photo/croissant-basket-with-cloth-wooden-table-flat-lay_176474-8128.jpg',
        id: 3,
        linkUrl: 'menu/desserts'
    },
    {
        title: 'pasta and sandwhich',
        imageUrl: 'https://media.timeout.com/images/105569262/image.jpg',
        id: 4,
        linkUrl: 'menu/pasta'
    },
    {
        title: 'special drinks',
        imageUrl: 'https://image.freepik.com/free-photo/mojito-cocktail-wooden-table_1150-18404.jpg',
        id: 5,
        linkUrl: 'menu/special'
    },
]

}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer