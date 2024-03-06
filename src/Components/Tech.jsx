import React from "react";
import "../CSS/Tech.css";

const Tech = () => {
  return (
    <>
      <div>
        <div style={{ marginTop: "50px" }}>
          <h1>
            Explore and enjoy the blogs written by our passionate techies.
          </h1>
        </div>
        <div
          className="tech1"
          //   style={{
          //     display: "flex",
          //     flexDirection: "row",
          //     width: "100%",
          //     justifyContent: "space-around",
          //     marginTop:"50px"
          //   }}
        >
          <div
            className="tech2"
            // style={{
            //   width: "20%",
            //   height: "21%",
            //   border: "1px solid white",
            //   padding: "12px",
            //   boxShadow: "7px 12px 21px 4px yellow",
            // }}
          >
            <h3>
              Speaking SQL: Turning Natural Language into Database Dialogues
            </h3>
            <p style={{ fontFamily: "Verdana", fontSize: "13px" }}>
              Bridging Language and Data in the Enterprise Sphere: In the realm
              of enterprise data management, SQL databases have long stood as
              the backbone, housing vast quantities of invaluable information.
              As enterprises increasingly lean on business intelligence (BI)
              tools to extract insights from these data repositories, the quest
              for more intuitive and accessible querying methods gains momentum.
              The emerging solution? Leveraging Large Language Models (LLMs) to
              interact with SQL databases using natural language.
            </p>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-di
alogues.html"
            >
              {" "}
              <p style={{ color: "blue", fontSize: "16px" }}>Read More</p>
            </a>
          </div>
          <div
            className="tech2"
            // style={{
            //   width: "20%",
            //   height: "15%",
            //   border: "1px solid white",
            //   padding: "12px",
            //   boxShadow: "7px 12px 21px 4px red",
            // }}
          >
            <h3>
              Beyond Basics: Elevating AI with Reinforcement Learning from Human
              Feedback
            </h3>
            <p style={{ fontFamily: "Verdana", fontSize: "13px" }}>
              Reinforcement Learning from Human Feedback (RLHF) was arguably the
              key behind the success of ChatGPT, marking a significant
              advancement in AI's ability to understand and engage in human
              language. This method, vital for fine-tuning language models,
              addresses the complexities and nuances of communication, ensuring
              AI interactions are natural and intuitive. It navigates the
              challenges of training AI with diverse internet data, carefully
              guiding models to avoid replicating inappropriate language or
              tones.
            </p>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-
from-human-feedback.html"
            >
              {" "}
              <p style={{ color: "blue", fontSize: "16px" }}>Read More</p>
            </a>
          </div>
          <div className="tech2">
            <h3>The Fine Art of Tuning: Parameter-Efficient Fine-Tuning</h3>
            <p style={{ fontFamily: "Verdana", fontSize: "13px" }}>
              Welcome to our exploration of the fascinating world of large
              language models! As many of you are aware, the scale of these
              models has skyrocketed recently. Take, for instance, GPT-4, which
              boasts a staggering 1.8 trillion parameters. The desire to
              fine-tune these behemoths with custom datasets is growing, yet it
              poses significant challenges. Fine-tuning requires adjusting
              countless parameters, which is time-consuming, and the GPU demands
              are nothing short of immense.
            </p>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.htm
l"
            >
              {" "}
              <p style={{ color: "blue", fontSize: "16px" }}>Read More</p>
            </a>
          </div>
          <div className="tech2">
            <h3>PrivAIcy Matters: Balancing Privacy, Price, and Performance</h3>
            <p style={{ fontFamily: "Verdana", fontSize: "13px" }}>
              Welcome to the enthralling universe of Generative AI! Recognized
              as a realm of artificial intelligence algorithms with the magic to
              conjure fresh content based on available data, this technology has
              unassumingly become the new frontier for a plethora of industries,
              including tech, banking, and media. And, no surprises here, the
              technological world has openly embraced it in myriad innovative
              ways.
            </p>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performan
ce-in-in-house-llm-deployments.html"
            >
              {" "}
              <p style={{ color: "blue", fontSize: "16px" }}>Read More</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
