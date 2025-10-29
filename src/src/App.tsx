import { useState } from 'react'

export default function App() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const sendToAI = () => {
    if (!prompt.trim()) return
    setLoading(true)
    setResponse('')
    setTimeout(() => {
      setResponse('Resposta da IA para: ' + prompt)
      setLoading(false)
    }, 1500)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', padding: '2rem', fontFamily: 'Arial' }}>
      <h1 style={{ marginBottom: '1rem' }}>Dashboard IA Pro</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Digite sua pergunta..."
        style={{ width: '100%', height: '100px', padding: '1rem', background: '#111', color: '#fff', border: '1px solid #333', borderRadius: '8px' }}
      />
      <button
        onClick={sendToAI}
        disabled={loading}
        style={{ marginTop: '1rem', padding: '1rem 2rem', background: loading ? '#555' : '#0f0', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}
      >
        {loading ? 'Enviando...' : 'Enviar para IA'}
      </button>
      {response && (
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#111', border: '1px solid #333', borderRadius: '8px' }}>
          {response}
        </div>
      )}
    </div>
  )
}
