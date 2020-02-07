import loading, { setLoading } from './loading'

describe('loading reducer', () => {
  it('should handle initial state', () => {
    expect(loading(undefined, {})).toEqual(false)
  })

  it('should handle SET_LOADING', () => {
    expect(
      loading(null, {
        type: setLoading.type,
        payload: true
      })
    ).toEqual(true)

    expect(
      loading(null, {
        type: setLoading.type,
        payload: false
      })
    ).toEqual(false)
  })
})
