import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

import { ImageWrapper, Lesson13Container, Error, Img} from "./styles";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Input/Input";

function Lesson13(){
  const [image, setImage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [note, setNote] = useState<string>('');

  const onChangeNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  const getImage = async () => {
    setErrorMessage(undefined);
    setIsLoading(true)
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setImage(response.data.message);
    } catch (error: any) {
      setErrorMessage(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
     if(note.length > 0){
    getImage();
        }else{
    setImage("");
}
}, [note]);

    return (
        <Lesson13Container>
          <Button 
          name='GET MORE IMAGES' 
          onClick={getImage} 
          disabled={isLoading} 
          />
          <Input
        name='note'
        placeholder='Enter your note'
        value={note}
        onChange={onChangeNote}
         />
        <ImageWrapper>{isLoading ? <Spinner /> : <Img src = {image} />}</ImageWrapper>
           <Error>{errorMessage}</Error>
        </Lesson13Container>
        )
}
export default Lesson13