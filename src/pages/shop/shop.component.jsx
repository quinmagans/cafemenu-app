import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import MENU_DATA from './menu.data'

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: MENU_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return(
            (<div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }

            </div>)
        )
    }
}

export default ShopPage;