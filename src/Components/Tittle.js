import Footpro from "./Footpro";

const Title = ({ title, subtitle}) => {
    return (
        <>
          <div className="bg-red-200 p-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold ">{title}</h1>
            <h3 className="text-lg md:text-xl  font-semibold">{subtitle}</h3>
          </div>
           <div>
           <Footpro />
           </div>
          
          </div>
          

          
          
         </>
    )
}

export default Title;