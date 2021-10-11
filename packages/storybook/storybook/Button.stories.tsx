import { Button } from "@coinbase/components";

import React from "react";

import CenterView from "./CenterView";

export default function ButtonStories() {
  return (
    <CenterView padding={20}>
      <Button text="Iniciar sessão" textStyle={{ color: "white" }} />
    </CenterView>
  );
}
