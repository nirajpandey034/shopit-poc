export const dataFormatter = (data) => {
  let finalData = [];
  finalData = data.map((ele) => {
    let id = ele.id;
    let headerImg = ele.attributes.headerImg.data.attributes.url;
    let headerText = ele.attributes.headerText;
    let price = ele.attributes.price;
    let offerText = ele.attributes.offerText;
    let mainFeature = ele.attributes.mainFeature;

    let attributes = [];
    let obj = ele.attributes.attributes;
    Object.keys(obj).forEach(function (key) {
      attributes.push(obj[key]);
    });

    return {
      id: id,
      headerImg: headerImg,
      attributes: attributes,
      headerText: headerText,
      price: price,
      offerText: offerText,
      mainFeature: mainFeature,
    };
  });
  return finalData;
};

export const isProductInCart = (productList, productId) => {
  if(productList.length === 0) return false;
  if(productList.find((prod)=>{return prod.id === productId}))
    return true;
  else 
    return false;
}
