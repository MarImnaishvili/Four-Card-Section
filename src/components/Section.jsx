import "./section.css";

function Section({ borderColor, header, description, iconImage }) {
  return (
    <div className="secDiv" style={borderColor}>
      <h2>{header}</h2>
      <p>{description}</p>
      <img className="sectionIcons" src={iconImage} alt="sectionIcons" />
    </div>
  );
}

export default Section;
