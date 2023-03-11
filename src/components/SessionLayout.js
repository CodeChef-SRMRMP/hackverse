import React, { useRef } from 'react';
import Xarrow from 'react-xarrows';

const SessionLayout = ({ sessionRef }) => {
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);

  return (
    <div ref={sessionRef} className="m-10 mx-5 md:mx-10 lg:mx-20 space-y-5">
      <h1 className="text-4xl text-white">Session Layout</h1>
      <div className="bg-black/60 backdrop-blur-3xl p-5 lg:space-x-20 rounded-lg text-white flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-evenly">
        <div className="lg:inline-block space-y-3">
          <div
            ref={card1}
            className="backdrop-blur-2xl p-3 bg-[#303030]/70 rounded-lg">
            <p className="text-center lg:text-left text-[#A9A9A9] text-sm">
              Round I
            </p>
            <h1 className="text-4xl text-center lg:text-left">SHORTLISTING</h1>
          </div>
          <p className="text-center lg:text-left text-xs ml-1">
            Shortlisting refers to the process of selecting a smaller, more
            manageable number of candidates from a larger pool of applicants for
            further consideration in the hiring process. It typically involves
            reviewing resumes, cover letters, and/or job applications to
            identify those candidates who possess the necessary qualifications,
            skills, and experience required for the job
          </p>
        </div>
        <div className="lg:mt-[5rem] lg:inline-block space-y-3">
          <div
            ref={card2}
            className="backdrop-blur-2xl p-3 bg-[#303030]/70 rounded-lg">
            <p className="text-center lg:text-left text-[#A9A9A9] text-sm">
              Round ii
            </p>
            <h1 className="text-4xl text-center lg:text-left">REVIEW</h1>
          </div>
          <p className="text-center lg:text-left text-xs ml-1">
            Review refers to the process of examining something carefully in
            order to evaluate its quality, effectiveness, or suitability. The
            object of review can vary widely and may include anything from
            written content to performance evaluations to product prototypes.
            The purpose of a review is typically to identify areas of strength
            or weakness and to provide feedback or recommendations for
            improvement. Reviews can be conducted by individuals or teams and
            may involve a variety of methods, such as testing, analysis, or
            comparison to industry standards.
          </p>
        </div>
        <div className="lg:mt-[10rem] lg:inline-block space-y-3 ">
          <div
            ref={card3}
            className="backdrop-blur-2xl p-3 bg-[#303030]/70 rounded-lg">
            <p className="text-center lg:text-left text-[#A9A9A9] text-sm">
              Round III
            </p>
            <h1 className="text-4xl text-center lg:text-left">PITCHING</h1>
          </div>
          <p className="text-center lg:text-left text-xs ml-1">
            Pitching refers to the process of presenting an idea, product, or
            service in a compelling and persuasive manner in order to secure
            support or investment. The goal of a pitch is typically to persuade
            the audience to take action, such as investing in a business or
            approving a project. Pitches can be given in a variety of formats,
            including formal presentations, elevator pitches, or video pitches,
            and may be delivered in person, over the phone, or via email.
          </p>
        </div>
        <div className="lg:mt-[15rem] lg:inline-block space-y-3 ">
          <div
            ref={card4}
            className="backdrop-blur-2xl p-3 bg-[#303030]/70 rounded-lg">
            <p className="text-center lg:text-left text-[#A9A9A9] text-sm">
              Round IV
            </p>
            <h1 className="text-4xl text-center lg:text-left">WINNERS</h1>
          </div>
          <p className="text-center lg:text-left text-xs ml-1">
            Winners will be decided and will be getting the prize money
          </p>
        </div>
        <div className="hidden lg:block">
          <Xarrow
            color="#fff"
            animateDrawing
            dashness
            start={card1}
            end={card2}
          />
          <Xarrow
            color="#fff"
            animateDrawing
            dashness
            start={card2}
            end={card3}
          />
          <Xarrow
            color="#fff"
            animateDrawing
            dashness
            start={card3}
            end={card4}
          />
        </div>
      </div>
    </div>
  );
};

export default SessionLayout;
