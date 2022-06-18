import { Account } from '../../domain/entities/Account'
import { createAccountDtoMock } from '../mocks/authentication.mocks'

describe('Domain :: Account', () => {
  test('should return an Account instanceon success', () => {
    
    const account = new Account(createAccountDtoMock)

    expect(account).toBeInstanceOf(Account)
  })
})
