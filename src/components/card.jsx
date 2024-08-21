const Card = ({srcImg, nameProduct, harga}) => {
    return (
        <>
            <div className="w-[283px] h-[260px] rounded border bg-white flex flex-col items-center px-4 py-2 gap-4">
                <div className="w-full h-[160px] rounded overflow-hidden">
                    <img className="object-cover w-full h-full" src={srcImg} alt={nameProduct} />
                </div>
                <div className="w-full flex items-center justify-between">
                    <h1>{nameProduct}</h1>
                    <span className="flex items-center justify-center px-4 py-1 rounded-md bg-black text-white">Add To cart</span>
                </div>
                <h1 className="font-bold">{harga}</h1>

                <div className="flex gap-2">
                    <span className="inline-block rounded-full w-5 h-5 bg-red-600"></span>
                    <span className="inline-block rounded-full w-5 h-5 bg-blue-600"></span>
                    <span className="inline-block rounded-full w-5 h-5 bg-green-600"></span>

                </div>
            </div>
        </>
    )
}

export default Card;