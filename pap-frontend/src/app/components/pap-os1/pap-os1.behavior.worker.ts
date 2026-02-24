/// <reference lib="webworker" />
import {
  OperatorScreenBehaviors,
  registerOperatorScreenBehavior
} from '@universal-robots/contribution-api';

const behaviors: OperatorScreenBehaviors = {
  factory: () => {
    return {
      type: "pc-gae-pap-pap-os1",
      version: "1.0.0",
    };
  },
};

registerOperatorScreenBehavior(behaviors);
