import { useEffect, useRef } from 'react';
import '../styles/Skills.css'

const skillsBars = [
    {
        name: "frontend",
        progress: "80"
    },
    {
        name: "backend",
        progress: "60"
    },
    {
        name: "db",
        progress: "50"
    },
    {
        name: "other",
        progress: "20"
    },
    {
        name: "cake",
        progress: "95"
    },
]

interface SkillsProps {
    isActive: boolean;
}

const Skills: React.FC<SkillsProps> = ({isActive}) => {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      if (isActive) {
            skillsBars.forEach((skill, i) => {
                const bar = refs.current[i];
                if (bar) {
                    bar.style.width = '0%';
                    void bar.offsetWidth;
                    bar.style.width = `${skill.progress}%`;
                }
            });
      }
    }, [containerRef.current]);
  
    return (
      <div id='skills' ref={containerRef} className='skills'>
        <div className='skills-container'>
          {skillsBars.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <div className='progress-container'>
                <div ref={el => refs.current[index] = el} className='progress-bar' style={{ width: '0%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

// const Skills = () => {
//     const refs = useRef<(HTMLDivElement | null)[]>([]);

//     useEffect(() => {
//         skillsBars.forEach((skill, i) => {
//             const bar = refs.current[i];
//             if (bar) {
//                 bar.style.width = '0%';  // Reset to 0
//                 // Force reflow
//                 void bar.offsetWidth;
//                 // Set to the final width
//                 bar.style.width = `${skill.progress}%`;
//             }
//         });
//       }, []);

//     return (
//         <div className='skills'>
//             <div className='skills-container'>
//                 { skillsBars.map((item, index) => 
//                     <div key={index}>
//                         <p>{item.name}</p>
//                         <div className='progress-container'>
//                             <div ref={el => refs.current[index] = el} className='progress-bar' style={{ width: '0%' }} />
//                         </div>
//                     </div> 
//                 )}
//             </div>
//         </div>
//     );
// }

export default Skills;