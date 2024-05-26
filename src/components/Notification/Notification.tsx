import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

type NotificationProps = {
    open: boolean;
    onClose: () => void;
    message: string;
    severity: 'success' | 'error' | 'warning' | 'info';
};

const Notification: React.FC<NotificationProps> = ({ open, onClose, message, severity }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert
                onClose={onClose}
                severity={severity}
                sx={{ width: '100%' }}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={onClose}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;
