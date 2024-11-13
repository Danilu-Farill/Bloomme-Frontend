import { Link } from 'react-router-dom';
import '../styles/Assistant.style.css';
import { useEffect, useState } from 'react';
import { useAssistantConnection } from '../services/Assistant.service';

interface AssistantData {
  assistant_id: number;
  image: string;
}

export const Assistant = ({text}: { text:string }) =>{
  const [assistantImage, setAssistantImage] = useState("");
  const {assistantApi} = useAssistantConnection();
  const assistantId = localStorage.getItem("assistant");

  useEffect(() => {
    const handleImage = async() => {
      const response: AssistantData[]  = await assistantApi();
      const parsedAssistantId = assistantId ? parseInt(assistantId) : null;

      if (parsedAssistantId !== null) {
        const assistantData = response.find((assistant) => assistant.assistant_id === parsedAssistantId);
        if (assistantData) {
          setAssistantImage(assistantData.image);
        }
      }
    };
    handleImage();
  }, [assistantId, assistantApi]);

  return(
    <div className="container-assistant-component">
      <div className="assistant-message-component border border-white">{text}</div>
      <Link to='/chat' className="assistant-image-component"><img src={assistantImage} alt="rabbit assistant" /></Link>
    </div>
  );
};