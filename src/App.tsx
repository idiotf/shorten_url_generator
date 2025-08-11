import React, { useCallback, useState } from 'react'
import getShortenUrl from '@/shorten-url'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CopyButton } from '@/components/copy-button'
import './style.css'

export default function App() {
  const [ url, setUrl ] = useState('')
  const [ error, setError ] = useState<unknown>()
  const [ shortenUrl, setShortenUrl ] = useState('')

  const generateURL = useCallback(async () => {
    try {
      setShortenUrl(await getShortenUrl(url))
      setError('')
    } catch (e) {
      setShortenUrl('')
      setError(e)
    }
  }, [ url ])

  return (
    <main className='w-120 h-40 text-center p-4 font-[Pretendard,sans-serif]'>
      <h1 className='font-bold text-3xl mb-4'>Shorten URL Generator</h1>
      <form action={generateURL} className='flex gap-1 justify-center font-[Geist_Mono,monospace]'>
        <Input
          type='url'
          value={url}
          onChange={({ target: { value } }) => setUrl(value)}
          placeholder='https://playentry.org'
          className='text-sm'
        />
        <Button type='submit' className='w-20'>단축하기</Button>
      </form>
      {shortenUrl && (
        <div className='flex gap-1 justify-center mt-2'>
          <Input type='url' readOnly value={shortenUrl} className='w-42.25 font-[Geist_Mono,monospace] text-sm' />
          <CopyButton value={shortenUrl} />
        </div>
      )}
      {!error || (
        <div className='flex gap-1 justify-center mt-2'>
          <Input type='url' readOnly value='오류가 발생했습니다' className='w-42.25 text-red-500 text-sm' />
          <CopyButton value={error + ''} />
        </div>
      )}
    </main>
  )
}
