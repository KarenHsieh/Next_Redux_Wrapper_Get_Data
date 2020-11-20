const resultsActionTypes = {
  GET_PRODUCTS: 'GET_PRODUCTS',

}

export const fetchProductsBegin = results => ({
  type: 'FETCH_DATA_BEGIN',
  payload: {
    results,
  },
});

// export const getProducts = () => ({
//   type: resultsActionTypes.GET_PRODUCTS
// })

export const fetchProductsSuccess = (results) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: {
    results,
  }
})

// 先不管條件，先抓到所有商品