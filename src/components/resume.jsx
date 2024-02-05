// import React from "react";
import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";
import { FaDownload } from "react-icons/fa";
import { styles } from "../styles";

const Resume = () => {
  const resumeURL =
    "https://docs.google.com/document/d/1AIY6wo_u2UOafwx9hzrF9xN_6TpJtAMzzNV1KRehPdc/edit";

  const downloadResume = () => {
    // Use the resume URL to trigger a download
    window.open(resumeURL, "_blank");
  };

  return (
    <>
      <div className="w-auto ">
        <h2 className={`${styles.sectionHeadText}`}>Resume</h2>
        {/* <h2 className={`${styles.sectionHeadText} text-center`}>Resume</h2> */}

        <div className="resume-container mt-10" style={{ textAlign: "center" }}>
          <button
            className="bg-violet-500 hover:bg-button-hover active:bg-button-hover focus:outline-none focus:ring-200 focus:ring-violet-100 p-3 m-3 rounded-lg"
            onClick={downloadResume}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <FaDownload style={{ marginRight: "8px" }} />
              Download Resume
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");
