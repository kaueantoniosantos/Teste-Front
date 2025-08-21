class RegistroForm {
  elements = {
    titleInput: () => cy.get('#title'),
    titleFeedback: () => cy.get('#titleFeedback'),
    imageUrlInput: () => cy.get('#imageUrl'),
    titleUrlInputFeedback: () => cy.get('#urlFeedback'),
    SubmitBtn: () => cy.get('#btnSubmit')
  }

  typeTitle(text){
    if(!text) return;
    this.elements.titleInput().type(text)
  }

  typeUrl(url){
    if(!url) return;
    this.elements.imageUrlInput().type(url)
  }
  clickSubmit() {
    this.elements.SubmitBtn().click()
  }

}

const registroForm = new RegistroForm();

describe('Registro de imagem', () => {
  describe('Enviar uma imagem com entradas inválidas', () => {
    const imagem = {
      titulo: '',
      url: ''
    }

    it('Estou na página de cadastro de imagens', () => {
      cy.visit('/')
    })

    it(`Quando eu digito "${imagem.titulo}" no campo do título`, () => {
      registroForm.typeTitle(imagem.titulo)
    })
    it(`Quando eu digito "${imagem.url}" no campo da url`, () => {
      registroForm.typeUrl(imagem.url)
    })
    it('Eu clico no botão de envio', () => {
      registroForm.clickSubmit()
    }) 
    it('Então eu devo ver a mensagem "Please type a title for the image" abaixo do campo de título', () => {
      registroForm.elements.titleFeedback().should("contains.text", "Please type a title for the image")
    })
    it('E eu devo ver a mensagem "Please type a valid URL" abaixo do campo URL da imagem', () => {
      registroForm.elements.titleUrlInputFeedback().should("contains.text", "Please type a valid URL")
    })
  })
  
  describe('Enviar uma imagem com entradas válidas', () => {
    const imagem = {
      titulo: 'superman',
      url: 'https://portaln10.com.br/todocanal/wp-content/uploads/2025/07/superman-2025.jpg'
    }

    it('Estou na página de cadastro de imagens', () => {
      cy.visit('/')
    })

    it(`Quando eu digito "${imagem.titulo}" no campo do título`, () => {
      registroForm.typeTitle(imagem.titulo)
    })
    it(`Quando eu digito "${imagem.url}" no campo da url`, () => {
      registroForm.typeUrl(imagem.url)
    })
    it('Eu clico no botão de envio', () => {
      registroForm.clickSubmit()
    }) 
    it('Então eu devo ver a mensagem "Please type a title for the image" abaixo do campo de título', () => {
      registroForm.elements.titleFeedback().should("contains.text", "Please type a title for the image")
    })
    it('E eu devo ver a mensagem "Please type a valid URL" abaixo do campo URL da imagem', () => {
      registroForm.elements.titleUrlInputFeedback().should("contains.text", "Please type a valid URL")
    })
  })
})
