import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column-reverse',
    },
  },
  section: {
    width: '50%',
    borderRadius: '20px',
    margin: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  section1: {
    width: '100%',
  },
  imageSection: {
    marginLeft: '20px',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width: '100%',
    },
  },
  recommendedPosts: {
    display: 'flex',
    flexWrap:'wrap',
    flexDirection: 'column',
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    background:'transparent',
    height: '60vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width:"100%",
    paddingTop:"20px"
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
    width:"40%",
  },
}));