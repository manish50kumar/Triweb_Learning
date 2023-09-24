
import html1 from '../assets/html.png'
import html2 from '../assets/html.png'
import html3 from '../assets/html.png'
import html4 from '../assets/html.png'
import html5 from '../assets/html.png'
import html6 from '../assets/html.png'
import html7 from '../assets/html.png'


const Experience = () => {

    const techs = [
        {
            id:1,
            src: html1,            
            title: 'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src: html2,            
            title: 'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src: html3,            
            title: 'JavaScripts',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src: html4,            
            title: 'React',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src: html5,            
            title: 'Tailwind CSS ',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src: html6,            
            title: 'Express',
            style:'shadow-white'
        },
        {
            id:7,
            src: html7,            
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