import popup from './popup';

describe('reducers', () => {
    describe('popup', () => {
        const initialState = {
            isCart: false
        }
        
        it('should provide the initial state', () => {
            expect(popup(undefined, {})).toEqual(initialState)
        })

        it('should handle TOGGLE_CART action', () => {
            expect(popup({}, {type: 'TOGGLE_CART'})).toEqual({isCart: true})
        })
    })
})