// A mock function to mimic making an async request for data
export function fetchProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilter(filter) {
  let queryString = ''
  for( let key in filter){
    queryString+=`${key}=${filter[key]}&`
  }
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8000/products?'+ queryString);
    const data = await response.json();
    resolve({ data });
  });
}

export function sortProducts(sort) {
  let queryString = ''
  for( let key in sort){
    queryString+=`${key}=${sort[key]}&`
  }
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8000/products?'+ queryString);
    const data = await response.json();
    resolve({ data });
  });
}
