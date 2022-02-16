import { hasKeys } from '../typeUtils'

import { CirrusErrorData, CirrusInvitationResponse } from '../invitation/cirrus-invitation.interfaces'
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
  canvasStatusCode: number
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
    inviteResult?: CirrusInvitationResponse | CirrusErrorData
    enrollment?: CanvasEnrollment | APIErrorData
  }
}

export interface ExternalEnrollmentResult {
  success: boolean
  results: ExternalEnrollmentUserData
}
