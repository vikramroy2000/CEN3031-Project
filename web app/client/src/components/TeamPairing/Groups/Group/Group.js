import React, { useState } from 'react';
import { Card, Typography,  CardHeader, CardActions, Button, Dialog } from '@material-ui/core';
import GroupDialog from './GroupDialog';
function DisplayGroup(props) {
    const { onClose, selectedValue, open, group } = props;
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <GroupDialog group={group} onClose={handleClose}/>
      </Dialog>
    )
  }

const Group = ({ group }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <Card style={{height: 225, width: 250}}>
            <CardHeader align="center" style={{backgroundColor: "#f57e42", body: "white"}} title={`Group ${group.num}`}></CardHeader>
            <div>
              {group.members && group.members.map((mem) => (
                <Typography key={mem._id} align="center" variant="body1">{`${mem.first} ${mem.last}`}</Typography>
              ))}
            </div>
            <CardActions>
                <Button style={{margin: "auto", backgroundColor: "#f57e42"}} size="small" onClick={handleOpen}>View Team</Button>
                <DisplayGroup group={group} open={open} onClose={handleClose}/>
            </CardActions>
        </Card>
    )
}
export default Group;