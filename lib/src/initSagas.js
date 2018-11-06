// runs sagas

import * as sagas from './_sagas'

export const initSagas = (sagaMiddleware) => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}