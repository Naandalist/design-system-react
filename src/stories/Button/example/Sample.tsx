import React from "react";
import Button from "../../../components/Button";

type Props = {};

const Sample = (props: Props) => {
  return (
    <Button state="primary" isDisabled={false} isLoading={false}>
      <button onClick={() => console.log("Hi, log!")}>Okay got it</button>
    </Button>
  );
};

export default Sample;
