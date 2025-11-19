describe('Todo App', () => {
  beforeEach(() => {
    cy.visit(process.env.BASE_URL || "http://localhost:5173/To-Do-Manager/dev/")
  })

  it('adds a new todo', () => {
    cy.get('[data-cy="task-input"]').type('Learn Vue Testing')
    cy.get('[data-cy="add-btn"]').click()
    cy.contains('Learn Vue Testing').should('exist')
  })

  it('toggles a todo as done', () => {
    cy.get('[data-cy="task-input"]').type('Write Cypress Tests')
    cy.get('[data-cy="add-btn"]').click()
    cy.contains('Write Cypress Tests').parent().find('input[type="checkbox"]').check()
  })

  it('deletes a todo', () => {
    cy.get('[data-cy="task-input"]').type('Delete Me')
    cy.get('[data-cy="add-btn"]').click()
    cy.contains('Delete Me').parent().find('button').click()
    cy.contains('Delete Me').should('not.exist')
  })
})
