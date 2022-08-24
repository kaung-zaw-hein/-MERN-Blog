import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  media: {
    paddingTop: '350px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height:"auto",
    marginBottom: '10px',
    padding:"0",
    background:"#EDEDED",
    [theme.breakpoints.down('xs')]: {
      width:"100%",
    },
  },
  overlay: {
    display:"flex",
    justifyContent: 'space-between',
    padding:"10px"
  },
  overlay2: {
    display:"flex",
  },
  overlay3:{
    display:"flex",
    flexDirection:"column",
  },
  createdAt:{
    marginLeft:"10px"
  },
  content: {
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    justifyContent:"space-between",
    padding: '0 16px',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardActions: {
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
}));