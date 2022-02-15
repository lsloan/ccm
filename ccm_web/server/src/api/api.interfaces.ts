import { hasKeys } from '../typeUtils'

import { CirrusInvitationResponse } from '../invitation/cirrus-invitation.interfaces'
import { CanvasEnrollment, CanvasUserLoginEmail } from '../canvas/canvas.interfaces'

export interface Globals {
  environment: 'production' | 'development'
  canvasURL: string
  user: {
    loginId: string
    hasCanvasToken: boolean
  }
  userLoginId: string
  course: {
    id: number
    roles: string[]
  }
  baseHelpURL: string
}

export interface APIErrorPayload {
  service: 'Canvas' | 'Cirrus'
  statusCode: number
  message: string
  failedInput: string | null
}

export interface APIErrorData {
  statusCode: number
  errors: APIErrorPayload[]
}

export function isAPIErrorData (value: unknown): value is APIErrorData {
  return hasKeys(value, ['statusCode', 'errors'])
}

export interface ExternalEnrollmentUserData {
  [email: string]: {
    userCreated?: CanvasUserLoginEmail | APIErrorData | false
    inviteResult?: CirrusInvitationResponse | APIErrorData
    enrollment?: CanvasEnrollment | APIErrorData
  }
}

export interface ExternalEnrollmentResult {
  success: boolean
  results: ExternalEnrollmentUserData
}
