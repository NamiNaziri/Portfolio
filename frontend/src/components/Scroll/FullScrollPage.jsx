
import Grid from '@mui/material/Unstable_Grid2';
import './FullScrollPage.css';

const FullScrollPage = ({ children }) => {
    return (
      <div className="FullScrollPage">
        <Grid container direction="column" className="content">
          {children}
        </Grid>
      </div>
    );
  };
  
export default FullScrollPage;