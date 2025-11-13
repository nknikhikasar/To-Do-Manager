import { mount } from 'cypress/vue'
import TodoItem from '../../src/components/TodoItem.vue'

describe('TodoItem Component', () => {
  const todo = { id: 1, task: 'Learn Vue', done: false }

  it('renders todo text', () => {
    mount(TodoItem, {
      props: { todo }
    })
    cy.contains('Learn Vue')
  })

  it('emits toggle event when checkbox clicked', () => {
    mount(TodoItem, {
      props: { todo },
      attrs: { onToggle: cy.stub().as('toggleHandler') }
    })
    cy.get('input[type="checkbox"]').click()
    cy.get('@toggleHandler').should('have.been.called')
  })

  it('emits delete event when delete button clicked', () => {
    mount(TodoItem, {
      props: { todo },
      attrs: { onDelete: cy.stub().as('deleteHandler') }
    })
    cy.get('button').click()
    cy.get('@deleteHandler').should('have.been.called')
  })
})
