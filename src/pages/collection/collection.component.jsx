import React from "react"
import { connect } from "react-redux"

import { selectShopCollection } from "../../redux/shop/shop.selectors"

import "./collection.styles.scss"

const CollectionPage = ({ collection }) => (
    <div className="collection-page">
        <h2>Collection page</h2>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})
  
export default connect(mapStateToProps)(CollectionPage)
