import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function GutterlessList() {
  const [timerData, setTimerData] = React.useState(JSON.parse(localStorage.getItem("timerData")) || []);

  const convertToSeconds = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const updateTimerData = () => {
    const newData = JSON.parse(localStorage.getItem("timerData")) || [];
    setTimerData(newData);
  };

  React.useEffect(() => {
    const handleKeyDown = () => {
      updateTimerData();
    };
    
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); 

  const validData = timerData.map(item => {
    const parsedTime = convertToSeconds(item.time);
    if (!isNaN(parsedTime)) {
      return {
        ...item,
        time: parsedTime,
        formattedTime: formatTime(parsedTime),
      };
    }
    return null;
  }).filter(item => item !== null);

  const sortedData = validData.sort((a, b) => a.time - b.time);

  const topThreeTimes = sortedData.slice(0, 3);

  return (
    <List sx={{ width: '100%', maxWidth: 360}}>
      {topThreeTimes.map((data, index) => (
        <ListItem
          sx={{ margin: '0 10px', bgcolor: 'rgb(183, 52, 52)', border: '2px solid black'}}
          key={index}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <AccessTimeIcon />
            </IconButton>
          }
        >
        <ListItemText primary={`${index + 1}. ${data.formattedTime}`} secondary={ `${data.date}`} />
        </ListItem>
      ))}
    </List>
  );
}

const formatTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};
