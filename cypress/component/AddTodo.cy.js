import { mount } from 'cypress/vue'
import AddTodo from '../../src/components/AddTodo.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('AddTodo Component', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders input and button', () => {
    mount(AddTodo)
    cy.get('[data-cy="task-input"]').should('exist')
    cy.get('[data-cy="add-btn"]').should('exist')
  })

  it('adds a todo when button is clicked', () => {
    mount(AddTodo)
    cy.get('[data-cy="task-input"]').type('New Task')
    cy.get('[data-cy="add-btn"]').click()
    // Check if input resets after adding
    cy.get('[data-cy="task-input"]').should('have.value', '')
  })

  it('does not add an empty todo', () => {
    mount(AddTodo)
    cy.get('[data-cy="add-btn"]').click()
    // No crash or console errors expected
    cy.get('[data-cy="task-input"]').should('exist')
  })
})
