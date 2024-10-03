const Circle = ({ Dark }) => {
  return <div className={`h-4 w-4  rounded-full ${Dark ? 'bg-sky-800/60' : 'bg-black/50'} `}></div>;
};
import { motion } from 'framer-motion'
function Educations({ Dark }) {
  const education = [
    {
      name: "M-Tech,JNTUACE",
      year: "2020-2023",
      description: "Master Degree in Control system Systems Engineering"
    },
    {
      name: "B-tech,AUdisankara College of engineering and technology Gudur",
      year: "2016-2019",
      description: "Specialization in Electrical and Electronics"
    },
    {
      name: "Diploma, Govt.polytechic Anantapur",
      year: "2013-2016",
      description: "Diploma in Electrical and Electronics"
    }
    {
      name: "SSC, Padmavani High school",
      year: "2012-2013",
      description: "Matriculation"
    }
  ];

  return (
    <div className=" p-4 md:p-8 grow-1  m-auto flex md:mt-10">
      <div className="flex flex-col ml-6">
        {education.map((item) => (
          <motion.div key={item.year} className="flex items-center mb-5 md:mb-20 md:w-[550px]"
            initial={{ opacity: 0, y: -100, rotate: 60 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative flex flex-col items-center">
              <Circle Dark={Dark} />

              <div className={`h-16 border-l-2 border-black/50  ${Dark ? 'border-sky-800/50' : 'border-black/50'}`}></div>
            </div>
            <div className={` p-4 rounded-sm md:pl-6 md:pr-6 ml-4 w-full ${Dark ? 'bg-sky-800/60' : 'bg-black/50'}`}>
              <h2 className="text-lg md:text-xl">{item.description}</h2>
              <p className="text-sm md:text-base">{item.year}</p>
              <small className="text-xs md:text-sm">{item.name}</small>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Educations;
