import React from 'react'

import { NotificationProps } from '../Types'

const Notification = ({ message }: NotificationProps) =>
  message && <div>{message}</div>

export default Notification

