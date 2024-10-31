import queryString from 'query-string'
import { Pagination } from '~/constants/type'
import {
  CountCustomerReqType,
  CountCustomerResType,
  CreateAccountBodyType,
  GetManageAccountRes,
  GetMeResType,
  SendMailBodyType,
  SendMailResType,
  UpdateAccountByAdminBodyType,
  UpdateAccountByAdminResType
} from '~/schemaValidations/account.schema'
import http from '~/utils/http'
import { formatQueryDateTime } from '~/utils/utils'

const accountApiRequest = {
  getMe: () => http.get<GetMeResType>('/accounts/me'),
  getListAccounts: (query: Pagination) => {
    const stringified = queryString.stringify(query)
    return http.get<GetManageAccountRes>(`/accounts?${stringified}`)
  },
  updateAccountByAdmin: (body: UpdateAccountByAdminBodyType) => {
    return http.patch<UpdateAccountByAdminResType>(`/accounts/${body.id}`, body)
  },
  createAccount: (body: CreateAccountBodyType) => {
    return http.post<UpdateAccountByAdminResType>('/accounts', body)
  },
  sendMail: (body: SendMailBodyType) => http.post<SendMailResType>('/accounts/send-email', body),
  sendMailOrder: (body: { email: string; orderId: string }) =>
    http.post<SendMailResType>('/accounts/send-email-order', body),
  countCurrentCustomer: () => http.get<CountCustomerResType>('/accounts/number-accounts-current-day'),
  countCustomer: (query: CountCustomerReqType) => {
    const queryString = formatQueryDateTime(query.startTime as string, query.endTime as string)
    return http.get<CountCustomerResType>(`/accounts/number-accounts?${queryString}`)
  }
}

export default accountApiRequest
