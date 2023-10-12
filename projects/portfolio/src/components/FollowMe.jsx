import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi'

import { BsFillPersonLinesFill } from 'react-icons/bs';

const FollowMe = () => {

     const links = [
        {
            id: 1,
            child: (
                 <>
                    <FaLinkedin size={40}/>
                 </>
            ),
            href: 'https://linkedin.com/in/manish-kumar-07b0b7224',
            style:'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                 <>
                   <FaGithub size={40}/>
                 </>
            ),
            href: 'https://github.com/manish50kumar'
            
        },
        {
            id: 3,
            child: (
                 <>
                    <HiOutlineMail size={40}/>
                 </>
            ),
            href: 'mailto:nmk5060773@gmail.com'
            
        },
        {
            id: 4,
            child: (
                 <>
                   <BsFillPersonLinesFill size={40}/>
                 </>
            ),
            href: '/Resume.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]

  return (
      <div  >
       
          <ul className="flex gap-9 justify-center">
              
              {links.map(({id,child,href,style,download}) => {
               return  <li key={id} >
                    <a href={href} 
                        download={download}
                        target="_blank"
                        rel="noreferrer"
                    >
                     
                      {child}
                  </a>
              </li>
              })}

              
          </ul>
      </div>
      
  )
}
export default FollowMe