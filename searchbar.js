import React , {useState} from 'react'

const Searchbar = () => {
    const [text, setText] = useState("")
  return (
    <div>
        <input
        type='text'
        placeholder='search'
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button>
            search
        </button>

        {text}
    </div>
  )
}

export default Searchbar