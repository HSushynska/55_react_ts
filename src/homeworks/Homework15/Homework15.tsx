import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Checkbox,
  ErrorMessage,
  CheckboxContainer,
  CheckboxLabel,
  Homework15Container,
  Homework15Component,
} from "./styles";
import { Homework15Values } from "./types";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Homework15() {
  const schema = Yup.object().shape({
    agreement: Yup.boolean().oneOf([true], "Accept agreement"),
    code: Yup.number()
      .typeError("Тип значения - число")
      .required("Поле Validation code является обязательным")
      .test(
        "min length",
        "Мin 6 символа",
        (value) => String(value).length >= 6
      ),
  });

  const formik = useFormik({
    initialValues: {
      agreement: false,
      code: "",
    } as Homework15Values,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: Homework15Values) => {
      console.table(values);
    },
  });

  console.log(formik);

  return (
    <Homework15Container>
      <Homework15Component onSubmit={formik.handleSubmit}>
        <Input
          name="code"
          label="Validation code *"
          id="code_id"
          placeholder="Enter code"
          type="number"
          value={formik.values.code}
          onChange={formik.handleChange}
          error={formik.errors.code}
        />

        <CheckboxContainer>
          <Checkbox
            name="agreement"
            type="checkbox"
            id="agree_id"
            checked={formik.values.agreement}
            onChange={formik.handleChange}
          />
          <CheckboxLabel htmlFor="agree_id">Privacy and policy</CheckboxLabel>
        </CheckboxContainer>
        <ErrorMessage>{formik.errors.agreement}</ErrorMessage>
        <Button name="Login" />
      </Homework15Component>
    </Homework15Container>
  );
}

export default Homework15;
