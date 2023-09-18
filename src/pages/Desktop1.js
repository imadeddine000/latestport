import Project from "../components/Project";
const Projects=[
   {title:'PyyplShop Currency exchange Mobile App ',image:'https://i.ibb.co/pWzyGBB/Frame-2.png',des:`A cross platform app for exchanging curencies in algeria`,techs:['Reactnative','expo','tailwindcss','firebase'],demo:'https://play.google.com/store/apps/details?id=com.imadeddinekebour.pyyplshop'},
  {title:'Desktop Invoice Software ',image:'https://user-images.githubusercontent.com/46073342/253726811-5d3af1d0-6444-4e02-9138-919c1fa85cac.png',des:`i've build this desktop app to make it easy to create invoices`,techs:['electronjs','reactjs','sqlite','tailwindcss'],code:'https://github.com/imadeddine000/invoicer'},
  {title:'Mern Stack ecommerce app',image:'https://i.ibb.co/fQ6B3VD/Frame-4.png',des:`Mern stack ecommerce app with a dashboard panel`,techs:['reactjs','nodejs','tailwindcss','expressjs','mongodb'],demo:'https://client-50xm.onrender.com',code:'https://github.com/imadeddine000/ecommerce'},

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
