import MERN from '../assets/mern2.png'
import html1 from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwindcss1 from '../assets/tailwindcss1.png'
import Node from '../assets/node.jpg'
import Mysql from '../assets/mysql.png'


const Experience = () => {

    const techs = [
        {
            id: 11,
            src: MERN,
            title: 'MERN',
            style:'shadow-green-500'
        },
        {
            id:1,
            src: html1,            
            title: 'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src: css,            
            title: 'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src: js,            
            title: 'JavaScripts',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src: react,            
            title: 'React',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src: tailwindcss1,            
            title: 'Tailwind CSS ',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src: Node,            
            title: 'NodeJs',
            style:'shadow-white'
        },
        {
            id:7,
            src: Mysql,            
            title: 'MySQL',
            style:'shadow-pink-400'
        },
    ]

  return (
      <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
          <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
              <div>
                  <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Experience</p>
                  <p className='py-6'>These are the technology I've worked with</p>
              </div>

              <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                  
                  {
                      techs.map(({ id, src, title, style }) => (
                          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                              <img src={src} alt="experiencelogo" className='w-20 mx-auto' />
                              <p className='mt-4'>{title}</p>
                         </div>
                      ))
                  }

                  </div>

          </div>
    </div>
  )
}
export default Experience