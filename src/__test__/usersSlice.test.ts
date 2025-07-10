import usersReducer, { setUser, removeUser, addOrder, clearOrder, selectTotalQuantity } from '../Components/redux/slices/usersSlice';
import { OrderItemWithQuantity } from '../Page/Menu';

beforeAll(() => {
    const localStorageMock = (() => {
        let store: Record<string, string> = {};
        return {
            getItem(key: string) {
                return store[key] || null;
            },
            setItem(key: string, value: string) {
                store[key] = value.toString();
            },
            clear() {
                store = {};
            },
            removeItem(key: string) {
                delete store[key];
            },
        };
    })();

    Object.defineProperty(global, 'localStorage', {
        value: localStorageMock,
    });
});

describe('usersSlice', () => {
    const initialState = {
        email: null,
        token: null,
        id: null,
        order: [] as OrderItemWithQuantity[],
    };

    beforeEach(() => {
        localStorage.clear();
    });

    it('should return the initial state', () => {
        expect(usersReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should set user data on login', () => {
        const action = setUser({ email: 'test@mail.com', token: '123', id: 'abc' });
        const state = usersReducer(initialState, action);
        expect(state.email).toBe('test@mail.com');
        expect(state.token).toBe('123');
        expect(state.id).toBe('abc');
    });


    it('should add new item to order', () => {
        const item: OrderItemWithQuantity = {
            id: '1',
            category: 'food',
            img: 'url',
            meal: 'Pizza',
            price: 10,
            quantity: 2,
        };
        const state = usersReducer(initialState, addOrder(item));
        expect(state.order).toHaveLength(1);
        expect(state.order[0]).toEqual(item);
        expect(localStorage.getItem('order')).toBe(JSON.stringify(state.order));
    });

    it('should increase quantity if item already exists', () => {
        const item: OrderItemWithQuantity = {
            id: '1',
            category: 'food',
            img: 'url',
            meal: 'Pizza',
            price: 10,
            quantity: 2,
        };
        const stateWithItem = {
            ...initialState,
            order: [item],
        };
        const addMore = { ...item, quantity: 3 };
        const state = usersReducer(stateWithItem, addOrder(addMore));
        expect(state.order).toHaveLength(1);
        expect(state.order[0].quantity).toBe(5);
        expect(localStorage.getItem('order')).toBe(JSON.stringify(state.order));
    });

    it('should remove item by id', () => {
        const item1: OrderItemWithQuantity = {
            id: '1',
            category: 'food',
            img: 'url',
            meal: 'Pizza',
            price: 10,
            quantity: 2,
        };
        const item2: OrderItemWithQuantity = {
            id: '2',
            category: 'drink',
            img: 'url2',
            meal: 'Cola',
            price: 3,
            quantity: 1,
        };
        const stateWithItems = {
            ...initialState,
            order: [item1, item2],
        };
        const state = usersReducer(stateWithItems, clearOrder('1'));
        expect(state.order).toHaveLength(1);
        expect(state.order[0].id).toBe('2');
        expect(localStorage.getItem('order')).toBe(JSON.stringify(state.order));
    });

    it('should select total quantity', () => {
        const stateWithItems = {
            users: {
                email: null,
                token: null,
                id: null,
                order: [
                    { id: '1', category: 'food', img: 'url', meal: 'Pizza', price: 10, quantity: 2 },
                    { id: '2', category: 'drink', img: 'url2', meal: 'Cola', price: 3, quantity: 1 },
                ],
            },
        };
        expect(selectTotalQuantity(stateWithItems)).toBe(3);
    });

});
