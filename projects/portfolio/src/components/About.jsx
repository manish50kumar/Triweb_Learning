const About = () => {
  return (
      <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
              <div className="pb-8 ">
                  <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
              </div>
              <div className="mt-10 w-[70%] ml-20 shadow-md shadow-gray-600 rounded-lg hover:bg-gray-900">
                  <h1 className="text-2xl text-center">Graphic Era University , Dehradun</h1>
                  <p className="text-center">B.Tech ( Computer Science and Engineering )</p>
                  <p className="text-center ">Session - 2020-2024 <span className="ml-4">CGPA - 8.91</span></p>
              </div>
              <div className="mt-10 w-[70%] ml-20 shadow-md shadow-gray-600 rounded-lg hover:bg-gray-900">
                  <h1 className="text-2xl text-center">M. S. College , Motihari</h1>
                  <p className="text-center">Intermidate ( 12th ) State Board ( BSEB )</p>
                  <p className="text-center ">Session - 2017-2019 <span className="ml-4">Percentage - 83.4 %</span></p>
              </div>
              <div className="mt-10 w-[70%] ml-20 shadow-md shadow-gray-600 rounded-lg hover:bg-gray-900">
                  <h1 className="text-2xl text-center">+2 High School Laxmipur Marjadwa</h1>
                  <p className="text-center">High School ( 10th )  State Board ( BSEB )</p>
                  <p className="text-center ">Session - 2016-2017 <span className="ml-4">Percentage - 80.0 %</span></p>
              </div>
              
              
              

          </div>
    </div>
  )
}
export default About;