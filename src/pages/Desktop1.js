import Project from "../components/Project";
const Projects=[
  {title:'Desktop Invoice Software ',image:'https://user-images.githubusercontent.com/46073342/253726811-5d3af1d0-6444-4e02-9138-919c1fa85cac.png',des:`i've build this desktop app to make it easy to create invoices`,techs:['electronjs','reactjs','sqlite','tailwindcss'],code:'https://github.com/imadeddine000/invoicer'},
  {title:'PyyplShop Currency exchange Mobile App ',image:'https://private-user-images.githubusercontent.com/46073342/268660740-2668285f-a3d4-4050-acaa-1cb5bdbdd656.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTUwNDQzNDQsIm5iZiI6MTY5NTA0NDA0NCwicGF0aCI6Ii80NjA3MzM0Mi8yNjg2NjA3NDAtMjY2ODI4NWYtYTNkNC00MDUwLWFjYWEtMWNiNWJkYmRkNjU2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA5MTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwOTE4VDEzMzQwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkwNDQ1Yzk5YWYyZjVlNzZhZjAyODUyYWY0YWYyMWU2NTFkODUwYWE3MzdkZmIwM2I4YTIwODQxMzU4MTBmNWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.O_AsE5vp3JVor6l08wZol_d9vMp46UfgytN8_dV0B8o',des:`A cross platform app for exchanging curencies in algeria`,techs:['React-native','expo','tailwindcss','firebase'],demo:'https://play.google.com/store/apps/details?id=com.imadeddinekebour.pyyplshop'},

]
const Desktop1 = () => {

  return (
    <div className=" flex flex-col justify-center items-center pt-5">
      <div className=" sm:p-5 p-2 rounded-lg shadow-lg flex-flex-col items-center justify-center sm:w-[50%]">
        <div className="items-center flex flex-col p-2">
          <img className="rounded-full w-[30%]" src='./name.png'/>
        </div>
        <div className="font-bold relative text-white text-center font-inter flex flex-col items-center justify-center">
          <h1 className="text-slate-900 p-4">Imadeddine kebour</h1>
          
        </div>
        <div className="text-center p-4 text-decoration-none bg-slate-900 hover:bg-slate-800 hover:border-red-900 border-2 rounded-lg shadow m-2">
        <a className="no-underline text-white font-inter "  href="mailto:imadeddinekebour@gmail.com">Contact</a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-10 pt-10 ">
          <a href="https://www.github.com/imadeddine000" target="_blank">
            <img className="w-8" src='./vector.svg'/>
          </a>
          <a href="https://www.linkedin.com/in/imadeddine-kebour-7b76351a3/" target="_blank">
            <img  className="w-8" src='./vector1.svg'/>
          </a>
        </div>
      </div>
      <div className=" pt-10">
        {Projects.map((project,i)=>(
          <Project project={project}/>
        ))}

      </div>
   </div>
  );
};

export default Desktop1;
