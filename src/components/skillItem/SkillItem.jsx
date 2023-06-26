import './SkillItem.css';

const SkillItem = (props) => {

    const{name, time, children} = props;

    return (
        <div className="d-flex flex-column align-items-center ms-4 me-4 mb-5">
            <div className="icon-skill" style={{animationDuration: `${time}`}}>
            {children}
            </div>
            <span className="skill-name mt-3">{name}</span>
        </div>
      );
}
 
export default SkillItem;