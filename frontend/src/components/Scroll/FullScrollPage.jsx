
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'


const FullScrollPage = ({ children }) => {
    return (
      <Fullpage
      desktopForceStep={true}
      >
        <FullpageNavigation/>
        <FullPageSections>
          {children}
        </FullPageSections>
      </Fullpage>
    );
  };
  
export default FullScrollPage;