export default function () {

    state.emitter.subscribe('event:render-listing', () => {
        console.log('render listing...')
    });
}