/// <reference types = "cypress"/>

//Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
describe("Ver pets",()=>{
    it("Pagina pets",() =>{
        cy.visit(" https://adopet-frontend-cypress.vercel.app/");
        cy.contains("a","Ver pets disponíveis para adoção").click();
    })

//Visite a página de principal do AdoPet e teste os botões header;
    it("Visita a página de principal do AdoPet e testa os botão de home", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__home').click()  
    })

//Visite a página de /login do Adopet;
    it("login",() => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
        cy.contains("a","Fazer login").click()
    })

//Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.
    it("Falar com o responsavel",() => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
        cy.get(".header__message").click()
    })


})