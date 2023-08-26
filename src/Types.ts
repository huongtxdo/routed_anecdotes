interface AnecdoteType {
  content: string
  author: string
  info: string
  votes: number
}

type AddNew = { addNew: (a: AnecdoteType) => void }

interface CustomInputProps {
  value: string
  onChange: (a: React.ChangeEvent<HTMLInputElement>) => void
  reset: () => void
}

type NotificationProps = {
  message: String
}

interface AnecdoteTypeWithId extends AnecdoteType {
  id: number
}

export {
  AnecdoteType,
  AddNew,
  CustomInputProps,
  NotificationProps,
  AnecdoteTypeWithId,
}
