import React, { Component } from 'react'
import { Players } from '../Shared/Players'
export default class PlayersMap extends Component {
    render() {
        return (
            <div className=''>
                {Players.map((player) =>
                    <div key={player.id} className='column'>
                        <div class="card" style="width: 18rem;">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className='card_film card'>
                            <div className='div_img'>
                                <img src={player.img} alt='' />
                            </div>
                            <h3>{player.name}</h3>
                            <p className='title card-text'>{player.club}</p>
                            <p>
                                <button>Detail</button>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
