let arr = [{
    id: 1,
    title: "Shoes",
    price: 2000,
    description: "The slim and maple kdqhjqhdjqhjhqh",
    image_url: "https://static-01.daraz.pk/p/2f0e9210e5f2e7653277c3914e8b821e.jpg_200x200q75-product.jpg_.webp",
    product_order: "Order"
},
{
    id: 2,
    title: "Shirt",
    price: 605,
    description: "New Printed Solid Men's Track Suite",
    image_url: "https://static-01.daraz.pk/p/5d25752581b999aa54d547f766cc553a.jpg_200x200q80-product.jpg_.webp",
    product_order: "Order"
},
{
    id: 3,
    title: "Airpod",
    price: 805,
    description: "M.K Soft - Black Comfortable Men's Shoes on Synthetic Material SN001 Sneakers",
    image_url: "https://static-01.daraz.pk/p/7ae651ad8a5bcdb86fe7a633b222c552.jpg",
    product_order: "Order"
},
{
    id: 4,
    title: "WAtch",
    price: 805,
    description: "M.K Soft - Black Comfortable Men's Shoes on Synthetic Material SN001 Sneakers",
    image_url: "https://pk-live-21.slatic.net/kf/S40a7e8d901b342be92fd4b2c13aac015t.jpg",
    product_order: "Order"
},
{
    id: 5,
    title: "Shirt",
    price: 900,
    description: "M.K Soft - Black Comfortable Men's Shoes on Synthetic Material SN001 Sneakers",
    image_url: "https://static-01.daraz.pk/p/406fa36031183f2e7c7c35e6312c528b.jpg_200x200q80-product.jpg_.webp",
    product_order: "Order"
},
{
    id: 6,
    title: "Shirt",
    price: 800,
    description: "M.K Soft - Black Comfortable Men's Shoes on Synthetic Material SN001 Sneakers",
    image_url: "https://static-01.daraz.pk/p/7cf1c87e2a15ce65002553ee0162de64.jpg_200x200q80-product.jpg_.webp",
    product_order: "Order"
},
]
const cards = document.getElementById("cards");

const cardHTML = arr.map(product => `
    <div class="card" style="width: 30%; margin: 20px;">
        <img src="${product.image_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}.</p>
            <p>${product.price}</p>
            <a href="#" class="btn btn-success">${product.product_order}</a>
        </div>
    </div>
`).join("");

cards.innerHTML = cardHTML;