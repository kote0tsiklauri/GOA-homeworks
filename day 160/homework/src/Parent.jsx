import { useId } from "react";
import FormField from './FormField';

function Parent() {
  const nameId = useId();
  const emailId = useId();

  return (
    <form>
      <FormField
        id={nameId}
        label="Name"
        type="text"
      />

      <FormField
        id={emailId}
        label="Email"
        type="email"
      />
    </form>
  );
}

export default Parent;