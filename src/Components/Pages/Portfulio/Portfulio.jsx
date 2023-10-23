
const Portfulio = () => {

    // https://jsonplaceholder.typicode.com/posts 


    return (
        <div id='portfulio'>
            <h2 className="text-3xl tracking-widest pb-4 text-center ">Portfulio</h2>

            <div className='px-2 py-20 min-h-[550px] flex justify-center items-center '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {/*  */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <img src="https://i.pinimg.com/564x/ab/36/40/ab36409c1701081ee1838556eee67e79.jpg" alt="Shoes" />
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfulio;