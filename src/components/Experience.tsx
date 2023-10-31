import VisibleWrapper from '../hocs/VisibleWrapper';
import '../styles/Experience.css'

type ExperienceItemProps = {
    item: {
      id: number;
      company: string;
      years: string;
      stack: string[];
    };
    isActive: boolean;
  };

const experience = [
    {
        id: 1,
        company: "PayPal",
        years: "7",
        stack: ["asd", "aseadg", "ergser", "sdsdcg"]
    },
    {
        id: 2,
        company: "Google",
        years: "4",
        stack: ["asd", "aseadg", "ergser", "sdsdcg"]
    },
    {
        id: 3,
        company: "Apple",
        years: "5",
        stack: ["asd", "aseadg", "ergser", "sdsdcg"]
    },
    {
        id: 4,
        company: "Meta",
        years: "9",
        stack: ["asd", "aseadg", "ergser", "sdsdcg"]
    },
    {
        id: 5,
        company: "Netflix",
        years: "4",
        stack: ["asd", "aseadg", "ergser", "sdsdcg"]
    }
];

const ExperienceItem: React.FC<ExperienceItemProps> = ({item, isActive}) => {
    return (
        <div className={`experience-item animation-${item.id % 2 === 0 ? "left" : "right" }-${isActive ? 'active' : ''}`}>
            { item.company }
        </div>
    )
}

const Experience: React.FC = () => {
    return (
        <div id='experience' className="experience">
            { experience.map(item => 
                <VisibleWrapper key={item.id} animation="slide-in">
                    {(isActive) => <ExperienceItem item={item} isActive={isActive} />}
                </VisibleWrapper>
            )}
        </div>
    )
}

export default Experience;