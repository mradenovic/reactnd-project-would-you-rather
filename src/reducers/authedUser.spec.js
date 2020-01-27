import authedUser, { logIn, logOut } from './authedUser'

describe('authedUser reducer', () => {
  it('should handle initial state', () => {
    expect(authedUser(undefined, {})).toEqual(null)
  })

  it('should handle LOG_IN', () => {
    expect(
      authedUser(null, {
        type: logIn.type,
        payload: 'mradenovic'
      })
    ).toEqual('mradenovic')
  })

  it('should handle LOG_OUT', () => {
    expect(
      authedUser('mradenovic',
        {
          type: logOut.type
        }
      )
    ).toEqual(null)
  })
})
