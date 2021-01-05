import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'coffee',
                imageUrl: 'https://www.itl.cat/pngfile/big/11-113886_coffee-wallpaper-best-pictures-of-coffee.jpg',
                id: 1
            },
            {
                title: 'cold drinks',
                imageUrl: 'https://image.freepik.com/free-photo/frappe-coffee-wooden-table_144627-17435.jpg',
                id: 2
            },
            {
                title: 'desserts',
                imageUrl: 'https://image.freepik.com/free-photo/croissant-basket-with-cloth-wooden-table-flat-lay_176474-8128.jpg',
                id: 3
            },
            {
                title: 'pasta and sandwhich',
                imageUrl: 'https://media.timeout.com/images/105569262/image.jpg',
                id: 4
            },
            {
                title: 'special drinks',
                imageUrl: 'https://image.freepik.com/free-photo/mojito-cocktail-wooden-table_1150-18404.jpg',
                id: 5
            },
        ]

        }
    }

    render() {
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }

            </div>
        )
    }


}

export default Directory;