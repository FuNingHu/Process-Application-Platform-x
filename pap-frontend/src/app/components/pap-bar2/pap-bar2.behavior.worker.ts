import {
  registerSidebarBehavior,
  SidebarItemBehaviors,
} from "@universal-robots/contribution-api";

const behaviors: SidebarItemBehaviors = {
  factory: () => {
    return {
      type: "pc-gae-pap-pap-bar2",
      version: "1.0.0",
    };
  },
};

registerSidebarBehavior(behaviors);
