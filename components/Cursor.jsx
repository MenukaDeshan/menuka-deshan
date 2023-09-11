import React, { useEffect } from 'react'
import gsap from 'gsap'

const Cursor = () => {
    useEffect(()=>{
        const cursor= document.getElementById('custom-cursor')
        const links = document.querySelectorAll('a')
        const cursorText = document.querySelector('.cursor-text')

        const onmousemove = (event) =>{
            const {clientX,clientY} = event;
            gsap.to(cursor,{x:clientX,y:clientY})
        }

        const onmouseenterlink = (event)=>{
            const link = event.target;
            if(link.classList.contains('view')){
                gsap.to(cursor,{scale:4})
                cursorText.computedStyleMap.display = 'block'
            }else{
                gsap.to(cursor,{scale:4})
            }            
        }

        const onmouseleavelink = () =>{
            gsap.to(cursor,{scale:1})
            cursorText.style.display = 'none'
        }

        document.addEventListener('mousemove',onmousemove)
        links.forEach((link)=>{
            link.addEventListener('mouseenter',onmouseenterlink)
            link.addEventListener('mouseleave', onmouseleavelink)
        })
    })
  return (
    <div id='custom-cursor' className='custom-cursor'>
        <span className='cursor-text'></span>
    </div>
  )
}

export default Cursor