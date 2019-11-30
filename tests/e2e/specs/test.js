// https://docs.cypress.io/api/introduction/api.html

describe("VueAspectRatio", () => {
  it("should open the app root url", () => {
    cy.visit("localhost:8080")
    cy.contains("h1", "Vue Aspect Ratio")
  });

  it("should fallback aspect-ratio 1:1 if none is proved", () => {
    cy.visit("localhost:8080")
    cy.get(".content-2").should($div => {
      const style = window.getComputedStyle($div[0])
      expect(style.height).to.equal("150px")
    })
  });

  it("should render a correct 16:9 aspect ratio if given", () => {
    cy.visit("localhost:8080")
    cy.get(".content-3").should($div => {
      const style = window.getComputedStyle($div[0])
      expect(style.height).to.equal("180px")
    })
  });

  it("should render a correct 1:2 aspect ratio if given", () => {
    cy.visit("localhost:8080")
    cy.get(".content-4").should($div => {
      const style = window.getComputedStyle($div[0])
      expect(style.height).to.equal("200px")
    })
  });

  it("should not define width if not specified", () => {
    cy.visit("localhost:8080")
    cy.get(".vue-ar1 > .vue-aspect-ratio").should($div => {
      const height = $div[0].style.height
      expect(height).to.equal("")
    })
  });

  it("should set width of the element if specified", () => {
    cy.visit("localhost:8080")
    cy.get(".vue-ar2 > .vue-aspect-ratio").should($div => {
      const inlineStyle = $div[0].getAttribute("style");
      expect(inlineStyle).to.equal("width: 150px;")
    })
  });
});
