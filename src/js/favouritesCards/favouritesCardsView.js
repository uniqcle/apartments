function renderContainer() {
    const markup = `
    <div class="container p-0 mb-5">
                <div class="heading-1">Избранное</div>
            </div>


             <!-- cards-wrapper -->
            <div class="cards-wrapper">
                <div class="container p-0">
                    <!-- row -->
                    <div class="row" id="cardsHolder">
                        <!-- cards will be here --> 
                    </div>
                    <!-- // row -->
                </div>
            </div>
            <!-- // cards-wrapper -->
    `;

    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup)
}

function renderCard(card) {
    const markup = `
    <article class="col-md-4">
                            <!-- card -->
                            <a href="index.html#/item/${card.id}" class="card" data-id="${card.id}">
                                <div class="card__header">
                                    <div class="card__title">
                                        ЖК ${card.complex_name}
                                    </div>
                                    <div class="card__like card__like--active">
                                        <i class="fas fa-heart"></i>
                                    </div>
                                </div>
                                <div class="card__img">
                                    <img
                                        src="${card.image}"
                                        alt="План квартиры"
                                    />
                                </div>
                                <div class="card__desc">
                                    <div class="card__price">
                                        <div class="card__price-total">
                                            ${card.price_total} ₽
                                        </div>
                                        <div class="card__price-per-meter">
                                            64 000 ₽/м2
                                        </div>
                                    </div>

                                    <!-- card__params params -->
                                    <div class="card__params params">
                                        <div class="params__item">
                                            <div class="params__definition">
                                                Комнат
                                            </div>
                                            <div class="params__value">${card.rooms}</div>
                                        </div>
                                        <div class="params__item">
                                            <div class="params__definition">
                                                Площадь
                                            </div>
                                            <div class="params__value">${card.square}</div>
                                        </div>
                                    </div>
                                    <!-- //card__params params -->
                                </div>
                                <div class="card__footer">
                                    <div class="card__art">${card.scu}</div>
                                    <div class="card__floor">Этаж ${card.floor} из ${card.floors_total}</div>
                                </div>
                            </a>
                            <!-- // card -->
                        </article>
    `

    document.querySelector('#cardsHolder').insertAdjacentHTML('afterbegin', markup)
}

export function render(cards) {
    renderContainer();

    cards.forEach(card => {
        renderCard(card);
    })

}


export function toggleFavouriteIcon(elementIcon, isFaved) {
    if (isFaved) {
        elementIcon.classList.add('card__like--active')
    } else {
        elementIcon.classList.remove('card__like--active')
    }
}