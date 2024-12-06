import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState<string>('');

  const handleSend = () => {
    if (message.trim() !== '') {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Ingresa un mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        slotProps={{
            input: {                
                endAdornment:<InputAdornment position = "end">
                                <IconButton color="primary" onClick={handleSend}>
                                    <SendIcon style={{color:'black', transform: 'rotate(-45deg)'}} />
                                </IconButton>
                            </InputAdornment>
                } 
        }}
      />
    </div>
  );
};

export default ChatInput;
