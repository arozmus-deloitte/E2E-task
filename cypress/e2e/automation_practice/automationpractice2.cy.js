/// <reference types="cypress" />
import { MainPage } from "../page_objects/main-page"
import { ShoppingCartPage } from "../page_objects/shopping_cart-page";
import { WomenPage } from "../page_objects/women-page"

context('e-shop go to', () => {

  beforeEach(() => {
    MainPage.openAutomationPracticePage();
  })

  /*Second task*/
  describe('Adding to cart', () => {
    it('Should add 2 products to cart', () => {
      WomenPage.openWomenCategory();
      WomenPage.checkIfWomenCategoryIsOpen();
      let price1 = WomenPage.addElementToCartByIdAndGetPrice(1);
      WomenPage.clickContinueShopping();
      let price2 = WomenPage.addElementToCartByIdAndGetPrice(2);
      WomenPage.clickProccedShopping();
      WomenPage.checkIfShoppinCartSummaryIsOpen();
      ShoppingCartPage.checkIfProductsPriceIsCorrect(1, price1);
      ShoppingCartPage.checkIfProductsPriceIsCorrect(2, price2);
      let total = Number(price1.substring(1)) + Number(price2.substring(1));
      total = "$" + total.toFixed(2);
      ShoppingCartPage.checkIfTotalPriceIsCorrect(total);
    })
  })
})