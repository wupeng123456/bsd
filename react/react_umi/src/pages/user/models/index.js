import { Login } from "../services"
import { setLocalStorage } from "../../../utils/utils"
import router from "umi/router"
export default {
    namespace: 'login',
  state: {
  },

  effects: {
      *login({ payload }, {call}) {
        const response = yield call(Login, { ...payload})
        if (response.success && response.data) {
            const { token, userName } = response.data
            setLocalStorage("token", token)
            setLocalStorage("userName", userName)
            router.push('/Home')
        }
      },
  },
  reducers: {
      changeState(state, { payload }) {
          return {
              ...state,
              ...payload,
          }
      },
  },
};