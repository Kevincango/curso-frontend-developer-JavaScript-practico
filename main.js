const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardContainer = document.querySelector('.cards-container')
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const productList = [];

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHam.addEventListener('click',toggleHamMenu);
menuCarrito.addEventListener('click',toggleMenuCarrito);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleHamMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
    //aside.classList.add('inactive');
}

function toggleMenuCarrito(){
    const isHamMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isHamMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
    //mobileMenu.classList.add('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

productList.push ({
    name:'Bike',
    price: 12700,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    img: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    img: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    img: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    img: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    img: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    img: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

function renderProducts(arr){
    for( product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src',product.img);
        ProductImg.addEventListener('click',openProductDetailAside);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
     
        const productInfoDiv = document.createElement('div');
     
        productInfo.appendChild(productInfoDiv);
     
        const productPrice = document.createElement('p');
        productPrice.innerText = product.price;
     
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        const productInfoFigure = document.createElement('figure');
        const productInfoCart = document.createElement('img');
        productInfoCart.setAttribute('src','./icons/bt_add_to_cart.svg');
     
        productInfoFigure.appendChild(productInfoCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoFigure);
     
        cardContainer.appendChild(productCard);
     }
}

renderProducts(productList);