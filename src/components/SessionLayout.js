import React from "react";

const SessionLayout = () => {
  return (
    // Main Container
    <div className="xl:w-3/4 md:w-3/4 w-3/4 bg-black bg-opacity-70 rounded-xl pt-6 pb-6">
        {/* Inner Container : Elements grouped colum wise*/}
        <div className="flex flex-col md:flex-row xl:flex-row justify-center xl:pl-5 md:pl-2 pl-2 items-center xl:items-start md:items-start">

            {/* First Column : Round-1 */}
            <div className="xl:ml-8 md:ml-8 mt-1">
                <div className="xl:ml-0 md:ml-0 ml-2  xl:w-48 md:w-32 w-36 h-26 rounded-xl xl:p-4 md:p-3 p-4 " style={{backgroundColor:"#303030"}}>
                    <div className="xl:text-lg md:text-sm text-sm" style={{color:"#A9A9A9"}}>ROUND I</div>
                    <div className="xl:test-xl md:text-base text-base text-white">SHORTLISTING</div>
                </div>
                <div className="xl:ml-0 md:ml-0 ml-2 xl:w-48 md:w-32 w-32 h-28 font-normal xl:text-sm md:text-xs text-xs p-1 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh nulla, vulputate fringilla tempor vitae
                </div>
            </div>

            {/* Second Column : Round-2 */}
            <div className="mt-1 ">
                <div className="xl:mr-8 md:mr-2 mr-2  xl:w-48 md:w-32 w-32 h-28 flex justify-left items-end">
                    <div className="w-2/3 h-full xl:h-2/3 md:h-2/3 border-dashed border-white border-r-2 xl:border-t-2 md:border-t-2 border-t-0" ></div>
                </div>
                <div className="xl:ml-8 md:ml-2 ml-2  xl:w-48 md:w-32 w-36 h-26 rounded-xl xl:p-4 md:p-3 p-4" style={{backgroundColor:"#303030"}}>
                    <div className="xl:text-lg md:text-sm text-sm" style={{color:"#A9A9A9"}}>ROUND I</div>
                    <div className="xl:test-xl md:text-base text-base text-white">SHORTLISTING</div>
                </div>
                <div className="xl:ml-8 md:ml-2 ml-2  xl:w-48 md:w-32 w-32 h-28 font-normal xl:text-sm md:text-xs text-xs p-1 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh nulla, vulputate fringilla tempor vitae
                </div>
            </div>

            {/* Third Column : Round-3 */}
            <div className="mt-1 ">
                <div className="xl:ml-8 md:ml-2 ml-2  xl:w-48 md:w-32 w-32 h-28 font-normal xl:text-sm md:text-xs text-xs p-1 hidden md:block xl:block text-white">
                </div>
                <div className="xl:mr-8 md:mr-2 mr-2  xl:w-48 md:w-32 w-32 h-28 flex justify-left items-end">
                    <div className="w-2/3 h-full xl:h-2/3 md:h-2/3 border-dashed border-white border-r-2 xl:border-t-2 md:border-t-2 border-t-0" ></div>
                </div>
                <div className="xl:ml-8 md:ml-2 ml-2  xl:w-48 md:w-32 w-36 h-26 rounded-xl xl:p-4 md:p-3 p-4" style={{backgroundColor:"#303030"}}>
                    <div className="xl:text-lg md:text-sm text-sm" style={{color:"#A9A9A9"}}>ROUND I</div>
                    <div className="xl:test-xl md:text-base text-base text-white">SHORTLISTING</div>
                </div>
                <div className="xl:ml-8 md:ml-2 ml-2  xl:w-48 md:w-32 w-32 h-28 font-normal xl:text-sm md:text-xs text-xs p-1 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh nulla, vulputate fringilla tempor vitae
                </div>
            </div>

            {/* Fourth Column : Round-4 */}
            <div className="mt-1 ">
                <div className="xl:ml-8 md:ml-2 ml-2  xl:w-48 md:w-32 w-32 h-28 font-normal xl:text-sm md:text-xs text-xs p-1 hidden md:block xl:block text-white">
                </div>
                <div className="xl:ml-8 md:ml-2 ml-2  xl:w-48 md:w-32 w-32 h-28 font-normal xl:text-sm md:text-xs text-xs p-1 hidden md:block xl:block text-white">
                </div>
                <div className="xl:mr-8 md:mr-2 mr-2  xl:w-48 md:w-32 w-32 h-28 flex justify-left items-end">
                    <div className="w-2/3 h-full xl:h-2/3 md:h-2/3 border-dashed border-white border-r-2 xl:border-t-2 md:border-t-2 border-t-0" ></div>
                </div>
                <div className="xl:ml-8 md:ml-2 ml-2   xl:w-48 md:w-32 w-36 h-26 rounded-xl xl:p-4 md:p-3 p-4" style={{backgroundColor:"#303030"}}>
                    <div className="xl:text-lg md:text-sm text-sm" style={{color:"#A9A9A9"}}>ROUND I</div>
                    <div className="xl:test-xl md:text-base text-base text-white">SHORTLISTING</div>
                </div>
                <div className="xl:ml-8 md:ml-2 ml-2  xl:w-48 md:w-32 w-32 h-28 font-normal xl:text-sm md:text-xs text-xs p-1 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh nulla, vulputate fringilla tempor vitae
                </div>
            </div>

        </div>
    </div>
  );
}

export default SessionLayout;