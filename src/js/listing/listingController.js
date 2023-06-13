export default function (state) {

    state.emitter.subscribe('event:render-listing', () => {

        console.log("🚀 ~ file: listingController.js:5 ~ state.emitter.subscribe ~ state:", state)
    });
}