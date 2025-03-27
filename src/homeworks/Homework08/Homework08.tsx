import "./styles.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { ChangeEvent, useState } from "react";

function Homework08() {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="homework08-container">
      <h2>Change password</h2>
      <Input
        name="password"
        label=" Password"
        id="password_id"
        placeholder=" Enter your password..."
        value={password}
        type="password"
        onChange={onChangePassword}
      />
      <Button name="SHOW PASSWORD" onClick={showPasswordHandler} />
      {showPassword && <div>{password}</div>}
    </div>
  );
}

export default Homework08;
