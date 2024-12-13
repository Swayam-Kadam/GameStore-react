import React, { useState } from 'react'
import Shop from './Shop'
import { Link } from 'react-router-dom';

const Carts = () => {

    const [store, setStore] = useState({
        titalresults: 4,
        results: [
            { game: 'GTA-5', price: 1723, qty: 0 },
            { game: 'Lego', price: 2499, qty: 0 },
            { game: 'FC25', price: 3999, qty: 0 },
            { game: 'FORTNITE', price: 200, qty: 0 },
            { game: 'Marvel’s Spider-Man 2', price: 2500, qty: 0 },
            { game: 'Assassin’s Creed Shadows', price: 2999, qty: 0 },
            { game: 'RDR 2', price: 5199, qty: 0 },
            { game: 'Alan Wake 2', price: 1374, qty: 0 }
        ],
    });

    const updateQty = (index, newQty) => {
        setStore((prevStore) => {
            const updatedResults = [...prevStore.results];
            updatedResults[index].qty = newQty;
            return { ...prevStore, results: updatedResults };
        });
    };



    return (
        <div>
            <h2 style={{marginTop:'1rem',color:'white',backgroundColor:'#1d006fcc'}}>GAMES STORE </h2>
            <div className='container'>
                <div className="row">
                    {store.results.map((item, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className="card" style={{ width: '100%' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Games:-{item.game}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Price:-{item.price}</h6>
                                    <p className="card-text">Qty:-{item.qty}</p>
                                    <Shop price={item.price} qty={item.qty} onUpdateQty={(newQty) => updateQty(index, newQty)} />

                                    <button className='btn btn-success my-2' ><Link
                                        to="/product"
                                        state={{ cardIndex: index }}
                                        className="btn btn-success my-2"
                                        style={{ textDecoration: 'none', color: 'black' }}>
                                        Order Now
                                    </Link></button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carts
