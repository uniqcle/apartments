function renderContainer() {
    const markup = `
    <div class="container p-0 mb-5">
                <div class="heading-1">Заявки</div>
    </div>

    <!-- panels-wrapper -->
    <div class="panels-wrapper">
        <div class="container p-0" id="bidsHolder">
            <!-- bids here --> 
        </div>
    </div>

    `;

    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup)
}


function renderBid(bid) {
    const markup = `
        <!-- panel -->
        <div class="panel panel--no-hover">
            <div class="panel__bidid">${bid.id}</div>
            <div class="panel__bidname">${bid.name}</div>
            <div class="panel__bidphone">${bid.phone}</div>
        </div>
        <!-- // panel -->
    `;

    document.querySelector('#bidsHolder').insertAdjacentHTML('beforeend', markup)

}

export function render(bids) {
    renderContainer();

    console.log(bids)

    bids.forEach(bid => {
        renderBid(bid)
    })
}