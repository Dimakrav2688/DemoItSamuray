import {applyMiddleware, combineReducers, createStore, Action, Store} from 'redux'
// @ts-ignore
import productsReducer, {InitialStateInterface, ProductsDataType} from './products-Reducer.ts'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'


// interface RootState {
//     products: InitialStateInterface
// }
// Store<RootState>

let rootReducers: any = combineReducers({
    products: productsReducer
})

export type AppStateType = ReturnType<typeof rootReducers>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R= Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
/*это берется в документации там описывается типизация и эти значения для санок, если асинхронщина то есть промис, есть РутСтейт,
unknown не ясно что, и ActionsTypes. A - ActionType, R -<Promise<void>(взвращаемое значение ) */


const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
export default store;