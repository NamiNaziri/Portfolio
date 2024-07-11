
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from './es'


const FullScrollPage = ({ children }) => {
    return (
      <Fullpage
      transitionTiming={550}
      scrollLockTiming={130}
      
      desktopForceStep={true}
      >
        <FullpageNavigation itemStyle={{backgroundColor:"red"}}/>
        <FullPageSections >
          {children}
        </FullPageSections>
      </Fullpage>
    );
  };
  
export default FullScrollPage;