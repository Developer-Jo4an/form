import LabelInput from "../baseComponents/gui/form/LabelInput";
import Form from "../baseComponents/gui/form/Form";

const loginRules = {
  pattern: {
    value: /^[A-Za-z]+$/i,
    message: 'Только английские буквы допустимы'
  }
}

const passwordRules = {
  pattern: {
    value: /^[аеёиоуыэюя]{20,}$/i,
    message: 'Только русские гласные буквы допустимы, и длина должна быть больше 20'
  }
}

const onWatch = () => {
  console.log("watch");
}

const onValidation = isValid => {
  console.log(isValid);
}

const onSubmit = data => {
  console.log(data);
}

const FormWrapper = () => {
  return (
    <Form
      onWatch={onWatch}
      onValidation={onValidation}
      onSubmit={onSubmit}
    >
      <LabelInput
        name="login"
        label={<span className={'form__input-type'}>login</span>}
        labelProps={{ class: 'form__label' }}
        class={'form__input'}
        rules={loginRules}
      />
      <LabelInput
        name="password"
        label={<span className={'form__input-type'}>Password</span>}
        labelProps={{ class: 'form__label' }}
        class={'form__input'}
        rules={passwordRules}
      />
      <button>click</button>
    </Form>
  );
};

export default FormWrapper;
