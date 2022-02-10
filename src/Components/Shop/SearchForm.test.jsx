import React, {Suspense} from 'react'
import {getByTestId, getByText, render, screen, waitFor, fireEvent} from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import userEvent from "@testing-library/user-event";

import App from '../../App'
import {Provider} from 'react-redux';
import ShopContainer from "./ShopContainer.tsx"
import {BrowserRouter, Route} from 'react-router-dom';
import {QueryParamProvider} from 'use-query-params';
import i18n from "../../i18n";
import store from "../../redux/redux-store";
import {I18nextProvider} from "react-i18next";
import {insert} from "formik";
import mockProduct from './products.json'


// const onChange = jest.fn();
const formik = {
    setFieldValue: jest.fn(),
    values: {},
    handleSubmit: jest.fn()
}
// const setQuery = jest.fn()
// const changeUrl = jest.fn()
// const categoriesData = [
//     {}
// ]
// const children = jest.fn()
// const values = {product: '1MORE'}
// const values= jest.fn()
// fetch.enableMocks()
// jest.mock('i18next-http-backend', () => ({}));
describe('Search component', () => {

    // beforeEach(() => {
    //     fetch.mockClear();
    // });
    it('renders test to includes type elements', () => {
        const {getByTestId} = render(
            <BrowserRouter>
                <Suspense fallback={"Loading..."}>
                    <I18nextProvider i18n={i18n}>
                        <Provider store={store}>
                            <QueryParamProvider ReactRouterRoute={Route}>
                                <ShopContainer/>
                            </QueryParamProvider>
                        </Provider>
                    </I18nextProvider>
                </Suspense>
            </BrowserRouter>
        )

        const productField = getByTestId('product-field')
        expect(productField).toBeInTheDocument();
        expect(screen.queryByTestId)
    });
    it('renders test to call handleSubmit ', async () => {
        const handleSubmit = jest.fn()
        // fetch.mockResponseOnce(JSON.stringify({ products: [{name: '1MORE'}]}));
        // fetch.mockResponseOnce(JSON.stringify({ products: [{name: '1MORE'}]}));
        // fetch.mockResponseOnce(JSON.stringify({ products: [{name: '1MORE'}]}));
        // fetch.mockResponseOnce(JSON.stringify({ products: [{name: '1MORE'}]}));
        const {getByTestId} = render(
            <BrowserRouter>
                <Suspense fallback={"Loading..."}>
                    <I18nextProvider i18n={i18n}>
                        <Provider store={store}>
                            <QueryParamProvider ReactRouterRoute={Route}>
                                <ShopContainer onSubmit={handleSubmit}/>
                            </QueryParamProvider>
                        </Provider>
                    </I18nextProvider>
                </Suspense>
            </BrowserRouter>
        )
        // const productField = getByTestId('product-field')

        const productName = '1MORE Triple Driver In-Ear Headphones (Earphones/Earbuds) with Apple iOS and Android Compatible Microphone and Remote (Titanium)'
        // fireEvent.change(screen.getByTestId(/category/i), {target: {value: 'All category'}});
        await waitFor(async() => {
            expect(await screen.getByText(/Reflector 2/i)).toBeInTheDocument()
        })
        // expect(await screen.getByText(/Reflector 2/i)).toBeInTheDocument()
        act(async() => {
            fireEvent.change(await screen.getByLabelText(/product/i), {target: {value: '1MOR'}});
        })

        // fetch.mockResponseOnce(JSON.stringify({ products: [{name: '1MORE'}]}));
        // act(async() => {
        //     fireEvent.change(await screen.getByLabelText(/category/i), {target: {value: 'All category'}});
        // })
        // userEvent.click(screen.getByRole('button', {name: /Search_product/i } ))

        await waitFor(async() => {
            expect(await screen.getByText(/1more/i)).toBeInTheDocument()
            expect(await screen.queryByText(/Reflector 2/i)).not.toBeInTheDocument()
        })
    });
        // it('when send  "1MOR" form on the screen we can find product with asin="B01KB9K9Z0" ', async () => {
        //     const onChange = jest.fn()
        //     const productField = getByTestId('product-field')
        //     const productSearch = getByTestId('product-search')
        //     const {getByTestId, getByText,} = render(
        //         <BrowserRouter>
        //             <Suspense fallback={"Loading..."}>
        //                 <I18nextProvider i18n={i18n}>
        //                     <Provider store={store}>
        //                         <QueryParamProvider ReactRouterRoute={Route}>
        //                             <ShopContainer />
        //                         </QueryParamProvider>
        //                     </Provider>
        //                 </I18nextProvider>
        //             </Suspense>
        //         </BrowserRouter>
        //     )
        // });
})
// it('NOt name', ()=> {
//     render()
//     userEvent.type(inputEl, '1MOR')
//     const productField = getByTestId('product-field')
//     productField.props.onChange('1MOR')
//     expect(screen.get(/B01KB9K9Z0/i)).toBeInTheDocument();
//     expect(screen.get(/B01KB9K9Z0/i)).not.toBeInTheDocument();
// 'find asin key in page after seaching "1MOR"'
// });