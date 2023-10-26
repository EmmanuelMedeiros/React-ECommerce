import ProfileHeader from "./ProfileHeader"


function WishList() {

    const productList = [
        {
            title: "Mouse sem fio, luzes doasd oasmdo kasjmdk asdjas kdasp dk dasd adasdas",
            owner: "Eletro it.",
            rating: "* * * *",
            price: "R$ 450,00"
        },
        {
            title: "Monitor Dell LG, 150hz, FHD",
            owner: "SAMUNG",
            rating: "* * * * *",
            price: "R$ 900,00"
        },
        {
            title: "Placa de vídeo RXT 55000, 8GB, DUAL FAN, OC ENABLED",
            owner: "Asus tecnologies",
            rating: "* * * *",
            price: "R$ 3200,00"
        }
    ]

    return(
        <div>

            <ProfileHeader/>

            {productList.map(product => (
                <div className="md:w-3/5 
                px-3 text-white my-5 bg-dark-border w-11/12 block mx-auto rounded-md py-3">

                <ul className="mt-1 grid grid-cols-2">

                    <span className="md:h-52 md:w-3/5
                    w-11/12 h-32 block bg-darkest-border rounded-lg"></span>

                    <div className="md:-ml-20">
                        <li>
                            <h2 className="md:text-xl
                            font-bold">{product.title.length > 30 ? product.title.substring(0, 30) + '...' : product.title}</h2>
                        </li>
                        <li>
                            <h3 className="md:text-lg
                            w-3/5 text-xs opacity-80">{product.owner}</h3>
                        </li>
                        <li>
                            <h3 className="w-3/5 text-xl opacity-80">{product.rating}</h3>
                        </li>
                        <li>
                            <h3 className="md:pt-24
                            w-4/5 font-medium text-xl">{product.price}</h3>
                        </li>
                    </div>
                </ul>

            </div>
            ))}

        </div>
    )
}

export default WishList