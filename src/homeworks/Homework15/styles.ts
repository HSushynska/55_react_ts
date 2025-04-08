import styled from "@emotion/styled";

export const Homework15Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 60px;
  background-color: rgb(102, 112, 151);
`;

export const Homework15Component = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 600px;
  padding: 40px;
  background-color: white;
  border: 2px solid black;
  border-radius: 6px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Checkbox = styled.input`
  width: 25px;
  height: 25px;
`;
export const CheckboxLabel = styled.label`
  font-size: 20px;
`;

export const ErrorMessage = styled.div`
  height: 20px;
  font-size: 18px;
  color: red;
`;
