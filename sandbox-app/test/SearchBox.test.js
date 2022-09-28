import { mount } from '@vue/test-utils'
import { SearchBox } from '~~/.nuxt/components'
/**
  !important
  Due to the fact that I have a custom Vite configuration on top
  of Nuxt to compile sass files. Is getting really tricky to
  integrate a test suite since Jest and Vitetest wont compile
  those file.
  Tried several things but there is no documentation online
  and several issues on the matter.
  https://github.com/nuxt/framework/issues/6792
  https://github.com/nuxt/vite/issues/71
  Nuxt 3 has little documentation on how to integrate
  testing frameworks. I spent 1+ day trying to fix it.
  https://v3.nuxtjs.org/getting-started/testing/
 
  Side Note:
  In the spirit of proactivity I would like to show you
  how I would test this components.
  Please bear in mind that this is blind code so...
  dont know if this actually runs but to get the idea.
 */
describe('SearchBox Suite', function () {
  it('should trigger an error when searching w/o typing a doggie id', function () {
    const searchButton = document.getElementById('search-button')
    searchButton.click()
    const errorList = document.getElementById('error-list')
    expect(errorList).toBeTruthy()
  })
  it('should trigger an error when typing a doggie id === 0', function () {
    const searchInput = document.getElementById('search-input')
    searchInput.innerHTML = 0
    const errorList = document.getElementById('error-list')
    expect(errorList).toBeTruthy()
  })
  it('should trigger an error when typing a doggie id > 10000', function () {
    const searchInput = document.getElementById('search-input')
    searchInput.innerHTML = 10001
    const errorList = document.getElementById('error-list')
    expect(errorList).toBeTruthy()
  })

  test('when clicking random button, call redirect and push a new route', async () => {
    const mockRouter = {
      push: jest.fn(),
    }

    const searchBoxWrapper = mount(SearchBox, {
      props: {},
      global: {
        mocks: {
          $router: mockRouter,
        },
      },
    })
    const randomButton = document.getElementById('random-button')
    randomButton.click()

    expect(searchBoxWrapper.redirect).toHaveBeenCalledTimes(1)
    expect(searchBoxWrapper.redirect).toHaveBeenCalledWith({ random: true })
    expect(mockRouter.push).toHaveBeenCalledTimes(1)
  })
})
