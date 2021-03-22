import {createSelector} from "reselect";

const selectShop = state => {
  console.log(state)
  return state.shop;
}

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => {
    console.log(collectionUrlParam)
    console.log(collections);
    return collections[collectionUrlParam];
  }
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)
