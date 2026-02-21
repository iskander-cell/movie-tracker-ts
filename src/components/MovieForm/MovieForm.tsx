import { useState } from 'react'

interface MovieFormProps {
  onAdd: (name: string) => void
}

function MovieForm({ onAdd }: MovieFormProps) {
  const [inputValue, setInputValue] = useState<string>('')

  const handleSubmit = () => {
    if (!inputValue.trim()) return
    onAdd(inputValue)
    setInputValue('')
  }

  return (
    <div className="input-group">
      <input
        type="text"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
      <button onClick={handleSubmit}>Добавить</button>
    </div>
  )
}

export default MovieForm