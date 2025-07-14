import { join } from 'node:path'

export const STATIC_PATH = join(__dirname, '../../../client/dist/admin/browser')

export const EVENTS = {
  USER_MESSAGE: 'user:message',
  ADMIN_REPLY: 'admin:reply',
  REGISTER: 'register',
  ADMIN_RECEIVE: 'admin:receive',
  USER_RECEIVE: 'user:receive'
}
