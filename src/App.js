import "./App.css";
import Section from "./components/Section";
import calculator from "./icons/icon-calculator.svg";
import karma from "./icons/icon-karma.svg";
import supervisor from "./icons/icon-supervisor.svg";
import builder from "./icons/icon-team-builder.svg";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="firstH1">Reliable, efficient delivery</h1>
        <h1 style={{ fontWeight: "600" }}>Powered by Technology</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          necessitatibus totam, aliquam error voluptatibus quam delectus.
        </p>
      </div>
      <div className="sections">
        <Section
          borderColor={{ borderColor: "hsl(212, 86%, 64%)" }}
          header="Supervisor"
          description="Monitors activity to identify project roadblocks"
          iconImage={supervisor}
        />
        <div className="sectionMidle">
          <Section
            borderColor={{ borderColor: "hsl(0, 78%, 62%)" }}
            header="Team Builder"
            description="Scans our talent nerwork to create the optimal team for your project"
            iconImage={builder}
          />
          <Section
            borderColor={{ borderColor: "hsl(34, 97%, 64%)" }}
            header="Karma"
            description="Regularly evaluates our talent to ensure quality"
            iconImage={karma}
          />
        </div>
        <Section
          borderColor={{ borderColor: "hsl(180, 62%, 55%)" }}
          header="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          iconImage={calculator}
        />
      </div>
    </>
  );
}

export default App;
