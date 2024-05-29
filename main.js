let url = 'https://fakestoreapi.com/products' //API 

async function fectdata() {
    let res = await fetch(url)
    let data = await res.json();
    console.log(data)

    let coll = document.querySelector('div')
    for (let index = 1; index < data.length; index++) {
        // let list = document.createElement('li')
        // list.innerHTML = data[index].image
        let img = document.createElement('img');
        let tit = document.createElement('h1');
        let pri = document.createElement('h5');
        tit.innerHTML = data[index].title
        pri.innerHTML = data[index].price
        img.src = data[index].image;
        img.classList.add('img')
            // console.log(list)
            // coll.append(list)
        coll.appendChild(img)
        coll.appendChild(tit)
        coll.appendChild(pri)
    }
    // data.forEach(element => {
    //     let list = document.createElement('li')
    //     list.innerHTML = element[i].image[i]
    //         // list.innerHTML = element[i].price

    //     let img = document.createElement('img');
    //     img.src = res.url;
    //     coll.appendChild(img);

    //     console.log(list)
    //     coll.append(list)
    //     coll.append(img)
    // });

}
fectdata()