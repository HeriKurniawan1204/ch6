import React from 'react'

export const Button = (props) => {

  const {text, textColor, textHover, bgColor, width, bgHover} = props

  return (
    <button className={`py-1.5 ${width} ${textColor} ${textHover} text-sm font-semibold ${bgColor} border border-[#FF6B00] rounded-lg ${bgHover} hover:shadow-md hover:shadow-secondary`}>{text}</button>
  )
}
