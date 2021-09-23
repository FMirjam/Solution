let checkBox = document.querySelector('.sale');
let selectOption = document.querySelector('.order');
let productList = document.querySelectorAll('.products')[0];
let childrenOfProductList = productList.children;
let sortedList = [];

checkBox.addEventListener('change', (event) => {
  const isChecked = event.target.checked;
  if (isChecked) {
    for (let i = 0; i < childrenOfProductList.length; i++) {
      if (childrenOfProductList[i].children[1].children.length === 3) {
        childrenOfProductList[i].classList.replace('product', 'discount');
      }
    }

    for (let j = 0; j < childrenOfProductList.length; j++) {
      if (childrenOfProductList[j].classList.contains('product')) {
        productList.removeChild(childrenOfProductList[j]);
      }
    }
    return productList;
  }
  if (!isChecked) {
    location.reload();
  }
});

selectOption.addEventListener('change', (event) => {
  if (event.target.value === '0') {
    createSortedList();
    sortedList.sort((a, b) =>
      parseInt(a.children[1].children[1].innerHTML) >
      parseInt(b.children[1].children[1].innerHTML)
        ? 1
        : -1
    );
    appendSortedList();
  }
  if (event.target.value === '1') {
    createSortedList();
    sortedList.sort((a, b) =>
      parseInt(a.children[1].children[1].innerHTML) <
      parseInt(b.children[1].children[1].innerHTML)
        ? 1
        : -1
    );
    appendSortedList();
  }
  if (event.target.value === '2') {
    createSortedList();
    sortedList.sort((a, b) =>
      a.children[1].children[0].innerHTML > b.children[1].children[0].innerHTML
        ? 1
        : -1
    );
    appendSortedList();
  }
  if (event.target.value === '3') {
    createSortedList();
    sortedList.sort((a, b) =>
      a.children[1].children[0].innerHTML < b.children[1].children[0].innerHTML
        ? 1
        : -1
    );
    appendSortedList();
  }
});

function createSortedList() {
  const childNodesOfProductList = productList.childNodes;
  for (let i in childNodesOfProductList) {
    if (childNodesOfProductList[i].nodeType === 1)
      [sortedList.push(childNodesOfProductList[i])];
  }
}

function appendSortedList() {
  for (let i = 0; i < sortedList.length; i++) {
    productList.appendChild(sortedList[i]);
  }
}
